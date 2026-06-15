import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    company: "",
    message: "",
  });
  const [rgpdAccepted, setRgpdAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      toast({
        title: t('toast.error'),
        description: t('toast.error.required'),
        variant: "destructive",
      });
      return;
    }

    if (!rgpdAccepted) {
      toast({
        title: t('toast.error'),
        description: "Vous devez accepter la politique de confidentialité pour envoyer votre message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: t('toast.success'),
        description: t('toast.success.desc'),
      });

      setFormData({
        firstName: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: t('toast.error'),
        description: t('toast.error.send'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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

        <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
          <h3 className="text-xl font-semibold text-foreground text-center mb-6">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">{t('contact.form.firstName')} *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder={t('contact.form.firstName.placeholder')}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">{t('contact.form.company')}</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder={t('contact.form.company.placeholder')}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder={t('contact.form.email.placeholder')}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t('contact.form.message')} *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder={t('contact.form.message.placeholder')}
                  rows={5}
                  required
                />
              </div>
              
              <div className="flex items-start gap-3">
                <Checkbox
                  id="rgpd"
                  checked={rgpdAccepted}
                  onCheckedChange={(checked) => setRgpdAccepted(checked === true)}
                  aria-required="true"
                />
                <Label htmlFor="rgpd" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  J'accepte que mes données soient traitées par Keprea dans le but de répondre à ma demande, conformément à la{" "}
                  <Link to="/politique-confidentialite" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    politique de confidentialité
                  </Link>
                  . *
                </Label>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting || !rgpdAccepted}>
                {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
              </Button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
