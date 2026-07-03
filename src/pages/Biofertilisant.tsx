import { Head } from "vite-react-ssg";
import { ArrowLeft, Wheat, Droplets, Leaf, Shield, CheckCircle2 } from "lucide-react";
import logoAb from "@/assets/logo-ab.png";
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

const faqItems = [
  {
    q: "Fertea432 peut-il remplacer les engrais minéraux ?",
    a: "Fertea432 enrichit la matière organique du sol et améliore sa structure. Il peut remplacer un apport d'engrais minéral, en particulier en agriculture biologique où il constitue la base de la fertilisation, ou l'accompagner en conventionnel pour réduire les doses d'engrais minéraux de synthèse et améliorer durablement la structure du sol. Il améliore par ailleurs la solubilisation du phosphore déjà présent dans le sol, le rendant plus disponible pour la plante."
  },
  {
    q: "Puis-je épandre Fertea432 en contact direct avec les semences ?",
    a: "Oui, sans risque. Fertea432 est un biofertilisant à libération lente : il ne contient pas d'azote minéral concentré susceptible de brûler les racines ou les semences. Son application est sécurisée même en contact direct."
  },
  {
    q: "Comment Fertea432 améliore-t-il la structure du sol ?",
    a: "En pratique : votre sol retient mieux l'eau, les racines se développent plus facilement et le travail du sol devient progressivement moins énergivore. Avec 85% de matière organique, Fertea432 stimule l'activité de la faune du sol (vers de terre, bactéries, champignons mycorhiziens) et améliore la rétention en eau, la porosité et la capacité d'échange cationique (CEC) sur le long terme."
  },
  {
    q: "Quelle est la durée de conservation de Fertea432 avant épandage ?",
    a: "Stocké au sec, à l'abri de l'humidité et des rongeurs, dans son conditionnement d'origine (big-bag ou sac fermé), Fertea432 se conserve plusieurs mois sans perte significative de valeur agronomique. Éviter le stockage prolongé en extérieur sans protection contre les intempéries."
  },
  {
    q: "Fertea432 est-il adapté à tous les types de sol ?",
    a: "Fertea432 convient à la majorité des types de sol agricole français, y compris les sols pauvres en matière organique ou en cours de reconversion vers l'agriculture biologique."
  },
  {
    q: "Quelle différence entre Fertea432 et un compost classique ?",
    a: "Contrairement à un compost dont la composition varie selon les intrants et le processus de compostage, Fertea432 présente une composition standardisée et constante (85% de matière organique, NPK 4-3-2) grâce à une matière première homogène issue de l'élevage d'insectes contrôlé. C'est aussi un produit sec et inodore, facile à intégrer dans un épandeur ou à épandre à la main, sans les contraintes de manipulation d'un compost humide. Cette régularité facilite le calcul des doses et la planification de la fertilisation d'une campagne à l'autre."
  },
];

const Biofertilisant = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>Fertea432 : Biofertilisant Keprea | Fertilisation Organique NPK</title>
        <meta name="description" content="Fertea432, biofertilisant à base d'insectes Keprea : 4% P, 3% N, 2% K, 85% matière organique. Homologué agriculture biologique. Améliore la structure du sol." />
        <link rel="canonical" href="https://keprea.vercel.app/solutions/biofertilisant" />
        <meta property="og:url" content="https://keprea.vercel.app/solutions/biofertilisant" />
        <meta property="og:title" content="Fertea432 : Biofertilisant Keprea | Fertilisation Organique NPK" />
        <meta name="twitter:title" content="Fertea432 : Biofertilisant Keprea | Fertilisation Organique NPK" />
        <meta property="og:description" content="Fertea432, biofertilisant à base d'insectes Keprea : 4% P, 3% N, 2% K, 85% matière organique. Homologué agriculture biologique. Améliore la structure du sol." />
        <meta name="twitter:description" content="Fertea432, biofertilisant à base d'insectes Keprea : 4% P, 3% N, 2% K, 85% matière organique. Homologué agriculture biologique. Améliore la structure du sol." />
        <script type="application/ld+json">{breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "Biofertilisant", path: "/solutions/biofertilisant" },
        ])}</script>
        <script type="application/ld+json">{faqJsonLd(faqItems.map(({ q, a }) => ({ question: q, answer: a })))}</script>
        <script type="application/ld+json">{serviceJsonLd({
          name: "Fertea432 : biofertilisant organique",
          description: "Biofertilisant organique à libération lente (85% matière organique, NPK 4-3-2) à base d'insectes, pour l'amélioration de la fertilité et de la structure du sol.",
          path: "/solutions/biofertilisant",
          serviceType: "Fertilisation organique",
        })}</script>
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
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-primary mb-2">Composition certifiée Fertea432</h2>
            <p className="text-sm text-muted-foreground mb-8">
              Résultats issus d'une étude scientifique publiée dans Nature :{" "}
              <a
                href="https://www.nature.com/articles/s41598-025-87075-8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:opacity-80"
              >
                consulter la publication
              </a>
              .
            </p>

            {/* Stat principale : matière organique */}
            <div className="bg-primary text-white rounded-2xl p-8 mb-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="text-center sm:text-left">
                <div className="text-7xl font-bold leading-none mb-2">85%</div>
                <div className="text-xl font-semibold opacity-90">{t('biofertilisant.organic')}</div>
                <p className="opacity-75 mt-2 max-w-sm">Libération lente, enrichissement progressif du sol sur plusieurs années. Aucun risque de brûlure racinaire, même en cas d'application proche du semis ou de la plantation.</p>
              </div>
              <div className="sm:ml-auto text-sm opacity-80 text-center sm:text-right">
                <p>Contrairement aux engrais minéraux concentrés</p>
                <p className="font-medium opacity-90">(ex. NPK 15-15-15)</p>
                <p className="mt-1">Fertea432 favorise les cycles naturels du sol</p>
              </div>
            </div>

            {/* Stats NPK secondaires */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "4%", label: t('biofertilisant.phosphore'), desc: t('biofertilisant.phosphore.desc') },
                { value: "3%", label: t('biofertilisant.azote'), desc: t('biofertilisant.azote.desc') },
                { value: "2%", label: t('biofertilisant.potassium'), desc: t('biofertilisant.potassium.desc') },
              ].map(({ value, label, desc }) => (
                <div key={label} className="bg-white p-6 rounded-xl text-center border border-border shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                  <h3 className="text-base font-semibold mb-1">{label}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
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
                "Grandes cultures : blé, maïs, colza, tournesol, betterave",
                "Légumineuses : soja, pois, féverole",
                "Maraîchage : tomate, courgette, poivron, laitue, aubergine, carotte, oignon",
                "Arboriculture : pommier, poirier, cerisier, vigne",
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
                { step: 1, title: "Dosage et conditionnement", desc: "2 à 3 tonnes par hectare selon la culture, l'analyse de sol et les objectifs de fertilité, ou une poignée par plant en application localisée. Disponible en big-bags de 500 kg et sacs de 25 kg, contactez-nous pour le prix à la tonne selon volume." },
                { step: 2, title: "Moment d'application", desc: "Avant le semis (idéalement 2 à 4 semaines avant, pour une pré-décomposition optimale) ou après le semis, lors de la plantation ou après la plantation." },
                { step: 3, title: "Incorporation au sol", desc: "Un griffage superficiel du sol après épandage optimise la vitesse d'absorption des nutriments. Recommandé mais pas indispensable : un simple épandage en surface reste efficace." },
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

        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-xl font-bold text-center text-foreground mb-6">Résultats mesurés sur le terrain</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">+20%</div>
                <div className="text-sm text-muted-foreground">sur la biomasse aérienne et racinaire du colza</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">+18%</div>
                <div className="text-sm text-muted-foreground">sur l'activité bactérienne du sol</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Données internes Keprea, mesurées selon des méthodes d'analyse de sol
              inspirées des référentiels Comifer. Résultats variables selon le type de sol et l'historique
              cultural, communiqués à titre indicatif.
            </p>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">Questions fréquentes</h2>
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
            <h2 className="text-2xl font-bold text-foreground mb-3 text-center">Retours terrain</h2>
            <p className="text-center text-muted-foreground mb-6 text-sm max-w-xl mx-auto">
              Vous utilisez Fertea432 ? Votre retour d'expérience aide d'autres agriculteurs à décider.
            </p>
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
              <Link to="/contact" className="inline-block text-sm font-semibold text-primary underline underline-offset-2 hover:opacity-80">
                Partager votre expérience avec Fertea432 →
              </Link>
            </div>
          </div>
        </section>

        <GradientCTA
          title={t('biofertilisant.cta.title')}
          description={t('biofertilisant.cta.desc')}
          primary={{ label: t('product.contact'), to: "/contact" }}
          secondary={{ label: "Notre processus de production", to: "/notre-production" }}
        />

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Complétez votre programme avec nos autres solutions</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/solutions/bioprotection" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-primary mb-2">Bioprotection vivante</h3>
                <p className="text-sm text-muted-foreground">Insectes prédateurs pour éliminer les ravageurs de vos cultures</p>
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
