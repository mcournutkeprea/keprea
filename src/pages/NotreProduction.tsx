import { Head } from "vite-react-ssg";
import { Bug, Archive, FlaskConical, Package, Truck, Users, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Production from "@/components/Production";
import PageHero from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";

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

      {/* Pourquoi produire en France */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t("notreproduction.why.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("notreproduction.why.desc")}
            </p>
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
          <div className="space-y-6">
            {steps.map(({ icon: Icon, titleKey, descKey }, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-foreground mb-1">{t(titleKey)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Un site d'excellence, en chiffres — suite de la section Production */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary text-center mb-10">
            {t("notreproduction.location.title")}
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-background rounded-2xl p-6 text-center border border-border">
              <div className="text-3xl font-bold text-primary mb-1">3 000 m²</div>
              <p className="text-sm text-muted-foreground">{t("notreproduction.location.stat1.desc")}</p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center border border-border">
              <div className="text-3xl font-bold text-primary mb-1">2h</div>
              <p className="text-sm text-muted-foreground">{t("notreproduction.location.stat2.desc")}</p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center border border-border">
              <div className="text-3xl font-bold text-primary mb-1">6</div>
              <p className="text-sm text-muted-foreground">{t("notreproduction.location.stat3.desc")}</p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {bulletKeys.map((key) => (
              <div key={key} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
    <Footer />
  </div>
  );
};

export default NotreProduction;
