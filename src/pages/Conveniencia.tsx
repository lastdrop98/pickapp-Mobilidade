import { SEO } from "@/components/SEO";
import { PageBanner } from "@/components/PageBanner";
import { ConvenienceSection } from "@/components/home/ConvenienceSection";
import bannerSet from "@/assets/page-conveniencia.jpg?w=640;1024;1600;1920&format=webp&quality=85&as=srcset";
import bannerSrc from "@/assets/page-conveniencia.jpg?w=1600&format=webp&quality=85";

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
      imageSrcSet={bannerSet}
      imageSrc={bannerSrc}
      imageAlt="Estafeta PickApp a entregar uma encomenda à porta de casa em Maputo"
      title="Serviços de Conveniência"
      subtitle="Comida, compras, bebidas e farmácia entregues onde estiver."
    />
    <ConvenienceSection showHeading={false} />
  </>
);

export default Conveniencia;
