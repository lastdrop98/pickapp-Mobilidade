import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { PageBanner } from "@/components/PageBanner";
import { ScrollReveal } from "@/components/ScrollReveal";
import { estabelecimentos } from "@/data/estabelecimentos";
import bannerSet from "@/assets/page-estabelecimentos.jpg?w=640;1024;1600;1920&format=webp&quality=90&as=srcset";
import bannerSrc from "@/assets/page-estabelecimentos.jpg?w=1600&format=webp&quality=90";

const Estabelecimentos = () => (
  <>
    <SEO
      title="Estabelecimentos parceiros | PickApp Moçambique"
      description="Conheça os restaurantes parceiros da PickApp em Maputo e veja os menus completos com preços em MT."
      canonical="/estabelecimentos"
    />
    <PageBanner
      title="Estabelecimentos"
      subtitle="Os nossos restaurantes parceiros em Maputo. Veja o menu e peça já pela app."
      imageSrcSet={bannerSet}
      imageSrc={bannerSrc}
      imageAlt="Restaurante parceiro da PickApp em Maputo"
    />

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {estabelecimentos.map((e, i) => (
            <ScrollReveal key={e.slug} delay={i * 0.1}>
              <article className="card-interactive group flex h-full flex-col rounded-2xl border border-border/50 bg-card/70 p-6 shadow-sm backdrop-blur-md hover:border-accent/40">
                <div className="mb-5 flex h-32 items-center justify-center overflow-hidden rounded-xl bg-background/60 p-3">
                  <img
                    src={e.logoUrl}
                    alt={`Logótipo do ${e.nome}`}
                    className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none"
                    loading="lazy"
                  />
                </div>
                <h2 className="mb-2 text-xl font-extrabold text-foreground transition-colors group-hover:text-accent">
                  {e.nome}
                </h2>
                <p className="mb-1 flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {e.morada}
                </p>
                <p className="mb-6 flex items-start gap-2 text-sm text-muted-foreground">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {e.horario}
                </p>
                <Button asChild variant="accent" className="mt-auto w-full">
                  <Link to={`/menu/${e.slug}`}>
                    Ver Menu
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Estabelecimentos;
