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
      <section className="py-12 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Qui Sommes-Nous
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une équipe pluridisciplinaire au service d'une agriculture plus durable,
            réunie autour de la biologie des insectes.
          </p>
        </div>
      </section>
      <About />
      <Team />
    </main>
    <Footer />
  </div>
);

export default QuiSommesNous;
