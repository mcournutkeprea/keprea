import { Head } from "vite-react-ssg";
import { Bug, Archive, FlaskConical, Package, Truck, Users, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Production from "@/components/Production";
import PageHero from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const NotreProduction = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Head>
      <title>Notre Production Keprea | Site de Production à Dole, Jura</title>
      <meta
        name="description"
        content="Découvrez notre process de production de biosolutions à Dole (39) : élevage d'insectes, extraction des principes actifs et formulation de biopesticides et biofertilisants."
      />
      <link rel="canonical" href="https://keprea.vercel.app/notre-production" />
      <meta property="og:url" content="https://keprea.vercel.app/notre-production" />
      <meta property="og:title" content="Notre Production Keprea | Site de Production à Dole, Jura" />
      <meta name="twitter:title" content="Notre Production Keprea | Site de Production à Dole, Jura" />
      <meta
        property="og:description"
        content="Découvrez notre process de production de biosolutions à Dole (39) : élevage d'insectes, extraction des principes actifs et formulation de biopesticides et biofertilisants."
      />
      <meta
        name="twitter:description"
        content="Découvrez notre process de production de biosolutions à Dole (39) : élevage d'insectes, extraction des principes actifs et formulation de biopesticides et biofertilisants."
      />
      <script type="application/ld+json">{breadcrumbJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Notre production", path: "/notre-production" },
      ])}</script>
    </Head>
    <Navigation />
    <main className="flex-1 pt-20">
      <PageHero
        eyebrow="Fabrication française"
        title="Notre Production"
        lead="De l'élevage d'insectes à la formulation finale : un process maîtrisé de bout en bout, made in France."
        stats={[
          { value: "3 000 m²", label: "Surface du site" },
          { value: "6", label: "Étapes maîtrisées" },
          { value: "100%", label: "Made in France" },
        ]}
      />

      {/* Pourquoi produire en France */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Pourquoi produire en France ?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Maîtriser l'élevage d'insectes et l'extraction des molécules actives sur un
              site unique nous permet de garantir une traçabilité complète, du lot d'élevage
              au produit fini. Cette intégration verticale limite notre dépendance aux
              approvisionnements internationaux, un enjeu particulièrement sensible pour
              des matières premières vivantes, et raccourcit les délais entre la production
              et la livraison aux exploitations agricoles françaises.
            </p>
          </div>
        </div>
      </section>

      <Production />

      {/* Détail des 6 étapes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            Les 6 étapes de notre chaîne de production
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Chaque lot de biosolutions Keprea suit un process intégré, de l'élevage
            des insectes jusqu'au conseil d'utilisation en parcelle.
          </p>
          <div className="space-y-6">
            {[
              { icon: Bug, title: "Élevage d'insectes auxiliaires", desc: "Élevage en conditions contrôlées (température, hygrométrie, alimentation) sur notre site en France, une matière première disponible toute l'année, indépendante des aléas climatiques." },
              { icon: Archive, title: "Collecte de co-produits", desc: "Valorisation des co-produits issus de l'élevage, dans une logique d'économie circulaire limitant les intrants externes." },
              { icon: FlaskConical, title: "Préparation ou transformation", desc: "Extraction des molécules actives (peptides antimicrobiens, chitine, acides aminés) par nos procédés propriétaires, puis formulation selon la gamme de destination." },
              { icon: Package, title: "Packaging", desc: "Conditionnement adapté à chaque format de vente : sachets et tubes pour les auxiliaires vivants, bidons pour les biopesticides et boosters, big-bags et sacs pour le biofertilisant Fertea432." },
              { icon: Truck, title: "Transport", desc: "Logistique organisée pour préserver la viabilité des produits vivants et la stabilité des formulations liquides jusqu'à la parcelle." },
              { icon: Users, title: "Conseil d'utilisation en plein champ", desc: "Accompagnement technique pour le diagnostic, le dosage et le calendrier d'application, en lien avec les équipes agronomiques de nos clients et distributeurs." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres clés et implantation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">
            Une implantation stratégique en France
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-background rounded-2xl p-6 text-center border border-border">
              <div className="text-3xl font-bold text-primary mb-1">3 000 m²</div>
              <p className="text-sm text-muted-foreground">Surface de notre site de production, made in France</p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center border border-border">
              <div className="text-3xl font-bold text-primary mb-1">2h</div>
              <p className="text-sm text-muted-foreground">De Paris, Bâle, Genève et Lyon, au cœur d'un bassin céréalier et viticole</p>
            </div>
            <div className="bg-background rounded-2xl p-6 text-center border border-border">
              <div className="text-3xl font-bold text-primary mb-1">6</div>
              <p className="text-sm text-muted-foreground">Étapes maîtrisées de bout en bout, de l'élevage au conseil terrain</p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {[
              "Site implanté en France, à proximité d'un important bassin céréalier et viticole français",
              "Élevage d'insectes en conditions contrôlées, garantissant une matière première traçable toute l'année",
              "Produits formulés pour répondre aux exigences de l'agriculture biologique (règlement (UE) 2018/848)",
              "Société immatriculée en France (SAS Keprea), mentions légales et SIRET disponibles en pied de page",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
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

export default NotreProduction;
