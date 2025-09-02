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
          {/* Schéma principal inspiré du cycle */}
          <div className="relative">
            {/* Centre - Portfolio */}
            <div className="flex justify-center mb-12">
              <div className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg text-center border-4 border-primary shadow-lg">
                Portfolio 100% à base d'insectes
              </div>
            </div>

            {/* Cycle des solutions en cercle */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {/* Biofertilisants */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mx-auto mb-4 shadow-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/f70fe1c8-b7e1-4261-bf4d-f1a469759696.png" 
                    alt="Biofertilisants - granulés organiques" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-foreground mb-2">Biofertilisants</h3>
                <p className="text-sm text-muted-foreground">Richesse en matière organique et teneur NPK équilibrée</p>
              </div>

              {/* Booster */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-green-500 flex items-center justify-center mx-auto mb-4 shadow-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/f27e5e5d-c3ab-4d85-b49e-823ca71f99df.png" 
                    alt="Booster - pulvérisateur agricole" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-foreground mb-2">Booster</h3>
                <p className="text-sm text-muted-foreground">Molécules d'intérêt contre l'ensemble des stress de la plante</p>
              </div>

              {/* Substances naturelles */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center mx-auto mb-4 shadow-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/9117a39b-c413-496a-a9cd-892017ab37b7.png" 
                    alt="Substances naturelles - structure moléculaire huile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-foreground mb-2">Substances naturelles</h3>
                <p className="text-sm text-muted-foreground">des Extraits d'insectes pour lutter directement contre les pathogènes</p>
              </div>

              {/* Macro-organismes */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1L13.5 2.5L16.75 5.75H7.25L10.5 2.5L9 1L3 7V9H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V9H21M7 9H17V19H7V9Z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-foreground mb-2">Macro-organismes</h3>
                <p className="text-sm text-muted-foreground">le vivant pour protéger les cultures</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSchema;