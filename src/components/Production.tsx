import { MapPin, Factory, Leaf, Users } from "lucide-react";
import FranceMap from "./FranceMap";
import { useLanguage } from "@/contexts/LanguageContext";

const Production = () => {
  const { t } = useLanguage();
  return (
    <section id="production" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('production.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('production.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 to-accent/20 p-12 min-h-[500px]">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  {t('production.excellence')}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t('production.location.title')}</h4>
                      <p className="text-muted-foreground">
                        {t('production.location.desc')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Factory className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t('production.technology.title')}</h4>
                      <p className="text-muted-foreground">
                        {t('production.technology.desc')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t('production.environment.title')}</h4>
                      <p className="text-muted-foreground">
                        {t('production.environment.desc')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t('production.team.title')}</h4>
                      <p className="text-muted-foreground">
                        {t('production.team.desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden bg-primary/5 border-2 border-primary/20">
                  <img 
                    src="/lovable-uploads/6f3f0723-78e2-48e6-b36a-2520e97f1f40.png"
                    alt="Site de production Keprea à Damparis"
                    className="w-full h-full object-cover animate-slow-pan-right"
                  />
                </div>
              </div>

              <div className="lg:col-span-1">
                <FranceMap />
              </div>
            </div>

            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;