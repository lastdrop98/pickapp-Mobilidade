import { writeFileSync } from "fs";
import { resolve } from "path";
import { createClient } from "@supabase/supabase-js";

const BASE_URL = "https://pickapp-mobilidade.lovable.app";
const SUPABASE_URL = "https://uvlhbcovguyiihbojcyz.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2bGhiY292Z3V5aWloYm9qY3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2MjU1ODUsImV4cCI6MjA4NjIwMTU4NX0.5bEZUlZZ2xDKc46OEKqrg-U3RnOgIDNT5NAZF1YD46c";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const today = new Date().toISOString().split("T")[0];

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/sobre", changefreq: "monthly", priority: "0.7" },
  { path: "/passageiro", changefreq: "monthly", priority: "0.9" },
  { path: "/motorista", changefreq: "monthly", priority: "0.9" },
  { path: "/contactos", changefreq: "monthly", priority: "0.6" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
];

async function fetchBlogEntries(): Promise<SitemapEntry[]> {
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data, error } = await supabase
      .from("blog_posts")
      .select("slug, published_at")
      .eq("published", true)
      .order("published_at", { ascending: false });
    if (error || !data) return [];
    return data.map((p) => ({
      path: `/blog/${p.slug}`,
      lastmod: (p.published_at as string).split("T")[0],
      changefreq: "monthly",
      priority: "0.7",
    }));
  } catch (e) {
    console.warn("Could not fetch blog posts for sitemap:", e);
    return [];
  }
}

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${e.lastmod ?? today}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

(async () => {
  const blogEntries = await fetchBlogEntries();
  const entries = [...staticEntries, ...blogEntries];
  writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
  console.log(`sitemap.xml written (${entries.length} entries, ${blogEntries.length} blog posts)`);
})();
