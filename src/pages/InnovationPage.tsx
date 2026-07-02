import { useEffect } from "react";
import { Head } from "vite-react-ssg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Leaf, Shield, Zap, CheckCircle2, X } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const InnovationPage = () => {
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
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold bg-primary/10 text-primary mb-6">
                Innovation
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.05] mb-6">
                Une source de molécules que la chimie ne peut pas reproduire
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Les insectes ont co-evolué avec les plantes pendant 400 millions d'années. Keprea extrait et formule ces actifs biologiques pour en faire des biosolutions agricoles sans aucun résidu chimique.
              </p>
            </div>

            {/* Stats inline */}
            <div className="reveal reveal-delay-1 flex flex-wrap gap-10 mt-12 pt-12 border-t border-border/50">
              <div>
                <span className="text-4xl font-extrabold tracking-tight text-primary tabular-nums">400 M</span>
                <p className="text-sm text-muted-foreground mt-1">années de co-évolution</p>
              </div>
              <div className="w-px bg-border/60 hidden sm:block" />
              <div>
                <span className="text-4xl font-extrabold tracking-tight text-primary tabular-nums">84%</span>
                <p className="text-sm text-muted-foreground mt-1">des cultures dépendent des insectes</p>
              </div>
              <div className="w-px bg-border/60 hidden sm:block" />
              <div>
                <span className="text-4xl font-extrabold tracking-tight text-primary tabular-nums">0</span>
                <p className="text-sm text-muted-foreground mt-1">résidu chimique</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contexte : le défi agricole ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="container mx-auto max-w-6xl">
            <div className="reveal mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                L'agriculture face à ses limites
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                Les solutions chimiques conventionnelles montrent des signes d'épuisement. Réglementation plus stricte, résistances des ravageurs, attentes de traçabilité : le modèle doit changer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  number: "01",
                  title: "Réglementation en hausse",
                  text: "Des centaines de substances actives chimiques retirées du marché ces dernières années en Europe. Les agriculteurs cherchent des alternatives fiables et durables.",
                },
                {
                  number: "02",
                  title: "Résistances croissantes",
                  text: "Les ravageurs développent des résistances aux pesticides chimiques. L'efficacité des traitements conventionnels décline sur le long terme, forçant des doses croissantes.",
                },
                {
                  number: "03",
                  title: "Attentes de traçabilité",
                  text: "Les filières et les consommateurs exigent des produits sans résidu. Le biocontrôle n'est plus un choix marginal, c'est une nécessité commerciale et réglementaire.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} p-7 rounded-2xl border border-border/60 bg-background`}
                >
                  <span
                    className="text-5xl font-extrabold tabular-nums block mb-4"
                    style={{ color: "hsl(var(--primary)/0.18)" }}
                    aria-hidden="true"
                  >
                    {item.number}
                  </span>
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
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
                Pourquoi les insectes sont uniques
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                Ce n'est pas un effet de mode. L'innovation Keprea repose sur une réalité biologique profonde que la chimie de synthèse et les extraits végétaux ne peuvent pas égaler.
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
                    400 millions d'années de biochimie naturelle
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[50ch]">
                    Les insectes ont co-evolué avec les plantes depuis 400 millions d'années. Ils ont développé des enzymes, des peptides et des acides aminés qui interagissent précisément avec les mécanismes de défense et de croissance végétales. Ces molécules sont impossibles à reproduire synthétiquement avec la même efficacité.
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
                    Zéro résidu chimique, zéro restriction
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[50ch]">
                    Les biosolutions Keprea sont entièrement d'origine naturelle. Aucun résidu toxique dans le sol, les eaux ou les récoltes. Compatibles avec les cahiers des charges bio, les certifications HVE et les exigences des grandes et moyennes surfaces.
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
                        Efficacité prouvée sur le terrain
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Les gammes Keprea sont développées et testées directement avec des agriculteurs. Chaque formulation est évaluée sur des parcelles réelles, dans les conditions de culture françaises, avant d'être mise sur le marché.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: "84%", label: "des cultures dépendent des insectes pour leur rendement" },
                        { value: "5 500", label: "espèces auxiliaires utiles recensées en France" },
                        { value: "10 000", label: "individus actifs par m² en moyenne" },
                        { value: "100%", label: "naturel, sans résidu chimique" },
                      ].map((stat, i) => (
                        <div key={i} className="bg-primary/5 rounded-xl p-4">
                          <span className="text-2xl font-extrabold text-primary tracking-tight tabular-nums">{stat.value}</span>
                          <p className="text-xs text-muted-foreground mt-1 leading-snug">{stat.label}</p>
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
                Keprea face aux autres approches
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                Une comparaison directe pour vous aider à faire le bon choix pour vos cultures et votre exploitation.
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
                    Biosolutions Keprea
                  </span>
                  <ul className="space-y-3">
                    {[
                      "Actifs biologiques issus d'insectes",
                      "Zéro résidu toxique",
                      "Compatible bio et HVE",
                      "Efficacité testée en conditions réelles",
                      "Traçabilité totale — Made in France",
                      "Accompagnement technique inclus",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Chimie classique */}
              <div className="rounded-[2rem] border border-border/60 bg-background px-7 py-8 reveal reveal-delay-1">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground bg-muted/60 border border-border/50 rounded-full px-3 py-1 inline-block mb-6">
                  Chimie classique
                </span>
                <ul className="space-y-3">
                  {[
                    { ok: false, text: "Résidus toxiques dans les récoltes" },
                    { ok: false, text: "Réglementation de plus en plus restrictive" },
                    { ok: false, text: "Développement de résistances chez les ravageurs" },
                    { ok: false, text: "Impact négatif sur la biodiversité" },
                    { ok: true,  text: "Efficacité à court terme reconnue" },
                    { ok: false, text: "Inadaptée aux cahiers des charges bio" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {item.ok
                        ? <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        : <X className="w-4 h-4 text-destructive/60 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      }
                      <span className="text-sm text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Biocontrôle générique */}
              <div className="rounded-[2rem] border border-border/60 bg-background px-7 py-8 reveal reveal-delay-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground bg-muted/60 border border-border/50 rounded-full px-3 py-1 inline-block mb-6">
                  Biocontrôle générique
                </span>
                <ul className="space-y-3">
                  {[
                    { ok: true,  text: "Sans résidu chimique" },
                    { ok: false, text: "Efficacité variable selon les formulations" },
                    { ok: false, text: "Traçabilité souvent opaque" },
                    { ok: false, text: "Peu ou pas d'accompagnement terrain" },
                    { ok: true,  text: "Compatible agriculture biologique" },
                    { ok: false, text: "Gammes peu spécialisées par culture" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {item.ok
                        ? <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        : <X className="w-4 h-4 text-destructive/60 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      }
                      <span className="text-sm text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div
              className="p-[3px] rounded-[2rem] reveal"
              style={{
                background: "linear-gradient(145deg, hsl(var(--primary)/0.40) 0%, hsl(var(--primary)/0.08) 100%)",
                boxShadow: "0 4px 40px hsl(var(--primary)/0.12)",
              }}
            >
              <div
                className="rounded-[calc(2rem-3px)] px-10 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
                style={{
                  background: "radial-gradient(ellipse at 110% -15%, hsl(var(--primary)/0.09) 0%, transparent 55%), hsl(var(--background))",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.92)",
                }}
              >
                <div className="max-w-lg">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">
                    Convaincu ? Testez sur vos parcelles.
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Nous proposons des essais terrain avec accompagnement technique. Parlez-nous de vos cultures, nous adaptons la solution.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <a
                    href="/solutions"
                    className="inline-flex items-center justify-center gap-3 rounded-full h-11 px-6 text-sm font-semibold bg-primary text-white group transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-primary/90"
                  >
                    <span>Voir nos solutions</span>
                    <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                    </span>
                  </a>
                  <a
                    href="mailto:contact@keprea.com?subject=Demande%20essai%20terrain"
                    className="inline-flex items-center justify-center rounded-full h-11 px-6 text-sm font-semibold border border-primary/30 text-primary transition-colors duration-200 hover:bg-primary/5"
                  >
                    Demander un essai
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default InnovationPage;
