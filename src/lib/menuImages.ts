import cafe from "@/assets/menu/cafe.jpg";
import carne from "@/assets/menu/carne.jpg";
import cerveja from "@/assets/menu/cerveja.jpg";
import destilado from "@/assets/menu/destilado.jpg";
import entrada from "@/assets/menu/entrada.jpg";
import extra from "@/assets/menu/extra.jpg";
import hamburguer from "@/assets/menu/hamburguer.jpg";
import marisco from "@/assets/menu/marisco.jpg";
import massa from "@/assets/menu/massa.jpg";
import omelete from "@/assets/menu/omelete.jpg";
import petisco from "@/assets/menu/petisco.jpg";
import pizza from "@/assets/menu/pizza.jpg";
import prato from "@/assets/menu/prato.jpg";
import refrigerante from "@/assets/menu/refrigerante.jpg";
import salada from "@/assets/menu/salada.jpg";
import sobremesa from "@/assets/menu/sobremesa.jpg";
import sopa from "@/assets/menu/sopa.jpg";
import sumo from "@/assets/menu/sumo.jpg";
import vinho from "@/assets/menu/vinho.jpg";

/** Mapeia o nome da categoria do menu para uma imagem ilustrativa. */
export const getMenuImage = (categoria: string): string => {
  const c = categoria.toLowerCase();

  if (c.includes("cerveja") || c.includes("cidra")) return cerveja;
  if (c.includes("refrigerante") || c.includes("água") || c.includes("agua"))
    return refrigerante;
  if (c.includes("sumo")) return sumo;
  if (c.includes("vinho") || c.includes("sangria")) return vinho;
  if (c.includes("gin") || c.includes("whisky")) return destilado;
  if (c.includes("chá") || c.includes("cha ") || c.includes("café")) return cafe;
  if (c.includes("carne")) return carne;
  if (c.includes("entrada")) return entrada;
  if (c.includes("extra") || c.includes("pasta")) return extra;
  if (c.includes("hamburguer") || c.includes("no pão") || c.includes("rápida"))
    return hamburguer;
  if (c.includes("marisco")) return marisco;
  if (c.includes("massa")) return massa;
  if (c.includes("omelete")) return omelete;
  if (c.includes("petisco")) return petisco;
  if (c.includes("pizza")) return pizza;
  if (c.includes("salada")) return salada;
  if (c.includes("sobremesa")) return sobremesa;
  if (c.includes("sopa")) return sopa;

  return prato;
};
