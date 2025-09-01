import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MapFrance from "./MapFrance";

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
              <p className="text-muted-foreground">
                Découvrez comment nos biosolutions peuvent transformer votre approche agricole.
              </p>
              <Button 
                size="lg" 
                className="w-full"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                En savoir plus
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
                    <p className="text-muted-foreground">3 avenue Innovia</p>
                    <p className="text-muted-foreground">Damparis, France</p>
                  </div>
                </div>
                <div className="mt-4 h-32 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">📍 Damparis, France</p>
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