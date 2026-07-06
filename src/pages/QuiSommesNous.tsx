import { Head } from "vite-react-ssg";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Team from "@/components/Team";
import PageHero from "@/components/PageHero";
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
      <PageHero
        eyebrow="L'équipe Keprea"
        title="Qui sommes-nous ?"
        lead="Une équipe pluridisciplinaire au service d'une agriculture plus durable, réunie autour de la biologie des insectes."
        stats={[
          { value: "2024", label: "Année de création" },
          { value: "7", label: "Associés fondateurs" },
          { value: "3 000 m²", label: "Site de production France" },
        ]}
      />
      {/* Mission */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Notre mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Faire de la biologie des insectes un levier concret pour la transition
              agroécologique. Nous convertissons les propriétés biologiques des insectes
              (peptides antimicrobiens, chitine, acides aminés) en solutions de protection
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

      {/* Jalons */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">
            Nos jalons
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              "2024 : création de Keprea (SAS)",
              "2025 : implantation du site de production en France (3 000 m²)",
              "Une gamme de 4 familles de biosolutions : bioprotection vivante, biopesticides, boosters, biofertilisant",
              "Des formulations pensées pour l'agriculture biologique (règlement (UE) 2018/848)",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team />

    </main>
    <Footer />
  </div>
);

export default QuiSommesNous;
