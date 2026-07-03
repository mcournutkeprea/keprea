import { Head } from "vite-react-ssg";
import { FileText, BookOpen, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GradientCTA from "@/components/GradientCTA";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const Ressources = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Head>
      <title>Ressources Keprea | Fiches Techniques et Articles Biocontrôle</title>
      <meta
        name="description"
        content="Fiches techniques, articles et guides sur le biocontrôle et la biofertilisation. Ressources pratiques pour les agriculteurs et conseillers agricoles."
      />
      <link rel="canonical" href="https://keprea.vercel.app/ressources" />
      <meta name="robots" content="noindex, follow" />
      <meta property="og:url" content="https://keprea.vercel.app/ressources" />
      <meta property="og:title" content="Ressources Keprea | Fiches Techniques et Articles Biocontrôle" />
      <meta name="twitter:title" content="Ressources Keprea | Fiches Techniques et Articles Biocontrôle" />
      <meta
        property="og:description"
        content="Fiches techniques, articles et guides sur le biocontrôle et la biofertilisation. Ressources pratiques pour les agriculteurs et conseillers agricoles."
      />
      <meta
        name="twitter:description"
        content="Fiches techniques, articles et guides sur le biocontrôle et la biofertilisation. Ressources pratiques pour les agriculteurs et conseillers agricoles."
      />
      <script type="application/ld+json">{breadcrumbJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Ressources", path: "/ressources" },
      ])}</script>
    </Head>
    <Navigation />

    <main className="flex-1 pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ressources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Guides pratiques, fiches techniques et articles pour vous accompagner
            dans l'adoption des biosolutions agricoles.
          </p>
        </div>
      </section>

      {/* Prochainement */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: FileText,
                title: "Fiches techniques",
                desc: "Guides d'utilisation, doses, cultures cibles et compatibilités pour chaque produit Keprea.",
                coming: true,
              },
              {
                icon: BookOpen,
                title: "Articles & études",
                desc: "Retours d'expériences d'agriculteurs, études d'efficacité et actualités biocontrôle.",
                coming: true,
              },
              {
                icon: Mail,
                title: "Newsletter",
                desc: "Conseils saisonniers, nouveautés produits et actualités réglementaires chaque mois.",
                coming: true,
              },
            ].map((item, i) => (
              <div key={i} className="bg-muted/40 rounded-2xl p-8 border border-border text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-lg font-bold text-foreground mb-3">{item.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                {item.coming && (
                  <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Bientôt disponible
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <GradientCTA
        title="Vous souhaitez être informé de nos publications ?"
        description="Contactez-nous pour être ajouté à notre liste de diffusion et recevoir nos fiches techniques dès leur parution."
        primary={{ label: "Nous contacter", to: "/contact" }}
      />
    </main>

    <Footer />
  </div>
);

export default Ressources;
