import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { Leaf, ShieldCheck, FlaskConical, TrendingUp, Bug, Sprout, Award, ArrowRight, Microscope, Feather, TestTube, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { faqJsonLd, articleJsonLd } from "@/lib/schema";

const faqItems = [
  {
    question: "Qu'est-ce que le biocontrôle, au sens de la loi française ?",
    answer:
      "L'article L.253-6 du Code rural définit les produits de biocontrôle comme l'ensemble des agents et produits utilisant des mécanismes naturels dans le cadre de la lutte intégrée contre les ennemis des cultures. Quatre catégories sont reconnues : les macro-organismes auxiliaires, les micro-organismes, les médiateurs chimiques (phéromones, kairomones) et les substances naturelles d'origine végétale, animale ou minérale. La liste officielle des produits de biocontrôle est publiée et mise à jour chaque mois au Bulletin officiel du ministère de l'Agriculture.",
  },
  {
    question: "Le biocontrôle est-il aussi efficace que les produits phytosanitaires classiques ?",
    answer:
      "L'efficacité dépend du couple bioagresseur/culture et du positionnement dans l'itinéraire technique : le biocontrôle agit le plus souvent en prévention ou en curatif précoce, avec une fenêtre d'application différente de celle des produits chimiques de synthèse. Utilisé au bon moment et en combinaison avec d'autres leviers agronomiques (rotation, auxiliaires, prophylaxie), il constitue une alternative crédible, en particulier là où les substances actives conventionnelles disparaissent du marché.",
  },
  {
    question: "Le biocontrôle est-il autorisé en agriculture biologique ?",
    answer:
      "La majorité des produits de biocontrôle sont compatibles avec le règlement (UE) 2018/848 relatif à la production biologique, sous réserve de vérifier l'inscription de chaque produit à l'annexe correspondante et son autorisation de mise sur le marché (AMM) en France. Les solutions Keprea sont développées pour répondre à ces exigences ; nous recommandons systématiquement de vérifier la compatibilité avec votre organisme certificateur avant emploi.",
  },
  {
    question: "Pourquoi utiliser des insectes comme matière première en biocontrôle ?",
    answer:
      "Les insectes comme Hermetia illucens (mouche soldat noire) ou les vers de farine produisent naturellement des molécules de défense — peptides antimicrobiens, chitine, acides aminés — développées au cours de leur évolution pour résister à leurs propres agresseurs (bactéries, champignons). L'élevage contrôlé permet d'obtenir une matière première standardisée, traçable et disponible toute l'année, contrairement à certaines ressources végétales soumises aux aléas de récolte.",
  },
  {
    question: "Quelle est la différence entre biocontrôle, biostimulant et biofertilisant ?",
    answer:
      "Le biocontrôle vise la protection des cultures contre les bioagresseurs (insectes ravageurs, champignons pathogènes). Le biostimulant améliore la nutrition, la tolérance au stress abiotique ou les caractéristiques qualitatives de la culture, sans action directe contre les bioagresseurs. Le biofertilisant apporte ou améliore la disponibilité des éléments nutritifs. Les trois catégories relèvent de cadres réglementaires distincts, et une même gamme de produits peut combiner plusieurs de ces fonctions.",
  },
];


const PourquoiBiocontrole = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Head>
      <title>Pourquoi le Biocontrôle ? | Agriculture Durable — Keprea</title>
      <meta
        name="description"
        content="Comprendre le biocontrôle : alternatives naturelles aux pesticides chimiques pour protéger vos cultures, préserver la biodiversité et respecter la réglementation."
      />
      <link rel="canonical" href="https://keprea.vercel.app/pourquoi-le-biocontrole" />
      <meta property="og:url" content="https://keprea.vercel.app/pourquoi-le-biocontrole" />
      <meta property="og:title" content="Pourquoi le Biocontrôle ? | Agriculture Durable — Keprea" />
      <meta name="twitter:title" content="Pourquoi le Biocontrôle ? | Agriculture Durable — Keprea" />
      <meta
        property="og:description"
        content="Comprendre le biocontrôle : alternatives naturelles aux pesticides chimiques pour protéger vos cultures, préserver la biodiversité et respecter la réglementation."
      />
      <meta
        name="twitter:description"
        content="Comprendre le biocontrôle : alternatives naturelles aux pesticides chimiques pour protéger vos cultures, préserver la biodiversité et respecter la réglementation."
      />
      <script type="application/ld+json">{breadcrumbJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Pourquoi le biocontrôle ?", path: "/pourquoi-le-biocontrole" },
      ])}</script>
      <script type="application/ld+json">{articleJsonLd({
        headline: "Pourquoi le Biocontrôle ? Comprendre les enjeux pour l'agriculture durable",
        description: "Comprendre le biocontrôle : cadre réglementaire, marché français, catégories de solutions et alternatives naturelles aux pesticides chimiques.",
        path: "/pourquoi-le-biocontrole",
        datePublished: "2026-06-15",
        dateModified: "2026-07-02",
      })}</script>
      <script type="application/ld+json">{faqJsonLd(faqItems)}</script>
    </Head>
    <Navigation />

    <main className="flex-1 pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pourquoi le Biocontrôle ?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Face au retrait progressif des pesticides chimiques et aux exigences croissantes
            des filières et consommateurs, le biocontrôle s'impose comme la réponse
            agronomique et économique durable.
          </p>
        </div>
      </section>

      {/* Définition */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Qu'est-ce que le biocontrôle ?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le biocontrôle regroupe l'ensemble des méthodes de protection des végétaux
              utilisant des <strong className="text-foreground">mécanismes et agents naturels</strong>.
              L'article L.253-6 du Code rural en donne une définition légale précise : il s'agit
              des agents et produits utilisant des mécanismes naturels dans le cadre de la lutte
              intégrée contre les ennemis des cultures. Quatre grandes catégories sont reconnues
              par la réglementation française et détaillées ci-dessous.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La liste officielle des produits de biocontrôle est publiée et actualisée chaque
              mois au Bulletin officiel du ministère de l'Agriculture — un statut réglementaire
              distinct de celui des produits phytopharmaceutiques classiques, avec ses propres
              procédures d'homologation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Keprea développe des solutions à base d'<strong className="text-foreground">insectes élevés en France</strong>,
              exploitant leurs propriétés biologiques uniques pour créer des produits efficaces,
              traçables et conformes aux cahiers des charges agriculture biologique
              (règlement (UE) 2018/848).
            </p>
          </div>
        </div>
      </section>

      {/* 4 catégories de biocontrôle */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            Les 4 catégories reconnues par la loi
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Le Code rural (article L.253-6) distingue quatre familles d'agents et de produits
            de biocontrôle, chacune avec ses propres mécanismes d'action.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-2xl p-6 border border-border">
              <Feather className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Macro-organismes</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Insectes, acariens ou nématodes auxiliaires introduits pour réguler les
                populations de ravageurs (ex. : coccinelles contre les pucerons).
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 border border-border">
              <Microscope className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Micro-organismes</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bactéries, champignons ou virus utilisés comme agents de lutte biologique
                contre les maladies et ravageurs des cultures.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 border border-border">
              <TestTube className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Médiateurs chimiques</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Phéromones et kairomones qui perturbent le comportement des ravageurs
                (piégeage, confusion sexuelle) sans les détruire directement.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-6 border border-border">
              <Bug className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Substances naturelles</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                D'origine végétale, animale ou minérale — c'est dans cette catégorie que
                s'inscrivent les extraits d'insectes développés par Keprea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contexte réglementaire et marché */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            Un contexte réglementaire et économique qui accélère
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Le retrait progressif des substances actives conventionnelles et la structuration
            de la filière biocontrôle transforment rapidement le marché de la protection
            des cultures en France.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <div className="text-3xl font-bold text-primary mb-2">-50 %</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Objectif de réduction de l'usage et des risques des produits phytopharmaceutiques
                fixé par la stratégie <strong className="text-foreground">Ecophyto 2030</strong>
                {" "}d'ici 2030, par rapport à la moyenne 2011-2013 (stratégie publiée le 6 mai 2024).
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <div className="text-3xl font-bold text-primary mb-2">-20 %</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Baisse déjà constatée de l'usage des produits phytopharmaceutiques de synthèse
                en 2022 par rapport à la moyenne 2015-2017 — première baisse depuis 2009
                (données Ecophyto II+).
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <div className="text-3xl font-bold text-primary mb-2">770</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Produits de biocontrôle homologués en France en janvier 2025, couvrant 56 %
                des usages phytosanitaires (source : ministère de l'Agriculture).
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <div className="text-3xl font-bold text-primary mb-2">30 %</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Part de marché visée par la filière biocontrôle en France à l'horizon 2030,
                contre environ 12 % en 2024 (Baromètre du Biocontrôle, Alliance Biocontrôle, 2025).
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center italic">
            Chiffres tiers cités à titre indicatif — sources : agriculture.gouv.fr (stratégie Écophyto 2030,
            mai 2024), Alliance Biocontrôle (Baromètre du Biocontrôle 2024), Légifrance (article L.253-6
            du Code rural). Ces données évoluent chaque année ; nous les mettons à jour lors de nos revues
            de contenu périodiques.
          </p>
        </div>
      </section>

      {/* 3 raisons */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            3 raisons d'adopter le biocontrôle
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Conformité réglementaire</h3>
              <p className="text-muted-foreground leading-relaxed">
                Plan Ecophyto 2+, retrait des substances actives critiques, exigences HVE
                et AB : le biocontrôle sécurise votre conformité aujourd'hui et demain.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Valeur commerciale</h3>
              <p className="text-muted-foreground leading-relaxed">
                Les filières premium, grande distribution et export exigent des preuves
                de pratiques durables. Le biocontrôle est un argument de vente concret.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Agronomie durable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Préservation des auxiliaires naturels, maintien de la biodiversité du sol,
                réduction des résidus sur les productions : des bénéfices mesurables long terme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approche Keprea */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            L'approche Keprea
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Bug,
                title: "Matière première insecte",
                desc: "Nos insectes (Hermetia illucens, vers de farine) sont élevés en France dans des conditions contrôlées, garantissant la traçabilité et la qualité constante de nos extraits."
              },
              {
                icon: FlaskConical,
                title: "Extraction innovante",
                desc: "Nos procédés d'extraction préservent les molécules actives : peptides antimicrobiens, chitine, acides aminés. Une technologie propriétaire développée en France."
              },
              {
                icon: Sprout,
                title: "Formulations adaptées",
                desc: "Chaque produit est formulé pour une application terrain optimale : miscibilité eau, stabilité en conditions agricoles, compatibilité avec d'autres intrants."
              },
              {
                icon: Award,
                title: "Homologations & cahiers des charges",
                desc: "Nos produits répondent aux exigences de l'agriculture biologique (norme UE 2018/848) et sont développés dans le respect des bonnes pratiques phytosanitaires."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
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
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-background rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Byline / dernière mise à jour */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs text-muted-foreground text-center">
            Rédigé par l'équipe Keprea · Dernière mise à jour : 2 juillet 2026
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à passer au biocontrôle ?</h2>
          <p className="text-lg opacity-90 mb-8">
            Découvrez nos gammes de solutions ou contactez-nous pour un conseil personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/solutions">
              <Button size="lg" variant="secondary">
                Voir nos solutions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/20">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default PourquoiBiocontrole;
