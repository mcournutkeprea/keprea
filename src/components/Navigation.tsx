import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const navItems = [
    { id: 'solutions', label: t('nav.solutions') },
    { id: 'innovation', label: t('nav.innovation') },
    { id: 'production', label: t('nav.production') },
    { id: 'about', label: t('nav.about') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="/" className="inline-block">
              <img 
                src="/lovable-uploads/eprea_Main_Logo.png" 
                alt="Keprea Logo" 
                className="h-16 w-auto mx-4 my-2 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-16">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-primary hover:text-primary/80 transition-colors text-lg font-medium whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <Button 
              variant="default" 
              size="sm"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('nav.contact')}
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

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-primary hover:text-primary/80 text-lg font-medium text-left"
              >
                {item.label}
                
              </button>
            ))}
            <Button
              variant="default"
              size="sm"
              className="w-fit"
              onClick={() => handleNavClick('contact-form')}
            >
              {t('nav.contact')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;