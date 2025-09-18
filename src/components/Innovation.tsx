import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";
import beeOnPlant from "@/assets/bee-on-plant.jpg";
import cornLeavesDroplets from "@/assets/corn-leaves-droplets.jpg";
import substancesBenefits from "@/assets/substances-insectes-benefits.png";
import biocontrolInfographic from "@/assets/biocontrol-vivant-infographic.png";
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
              {/* Image bannière avec flip - pleine hauteur */}
              <div className="absolute inset-0 rounded-xl overflow-hidden" style={{
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
                    <video 
                      src="/substances-video.mp4" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover" 
                      style={{
                        objectPosition: 'center 30%',
                        filter: 'brightness(1.2) contrast(1.1)'
                      }}
                    />
                    {/* Titre overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-6">
                      <h3 className="text-xl font-bold text-white text-center">Pourquoi les substances issues d'insectes ?</h3>
                    </div>
                  </div>
                  
                  {/* Face arrière - Image des bénéfices */}
                  <div className="absolute inset-0 flex items-center justify-center" style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}>
                    <img 
                      src={substancesBenefits} 
                      alt="Des substances d'insectes pour l'agriculture" 
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Bloc organismes avec image intégrée */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl shadow-sm aspect-square flex flex-col justify-center relative overflow-hidden">
              {/* Image bannière abeille avec flip - pleine hauteur */}
              <div className="absolute inset-0 rounded-xl overflow-hidden" style={{
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
                    <video 
                      src="/biocontrol-video.mp4" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover" 
                      style={{
                        objectPosition: 'center 30%',
                        filter: 'brightness(1.2) contrast(1.1)'
                      }}
                    />
                    {/* Titre overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-6">
                      <h3 className="text-xl font-bold text-white text-center">Pourquoi le biocontrôle vivant ?</h3>
                    </div>
                  </div>
                  
                  {/* Face arrière - Infographie biocontrôle */}
                  <div className="absolute inset-0 flex items-center justify-center" style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}>
                    <img 
                      src={biocontrolInfographic} 
                      alt="Biocontrôle vivant pour les cultures" 
                      className="w-full h-full object-contain p-4"
                    />
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