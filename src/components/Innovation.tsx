import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import biocontrolInfographic from "@/assets/biocontrol-vivant-infographic.png";
import substancesInfographic from "@/assets/substances-insectes-benefits.png";

const Innovation = () => {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlippedBee, setIsFlippedBee] = useState(false);

  return (
    <section id="innovation" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-card rounded-xl shadow-sm aspect-square flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 rounded-xl overflow-hidden" style={{ perspective: '1000px' }}>
                <div className="relative w-full h-full cursor-pointer transition-transform duration-700 ease-in-out" onClick={() => setIsFlipped(!isFlipped)} style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                  <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}>
                    <video src="/substances-video.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" style={{ objectPosition: 'center 30%', filter: 'brightness(1.2) contrast(1.1)' }} />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-6">
                      <h3 className="text-xl font-bold text-white text-center transition-transform duration-300 hover:scale-110 cursor-pointer">{t('innovation.substances.question')}</h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <img 
                      src={substancesInfographic} 
                      alt="Substances d'insectes infographic"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl shadow-sm aspect-square flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 rounded-xl overflow-hidden" style={{ perspective: '1000px' }}>
                <div className="relative w-full h-full cursor-pointer transition-transform duration-700 ease-in-out" onClick={() => setIsFlippedBee(!isFlippedBee)} style={{ transformStyle: 'preserve-3d', transform: isFlippedBee ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                  <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}>
                    <video src="/biocontrol-video.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" style={{ objectPosition: 'center 30%', filter: 'brightness(1.2) contrast(1.1)' }} />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-6">
                      <h3 className="text-xl font-bold text-white text-center transition-transform duration-300 hover:scale-110 cursor-pointer">{t('innovation.biocontrol.question')}</h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <img 
                      src={biocontrolInfographic} 
                      alt="Biocontrôle vivant infographic"
                      className="w-full h-full object-cover"
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
