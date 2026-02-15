import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import leavesDropletsBg from "@/assets/leaves-droplets-bg.jpg";

const Solutions = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleBiofertilisantClick = () => {
    navigate('/biofertilisant');
    window.scrollTo(0, 0);
  };
  const handleBoostersClick = () => {
    navigate('/boosters');
    window.scrollTo(0, 0);
  };
  const handleExtraitsClick = () => {
    navigate('/extraits-naturels');
    window.scrollTo(0, 0);
  };
  const handleBiocontroleClick = () => {
    navigate('/biocontrole-vivant');
    window.scrollTo(0, 0);
  };

  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span className="text-primary font-bold">{t('solutions.subtitle')}</span> {t('solutions.subtitle2')} <span className="text-primary font-bold">{t('solutions.challenges')}</span>. {t('solutions.approach')} <span className="text-primary font-bold">{t('solutions.expertise')}</span> {t('solutions.forFarmers')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Section Biocontrôle - Haut gauche */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 min-h-[300px] cursor-pointer hover:scale-105 transition-transform duration-300" onClick={handleBiocontroleClick}>
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold mb-2 text-white">{t('solutions.bioprotection.title')}</h3>
              <p className="text-base font-semibold text-white/90 mb-4">{t('solutions.bioprotection.subtitle')}</p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                   <div className="w-3 h-3 rounded-full bg-white mt-1 shrink-0"></div>
                   <span className="text-sm font-semibold text-white">{t('solutions.bioprotection.pests')} <span className="text-base font-bold text-primary">{t('solutions.bioprotection.pestsList')}</span></span>
                 </div>
                 
                 <div className="flex items-start gap-3">
                   <div className="w-3 h-3 rounded-full bg-white mt-1 shrink-0"></div>
                   <span className="text-sm font-semibold text-white">{t('solutions.bioprotection.innovation')}</span>
                 </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: `url('/lovable-uploads/bf0fefed-2323-4a06-a4f9-b4681de73dfe.png')`
            }}></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Section Biopesticides - Haut droit */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/20 p-8 min-h-[300px] cursor-pointer hover:scale-105 transition-transform duration-300" onClick={handleExtraitsClick}>
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold mb-2 text-white">{t('solutions.biopesticides.title')}</h3>
              <p className="text-base font-semibold text-white/90 mb-4">{t('solutions.biopesticides.subtitle')}</p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                   <div className="w-3 h-3 rounded-full bg-white mt-1 shrink-0"></div>
                   <span className="text-sm font-semibold text-white">{t('solutions.biopesticides.molecules')} <span className="text-base font-bold text-primary">{t('solutions.biopesticides.protection')}</span></span>
                 </div>
                 <div className="flex items-start gap-3">
                   <div className="w-3 h-3 rounded-full bg-white mt-1 shrink-0"></div>
                   <span className="text-sm font-semibold text-white">{t('solutions.biopesticides.agents')}</span>
                 </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: `url(${leavesDropletsBg})`
            }}></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Section Boosters - Bas gauche */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 min-h-[300px] cursor-pointer hover:scale-105 transition-transform duration-300" onClick={handleBoostersClick}>
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold mb-2 text-white">{t('solutions.boosters.title')}</h3>
              <p className="text-base font-semibold text-white/90 mb-4">{t('solutions.boosters.subtitle')}</p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                   <div className="w-3 h-3 rounded-full bg-white mt-1 shrink-0"></div>
                   <span className="text-sm font-semibold text-white">{t('solutions.boosters.polypeptides')} <span className="text-base font-bold text-primary">Polypeptides</span></span>
                 </div>
                 <div className="flex items-start gap-3">
                   <div className="w-3 h-3 rounded-full bg-white mt-1 shrink-0"></div>
                   <span className="text-sm font-semibold text-white">{t('solutions.boosters.polypeptides')} <span className="text-base font-bold text-primary">Proline</span></span>
                 </div>
                 <div className="flex items-start gap-3">
                   <div className="w-3 h-3 rounded-full bg-white mt-1 shrink-0"></div>
                   <span className="text-sm font-semibold text-white">{t('solutions.boosters.substances')}</span>
                 </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: `url('/lovable-uploads/5a41caf6-fec0-40ca-984c-f9543cae5d7e.png')`
            }}></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Section Biofertilisant - Bas droit */}
          <div className="relative overflow-hidden rounded-2xl min-h-[300px] cursor-pointer hover:scale-105 transition-transform duration-300" onClick={handleBiofertilisantClick}>
            <div className="absolute inset-0 bg-cover bg-center" style={{
              backgroundImage: `url('/lovable-uploads/514c70d9-ef8f-4f9f-8df3-f38124715fa6.png')`
            }}></div>
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="relative z-10 h-full p-8">
              <h3 className="text-2xl font-extrabold mb-2 text-white">{t('solutions.biofertilisant.title')}</h3>
              <p className="text-base font-semibold text-white/90 mb-4">{t('solutions.biofertilisant.subtitle')}</p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                   <div className="w-3 h-3 rounded-full bg-white mt-1 shrink-0"></div>
                   <span className="text-base font-bold text-primary">{t('solutions.biofertilisant.organic')}</span>
                 </div>
                 <div className="flex items-start gap-3">
                   <div className="w-3 h-3 rounded-full bg-white mt-1 shrink-0"></div>
                   <span className="text-sm font-semibold text-white">{t('solutions.biofertilisant.npk')}</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
