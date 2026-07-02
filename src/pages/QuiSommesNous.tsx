import { Head } from "vite-react-ssg";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Team from "@/components/Team";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const QuiSommesNous = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Head>
      <title>Qui sommes-nous ? | Équipe et Mission Keprea</title>
      <meta
        name="description"
        content="Keprea, startup de biosolutions agricoles à Dole (Jura). Découvrez notre équipe d'experts, notre histoire et notre mission : des biosolutions à base d'insectes pour une agriculture durable."
      />
      <link rel="canonical" href="https://keprea.vercel.app/qui-sommes-nous" />
      <meta property="og:url" content="https://keprea.vercel.app/qui-sommes-nous" />
      <meta property="og:title" content="Qui sommes-nous ? | Équipe et Mission Keprea" />
      <meta name="twitter:title" content="Qui sommes-nous ? | Équipe et Mission Keprea" />
      <meta
        property="og:description"
        content="Keprea, startup de biosolutions agricoles à Dole (Jura). Découvrez notre équipe d'experts, notre histoire et notre mission : des biosolutions à base d'insectes pour une agriculture durable."
      />
      <meta
        name="twitter:description"
        content="Keprea, startup de biosolutions agricoles à Dole (Jura). Découvrez notre équipe d'experts, notre histoire et notre mission : des biosolutions à base d'insectes pour une agriculture durable."
      />
      <script type="application/ld+json">{breadcrumbJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Qui sommes-nous", path: "/qui-sommes-nous" },
      ])}</script>
    </Head>
    <Navigation />
    <main className="flex-1 pt-20">
      <section className="py-12 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Qui sommes-nous ?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une équipe pluridisciplinaire au service d'une agriculture plus durable,
            réunie autour de la biologie des insectes.
          </p>
        </div>
      </section>
      {/* Mission */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Notre mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Faire de la biologie des insectes un levier concret pour la transition
              agroécologique. Nous convertissons les propriétés biologiques des insectes —
              peptides antimicrobiens, chitine, acides aminés — en solutions de protection
              et de nutrition des cultures, conçues pour répondre aux contraintes réelles
              du terrain : coût, simplicité d'usage, conformité réglementaire.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cette approche répond à un double constat : le retrait progressif des
              substances actives conventionnelles impose de nouvelles alternatives aux
              agriculteurs, et les filières exigent des preuves concrètes de pratiques
              durables. Notre ambition est de rendre le biocontrôle accessible, sans
              compromis sur l'efficacité agronomique.
            </p>
          </div>
        </div>
      </section>

      <About showTitle={false} />

      {/* Jalons et implantation */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">
            Nos jalons
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                title: "2025 — Création de Keprea (SAS)",
                desc: "Fondée par 7 associés experts — agriculteurs, entomologistes, agronomes et entrepreneurs — réunis autour d'une même conviction : faire revenir le vivant au cœur de la gestion de la ferme.",
              },
              {
                title: "Implantation du site de production à Dole, dans le Jura (39)",
                desc: "Sur 3 000 m², à environ 2 heures de Paris, Bâle, Genève et Lyon, au cœur d'un important bassin céréalier et viticole français.",
              },
              {
                title: "Une gamme de 4 familles de biosolutions",
                desc: "Bioprotection vivante (auxiliaires entomophages), biopesticides (extraits d'insectes), boosters (biostimulants) et biofertilisant — développés pour couvrir l'ensemble d'un programme de protection et de nutrition des cultures.",
              },
              {
                title: "Des formulations pensées pour l'agriculture biologique",
                desc: "Conçues pour répondre aux exigences du règlement (UE) 2018/848 relatif à la production biologique, sous réserve de vérification produit par produit avec votre organisme certificateur.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-base font-semibold text-foreground block">{item.title}</span>
                  <span className="text-sm text-muted-foreground">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-8 italic">
            Nous mettrons à jour cette page avec nos certifications qualité dès leur formalisation.
          </p>
        </div>
      </section>

      {/* Pourquoi une équipe pluridisciplinaire */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Pourquoi une équipe pluridisciplinaire ?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Développer des biosolutions performantes exige de faire dialoguer des
            compétences rarement réunies dans une même structure : l'entomologie pour
            comprendre et exploiter les propriétés biologiques des insectes,
            l'agronomie pour valider l'efficacité au champ, et une expérience concrète
            de l'exploitation agricole pour concevoir des produits réellement utilisables.
            C'est cette combinaison qui a présidé au choix des 7 associés fondateurs
            de Keprea, et qui continue de guider le recrutement de l'équipe.
          </p>
        </div>
      </section>

      <Team />

      <p className="text-xs text-muted-foreground text-center py-6">
        Rédigé par l'équipe Keprea · Dernière mise à jour : 2 juillet 2026
      </p>
    </main>
    <Footer />
  </div>
);

export default QuiSommesNous;
