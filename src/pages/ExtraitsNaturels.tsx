import { Head } from "vite-react-ssg";
import { ArrowLeft, Leaf, FlaskConical, Bug, CheckCircle2 } from "lucide-react";
import plantDropletsBg from "@/assets/plant-droplets-bg.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ExtraitsNaturels = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>Biopesticides Naturels Keprea | Extraits d'Insectes</title>
        <meta name="description" content="Biopesticides à base d'extraits d'insectes Keprea : molécules bioactives naturelles pour protéger vos cultures. Homologués agriculture biologique, zéro résidu chimique." />
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">Pourquoi choisir nos biopesticides ?</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                { title: t('substances.benefit1.title'), desc: t('substances.benefit1.desc') },
                { title: t('substances.benefit2.title'), desc: t('substances.benefit2.desc') },
                { title: t('substances.benefit3.title'), desc: t('substances.benefit3.desc') },
                { title: t('substances.benefit4.title'), desc: t('substances.benefit4.desc') },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white/50 p-6 rounded-lg">
                  <h3 className="font-semibold text-primary text-lg mb-2">{title}</h3>
                  <p className="text-base text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
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
                  <Bug className="w-8 h-8 text-primary" />
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">Cultures cibles</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Nos biopesticides à base d'extraits d'insectes couvrent une large gamme de cultures,
              en agriculture biologique comme conventionnelle.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "Céréales — blé, orge, triticale, seigle",
                "Oléagineux — colza, tournesol, soja",
                "Maïs — grandes cultures",
                "Maraîchage — tomate, poivron, laitue, cucurbitacées",
                "Viticulture — ravageurs foliaires et maladies cryptogamiques",
                "Arboriculture fruitière — pommier, poirier, cerisier",
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
                { step: 1, title: "Préparation de la bouillie", desc: "Diluer le produit selon le dosage de la fiche technique. Agiter jusqu'à dissolution complète dans le volume d'eau recommandé." },
                { step: 2, title: "Conditions d'application", desc: "Pulvérisation foliaire de préférence aux heures fraîches (avant 10h ou après 18h). Éviter les jours de vent fort (> 3 m/s) et de chaleur excessive (> 28°C)." },
                { step: 3, title: "Couverture foliaire", desc: "Traiter de manière homogène, en insistant sur la face inférieure des feuilles pour les insectes suceurs et tétranyques." },
                { step: 4, title: "Fréquence de traitement", desc: "1 application tous les 7 à 14 jours selon la pression parasitaire. Ajuster selon l'évolution des populations cibles." },
                { step: 5, title: "Précautions", desc: "Ne pas appliquer par temps de pluie ou lorsqu'une pluie est prévue dans les 4 heures suivant le traitement." },
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
                  q: "Les biopesticides Keprea laissent-ils des résidus sur les cultures ?",
                  a: "Nos biopesticides à base d'extraits d'insectes se dégradent rapidement par les UV et l'humidité. Ils ne laissent pas de résidus chimiques de synthèse, ce qui les rend compatibles avec les exigences des filières biologiques et premium."
                },
                {
                  q: "Y a-t-il un délai avant récolte (DAR) à respecter ?",
                  a: "Le délai avant récolte dépend du produit et de la culture. Consultez la fiche technique de chaque produit ou contactez notre équipe technique pour les informations réglementaires précises."
                },
                {
                  q: "Nos biopesticides sont-ils compatibles avec les lâchers d'auxiliaires ?",
                  a: "Oui, nos biopesticides sont formulés pour être compatibles avec le biocontrôle vivant. Utilisés en programme intégré, ils se complètent pour une protection optimale de vos cultures."
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

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Protégez vos cultures naturellement</h2>
            <p className="text-lg opacity-90 mb-8">
              Contactez notre équipe pour un conseil personnalisé sur nos biopesticides et la constitution d'un programme de protection intégré.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">Demander un conseil</Button>
              </Link>
              <Link to="/pourquoi-le-biocontrole">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
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

export default ExtraitsNaturels;
