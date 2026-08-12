import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PageBanner } from "@/components/PageBanner";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, Calendar } from "lucide-react";
import bannerSet from "@/assets/page-blog.jpg?w=640;1024;1600;1920&format=webp&quality=85&as=srcset";
import bannerSrc from "@/assets/page-blog.jpg?w=1600&format=webp&quality=85";

type Category = "Todos" | "Passageiros" | "Motoristas" | "Comunicados";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Passageiros" | "Motoristas" | "Comunicados";
  cover_image: string | null;
  author: string;
  published_at: string;
}

const CATEGORIES: Category[] = ["Todos", "Passageiros", "Motoristas", "Comunicados"];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filter, setFilter] = useState<Category>("Todos");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("id, slug, title, excerpt, category, cover_image, author, published_at")
        .eq("published", true)
        .order("published_at", { ascending: false });
      setPosts((data ?? []) as BlogPost[]);
      setLoading(false);
    })();
  }, []);

  const visible = filter === "Todos" ? posts : posts.filter((p) => p.category === filter);

  return (
    <>
      <SEO
        title="Blog PickApp — Novidades sobre mobilidade em Moçambique"
        description="Dicas, histórias e atualizações da PickApp para passageiros e motoristas em Maputo e Matola."
        canonical="/blog"
        keywords="blog PickApp, mobilidade Moçambique, dicas táxi Maputo, novidades motoristas"
      />
      <PageBanner
      imageSrcSet={bannerSet}
      imageSrc={bannerSrc}
      imageAlt="Mobilidade urbana em Maputo ao pôr do sol"
        title="Blog PickApp"
        subtitle="Histórias, dicas e novidades sobre a mobilidade em Moçambique."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  filter === c
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-card text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {loading ? (
            <p className="text-center text-muted-foreground">A carregar artigos...</p>
          ) : visible.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Ainda não há artigos nesta categoria.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {visible.map((post, i) => (
                <ScrollReveal key={post.id} delay={i * 0.05}>
                  <article className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
                    {post.cover_image && (
                      <Link to={`/blog/${post.slug}`} className="block aspect-video overflow-hidden bg-muted">
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </Link>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.published_at)}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-foreground mb-3 leading-snug">
                        <Link to={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                        {post.excerpt}
                      </p>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
                      >
                        Ler mais <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
