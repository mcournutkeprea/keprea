import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import leavesDropletsBg from "@/assets/leaves-droplets-bg.jpg";
const Solutions = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleBiofertilisantClick = () => {
    navigate('/biofertilisant');
  };
  const handleBoostersClick = () => {
    navigate('/boosters');
  };
  const handleSubstancesClick = () => {
    setIsFlipped(!isFlipped);
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
                  <span className="text-xs font-semibold text-white">Concentration équilibrée en  NPK</span>
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

          {/* Section Substances naturelles - Flip Card */}
          <div className="relative rounded-2xl min-h-[300px] cursor-pointer hover:scale-105 transition-transform duration-300" style={{ perspective: "1000px" }} onClick={handleSubstancesClick}>
            <div 
              className="relative w-full h-full transition-transform duration-700"
              style={{ 
                transformStyle: "preserve-3d",
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}
            >
              {/* Face avant */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="absolute inset-0 bg-cover bg-center" style={{
                  backgroundImage: `url(${leavesDropletsBg})`
                }}></div>
                <div className="absolute inset-0 bg-black/50"></div>
                
                <div className="relative z-10 h-full flex items-center justify-center p-8">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white text-center leading-tight">
                    Pourquoi les substances issues d'insectes ?
                  </h3>
                </div>
              </div>
              
              {/* Face arrière */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-green-600/90 to-green-800/90 p-8 flex flex-col justify-center"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-300 mt-1 flex-shrink-0" />
                    <span className="text-white font-medium text-sm">
                      Interagissent rapidement avec la plante et le sol, naturellement
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-300 mt-1 flex-shrink-0" />
                    <span className="text-white font-medium text-sm">
                      Respectent le sol sans aucun résidu toxique
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-300 mt-1 flex-shrink-0" />
                    <span className="text-white font-medium text-sm">
                      Améliorent le rendement
                    </span>
                  </div>
                </div>
              </div>
            </div>
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