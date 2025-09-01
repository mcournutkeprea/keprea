import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/f442514f-eeef-4f75-9058-46c4d7871765.png" 
              alt="Keprea Logo" 
              className="h-12 w-auto bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2"
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors">
                Solutions
              </a>
              <a href="#innovation" className="text-muted-foreground hover:text-primary transition-colors">
                Innovation
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                À propos
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button 
              variant="default" 
              size="sm"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;