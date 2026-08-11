import { Car, Users, MapPin, Star } from "lucide-react";
import { CountUp } from "@/components/CountUp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FloatingBlobs } from "@/components/FloatingBlobs";

const stats = [
  { icon: Car, end: 850, suffix: "+", label: "Motoristas parceiros" },
  { icon: Users, end: 1500, suffix: "+", label: "Utilizadores activos" },
  { icon: MapPin, end: 20000, suffix: "+", label: "Viagens realizadas" },
  { icon: Star, end: 5, suffix: "%", label: "Comissão para motoristas" },
];

export const StatsSection = () => (
  <section className="relative overflow-hidden bg-primary py-16 md:py-20">
    <FloatingBlobs variant="soft" />
    <div className="container relative z-10 mx-auto px-4">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 0.1}>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-foreground/10">
                <s.icon className="h-6 w-6 text-accent" />
              </div>
              <p className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
                <CountUp end={s.end} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-primary-foreground/70">
                {s.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
