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
          {/* Section Biostimulant - Booster */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-8">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Biostimulant solutions</h3>
              <p className="text-lg font-medium text-muted-foreground mb-6">For soil quality and plant strength</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Boostea13 - Seed treatment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Solea110 - Foliar application</span>
                </div>
              </div>

              {/* Icônes symboliques */}
              <div className="flex gap-6 justify-center mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
                    <div className="text-2xl">🛡️</div>
                  </div>
                  <span className="text-xs text-center">Protection</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
                    <div className="text-2xl">💧</div>
                  </div>
                  <span className="text-xs text-center">Hydratation</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
                    <div className="text-2xl">🌱</div>
                  </div>
                  <span className="text-xs text-center">Racines</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
                    <div className="text-2xl">🌽</div>
                  </div>
                  <span className="text-xs text-center">Rendement</span>
                </div>
              </div>
            </div>
            
            {/* Image de fond */}
            <div 
              className="absolute inset-0 opacity-30 bg-cover bg-center"
              style={{ backgroundImage: `url('/lovable-uploads/7feb4ae5-12e3-41d1-b89f-3d1f9c152d85.png')` }}
            ></div>
          </div>

          {/* Section Biocontrôle */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/5 to-secondary/10 p-8">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Bioncontrol solutions</h3>
              <p className="text-lg font-medium text-muted-foreground mb-6">Protecting your crops, naturally.</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🛡️</div>
                    <span className="text-sm font-medium">Biofongicide - substances d'insectes liquides</span>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">En développement</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🛡️</div>
                    <span className="text-sm font-medium">Bionématicide - substances d'insectes solides</span>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">En développement</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🛡️</div>
                    <span className="text-sm font-medium">Solutions innovantes contre les ravageurs</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">En développement</span>
                    <p className="text-xs text-muted-foreground mt-1">Méthodes d'élevage uniques & combinaisons biocontrôle</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-muted">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-sm font-medium">Insectes auxiliaires (Lacewing)</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image de fond */}
            <div 
              className="absolute inset-0 opacity-20 bg-cover bg-center"
              style={{ backgroundImage: `url('/lovable-uploads/2b2944de-aec7-4fae-a32a-04a140dc619e.png')` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;