const Innovation = () => {
  return (
    <section id="innovation" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              L'innovation par les insectes
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nous exploitons le potentiel extraordinaire des insectes pour créer des solutions 
              agricoles révolutionnaires. Notre approche scientifique combine tradition et innovation 
              pour vous offrir des produits performants et respectueux de l'environnement.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm">🧬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Acides aminés bioactifs</h3>
                  <p className="text-muted-foreground text-sm">
                    Extraction optimisée pour une biodisponibilité maximale
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm">🔬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Chitine fonctionnelle</h3>
                  <p className="text-muted-foreground text-sm">
                    Stimulation naturelle des défenses des plantes
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm">🐛</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Biocontrôle vivant</h3>
                  <p className="text-muted-foreground text-sm">
                    Équilibre écologique et protection durable
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-6">Pourquoi les insectes ?</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Moins d'eau</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">80%</div>
                <div className="text-sm text-muted-foreground">Moins d'espace</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-muted-foreground">Moins de CO₂</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Recyclage</div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                "Une révolution agricole respectueuse de la planète"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;