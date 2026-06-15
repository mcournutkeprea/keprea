import { Head } from "vite-react-ssg";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Innovation from "@/components/Innovation";
import Production from "@/components/Production";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Keprea — Biosolutions Agricoles à base d'Insectes | Dole, Jura</title>
        <meta
          name="description"
          content="Keprea développe des biosolutions à base d'insectes pour l'agriculture : bioprotection vivante, biopesticides naturels, boosters de croissance et biofertilisants. Dole (39)."
        />
      </Head>
      <Navigation />
      <Hero />
      <Solutions />
      <Testimonials />
      <Innovation />
      <Production />
      <About />
      <Contact />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
