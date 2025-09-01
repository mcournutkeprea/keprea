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
                  <span className="text-sm font-medium">K Boost - Seed treatment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">K Stim - Foliar application</span>
                </div>
              </div>

              {/* Formules chimiques */}
              <div className="flex gap-4 mb-4">
                <div className="bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/20">
                  <span className="text-sm font-mono text-foreground">Proline C₅H₉NO₂</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/20">
                  <span className="text-sm font-mono text-foreground">Glutamic acid C₅H₉NO₄</span>
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
                    <span className="text-sm font-medium">Biofongicide</span>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">En développement</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🛡️</div>
                    <span className="text-sm font-medium">Bionématicide</span>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">En développement</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🛡️</div>
                    <span className="text-sm font-medium">Contre les principaux ravageurs</span>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">En développement</span>
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