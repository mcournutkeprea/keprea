import { Head } from "vite-react-ssg";
import { ArrowLeft, CheckCircle2, TrendingUp, Leaf, Puzzle, LifeBuoy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdvantageGrid from "@/components/AdvantageGrid";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { faqJsonLd, serviceJsonLd } from "@/lib/schema";

const faqItems = [
  {
    q: "Les biostimulants Keprea sont-ils compatibles avec les engrais minéraux ?",
    a: "Oui, nos boosters sont formulés pour être compatibles avec la majorité des engrais et produits phytosanitaires. Un test de miscibilité est recommandé avant tout mélange en cuve. Notre équipe technique vous accompagne."
  },
  {
    q: "En combien de temps observe-t-on les effets des biostimulants ?",
    a: "Les premiers effets (meilleur enracinement, reprise de vigueur) sont observables en 10 à 21 jours. Les bénéfices sur rendement et résistance aux stress abiotiques (sécheresse, gel tardif) se mesurent en fin de cycle."
  },
  {
    q: "Boostea13 et Soilea110 sont-ils utilisables en agriculture biologique ?",
    a: "Nos biostimulants à base d'extraits d'insectes sont compatibles avec les principes de l'agriculture biologique. Vérifiez la conformité avec votre organisme certificateur avant utilisation."
  },
  {
    q: "Faut-il choisir entre Boostea13 et Soilea110 ou peut-on utiliser les deux ?",
    a: "Les deux produits ciblent des leviers différents (vigueur aérienne pour Boostea13, santé du sol pour Soilea110) et sont conçus pour être utilisés ensemble sur un même itinéraire technique. En cas de budget limité pour une première saison d'essai, privilégiez le produit correspondant à votre contrainte la plus limitante identifiée par diagnostic (foliaire ou racinaire)."
  },
];

const Boosters = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>Biostimulants Agricoles Keprea | Boostea13 & Soilea110</title>
        <meta name="description" content="Boostea13 et Soilea110 : biostimulants à base d'insectes Keprea pour stimuler la croissance et la résistance des cultures. Polypeptides, proline, acides aminés." />
        <link rel="canonical" href="https://keprea.vercel.app/solutions/boosters" />
        <meta property="og:url" content="https://keprea.vercel.app/solutions/boosters" />
        <meta property="og:title" content="Biostimulants Agricoles Keprea | Boostea13 & Soilea110" />
        <meta name="twitter:title" content="Biostimulants Agricoles Keprea | Boostea13 & Soilea110" />
        <meta property="og:description" content="Boostea13 et Soilea110 : biostimulants à base d'insectes Keprea pour stimuler la croissance et la résistance des cultures. Polypeptides, proline, acides aminés." />
        <meta name="twitter:description" content="Boostea13 et Soilea110 : biostimulants à base d'insectes Keprea pour stimuler la croissance et la résistance des cultures. Polypeptides, proline, acides aminés." />
        <script type="application/ld+json">{breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "Boosters", path: "/solutions/boosters" },
        ])}</script>
        <script type="application/ld+json">{faqJsonLd(faqItems.map(({ q, a }) => ({ question: q, answer: a })))}</script>
        <script type="application/ld+json">{serviceJsonLd({
          name: "Biostimulants Boostea13 et Soilea110",
          description: "Biostimulants agricoles à base d'extraits d'insectes (polypeptides, proline, acides aminés) pour la vigueur foliaire (Boostea13) et la santé du sol (Soilea110).",
          path: "/solutions/boosters",
          serviceType: "Biostimulant agricole",
        })}</script>
      </Head>
      <Navigation />
      <main className="flex-1 pt-20">
        <header className="relative shadow-sm min-h-[280px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url('/lovable-uploads/5a41caf6-fec0-40ca-984c-f9543cae5d7e.png')`
          }}></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <Link to="/solutions">
              <Button variant="ghost" className="mb-4 text-white border-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('product.back')}
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white">{t('boosters.title')}</h1>
            <p className="text-xl text-white/90 mt-2">{t('boosters.subtitle')}</p>
          </div>
        </header>

        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-3">Qu'est-ce qu'un biostimulant agricole ?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Un biostimulant agricole est une substance ou un microorganisme qui stimule les processus naturels de la plante : nutrition, développement racinaire, tolérance aux stress abiotiques (sécheresse, gel, salinité), sans agir directement comme un engrais ou un produit phytosanitaire. Boostea13 et Soilea110 sont les deux biostimulants de Keprea, formulés à partir d'extraits d'insectes (polypeptides, proline, acides aminés) : le premier en application foliaire pour la vigueur aérienne, le second au sol pour la santé racinaire et microbienne.
            </p>
          </div>
        </section>

        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-center text-foreground mb-6">Quel produit choisir ?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <h3 className="font-bold text-primary mb-2">Boostea13 : Application foliaire</h3>
                <p className="text-sm text-muted-foreground mb-3">Votre priorité est la <strong className="text-foreground">vigueur aérienne</strong> : manque de résistance à la sécheresse, stress post-gel, assimilation nutritive insuffisante.</p>
                <p className="text-sm text-muted-foreground">→ Pulvérisation foliaire aux stades clés (tallage, floraison…)</p>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <h3 className="font-bold text-primary mb-2">Soilea110 : Application au sol</h3>
                <p className="text-sm text-muted-foreground mb-3">Votre priorité est la <strong className="text-foreground">santé du sol</strong> : structure dégradée, faible activité microbienne, résistance aux maladies racinaires.</p>
                <p className="text-sm text-muted-foreground">→ Incorporation avant semis ou plantation</p>
              </div>
            </div>
            <p className="text-sm text-center text-muted-foreground mt-4">Les deux produits sont <strong className="text-foreground">complémentaires</strong>, utilisés ensemble, ils couvrent l'ensemble du programme de stimulation.</p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              {t('boosters.range.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl h-full">
                <h3 className="text-2xl font-bold text-primary mb-4">Boostea13</h3>
                <p className="text-muted-foreground mb-6">{t('boosters.boostea.desc')}</p>
                <div className="space-y-3">
                  {[t('boosters.boostea.benefit1'), t('boosters.boostea.benefit2'), t('boosters.boostea.benefit3')].map((b) => (
                    <div key={b} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-base">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl h-full">
                <h3 className="text-2xl font-bold text-primary mb-4">Soilea110</h3>
                <p className="text-muted-foreground mb-6">{t('boosters.soilea.desc')}</p>
                <div className="space-y-3">
                  {[t('boosters.soilea.benefit1'), t('boosters.soilea.benefit2'), t('boosters.soilea.benefit3')].map((b) => (
                    <div key={b} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-base">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <AdvantageGrid
              title={t('boosters.why.title')}
              advantages={[
                { icon: TrendingUp, title: t('boosters.why1.title'), description: t('boosters.why1.desc') },
                { icon: Leaf, title: t('boosters.why2.title'), description: t('boosters.why2.desc') },
                { icon: Puzzle, title: t('boosters.why3.title'), description: t('boosters.why3.desc') },
                { icon: LifeBuoy, title: t('boosters.why4.title'), description: t('boosters.why4.desc') },
              ]}
            />
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">Cultures cibles</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Nos biostimulants Boostea13 et Soilea110 s'appliquent sur l'ensemble des grandes cultures
              et productions spécialisées, pour renforcer la vigueur et la résistance aux stress.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "Céréales : blé, orge, triticale, seigle, avoine",
                "Oléagineux : colza, tournesol, soja",
                "Maïs : grain et fourrage",
                "Maraîchage sous serre et plein champ",
                "Arboriculture fruitière : pommier, poirier, cerisier",
                "Viticulture : renforcement de la vigueur et résistance",
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
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-6">Boostea13</h3>
                <div className="space-y-5">
                  {[
                    { step: 1, title: "Application foliaire", desc: "Diluer à 0,5–1 L/ha dans l'eau de pulvérisation. Appliquer en conditions fraîches (matin ou soir)." },
                    { step: 2, title: "Stades clés", desc: "Tallage et montaison pour les céréales, floraison et nouaison pour le maraîchage et l'arboriculture." },
                    { step: 3, title: "Fréquence", desc: "2 à 3 applications par cycle cultural selon la culture et les objectifs de rendement." },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm">
                        {step}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{title}</p>
                        <p className="text-muted-foreground text-sm">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-6">Soilea110</h3>
                <div className="space-y-5">
                  {[
                    { step: 1, title: "Application au sol", desc: "Épandage avant semis ou lors de la plantation. Incorporer lors du travail du sol à 15–20 cm." },
                    { step: 2, title: "Dosage", desc: "150 à 300 L/ha selon le type de sol, la culture et les objectifs de fertilité." },
                    { step: 3, title: "Compatibilité", desc: "Compatible avec d'autres amendements organiques. Favorise la microfaune du sol et le développement racinaire." },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm">
                        {step}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{title}</p>
                        <p className="text-muted-foreground text-sm">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">Questions fréquentes</h2>
            <div className="space-y-6">
              {faqItems.map(({ q, a }, i) => (
                <div key={i} className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                  <h3 className="font-semibold text-foreground mb-3">{q}</h3>
                  <p className="text-muted-foreground">{a}</p>
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
                <div className="text-3xl font-bold text-primary mb-1">+8–15%</div>
                <div className="text-sm text-muted-foreground">de rendement en grandes cultures (Boostea13)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">10–21j</div>
                <div className="text-sm text-muted-foreground">pour observer les premiers effets de vigueur</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">2–3</div>
                <div className="text-sm text-muted-foreground">applications par cycle cultural (Boostea13)</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Données internes Keprea, essais agronomiques 2023–2024, mesurés selon un protocole inspiré
              des méthodologies ARVALIS. Résultats variables selon la culture et les conditions
              pédoclimatiques, communiqués à titre indicatif. Soilea110 : amélioration de l'activité
              microbienne et de la structure du sol observée dès la 2ᵉ application.
            </p>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-3 text-center">Retours terrain</h2>
            <p className="text-center text-muted-foreground mb-6 text-sm max-w-xl mx-auto">
              Vous utilisez Boostea13 ou Soilea110 ? Votre retour d'expérience aide d'autres agriculteurs à décider.
            </p>
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
              <Link to="/contact" className="inline-block text-sm font-semibold text-primary underline underline-offset-2 hover:opacity-80">
                Partager votre expérience avec nos boosters →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-6">{t('boosters.cta.title')}</h2>
            <p className="text-lg opacity-90 mb-8">{t('boosters.cta.desc')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">{t('product.contact')}</Button>
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
                <p className="text-sm text-muted-foreground">Insectes prédateurs pour éliminer les ravageurs de vos cultures</p>
              </Link>
              <Link to="/solutions/biopesticides" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-primary mb-2">Biopesticides</h3>
                <p className="text-sm text-muted-foreground">Extraits d'insectes pour une protection foliaire naturelle</p>
              </Link>
              <Link to="/solutions/biofertilisant" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-primary mb-2">Biofertilisant</h3>
                <p className="text-sm text-muted-foreground">Fertea432 pour améliorer la fertilité et la structure du sol</p>
              </Link>
            </div>
          </div>
        </section>

        <p className="text-xs text-muted-foreground text-center py-6">
          Rédigé par l'équipe Keprea · Dernière mise à jour : 2 juillet 2026
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Boosters;
