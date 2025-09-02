import { MapPin, Factory, Leaf, Users } from "lucide-react";
import FranceMap from "./FranceMap";

const Production = () => {
  return (
    <section id="production" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Notre site de production
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre site de production moderne situé à Damparis, en France, où nous développons nos solutions bio-innovantes
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 to-accent/20 p-12 min-h-[500px]">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Un site d'excellence
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Localisation stratégique</h4>
                      <p className="text-muted-foreground">
                        Situé sur la commune de Damparis, notre site est à seulement 2 heures de Paris, Bâle, Genève et Lyon, au cœur d'un important bassin céréalier et viticole français.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Factory className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Technologies modernes</h4>
                      <p className="text-muted-foreground">
                        Équipements de pointe pour la production de biostimulants et solutions de biocontrôle
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Respect de l'environnement</h4>
                      <p className="text-muted-foreground">
                        Processus de production éco-responsable et certifications qualité
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Équipe d'experts</h4>
                      <p className="text-muted-foreground">
                        Une équipe de spécialistes dédiée à l'innovation et à la qualité
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden bg-primary/5 border-2 border-primary/20">
                  <img 
                    src="/lovable-uploads/6f3f0723-78e2-48e6-b36a-2520e97f1f40.png"
                    alt="Site de production Keprea à Damparis"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-1">
                <FranceMap />
              </div>
            </div>

            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;