import { PageBanner } from "@/components/PageBanner";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Target, Eye, Heart, Users } from "lucide-react";

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

const team = [
  {
    name: "João Macamo",
    role: "CEO & Fundador",
    bio: "Empreendedor apaixonado por tecnologia e mobilidade urbana em África.",
    initials: "JM",
  },
  {
    name: "Lúcia Tembe",
    role: "CTO",
    bio: "Engenheira de software com experiência em startups de tecnologia.",
    initials: "LT",
  },
  {
    name: "Pedro Mazive",
    role: "Director de Operações",
    bio: "Especialista em logística e operações com foco no mercado moçambicano.",
    initials: "PM",
  },
];

const Sobre = () => (
  <>
    <PageBanner
      title="Sobre a PickApp"
      subtitle="Conheça a nossa história e a equipa por trás da mobilidade inteligente."
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

    {/* Team */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Nossa Equipa
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-accent font-extrabold text-xl">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-accent font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Sobre;
