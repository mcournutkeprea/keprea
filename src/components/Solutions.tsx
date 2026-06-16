import type { RefObject } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import leavesDropletsBg from "@/assets/leaves-droplets-bg.jpg";
import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";

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
          <strong className="text-primary">{t("solutions.biofertilisant.organic")}</strong>{" "}
          — {t("solutions.biofertilisant.npk")}
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

        {/* Asymmetric 3-col brick grid */}
        <div
          ref={gridRef as RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 reveal reveal-delay-1${gridVisible ? " is-visible" : ""}`}
        >
          {cards.map((card, i) => (
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

      </div>
    </section>
  );
};

export default Solutions;
