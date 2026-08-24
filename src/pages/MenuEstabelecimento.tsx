import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ScrollReveal";
import { estabelecimentos } from "@/data/estabelecimentos";
import { getMenuImage } from "@/lib/menuImages";
import { PLAYSTORE_USER_URL, APPSTORE_USER_URL } from "@/lib/constants";

const MenuEstabelecimento = () => {
  const { slug } = useParams();
  const est = estabelecimentos.find((e) => e.slug === slug);

  if (!est) {
    return (
      <section className="container mx-auto px-4 py-40 text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-foreground">
          Estabelecimento não encontrado
        </h1>
        <Button asChild variant="accent">
          <Link to="/estabelecimentos">Ver todos os estabelecimentos</Link>
        </Button>
      </section>
    );
  }

  return (
    <>
      <SEO
        title={`${est.nome} — Menu e preços | PickApp`}
        description={`Menu completo do ${est.nome} em Maputo, com preços em MT. Peça já pela app PickApp.`}
        canonical={`/menu/${est.slug}`}
      />

      {/* Capa */}
      <section className="relative h-[38vh] min-h-[260px] w-full overflow-hidden bg-primary pt-16 md:h-[48vh] md:pt-20">
        <img
          src={est.coverUrl}
          alt={`Capa do ${est.nome}`}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/40" />
      </section>

      {/* Cabeçalho */}
      <section className="relative z-10 -mt-16 pb-10">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-border/50 bg-card/80 p-6 shadow-lg backdrop-blur-md md:p-8">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-background/70 p-2 shadow-sm">
                <img
                  src={est.logoUrl}
                  alt={`Logótipo do ${est.nome}`}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  {est.categoria}
                </span>
                <h1 className="mt-1 text-2xl font-extrabold text-foreground md:text-4xl">
                  {est.nome}
                </h1>
                <p className="mt-3 flex items-start justify-center gap-2 text-sm text-muted-foreground md:justify-start">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {est.morada}
                </p>
                <p className="mt-1 flex items-start justify-center gap-2 text-sm text-muted-foreground md:justify-start">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {est.horario}
                </p>
              </div>
            </div>
            <Button asChild variant="ghost" size="sm" className="mt-6">
              <Link to="/estabelecimentos">
                <ArrowLeft className="h-4 w-4" />
                Voltar aos estabelecimentos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="pb-40 pt-4">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            {est.menu.map((cat, i) => (
              <ScrollReveal key={cat.categoria} delay={Math.min(i, 4) * 0.05}>
                <div className="rounded-2xl border border-border/50 bg-card/70 p-6 shadow-sm backdrop-blur-md md:p-8">
                  <h2 className="mb-5 text-xl font-extrabold text-foreground md:text-2xl">
                    {cat.categoria}
                  </h2>
                  <ul className="divide-y divide-border/50">
                    {cat.itens.map((item) => (
                      <li
                        key={item.nome}
                        className="flex items-center justify-between gap-4 py-3"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <img
                            src={getMenuImage(cat.categoria)}
                            alt={item.nome}
                            loading="lazy"
                            decoding="async"
                            className="h-14 w-14 shrink-0 rounded-xl object-cover shadow-sm md:h-16 md:w-16"
                          />
                          <span className="text-sm text-foreground md:text-base">
                            {item.nome}
                          </span>
                        </div>
                        <span className="shrink-0 font-bold text-accent">
                          {item.preco} MT
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco fixo de download */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-primary-foreground/10 bg-primary/90 backdrop-blur-md">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row">
          <p className="text-sm font-bold text-primary-foreground">
            Peça já pela App PickApp
          </p>
          <div className="flex w-full gap-2 sm:w-auto">
            <Button asChild variant="accent" size="sm" className="flex-1 sm:flex-none">
              <a href={PLAYSTORE_USER_URL} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Google Play
              </a>
            </Button>
            <Button asChild size="sm" className="flex-1 sm:flex-none">
              <a href={APPSTORE_USER_URL} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                App Store
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuEstabelecimento;
