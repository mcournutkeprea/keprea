import { Shield, Droplets, GitBranch, Wheat } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

console.log("Solutions component loading...");

const Solutions = () => {
  const { t } = useLanguage();
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Section Booster */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-12 min-h-[400px]">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-white">{t('solutions.booster.title')}</h3>
              <p className="text-lg font-medium text-white/90 mb-6">{t('solutions.booster.subtitle')}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <span className="text-sm font-medium text-white">Boostea13 - riche en acides aminés libres</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <span className="text-sm font-medium text-white">Fertilea432 - riche en matière organique</span>
                </div>
              </div>

              {/* Icônes symboliques - positionnées à droite de l'image */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Wheat className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
            {/* Image de fond */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/lovable-uploads/5a41caf6-fec0-40ca-984c-f9543cae5d7e.png')` }}
            ></div>
            {/* Filtre sombre */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Section Biocontrôle */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/5 to-secondary/10 p-12 min-h-[400px]">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-white">{t('solutions.biocontrol.title')}</h3>
              <p className="text-lg font-medium text-white/90 mb-6">{t('solutions.biocontrol.subtitle')}</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 2C4.9 2 4 2.9 4 4V6C4 7.1 4.9 8 6 8H8C9.1 8 10 7.1 10 6V4C10 2.9 9.1 2 8 2H6M14 2C12.9 2 12 2.9 12 4V6C12 7.1 12.9 8 14 8H16C17.1 8 18 7.1 18 6V4C18 2.9 17.1 2 16 2H14M6 10C4.9 10 4 10.9 4 12V14C4 15.1 4.9 16 6 16H8C9.1 16 10 15.1 10 14V12C10 10.9 9.1 10 8 10H6M14 10C12.9 10 12 10.9 12 12V14C12 15.1 12.9 16 14 16H16C17.1 16 18 15.1 18 14V12C18 10.9 17.1 10 16 10H14M6 18C4.9 18 4 18.9 4 20V22C4 23.1 4.9 24 6 24H8C9.1 24 10 23.1 10 22V20C10 18.9 9.1 18 8 18H6Z"/>
                    </svg>
                    <span className="text-sm font-medium text-white">{t('solutions.biocontrol.nematicide')}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2M19 8C18.4 8 17.9 8.2 17.5 8.5L15.7 10.3C15.3 10.7 15.3 11.3 15.7 11.7C16.1 12.1 16.7 12.1 17.1 11.7L18.9 9.9C19.3 9.5 19.3 8.9 18.9 8.5C18.6 8.2 18.1 8 19 8M5 8C5.6 8 6.1 8.2 6.5 8.5C6.9 8.9 6.9 9.5 6.5 9.9L4.7 11.7C4.3 12.1 3.7 12.1 3.3 11.7C2.9 11.3 2.9 10.7 3.3 10.3L5.1 8.5C5.4 8.2 5.9 8 5 8M12 8C10.3 8 9 9.3 9 11C9 12.7 10.3 14 12 14C13.7 14 15 12.7 15 11C15 9.3 13.7 8 12 8M12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"/>
                    </svg>
                    <span className="text-sm font-medium text-white">{t('solutions.biocontrol.pest')}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image de fond */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/lovable-uploads/2b2944de-aec7-4fae-a32a-04a140dc619e.png')` }}
            ></div>
            {/* Filtre sombre */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;