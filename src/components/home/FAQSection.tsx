import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ScrollReveal";

const faqs = [
  {
    question: "Como me cadastrar como motorista?",
    answer:
      "Acesse a página de Motorista no nosso site, preencha o formulário de pré-cadastro com seus dados e documentos. Nossa equipa analisará a sua candidatura e entrará em contacto pelo WhatsApp.",
  },
  {
    question: "Quanto tempo demora a aprovação?",
    answer:
      "O processo de aprovação geralmente leva entre 24 a 72 horas úteis. Após a verificação dos documentos, receberá uma notificação com o resultado.",
  },
  {
    question: "A PickApp funciona em Maputo e Matola?",
    answer:
      "Sim! A PickApp está disponível em Maputo, Matola, Zimpeto e regiões próximas. Estamos em constante expansão para cobrir mais áreas.",
  },
  {
    question: "Como é feito o pagamento?",
    answer:
      "Os passageiros podem pagar em dinheiro diretamente ao motorista ou utilizar métodos de pagamento digital disponíveis no aplicativo.",
  },
  {
    question: "Existe suporte ao cliente?",
    answer:
      "Sim! Oferecemos suporte 24 horas através do WhatsApp e email. A nossa equipa está sempre pronta para ajudar com qualquer questão.",
  },
];

export const FAQSection = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            Perguntas Frequentes
          </h2>
        </div>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/50 px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </div>
  </section>
);
