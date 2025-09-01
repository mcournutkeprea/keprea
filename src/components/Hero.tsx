import { Button } from "@/components/ui/button";
import heroPlants from "@/assets/hero-plants-wind.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background - Style OneOne Bio */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover animate-plant-sway"
          style={{ 
            backgroundImage: `url(/lovable-uploads/a475772e-8a3f-471f-86bd-e279450c6590.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />
        <div 
          className="absolute inset-0 bg-cover animate-pan-up opacity-40"
          style={{ 
            backgroundImage: `url(/lovable-uploads/a475772e-8a3f-471f-86bd-e279450c6590.png)`,
            backgroundSize: '110% 110%',
            backgroundPosition: 'center center',
            mixBlendMode: 'multiply'
          }}
        />
        
        {/* Animated water drops overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Water drops falling */}
          <div className="absolute top-0 left-1/4 w-2 h-4 bg-white/30 rounded-full animate-water-drop" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-0 left-1/2 w-1.5 h-3 bg-primary/40 rounded-full animate-water-drop" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-0 left-3/4 w-1 h-2 bg-white/40 rounded-full animate-water-drop" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-0 left-1/3 w-1.5 h-3 bg-white/25 rounded-full animate-water-drop" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-0 left-2/3 w-1 h-2 bg-primary/30 rounded-full animate-water-drop" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-0 left-1/5 w-1 h-2.5 bg-white/35 rounded-full animate-water-drop" style={{ animationDelay: '5s' }}></div>
          <div className="absolute top-0 left-4/5 w-1.5 h-3.5 bg-white/20 rounded-full animate-water-drop" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Ripple effects on ground */}
          <div className="absolute bottom-10 left-1/4 w-8 h-2 bg-white/10 rounded-full animate-ripple" style={{ animationDelay: '6s' }}></div>
          <div className="absolute bottom-12 left-1/2 w-6 h-1.5 bg-primary/15 rounded-full animate-ripple" style={{ animationDelay: '8s' }}></div>
          <div className="absolute bottom-8 left-3/4 w-4 h-1 bg-white/20 rounded-full animate-ripple" style={{ animationDelay: '10s' }}></div>
        </div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Biosolutions innovantes pour 
            <span className="text-primary"> l'agriculture de demain</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Keprea développe des solutions de fertilisation, de boost et de protection 
            révolutionnaires à base d'insectes pour optimiser vos cultures agricoles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white border-0"
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir nos solutions
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              En savoir plus
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="p-6 backdrop-blur-sm bg-white/10 rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Naturel</div>
            </div>
            <div className="p-6 backdrop-blur-sm bg-white/10 rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">+30%</div>
              <div className="text-white/80">Performance</div>
            </div>
            <div className="p-6 backdrop-blur-sm bg-white/10 rounded-lg border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">0</div>
              <div className="text-white/80">Impact chimique</div>
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