import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactForm = () => {
  const { t } = useLanguage();
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t('contact.form.firstName')} *</Label>
                  <Input id="firstName" placeholder={t('contact.form.firstName.placeholder')} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{t('contact.form.lastName')} *</Label>
                  <Input id="lastName" placeholder={t('contact.form.lastName.placeholder')} required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder={t('contact.form.email.placeholder')} required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">{t('contact.form.company')}</Label>
                <Input id="company" placeholder={t('contact.form.company.placeholder')} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={t('contact.form.subject.placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="biofertilisant-boosters">Biofertilisant et Boosters</SelectItem>
                    <SelectItem value="biopesticides">Biopesticides</SelectItem>
                    <SelectItem value="biocontrole">Biocontrôle</SelectItem>
                    <SelectItem value="information-generale">Demande d'information générale</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">{t('contact.form.message')} *</Label>
                <Textarea 
                  id="message" 
                  placeholder={t('contact.form.message.placeholder')} 
                  rows={5}
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full">
                {t('contact.form.submit')}
              </Button>
            </form>
            
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;