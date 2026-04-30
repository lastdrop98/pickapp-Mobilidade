import passengerHeaderBg from "@/assets/pickapp-passenger-header.jpg";
import passengerBenefitsBg from "@/assets/passenger-benefits-bg.jpg";
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
  DollarSign,
  Zap,
  Headphones,
} from "lucide-react";
import { PLAYSTORE_USER_URL, APPSTORE_USER_URL } from "@/lib/constants";
import categoriesImage from "@/assets/pickapp-categories-new.jpeg";
import passengerPromo from "@/assets/pickapp-passenger-promo.jpg";
import passengerDiscount from "@/assets/pickapp-passenger-discount.jpeg";
import { useState, useEffect } from "react";

const howToSteps = [
  {
    icon: Download,
    title: "Baixe o app",
    description: "Disponível gratuitamente na Google PlayStore e App Store.",
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

const passengerHighlights = [
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
    title: "Suporte em Moçambique",
    description: "Equipa local pronta para ajudar.",
  },
];

const safetyTips = [
  "Confirme sempre a placa do veículo antes de entrar.",
  "Partilhe a sua viagem em tempo real com familiares.",
  "Use o botão de emergência do app se necessário.",
  "Avalie o motorista após cada viagem.",
  "Evite partilhar informações pessoais com o motorista.",
];

const carouselImages = [
  { src: categoriesImage, alt: "Categorias PickApp" },
  { src: passengerPromo, alt: "PickApp - Atendimento de alto nível" },
  { src: passengerDiscount, alt: "PickApp - 15% desconto nas primeiras viagens" },
];

const Passageiro = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={passengerHeaderBg} alt="Passageiros PickApp" className="w-full h-full object-cover" loading="eager" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              A Forma Mais Fácil de Se Deslocar
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Viagens seguras, rápidas e acessíveis em todo Moçambique.
            </p>
          </ScrollReveal>
        </div>
      </section>

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


      {/* Safety section with background image */}
      <section className="relative py-20 md:py-28 text-primary-foreground overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={passengerBenefitsBg}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10 w-full">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Sua segurança em primeiro lugar
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                Viaje com total tranquilidade
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <ScrollReveal key={`safety-${b.title}`} delay={i * 0.08}>
                <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:border-accent/30 transition-all h-full text-center">
                  <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <b.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">{b.title}</h3>
                  <p className="text-sm text-primary-foreground/70">
                    {b.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* Carousel */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Conheça o PickApp
              </h2>
              <p className="text-muted-foreground mt-2">
                Tudo pensado para a sua comodidade
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="max-w-4xl mx-auto relative overflow-hidden rounded-2xl shadow-lg border border-border/50">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselImages.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    className="w-full flex-shrink-0 object-contain"
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === i
                        ? "bg-accent scale-110"
                        : "bg-primary-foreground/40"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Passageiro;
