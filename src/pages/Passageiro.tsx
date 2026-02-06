import { PageBanner } from "@/components/PageBanner";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Download,
  MapPin,
  Shield,
  CreditCard,
  CheckCircle,
  AlertTriangle,
  Users,
  Smartphone,
} from "lucide-react";
import { PLAYSTORE_URL } from "@/lib/constants";
import categoriesImage from "@/assets/pickapp-categories.jpeg";

const howToSteps = [
  {
    icon: Download,
    title: "Baixe o app",
    description: "Disponível gratuitamente na Google PlayStore.",
  },
  {
    icon: Smartphone,
    title: "Crie sua conta",
    description: "Registe-se com o seu número de telefone.",
  },
  {
    icon: MapPin,
    title: "Escolha o destino",
    description: "Digite para onde deseja ir no mapa.",
  },
  {
    icon: Shield,
    title: "Viaje seguro",
    description: "Um motorista próximo levará você com segurança.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Motoristas verificados",
    description: "Todos os motoristas passam por verificação rigorosa.",
  },
  {
    icon: CreditCard,
    title: "Preços transparentes",
    description: "Veja o valor antes de confirmar a viagem.",
  },
  {
    icon: MapPin,
    title: "Rastreamento em tempo real",
    description: "Acompanhe a rota durante toda a viagem.",
  },
  {
    icon: Users,
    title: "Avaliações de motoristas",
    description: "Veja as avaliações antes de embarcar.",
  },
];

const safetyTips = [
  "Confirme sempre a placa do veículo antes de entrar.",
  "Partilhe a sua viagem em tempo real com familiares.",
  "Use o botão de emergência do app se necessário.",
  "Avalie o motorista após cada viagem.",
  "Evite partilhar informações pessoais com o motorista.",
];

const Passageiro = () => (
  <>
    <PageBanner
      title="A Forma Mais Fácil de Se Deslocar"
      subtitle="Viagens seguras, rápidas e acessíveis em Maputo."
    />

    {/* How to use */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Como usar o PickApp
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {howToSteps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Nossas Categorias
            </h2>
            <p className="text-muted-foreground mt-2">
              Cada uma pensada para uma necessidade diferente
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <img
              src={categoriesImage}
              alt="Categorias PickApp - Básico, Premium, Família, Luxo, Txopela, Mota, O Amarelo"
              className="rounded-2xl shadow-lg w-full border border-border/50"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Segurança e Benefícios
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.08}>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <b.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Safety Tips */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <AlertTriangle className="w-10 h-10 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-extrabold text-foreground">
                Dicas para uma Viagem Segura
              </h2>
            </div>
            <div className="space-y-3">
              {safetyTips.map((tip, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-card rounded-xl px-5 py-4 border border-border/50"
                >
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Pronto para viajar?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8">
            Baixe o PickApp e comece a viajar com segurança e conforto.
          </p>
          <Button asChild variant="accent" size="lg">
            <a
              href={PLAYSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-5 h-5" />
              Baixar na PlayStore
            </a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Passageiro;
