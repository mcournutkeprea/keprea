import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Boosters = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header avec bouton retour et background */}
      <header className="relative shadow-sm">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url('/lovable-uploads/5a41caf6-fec0-40ca-984c-f9543cae5d7e.png')`
        }}></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-6">
          <Link to="/#solutions">
            <Button variant="ghost" className="mb-4 text-white border-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux biosolutions
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-white">Boosters</h1>
          <p className="text-xl text-white/90 mt-2">
            Solutions biostimulantes pour optimiser le potentiel de vos cultures
          </p>
          
          <div className="mt-12 mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">Des solutions liquides ou solides pour booster la santé de vos cultures</h2>
          </div>
        </div>
      </header>

      {/* Produits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Notre gamme de boosters
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Boostea13 */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-primary mb-4">Boostea13</h3>
              <p className="text-muted-foreground mb-6">Riche en polypeptides de très petites tailles et en acides aminés libres (proline), Boostea13 augmente la résistance face aux stress abiotiques et améliore l'activité du sol.</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Améliore la résistance aux stress hydrique et phytotoxiques</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Améliore l'assimilation nutritive</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Stimule la photosynthèse</span>
                </div>
              </div>
            </div>

            {/* Soilea110 */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-primary mb-4">Soilea110</h3>
              <p className="text-muted-foreground mb-6">2% de chitine pure pour stimuler l'activité chitinolitique des sols et améliorer la système de défense des plantes.</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Matière organique de qualité</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Stimule le SDP</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Augmente la présence des bons microorganismes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Pourquoi choisir nos boosters ?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Efficacité prouvée</h3>
                  <p className="text-muted-foreground text-sm">
                    Résultats mesurables sur la croissance et les rendements
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">100% naturel</h3>
                  <p className="text-muted-foreground text-sm">
                    Formulations respectueuses de l'environnement
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Compatible</h3>
                  <p className="text-muted-foreground text-sm">
                    S'intègre parfaitement aux programmes de fertilisation et traitements phytosanitaires
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Support technique</h3>
                  <p className="text-muted-foreground text-sm">Pas de modification de l'itinéraire technique, ni d'investissement dans le matériel agricole : application foliaire ou au sol.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Prêt à booster vos cultures ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contactez notre équipe pour découvrir comment nos boosters peuvent améliorer vos rendements.
          </p>
          <Link to="/#contact-form">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Nous contacter
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Boosters;
