import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Boosters = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header avec bouton retour et background */}
      <header className="relative shadow-sm">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url('/lovable-uploads/5a41caf6-fec0-40ca-984c-f9543cae5d7e.png')`
        }}></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-6">
          <Link to="/#solutions">
            <Button variant="ghost" className="mb-4 text-white border-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('product.back')}
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-white">{t('boosters.title')}</h1>
          <p className="text-xl text-white/90 mt-2">
            {t('boosters.subtitle')}
          </p>
          
          <div className="mt-12 mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">{t('boosters.headline')}</h2>
          </div>
        </div>
      </header>

      {/* Produits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            {t('boosters.range.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Boostea13 */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-primary mb-4">Boostea13</h3>
              <p className="text-muted-foreground mb-6">{t('boosters.boostea.desc')}</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">{t('boosters.boostea.benefit1')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">{t('boosters.boostea.benefit2')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">{t('boosters.boostea.benefit3')}</span>
                </div>
              </div>
            </div>

            {/* Soilea110 */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-primary mb-4">Soilea110</h3>
              <p className="text-muted-foreground mb-6">{t('boosters.soilea.desc')}</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">{t('boosters.soilea.benefit1')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">{t('boosters.soilea.benefit2')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">{t('boosters.soilea.benefit3')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            {t('boosters.why.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t('boosters.why1.title')}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t('boosters.why1.desc')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t('boosters.why2.title')}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t('boosters.why2.desc')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t('boosters.why3.title')}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t('boosters.why3.desc')}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t('boosters.why4.title')}</h3>
                  <p className="text-muted-foreground text-sm">{t('boosters.why4.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('boosters.cta.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('boosters.cta.desc')}
          </p>
          <Link to="/#contact-form">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              {t('product.contact')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Boosters;