import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aphidImage from "@/assets/aphid.jpg";
import pyraleImage from "@/assets/pyrale.jpg";
import cochenillesImage from "@/assets/cochenilles.jpg";
const BiocontroleVivant = () => {
  return <div className="min-h-screen bg-background">
      {/* Header avec bouton retour et background */}
      <header className="relative shadow-sm">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url('/lovable-uploads/bf0fefed-2323-4a06-a4f9-b4681de73dfe.png')`
      }}></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-6">
          <Link to="/#solutions">
            <Button variant="ghost" className="mb-4 text-white border-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux biosolutions
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-white">Bioprotection</h1>
          <p className="text-xl text-white/90 mt-2">
            Solutions biologiques vivantes pour une protection durable des cultures
          </p>
          
          <div className="mt-12 mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-4">
              Insectes Auxiliaires
            </h2>
            <p className="text-lg text-white/90 drop-shadow-lg">Solutions d'insectes pour lutter contre les principaux ravageurs des cultures</p>
          </div>
        </div>
      </header>

      {/* Ravageurs ciblés */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Ravageurs ciblés
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-green-200">
                <img src={aphidImage} alt="Pucerons" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#22c55e] mb-3">Pucerons</h3>
              <p className="text-sm text-muted-foreground">Contre tout types de pucerons en champs et sous serre</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-green-200">
                <img src={pyraleImage} alt="Pyrale" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#22c55e] mb-3">Chenilles ravageuses</h3>
              <p className="text-sm text-muted-foreground">contre les pyrales</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-green-200">
                <img src={cochenillesImage} alt="Cochenilles" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#22c55e] mb-3">Cochenilles</h3>
              <p className="text-sm text-muted-foreground">Contre les cochenilles farineuses des arbres fruitiers</p>
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
              <h3 className="font-semibold text-[#22c55e] mb-2">🌱 Naturel</h3>
              <p className="text-sm text-muted-foreground">Solutions 100% biologiques sans résidus chimiques</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#22c55e] mb-2">🎯 Sélectif</h3>
              <p className="text-sm text-muted-foreground">Préserve les insectes bénéfiques et pollinisateurs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#22c55e] mb-2">🔄 Durable</h3>
              <p className="text-sm text-muted-foreground">Aucun développement de résistance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#22c55e] mb-2">✅ Utilisable en agriculture biologique</h3>
              <p className="text-sm text-muted-foreground">Préserve la santé des champs et des utilisateurs</p>
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
          <Link to="/#contact-form">
            <Button size="lg" className="bg-[#22c55e] hover:bg-[#16a34a] text-white">
              Nous contacter
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default BiocontroleVivant;