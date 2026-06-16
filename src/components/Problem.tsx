import type { RefObject } from "react";
import { AlertTriangle, TrendingDown, ShieldOff } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const challenges = [
  {
    icon: ShieldOff,
    stat: "+40%",
    title: "Résistances en hausse",
    desc: "Les bioagresseurs développent des résistances aux traitements chimiques répétés, réduisant leur efficacité d'année en année.",
  },
  {
    icon: AlertTriangle,
    stat: "–60%",
    title: "Réduction des intrants imposée",
    desc: "Le plan Écophyto impose une réduction drastique des pesticides chimiques. Les agriculteurs doivent trouver des alternatives fiables.",
  },
  {
    icon: TrendingDown,
    stat: "×3",
    title: "Pression sur les marges",
    desc: "Coûts des intrants en hausse, revenus sous tension. L'efficacité de chaque traitement devient un enjeu économique direct.",
  },
];

const Problem = () => {
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: cardsRef, inView: cardsVisible } = useInView(0.05);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(142_69%_8%)] overflow-hidden">
      <div className="container mx-auto">

        {/* Header */}
        <div
          ref={headerRef as RefObject<HTMLDivElement>}
          className={`mb-14 max-w-2xl reveal${headerVisible ? " is-visible" : ""}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35 mb-3">
            Le contexte agricole actuel
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
            L'agriculture fait face à des défis sans précédent
          </h2>
          <p className="text-base text-white/60 leading-relaxed">
            Les modèles de protection des cultures hérités des années 70–90 atteignent leurs limites.
            Les résistances s'accumulent, la réglementation se resserre, et les agriculteurs cherchent des solutions qui fonctionnent vraiment.
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
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <item.icon className="w-5 h-5 text-white/30 mb-5" aria-hidden="true" />
              <div className="text-4xl font-bold text-primary mb-3 tracking-tight">{item.stat}</div>
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Problem;
