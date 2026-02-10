
-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (avoids RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS: admins can read all roles
CREATE POLICY "Admins can view all roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS: admins can manage roles  
CREATE POLICY "Admins can insert roles"
  ON public.user_roles FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete roles"
  ON public.user_roles FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Now add SELECT/UPDATE/DELETE policies for admin access on existing tables

-- motoristas: admin can SELECT, UPDATE, DELETE
CREATE POLICY "Admins can select motoristas"
  ON public.motoristas FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update motoristas"
  ON public.motoristas FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete motoristas"
  ON public.motoristas FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- ativacoes_motoristas: admin full access
CREATE POLICY "Admins can select ativacoes"
  ON public.ativacoes_motoristas FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert ativacoes"
  ON public.ativacoes_motoristas FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update ativacoes"
  ON public.ativacoes_motoristas FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete ativacoes"
  ON public.ativacoes_motoristas FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- contactos_site: admin can SELECT, UPDATE, DELETE
CREATE POLICY "Admins can select contactos"
  ON public.contactos_site FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update contactos"
  ON public.contactos_site FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete contactos"
  ON public.contactos_site FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- relatorios_diarios: admin full access
ALTER TABLE public.relatorios_diarios ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can select relatorios"
  ON public.relatorios_diarios FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert relatorios"
  ON public.relatorios_diarios FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update relatorios"
  ON public.relatorios_diarios FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete relatorios"
  ON public.relatorios_diarios FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Enable RLS on ativacoes_motoristas too
ALTER TABLE public.ativacoes_motoristas ENABLE ROW LEVEL SECURITY;
