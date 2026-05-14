
CREATE TYPE public.blog_category AS ENUM ('Passageiros', 'Motoristas', 'Comunicados');

CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category public.blog_category NOT NULL,
  cover_image TEXT,
  author TEXT NOT NULL DEFAULT 'Equipa PickApp',
  published BOOLEAN NOT NULL DEFAULT true,
  published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published posts"
  ON public.blog_posts FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Admins can select all posts"
  ON public.blog_posts FOR SELECT
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert posts"
  ON public.blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update posts"
  ON public.blog_posts FOR UPDATE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete posts"
  ON public.blog_posts FOR DELETE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE INDEX idx_blog_posts_published_at ON public.blog_posts (published_at DESC);
CREATE INDEX idx_blog_posts_category ON public.blog_posts (category);

INSERT INTO public.blog_posts (slug, title, excerpt, content, category, author, published, published_at)
VALUES (
  'preco-que-ve-e-o-preco-que-paga',
  'Preço que vê é o preço que paga – Porque a PickApp é diferente das outras apps',
  'Na PickApp acreditamos que transparência é a base de uma boa viagem. O preço mostrado antes da viagem é exatamente o preço final — sem surpresas, sem aumentos súbitos.',
  E'## Transparência total no preço\n\nEm Moçambique, muitos passageiros já passaram pela mesma experiência: pedem uma viagem, veem um preço estimado, e no fim acabam por pagar muito mais. Na **PickApp** decidimos mudar isto.\n\n### O preço que vê é o preço que paga\n\nQuando solicita uma viagem na PickApp, o valor mostrado no ecrã é **o valor final**. Não há tarifas dinâmicas escondidas, não há surpresas no destino, não há cobranças extra inesperadas.\n\n### Porquê esta diferença?\n\n- **Justiça para o passageiro** — sabe exatamente quanto vai pagar antes de aceitar a viagem.\n- **Justiça para o motorista** — recebe um valor previsível pelo seu trabalho.\n- **Confiança na app** — sem letras pequenas, sem cálculos complicados.\n\n### O que está incluído no preço\n\nO valor apresentado já inclui a viagem completa do ponto A ao ponto B, baseado na distância e tempo estimado. Mesmo que haja trânsito ou um pequeno desvio de rota, **o preço não muda**.\n\n### A nossa promessa\n\nA PickApp nasceu em Moçambique, para Moçambique. Conhecemos a realidade do nosso mercado e sabemos que confiança constrói-se com clareza. Por isso, comprometemo-nos a manter sempre esta política: **um preço, uma viagem, zero surpresas**.\n\n---\n\n*Baixe a app PickApp e experimente uma forma mais justa de se mover por Maputo.*',
  'Passageiros',
  'Equipa PickApp',
  true,
  now()
);
