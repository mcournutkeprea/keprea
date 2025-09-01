import { Circle, Worm, Bug, Shield, Droplets, GitBranch, Wheat } from "lucide-react";

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Bio-solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Addressing the major challenges faced by farmers worldwide: competitiveness, productivity, environmental preservation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Section Booster */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-8">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-white">Booster solutions</h3>
              <p className="text-lg font-medium text-white/90 mb-6">For soil quality and plant strength</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <span className="text-sm font-medium text-white">Boostea13 - riche en acides aminés libres</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <span className="text-sm font-medium text-white">Fertilea432 - riche en matière organique</span>
                </div>
              </div>

              {/* Icônes symboliques - positionnées à droite de l'image */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Wheat className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
            {/* Image de fond */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/lovable-uploads/5a41caf6-fec0-40ca-984c-f9543cae5d7e.png')` }}
            ></div>
            {/* Filtre sombre */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Section Biocontrôle */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/5 to-secondary/10 p-8">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-white">Bioncontrol solutions</h3>
              <p className="text-lg font-medium text-white/90 mb-6">Protecting your crops, naturally.</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Circle className="w-6 h-6 text-white" />
                    <span className="text-sm font-medium text-white">Biofongicide - substances d'insectes liquides</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Worm className="w-6 h-6 text-white" />
                    <span className="text-sm font-medium text-white">Bionématicide - substances d'insectes solides</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bug className="w-6 h-6 text-white" />
                    <span className="text-sm font-medium text-white">Solutions innovantes contre les ravageurs</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image de fond */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/lovable-uploads/2b2944de-aec7-4fae-a32a-04a140dc619e.png')` }}
            ></div>
            {/* Filtre sombre */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;