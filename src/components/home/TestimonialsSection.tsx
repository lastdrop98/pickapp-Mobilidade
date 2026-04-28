import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Maria Fernandes",
    role: "Passageira",
    text: "A PickApp mudou a forma como me desloco em Maputo. É rápido, seguro e o preço é sempre justo. Recomendo a todos!",
    rating: 5,
    initials: "MF",
  },
  {
    name: "Carlos Nhampossa",
    role: "Motorista",
    text: "Comecei a trabalhar com a PickApp há 3 meses e os meus ganhos aumentaram. A flexibilidade de horários é incrível.",
    rating: 5,
    initials: "CN",
  },
  {
    name: "Ana Sitoe",
    role: "Passageira",
    text: "Uso a PickApp todos os dias para ir ao trabalho. O app é fácil de usar e os motoristas são muito profissionais.",
    rating: 5,
    initials: "AS",
  },
];

export const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            O que dizem sobre nós
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <ScrollReveal key={testimonial.name} delay={index * 0.1}>
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 h-full flex flex-col">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-5">
                <span className="text-accent font-extrabold text-lg">
                  {testimonial.initials}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
