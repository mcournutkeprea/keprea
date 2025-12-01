import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Sprout, CheckCircle, TrendingUp } from "lucide-react";

const Innovation = () => {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlippedBee, setIsFlippedBee] = useState(false);

  // Infographic component for substances
  const SubstancesInfographic = () => (
    <div className="w-full h-full bg-[#f5f0e6] flex flex-col justify-center p-6 sm:p-8">
      <h3 className="text-lg sm:text-xl font-bold text-primary text-center mb-6 sm:mb-8">
        {t('innovation.infographic.substances.title')}
      </h3>
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-primary/40 flex items-center justify-center">
            <Sprout className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </div>
          <p className="text-xs sm:text-sm text-foreground/80 pt-2 sm:pt-3">
            {t('innovation.infographic.substances.benefit1')}
          </p>
        </div>
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-primary/40 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </div>
          <p className="text-xs sm:text-sm text-foreground/80 pt-2 sm:pt-3">
            {t('innovation.infographic.substances.benefit2')}
          </p>
        </div>
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-primary/40 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </div>
          <p className="text-xs sm:text-sm text-foreground/80 pt-2 sm:pt-3">
            {t('innovation.infographic.substances.benefit3')}
          </p>
        </div>
      </div>
    </div>
  );

  // Infographic component for biocontrol
  const BiocontrolInfographic = () => (
    <div className="w-full h-full bg-[#f5f0e6] flex flex-col justify-center p-6 sm:p-8">
      <h3 className="text-lg sm:text-xl font-bold text-primary text-center mb-6 sm:mb-8 uppercase tracking-wide">
        {t('innovation.infographic.biocontrol.title')}
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
            {t('innovation.infographic.biocontrol.stat1.value')}
          </div>
          <p className="text-xs sm:text-sm text-foreground/70 leading-tight">
            {t('innovation.infographic.biocontrol.stat1.label')}
          </p>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
            {t('innovation.infographic.biocontrol.stat2.value')}
          </div>
          <p className="text-xs sm:text-sm text-foreground/70 leading-tight">
            {t('innovation.infographic.biocontrol.stat2.label')}
          </p>
        </div>
        <div className="col-span-2 text-center mt-2 sm:mt-4">
          <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
            {t('innovation.infographic.biocontrol.stat3.value')}
          </div>
          <p className="text-xs sm:text-sm text-foreground/70 leading-tight">
            {t('innovation.infographic.biocontrol.stat3.label')}
          </p>
        </div>
      </div>
    </div>
  );

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
                    <img src="/lovable-uploads/fed1a5d0-31aa-4f79-92a2-9f46e3512478.png" alt="Substances d'insectes infographie" className="w-full h-full object-contain bg-[#f5f0e6]" />
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
                    <img src="/lovable-uploads/0184afb4-2ca6-4b4a-9a71-b9ddf5b1c906.png" alt="Biocontrôle vivant infographie" className="w-full h-full object-contain bg-[#f5f0e6]" />
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
