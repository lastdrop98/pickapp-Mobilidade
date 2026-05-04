import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PLAYSTORE_USER_URL, APPSTORE_USER_URL } from "@/lib/constants";
import qrImage from "@/assets/pickapp-qr.jpeg";

export const DownloadSection = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="bg-card rounded-3xl p-10 md:p-16 shadow-lg border border-border/50">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Text + CTA */}
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                  Baixe agora e experimente
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  A nova forma de se deslocar em Maputo. Disponível gratuitamente
                  na PlayStore e App Store.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button asChild variant="accent" size="lg">
                    <a
                      href={PLAYSTORE_USER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-5 h-5" />
                      Google Play — Passageiro
                    </a>
                  </Button>
                  <Button asChild variant="default" size="lg">
                    <a
                      href={APPSTORE_USER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-5 h-5" />
                      App Store — Passageiro
                    </a>
                  </Button>
                </div>
              </div>

              {/* QR Code Image */}
              <div className="flex justify-center">
                <img
                  src={qrImage}
                  alt="QR Codes PickApp - Play Store e App Store"
                  className="rounded-2xl shadow-md max-w-xs w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);
