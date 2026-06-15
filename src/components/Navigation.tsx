import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  const handleSectionClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (isHomePage) {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    if (isHomePage) {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

  const navItems = [
    { id: "solutions", label: t("nav.solutions"), href: "/solutions" },
    { id: "innovation", label: t("nav.innovation"), href: null },
    { id: "production", label: t("nav.production"), href: "/notre-production" },
    { id: "about", label: t("nav.about"), href: "/qui-sommes-nous" },
    { id: "ressources", label: "Ressources", href: "/ressources" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="inline-block">
              <img
                src="/lovable-uploads/eprea_Main_Logo.png"
                alt="Keprea Logo"
                className="h-16 w-auto mx-4 my-2 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-16">
              {navItems.map((item) =>
                item.href ? (
                  <Link
                    key={item.id}
                    to={item.href}
                    className="text-primary hover:text-primary/80 transition-colors text-lg font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={isHomePage ? `#${item.id}` : `/#${item.id}`}
                    className="text-primary hover:text-primary/80 transition-colors text-lg font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <Button variant="default" size="sm" onClick={handleContactClick}>
              {t("nav.contact")}
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.id}
                  to={item.href}
                  className="text-primary hover:text-primary/80 text-lg font-medium text-left"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className="text-primary hover:text-primary/80 text-lg font-medium text-left"
                >
                  {item.label}
                </button>
              )
            )}
            <Button
              variant="default"
              size="sm"
              className="w-fit"
              onClick={handleContactClick}
            >
              {t("nav.contact")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
