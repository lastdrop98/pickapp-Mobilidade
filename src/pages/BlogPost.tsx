import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Passageiros" | "Motoristas" | "Comunicados";
  cover_image: string | null;
  author: string;
  published_at: string;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();
      if (error || !data) {
        setNotFound(true);
      } else {
        setPost(data as BlogPost);
      }
      setLoading(false);
    })();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 text-center text-muted-foreground">
        A carregar artigo...
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Artigo não encontrado</h1>
        <Button asChild variant="accent">
          <Link to="/blog">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Blog
          </Link>
        </Button>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published_at,
    author: { "@type": "Organization", name: post.author },
    image: post.cover_image ?? undefined,
    mainEntityOfPage: `https://pickapp-mobilidade.lovable.app/blog/${post.slug}`,
  };

  return (
    <>
      <SEO
        title={`${post.title} | Blog PickApp`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        type="article"
        image={post.cover_image ?? undefined}
        ogTitle={post.title}
        ogDescription={post.excerpt}
        jsonLd={jsonLd}
      />

      <article className="pt-28 md:pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar ao Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(post.published_at)}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {post.cover_image && (
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-auto rounded-2xl mb-10"
              />
            )}

            <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-accent prose-li:text-muted-foreground prose-hr:border-border">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPostPage;
