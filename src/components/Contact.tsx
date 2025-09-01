import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transformons ensemble votre agriculture
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nos biosolutions peuvent optimiser vos rendements 
            tout en respectant l'environnement
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Parlons de votre projet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Expertise personnalisée</h3>
                <p className="text-muted-foreground text-sm">
                  Nos experts analysent vos besoins spécifiques pour vous proposer 
                  les solutions les plus adaptées à vos cultures.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Accompagnement complet</h3>
                <p className="text-muted-foreground text-sm">
                  De la consultation initiale au suivi de vos résultats, 
                  nous vous accompagnons à chaque étape.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Innovation continue</h3>
                <p className="text-muted-foreground text-sm">
                  Bénéficiez des dernières avancées de la recherche en biosolutions 
                  et agtech.
                </p>
              </div>
              
              <Button size="lg" className="w-full">
                Demander une consultation
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">contact@keprea.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Localisation</h3>
                    <p className="text-muted-foreground">France, spécialistes agtech</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-xl">🔬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">R&D</h3>
                    <p className="text-muted-foreground">Innovation biosolutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;