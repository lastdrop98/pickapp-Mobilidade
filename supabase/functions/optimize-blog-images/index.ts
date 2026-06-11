// Optimizes all blog post cover images: downloads each image, resizes/compresses
// it, uploads a lighter JPEG to the `blog-images` bucket, and updates the
// blog_posts.cover_image URL. Runs with the service role (RLS bypass) so it can
// write to Storage. Idempotent: re-running re-optimizes from the current URL.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { Image } from "https://deno.land/x/imagescript@1.2.17/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const MAX_WIDTH = 1280;
const JPEG_QUALITY = 80;
const BUCKET = "blog-images";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, serviceKey);

  const results: Array<Record<string, unknown>> = [];

  try {
    const { data: posts, error } = await supabase
      .from("blog_posts")
      .select("id, slug, cover_image");
    if (error) throw error;

    for (const post of posts ?? []) {
      const src = post.cover_image as string | null;
      if (!src) {
        results.push({ slug: post.slug, status: "skipped: no cover" });
        continue;
      }
      // Skip if already optimized by this function.
      if (src.includes(`/${BUCKET}/optimized/`)) {
        results.push({ slug: post.slug, status: "already optimized" });
        continue;
      }

      try {
        const resp = await fetch(src);
        if (!resp.ok) throw new Error(`fetch ${resp.status}`);
        const inputBytes = new Uint8Array(await resp.arrayBuffer());
        const originalSize = inputBytes.byteLength;

        const image = await Image.decode(inputBytes);
        if (image.width > MAX_WIDTH) {
          image.resize(MAX_WIDTH, Image.RESIZE_AUTO);
        }
        const outputBytes = await image.encodeJPEG(JPEG_QUALITY);
        const newSize = outputBytes.byteLength;

        const path = `optimized/${post.slug}.jpg`;
        const { error: upErr } = await supabase.storage
          .from(BUCKET)
          .upload(path, outputBytes, {
            contentType: "image/jpeg",
            upsert: true,
            cacheControl: "31536000",
          });
        if (upErr) throw upErr;

        const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(path);
        const newUrl = pub.publicUrl;

        const { error: updErr } = await supabase
          .from("blog_posts")
          .update({ cover_image: newUrl })
          .eq("id", post.id);
        if (updErr) throw updErr;

        results.push({
          slug: post.slug,
          status: "optimized",
          originalKB: Math.round(originalSize / 1024),
          newKB: Math.round(newSize / 1024),
          newUrl,
        });
      } catch (e) {
        results.push({ slug: post.slug, status: `error: ${String(e)}` });
      }
    }

    return new Response(JSON.stringify({ ok: true, results }, null, 2), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(
      JSON.stringify({ ok: false, error: String(e), results }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
