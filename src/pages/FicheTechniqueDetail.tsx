import { Head } from "vite-react-ssg";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GradientCTA from "@/components/GradientCTA";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { getTechnicalSheet } from "@/data/technicalSheets";

const FicheTechniqueDetail = () => {
  const { t } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? getTechnicalSheet(slug) : undefined;

  if (!entry) {
    return <Navigate to="/ressources/fiches-techniques" replace />;
  }

  const productName = entry.name ?? t(entry.nameKey as string);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>{productName} : Fiche Technique Keprea</title>
        <meta
          name="description"
          content={`Fiche technique ${productName} : composition, mode d'application, cultures cibles et compatibilités.`}
        />
        <link rel="canonical" href={`https://keprea.vercel.app/ressources/fiches-techniques/${entry.slug}`} />
        <meta property="og:url" content={`https://keprea.vercel.app/ressources/fiches-techniques/${entry.slug}`} />
        <meta property="og:title" content={`${productName} : Fiche Technique Keprea`} />
        <meta name="twitter:title" content={`${productName} : Fiche Technique Keprea`} />
        <script type="application/ld+json">{breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Ressources", path: "/ressources" },
          { name: "Fiches techniques", path: "/ressources/fiches-techniques" },
          { name: productName, path: `/ressources/fiches-techniques/${entry.slug}` },
        ])}</script>
      </Head>
      <Navigation />

      <main className="flex-1 pt-20">
        <section className="py-14 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-3xl">
            <Link to="/ressources/fiches-techniques">
              <Button variant="ghost" className="mb-6 -ml-3">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('techsheet.detail.backToHub')}
              </Button>
            </Link>
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              {t(entry.rangeLabelKey)}
            </span>
            <h1 className="text-4xl font-bold text-foreground mt-1">{productName}</h1>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            <dl className="rounded-xl border border-border bg-card overflow-hidden">
              {entry.rows.map((row, i) => (
                <div
                  key={`${row.labelKey}-${i}`}
                  className={`grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-1 sm:gap-4 px-5 py-4 ${
                    i % 2 === 1 ? "bg-muted/30" : ""
                  } ${i > 0 ? "border-t border-border" : ""}`}
                >
                  <dt className="font-semibold text-foreground text-sm sm:text-base">{t(row.labelKey)}</dt>
                  <dd className="text-muted-foreground text-sm sm:text-base">{t(row.valueKey)}</dd>
                </div>
              ))}
            </dl>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">{t(entry.cropsLabelKey)}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {entry.cropKeys.map((cropKey) => (
                <div key={cropKey} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">{t(cropKey)}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link to={entry.rangePath}>
                <Button variant="outline">
                  {t('techsheet.detail.viewRangePage')}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <GradientCTA
          title={t('ressources.cta.title')}
          description={t('ressources.cta.desc')}
          primary={{ label: t('product.contact'), to: "/contact" }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default FicheTechniqueDetail;
