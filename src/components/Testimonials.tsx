import type { RefObject } from "react";
import { CheckCircle, FlaskConical, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";


const credibilityStats = [
  { value: "2025", label: "Fondée en France" },
  { value: "4", label: "Gammes de biosolutions" },
  { value: "100%", label: "Origine naturelle" },
  { value: "Terrain", label: "Suivi agronomique inclus" },
];

const guarantees = [
  {
    icon: CheckCircle,
    title: "Traçabilité complète",
    desc: "Chaque lot est tracé de la filière insecte jusqu'à la formulation finale. Origine 100% française, aucun intermédiaire inconnu.",
  },
  {
    icon: FlaskConical,
    title: "Essai terrain sans engagement",
    desc: "Nous organisons un essai sur votre exploitation avant tout engagement commercial. Vous validez les résultats dans vos conditions réelles.",
  },
  {
    icon: Users,
    title: "Accompagnement agronomique",
    desc: "Un technicien Keprea suit chaque essai de A à Z : protocole, interprétation des résultats, recommandations adaptées à votre système.",
  },
];

const TrustSection = () => {
  const { ref: statsRef, inView: statsVisible } = useInView(0.08);
  const { ref: guaranteesRef, inView: guaranteesVisible } = useInView(0.05);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="container mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/50 mb-3">
              Nos garanties
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Des biosolutions développées avec rigueur
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed md:text-right">
            Une startup de 2025 qui mise sur la transparence et les résultats mesurables.
          </p>
        </div>

        {/* Credibility stats */}
        <div
          ref={statsRef as RefObject<HTMLDivElement>}
          className={`grid grid-cols-2 md:grid-cols-4 gap-px mb-12 rounded-xl overflow-hidden bg-border/30 reveal${statsVisible ? " is-visible" : ""}`}
        >
          {credibilityStats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 px-6 py-5 bg-background"
            >
              <span
                className="text-2xl font-bold text-primary tracking-tight"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {s.value}
              </span>
              <span className="text-xs text-muted-foreground leading-snug">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Guarantee cards */}
        <div
          ref={guaranteesRef as RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 reveal reveal-delay-1${guaranteesVisible ? " is-visible" : ""}`}
        >
          {guarantees.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-6 flex flex-col gap-4 bg-background border border-border"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "hsl(var(--primary) / 0.1)" }}
              >
                <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
            Les premiers témoignages de nos partenaires agriculteurs seront publiés à l'issue des essais terrain 2026.
          </p>
          <Link
            to="/contact"
            className="group shrink-0 inline-flex items-center gap-3 rounded-full bg-primary hover:bg-primary/90 text-white pl-5 pr-2 py-2 text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            Rejoindre les premiers essais
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
