import { useEffect } from "react";
import { Head } from "vite-react-ssg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GradientCTA from "@/components/GradientCTA";
import { Leaf, Shield, Zap, CheckCircle2, X } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";

const challenges = [
  { titleKey: "innovationpage.challenge1.title", textKey: "innovationpage.challenge1.text" },
  { titleKey: "innovationpage.challenge2.title", textKey: "innovationpage.challenge2.text" },
  { titleKey: "innovationpage.challenge3.title", textKey: "innovationpage.challenge3.text" },
];

const pillar3Stats = [
  { value: "84%", labelKey: "innovationpage.pillar3.stat1.label" },
  { value: "5 500", labelKey: "innovationpage.pillar3.stat2.label" },
  { value: "100%", labelKey: "innovationpage.pillar3.stat3.label" },
];

const kepreaItems = [
  "innovationpage.comparison.keprea.item1",
  "innovationpage.comparison.keprea.item2",
  "innovationpage.comparison.keprea.item3",
  "innovationpage.comparison.keprea.item4",
  "innovationpage.comparison.keprea.item5",
  "innovationpage.comparison.keprea.item6",
];

const chimieItems = [
  { ok: false, key: "innovationpage.comparison.chimie.item1" },
  { ok: false, key: "innovationpage.comparison.chimie.item2" },
  { ok: false, key: "innovationpage.comparison.chimie.item3" },
  { ok: false, key: "innovationpage.comparison.chimie.item4" },
  { ok: true, key: "innovationpage.comparison.chimie.item5" },
  { ok: false, key: "innovationpage.comparison.chimie.item6" },
];

const autresItems = [
  { ok: true, key: "innovationpage.comparison.autres.item1" },
  { ok: true, key: "innovationpage.comparison.autres.item2" },
  { ok: true, key: "innovationpage.comparison.autres.item3" },
  { ok: false, key: "innovationpage.comparison.autres.item4" },
  { ok: false, key: "innovationpage.comparison.autres.item5" },
  { ok: false, key: "innovationpage.comparison.autres.item6" },
];

const InnovationPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>Notre Innovation - Biosolutions à base d'insectes | Keprea</title>
        <meta
          name="description"
          content="Keprea exploite 400 millions d'années de co-évolution entre insectes et plantes pour créer des biosolutions agricoles uniques : sans résidu chimique, efficaces, tracées depuis le Jura."
        />
        <link rel="canonical" href="https://keprea.vercel.app/innovation" />
        <meta property="og:url" content="https://keprea.vercel.app/innovation" />
        <meta property="og:title" content="Notre Innovation - Biosolutions à base d'insectes | Keprea" />
        <meta name="twitter:title" content="Notre Innovation - Biosolutions à base d'insectes | Keprea" />
        <meta
          property="og:description"
          content="Keprea exploite 400 millions d'années de co-évolution entre insectes et plantes pour créer des biosolutions agricoles uniques : sans résidu chimique, efficaces, tracées depuis le Jura."
        />
        <meta
          name="twitter:description"
          content="Keprea exploite 400 millions d'années de co-évolution entre insectes et plantes pour créer des biosolutions agricoles uniques : sans résidu chimique, efficaces, tracées depuis le Jura."
        />
        <script type="application/ld+json">{breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Innovation", path: "/innovation" },
        ])}</script>
      </Head>
      <Navigation />

      <main className="flex-1 pt-20">

        {/* ── Hero ── */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="reveal max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                {t("innovationpage.hero.eyebrow")}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.05] mb-6">
                {t("innovationpage.hero.title")}
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                {t("innovationpage.hero.lead")}
              </p>
            </div>

            {/* Stats inline */}
            <div className="reveal reveal-delay-1 flex flex-wrap gap-10 mt-12 pt-12 border-t border-border/50">
              <div>
                <span className="text-4xl font-extrabold tracking-tight text-primary tabular-nums">400 M</span>
                <p className="text-sm text-muted-foreground mt-1">{t("innovationpage.hero.stat1.label")}</p>
              </div>
              <div className="w-px bg-border/60 hidden sm:block" />
              <div>
                <span className="text-4xl font-extrabold tracking-tight text-primary tabular-nums">84%</span>
                <p className="text-sm text-muted-foreground mt-1">{t("innovationpage.hero.stat2.label")}</p>
              </div>
              <div className="w-px bg-border/60 hidden sm:block" />
              <div>
                <span className="text-4xl font-extrabold tracking-tight text-primary tabular-nums">0</span>
                <p className="text-sm text-muted-foreground mt-1">{t("innovationpage.hero.stat3.label")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contexte : le défi agricole ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="container mx-auto max-w-6xl">
            <div className="reveal mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                {t("innovationpage.challenges.title")}
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                {t("innovationpage.challenges.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {challenges.map((item, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} p-7 rounded-2xl border border-border/60 bg-background`}
                >
                  <span
                    className="text-5xl font-extrabold tabular-nums block mb-4"
                    style={{ color: "hsl(var(--primary)/0.18)" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-foreground mb-2">{t(item.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(item.textKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Les 3 piliers de l'innovation Keprea ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="reveal mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                {t("innovationpage.pillars.title")}
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                {t("innovationpage.pillars.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              {/* Pilier 1 - carte claire */}
              <div
                className="p-[3px] rounded-[2rem]"
                style={{
                  background: "linear-gradient(145deg, hsl(var(--primary)/0.22) 0%, hsl(var(--primary)/0.06) 100%)",
                  boxShadow: "0 4px 40px hsl(var(--primary)/0.09)",
                }}
              >
                <div
                  className="rounded-[calc(2rem-3px)] px-8 py-9 h-full reveal"
                  style={{
                    background: "radial-gradient(ellipse at 110% -15%, hsl(var(--primary)/0.09) 0%, transparent 55%), hsl(var(--background))",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.92)",
                  }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Leaf className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3" style={{ letterSpacing: "-0.01em" }}>
                    {t("innovationpage.pillar1.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[50ch]">
                    {t("innovationpage.pillar1.desc")}
                  </p>
                </div>
              </div>

              {/* Pilier 2 - carte claire */}
              <div
                className="p-[3px] rounded-[2rem]"
                style={{
                  background: "linear-gradient(145deg, hsl(var(--primary)/0.22) 0%, hsl(var(--primary)/0.06) 100%)",
                  boxShadow: "0 4px 40px hsl(var(--primary)/0.09)",
                }}
              >
                <div
                  className="rounded-[calc(2rem-3px)] px-8 py-9 h-full reveal"
                  style={{
                    background: "radial-gradient(ellipse at 110% -15%, hsl(var(--primary)/0.09) 0%, transparent 55%), hsl(var(--background))",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.92)",
                  }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Shield className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3" style={{ letterSpacing: "-0.01em" }}>
                    {t("innovationpage.pillar2.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[50ch]">
                    {t("innovationpage.pillar2.desc")}
                  </p>
                </div>
              </div>

              {/* Pilier 3 - pleine largeur */}
              <div
                className="lg:col-span-2 p-[3px] rounded-[2rem]"
                style={{
                  background: "linear-gradient(145deg, hsl(var(--primary)/0.22) 0%, hsl(var(--primary)/0.06) 100%)",
                  boxShadow: "0 4px 40px hsl(var(--primary)/0.09)",
                }}
              >
                <div
                  className="rounded-[calc(2rem-3px)] px-8 py-9 reveal"
                  style={{
                    background: "radial-gradient(ellipse at 110% -15%, hsl(var(--primary)/0.09) 0%, transparent 55%), hsl(var(--background))",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.92)",
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <Zap className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3" style={{ letterSpacing: "-0.01em" }}>
                        {t("innovationpage.pillar3.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t("innovationpage.pillar3.desc")}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {pillar3Stats.map((stat, i) => (
                        <div key={i} className="bg-primary/5 rounded-xl p-4">
                          <span className="text-2xl font-extrabold text-primary tracking-tight tabular-nums">{stat.value}</span>
                          <p className="text-xs text-muted-foreground mt-1 leading-snug">{t(stat.labelKey)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Comparaison Keprea vs alternatives ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="container mx-auto max-w-6xl">
            <div className="reveal mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                {t("innovationpage.comparison.title")}
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                {t("innovationpage.comparison.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              {/* Keprea - carte claire (accent) */}
              <div
                className="p-[3px] rounded-[2rem] reveal"
                style={{
                  background: "linear-gradient(145deg, hsl(var(--primary)/0.22) 0%, hsl(var(--primary)/0.06) 100%)",
                  boxShadow: "0 4px 40px hsl(var(--primary)/0.09)",
                }}
              >
                <div
                  className="rounded-[calc(2rem-3px)] px-7 py-8 h-full"
                  style={{
                    background: "radial-gradient(ellipse at 110% -15%, hsl(var(--primary)/0.09) 0%, transparent 55%), hsl(var(--background))",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.92)",
                  }}
                >
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary border rounded-full px-3 py-1 inline-block mb-6"
                    style={{ background: "hsl(var(--primary)/0.08)", borderColor: "hsl(var(--primary)/0.18)" }}
                  >
                    {t("innovationpage.comparison.keprea.badge")}
                  </span>
                  <ul className="space-y-3">
                    {kepreaItems.map((key, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span className="text-sm text-foreground">{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Chimie classique */}
              <div className="rounded-[2rem] border border-border/60 bg-background px-7 py-8 reveal reveal-delay-1">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground bg-muted/60 border border-border/50 rounded-full px-3 py-1 inline-block mb-6">
                  {t("innovationpage.comparison.chimie.badge")}
                </span>
                <ul className="space-y-3">
                  {chimieItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {item.ok
                        ? <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        : <X className="w-4 h-4 text-destructive/60 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      }
                      <span className="text-sm text-muted-foreground">{t(item.key)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Autres solutions de biocontrôle */}
              <div className="rounded-[2rem] border border-border/60 bg-background px-7 py-8 reveal reveal-delay-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground bg-muted/60 border border-border/50 rounded-full px-3 py-1 inline-block mb-6">
                  {t("innovationpage.comparison.autres.badge")}
                </span>
                <ul className="space-y-3">
                  {autresItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {item.ok
                        ? <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        : <X className="w-4 h-4 text-destructive/60 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      }
                      <span className="text-sm text-muted-foreground">{t(item.key)}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        <GradientCTA
          title={t("innovationpage.cta.title")}
          description={t("innovationpage.cta.desc")}
          primary={{ label: t("innovationpage.cta.primary"), to: "/solutions" }}
          secondary={{ label: t("innovationpage.cta.secondary"), href: "mailto:contact@keprea.com?subject=Demande%20essai%20terrain" }}
        />

      </main>

      <Footer />
    </div>
  );
};

export default InnovationPage;
