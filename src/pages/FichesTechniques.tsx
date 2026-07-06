import { Head } from "vite-react-ssg";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { technicalSheets } from "@/data/technicalSheets";

const FichesTechniques = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>Fiches Techniques Produits Keprea | Boostea13, Soilea110, Fertea432</title>
        <meta
          name="description"
          content="Fiches techniques des produits Keprea : composition, dose d'application, cultures cibles et compatibilités pour Boostea13, Soilea110, Fertea432 et nos gammes de biocontrôle."
        />
        <link rel="canonical" href="https://keprea.vercel.app/ressources/fiches-techniques" />
        <meta property="og:url" content="https://keprea.vercel.app/ressources/fiches-techniques" />
        <meta property="og:title" content="Fiches Techniques Produits Keprea" />
        <meta name="twitter:title" content="Fiches Techniques Produits Keprea" />
        <script type="application/ld+json">{breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Ressources", path: "/ressources" },
          { name: "Fiches techniques", path: "/ressources/fiches-techniques" },
        ])}</script>
      </Head>
      <Navigation />

      <main className="flex-1 pt-20">
        <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <Link to="/ressources">
              <Button variant="ghost" className="mb-6 -ml-3">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('nav.ressources')}
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t('techsheet.hub.title')}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{t('techsheet.hub.subtitle')}</p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid sm:grid-cols-2 gap-5">
              {technicalSheets.map((entry) => (
                <Link
                  key={entry.slug}
                  to={`/ressources/fiches-techniques/${entry.slug}`}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">
                    {t(entry.rangeLabelKey)}
                  </span>
                  <h2 className="text-xl font-bold text-foreground mt-1 mb-4">
                    {entry.name ?? t(entry.nameKey as string)}
                  </h2>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    {t('techsheet.hub.viewSheet')}
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FichesTechniques;
