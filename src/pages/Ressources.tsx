import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { FileText, BookOpen, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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

          <div className="bg-primary/5 rounded-2xl p-8 text-center border border-primary/10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Vous souhaitez être informé de nos publications ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contactez-nous pour être ajouté à notre liste de diffusion et recevoir
              nos fiches techniques dès leur parution.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Nous contacter
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Ressources;
