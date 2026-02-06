import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PLAYSTORE_URL } from "@/lib/constants";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Motorista", path: "/motorista" },
  { name: "Passageiro", path: "/passageiro" },
  { name: "Sobre", path: "/sobre" },
  { name: "Contactos", path: "/contactos" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isTransparent = !scrolled && !isOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-card/95 backdrop-blur-md shadow-lg border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center shadow-sm">
            <span className="text-accent-foreground font-extrabold text-base">P</span>
          </div>
          <span
            className={`text-xl font-extrabold transition-colors ${
              isTransparent ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            Pick<span className="text-accent">App</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-accent"
                  : isTransparent
                  ? "text-primary-foreground/80 hover:text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Button asChild variant="accent" size="sm" className="hidden md:inline-flex">
            <a href={PLAYSTORE_URL} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4" />
              Baixar App
            </a>
          </Button>

          <button
            className={`md:hidden p-2 transition-colors ${
              isTransparent ? "text-primary-foreground" : "text-foreground"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-card/95 backdrop-blur-md ${
          isOpen ? "max-h-[400px] border-t border-border/50" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-accent bg-accent/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild variant="accent" className="mt-3">
            <a href={PLAYSTORE_URL} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4" />
              Baixar App
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};
