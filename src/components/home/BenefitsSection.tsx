import {
  MapPin,
  Zap,
  CreditCard,
  Headphones,
  Clock,
  DollarSign,
  Shield,
  Wallet,
  Users,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import driverBenefitsBg from "@/assets/driver-benefits-bg.jpg";

const passengerBenefits = [
  {
    icon: DollarSign,
    title: "Viagem Mínima Acessível",
    description: "Valores que cabem no seu bolso.",
  },
  {
    icon: MapPin,
    title: "Motoristas Próximos",
    description: "Sempre há um motorista perto de si.",
  },
  {
    icon: Zap,
    title: "Atendimento Rápido",
    description: "Sem longas esperas.",
  },
  {
    icon: CreditCard,
    title: "Pagamento Digital",
    description: "Opções de pagamento modernas.",
  },
  {
    icon: Headphones,
    title: "Suporte em Maputo",
    description: "Equipa local pronta para ajudar.",
  },
];

const driverBenefits = [
  {
    icon: DollarSign,
    title: "Ganhos Diários",
    description: "Receba pelos seus serviços todos os dias.",
  },
  {
    icon: Clock,
    title: "Trabalhe no Seu Ritmo",
    description: "Flexibilidade total de horários.",
  },
  {
    icon: MapPin,
    title: "Zonas Estratégicas",
    description: "Mais chamadas onde há mais demanda.",
  },
  {
    icon: Shield,
    title: "Segurança e Suporte",
    description: "Apoio contínuo para motoristas.",
  },
  {
    icon: Wallet,
    title: "Pagamentos Claros",
    description: "Transparência total nos ganhos.",
  },
  {
    icon: Users,
    title: "Sem Burocracia",
    description: "Cadastro simples e rápido.",
  },
];

export const BenefitsSection = () => (
  <>
    {/* Passageiros */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Para passageiros
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
              Benefícios para Passageiros
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {passengerBenefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 0.08}>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-all h-full text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Motoristas */}
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Para motoristas
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Benefícios para Motoristas
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {driverBenefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 0.08}>
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:border-accent/30 transition-all h-full text-center">
                <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-primary-foreground/60">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);
