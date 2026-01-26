import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aphidImage from "@/assets/aphid.jpg";
import pyraleImage from "@/assets/pyrale.jpg";
import cochenillesImage from "@/assets/cochenilles.jpg";
import aleurodeImage from "@/assets/aleurode.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const BiocontroleVivant = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
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
              {t('product.back')}
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-white">{t('biocontrole.title')}</h1>
          <p className="text-xl text-white/90 mt-2">
            {t('biocontrole.subtitle')}
          </p>
          
          <div className="mt-12 mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-4">
              {t('biocontrole.auxiliary')}
            </h2>
            <p className="text-lg text-white/90 drop-shadow-lg">{t('biocontrole.auxiliary.desc')}</p>
          </div>
        </div>
      </header>

      {/* Ravageurs ciblés */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            {t('biocontrole.pests.title')}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-2xl text-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20">
                <img src={aphidImage} alt={t('biocontrole.pest1.title')} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3">{t('biocontrole.pest1.title')}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{t('biocontrole.pest1.desc')}</p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-2xl text-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20">
                <img src={pyraleImage} alt={t('biocontrole.pest2.title')} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3">{t('biocontrole.pest2.title')}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{t('biocontrole.pest2.desc')}</p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-2xl text-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20">
                <img src={cochenillesImage} alt={t('biocontrole.pest3.title')} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3">{t('biocontrole.pest3.title')}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{t('biocontrole.pest3.desc')}</p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-2xl text-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20">
                <img src={aleurodeImage} alt={t('biocontrole.pest4.title')} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3">{t('biocontrole.pest4.title')}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{t('biocontrole.pest4.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            {t('biocontrole.advantages.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-primary mb-2">{t('biocontrole.adv1.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('biocontrole.adv1.desc')}</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-primary mb-2">{t('biocontrole.adv2.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('biocontrole.adv2.desc')}</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-primary mb-2">{t('biocontrole.adv3.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('biocontrole.adv3.desc')}</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-primary mb-2">{t('biocontrole.adv4.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('biocontrole.adv4.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="text-lg text-muted-foreground mb-8">
            {t('biocontrole.cta')}
          </p>
          <Link to="/#contact-form">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {t('product.contact')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BiocontroleVivant;