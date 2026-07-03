import type { RefObject } from "react";
import { MessageSquare, FlaskConical, PackageCheck } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Prenez contact",
    desc: "Décrivez votre contexte : culture, pression parasitaire, objectifs. Notre équipe revient vers vous rapidement.",
    cta: null,
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Essai terrain",
    desc: "Nous organisons un essai sur votre exploitation avec suivi technique. Vous observez les résultats dans vos conditions réelles.",
    cta: null,
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Déploiement & suivi",
    desc: "Passage à l'échelle selon vos résultats, avec un accompagnement agronomique continu. Pas d'engagement avant conviction.",
    cta: null,
  },
];

const HowToGet = () => {
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: stepsRef, inView: stepsVisible } = useInView(0.05);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">

        {/* Header */}
        <div
          ref={headerRef as RefObject<HTMLDivElement>}
          className={`mb-14 reveal${headerVisible ? " is-visible" : ""}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Comment ça marche
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tester nos solutions en 3 étapes
          </h2>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            Nous accompagnons chaque agriculteur du premier contact jusqu'au résultat terrain.
            Pas de signature avant d'avoir vu les effets sur votre exploitation.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef as RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-0 reveal reveal-delay-1${stepsVisible ? " is-visible" : ""}`}
        >
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col">
              {/* Connector line between steps */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-[2.75rem] left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px"
                  style={{ backgroundColor: "hsl(var(--border))" }}
                  aria-hidden="true"
                />
              )}
              <div className="px-6 py-8 flex flex-col gap-3">
                {/* Step number — decorative, large */}
                <span
                  className="text-5xl font-extrabold leading-none mb-1 tabular-nums"
                  style={{ color: "hsl(var(--primary) / 0.28)" }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"
                >
                  <step.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mt-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowToGet;
