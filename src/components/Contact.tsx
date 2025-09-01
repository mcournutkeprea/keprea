import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MapFrance from "./MapFrance";
import europeMapLocation from "@/assets/europe-map-location.png";

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
            <div className="w-full">
              <img 
                src={europeMapLocation} 
                alt="Localisation Keprea - 2H de Paris, Lyon, Bâle, Genève" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;