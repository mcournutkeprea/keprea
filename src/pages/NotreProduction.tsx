import type { RefObject } from "react";
import { Head } from "vite-react-ssg";
import { Bug, Archive, FlaskConical, Package, Truck, Users, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Production from "@/components/Production";
import PageHero from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";

const steps = [
  { icon: Bug, titleKey: "notreproduction.step1.title", descKey: "notreproduction.step1.desc" },
  { icon: Archive, titleKey: "notreproduction.step2.title", descKey: "notreproduction.step2.desc" },
  { icon: FlaskConical, titleKey: "notreproduction.step3.title", descKey: "notreproduction.step3.desc" },
  { icon: Package, titleKey: "notreproduction.step4.title", descKey: "notreproduction.step4.desc" },
  { icon: Truck, titleKey: "notreproduction.step5.title", descKey: "notreproduction.step5.desc" },
  { icon: Users, titleKey: "notreproduction.step6.title", descKey: "notreproduction.step6.desc" },
];

const bulletKeys = [
  "notreproduction.bullet1",
  "notreproduction.bullet2",
  "notreproduction.bullet3",
];

const NotreProduction = () => {
  const { t } = useLanguage();
  const { ref: whyRef, inView: whyVisible } = useInView(0.15);
  const { ref: stepsRef, inView: stepsVisible } = useInView(0.08);

  return (
  <div className="min-h-screen bg-background flex flex-col">
    <Head>
      <title>Notre Production Keprea | Site de Production à Dole, Jura</title>
      <meta
        name="description"
        content="Découvrez notre process de production de biosolutions à Dole (39) : élevage d'insectes, extraction des principes actifs et formulation de biopesticides et biofertilisants."
      />
      <link rel="canonical" href="https://keprea.vercel.app/notre-production" />
      <meta property="og:url" content="https://keprea.vercel.app/notre-production" />
      <meta property="og:title" content="Notre Production Keprea | Site de Production à Dole, Jura" />
      <meta name="twitter:title" content="Notre Production Keprea | Site de Production à Dole, Jura" />
      <meta
        property="og:description"
        content="Découvrez notre process de production de biosolutions à Dole (39) : élevage d'insectes, extraction des principes actifs et formulation de biopesticides et biofertilisants."
      />
      <meta
        name="twitter:description"
        content="Découvrez notre process de production de biosolutions à Dole (39) : élevage d'insectes, extraction des principes actifs et formulation de biopesticides et biofertilisants."
      />
      <script type="application/ld+json">{breadcrumbJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Notre production", path: "/notre-production" },
      ])}</script>
    </Head>
    <Navigation />
    <main className="flex-1 pt-20">
      <PageHero
        eyebrow={t("notreproduction.hero.eyebrow")}
        title={t("notreproduction.hero.title")}
        lead={t("notreproduction.hero.lead")}
        stats={[
          { value: "3 000 m²", label: t("notreproduction.hero.stat1.label") },
          { value: "6", label: t("notreproduction.hero.stat2.label") },
          { value: "100%", label: t("notreproduction.hero.stat3.label") },
        ]}
      />

      {/* Pourquoi un site unique en France — bandeau argumentaire distinct du bloc Production ci-dessous */}
      <section className="pt-4 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div
            ref={whyRef as RefObject<HTMLDivElement>}
            className={`grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-center reveal${whyVisible ? " is-visible" : ""}`}
          >
            <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-1 lg:border-r lg:border-primary/15 lg:pr-14">
              <div className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary whitespace-nowrap">2h</div>
              <p className="text-sm text-muted-foreground leading-snug max-w-[14rem]">
                {t("notreproduction.location.stat2.desc")}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                {t("notreproduction.location.title")}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("notreproduction.why.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("notreproduction.why.desc")}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {bulletKeys.map((key) => (
                  <div key={key} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-foreground">{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Production />

      {/* Détail des 6 étapes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            {t("notreproduction.steps.title")}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {t("notreproduction.steps.subtitle")}
          </p>
          <div ref={stepsRef as RefObject<HTMLDivElement>} className="relative">
            <div className="absolute left-5 top-5 bottom-5 w-px bg-primary/15" aria-hidden="true" />
            <div className="space-y-8">
              {steps.map(({ icon: Icon, titleKey, descKey }, i) => (
                <div
                  key={i}
                  className={`relative flex gap-5 reveal${stepsVisible ? " is-visible" : ""}`}
                  style={{ transitionDelay: stepsVisible ? `${i * 90}ms` : "0ms" }}
                >
                  <div className="relative z-10 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-foreground mb-1">{t(titleKey)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
    <Footer />
  </div>
  );
};

export default NotreProduction;
