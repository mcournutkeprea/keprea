import { useState } from "react";
import { Head } from "vite-react-ssg";
import { Leaf, ShieldCheck, FlaskConical, TrendingUp, Bug, Sprout, Award, Microscope, Feather, TestTube, Scale, Tractor } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GradientCTA from "@/components/GradientCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { faqJsonLd, articleJsonLd } from "@/lib/schema";
import { useLanguage } from "@/contexts/LanguageContext";

const franceStats = [
  { value: "-50 %", descKey: "pourquoi.franceStat1.desc" },
  { value: "-20 %", descKey: "pourquoi.franceStat2.desc" },
  { value: "770", descKey: "pourquoi.franceStat3.desc" },
  { value: "30 %", descKey: "pourquoi.franceStat4.desc" },
];

const europeStats = [
  { value: "1,6 Md€", descKey: "pourquoi.europeStat1.desc" },
  { value: "+10 %/an", descKey: "pourquoi.europeStat2.desc" },
];

const faqKeys = [
  { questionKey: "pourquoi.faq1.q", answerKey: "pourquoi.faq1.a" },
  { questionKey: "pourquoi.faq2.q", answerKey: "pourquoi.faq2.a" },
  { questionKey: "pourquoi.faq3.q", answerKey: "pourquoi.faq3.a" },
  { questionKey: "pourquoi.faq4.q", answerKey: "pourquoi.faq4.a" },
  { questionKey: "pourquoi.faq5.q", answerKey: "pourquoi.faq5.a" },
  { questionKey: "pourquoi.faq6.q", answerKey: "pourquoi.faq6.a" },
];


const PourquoiBiocontrole = () => {
  const { t } = useLanguage();
  const [statsScope, setStatsScope] = useState<"france" | "europe">("france");
  const faqItems = faqKeys.map(({ questionKey, answerKey }) => ({
    question: t(questionKey),
    answer: t(answerKey),
  }));

  return (
  <div className="min-h-screen bg-background flex flex-col">
    <Head>
      <title>Pourquoi le Biocontrôle ? | Agriculture Durable : Keprea</title>
      <meta
        name="description"
        content="Comprendre le biocontrôle : cadre réglementaire français et européen, alternatives naturelles aux produits phytosanitaires pour protéger vos cultures."
      />
      <link rel="canonical" href="https://keprea.vercel.app/pourquoi-le-biocontrole" />
      <meta property="og:url" content="https://keprea.vercel.app/pourquoi-le-biocontrole" />
      <meta property="og:title" content="Pourquoi le Biocontrôle ? | Agriculture Durable : Keprea" />
      <meta name="twitter:title" content="Pourquoi le Biocontrôle ? | Agriculture Durable : Keprea" />
      <meta
        property="og:description"
        content="Comprendre le biocontrôle : cadre réglementaire français et européen, alternatives naturelles aux produits phytosanitaires pour protéger vos cultures."
      />
      <meta
        name="twitter:description"
        content="Comprendre le biocontrôle : cadre réglementaire français et européen, alternatives naturelles aux produits phytosanitaires pour protéger vos cultures."
      />
      <script type="application/ld+json">{breadcrumbJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Pourquoi le biocontrôle ?", path: "/pourquoi-le-biocontrole" },
      ])}</script>
      <script type="application/ld+json">{articleJsonLd({
        headline: "Pourquoi le Biocontrôle ? Comprendre les enjeux pour l'agriculture durable",
        description: "Comprendre le biocontrôle : cadre réglementaire français et européen, marché en croissance, catégories de solutions et alternatives naturelles aux produits phytosanitaires.",
        path: "/pourquoi-le-biocontrole",
        datePublished: "2026-06-15",
        dateModified: "2026-07-03",
      })}</script>
      <script type="application/ld+json">{faqJsonLd(faqItems)}</script>
    </Head>
    <Navigation />

    <main className="flex-1 pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("pourquoi.hero.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("pourquoi.hero.lead")}
          </p>
        </div>
      </section>

      {/* Définition */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t("pourquoi.def.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("pourquoi.def.intro")}
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="bg-background rounded-xl p-5 border border-border">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary/70 mb-2">{t("pourquoi.def.france.title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("pourquoi.def.france.text")}
                </p>
              </div>
              <div className="bg-background rounded-xl p-5 border border-border">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary/70 mb-2">{t("pourquoi.def.europe.title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("pourquoi.def.europe.text")}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t("pourquoi.def.outro")}
            </p>
          </div>
        </div>
      </section>

      {/* 4 catégories de biocontrôle */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            {t("pourquoi.categories.title")}
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            {t("pourquoi.categories.subtitle")}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-2xl p-6 border border-border">
              <Feather className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{t("pourquoi.cat1.title")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("pourquoi.cat1.desc")}
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 border border-border">
              <Microscope className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{t("pourquoi.cat2.title")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("pourquoi.cat2.desc")}
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 border border-border">
              <TestTube className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{t("pourquoi.cat3.title")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("pourquoi.cat3.desc")}
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 border border-border">
              <Bug className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{t("pourquoi.cat4.title")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("pourquoi.cat4.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contexte réglementaire et marché */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            {t("pourquoi.context.title")}
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            {t("pourquoi.context.subtitle")}
          </p>

          <div role="tablist" aria-label={t("pourquoi.tabs.ariaLabel")} className="flex justify-center gap-2 mb-8">
            <button
              type="button"
              role="tab"
              aria-selected={statsScope === "france"}
              onClick={() => setStatsScope("france")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                statsScope === "france"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("pourquoi.tabs.france")}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={statsScope === "europe"}
              onClick={() => setStatsScope("europe")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                statsScope === "europe"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("pourquoi.tabs.europe")}
            </button>
          </div>

          <div role="tabpanel" className={`grid sm:grid-cols-2 gap-6 mb-8${statsScope === "france" ? "" : " hidden"}`}>
            {franceStats.map((item, i) => (
              <div key={i} className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
          <div role="tabpanel" className={`grid sm:grid-cols-2 gap-6 mb-8${statsScope === "europe" ? "" : " hidden"}`}>
            {europeStats.map((item, i) => (
              <div key={i} className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="sources" className="border-none">
              <AccordionTrigger className="justify-center gap-2 text-xs text-muted-foreground hover:no-underline py-0">
                {t("pourquoi.sources.trigger")}
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground text-center italic pt-3">
                {t("pourquoi.sources.content")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 3 raisons */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            {t("pourquoi.reasons.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{t("pourquoi.reason1.title")}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("pourquoi.reason1.desc")}
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{t("pourquoi.reason2.title")}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("pourquoi.reason2.desc")}
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{t("pourquoi.reason3.title")}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("pourquoi.reason3.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approche Keprea */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            {t("pourquoi.approach.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Bug, titleKey: "pourquoi.approach1.title", descKey: "pourquoi.approach1.desc" },
              { icon: FlaskConical, titleKey: "pourquoi.approach2.title", descKey: "pourquoi.approach2.desc" },
              { icon: Sprout, titleKey: "pourquoi.approach3.title", descKey: "pourquoi.approach3.desc" },
              { icon: Award, titleKey: "pourquoi.approach4.title", descKey: "pourquoi.approach4.desc" },
              { icon: Tractor, titleKey: "pourquoi.approach5.title", descKey: "pourquoi.approach5.desc" },
            ].map((item, i) => (
              <div key={i} className={`flex gap-6${i === 4 ? " md:col-span-2" : ""}`}>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            {t("pourquoi.faq.title")}
          </h2>
          <div className="bg-background rounded-xl border border-border divide-y divide-border px-6">
            <Accordion type="single" collapsible>
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-none">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <GradientCTA
        title={t("pourquoi.cta.title")}
        description={t("pourquoi.cta.desc")}
        primary={{ label: t("innovationpage.cta.primary"), to: "/solutions" }}
        secondary={{ label: t("contactcta.primary"), to: "/contact" }}
      />
    </main>

    <Footer />
  </div>
  );
};

export default PourquoiBiocontrole;
