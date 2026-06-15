import type { RefObject } from "react";
import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";

const profiles = [
  { type: "Grandes cultures", region: "Bourgogne-Franche-Comté", product: "Bioprotection" },
  { type: "Maraîchage", region: "Rhône-Alpes", product: "Biopesticides" },
  { type: "Viticulture", region: "Alsace", product: "Boosters" },
];

const BG = 'hsl(145 68% 14%)';
const CARD_BG = 'rgba(255,255,255,0.06)';
const CARD_BORDER = '1px solid rgba(255,255,255,0.1)';

const Testimonials = () => {
  const { ref, inView } = useInView(0.08);

  return (
    <section style={{ backgroundColor: BG }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div ref={ref as RefObject<HTMLDivElement>} className={`container mx-auto reveal${inView ? ' is-visible' : ''}`}>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/35 mb-3">Retours terrain</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ce que disent nos agriculteurs
            </h2>
          </div>
          <p className="text-white/55 text-sm max-w-xs leading-relaxed md:text-right">
            Témoignages en cours de collecte auprès de nos premiers partenaires.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {profiles.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-6 flex flex-col gap-5"
              style={{ backgroundColor: CARD_BG, border: CARD_BORDER }}
            >
              <Quote className="w-6 h-6 text-primary/50" />
              <div className="flex-1 flex items-center">
                <p className="text-white/30 text-sm italic">Témoignage en cours de collecte...</p>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} className="pt-4">
                <p className="text-white/75 text-sm font-medium">{item.type}</p>
                <p className="text-white/35 text-xs mt-0.5">{item.region} · {item.product}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-white/45 text-sm">
            Vous utilisez nos produits ? Votre retour aide d'autres agriculteurs.
          </p>
          <Link to="/contact">
            <Button
              variant="outline"
              size="sm"
              className="shrink-0 border-white/30 text-white bg-transparent hover:bg-white hover:text-primary transition-colors"
            >
              Partager mon expérience
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
