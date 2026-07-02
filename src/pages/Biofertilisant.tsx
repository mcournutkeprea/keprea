import { Head } from "vite-react-ssg";
import { ArrowLeft, Wheat, Droplets, Leaf, Shield, CheckCircle2 } from "lucide-react";
import logoAb from "@/assets/logo-ab.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdvantageGrid from "@/components/AdvantageGrid";

const Biofertilisant = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>Fertea432 — Biofertilisant Keprea | Fertilisation Organique NPK</title>
        <meta name="description" content="Fertea432, biofertilisant à base d'insectes Keprea : 4% P, 3% N, 2% K, 85% matière organique. Homologué agriculture biologique. Améliore la structure du sol." />
      </Head>
      <Navigation />
      <main className="flex-1 pt-20">
        <header className="relative shadow-sm min-h-[280px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url('/lovable-uploads/514c70d9-ef8f-4f9f-8df3-f38124715fa6.png')`
          }}></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <Link to="/solutions">
              <Button variant="ghost" className="mb-4 text-white border-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('product.back')}
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white">{t('biofertilisant.title')}</h1>
            <p className="text-xl text-white/90 mt-2">{t('biofertilisant.subtitle')}</p>
          </div>
          <img src={logoAb} alt="Agriculture Biologique" className="absolute bottom-4 right-4 w-16 h-16 md:w-20 md:h-20 object-contain z-10" />
        </header>

        <section className="pt-10 pb-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-8">Fertea432</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { value: "4%", label: t('biofertilisant.phosphore'), desc: t('biofertilisant.phosphore.desc') },
                { value: "3%", label: t('biofertilisant.azote'), desc: t('biofertilisant.azote.desc') },
                { value: "2%", label: t('biofertilisant.potassium'), desc: t('biofertilisant.potassium.desc') },
                { value: "85%", label: t('biofertilisant.organic'), desc: t('biofertilisant.organic.desc') },
              ].map(({ value, label, desc }) => (
                <div key={label} className="bg-white p-8 rounded-2xl text-center shadow-lg">
                  <div className="text-4xl font-bold text-primary mb-4">{value}</div>
                  <h3 className="text-xl font-bold mb-2">{label}</h3>
                  <p className="text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <AdvantageGrid
              title={t('biofertilisant.advantages')}
              advantages={[
                { icon: Leaf, title: t('biofertilisant.adv1.title'), description: t('biofertilisant.adv1.desc') },
                { icon: Droplets, title: t('biofertilisant.adv2.title'), description: t('biofertilisant.adv2.desc') },
                { icon: Shield, title: t('biofertilisant.adv3.title'), description: t('biofertilisant.adv3.desc') },
                { icon: Wheat, title: t('biofertilisant.adv4.title'), description: t('biofertilisant.adv4.desc') },
              ]}
            />
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">Cultures cibles</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Fertea432 s'applique sur l'ensemble des grandes cultures et productions spécialisées,
              en agriculture biologique comme conventionnelle.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "Grandes cultures — blé, maïs, colza, tournesol, betterave",
                "Légumineuses — soja, pois, féverole",
                "Maraîchage — tomate, courgette, poivron, laitue",
                "Arboriculture — pommier, poirier, cerisier, vigne",
                "Prairies et cultures fourragères",
                "Toutes cultures en agriculture biologique (AB)",
              ].map((culture) => (
                <div key={culture} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">{culture}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">Mode d'emploi</h2>
            <div className="space-y-6">
              {[
                { step: 1, title: "Dosage recommandé", desc: "200 à 500 kg/ha selon la culture, l'analyse de sol et les objectifs de fertilité. Contactez notre équipe pour un conseil personnalisé." },
                { step: 2, title: "Moment d'application", desc: "En engrais de fond, 2 à 4 semaines avant le semis ou la plantation. Permet une pré-décomposition optimale avant le développement racinaire." },
                { step: 3, title: "Incorporation au sol", desc: "Mélanger au sol lors du travail en profondeur (15 à 20 cm). Un labour peu profond suffit pour une bonne distribution." },
                { step: 4, title: "Compatibilité", desc: "Compatible avec d'autres amendements organiques. Peut compléter un programme de fertilisation conventionnel ou biologique." },
                { step: 5, title: "Fréquence d'application", desc: "Une application par an maintient et améliore la fertilité du sol. Le taux de matière organique augmente progressivement sur plusieurs années." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-5">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    {step}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                    <p className="text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">Questions fréquentes</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Fertea432 peut-il remplacer les engrais minéraux ?",
                  a: "Fertea432 enrichit la matière organique du sol et améliore sa structure. En agriculture biologique, il constitue la base de la fertilisation. En conventionnel, il s'intègre en complément pour réduire les doses d'engrais minéraux de synthèse et améliorer durablement la structure du sol."
                },
                {
                  q: "Y a-t-il un risque de brûlure des racines lors de l'application ?",
                  a: "Non. Fertea432 est un biofertilisant à libération lente, sans risque de brûlure racinaire liée à une concentration excessive d'azote minéral. Son application est sécurisée même au contact direct des semences."
                },
                {
                  q: "Comment Fertea432 améliore-t-il la structure du sol ?",
                  a: "Avec 85% de matière organique, Fertea432 stimule l'activité de la faune du sol (vers de terre, bactéries, champignons mycorhiziens) et améliore la rétention en eau, la porosité et la capacité d'échange cationique (CEC) du sol sur le long terme."
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                  <h3 className="font-semibold text-foreground mb-3">{q}</h3>
                  <p className="text-muted-foreground">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-white">
          <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">{t('biofertilisant.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90">{t('biofertilisant.cta.desc')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">{t('product.contact')}</Button>
              </Link>
              <Link to="/pourquoi-le-biocontrole">
                <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/20">
                  Pourquoi le biocontrôle ?
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Complétez votre programme avec nos autres solutions</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/solutions/bioprotection" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-primary mb-2">Bioprotection vivante</h3>
                <p className="text-sm text-muted-foreground">Auxiliaires entomophages pour lutter contre les ravageurs</p>
              </Link>
              <Link to="/solutions/biopesticides" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-primary mb-2">Biopesticides</h3>
                <p className="text-sm text-muted-foreground">Extraits d'insectes pour une protection foliaire naturelle</p>
              </Link>
              <Link to="/solutions/boosters" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-primary mb-2">Boosters de croissance</h3>
                <p className="text-sm text-muted-foreground">Biostimulants pour renforcer la vigueur et la résistance des cultures</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Biofertilisant;
