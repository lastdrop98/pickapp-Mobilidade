import kuantoLogo from "@/assets/estabelecimentos/kuanto-custa-logo.jpeg.asset.json";
import escorpiaoLogo from "@/assets/estabelecimentos/escorpiao-logo.webp.asset.json";
import xikafuLogo from "@/assets/estabelecimentos/xikafu-logo.jpeg.asset.json";
import kuantoCapa from "@/assets/estabelecimentos/kuanto-custa-capa.jpeg.asset.json";
import escorpiaoCapa from "@/assets/estabelecimentos/escorpiao-capa.webp.asset.json";
import xikafuCapa from "@/assets/estabelecimentos/xikafu-capa.jpg.asset.json";

export interface MenuItem {
  nome: string;
  preco: number;
}

export interface MenuCategoria {
  categoria: string;
  itens: MenuItem[];
}

export interface Estabelecimento {
  slug: string;
  nome: string;
  categoria: string;
  morada: string;
  horario: string;
  logoUrl: string;
  coverUrl: string;
  real: boolean;
  menu: MenuCategoria[];
}

export const estabelecimentos: Estabelecimento[] = [
  {
    slug: "kuanto-custa",
    nome: "Kuanto Custa",
    categoria: "Restaurante",
    morada: "Av. Vladimir Lenine, em frente aos táxis Marcelo, Maputo",
    horario: "Dias úteis 10h-00h, Fim de semana 10h-23h",
    logoUrl: kuantoLogo.url,
    coverUrl: kuantoCapa.url,
    real: true,
    menu: [
      {
        categoria: "Sopas",
        itens: [
          { nome: "Caldo Verde", preco: 200 },
          { nome: "Feijão", preco: 200 },
          { nome: "Legumes", preco: 200 },
          { nome: "Peixe", preco: 200 },
        ],
      },
      {
        categoria: "Entradas",
        itens: [
          { nome: "Amendoim Torrado / Castanha de Cajú", preco: 100 },
          { nome: "Asinhas de Frango (Panadas/Grelhadas)", preco: 550 },
          { nome: "Camarão (S) Cozido", preco: 750 },
          { nome: "Camarão Alhinho", preco: 650 },
          { nome: "Cesta de Pão e Manteiga", preco: 140 },
          { nome: "Chouriço Assado", preco: 680 },
          { nome: "Frango a Passarinho (Panado/Simples)", preco: 650 },
          { nome: "Lulas Picantes", preco: 650 },
          { nome: "Moelas", preco: 450 },
          { nome: "Pão de Alho", preco: 350 },
          { nome: "Picapau de Vitela/Porco", preco: 690 },
          { nome: "Queijo e Azeitonas", preco: 590 },
          { nome: "Salgadinhos (dose 4)", preco: 250 },
          { nome: "Tábua de Entrada", preco: 1050 },
        ],
      },
      {
        categoria: "Saladas",
        itens: [
          { nome: "Atum", preco: 440 },
          { nome: "Grega", preco: 440 },
          { nome: "Salada de Frango", preco: 440 },
          { nome: "Salada Mista", preco: 230 },
        ],
      },
      {
        categoria: "No Pão",
        itens: [
          { nome: "Hamburguer", preco: 550 },
          { nome: "Hamburguer a Kuanto Custa", preco: 700 },
          { nome: "Prego/Bifana", preco: 550 },
          { nome: "Prego/Bifana Especial", preco: 690 },
          { nome: "Sandes de Entremeada", preco: 690 },
          { nome: "Sandes de Ovo", preco: 550 },
          { nome: "Sandes de Queijo", preco: 160 },
          { nome: "Tosta de Atum", preco: 220 },
          { nome: "Tosta Mista", preco: 350 },
        ],
      },
      {
        categoria: "Mariscos",
        itens: [
          { nome: "Amêijoa à Espanhola", preco: 450 },
          { nome: "Bacalhau a Lagareiro", preco: 1790 },
          { nome: "Bacalhau Cozido/Grelhado", preco: 1690 },
          { nome: "Bife de Lula c/ Puré de Batata", preco: 1100 },
          { nome: "Cabeça de Peixe c/ Xima", preco: 990 },
          { nome: "Camarão (S) Frito", preco: 990 },
          { nome: "Camarão Tigre Grelhado", preco: 1395 },
          { nome: "Caril de Gambas", preco: 890 },
          { nome: "Filete de Peixe Grelhada", preco: 1250 },
          { nome: "Lula Grelhada", preco: 990 },
          { nome: "Omelete de Camarão", preco: 695 },
          { nome: "Peixe Escalado", preco: 1200 },
          { nome: "Posta de Peixe Grelhada/Cozida", preco: 990 },
          { nome: "Salmão ao Molho de Ameijoa", preco: 1450 },
        ],
      },
      {
        categoria: "Pastas",
        itens: [
          { nome: "Alfredo", preco: 800 },
          { nome: "Atum", preco: 790 },
          { nome: "Bolonhesa", preco: 790 },
          { nome: "Penne a Kuanto Custa", preco: 880 },
        ],
      },
      {
        categoria: "Pizzas",
        itens: [
          { nome: "Atum", preco: 890 },
          { nome: "Frango", preco: 890 },
          { nome: "Margaritta", preco: 750 },
          { nome: "A Kuanto Custa", preco: 1190 },
          { nome: "Camarão", preco: 990 },
          { nome: "Chouriço", preco: 890 },
          { nome: "Mexicana", preco: 890 },
        ],
      },
      {
        categoria: "Carnes",
        itens: [
          { nome: "½ Frango Grelhado", preco: 600 },
          { nome: "Alcatra ao Molho de Vinho (grelhado/frito)", preco: 1300 },
          { nome: "Baby Chiken", preco: 900 },
          { nome: "Bife a Kuanto Custa", preco: 1250 },
          { nome: "Bife a Portuguesa", preco: 1300 },
          { nome: "Bife c/ Natas e Cogumelos", preco: 1250 },
          { nome: "Bife de Frango Grelhado", preco: 850 },
          { nome: "Bife Terra Mar (grelhado/frito)", preco: 1350 },
          { nome: "Carne de Porco com Amêijoa", preco: 990 },
          { nome: "Costeleta de Porco Grelhada", preco: 990 },
          { nome: "Entremeada Grelhada", preco: 990 },
          { nome: "Febras", preco: 1090 },
          { nome: "Frango Grelhado", preco: 1100 },
          { nome: "Picanha", preco: 1450 },
          { nome: "Prego/Bifana no Prato", preco: 850 },
          { nome: "Rosbife", preco: 1200 },
          { nome: "Tomahawk (King)", preco: 1990 },
          { nome: "Tomahawk (Lady)", preco: 1590 },
        ],
      },
      {
        categoria: "Pratos para 2 Pessoas",
        itens: [
          { nome: "Arroz de Mariscos", preco: 2690 },
          { nome: "Caril de Mariscos", preco: 2690 },
          { nome: "Cataplana de Mariscos", preco: 2690 },
          {
            nome: "Grelhados a Kuanto Custa (lombo/maminha/entremeada/porco/babataza/chouriço)",
            preco: 1750,
          },
          { nome: "Misto de Grelhados 1 (carne de porco/vorsa/babatasa)", preco: 1350 },
          { nome: "Misto de Grelhados 2 (buaka/frango/vorsa/babalasa)", preco: 1490 },
          { nome: "Parelhada de Mariscos", preco: 4600 },
          { nome: "Travessa de Mariscos", preco: 2990 },
        ],
      },
      {
        categoria: "Petiscos (Final de Semana)",
        itens: [
          { nome: "Amêijoa a Bulhão Pato", preco: 390 },
          { nome: "Cabeça de Garoupa", preco: 450 },
          { nome: "Dobrada", preco: 350 },
          { nome: "Dobrada c/ Carne", preco: 450 },
          { nome: "Frango", preco: 350 },
          { nome: "Mariscos", preco: 390 },
          { nome: "Rabada", preco: 450 },
        ],
      },
      {
        categoria: "Extras",
        itens: [
          { nome: "Arroz Branco", preco: 140 },
          { nome: "Arroz de Vegetais", preco: 160 },
          { nome: "Batata Frita", preco: 150 },
          { nome: "Manteiga", preco: 60 },
          { nome: "Ovo Estrelado", preco: 60 },
          { nome: "Pão Torrado", preco: 150 },
          { nome: "Queijo", preco: 100 },
          { nome: "Xima", preco: 100 },
        ],
      },
      {
        categoria: "Sobremesas",
        itens: [
          { nome: "Bola de Sorvete", preco: 120 },
          { nome: "Bolo de Bolacha", preco: 290 },
          { nome: "Musse de Chocolate/Maracujá", preco: 290 },
          { nome: "Petit Gateau", preco: 400 },
          { nome: "Pudim de Mandioca", preco: 380 },
          { nome: "Pudim de Ovos", preco: 290 },
          { nome: "Salada de Fruta", preco: 300 },
          { nome: "Tarte de Castanha de Cajú/Macadámia c/ Sorvete", preco: 450 },
        ],
      },
      {
        categoria: "Bebidas — Cervejas",
        itens: [
          { nome: "2M Grande", preco: 120 },
          { nome: "2M Txoti", preco: 140 },
          { nome: "Budweiser", preco: 200 },
          { nome: "Corona", preco: 160 },
          { nome: "Heineken 500ml", preco: 250 },
          { nome: "Heineken 210ml", preco: 160 },
          { nome: "Stela", preco: 180 },
          { nome: "Super Bock", preco: 160 },
        ],
      },
      {
        categoria: "Bebidas — Refrigerantes & Águas",
        itens: [
          { nome: "Coca Cola", preco: 130 },
          { nome: "Coca Zero", preco: 130 },
          { nome: "Sprite", preco: 130 },
          { nome: "Água das Pedras Normal", preco: 210 },
          { nome: "Água Grande", preco: 150 },
          { nome: "Água Pequena", preco: 80 },
          { nome: "Água Tónica", preco: 130 },
        ],
      },
      {
        categoria: "Bebidas — Sumos Naturais",
        itens: [
          { nome: "Ananas", preco: 500 },
          { nome: "Goiaba", preco: 500 },
          { nome: "Laranja", preco: 500 },
          { nome: "Manga", preco: 500 },
          { nome: "Maracujá", preco: 500 },
        ],
      },
      {
        categoria: "Bebidas — Vinhos & Sangrias",
        itens: [
          { nome: "Sangria Vinho Tinto", preco: 210 },
          { nome: "Sangria Vinho Branco", preco: 210 },
          { nome: "Sangria Espumante", preco: 130 },
        ],
      },
    ],
  },
  {
    slug: "escorpiao",
    nome: "Escorpião Steak House & Cervejaria",
    categoria: "Restaurante",
    morada: "Maputo",
    horario: "A confirmar com o estabelecimento",
    logoUrl: escorpiaoLogo.url,
    coverUrl: escorpiaoCapa.url,
    real: true,
    menu: [
      {
        categoria: "Entradas",
        itens: [
          { nome: "Sandes de Leitão", preco: 450 },
          { nome: "Prego no pão", preco: 400 },
          { nome: "Amêijoas da Casa (Dose)", preco: 400 },
          { nome: "Camarão Alhinho", preco: 490 },
          { nome: "Carangueijo ao Natural (2 unid)", preco: 450 },
          { nome: "Cesto de Pão", preco: 80 },
          { nome: "Chouriço Assado", preco: 650 },
          { nome: "Prego Trinchado", preco: 450 },
          { nome: "Manteiga (unid)", preco: 40 },
          { nome: "Moelas Estufadas", preco: 300 },
          { nome: "Pão de Alho c/ Queijo", preco: 220 },
          { nome: "Pão de Alho", preco: 140 },
          { nome: "Pastéis de Bacalhau (4 unid)", preco: 400 },
          { nome: "Rissóis/Chamuças (4 unid)", preco: 320 },
          { nome: "Tábua de Queijo c/ Presunto", preco: 800 },
          { nome: "Tábua de Queijo ou Presunto", preco: 400 },
          { nome: "Bifana", preco: 280 },
        ],
      },
      {
        categoria: "Sopa",
        itens: [
          { nome: "Sopa do Dia", preco: 180 },
          { nome: "Caldo Verde", preco: 220 },
          { nome: "Sopa de Feijão", preco: 200 },
        ],
      },
      {
        categoria: "Saladas",
        itens: [
          { nome: "Salada de Atum", preco: 450 },
          { nome: "Salada de Camarão", preco: 600 },
          { nome: "Salada de Frango", preco: 480 },
          { nome: "Salada de Polvo", preco: 500 },
          { nome: "Salada Grega", preco: 480 },
          { nome: "Salada Mista", preco: 180 },
        ],
      },
      {
        categoria: "Hamburguer",
        itens: [
          { nome: "Hambúrger Simples", preco: 300 },
          { nome: "Hambúrguer c/ Ovo", preco: 350 },
          { nome: "Hambúrguer c/ Queijo", preco: 400 },
          { nome: "Hambúrguer c/ Fiambre", preco: 400 },
          { nome: "Hamberguer Max", preco: 580 },
        ],
      },
      {
        categoria: "Omelete",
        itens: [
          { nome: "Omelete Simples", preco: 200 },
          { nome: "Omelete Queijo", preco: 250 },
          { nome: "Omelete Fiambre", preco: 250 },
          { nome: "Omelete Misto", preco: 300 },
        ],
      },
      {
        categoria: "Carnes",
        itens: [
          { nome: "Alheira Especial Portuguesa", preco: 680 },
          { nome: "Bife à Escorpião P/2", preco: 1390 },
          { nome: "Bife à Escorpião P/1", preco: 840 },
          { nome: "Bitoque", preco: 600 },
          { nome: "Picanha à Escorpião", preco: 1290 },
          { nome: "Prego no Prato", preco: 490 },
          { nome: "Bife c/ Natas", preco: 980 },
          { nome: "Tomahawk Steak (Costeletão)", preco: 1780 },
          { nome: "Bife Terra e Mar", preco: 990 },
          { nome: "Naco na Pedra", preco: 1190 },
          { nome: "T-Bone", preco: 950 },
          { nome: "Espetada de Maminha à Escorpião", preco: 1390 },
          { nome: "Tábua de Carne P/2", preco: 2600 },
          { nome: "Tábua de Carne P/4", preco: 4900 },
          { nome: "Febras de Porco Grelhadas", preco: 850 },
          { nome: "Pernil Assado no Forno", preco: 860 },
          { nome: "Entrecosto", preco: 880 },
          { nome: "Frango Grelhado", preco: 840 },
          { nome: "Meio Frango Grelhado", preco: 490 },
          { nome: "Grelhados Na Telha (P/5-6P)", preco: 5600 },
          { nome: "Cabrito a Padeiro", preco: 890 },
          { nome: "Leitão a Bairrada", preco: 990 },
          { nome: "Cozido à Portuguesa P/1", preco: 840 },
          { nome: "Cozido à Portuguesa P/2", preco: 1390 },
        ],
      },
      {
        categoria: "Extras",
        itens: [
          { nome: "Legumes Cozidos", preco: 150 },
          { nome: "Legumes Salteados", preco: 200 },
          { nome: "Arroz de Legumes", preco: 180 },
          { nome: "Arroz de Feijão", preco: 150 },
          { nome: "Arroz Branco", preco: 150 },
          { nome: "Batata Frita", preco: 150 },
          { nome: "Xima", preco: 200 },
          { nome: "Queijo Mozzarella", preco: 200 },
          { nome: "Fiambre", preco: 200 },
          { nome: "Atum", preco: 200 },
          { nome: "Ovo", preco: 80 },
        ],
      },
      {
        categoria: "Sobremesa",
        itens: [
          { nome: "Pudim de ovos", preco: 200 },
          { nome: "Bolo de Bolacha", preco: 300 },
          { nome: "Mousse de chocolate", preco: 250 },
          { nome: "Tarte de caju", preco: 300 },
          { nome: "Sorvete", preco: 230 },
        ],
      },
      {
        categoria: "Mariscos",
        itens: [
          { nome: "Arroz de Garoupa", preco: 780 },
          { nome: "Arroz de Garoupa c/ Camarão", preco: 880 },
          { nome: "Lulas Grelhadas", preco: 940 },
          { nome: "Camarão Tam. M", preco: 1600 },
          { nome: "Camarão Tam. G", preco: 2400 },
          { nome: "Lagosta Grelhada", preco: 2400 },
          { nome: "Bacalhau à Lagareiro", preco: 1890 },
          { nome: "Posta de Garoupa", preco: 890 },
          { nome: "Filet de Garoupa", preco: 990 },
          { nome: "Bacalhau à Bráz", preco: 880 },
          { nome: "Sardinha Assada", preco: 960 },
          { nome: "Bacalhau Cozido c/ Legumes", preco: 1790 },
          { nome: "Arroz de Marisco (2P)", preco: 2900 },
          { nome: "Travessa de Marisco (2P)", preco: 3200 },
          { nome: "Travessa de Marisco (4P)", preco: 4900 },
          { nome: "Cabeça de garoupa cozida c/ todos", preco: 880 },
        ],
      },
      {
        categoria: "Pizzas",
        itens: [
          {
            nome: "Pizza à Escorpião (peito de frango, carne moída, chouriço, fiambre e azeitonas)",
            preco: 850,
          },
          { nome: "Pizza de Frango (peito de frango, cogumelos e azeitonas)", preco: 750 },
          { nome: "Pizza del Mar (camarão, lulas, amêijoas, azeitonas e pimento)", preco: 850 },
          { nome: "Pizza Mexicana (carne moída picante, azeitonas e cebola)", preco: 780 },
          { nome: "Pizza Portuguesa (chouriço, azeitonas, pimento)", preco: 800 },
          { nome: "Pizza Margarita (molho de tomate e orégano)", preco: 550 },
          { nome: "Pizza de Atum (atum, molho de tomate e orégano)", preco: 750 },
          { nome: "Pizza Vegetariana (vegetais diversos e azeitonas)", preco: 600 },
        ],
      },
      {
        categoria: "Massas",
        itens: [
          { nome: "Lasanha de Carne", preco: 680 },
          { nome: "Espaguete à Bolonhesa", preco: 600 },
          { nome: "Espaguete Alfredo", preco: 600 },
        ],
      },
      {
        categoria: "Sumos / Refrigerante",
        itens: [
          { nome: "Compal 500ml", preco: 180 },
          { nome: "Compal 1Lt", preco: 280 },
          { nome: "Cappy", preco: 120 },
          { nome: "Mistura (laranja/ananás/maçã/cenoura)", preco: 450 },
          { nome: "Laranja", preco: 300 },
          { nome: "Cenoura", preco: 300 },
          { nome: "Refrigerantes Lata", preco: 95 },
          { nome: "Refrigerantes Garrafa", preco: 70 },
          { nome: "Red Bull", preco: 150 },
        ],
      },
      {
        categoria: "Chá / Café",
        itens: [
          { nome: "Café Expresso", preco: 80 },
          { nome: "Café c/ Leite", preco: 160 },
          { nome: "Descafeinado", preco: 100 },
          { nome: "Galão", preco: 160 },
          { nome: "Cappuccino", preco: 180 },
          { nome: "Chocolate Quente", preco: 170 },
          { nome: "Chá com Leite", preco: 150 },
          { nome: "Chá sabores", preco: 80 },
        ],
      },
      {
        categoria: "Água",
        itens: [
          { nome: "Água das Pedras (Sabores)", preco: 150 },
          { nome: "Água Vumba 1L", preco: 110 },
          { nome: "Água Namaacha 1L", preco: 100 },
        ],
      },
      {
        categoria: "Cerveja / Beer Draft",
        itens: [
          { nome: "2M Barrilito", preco: 90 },
          { nome: "2M Médio", preco: 100 },
          { nome: "2M Copo Maior", preco: 120 },
          { nome: "2M 500ml", preco: 170 },
          { nome: "Heineken Barrilito", preco: 140 },
          { nome: "Heineken Médio", preco: 160 },
          { nome: "Heineken 500ml", preco: 270 },
        ],
      },
      {
        categoria: "Cerveja / Cidra",
        itens: [
          { nome: "2M Txoti", preco: 100 },
          { nome: "Txilar", preco: 100 },
          { nome: "Heineken 210ml", preco: 130 },
          { nome: "Corona", preco: 190 },
          { nome: "Stella Artois", preco: 200 },
        ],
      },
      {
        categoria: "Sangria",
        itens: [
          { nome: "Espumante 1L", preco: 2000 },
          { nome: "Vinho Tinto 1L", preco: 1500 },
          { nome: "Vinho Tinto 500ml", preco: 800 },
          { nome: "Vinho Branco 1L", preco: 1500 },
          { nome: "Vinho Branco 500ml", preco: 800 },
        ],
      },
      {
        categoria: "Whisky",
        itens: [
          { nome: "JW Red Label", preco: 130 },
          { nome: "JW Black Label", preco: 200 },
          { nome: "Jameson normal", preco: 140 },
          { nome: "Jack Daniel N7", preco: 190 },
          { nome: "Chivas 12 Anos", preco: 220 },
          { nome: "Glenfiddich 12 anos", preco: 300 },
        ],
      },
      {
        categoria: "Gin",
        itens: [
          { nome: "Gordon London", preco: 130 },
          { nome: "Bombay Gin", preco: 180 },
          { nome: "Beefeater normal", preco: 130 },
          { nome: "Tanqueray Gin", preco: 180 },
          { nome: "Hendricks Gin", preco: 230 },
        ],
      },
    ],
  },
  {
    slug: "xikafu",
    nome: "Xikafu Restaurante",
    categoria: "Restaurante",
    morada: "Av. Ahmed Sékou Touré, Nº 1957/RC, Cidade de Maputo",
    horario: "Segunda a Sexta, 9h-22h",
    logoUrl: xikafuLogo.url,
    coverUrl: xikafuCapa.url,
    real: true,
    menu: [
      {
        categoria: "Coisas Rápidas",
        itens: [
          { nome: "Azinhas (asas de galinha)", preco: 200 },
          { nome: "Prego do Quintal", preco: 250 },
          { nome: "Tosta Criativa", preco: 300 },
          { nome: "Cesto de Salgados", preco: 250 },
          { nome: "Hamburguer do Bairro", preco: 250 },
          { nome: "Sopa de Legumes", preco: 150 },
          { nome: "Batatas Fritas", preco: 100 },
          { nome: "Salada Fresca", preco: 100 },
        ],
      },
      {
        categoria: "Pratos",
        itens: [
          { nome: "Matapa", preco: 300 },
          { nome: "Pescadinhas da Baía", preco: 400 },
          { nome: "Carapau do Povo", preco: 250 },
          { nome: "Lulas à Moda do Xikafu", preco: 400 },
          { nome: "Peixe do Índico", preco: 350 },
          { nome: "Bisteca do Chef", preco: 450 },
          { nome: "Carne de Porco Grelhada", preco: 250 },
          { nome: "Frango da Marrabenta", preco: 250 },
        ],
      },
    ],
  },
];

export const getEstabelecimento = (slug?: string) =>
  estabelecimentos.find((e) => e.slug === slug);
