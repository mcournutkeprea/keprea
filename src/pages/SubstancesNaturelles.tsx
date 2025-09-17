import { ArrowLeft } from "lucide-react";
import plantDropletsBg from "@/assets/plant-droplets-bg.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const SubstancesNaturelles = () => {
  return <div className="min-h-screen bg-background">
      {/* Header avec bouton retour et background */}
      <header className="relative shadow-sm">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${plantDropletsBg})`
      }}></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 py-6">
          <Link to="/#solutions">
            <Button variant="ghost" className="mb-4 text-white border-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux biosolutions
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-white">Substances Naturelles</h1>
          <p className="text-xl text-white/90 mt-2">Solutions cohérentes et performantes à base d'extraits naturels d'insectes</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-500/10 to-green-600/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="text-6xl font-extrabold text-[#22c55e] mb-4">
              100%
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Substances Naturelles
            </h2>
            
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/50 p-6 rounded-lg">
              <h3 className="font-semibold text-[#22c55e] mb-2">✓ Extraits d'insectes</h3>
              <p className="text-sm text-muted-foreground">Substances actives naturelles issues d'insectes</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg">
              <h3 className="font-semibold text-[#22c55e] mb-2">✓ Stimulation des défenses</h3>
              <p className="text-sm text-muted-foreground">Activation naturelle des mécanismes de protection</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg">
              <h3 className="font-semibold text-[#22c55e] mb-2">✓ Respect de l'environnement</h3>
              <p className="text-sm text-muted-foreground">Solutions biodégradables et non toxiques</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg">
              <h3 className="font-semibold text-[#22c55e] mb-2">✓Solutions liquides et solides</h3>
              <p className="text-sm text-muted-foreground">Contre les ravageurs du système foliaire et racinaire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Notre technologie d'extraction
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🦗</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Sélection d'insectes</h3>
              <p className="text-sm text-muted-foreground">
                Choix rigoureux d'espèces d'insectes aux propriétés spécifiques
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚗️</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Extraction douce</h3>
              <p className="text-sm text-muted-foreground">
                Procédés d'extraction préservant l'intégrité des molécules actives
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Formulation</h3>
              <p className="text-sm text-muted-foreground">
                Développement de solutions prêtes à l'emploi pour l'agriculture
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Mécanisme d'action
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Comment ça fonctionne ?
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#22c55e] font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">à voir si on communique / rester flou</h4>
                  </div>
                </div>
                
                
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Avantages clés
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-[#22c55e] mb-2">🌿 Respectueux de l'environnement</h4>
                  <p className="text-sm text-muted-foreground">
                    Solutions biodégradables qui ne laissent pas de résidus dans l'environnement
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-[#22c55e] mb-2">🛡️ Mode d'action naturel</h4>
                  <p className="text-sm text-muted-foreground">
                    Stimulation des défenses endogènes sans perturber l'équilibre naturel
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-[#22c55e] mb-2">🔄 Durabilité</h4>
                  <p className="text-sm text-muted-foreground">
                    Contribue à une agriculture durable et respectueuse de la biodiversité
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Découvrez l'innovation naturelle
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Rejoignez la révolution de l'agriculture écologique avec nos substances naturelles innovantes.
          </p>
          <Button size="lg" className="bg-[#22c55e] hover:bg-[#16a34a] text-white">
            Nous contacter
          </Button>
        </div>
      </section>
    </div>;
};
export default SubstancesNaturelles;