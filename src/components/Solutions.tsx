import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import leavesDropletsBg from "@/assets/leaves-droplets-bg.jpg";
const Solutions = () => {
  const {
    t
  } = useLanguage();
  const navigate = useNavigate();
  const handleBiofertilisantClick = () => {
    navigate('/biofertilisant');
    window.scrollTo(0, 0);
  };
  const handleBoostersClick = () => {
    navigate('/boosters');
    window.scrollTo(0, 0);
  };
  const handleSubstancesClick = () => {
    navigate('/substances-naturelles');
    window.scrollTo(0, 0);
  };
  const handleBiocontroleClick = () => {
    navigate('/biocontrole-vivant');
    window.scrollTo(0, 0);
  };
  return <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto"><span className="text-primary font-bold">Nos solutions sont pensées par les agriculteurs et pour les agriculteurs.</span> Nous répondons aux défis majeurs des agriculteurs du monde entier : <span className="text-primary font-bold">compétitivité, productivité, préservation des sols, de la biodiversité et du climat</span>. Pour cela, nous exploitons le potentiel extraordinaire des insectes pour créer des solutions agricoles durables, performantes et abordables. Notre approche scientifique et technique combine <span className="text-primary font-bold">savoir faire artisanal, industriel et agronomique</span> pour répondre aux besoins des agriculteurs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Section Booster */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 min-h-[300px] cursor-pointer hover:scale-105 transition-transform duration-300" onClick={handleBoostersClick}>
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold mb-2 text-white">Boosters</h3>
              <p className="text-base font-semibold text-white/90 mb-4">pour la santé des sols et la résilience des plantes</p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-sm font-semibold text-white">Riche en <span className="text-base font-bold text-green-400">Polypeptides</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-sm font-semibold text-white">Riche en <span className="text-base font-bold text-green-400">Proline</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-sm font-semibold text-white">Substances actives</span>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url('/lovable-uploads/5a41caf6-fec0-40ca-984c-f9543cae5d7e.png')`
          }}></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Section Biofertilisant */}
          <div className="relative overflow-hidden rounded-2xl min-h-[300px] cursor-pointer hover:scale-105 transition-transform duration-300" onClick={handleBiofertilisantClick}>
            <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url('/lovable-uploads/514c70d9-ef8f-4f9f-8df3-f38124715fa6.png')`
          }}></div>
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="relative z-10 h-full p-8">
              <h3 className="text-2xl font-extrabold mb-2 text-white">Biofertilisant</h3>
              <p className="text-base font-semibold text-white/90 mb-4">Nutrition optimale des cultures</p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-base font-bold text-green-400">Engrais organique naturel</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-sm font-semibold text-white">Concentration équilibrée en  NPK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section Substances naturelles */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/20 p-8 min-h-[300px] cursor-pointer hover:scale-105 transition-transform duration-300" onClick={handleSubstancesClick}>
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold mb-2 text-white">Biopesticides</h3>
              <p className="text-base font-semibold text-white/90 mb-4">Solutions écologiques innovantes</p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-sm font-semibold text-white">Extraits des <span className="text-base font-bold text-green-400">molécules de protection</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-sm font-semibold text-white">Agents actifs naturels</span>
                </div>
              </div>
              
            </div>
            
            <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url(${leavesDropletsBg})`
          }}></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Section Biocontrôle vivant */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 min-h-[300px] cursor-pointer hover:scale-105 transition-transform duration-300" onClick={handleBiocontroleClick}>
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold mb-2 text-white">Biocontrôle</h3>
              <p className="text-base font-semibold text-white/90 mb-4">Protéger vos cultures avec le vivant</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-sm font-semibold text-white">Contre les <span className="text-base font-bold text-green-400">pucerons, la pyrale, la cochenille</span>...</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-sm font-semibold text-white">Solutions d'application innovantes pour une meilleur performance</span>
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