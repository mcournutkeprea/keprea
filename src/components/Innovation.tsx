const Innovation = () => {
  return (
    <section id="innovation" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              L'innovation par les insectes
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nous exploitons le potentiel extraordinaire des insectes pour créer des solutions 
              agricoles durables, performantes et peu coûteuses. Notre approche scientifique combine tradition, innovation pour répondre au besoin des producteurs agricoles.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <span className="text-white text-lg font-bold">🧬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Acides aminés bioactifs</h3>
                  <p className="text-muted-foreground text-sm">
                    Extraction optimisée pour une biodisponibilité maximale
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <span className="text-white text-lg font-bold">🔬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Chitine fonctionnelle</h3>
                  <p className="text-muted-foreground text-sm">
                    Stimulation naturelle des défenses des plantes
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <span className="text-white text-lg font-bold">🐛</span>
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
          
          <div className="space-y-6">
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">Pourquoi les substances issues d'insectes ?</h3>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary mb-2">Interagissent avec la plante qui "répond" pour mieux se défendre des stress de l'environnement</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary mb-2">Respectent le sol sans aucun résidu toxique</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary mb-2">Améliorent le rendement</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  "Les substances issues d'insectes offrent une alternative écologique et performante aux produits chimiques de synthèse."
                </p>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">Pourquoi les macro-organismes vivants ?</h3>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">84%</div>
                  <div className="text-sm text-muted-foreground">des cultures dépendent des insectes pour leur qualité et rendement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5500</div>
                  <div className="text-sm text-muted-foreground">auxiliaires utiles recensés en France</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10 000</div>
                  <div className="text-sm text-muted-foreground">individus actifs par m² en moyenne</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  "Les macro-organismes créent un écosystème équilibré, transformant les ressources naturelles en solutions durables pour l'agriculture."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
