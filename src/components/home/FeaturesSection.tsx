import {
  Shield,
  DollarSign,
  Clock,
  CreditCard,
  Zap,
  Download,
  MapPin,
  Car,
  Star,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BgImage } from "@/components/BgImage";
import howItWorksBgSet from "@/assets/section-how-it-works.jpg?w=640;1024;1600;1920&format=webp&quality=90&as=srcset";
import howItWorksBgSrc from "@/assets/section-how-it-works.jpg?w=1600&format=webp&quality=90";

const whyFeatures = [
  {
    icon: DollarSign,
    title: "Preço Justo",
    description: "Sem surpresas. Saiba o valor da viagem antes de confirmar.",
  },
  {
    icon: Shield,
    title: "Segurança 24h",
    description: "Acompanhamento em tempo real e suporte disponível.",
  },
  {
    icon: Star,
    title: "Motoristas Verificados",
    description: "Todos passam por verificação rigorosa.",
  },
  {
    icon: CreditCard,
    title: "Pagamento Fácil",
    description: "Dinheiro ou pagamento digital, sem complicações.",
  },
  {
    icon: Zap,
    title: "Rapidez",
    description: "Motoristas próximos para atendimento ágil.",
  },
];

const steps = [
  {
    number: "01",
    title: "Baixe o App",
    description: "Download gratuito na PlayStore.",
    icon: Download,
  },
  {
    number: "02",
    title: "Escolha o Destino",
    description: "Digite para onde deseja ir.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Solicite a Viagem",
    description: "Confirme e aguarde o motorista.",
    icon: Car,
  },
  {
    number: "04",
    title: "Viaje Seguro",
    description: "Acompanhe a rota em tempo real.",
    icon: Shield,
  },
  {
    number: "05",
    title: "Avalie",
    description: "Deixe sua avaliação após a viagem.",
    icon: Star,
  },
];

export const FeaturesSection = () => (
  <>
    {/* Por que escolher */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Vantagens
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
              Por que escolher a PickApp?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {whyFeatures.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <div className="card-interactive group bg-card/70 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-border/50 hover:border-accent/40 h-full">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transform-none">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-accent">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Como funciona */}
    <section className="relative py-20 md:py-28 overflow-hidden min-h-[500px] flex items-center">
      <div className="absolute inset-0">
        <BgImage
          srcSet={howItWorksBgSet}
          src={howItWorksBgSrc}
          alt="Passageira em Maputo a pedir uma viagem PickApp pelo telemóvel"
          className="object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/45" />
      <div className="container mx-auto px-4 relative z-10 w-full">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Passo a passo
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mt-2 drop-shadow">
              Como funciona?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.1}>
              <div className="card-interactive text-center bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/15 hover:border-accent/40 shadow-sm h-full">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-extrabold shadow-lg">
                  {step.number}
                </div>
                <h3 className="font-bold text-primary-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-primary-foreground/75">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);
