import type { RefObject } from "react";
import { MapPin, Factory, Leaf, ArrowDown, ArrowRight, Bug, Archive, FlaskConical, Package, Truck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import FranceMap from "./FranceMap";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";

const processSteps = [
  { icon: Bug, color: "bg-purple-100 text-purple-600", labelKey: "production.process.step1" },
  { icon: Archive, color: "bg-orange-100 text-orange-600", labelKey: "production.process.step2" },
  { icon: FlaskConical, color: "bg-blue-100 text-blue-600", labelKey: "production.process.step3" },
  { icon: Package, color: "bg-fuchsia-100 text-fuchsia-600", labelKey: "production.process.step4" },
  { icon: Truck, color: "bg-red-100 text-red-600", labelKey: "production.process.transport" },
  { icon: Users, color: "bg-yellow-100 text-yellow-600", labelKey: "production.process.step5" },
];

interface ProductionProps {
  teaser?: boolean;
}

const Production = ({ teaser = false }: ProductionProps) => {
  const { t } = useLanguage();
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: bodyRef, inView: bodyVisible } = useInView(0.04);
  const { ref: processRef, inView: processVisible } = useInView(0.04);

  return (
    <section id="production" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">

        {/* Header */}
        <div
          ref={headerRef as RefObject<HTMLDivElement>}
          className={`mb-12 reveal${headerVisible ? " is-visible" : ""}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Site de production
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("production.title")}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            {t("production.subtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div
            ref={bodyRef as RefObject<HTMLDivElement>}
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 to-accent/20 p-8 lg:p-12 reveal reveal-delay-1${bodyVisible ? " is-visible" : ""}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left — feature pillars */}
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  {t("production.excellence")}
                </h3>

                <div className="space-y-8">
                  {[
                    { Icon: MapPin, titleKey: "production.location.title", descKey: "production.location.desc" },
                    { Icon: Factory, titleKey: "production.technology.title", descKey: "production.technology.desc" },
                    { Icon: Leaf, titleKey: "production.environment.title", descKey: "production.environment.desc" },
                  ].map(({ Icon, titleKey, descKey }) => (
                    <div key={titleKey} className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-base">
                          {t(titleKey)}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(descKey)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Centre — building photo */}
              <div className="lg:col-span-4">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border-2 border-primary/20">
                  <img
                    src="/lovable-uploads/6f3f0723-78e2-48e6-b36a-2520e97f1f40.webp"
                    alt="Site de production Keprea à Damparis, bâtiment d'élevage et de transformation"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right — map (full) or CTA (teaser) */}
              <div className="lg:col-span-4">
                {teaser ? (
                  <div className="flex flex-col justify-between h-full gap-6 p-6 rounded-xl border border-primary/15 bg-background/60">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
                        Process complet
                      </p>
                      <p className="text-base font-semibold text-foreground leading-snug mb-2">
                        De l'élevage d'insectes à la formulation finale
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Découvrez notre chaîne de production maîtrisée : collecte de co-produits, extraction, formulation, livraison.
                      </p>
                    </div>
                    <Link
                      to="/notre-production"
                      className="group inline-flex items-center gap-3 rounded-full bg-primary hover:bg-primary/90 text-white pl-5 pr-2 py-2 font-semibold text-sm transition-all duration-300 w-fit"
                    >
                      Voir notre site de production
                      <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    </Link>
                  </div>
                ) : (
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border-2 border-primary/20">
                    <FranceMap />
                  </div>
                )}
              </div>
            </div>

            {/* Production process — page dédiée seulement */}
            {!teaser && (
              <div
                ref={processRef as RefObject<HTMLDivElement>}
                className={`relative z-10 mt-10 reveal reveal-delay-2${processVisible ? " is-visible" : ""}`}
              >
                <h4 className="text-sm font-semibold uppercase tracking-widest text-primary mb-6 text-left">
                  {t("production.process.title")}
                </h4>

                {/* Mobile — vertical stack */}
                <div className="flex flex-col items-center gap-4 max-w-sm mx-auto lg:hidden">
                  <div className="flex justify-center gap-4 w-full">
                    {processSteps.slice(0, 2).map(({ icon: Icon, color, labelKey }, i) => (
                      <div key={i} className="flex flex-col items-center gap-2 p-3 bg-background/50 rounded-lg text-center flex-1 max-w-[140px]">
                        <div className={`w-11 h-11 rounded-full ${color} flex items-center justify-center shrink-0`}>
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <p className="text-xs font-bold text-foreground leading-tight">{t(labelKey)}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4" aria-hidden="true">
                    <ArrowDown className="w-5 h-5 text-primary" />
                    <ArrowDown className="w-5 h-5 text-primary" />
                  </div>
                  {processSteps.slice(2).map(({ icon: Icon, color, labelKey }, i) => (
                    <div key={i} className="w-full flex flex-col items-center gap-2">
                      <div className="flex flex-col items-center gap-2 p-3 bg-background/50 rounded-lg text-center w-full">
                        <div className={`w-11 h-11 rounded-full ${color} flex items-center justify-center shrink-0`}>
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <p className="text-sm font-bold text-foreground">{t(labelKey)}</p>
                      </div>
                      {i < processSteps.length - 3 && (
                        <ArrowDown className="w-5 h-5 text-primary" aria-hidden="true" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Desktop — horizontal */}
                <div className="hidden lg:flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex flex-col gap-3">
                    {processSteps.slice(0, 2).map(({ icon: Icon, color, labelKey }, i) => (
                      <div key={i} className="flex flex-col items-center gap-2 p-3 bg-background/50 rounded-lg text-center w-36">
                        <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center shrink-0`}>
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <p className="text-xs font-bold text-foreground leading-tight">{t(labelKey)}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 items-center" aria-hidden="true">
                    <ArrowRight className="w-5 h-5 text-primary" />
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>

                  {processSteps.slice(2).map(({ icon: Icon, color, labelKey }, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="flex flex-col items-center gap-2 p-3 bg-background/50 rounded-lg text-center w-36">
                        <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center shrink-0`}>
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <p className="text-xs font-bold text-foreground leading-tight">{t(labelKey)}</p>
                      </div>
                      {i < processSteps.length - 3 && (
                        <ArrowRight className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;
