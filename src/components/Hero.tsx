import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroPlants from "@/assets/hero-plants-wind.jpg";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background - Style OneOne Bio */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover animate-camera-sweep"
          style={{ 
            backgroundImage: `url(/lovable-uploads/6a8303db-496f-46ce-9260-7c76071683b9.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />
        
        
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white border-0"
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta')}
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="p-6 backdrop-blur-sm bg-white/10 rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Naturel</div>
            </div>
            <div className="p-6 backdrop-blur-sm bg-white/10 rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">10</div>
              <div className="text-white/80">solutions développées dont 2 déjà disponibles</div>
            </div>
            <div className="p-6 backdrop-blur-sm bg-white/10 rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">0</div>
              <div className="text-white/80">aucun investissement dans le matériel agricole pour les producteurs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;