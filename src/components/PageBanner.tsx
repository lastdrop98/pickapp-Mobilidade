import { ScrollReveal } from "./ScrollReveal";

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

export const PageBanner = ({ title, subtitle }: PageBannerProps) => (
  <section className="bg-primary pt-32 pb-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/10" />
    <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
    <div className="container mx-auto px-4 relative z-10 text-center">
      <ScrollReveal>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </ScrollReveal>
    </div>
  </section>
);
