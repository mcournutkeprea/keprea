import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";
import beeOnPlant from "@/assets/bee-on-plant.jpg";
import cornLeavesDroplets from "@/assets/corn-leaves-droplets.jpg";
import { useState } from "react";

const Innovation = () => {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlippedBee, setIsFlippedBee] = useState(false);

  return (
    <section id="innovation" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        {/* Premier bloc - Pleine largeur avec grid interne */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Texte à gauche */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('innovation.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nous exploitons le potentiel extraordinaire des insectes pour créer des solutions agricoles durables, performantes et abordables. Notre approche scientifique et technique combine savoir faire artisanal, industriel et agronomique pour répondre aux besoins des agriculteurs.
              </p>
            </div>
            
            {/* 3 bulles à droite */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <span className="text-white text-lg font-bold">🧬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t('innovation.amino.title')}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t('innovation.amino.desc')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <span className="text-white text-lg font-bold">🔬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t('innovation.chitin.title')}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t('innovation.chitin.desc')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <span className="text-white text-lg font-bold">🐛</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t('innovation.biocontrol.title')}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t('innovation.biocontrol.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deuxième et troisième blocs - Grid 2 colonnes avec images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Colonne gauche - Bloc substances avec image intégrée */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl shadow-sm aspect-square flex flex-col justify-center relative overflow-hidden">
              {/* Image bannière avec flip */}
              <div className="absolute top-0 left-0 right-0 h-48 rounded-t-xl overflow-hidden" style={{
                perspective: '1000px'
              }}>
                <div className={`relative w-full h-full cursor-pointer transition-transform duration-700 ease-in-out`} onClick={() => setIsFlipped(!isFlipped)} style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}>
                  {/* Face avant - Image */}
                  <div className="absolute inset-0" style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)'
                  }}>
                    <img src={cornLeavesDroplets} alt="Gouttes sur feuilles de maïs" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Face arrière - Texte avec checks */}
                  <div className="absolute inset-0 bg-primary flex items-center justify-center p-4" style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}>
                    <div className="text-white space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>Interagissent rapidement avec la plante et le sol, naturellement</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>Respectent le sol sans aucun résidu toxique</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>Améliorent le rendement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contenu principal */}
              <div className="p-8 pt-52">
                <h3 className="text-2xl font-bold text-foreground mb-6">{t('innovation.why.substances')}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-md mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-lg font-bold text-primary">Interagissent rapidement avec la plante et le sol, naturellement</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-md mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-lg font-bold text-primary">{t('innovation.benefit2')}</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-md mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-lg font-bold text-primary">{t('innovation.benefit3')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Bloc organismes avec image intégrée */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl shadow-sm aspect-square flex flex-col justify-center relative overflow-hidden">
              {/* Image bannière abeille avec flip */}
              <div className="absolute top-0 left-0 right-0 h-48 rounded-t-xl overflow-hidden" style={{
                perspective: '1000px'
              }}>
                <div className={`relative w-full h-full cursor-pointer transition-transform duration-700 ease-in-out`} onClick={() => setIsFlippedBee(!isFlippedBee)} style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlippedBee ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}>
                  {/* Face avant - Image */}
                  <div className="absolute inset-0" style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)'
                  }}>
                    <img 
                      src={beeOnPlant} 
                      alt="Abeille butinant sur une plante" 
                      className="w-full h-full object-cover" 
                      style={{
                        objectPosition: 'center 30%',
                        filter: 'brightness(1.2) contrast(1.1)'
                      }}
                    />
                  </div>
                  
                  {/* Face arrière - Statistiques */}
                  <div className="absolute inset-0 bg-primary flex items-center justify-center p-4" style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}>
                    <div className="text-white text-xs grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-base font-bold">84%</div>
                        <div>des cultures dépendent des insectes</div>
                      </div>
                      <div>
                        <div className="text-base font-bold">5500</div>
                        <div>auxiliaires utiles recensés en France</div>
                      </div>
                      <div>
                        <div className="text-base font-bold">10 000</div>
                        <div>individus actifs par m²</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contenu principal */}
              <div className="p-8 pt-52">
                <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{t('innovation.why.organisms')}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">84%</div>
                    <div className="text-sm text-muted-foreground">{t('innovation.stat1.desc')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5500</div>
                    <div className="text-sm text-muted-foreground">{t('innovation.stat2.desc')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10 000</div>
                    <div className="text-sm text-muted-foreground">{t('innovation.stat3.desc')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;