const ProductsSchema = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Notre portfolio de biosolutions couvre les besoins agricoles pour toute culture
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Schéma principal */}
          <div className="relative">
            {/* Arbre central */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Trunk and roots */}
                <div className="flex flex-col items-center">
                  <div className="text-6xl mb-2">🌳</div>
                  <div className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-center border-2 border-primary">
                    Portfolio 100% à base d'insectes
                  </div>
                </div>
              </div>
            </div>

            {/* Grid layout pour les différentes catégories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              
              {/* Reproduction */}
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-4 text-foreground">Reproduction</h3>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground mb-2">Pollinisation</div>
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 border-4 border-gray-300 flex items-center justify-center">
                      <span className="text-2xl">🐝</span>
                    </div>
                  </div>
                  <div className="text-sm font-medium">Bourdon</div>
                </div>
              </div>

              {/* Booster */}
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-4 text-primary">Booster</h3>
                <div className="space-y-4">
                  <div className="flex justify-center gap-2">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500 border-2 border-blue-600 mb-1"></div>
                      <div className="text-xs">K Boost</div>
                      <div className="text-xs text-muted-foreground">Seed</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-primary border-2 border-primary mb-1"></div>
                      <div className="text-xs">K Stim</div>
                      <div className="text-xs text-muted-foreground">Foliar</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Biofertilisation */}
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-4 text-primary">Biofertilisation</h3>
                <div className="space-y-3">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-200 border-4 border-amber-400 flex items-center justify-center">
                      <div className="w-8 h-8 bg-amber-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-sm font-medium">K Frass</div>
                </div>
              </div>

              {/* Protection des plantes */}
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-4 text-primary">Protection des plantes</h3>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground mb-2">Biocontrôle</div>
                  <div className="grid grid-cols-2 gap-2 justify-items-center">
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-full bg-yellow-300 border-2 border-yellow-500 mb-1"></div>
                      <div className="text-xs">K Protect</div>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-gray-600 mb-1"></div>
                      <div className="text-xs">K Tin</div>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-full border-2 border-primary bg-white flex items-center justify-center mb-1">
                        <span className="text-xs">🐛</span>
                      </div>
                      <div className="text-xs">Ephestia</div>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-full border-2 border-primary bg-white flex items-center justify-center mb-1">
                        <span className="text-xs">🐛</span>
                      </div>
                      <div className="text-xs">Lacewing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flèches déconnectées pour l'effet visuel */}
            <div className="hidden lg:block absolute top-32 left-1/4 transform -translate-x-1/2">
              <div className="text-4xl text-primary rotate-45">➜</div>
            </div>
            <div className="hidden lg:block absolute top-32 right-1/4 transform translate-x-1/2">
              <div className="text-4xl text-primary -rotate-45">➜</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSchema;