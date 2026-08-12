import {
  UtensilsCrossed,
  ShoppingCart,
  Wine,
  Pill,
  Search,
  ClipboardList,
  MapPin,
  PackageCheck,
  BadgeCheck,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TiltCard } from "@/components/TiltCard";
import { FloatingBlobs } from "@/components/FloatingBlobs";
import { PLAYSTORE_USER_URL, APPSTORE_USER_URL } from "@/lib/constants";

const categories = [
  {
    icon: UtensilsCrossed,
    title: "Restaurantes",
    text: "Peça o seu prato favorito dos melhores restaurantes da cidade.",
  },
  {
    icon: ShoppingCart,
    title: "Supermercados",
    text: "Compras do dia a dia entregues à sua porta, sem filas.",
  },
  {
    icon: Wine,
    title: "Bottle Stores",
    text: "Bebidas geladas para a sua festa, entregues em minutos.",
  },
  {
    icon: Pill,
    title: "Farmácias",
    text: "Medicamentos e produtos de saúde com entrega rápida e discreta.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Escolhe o estabelecimento",
    text: "Restaurantes, supermercados, bottle stores ou farmácias perto de si.",
  },
  {
    icon: ClipboardList,
    title: "Faz o pedido",
    text: "Adiciona os produtos ao carrinho e confirma no app.",
  },
  {
    icon: MapPin,
    title: "Acompanha em tempo real",
    text: "Veja o estafeta a caminho, passo a passo, no mapa.",
  },
  {
    icon: PackageCheck,
    title: "Recebe em casa",
    text: "O seu pedido chega onde estiver, com preço justo e sem surpresas.",
  },
];

export const ConvenienceSection = ({
  showHeading = true,
}: {
  showHeading?: boolean;
}) => (
  <section
    id="conveniencia"
    className="relative overflow-hidden py-20 md:py-28 scroll-mt-24"
  >
    <FloatingBlobs />

    <div className="container relative z-10 mx-auto px-4">
      {showHeading && (
        <ScrollReveal>
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Novo na PickApp
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-foreground md:text-4xl">
              Serviços de Conveniência
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Muito mais do que viagens. Agora a PickApp leva-lhe também comida,
              compras, bebidas e medicamentos até à porta de casa.
            </p>
          </div>
        </ScrollReveal>
      )}

      {/* Como funciona */}
      <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <ScrollReveal key={step.title} delay={i * 0.1}>
            <div className="group relative h-full rounded-2xl border border-border/50 bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="absolute right-5 top-4 text-4xl font-extrabold text-accent/10">
                {i + 1}
              </span>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none">
                <step.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-1 font-bold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Categorias */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat, i) => (
          <ScrollReveal key={cat.title} delay={i * 0.1}>
            <TiltCard className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-border/50 bg-card p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 motion-reduce:transform-none">
                  <cat.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-extrabold text-foreground">
                  {cat.title}
                </h3>
                <p className="mb-5 flex-1 text-sm text-muted-foreground">
                  {cat.text}
                </p>
                <span className="inline-flex items-center gap-2 self-start rounded-full bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Entrega feita pela nossa rede de estafetas
                </span>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>

      {/* CTA */}
      <ScrollReveal delay={0.15}>
        <div className="mt-16 rounded-3xl border border-border/50 bg-card/80 p-10 text-center backdrop-blur-sm md:p-14">
          <h3 className="text-2xl font-extrabold text-foreground md:text-3xl">
            Descarrega já o PickApp
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Viagens e entregas na mesma aplicação. Simples, rápido e a preço
            justo.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild variant="accent" size="lg">
              <a href={PLAYSTORE_USER_URL} target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5" />
                Google Play — Passageiro
              </a>
            </Button>
            <Button asChild size="lg">
              <a href={APPSTORE_USER_URL} target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5" />
                App Store — Passageiro
              </a>
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
