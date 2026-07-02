import type { RefObject } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate, Link } from "react-router-dom";
import leavesDropletsBg from "@/assets/leaves-droplets-bg.jpg";
import { useInView } from "@/hooks/useInView";
import { ArrowRight, Lightbulb } from "lucide-react";

const Solutions = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: gridRef, inView: gridVisible } = useInView(0.05);

  const handleNav = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const cards = [
    {
      path: "/solutions/bioprotection",
      bgStyle: { backgroundImage: `url('/lovable-uploads/bf0fefed-2323-4a06-a4f9-b4681de73dfe.png')` },
      subtitleKey: "solutions.bioprotection.subtitle",
      titleKey: "solutions.bioprotection.title",
      descKey: null,
      descText: (
        <>
          {t("solutions.bioprotection.pests")}{" "}
          <strong className="text-white">{t("solutions.bioprotection.pestsList")}</strong>
        </>
      ),
      wide: true,
    },
    {
      path: "/solutions/biopesticides",
      bgStyle: { backgroundImage: `url(${leavesDropletsBg})` },
      subtitleKey: "solutions.biopesticides.subtitle",
      titleKey: "solutions.biopesticides.title",
      descKey: null,
      descText: (
        <>
          {t("solutions.biopesticides.molecules")}{" "}
          <strong className="text-white">{t("solutions.biopesticides.protection")}</strong>
        </>
      ),
      wide: false,
    },
    {
      path: "/solutions/boosters",
      bgStyle: { backgroundImage: `url('/lovable-uploads/5a41caf6-fec0-40ca-984c-f9543cae5d7e.png')` },
      subtitleKey: "solutions.boosters.subtitle",
      titleKey: "solutions.boosters.title",
      descKey: null,
      descText: (
        <>
          {t("solutions.boosters.polypeptides")}{" "}
          <strong className="text-white">Polypeptides &amp; Proline</strong>
        </>
      ),
      wide: false,
    },
    {
      path: "/solutions/biofertilisant",
      bgStyle: { backgroundImage: `url('/lovable-uploads/514c70d9-ef8f-4f9f-8df3-f38124715fa6.png')` },
      subtitleKey: "solutions.biofertilisant.subtitle",
      titleKey: "solutions.biofertilisant.title",
      descKey: null,
      descText: (
        <>
          <strong className="text-primary">{t("solutions.biofertilisant.organic")}</strong>{", "}
          {t("solutions.biofertilisant.npk")}
        </>
      ),
      wide: true,
    },
  ];

  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">

        <div
          ref={headerRef as RefObject<HTMLDivElement>}
          className={`mb-12 reveal${headerVisible ? " is-visible" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
            {t("solutions.title")}
          </h2>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            {t("solutions.subtitle")}
          </p>
        </div>

        {/* Pourquoi le biocontrôle — banner CTA, positioned before the choice */}
        <Link
          to="/pourquoi-le-biocontrole"
          className="group/banner mb-8 flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl border border-primary/20 bg-primary/5 hover:bg-primary/[0.07] transition-colors duration-300 p-6 sm:p-7"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6 text-primary" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground mb-1">Pourquoi le biocontrôle ?</h3>
            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
              Cadre réglementaire, enjeux agronomiques et données clés : à lire avant de choisir votre solution.
            </p>
          </div>
          <span className="inline-flex items-center gap-3 rounded-full bg-primary text-white pl-5 pr-2 py-2 font-semibold text-sm flex-shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/banner:bg-primary/90">
            Découvrir
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover/banner:translate-x-0.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </span>
        </Link>

        {/* Asymmetric 3-col brick grid */}
        <div
          ref={gridRef as RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 reveal reveal-delay-1${gridVisible ? " is-visible" : ""}`}
        >
          {cards.map((card, _i) => (
            <div
              key={card.path}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl min-h-[340px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2${card.wide ? " md:col-span-2" : ""}`}
              onClick={() => handleNav(card.path)}
              role="button"
              tabIndex={0}
              aria-label={`Découvrir la gamme ${t(card.titleKey)}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleNav(card.path);
                }
              }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={card.bgStyle}
                role="img"
                aria-hidden="true"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" aria-hidden="true" />
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-7">
                <span className="text-xs text-white/50 uppercase tracking-widest mb-2">
                  {t(card.subtitleKey)}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  {t(card.titleKey)}
                  <ArrowRight
                    className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    aria-hidden="true"
                  />
                </h3>
                <p className="text-sm text-white/75 max-w-sm leading-relaxed">
                  {card.descText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Programme intégré */}
        <div className="mt-8 border border-primary/20 rounded-xl px-6 py-5 bg-primary/5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/60 flex-shrink-0">Programme intégré</span>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-foreground">
            <span className="font-semibold text-primary">Protéger</span>
            <span className="text-muted-foreground">Bioprotection + Biopesticides</span>
            <span className="text-primary/70">→</span>
            <span className="font-semibold text-primary">Stimuler</span>
            <span className="text-muted-foreground">Boosters</span>
            <span className="text-primary/70">→</span>
            <span className="font-semibold text-primary">Nourrir</span>
            <span className="text-muted-foreground">Biofertilisant</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solutions;
