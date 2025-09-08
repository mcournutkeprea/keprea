import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";
import beeOnPlant from "@/assets/bee-on-plant.jpg";
import cornLeavesDroplets from "@/assets/corn-leaves-droplets.jpg";
import { useState } from "react";

const Innovation = () => {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);
  
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
              
              <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  "{t('innovation.quote1')}"
                </p>
              </div>
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
          {/* Colonne gauche - Image fertilisation + bloc substances */}
          <div className="space-y-6">
            {/* Image fertilisation avec flip */}
            <div className="rounded-xl overflow-hidden shadow-sm h-48" style={{ perspective: '1000px' }}>
              <div 
                className={`relative w-full h-full cursor-pointer transition-transform duration-700 ease-in-out`}
                onClick={() => setIsFlipped(!isFlipped)}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Face avant - Image */}
                <div 
                  className="absolute inset-0"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)'
                  }}
                >
                  <img 
                    src={cornLeavesDroplets} 
                    alt="Gouttes sur feuilles de maïs" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Face arrière - Texte HLOA */}
                <div 
                  className="absolute inset-0 bg-primary flex items-center justify-center"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="text-white text-6xl font-bold">HLOA</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-sm aspect-square flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">{t('innovation.why.substances')}</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-md">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-lg font-bold text-primary">interagissent rapidement avec la plante et le sol, naturellement</div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-md">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-lg font-bold text-primary">{t('innovation.benefit2')}</div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-md">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-lg font-bold text-primary">{t('innovation.benefit3')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Image abeille + bloc organismes */}
          <div className="space-y-6">
            {/* Image abeille */}
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img 
                src={beeOnPlant} 
                alt="Abeille sur une plante en fleur" 
                className="w-full h-48 object-cover"
              />
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-sm aspect-square flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{t('innovation.why.organisms')}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">84%</div>
                  <div className="text-sm text-muted-foreground">{t('innovation.stat1.desc')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5500</div>
                  <div className="text-sm text-muted-foreground">{t('innovation.stat2.desc')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10 000</div>
                  <div className="text-sm text-muted-foreground">{t('innovation.stat3.desc')}</div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  "{t('innovation.quote2')}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
