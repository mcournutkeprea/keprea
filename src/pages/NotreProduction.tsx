import { Head } from "vite-react-ssg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Production from "@/components/Production";

const NotreProduction = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Head>
      <title>Notre Production Keprea | Site de Production à Dole, Jura</title>
      <meta
        name="description"
        content="Découvrez notre process de production de biosolutions à Dole (39) : élevage d'insectes, extraction des principes actifs et formulation de biopesticides et biofertilisants."
      />
    </Head>
    <Navigation />
    <main className="flex-1 pt-20">
      <section className="py-12 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre Production
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De l'élevage d'insectes à la formulation finale : un process maîtrisé
            de bout en bout depuis notre site de Dole, dans le Jura.
          </p>
        </div>
      </section>
      <Production />
    </main>
    <Footer />
  </div>
);

export default NotreProduction;
