import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
const Solutions = () => {
  const {
    t
  } = useLanguage();
  const navigate = useNavigate();
  const handleBiofertilisantClick = () => {
    navigate('/biofertilisant');
  };
  const handleBoostersClick = () => {
    navigate('/boosters');
  };
  const handleSubstancesClick = () => {
    navigate('/substances-naturelles');
  };
  const handleBiocontroleClick = () => {
    navigate('/biocontrole-vivant');
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
          <div className="relative overflow-hidden rounded-2xl min-h-[300px] cursor-pointer hover:scale-105 transition-transform duration-300" onClick={handleBiofertilisantClick}>
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
                  <span className="text-xs font-semibold text-white">Equilibre NPK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section Booster */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 min-h-[300px] cursor-pointer hover:scale-105 transition-transform duration-300" onClick={handleBoostersClick}>
            <div className="relative z-10">
              <h3 className="text-xl font-extrabold mb-2 text-white">Boosters</h3>
              <p className="text-sm font-semibold text-white/90 mb-4">pour la santé des sols et la résiliences des plantes</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-xs font-semibold text-white">Riche en acides aminés libres</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-xs font-semibold text-white">Substances actives</span>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url('/lovable-uploads/5a41caf6-fec0-40ca-984c-f9543cae5d7e.png')`
          }}></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Section Substances naturelles */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/20 p-8 min-h-[300px] cursor-pointer hover:scale-105 transition-transform duration-300" onClick={handleSubstancesClick}>
            <div className="relative z-10">
              <h3 className="text-xl font-extrabold mb-2 text-white">Substances naturelles</h3>
              <p className="text-sm font-semibold text-white/90 mb-4">Solutions écologiques innovantes</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-xs font-semibold text-white">Extraits des molécules de protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-xs font-semibold text-white">Substance actives</span>
                </div>
              </div>
              
            </div>
            
            <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url('/lovable-uploads/728d038e-7d5f-4185-9cd3-77fbd3544cb5.png')`
          }}></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Section Biocontrôle vivant */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 min-h-[300px] cursor-pointer hover:scale-105 transition-transform duration-300" onClick={handleBiocontroleClick}>
            <div className="relative z-10">
              <h3 className="text-xl font-extrabold mb-2 text-white">Biocontrôle</h3>
              <p className="text-sm font-semibold text-white/90 mb-4">Protéger vos cultures avec le vivant</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-xs font-semibold text-white">Contre les pucerons, la pyrale, la cochenille...</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-xs font-semibold text-white">Solutions d'application innovantes et qualité des produits optimisée</span>
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