import { useState } from "react";
import { PageBanner } from "@/components/PageBanner";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { SUPPORT_EMAIL, PHONE_NUMBER, WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/constants";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: SUPPORT_EMAIL,
    href: `mailto:${SUPPORT_EMAIL}`,
  },
  {
    icon: Phone,
    label: "Telefone",
    value: PHONE_NUMBER,
    href: `tel:${PHONE_NUMBER.replace(/\s/g, "")}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    href: WHATSAPP_URL,
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Maputo, Moçambique",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg - Sex: 8h - 18h",
    href: undefined,
  },
];

const Contactos = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.assunto || "Contacto via website");
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nEmail: ${form.email}\n\n${form.mensagem}`
    );
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
    toast.success("A abrir o seu email...");
    setForm({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  return (
    <>
      <PageBanner
        title="Contacte-nos"
        subtitle="Estamos aqui para ajudar. Entre em contacto connosco."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info + Map */}
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h2 className="text-2xl font-extrabold text-foreground">
                  Informações de Contacto
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground font-medium hover:text-accent transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Button asChild variant="accent" size="lg" className="mt-4">
                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                      "Olá, preciso de ajuda com a PickApp!"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Falar no WhatsApp
                  </a>
                </Button>

                {/* Map */}
                <div className="mt-6 rounded-2xl overflow-hidden border border-border/50 shadow-sm">
                  <iframe
                    title="Mapa de Maputo"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=32.5,-26.0,32.7,-25.9&layer=mapnik"
                    className="w-full h-64"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
                <h2 className="text-2xl font-extrabold text-foreground mb-6">
                  Envie uma Mensagem
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="contact-nome">Nome completo</Label>
                    <Input
                      id="contact-nome"
                      value={form.nome}
                      onChange={(e) =>
                        setForm({ ...form, nome: e.target.value })
                      }
                      placeholder="Seu nome"
                      required
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="seu@email.com"
                      required
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-assunto">Assunto</Label>
                    <Input
                      id="contact-assunto"
                      value={form.assunto}
                      onChange={(e) =>
                        setForm({ ...form, assunto: e.target.value })
                      }
                      placeholder="Assunto da mensagem"
                      required
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-mensagem">Mensagem</Label>
                    <Textarea
                      id="contact-mensagem"
                      value={form.mensagem}
                      onChange={(e) =>
                        setForm({ ...form, mensagem: e.target.value })
                      }
                      placeholder="Escreva a sua mensagem..."
                      required
                      rows={5}
                      className="mt-1.5"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="accent"
                    className="w-full"
                    size="lg"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactos;
