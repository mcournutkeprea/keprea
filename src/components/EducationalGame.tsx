import { useLanguage } from "@/contexts/LanguageContext";

const EducationalGame = () => {
  const { t } = useLanguage();

  const cards = [
    {
      name: "Black Solider",
      image: "/lovable-uploads/691dcc4c-a05c-4ea4-964a-0a7378f1bcf3.png",
      type: "Ally",
      powers: ["Megabooster", "Aspiration Vortex"],
      targets: ["Sécheresse", "Nématodes"]
    },
    {
      name: "Lady Coco",
      image: "/lovable-uploads/25e3e8f5-6ba0-48ba-a553-6750b0a7b420.png",
      type: "Ally",
      powers: ["Bouclier Blindé", "Poison Toxique"],
      targets: ["Pucerons", "Cochenilles"]
    },
    {
      name: "Chrysox",
      image: "/lovable-uploads/2ac0bda7-bf1d-4610-945f-428b76198631.png",
      type: "Ally",
      powers: ["Aspiration de Pucerons", "Vision Nocturne", "Camouflage Foliaire"],
      targets: ["Pucerons", "Chenilles", "Aleurodes"]
    },
    {
      name: "Trichor",
      image: "/lovable-uploads/43fcf333-a67b-400e-b040-70ca80bc1dc8.png",
      type: "Ally",
      powers: ["Ponte Alien", "Vol Furtif"],
      targets: ["Pyrales", "Autres Chenilles"]
    },
    {
      name: "Gammadroz",
      image: "/lovable-uploads/025b91f2-066f-40c8-80ec-f53c87732fd7.png",
      type: "Ally",
      powers: ["Rayon Gamma", "Séduction Mortelle"],
      targets: ["Pucerons", "Drosophiles"]
    },
    {
      name: "Bumblemax",
      image: "/lovable-uploads/2b271b98-a1a1-443d-9653-dfc15af322af.png",
      type: "Ally",
      powers: ["Vol Furtif", "Dard Venin", "Lance Pollen"],
      targets: ["Toutes Fleurs"]
    },
    {
      name: "Tenebra",
      image: "/lovable-uploads/3bac1d13-bef9-47d1-ab80-deb791bba964.png",
      type: "Ally",
      powers: ["Bulldozer", "Booster Vivifiant"],
      targets: ["Sécheresse", "Nématodes"]
    },
    {
      name: "Aphroïd Clone",
      image: "/lovable-uploads/c879eee8-0298-45f2-be41-ae2caf305db2.png",
      type: "Ally",
      powers: ["Aspiration Plantes", "Propagation Flash", "Leurre Sucré"],
      targets: ["Toutes Plantes"]
    }
  ];

  return (
    <section id="game" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('game.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('game.subtitle')}
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <h3 className="text-2xl font-bold mb-6 text-center">{t('game.howToPlay')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold mb-2">{t('game.step1.title')}</h4>
                <p className="text-sm text-muted-foreground">{t('game.step1.description')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h4 className="font-semibold mb-2">{t('game.step2.title')}</h4>
                <p className="text-sm text-muted-foreground">{t('game.step2.description')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h4 className="font-semibold mb-2">{t('game.step3.title')}</h4>
                <p className="text-sm text-muted-foreground">{t('game.step3.description')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[3/4] relative">
                <img 
                  src={card.image} 
                  alt={card.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-bold text-sm mb-1">{card.name}</h4>
                  <div className="text-xs">
                    <div className="mb-1">
                      <span className="font-semibold">Pouvoirs:</span>
                      <ul className="text-xs">
                        {card.powers.map((power, idx) => (
                          <li key={idx}>• {power}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-semibold">Cibles:</span>
                      <span className="ml-1">{card.targets.join(", ")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card rounded-2xl p-8 shadow-lg border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">{t('game.educational.title')}</h3>
            <p className="text-muted-foreground mb-6">{t('game.educational.description')}</p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">{t('game.educational.allies')}</h4>
                <p className="text-sm text-muted-foreground">{t('game.educational.alliesDesc')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-600 mb-2">{t('game.educational.pests')}</h4>
                <p className="text-sm text-muted-foreground">{t('game.educational.pestsDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalGame;