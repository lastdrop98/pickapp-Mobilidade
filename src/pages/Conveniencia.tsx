import { SEO } from "@/components/SEO";
import { PageBanner } from "@/components/PageBanner";
import { ConvenienceSection } from "@/components/home/ConvenienceSection";

const Conveniencia = () => (
  <>
    <SEO
      title="Serviços de Conveniência PickApp — Entregas em Maputo"
      description="Comida, supermercado, bebidas e farmácia entregues à sua porta em Maputo. Conheça os Serviços de Conveniência da PickApp com estafetas verificados."
      keywords="delivery Maputo, entrega de comida Moçambique, supermercado ao domicílio, farmácia entrega Maputo, PickApp conveniência"
      canonical="/conveniencia"
      ogTitle="🛵 PickApp Conveniência — tudo entregue à sua porta"
      ogDescription="Restaurantes, supermercados, bottle stores e farmácias com entrega rápida em Maputo."
    />
    <PageBanner
      title="Serviços de Conveniência"
      subtitle="Comida, compras, bebidas e farmácia entregues onde estiver."
    />
    <ConvenienceSection />
  </>
);

export default Conveniencia;
