import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import {
  PLAYSTORE_USER_URL,
  APPSTORE_USER_URL,
  PLAYSTORE_DRIVER_URL,
  APPSTORE_DRIVER_URL,
  SUPPORT_EMAIL,
  PHONE_NUMBER,
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/lib/constants";
import logo from "@/assets/pickapp-logo-footer.jpeg";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Motorista", path: "/motorista" },
  { name: "Passageiro", path: "/passageiro" },
  { name: "Sobre Nós", path: "/sobre" },
  { name: "Contactos", path: "/contactos" },
];

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="PickApp" className="h-16 w-auto rounded-lg bg-white p-2" />
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Mobilidade inteligente em Moçambique. Viagens seguras, rápidas e com
            preços justos.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">
            Navegação
          </h4>
          <div className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">
            Contacto
          </h4>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              {SUPPORT_EMAIL}
            </a>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" />
              {PHONE_NUMBER}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              {WHATSAPP_DISPLAY}
            </a>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <MapPin className="w-4 h-4 shrink-0" />
              Maputo, Moçambique
            </div>
          </div>
        </div>

        {/* Social + Download */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">
            Redes Sociais
          </h4>
          <div className="flex gap-3 mb-6">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="space-y-5">
            <div>
              <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider text-accent">
                App Passageiro
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href={PLAYSTORE_USER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground rounded-xl text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  Google Play
                </a>
                <a
                  href={APPSTORE_USER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-foreground/10 text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary-foreground/20 transition-colors"
                >
                  App Store
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider text-accent">
                App Motorista
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href={PLAYSTORE_DRIVER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground rounded-xl text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  Google Play
                </a>
                <a
                  href={APPSTORE_DRIVER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-foreground/10 text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary-foreground/20 transition-colors"
                >
                  App Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
        © {new Date().getFullYear()} PickApp. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);
