import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Boosters = () => {
  return <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Retour à l'accueil</span>
            </Link>
            <div className="h-6 w-px bg-border"></div>
            <h1 className="text-2xl font-bold text-foreground">Boosters</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="text-6xl font-extrabold text-primary mb-4">
              BOOST
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Boosters de croissance
            </h2>
            <p className="text-lg text-muted-foreground">
              Solutions biostimulantes pour optimiser le potentiel de vos cultures
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/50 p-6 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">✓ Stimulation naturelle</h3>
              <p className="text-sm text-muted-foreground">Activation des défenses naturelles des plantes</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">✓ Amélioration des rendements</h3>
              <p className="text-sm text-muted-foreground">Optimisation de la croissance et de la productivité</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">✓ Résistance accrue</h3>
              <p className="text-sm text-muted-foreground">Meilleure tolérance aux stress environnementaux</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">✓ Application facile</h3>
              <p className="text-sm text-muted-foreground">Formulation adaptée aux équipements agricoles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Notre gamme de boosters
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Boostea13 */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary mb-4">Boostea13</h3>
              <p className="text-muted-foreground mb-6">
                Riche en acides aminés libres, ce booster favorise l'absorption des nutriments 
                et stimule la croissance végétale naturellement.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Acides aminés libres concentrés</span>
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

            {/* Fertilea432 */}
            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-secondary mb-4">Soilea110</h3>
              <p className="text-muted-foreground mb-6">2% de chitine pour stimuler l'activité chitinolitique des sols et favoriser la présence de bactéries qui améliorer le système de défense des plantes.</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-sm">Matière organique de qualité</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-sm">Stimule le SDP</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-sm">Epandu avec un micro granulateur lors du semis</span>
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
                    S'intègre parfaitement aux programmes de fertilisation
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Support technique</h3>
                  <p className="text-muted-foreground text-sm">
                    Accompagnement personnalisé pour optimiser l'utilisation
                  </p>
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
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Nous contacter
          </Button>
        </div>
      </section>
    </div>;
};
export default Boosters;