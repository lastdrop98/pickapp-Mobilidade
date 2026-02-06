import { Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PLAYSTORE_URL } from "@/lib/constants";

export const DownloadSection = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="bg-card rounded-3xl p-10 md:p-16 shadow-lg border border-border/50">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Baixe agora e experimente
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              A nova forma de se deslocar em Maputo. Disponível gratuitamente na
              PlayStore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            </div>
            {/* QR Code placeholder */}
            <div className="mt-8 inline-flex flex-col items-center">
              <div className="w-32 h-32 border-2 border-dashed border-border rounded-xl flex items-center justify-center bg-muted/50">
                <span className="text-xs text-muted-foreground text-center px-2">
                  QR Code
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Escaneie para baixar
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);
