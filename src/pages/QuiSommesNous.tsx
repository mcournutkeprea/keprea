import { Head } from "vite-react-ssg";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Team from "@/components/Team";
import PageHero from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";

const milestoneKeys = [
  "quisommesnous.milestone1",
  "quisommesnous.milestone2",
  "quisommesnous.milestone3",
  "quisommesnous.milestone4",
];

const QuiSommesNous = () => {
  const { t } = useLanguage();

  return (
  <div className="min-h-screen bg-background flex flex-col">
    <Head>
      <title>Qui sommes-nous ? | Équipe et Mission Keprea</title>
      <meta
        name="description"
        content="Keprea, startup de biosolutions agricoles à Dole (Jura). Découvrez notre équipe d'experts, notre histoire et notre mission : des biosolutions à base d'insectes pour une agriculture durable."
      />
      <link rel="canonical" href="https://keprea.vercel.app/qui-sommes-nous" />
      <meta property="og:url" content="https://keprea.vercel.app/qui-sommes-nous" />
      <meta property="og:title" content="Qui sommes-nous ? | Équipe et Mission Keprea" />
      <meta name="twitter:title" content="Qui sommes-nous ? | Équipe et Mission Keprea" />
      <meta
        property="og:description"
        content="Keprea, startup de biosolutions agricoles à Dole (Jura). Découvrez notre équipe d'experts, notre histoire et notre mission : des biosolutions à base d'insectes pour une agriculture durable."
      />
      <meta
        name="twitter:description"
        content="Keprea, startup de biosolutions agricoles à Dole (Jura). Découvrez notre équipe d'experts, notre histoire et notre mission : des biosolutions à base d'insectes pour une agriculture durable."
      />
      <script type="application/ld+json">{breadcrumbJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Qui sommes-nous", path: "/qui-sommes-nous" },
      ])}</script>
    </Head>
    <Navigation />
    <main className="flex-1 pt-20">
      <PageHero
        eyebrow={t("quisommesnous.hero.eyebrow")}
        title={t("quisommesnous.hero.title")}
        lead={t("quisommesnous.hero.lead")}
        stats={[
          { value: "2024", label: t("quisommesnous.hero.stat1.label") },
          { value: "7", label: t("quisommesnous.hero.stat2.label") },
          { value: "3 000 m²", label: t("quisommesnous.hero.stat3.label") },
        ]}
      />
      {/* Mission */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h2 className="text-2xl font-bold text-foreground mb-4">{t("quisommesnous.mission.title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t("quisommesnous.mission.p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("quisommesnous.mission.p2")}
            </p>
          </div>
        </div>
      </section>

      <About showTitle={false} />

      {/* Jalons */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">
            {t("quisommesnous.milestones.title")}
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {milestoneKeys.map((key) => (
              <div key={key} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base text-foreground">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team />

    </main>
    <Footer />
  </div>
  );
};

export default QuiSommesNous;
