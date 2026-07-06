import { Head } from "vite-react-ssg";
import { ArrowLeft, ArrowRight, Leaf, FlaskConical, Microscope, CheckCircle2, ShieldCheck, ShieldPlus, Recycle, Settings2 } from "lucide-react";
import plantDropletsBg from "@/assets/plant-droplets-bg.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdvantageGrid from "@/components/AdvantageGrid";
import GradientCTA from "@/components/GradientCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { faqJsonLd, serviceJsonLd } from "@/lib/schema";

const faqKeys = [
  { questionKey: "extraits.faq1.q", answerKey: "extraits.faq1.a" },
  { questionKey: "extraits.faq2.q", answerKey: "extraits.faq2.a" },
  { questionKey: "extraits.faq3.q", answerKey: "extraits.faq3.a" },
  { questionKey: "extraits.faq4.q", answerKey: "extraits.faq4.a" },
  { questionKey: "extraits.faq5.q", answerKey: "extraits.faq5.a" },
  { questionKey: "extraits.faq6.q", answerKey: "extraits.faq6.a" },
];

const cropKeys = [
  "extraits.crop1", "extraits.crop2", "extraits.crop3",
  "extraits.crop4", "extraits.crop5", "extraits.crop6",
];

const stepKeys = [
  { titleKey: "extraits.step1.title", descKey: "extraits.step1.desc" },
  { titleKey: "extraits.step2.title", descKey: "extraits.step2.desc" },
  { titleKey: "extraits.step3.title", descKey: "extraits.step3.desc" },
  { titleKey: "extraits.step4.title", descKey: "extraits.step4.desc" },
  { titleKey: "extraits.step5.title", descKey: "extraits.step5.desc" },
];

const ExtraitsNaturels = () => {
  const { t } = useLanguage();
  const faqItems = faqKeys.map(({ questionKey, answerKey }) => ({
    q: t(questionKey),
    a: t(answerKey),
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>Biopesticides Naturels Keprea | Extraits d'Insectes</title>
        <meta name="description" content="Biopesticides à base d'extraits d'insectes Keprea : molécules bioactives naturelles pour protéger vos cultures. Compatibles agriculture biologique, zéro résidu chimique, en cours d'homologation." />
        <link rel="canonical" href="https://keprea.vercel.app/solutions/biopesticides" />
        <meta property="og:url" content="https://keprea.vercel.app/solutions/biopesticides" />
        <meta property="og:title" content="Biopesticides Naturels Keprea | Extraits d'Insectes" />
        <meta name="twitter:title" content="Biopesticides Naturels Keprea | Extraits d'Insectes" />
        <meta property="og:description" content="Biopesticides à base d'extraits d'insectes Keprea : molécules bioactives naturelles pour protéger vos cultures. Compatibles agriculture biologique, zéro résidu chimique, en cours d'homologation." />
        <meta name="twitter:description" content="Biopesticides à base d'extraits d'insectes Keprea : molécules bioactives naturelles pour protéger vos cultures. Compatibles agriculture biologique, zéro résidu chimique, en cours d'homologation." />
        <script type="application/ld+json">{breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "Biopesticides", path: "/solutions/biopesticides" },
        ])}</script>
        <script type="application/ld+json">{faqJsonLd(faqItems.map(({ q, a }) => ({ question: q, answer: a })))}</script>
        <script type="application/ld+json">{serviceJsonLd({
          name: "Biopesticides Keprea : extraits d'insectes",
          description: "Protection foliaire des cultures à base d'extraits bioactifs d'insectes (peptides antimicrobiens, chitine), pour lutte contre les ravageurs sans résidu chimique de synthèse.",
          path: "/solutions/biopesticides",
          serviceType: "Biocontrôle agricole",
        })}</script>
      </Head>
      <Navigation />
      <main className="flex-1 pt-20">
        <header className="relative shadow-sm min-h-[280px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url(${plantDropletsBg})`
          }}></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <Link to="/solutions">
              <Button variant="ghost" className="mb-4 text-white border-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('product.back')}
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white">{t('substances.title')}</h1>
            <p className="text-xl text-white/90 mt-2">{t('substances.subtitle')}</p>
          </div>
        </header>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">{t("extraits.heading")}</h2>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">{t("extraits.subheading")}</p>
            </div>
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mb-6 max-w-2xl mx-auto">
              <p className="text-base text-foreground leading-relaxed">
                <strong>{t("extraits.howItWorks.title")}</strong> {t("extraits.howItWorks.desc")}
              </p>
            </div>
            <div className="text-center mb-10">
              <Button asChild variant="outline">
                <Link to="/ressources/fiches-techniques/biopesticides">
                  {t('techsheet.cta.viewSheet')}
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
            </div>
            <AdvantageGrid
              title={t("extraits.whyChoose.title")}
              advantages={[
                { icon: ShieldCheck, title: t('substances.benefit1.title'), description: t('substances.benefit1.desc') },
                { icon: ShieldPlus, title: t('substances.benefit2.title'), description: t('substances.benefit2.desc') },
                { icon: Recycle, title: t('substances.benefit3.title'), description: t('substances.benefit3.desc') },
                { icon: Settings2, title: t('substances.benefit4.title'), description: t('substances.benefit4.desc') },
              ]}
            />
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              {t('substances.tech.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('substances.tech.step1.title')}</h3>
                <p className="text-base text-muted-foreground">{t('substances.tech.step1.desc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('substances.tech.step2.title')}</h3>
                <p className="text-base text-muted-foreground">{t('substances.tech.step2.desc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('substances.tech.step3.title')}</h3>
                <p className="text-base text-muted-foreground">{t('substances.tech.step3.desc')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">{t("extraits.crops.title")}</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              {t("extraits.crops.subtitle")}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {cropKeys.map((key) => (
                <div key={key} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">{t("extraits.howto.title")}</h2>
            <div className="space-y-6">
              {stepKeys.map(({ titleKey, descKey }, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    {i + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-foreground mb-1">{t(titleKey)}</h3>
                    <p className="text-muted-foreground">{t(descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-xl font-bold text-center text-foreground mb-6">{t("extraits.results.title")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">80–95%</div>
                <div className="text-sm text-muted-foreground">{t("extraits.results.stat1.label")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">7–14j</div>
                <div className="text-sm text-muted-foreground">{t("extraits.results.stat2.label")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">{t("extraits.results.stat3.value")}</div>
                <div className="text-sm text-muted-foreground">{t("extraits.results.stat3.label")}</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              {t("extraits.results.disclaimer")}
            </p>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">{t("extraits.faq.title")}</h2>
            <div className="bg-primary/5 rounded-xl border border-primary/10 divide-y divide-primary/10 px-6">
              <Accordion type="single" collapsible>
                {faqItems.map(({ q, a }, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-none">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                      {q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-3 text-center">{t("extraits.feedback.title")}</h2>
            <p className="text-center text-muted-foreground mb-6 text-sm max-w-xl mx-auto">
              {t("extraits.feedback.subtitle")}
            </p>
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
              <Link to="/contact" className="inline-block text-sm font-semibold text-primary underline underline-offset-2 hover:opacity-80">
                {t("extraits.feedback.link")}
              </Link>
            </div>
          </div>
        </section>

        <GradientCTA
          title={t("extraits.cta.title")}
          description={t("extraits.cta.desc")}
          primary={{ label: t("bv.cta.primary"), to: "/contact" }}
          secondary={{ label: t("innovation.link"), to: "/pourquoi-le-biocontrole" }}
        />

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">{t("extraits.crosssell.title")}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/solutions/bioprotection" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-primary mb-2">{t("extraits.crosssell.bioprotection.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("extraits.crosssell.bioprotection.desc")}</p>
              </Link>
              <Link to="/solutions/boosters" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-primary mb-2">{t("bv.crosssell.boosters.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("bv.crosssell.boosters.desc")}</p>
              </Link>
              <Link to="/solutions/biofertilisant" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-primary mb-2">{t("bv.crosssell.biofertilisant.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("bv.crosssell.biofertilisant.desc")}</p>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ExtraitsNaturels;
