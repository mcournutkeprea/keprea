import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Biosolutions innovantes pour 
            <span className="text-primary"> l'agriculture de demain</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Keprea développe des solutions de fertilisation, de boost et de protection 
            révolutionnaires à base d'insectes pour optimiser vos cultures agricoles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-3">
              Découvrir nos solutions
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              En savoir plus
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Naturel</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">+30%</div>
              <div className="text-muted-foreground">Performance</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <div className="text-muted-foreground">Impact chimique</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;