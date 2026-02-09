import { Button } from "@/components/ui/button";
import { Download, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PLAYSTORE_USER_URL, APPSTORE_USER_URL } from "@/lib/constants";
import heroImage from "@/assets/hero-mobility.jpg";
import heroBg from "@/assets/hero-driver-bg.jpg";

export const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" loading="eager" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[100px]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px]" />

    <div className="container mx-auto px-4 relative z-10 pt-28 pb-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-accent text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Disponível em Maputo
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
              PickApp — Mobilidade Inteligente em{" "}
              <span className="text-accent">Moçambique</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/75 mb-10 leading-relaxed">
              Viagens seguras, rápidas e com preços justos em Maputo. A nova
              forma de se deslocar pela cidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="accent" size="lg">
                <a
                  href={PLAYSTORE_USER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5" />
                  Google Play
                </a>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <a
                  href={APPSTORE_USER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5" />
                  App Store
                </a>
              </Button>
            </div>
            <div className="mt-4">
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/motorista">
                  <UserPlus className="w-5 h-5" />
                  Cadastrar como Motorista
                </Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.2}>
          <div className="relative hidden lg:block">
            <img
              src={heroImage}
              alt="PickApp mobilidade urbana em Maputo"
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              loading="eager"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center">
                  <span className="text-accent text-lg font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground text-sm">
                    Viagem confirmada
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Motorista a caminho • 3 min
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);
