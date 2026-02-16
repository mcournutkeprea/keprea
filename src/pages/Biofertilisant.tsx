import { ArrowLeft, Wheat, Droplets, Leaf, Shield } from "lucide-react";
import logoAb from "@/assets/logo-ab.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
const Biofertilisant = () => {
  const {
    t
  } = useLanguage();
  return <div className="min-h-screen bg-background">
      {/* Header avec bouton retour et background */}
       <header className="relative shadow-sm min-h-[280px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url('/lovable-uploads/514c70d9-ef8f-4f9f-8df3-f38124715fa6.png')`
      }}></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="relative">
            <Link to="/#solutions">
              <Button variant="ghost" className="mb-4 text-white border-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('product.back')}
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white">{t('biofertilisant.title')}</h1>
            <p className="text-xl text-white/90 mt-2">
              {t('biofertilisant.subtitle')}
            </p>
          </div>
        </div>
        <img src={logoAb} alt="Agriculture Biologique" className="absolute bottom-4 right-4 w-16 h-16 md:w-20 md:h-20 object-contain z-10" />
      </header>

      {/* Composition section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <div className="text-4xl font-bold text-primary mb-4">4%</div>
              <h3 className="text-xl font-bold mb-2">{t('biofertilisant.phosphore')}</h3>
              <p className="text-muted-foreground">
                {t('biofertilisant.phosphore.desc')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <div className="text-4xl font-bold text-primary mb-4">3%</div>
              <h3 className="text-xl font-bold mb-2">{t('biofertilisant.azote')}</h3>
              <p className="text-muted-foreground">
                {t('biofertilisant.azote.desc')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <div className="text-4xl font-bold text-primary mb-4">2%</div>
              <h3 className="text-xl font-bold mb-2">{t('biofertilisant.potassium')}</h3>
              <p className="text-muted-foreground">
                {t('biofertilisant.potassium.desc')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
              <div className="text-4xl font-bold text-primary mb-4">85%</div>
              <h3 className="text-xl font-bold mb-2">{t('biofertilisant.organic')}</h3>
              <p className="text-muted-foreground">
                {t('biofertilisant.organic.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('biofertilisant.advantages')}</h2>
          <div className="flex items-center gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{t('biofertilisant.adv1.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('biofertilisant.adv1.desc')}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{t('biofertilisant.adv2.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('biofertilisant.adv2.desc')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{t('biofertilisant.adv3.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('biofertilisant.adv3.desc')}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Wheat className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{t('biofertilisant.adv4.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('biofertilisant.adv4.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('biofertilisant.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('biofertilisant.cta.desc')}
          </p>
          <Link to="/#contact-form">
            <Button size="lg" variant="secondary">
              {t('product.contact')}
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default Biofertilisant;