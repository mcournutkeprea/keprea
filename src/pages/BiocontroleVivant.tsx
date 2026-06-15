import { Head } from "vite-react-ssg";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aphidImage from "@/assets/aphid.jpg";
import pyraleImage from "@/assets/pyrale.jpg";
import cochenillesImage from "@/assets/cochenilles.jpg";
import aleurodeImage from "@/assets/aleurode.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BiocontroleVivant = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>Bioprotection Vivante Keprea | Auxiliaires contre Ravageurs</title>
        <meta name="description" content="Biocontrôle vivant Keprea : auxiliaires entomophages pour lutter contre pucerons, pyrales, cochenilles et aleurodes. Solutions naturelles homologuées AB." />
      </Head>
      <Navigation />
      <main className="flex-1 pt-20">
        <header className="relative shadow-sm min-h-[280px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url('/lovable-uploads/bf0fefed-2323-4a06-a4f9-b4681de73dfe.png')`
          }}></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <Link to="/solutions">
              <Button variant="ghost" className="mb-4 text-white border-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('product.back')}
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white">{t('biocontrole.title')}</h1>
            <p className="text-xl text-white/90 mt-2">{t('biocontrole.subtitle')}</p>
          </div>
        </header>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              {t('biocontrole.pests.title')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { img: aphidImage, alt: t('biocontrole.pest1.title'), title: t('biocontrole.pest1.title'), desc: t('biocontrole.pest1.desc') },
                { img: pyraleImage, alt: t('biocontrole.pest2.title'), title: t('biocontrole.pest2.title'), desc: t('biocontrole.pest2.desc') },
                { img: cochenillesImage, alt: t('biocontrole.pest3.title'), title: t('biocontrole.pest3.title'), desc: t('biocontrole.pest3.desc') },
                { img: aleurodeImage, alt: t('biocontrole.pest4.title'), title: t('biocontrole.pest4.title'), desc: t('biocontrole.pest4.desc') },
              ].map(({ img, alt, title, desc }) => (
                <div key={title} className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-2xl text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20">
                    <img src={img} alt={alt} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-3">{title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              {t('biocontrole.advantages.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: t('biocontrole.adv1.title'), desc: t('biocontrole.adv1.desc') },
                { title: t('biocontrole.adv2.title'), desc: t('biocontrole.adv2.desc') },
                { title: t('biocontrole.adv3.title'), desc: t('biocontrole.adv3.desc') },
                { title: t('biocontrole.adv4.title'), desc: t('biocontrole.adv4.desc') },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-primary mb-2">{title}</h3>
                  <p className="text-base text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">Cultures cibles</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Nos auxiliaires entomophages s'adaptent aux principales cultures agricoles françaises,
              en plein champ comme sous serre.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "Maïs — lutte contre la pyrale (Ostrinia nubilalis)",
                "Grandes cultures — betterave, blé, colza (pucerons)",
                "Maraîchage sous serre — tomate, poivron, concombre",
                "Maraîchage plein champ — laitue, courgette",
                "Arboriculture fruitière — pomme, poire, cerise",
                "Viticulture — tordeuses et cicadelles",
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
                { step: 1, title: "Diagnostic ravageur", desc: "Identifier l'espèce ravageur, évaluer la pression parasitaire et choisir l'auxiliaire adapté à votre situation culturale." },
                { step: 2, title: "Planification des lâchers", desc: "Lâchers préventifs en début de saison dès apparition des premiers foyers, ou curatifs dès observation du ravageur cible." },
                { step: 3, title: "Conditions d'application", desc: "Libérer les auxiliaires aux heures fraîches (matin ou soir), répartir de manière homogène sur la parcelle." },
                { step: 4, title: "Précautions phytosanitaires", desc: "Éviter tout insecticide à large spectre dans les 48h avant et après le lâcher pour protéger les auxiliaires." },
                { step: 5, title: "Suivi et évaluation", desc: "Observer l'évolution des populations ravageurs 7 à 14 jours après le lâcher. Un suivi régulier permet d'ajuster le programme." },
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
                  q: "En combien de temps les auxiliaires réduisent-ils les populations ravageurs ?",
                  a: "Les auxiliaires entomophages commencent à agir en 48 à 72h. La réduction visible des populations ravageurs s'observe généralement entre 7 et 21 jours selon la pression initiale et les conditions climatiques."
                },
                {
                  q: "Le biocontrôle vivant est-il efficace en agriculture conventionnelle ?",
                  a: "Oui. Le biocontrôle vivant s'intègre dans tout système de production, conventionnel ou biologique. Il permet souvent de réduire significativement les doses d'insecticides de synthèse, avec des résultats équivalents voire supérieurs."
                },
                {
                  q: "Peut-on combiner lâchers d'auxiliaires et biopesticides Keprea ?",
                  a: "Oui, nos produits sont conçus pour fonctionner en programme intégré. Biopesticides et auxiliaires vivants sont complémentaires. Notre équipe technique vous accompagne pour définir un programme cohérent."
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

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à protéger vos cultures naturellement ?</h2>
            <p className="text-lg opacity-90 mb-8">
              Contactez notre équipe technique pour un conseil personnalisé et un programme de bioprotection adapté à votre exploitation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">Demander un conseil</Button>
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
              <Link to="/solutions/biopesticides" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-primary mb-2">Biopesticides</h3>
                <p className="text-sm text-muted-foreground">Extraits d'insectes pour une protection foliaire complémentaire</p>
              </Link>
              <Link to="/solutions/boosters" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-primary mb-2">Boosters de croissance</h3>
                <p className="text-sm text-muted-foreground">Biostimulants pour renforcer la vigueur et la résistance des cultures</p>
              </Link>
              <Link to="/solutions/biofertilisant" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-primary mb-2">Biofertilisant</h3>
                <p className="text-sm text-muted-foreground">Fertea432 pour améliorer la fertilité et la structure du sol</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BiocontroleVivant;
