import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/hooks/useAuth";
import { AdminLayout } from "@/components/admin/AdminLayout";
import Index from "./pages/Index";
import Motorista from "./pages/Motorista";
import Passageiro from "./pages/Passageiro";
import Sobre from "./pages/Sobre";
import Contactos from "./pages/Contactos";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/admin/Dashboard";
import MotoristasAdmin from "./pages/admin/MotoristasAdmin";
import AtivacoesAdmin from "./pages/admin/AtivacoesAdmin";
import ContactosAdmin from "./pages/admin/ContactosAdmin";
import RelatoriosAdmin from "./pages/admin/RelatoriosAdmin";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/motorista" element={<Motorista />} />
              <Route path="/passageiro" element={<Passageiro />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contactos" element={<Contactos />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="motoristas" element={<MotoristasAdmin />} />
              <Route path="ativacoes" element={<AtivacoesAdmin />} />
              <Route path="contactos" element={<ContactosAdmin />} />
              <Route path="relatorios" element={<RelatoriosAdmin />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
