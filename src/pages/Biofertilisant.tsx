import { ArrowLeft, Wheat, Droplets, Leaf, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Biofertilisant = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header avec bouton retour */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link to="/#solutions">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux biosolutions
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-primary">Biofertilisant</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Nutrition optimale des cultures
          </p>
        </div>
      </header>

      {/* Hero Banner with Background Image */}
      <section className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url('/lovable-uploads/514c70d9-ef8f-4f9f-8df3-f38124715fa6.png')`
        }}></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Biofertilisant</h2>
            <p className="text-xl">Nutrition optimale des cultures</p>
          </div>
        </div>
      </section>


      {/* Composition section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Composition NPK 4-3-2</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <div className="text-4xl font-bold text-primary mb-4">4%</div>
              <h3 className="text-xl font-bold mb-2">Phosphore (P)</h3>
              <p className="text-muted-foreground">
                Stimule le développement racinaire et la floraison
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <div className="text-4xl font-bold text-primary mb-4">3%</div>
              <h3 className="text-xl font-bold mb-2">Azote (N)</h3>
              <p className="text-muted-foreground">
                Favorise la croissance végétative et le développement des feuilles
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <div className="text-4xl font-bold text-primary mb-4">2%</div>
              <h3 className="text-xl font-bold mb-2">Potassium (K)</h3>
              <p className="text-muted-foreground">
                Renforce la résistance aux maladies et améliore la qualité des fruits
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <div className="text-4xl font-bold text-primary mb-4">85%</div>
              <h3 className="text-xl font-bold mb-2">Matière organique</h3>
              <p className="text-muted-foreground">
                Améliore la qualité du sol
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Avantages clés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Origine 100% naturelle</h3>
                  <p className="text-muted-foreground">
                    Formulé à partir de matières organiques premium, sans produits chimiques de synthèse.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Absorption rapide</h3>
                  <p className="text-muted-foreground">
                    Les nutriments sont immédiatement disponibles pour les plantes.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Améliore la structure du sol</h3>
                  <p className="text-muted-foreground">
                    Enrichit la terre et favorise l'activité microbienne bénéfique.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Wheat className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Rendements supérieurs</h3>
                  <p className="text-muted-foreground">
                    Augmente significativement la productivité de vos cultures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à optimiser vos cultures ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour découvrir comment notre biofertilisant peut transformer votre agriculture.
          </p>
          <Link to="/#contact">
            <Button size="lg" variant="secondary">
              Nous contacter
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Biofertilisant;