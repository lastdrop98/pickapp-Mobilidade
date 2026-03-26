import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DollarSign,
  Clock,
  MapPin,
  Shield,
  Wallet,
  Users,
  FileText,
  CreditCard,
  Car,
  Camera,
  MessageCircle,
  CheckCircle,
  Download,
} from "lucide-react";
import { WHATSAPP_URL, PLAYSTORE_DRIVER_URL, APPSTORE_DRIVER_URL } from "@/lib/constants";
import { toast } from "sonner";
import driverHeaderBg from "@/assets/pickapp-driver-header.jpg";

const benefits = [
  {
    icon: DollarSign,
    title: "Ganhos diários",
    description: "Receba todos os dias pelos seus serviços.",
  },
  {
    icon: Clock,
    title: "Flexibilidade total",
    description: "Trabalhe quando e onde quiser.",
  },
  {
    icon: MapPin,
    title: "Zonas estratégicas",
    description: "Mais chamadas onde há mais demanda.",
  },
  {
    icon: Shield,
    title: "Segurança garantida",
    description: "Apoio contínuo da nossa equipa.",
  },
  {
    icon: Wallet,
    title: "Pagamentos claros",
    description: "Transparência total nos seus ganhos.",
  },
  {
    icon: Users,
    title: "Sem burocracia",
    description: "Cadastro simples e rápido.",
  },
];

const requirements = [
  { icon: FileText, text: "Bilhete de Identidade (BI)" },
  { icon: CreditCard, text: "Carta de Condução válida" },
  { icon: Car, text: "Livreto do veículo" },
  { icon: Camera, text: "Foto do veículo" },
  { icon: Wallet, text: "Conta bancária (opcional)" },
];

const Motorista = () => {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    veiculo: "",
    zona: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from("motoristas").insert({
      nome_completo: formData.nome,
      whatsapp: formData.whatsapp,
      tipo_veiculo: formData.veiculo || null,
      zona_trabalho: formData.zona || null,
    });
    if (error) {
      toast.error("Erro ao enviar candidatura. Tente novamente.");
      return;
    }
    toast.success(
      "Candidatura enviada com sucesso! Entraremos em contacto em breve."
    );
    setFormData({ nome: "", whatsapp: "", veiculo: "", zona: "" });
  };

  return (
    <>
      {/* Hero Banner with Driver Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={driverHeaderBg}
            alt="Motorista PickApp"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              Ganhe Dinheiro Dirigindo com a PickApp
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Mais flexibilidade e oportunidades para motoristas em todo
              Moçambique. É simples, rápido e sem complicações.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent" size="lg">
                <a
                  href={PLAYSTORE_DRIVER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5" />
                  Google Play
                </a>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <a
                  href={APPSTORE_DRIVER_URL}
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

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Vantagens de ser motorista PickApp
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.08}>
                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 h-full">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Requisitos
              </h2>
              <p className="text-muted-foreground mt-2">
                Documentos necessários para o cadastro
              </p>
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {requirements.map((req, i) => (
              <ScrollReveal key={req.text} delay={i * 0.08}>
                <div className="flex items-center gap-3 bg-card rounded-xl px-5 py-4 shadow-sm border border-border/50">
                  <req.icon className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium text-foreground text-sm">
                    {req.text}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-foreground">
                  Pré-Cadastro de Motorista
                </h2>
                <p className="text-muted-foreground mt-2">
                  Preencha os dados abaixo para iniciar o processo
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 space-y-5"
              >
                <div>
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                    placeholder="Seu nome completo"
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp">Número WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: e.target.value })
                    }
                    placeholder="+258 84 000 0000"
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label>Marca do veículo</Label>
                  <Select
                    value={formData.veiculo}
                    onValueChange={(val) =>
                      setFormData({ ...formData, veiculo: val })
                    }
                  >
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="toyota">Toyota</SelectItem>
                      <SelectItem value="honda">Honda</SelectItem>
                      <SelectItem value="nissan">Nissan</SelectItem>
                      <SelectItem value="mazda">Mazda</SelectItem>
                      <SelectItem value="daihatsu">Daihatsu</SelectItem>
                      <SelectItem value="lexus">Lexus</SelectItem>
                      <SelectItem value="bmw">BMW</SelectItem>
                      <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                      <SelectItem value="hyundai">Hyundai</SelectItem>
                      <SelectItem value="kia">Kia</SelectItem>
                      <SelectItem value="mitsubishi">Mitsubishi</SelectItem>
                      <SelectItem value="volkswagen">Volkswagen</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Zona de trabalho</Label>
                  <Select
                    value={formData.zona}
                    onValueChange={(val) =>
                      setFormData({ ...formData, zona: val })
                    }
                  >
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Selecione a zona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maputo-cidade">Maputo Cidade</SelectItem>
                      <SelectItem value="maputo-provincia">Maputo Província</SelectItem>
                      <SelectItem value="gaza">Gaza</SelectItem>
                      <SelectItem value="inhambane">Inhambane</SelectItem>
                      <SelectItem value="sofala">Sofala</SelectItem>
                      <SelectItem value="manica">Manica</SelectItem>
                      <SelectItem value="tete">Tete</SelectItem>
                      <SelectItem value="zambezia">Zambézia</SelectItem>
                      <SelectItem value="nampula">Nampula</SelectItem>
                      <SelectItem value="cabo-delgado">Cabo Delgado</SelectItem>
                      <SelectItem value="niassa">Niassa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  variant="accent"
                  className="w-full"
                  size="lg"
                >
                  <CheckCircle className="w-5 h-5" />
                  Enviar Candidatura
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Button asChild variant="outline" size="lg">
                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                      "Olá, quero me cadastrar como motorista na PickApp!"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Falar com Suporte no WhatsApp
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Motorista;
