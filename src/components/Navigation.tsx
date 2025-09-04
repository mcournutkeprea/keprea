import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const { t } = useLanguage();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/0e951f6e-e749-4481-b6d1-6c680205357f.png" 
              alt="Keprea Logo" 
              className="h-20 w-auto mx-4 my-2"
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">
                {t('nav.solutions')}
              </a>
              <a href="#innovation" className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">
                {t('nav.innovation')}
              </a>
              <a href="#production" className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">
                {t('nav.production')}
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">
                {t('nav.about')}
              </a>
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;