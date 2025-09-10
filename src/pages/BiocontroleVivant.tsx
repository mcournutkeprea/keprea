import { ArrowLeft, Bug, Worm } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const BiocontroleVivant = () => {
  return <div className="min-h-screen bg-background">
      {/* Header avec bouton retour */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link to="/#solutions">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux biosolutions
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-[#22c55e]">Biocontrôle Vivant</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Solutions biologiques vivantes pour une protection durable des cultures
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/5 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Insectes Auxiliaires
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Solutions d'insectes pour lutter contre les principaux ravageurs des cultures
          </p>
          
          
        </div>
      </section>

      {/* Ravageurs ciblés */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Ravageurs ciblés
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bug className="w-8 h-8 text-[#22c55e]" />
              </div>
              <h3 className="text-xl font-bold text-[#22c55e] mb-3">Pucerons</h3>
              <p className="text-sm text-muted-foreground">Coccinelles, chrysopes et parasitoïdes spécifiques</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Worm className="w-8 h-8 text-[#22c55e]" />
              </div>
              <h3 className="text-xl font-bold text-[#22c55e] mb-3">Pyrale</h3>
              <p className="text-sm text-muted-foreground">Trichogrammes et agents entomopathogènes</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bug className="w-8 h-8 text-[#22c55e]" />
              </div>
              <h3 className="text-xl font-bold text-[#22c55e] mb-3">Cochenilles</h3>
              <p className="text-sm text-muted-foreground">Prédateurs spécialisés et parasitoïdes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Avantages du biocontrôle
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-secondary mb-2">🌱 Naturel</h3>
              <p className="text-sm text-muted-foreground">Solutions 100% biologiques sans résidus chimiques</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-secondary mb-2">🎯 Sélectif</h3>
              <p className="text-sm text-muted-foreground">Préserve les insectes bénéfiques et pollinisateurs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-secondary mb-2">🔄 Durable</h3>
              <p className="text-sm text-muted-foreground">Aucun développement de résistance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-secondary mb-2">✅ Certifié bio</h3>
              <p className="text-sm text-muted-foreground">Compatible agriculture biologique</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="container mx-auto max-w-2xl text-center">
          
          <p className="text-lg text-muted-foreground mb-8">
            Découvrez nos solutions de protection biologique pour une agriculture durable et performante.
          </p>
          <Button size="lg" className="bg-[#22c55e] hover:bg-[#16a34a] text-white">
            Nous contacter
          </Button>
        </div>
      </section>
    </div>;
};
export default BiocontroleVivant;