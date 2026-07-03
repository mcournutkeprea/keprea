import type { RefObject } from "react";
import { Leaf, ShieldCheck, Sprout } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const challenges = [
  {
    icon: Leaf,
    stat: "84%",
    title: "Des cultures liées au vivant",
    desc: "84 % des cultures dépendent des insectes pour leur qualité et leur rendement. Keprea exploite cette relation naturelle pour protéger et stimuler vos parcelles.",
  },
  {
    icon: ShieldCheck,
    stat: "100%",
    title: "Naturel et sans résidu chimique",
    desc: "Toutes nos formulations sont d'origine naturelle, sans résidu toxique. Compatibles avec les certifications bio, HVE et les exigences croissantes des filières.",
  },
  {
    icon: Sprout,
    stat: "5 500",
    title: "Espèces auxiliaires mobilisées",
    desc: "La France recense 5 500 espèces d'insectes auxiliaires utiles. Keprea sélectionne et formule les plus efficaces pour chaque culture et chaque besoin.",
  },
];

const Problem = () => {
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: cardsRef, inView: cardsVisible } = useInView(0.05);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5 overflow-hidden">
      <div className="container mx-auto">

        {/* Header */}
        <div
          ref={headerRef as RefObject<HTMLDivElement>}
          className={`mb-14 max-w-2xl reveal${headerVisible ? " is-visible" : ""}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/50 mb-3">
            L'agriculture en transition
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
            Une protection des cultures plus ciblée, plus performante
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            L'agriculture française évolue vers des pratiques plus intelligentes et plus durables.
            Les agriculteurs recherchent des solutions efficaces, traçables et adaptées aux réalités du terrain. Keprea a développé ses biosolutions exactement pour ça.
          </p>
        </div>

        {/* Challenge cards */}
        <div
          ref={cardsRef as RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 mb-14 reveal reveal-delay-1${cardsVisible ? " is-visible" : ""}`}
        >
          {challenges.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-6 border border-border bg-background"
            >
              <item.icon className="w-5 h-5 text-primary/30 mb-5" aria-hidden="true" />
              <div className="text-4xl font-bold text-primary mb-3 tracking-tight">{item.stat}</div>
              <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Problem;
