import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validation des champs requis
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
        toast.error("Veuillez remplir tous les champs obligatoires");
        return;
      }

      // Construction du nom complet
      const fullName = `${formData.firstName} ${formData.lastName}`;

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: `Sujet: ${formData.subject}\n\n${formData.message}`,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Votre message a été envoyé avec succès !");
        // Réinitialiser le formulaire
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error(result.error || "Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error("Erreur:", error);
      toast.error("Erreur lors de l'envoi du message. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">{t('contact.form.title')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t('contact.form.firstName')} *</Label>
                  <Input 
                    id="firstName" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.firstName.placeholder')} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{t('contact.form.lastName')} *</Label>
                  <Input 
                    id="lastName" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.lastName.placeholder')} 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.email.placeholder')} 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">{t('contact.form.company')}</Label>
                <Input 
                  id="company" 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.company.placeholder')} 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Votre numéro de téléphone" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                <Select value={formData.subject} onValueChange={handleSelectChange}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('contact.form.subject.placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="booster">{t('contact.form.subject.booster')}</SelectItem>
                    <SelectItem value="biocontrol">{t('contact.form.subject.biocontrol')}</SelectItem>
                    <SelectItem value="pollinisation">{t('contact.form.subject.pollination')}</SelectItem>
                    <SelectItem value="plusieurs-solutions">{t('contact.form.subject.multiple')}</SelectItem>
                    <SelectItem value="information">{t('contact.form.subject.info')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">{t('contact.form.message')} *</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.message.placeholder')} 
                  rows={5}
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : t('contact.form.submit')}
              </Button>
            </form>
            
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;