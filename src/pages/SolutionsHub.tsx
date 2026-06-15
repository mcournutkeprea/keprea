import { Head } from "vite-react-ssg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Solutions from "@/components/Solutions";

const SolutionsHub = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Head>
      <title>Nos Solutions Keprea | Bioprotection, Biopesticides, Biofertilisants</title>
      <meta
        name="description"
        content="Découvrez les 4 gammes de solutions biosourcées Keprea : bioprotection vivante, biopesticides naturels, boosters de croissance et biofertilisants à base d'insectes."
      />
    </Head>
    <Navigation />
    <main className="flex-1 pt-20">
      <Solutions />
    </main>
    <Footer />
  </div>
);

export default SolutionsHub;
