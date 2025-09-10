import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BiocontroleVivant = () => {
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
          <h1 className="text-4xl font-bold text-primary">Biocontrôle Vivant</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Solutions biologiques vivantes pour une protection durable des cultures
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/5 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="text-6xl font-extrabold text-secondary mb-4">
              BIO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Biocontrôle Vivant
            </h2>
            <p className="text-lg text-muted-foreground">
              Solutions biologiques vivantes pour une protection durable des cultures
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/50 p-6 rounded-lg">
              <h3 className="font-semibold text-secondary mb-2">✓ Nématicide biologique</h3>
              <p className="text-sm text-muted-foreground">Contrôle efficace des nématodes parasites</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg">
              <h3 className="font-semibold text-secondary mb-2">✓ Lutte intégrée</h3>
              <p className="text-sm text-muted-foreground">Protection contre divers ravageurs</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg">
              <h3 className="font-semibold text-secondary mb-2">✓ Micro-organismes vivants</h3>
              <p className="text-sm text-muted-foreground">Agents biologiques actifs et durables</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg">
              <h3 className="font-semibold text-secondary mb-2">✓ Zéro résidu</h3>
              <p className="text-sm text-muted-foreground">Protection sans impact environnemental</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Nos solutions de biocontrôle
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Nématicides */}
            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🦠</span>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Nématicides biologiques</h3>
                <p className="text-muted-foreground">
                  Micro-organismes spécialisés dans la lutte contre les nématodes parasites des racines
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-sm">Champignons nématophages</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-sm">Bactéries antagonistes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-sm">Action préventive et curative</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-sm">Compatible agriculture biologique</span>
                </div>
              </div>
            </div>

            {/* Lutte contre ravageurs */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐛</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Lutte contre ravageurs</h3>
                <p className="text-muted-foreground">
                  Agents biologiques ciblés pour le contrôle spécifique des insectes nuisibles
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Bacillus thuringiensis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Champignons entomopathogènes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Spécificité d'action élevée</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Préservation des auxiliaires</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mode d'action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Mode d'action du biocontrôle
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Application ciblée</h3>
              <p className="text-sm text-muted-foreground">
                Application directe sur les zones à traiter (sol, semences, feuillage)
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Recherche active</h3>
              <p className="text-sm text-muted-foreground">
                Les agents biologiques recherchent activement leurs cibles
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Action spécifique</h3>
              <p className="text-sm text-muted-foreground">
                Infection ou parasitisme spécifique des organismes nuisibles
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Protection durable</h3>
              <p className="text-sm text-muted-foreground">
                Établissement d'une protection à long terme dans l'écosystème
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Avantages du biocontrôle vivant
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-secondary mb-2">🌱 Durabilité</h3>
                <p className="text-sm text-muted-foreground">
                  Solution à long terme qui s'intègre naturellement dans l'écosystème
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-secondary mb-2">🎯 Spécificité</h3>
                <p className="text-sm text-muted-foreground">
                  Action ciblée sans impact sur les organismes non-cibles
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-secondary mb-2">💚 Zéro résidu</h3>
                <p className="text-sm text-muted-foreground">
                  Aucun résidu chimique dans les récoltes ou l'environnement
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-secondary mb-2">🔄 Résistance</h3>
                <p className="text-sm text-muted-foreground">
                  Prévention du développement de résistances chez les ravageurs
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-secondary mb-2">🤝 Compatibilité</h3>
                <p className="text-sm text-muted-foreground">
                  Compatible avec l'agriculture biologique et les auxiliaires
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-secondary mb-2">📈 Efficacité</h3>
                <p className="text-sm text-muted-foreground">
                  Efficacité éprouvée dans des conditions d'utilisation optimales
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Adoptez le biocontrôle vivant
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Découvrez nos solutions de protection biologique pour une agriculture durable et performante.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            Nous contacter
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BiocontroleVivant;