import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          className="absolute inset-0 w-full h-full object-cover animate-gentle-zoom"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-background-video.mp4" type="video/mp4" />
        </video>
        
        {/* Animated particles overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating particles */}
          <div className="absolute top-10 left-10 w-3 h-3 bg-white/40 rounded-full animate-float"></div>
          <div className="absolute top-20 right-20 w-2 h-2 bg-primary/60 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-white/50 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-white/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Drifting elements */}
          <div className="absolute top-1/4 left-0 w-1 h-1 bg-primary rounded-full animate-drift"></div>
          <div className="absolute top-1/2 left-0 w-2 h-2 bg-white/60 rounded-full animate-drift" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-3/4 left-0 w-1 h-1 bg-primary/80 rounded-full animate-drift" style={{ animationDelay: '4s' }}></div>
          
          {/* Sparkling effects */}
          <div className="absolute top-16 left-1/3 w-1 h-1 bg-white rounded-full animate-sparkle"></div>
          <div className="absolute top-32 right-1/4 w-1 h-1 bg-primary rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/2 w-1 h-1 bg-white rounded-full animate-sparkle" style={{ animationDelay: '2s' }}></div>
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