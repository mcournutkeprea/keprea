import { Head } from "vite-react-ssg";
import { ArrowLeft, CheckCircle2, Leaf, Target, Recycle, BadgeCheck, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aphidImage from "@/assets/Pucerons.jpg";
import pyraleImage from "@/assets/Chenille ravageuse.webp";
import cochenillesImage from "@/assets/Cochenille.webp";
import aleurodeImage from "@/assets/aleurode.jpg";
import logoAb from "@/assets/logo-ab.png";
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
    q: "En combien de temps les auxiliaires réduisent-ils les populations ravageurs ?",
    a: "Les auxiliaires commencent à agir en 48 à 72h. La réduction visible des populations ravageurs s'observe généralement entre 7 et 21 jours selon la pression initiale et les conditions climatiques."
  },
  {
    q: "Le biocontrôle vivant est-il efficace en agriculture conventionnelle ?",
    a: "Oui. Le biocontrôle vivant s'intègre dans tout système de production, conventionnel ou biologique. Il permet souvent de réduire significativement les doses d'insecticides de synthèse, avec des résultats équivalents voire supérieurs."
  },
  {
    q: "Peut-on combiner lâchers d'auxiliaires et biopesticides Keprea ?",
    a: "Oui, nos produits sont conçus pour fonctionner en programme intégré. Nos biopesticides à base d'extraits d'insectes et les auxiliaires vivants sont complémentaires. Notre équipe technique vous accompagne pour définir un programme cohérent."
  },
  {
    q: "Que faire si les conditions météo ne permettent pas de lâcher à la date prévue ?",
    a: "Un report de 24 à 48h n'affecte généralement pas l'efficacité du programme, à condition de conserver les auxiliaires dans de bonnes conditions (10°C, obscurité). Au-delà, contactez notre équipe technique pour ajuster le calendrier de lâcher en fonction de la météo et du stade de la culture."
  },
  {
    q: "Faut-il renouveler les lâchers d'auxiliaires chaque saison ?",
    a: "Oui, dans la grande majorité des cas. Les auxiliaires introduits ne s'établissent pas de façon pérenne sur la parcelle une fois le ravageur cible éliminé, faute de proie disponible, leur population décline naturellement. Un programme de lâchers est donc à reconduire à chaque nouvelle saison culturale, en ajustant les quantités selon la pression observée l'année précédente."
  },
];

const BiocontroleVivant = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>Bioprotection Vivante Keprea | Auxiliaires contre Ravageurs</title>
        <meta name="description" content="Biocontrôle vivant Keprea : auxiliaires entomophages pour lutter contre pucerons, pyrales, cochenilles et aleurodes. Solutions naturelles homologuées AB." />
        <link rel="canonical" href="https://keprea.vercel.app/solutions/bioprotection" />
        <meta property="og:url" content="https://keprea.vercel.app/solutions/bioprotection" />
        <meta property="og:title" content="Bioprotection Vivante Keprea | Auxiliaires contre Ravageurs" />
        <meta name="twitter:title" content="Bioprotection Vivante Keprea | Auxiliaires contre Ravageurs" />
        <meta property="og:description" content="Biocontrôle vivant Keprea : auxiliaires entomophages pour lutter contre pucerons, pyrales, cochenilles et aleurodes. Solutions naturelles homologuées AB." />
        <meta name="twitter:description" content="Biocontrôle vivant Keprea : auxiliaires entomophages pour lutter contre pucerons, pyrales, cochenilles et aleurodes. Solutions naturelles homologuées AB." />
        <script type="application/ld+json">{breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "Bioprotection", path: "/solutions/bioprotection" },
        ])}</script>
        <script type="application/ld+json">{faqJsonLd(faqItems.map(({ q, a }) => ({ question: q, answer: a })))}</script>
        <script type="application/ld+json">{serviceJsonLd({
          name: "Bioprotection vivante : lâchers d'auxiliaires",
          description: "Fourniture d'insectes auxiliaires vivants pour la lutte biologique contre les ravageurs des cultures.",
          path: "/solutions/bioprotection",
          serviceType: "Biocontrôle agricole",
        })}</script>
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
            <div className="max-w-2xl mx-auto mb-10 text-center">
              <p className="text-base text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Le principe :</strong> nous élevons des insectes prédateurs naturels que vous libérez sur vos parcelles. Ils chassent et éliminent les ravageurs cibles : sans intervention chimique, sans résidu, sans développement de résistance.
              </p>
            </div>
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
                  <p className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-3">Ravageur cible</p>
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/20">
                      <img src={img} alt={alt} className="w-full h-full object-cover" />
                    </div>
                    <span
                      className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary border-2 border-background shadow-sm"
                      title="Ciblé par nos solutions de bioprotection"
                      aria-hidden="true"
                    >
                      <ShieldCheck className="w-4 h-4 text-primary-foreground" />
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-1">{title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    <ShieldCheck className="w-3 h-3" aria-hidden="true" />
                    Neutralisé par Keprea
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <AdvantageGrid
              title={t('biocontrole.advantages.title')}
              advantages={[
                { icon: Leaf, title: t('biocontrole.adv1.title'), description: t('biocontrole.adv1.desc') },
                { icon: Target, title: t('biocontrole.adv2.title'), description: t('biocontrole.adv2.desc') },
                {
                  icon: BadgeCheck,
                  title: t('biocontrole.adv4.title'),
                  description: t('biocontrole.adv4.desc'),
                  badge: (
                    <img
                      src={logoAb}
                      alt="Logo Agriculture Biologique (AB)"
                      className="h-6 w-6 flex-shrink-0 object-contain"
                    />
                  ),
                },
                { icon: Recycle, title: t('biocontrole.adv3.title'), description: t('biocontrole.adv3.desc') },
              ]}
            />
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
                "Maïs : lutte contre la pyrale (Ostrinia nubilalis)",
                "Grandes cultures : betterave, blé, colza (pucerons)",
                "Maraîchage sous serre : tomate, poivron, concombre",
                "Maraîchage plein champ : laitue, courgette, aubergine, carotte, oignon, poivrons",
                "Arboriculture fruitière : pomme, poire, cerise, kiwi",
                "Viticulture : tordeuse de la vigne (ver de la grappe), vecteur de la flavescence dorée",
              ].map((culture) => (
                <div key={culture} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">{culture}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-xl font-bold text-center text-foreground mb-6">Résultats mesurés sur le terrain</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">70–90%</div>
                <div className="text-sm text-muted-foreground">de réduction des ravageurs en 14 jours</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">48–72h</div>
                <div className="text-sm text-muted-foreground">délai d'action après le lâcher</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">0 résidu</div>
                <div className="text-sm text-muted-foreground">chimique de synthèse</div>
                <div className="text-xs text-muted-foreground mt-1">Éligible AB, vérifier avec votre certificateur</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Données internes Keprea, essais en parcelles pilotes 2023–2024. Résultats variables selon
              l'espèce ravageur, la pression parasitaire et les conditions climatiques, communiqués à
              titre indicatif, hors valeur d'engagement contractuel.
            </p>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">Mode d'emploi</h2>
            <p className="text-muted-foreground text-center mb-4 max-w-2xl mx-auto">
              Un <strong className="text-foreground">lâcher</strong> consiste à ouvrir des sachets ou boîtes contenant des auxiliaires vivants et à les déposer sur les plantes ou dans les rangs. Voici le déroulé type.
            </p>
            <div className="bg-primary/5 border border-primary/10 rounded-lg px-5 py-4 mb-4 max-w-2xl mx-auto text-sm text-muted-foreground">
              <strong className="text-foreground">Format de livraison :</strong> sachets ou tubes de 250 à 1 000 individus selon l'espèce. Conservation : 24–48h à 10°C, à l'abri de la lumière directe. Application le jour de réception recommandée pour préserver le taux de survie des auxiliaires au lâcher.
            </div>
            <p className="text-sm text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              <strong className="text-foreground">En résumé :</strong> diagnostiquer → planifier → lâcher tôt le matin → éviter les insecticides 48h avant et après → observer à J+7.
            </p>
            <div className="space-y-6">
              {[
                { step: 1, title: "Diagnostic ravageur", desc: "Identifier l'espèce ravageur, évaluer la pression parasitaire et choisir l'auxiliaire adapté à votre situation culturale." },
                { step: 2, title: "Planification des lâchers", desc: "Lâchers préventifs en début de saison dès apparition des premiers foyers, ou curatifs dès observation du ravageur cible." },
                { step: 3, title: "Méthodes de distribution", desc: "Lâcher manuel (sachets ou boîtes), ou à l'aide d'un pulvérisateur ou d'un atomiseur adapté pour les formulations sur support inerte. L'application par drone est également une piste suivie par la filière." },
                { step: 4, title: "Conditions d'application", desc: "Libérer les auxiliaires aux heures fraîches (matin ou soir), répartir de manière homogène sur la parcelle." },
                { step: 5, title: "Précautions phytosanitaires", desc: "Éviter tout insecticide à large spectre dans les 48h avant et après le lâcher pour protéger les auxiliaires." },
                { step: 6, title: "Suivi et évaluation", desc: "Observer l'évolution des populations ravageurs 7 à 14 jours après le lâcher. Un suivi régulier permet d'ajuster le programme." },
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
              Vous utilisez nos auxiliaires ? Votre retour d'expérience aide d'autres agriculteurs à décider.
            </p>
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
              <Link to="/contact" className="inline-block text-sm font-semibold text-primary underline underline-offset-2 hover:opacity-80">
                Partager votre expérience avec nos auxiliaires →
              </Link>
            </div>
          </div>
        </section>

        <GradientCTA
          title="Prêt à protéger vos cultures naturellement ?"
          description="Contactez notre équipe technique pour un conseil personnalisé et un programme de bioprotection adapté à votre exploitation."
          primary={{ label: "Demander un conseil", to: "/contact" }}
          secondary={{ label: "Pourquoi le biocontrôle ?", to: "/pourquoi-le-biocontrole" }}
        />

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
