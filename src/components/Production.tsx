import { MapPin, Factory, Leaf, Users } from "lucide-react";
import FranceMap from "./FranceMap";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

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
          
          {/* Logo cliquable pour voir le processus de production */}
          <div className="mt-8">
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full">
                  <img 
                    src="/lovable-uploads/2aef602f-7a71-41fa-9ba0-e21e19b88e57.png"
                    alt="Voir le processus de production"
                    className="w-16 h-16 mx-auto cursor-pointer"
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full">
                <div className="p-4">
                  <img 
                    src="/lovable-uploads/fed1a5d0-31aa-4f79-92a2-9f46e3512478.png"
                    alt="Processus de production - Blending, Spray Drying, Distillation, Spirulina"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
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
        
        {/* Processus de production */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              {t('production.process.title')}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('production.process.subtitle')}
            </p>
          </div>
          
          <div className="relative bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 overflow-hidden">
            {/* Diagramme de processus isométrique */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {/* Étape 1: Matière première */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🥛</span>
                  </div>
                </div>
                <h4 className="font-semibold text-sm mb-2">{t('production.process.step1')}</h4>
                <p className="text-xs text-muted-foreground">{t('production.process.step1_desc')}</p>
              </div>
              
              {/* Étape 2: Pasteurisation */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🔥</span>
                  </div>
                </div>
                <h4 className="font-semibold text-sm mb-2">{t('production.process.step2')}</h4>
                <p className="text-xs text-muted-foreground">{t('production.process.step2_desc')}</p>
              </div>
              
              {/* Étape 3: Filtration */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🔬</span>
                  </div>
                </div>
                <h4 className="font-semibold text-sm mb-2">{t('production.process.step3')}</h4>
                <p className="text-xs text-muted-foreground">{t('production.process.step3_desc')}</p>
              </div>
              
              {/* Étape 4: Coagulation */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl">⚗️</span>
                  </div>
                </div>
                <h4 className="font-semibold text-sm mb-2">{t('production.process.step4')}</h4>
                <p className="text-xs text-muted-foreground">{t('production.process.step4_desc')}</p>
              </div>
            </div>
            
            {/* Deuxième rangée */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Étape 5: Maturation */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl">⏰</span>
                  </div>
                </div>
                <h4 className="font-semibold text-sm mb-2">{t('production.process.step5')}</h4>
                <p className="text-xs text-muted-foreground">{t('production.process.step5_desc')}</p>
              </div>
              
              {/* Étape 6: Pressage */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🔧</span>
                  </div>
                </div>
                <h4 className="font-semibold text-sm mb-2">{t('production.process.step6')}</h4>
                <p className="text-xs text-muted-foreground">{t('production.process.step6_desc')}</p>
              </div>
              
              {/* Étape 7: Moulage */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🧊</span>
                  </div>
                </div>
                <h4 className="font-semibold text-sm mb-2">{t('production.process.step7')}</h4>
                <p className="text-xs text-muted-foreground">{t('production.process.step7_desc')}</p>
              </div>
              
              {/* Étape 8: Emballage */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-2xl">📦</span>
                  </div>
                </div>
                <h4 className="font-semibold text-sm mb-2">{t('production.process.step8')}</h4>
                <p className="text-xs text-muted-foreground">{t('production.process.step8_desc')}</p>
              </div>
            </div>
            
            {/* Flèches de connexion */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                    refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" className="fill-primary/30" />
                  </marker>
                </defs>
                {/* Flèches horizontales première rangée */}
                <line x1="23" y1="25" x2="27" y2="25" stroke="currentColor" 
                  strokeWidth="0.3" markerEnd="url(#arrowhead)" className="text-primary/30" />
                <line x1="48" y1="25" x2="52" y2="25" stroke="currentColor" 
                  strokeWidth="0.3" markerEnd="url(#arrowhead)" className="text-primary/30" />
                <line x1="73" y1="25" x2="77" y2="25" stroke="currentColor" 
                  strokeWidth="0.3" markerEnd="url(#arrowhead)" className="text-primary/30" />
                
                {/* Flèches verticales */}
                <line x1="85" y1="35" x2="15" y2="65" stroke="currentColor" 
                  strokeWidth="0.3" markerEnd="url(#arrowhead)" className="text-primary/30" />
                  
                {/* Flèches horizontales deuxième rangée */}
                <line x1="23" y1="75" x2="27" y2="75" stroke="currentColor" 
                  strokeWidth="0.3" markerEnd="url(#arrowhead)" className="text-primary/30" />
                <line x1="48" y1="75" x2="52" y2="75" stroke="currentColor" 
                  strokeWidth="0.3" markerEnd="url(#arrowhead)" className="text-primary/30" />
                <line x1="73" y1="75" x2="77" y2="75" stroke="currentColor" 
                  strokeWidth="0.3" markerEnd="url(#arrowhead)" className="text-primary/30" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;