import { Link } from "react-router-dom";
import { Users, Car, ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ScrollReveal } from "@/components/ScrollReveal";

const RoleSelectorSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Comece já
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            Como pretende usar a PickApp?
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Escolha o seu perfil para descobrir tudo o que preparámos para si.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <ScrollReveal>
          <Link
            to="/passageiro"
            className="group block bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border/50 hover:border-accent hover:shadow-lg transition-all h-full"
          >
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
              <Users className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-extrabold text-foreground mb-2">
              Sou Passageiro
            </h3>
            <p className="text-muted-foreground mb-6">
              Viaje com segurança, conforto e preços justos em todo Moçambique.
            </p>
            <span className="inline-flex items-center gap-2 text-accent font-semibold">
              Ver mais
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Link
            to="/motorista"
            className="group block bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border/50 hover:border-accent hover:shadow-lg transition-all h-full"
          >
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
              <Car className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-extrabold text-foreground mb-2">
              Sou Motorista
            </h3>
            <p className="text-muted-foreground mb-6">
              Ganhe dinheiro com flexibilidade e cresça com a maior comunidade
              de motoristas.
            </p>
            <span className="inline-flex items-center gap-2 text-accent font-semibold">
              Ver mais
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

const Index = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <RoleSelectorSection />
    <TestimonialsSection />
    <FAQSection />
  </>
);

export default Index;
