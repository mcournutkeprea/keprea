import { Head } from "vite-react-ssg";
import { ArrowLeft, Leaf, FlaskConical } from "lucide-react";
import plantDropletsBg from "@/assets/plant-droplets-bg.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
const ExtraitsNaturels = () => {
  const {
    t
  } = useLanguage();
  return <div className="min-h-screen bg-background">
      <Head>
        <title>Biopesticides Naturels Keprea | Extraits d'Insectes</title>
        <meta name="description" content="Biopesticides à base d'extraits d'insectes Keprea : molécules bioactives naturelles pour protéger vos cultures. Homologués agriculture biologique, zéro résidu chimique." />
      </Head>
      {/* Header avec bouton retour et background */}
      <header className="relative shadow-sm min-h-[280px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${plantDropletsBg})`
      }}></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <Link to="/solutions">
            <Button variant="ghost" className="mb-4 text-white border-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('product.back')}
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-white">{t('substances.title')}</h1>
          <p className="text-xl text-white/90 mt-2">{t('substances.subtitle')}</p>
          
          <div className="mt-12 mb-8 text-center">
            
            
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/50 p-6 rounded-lg">
              <h3 className="font-semibold text-primary text-lg mb-2">{t('substances.benefit1.title')}</h3>
              <p className="text-base text-muted-foreground">{t('substances.benefit1.desc')}</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg">
              <h3 className="font-semibold text-primary text-lg mb-2">{t('substances.benefit2.title')}</h3>
              <p className="text-base text-muted-foreground">{t('substances.benefit2.desc')}</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg">
              <h3 className="font-semibold text-primary text-lg mb-2">{t('substances.benefit3.title')}</h3>
              <p className="text-base text-muted-foreground">{t('substances.benefit3.desc')}</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg">
              <h3 className="font-semibold text-primary text-lg mb-2">{t('substances.benefit4.title')}</h3>
              <p className="text-base text-muted-foreground">{t('substances.benefit4.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            {t('substances.tech.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🦗</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t('substances.tech.step1.title')}</h3>
              <p className="text-base text-muted-foreground">
                {t('substances.tech.step1.desc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t('substances.tech.step2.title')}</h3>
              <p className="text-base text-muted-foreground">{t('substances.tech.step2.desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t('substances.tech.step3.title')}</h3>
              <p className="text-base text-muted-foreground">{t('substances.tech.step3.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="container mx-auto max-w-2xl text-center">
          <Link to="/#contact-form">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {t('product.contact')}
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default ExtraitsNaturels;