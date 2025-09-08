import { Shield, Droplets, GitBranch, Wheat, Bug } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const Solutions = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const handleBiofertilisantClick = () => {
    navigate('/biofertilisant');
  };
  return <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Répondre aux défis majeurs des agriculteurs du monde entier : compétitivité, productivité, préservation des sols, de la biodiversité et du climat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Section Biofertilisant */}
          <div 
            className="relative overflow-hidden rounded-2xl min-h-[300px] cursor-pointer hover:scale-105 transition-transform duration-300" 
            onClick={handleBiofertilisantClick}
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: `url('/lovable-uploads/514c70d9-ef8f-4f9f-8df3-f38124715fa6.png')`
            }}></div>
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="relative z-10 h-full p-8">
              <h3 className="text-xl font-extrabold mb-2 text-white">Biofertilisant</h3>
              <p className="text-sm font-semibold text-white/90 mb-4">Nutrition optimale des cultures</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-xs font-semibold text-white">Engrais organique naturel</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-xs font-semibold text-white">NPK = 3-4-2</span>
                </div>
              </div>

              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Wheat className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-primary text-white text-sm font-semibold px-3 py-2 rounded-lg">
                Pour en savoir plus
              </div>
            </div>
          </div>

          {/* Section Booster */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 min-h-[300px]">
            <div className="relative z-10">
              <h3 className="text-xl font-extrabold mb-2 text-white">Boosters</h3>
              <p className="text-sm font-semibold text-white/90 mb-4">{t('solutions.booster.subtitle')}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-xs font-semibold text-white">Boostea13 - riche en acides aminés libres</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-xs font-semibold text-white">Fertilea432 - riche en matière organique</span>
                </div>
              </div>

              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <GitBranch className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url('/lovable-uploads/5a41caf6-fec0-40ca-984c-f9543cae5d7e.png')`
          }}></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Section Substances naturelles */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/20 p-8 min-h-[300px]">
            <div className="relative z-10">
              <h3 className="text-xl font-extrabold mb-2 text-white">Substances naturelles</h3>
              <p className="text-sm font-semibold text-white/90 mb-4">Solutions écologiques innovantes</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-xs font-semibold text-white">Extraits naturels d'insectes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-xs font-semibold text-white">Stimulation naturelle des défenses</span>
                </div>
              </div>

              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url('/lovable-uploads/728d038e-7d5f-4185-9cd3-77fbd3544cb5.png')`
          }}></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Section Biocontrôle vivant */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 min-h-[300px]">
            <div className="relative z-10">
              <h3 className="text-xl font-extrabold mb-2 text-white">Biocontrôle vivant</h3>
              <p className="text-sm font-semibold text-white/90 mb-4">{t('solutions.biocontrol.subtitle')}</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 2C4.9 2 4 2.9 4 4V6C4 7.1 4.9 8 6 8H8C9.1 8 10 7.1 10 6V4C10 2.9 9.1 2 8 2H6M14 2C12.9 2 12 2.9 12 4V6C12 7.1 12.9 8 14 8H16C17.1 8 18 7.1 18 6V4C18 2.9 17.1 2 16 2H14M6 10C4.9 10 4 10.9 4 12V14C4 15.1 4.9 16 6 16H8C9.1 16 10 15.1 10 14V12C10 10.9 9.1 10 8 10H6M14 10C12.9 10 12 10.9 12 12V14C12 15.1 12.9 16 14 16H16C17.1 16 18 15.1 18 14V12C18 10.9 17.1 10 16 10H14M6 18C4.9 18 4 18.9 4 20V22C4 23.1 4.9 24 6 24H8C9.1 24 10 23.1 10 22V20C10 18.9 9.1 18 8 18H6Z" />
                  </svg>
                  <span className="text-xs font-semibold text-white">{t('solutions.biocontrol.nematicide')}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Bug className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold text-white">{t('solutions.biocontrol.pest')}</span>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url('/lovable-uploads/bf0fefed-2323-4a06-a4f9-b4681de73dfe.png')`
          }}></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Solutions;