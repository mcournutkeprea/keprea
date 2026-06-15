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
      <Production />
    </main>
    <Footer />
  </div>
);

export default NotreProduction;
