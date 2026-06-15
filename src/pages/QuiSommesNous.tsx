import { Head } from "vite-react-ssg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Team from "@/components/Team";

const QuiSommesNous = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Head>
      <title>Qui Sommes-Nous | Équipe et Mission Keprea</title>
      <meta
        name="description"
        content="Keprea, startup de biosolutions agricoles à Dole (Jura). Découvrez notre équipe d'experts, notre histoire et notre mission : des biosolutions à base d'insectes pour une agriculture durable."
      />
    </Head>
    <Navigation />
    <main className="flex-1 pt-20">
      <About />
      <Team />
    </main>
    <Footer />
  </div>
);

export default QuiSommesNous;
