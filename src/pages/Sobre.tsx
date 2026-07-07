import { PageBanner } from "@/components/PageBanner";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SEO } from "@/components/SEO";
import { Target, Eye, Heart } from "lucide-react";
import sobreBgSet from "@/assets/sobre-bg.jpg?w=640;1024;1600;1920&format=webp&as=srcset";
import sobreBgSrc from "@/assets/sobre-bg.jpg?w=1600&format=webp";

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Democratizar a mobilidade urbana em Moçambique, oferecendo viagens seguras, acessíveis e de qualidade para todos.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser a principal plataforma de mobilidade urbana em Moçambique, conectando pessoas e transformando cidades.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Segurança, transparência, inovação, respeito e compromisso com a comunidade local.",
  },
];

const Sobre = () => (
  <>
    <SEO
      title="Sobre a PickApp — Nossa Missão e Visão"
      description="Conheça a história da PickApp, a plataforma de mobilidade urbana de Moçambique. Missão, visão e valores que nos guiam."
      canonical="/sobre"
    />
    <PageBanner
      title="Sobre a PickApp"
      subtitle="Conheça a nossa história e a equipa por trás da mobilidade inteligente."
      bgSrcSet={sobreBgSet}
      bgSrc={sobreBgSrc}
      bgAlt="Vista aérea da cidade de Maputo, Moçambique"
    />

    {/* Story */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-foreground mb-6">
              A Nossa História
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A PickApp nasceu da necessidade de transformar a mobilidade
                urbana em Moçambique. Fundada em Maputo, a nossa plataforma
                conecta passageiros a motoristas verificados, oferecendo viagens
                seguras, rápidas e com preços justos.
              </p>
              <p>
                Acreditamos que a mobilidade é um direito de todos. Por isso,
                desenvolvemos uma solução tecnológica adaptada à realidade local,
                com foco na experiência do utilizador e na valorização dos
                motoristas parceiros.
              </p>
              <p>
                Hoje, a PickApp opera em Maputo e Matola, com planos de expansão
                para outras cidades de Moçambique. A nossa equipa trabalha
                diariamente para melhorar o serviço e oferecer a melhor
                experiência de mobilidade possível.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Mission, Vision, Values */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Missão, Visão e Valores
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 text-center h-full">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

  </>
);

export default Sobre;
