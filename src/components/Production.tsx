import { MapPin, Factory, Leaf, Users, ArrowDown, ArrowRight } from "lucide-react";
import FranceMap from "./FranceMap";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
const Production = () => {
  const {
    t
  } = useLanguage();
  return <section id="production" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('production.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre site de production moderne situé à Dole, en France, où nous développons et produisons nos biosolutions
          </p>
          
          {/* Logo cliquable pour voir le processus de production */}
          
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 to-accent/20 p-8 lg:p-12">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Colonne de gauche - Texte excellence */}
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  {t('production.excellence')}
                </h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2 text-lg">{t('production.location.title')}</h4>
                      <p className="text-muted-foreground">
                        {t('production.location.desc')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Factory className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2 text-lg">{t('production.technology.title')}</h4>
                      <p className="text-muted-foreground">
                        {t('production.technology.desc')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2 text-lg">{t('production.environment.title')}</h4>
                      <p className="text-muted-foreground">
                        {t('production.environment.desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colonne du milieu - Image du bâtiment */}
              <div className="lg:col-span-4">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-primary/5 border-2 border-primary/20">
                  <img src="/lovable-uploads/6f3f0723-78e2-48e6-b36a-2520e97f1f40.png" alt="Site de production Keprea à Damparis" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Colonne de droite - Carte */}
              <div className="lg:col-span-4">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-primary/5 border-2 border-primary/20">
                  <FranceMap />
                </div>
              </div>
            </div>

            {/* Processus de production en bas - Responsive */}
            <div className="relative z-10 mt-8">
              <h4 className="text-lg font-semibold text-primary mb-6 text-center">De la larve au champs</h4>
              
              {/* Version mobile - Format vertical avec convergence */}
              <div className="block lg:hidden">
                <div className="flex flex-col items-center gap-4 max-w-sm mx-auto">
                  
                  {/* Première section - Élevage et Collecte côte à côte */}
                  <div className="flex justify-center gap-4 w-full">
                    {/* Étape 1: Élevage d'insecte auxiliaire */}
                    <div className="flex flex-col items-center gap-3 p-3 bg-background/50 rounded-lg text-center flex-1 max-w-[140px]">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🐛</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-foreground">{t('production.process.step1')}</p>
                      </div>
                    </div>
                    
                    {/* Étape 2: Collecte */}
                    <div className="flex flex-col items-center gap-3 p-3 bg-background/50 rounded-lg text-center flex-1 max-w-[140px]">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🜻</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-foreground">{t('production.process.step2')}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Flèches de convergence */}
                  <div className="flex justify-center gap-4">
                    <ArrowDown className="w-5 h-5 text-primary" />
                    <ArrowDown className="w-5 h-5 text-primary" />
                  </div>

                  {/* Étape 3: Transformation */}
                  <div className="flex flex-col items-center gap-3 p-4 bg-background/50 rounded-lg text-center w-full">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⚗️</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{t('production.process.step3')}</p>
                    </div>
                  </div>

                  <ArrowDown className="w-6 h-6 text-primary" />

                  {/* Étape 4: Packaging */}
                  <div className="flex flex-col items-center gap-3 p-4 bg-background/50 rounded-lg text-center w-full">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📦</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{t('production.process.step4')}</p>
                    </div>
                  </div>

                  <ArrowDown className="w-6 h-6 text-primary" />

                  {/* Étape 5: Transport */}
                  <div className="flex flex-col items-center gap-3 p-4 bg-background/50 rounded-lg text-center w-full">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🚢</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Transport</p>
                    </div>
                  </div>

                  <ArrowDown className="w-6 h-6 text-primary" />

                  {/* Étape 6: Conseil d'utilisation en plein champ */}
                  <div className="flex flex-col items-center gap-3 p-4 bg-background/50 rounded-lg text-center w-full">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">👨‍🌾</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{t('production.process.step5')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Version desktop - Format horizontal avec scroll */}
              <div className="hidden lg:block">
                <div className="overflow-x-auto">
                  <div className="flex items-center justify-center gap-6 min-w-max px-4">
                    
                    {/* Première section - Élevage et Collecte avec convergence */}
                    <div className="flex flex-col items-center gap-4">
                      {/* Les deux étapes initiales */}
                      <div className="flex flex-col gap-4">
                        {/* Étape 1: Élevage d'insecte auxiliaire */}
                        <div className="flex flex-col items-center gap-3 p-4 bg-background/50 rounded-lg text-center w-40">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">🐛</span>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-foreground">{t('production.process.step1')}</p>
                          </div>
                        </div>
                        
                        {/* Étape 2: Collecte */}
                        <div className="flex flex-col items-center gap-3 p-4 bg-background/50 rounded-lg text-center w-40">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">🜻</span>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-foreground">{t('production.process.step2')}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Flèches convergentes */}
                    <div className="flex flex-col items-center gap-2">
                      <ArrowRight className="w-6 h-6 text-primary" />
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>

                    {/* Étape 3: Transformation */}
                    <div className="flex flex-col items-center gap-3 p-4 bg-background/50 rounded-lg text-center w-40">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">⚗️</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-foreground">{t('production.process.step3')}</p>
                      </div>
                    </div>

                    {/* Flèche vers packaging */}
                    <ArrowRight className="w-6 h-6 text-primary" />

                    {/* Étape 4: Packaging */}
                    <div className="flex flex-col items-center gap-3 p-4 bg-background/50 rounded-lg text-center w-40">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📦</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-foreground">{t('production.process.step4')}</p>
                      </div>
                    </div>

                    {/* Flèche vers export */}
                    <ArrowRight className="w-6 h-6 text-primary" />

                    {/* Étape 5: Export */}
                    <div className="flex flex-col items-center gap-3 p-4 bg-background/50 rounded-lg text-center w-40">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🚢</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-foreground">Transport</p>
                      </div>
                    </div>

                    {/* Flèche vers conseil */}
                    <ArrowRight className="w-6 h-6 text-primary" />

                    {/* Étape 6: Conseil d'utilisation en plein champ */}
                    <div className="flex flex-col items-center gap-3 p-4 bg-background/50 rounded-lg text-center w-40">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">👨‍🌾</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-foreground">{t('production.process.step5')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Production;