import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactForm = () => {
  return (
    <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez comment nos biosolutions peuvent transformer votre agriculture
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Parlez-nous de votre projet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input id="firstName" placeholder="Votre prénom" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input id="lastName" placeholder="Votre nom" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Entreprise</Label>
                <Input id="company" placeholder="Nom de votre entreprise" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Sujet d'intérêt</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un sujet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="biostimulants">Solutions biostimulantes</SelectItem>
                    <SelectItem value="biocontrol">Solutions de biocontrôle</SelectItem>
                    <SelectItem value="partnership">Partenariat</SelectItem>
                    <SelectItem value="information">Demande d'information générale</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Décrivez votre projet ou vos besoins..." 
                  rows={5}
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full">
                Envoyer ma demande
              </Button>
            </form>
            
            <div className="pt-6 border-t border-muted">
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">Ou contactez-nous directement :</p>
                <div className="flex justify-center items-center">
                  <span className="text-sm font-medium">📍 Damparis, France</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;