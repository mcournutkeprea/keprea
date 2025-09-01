import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Innovation from "@/components/Innovation";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Solutions />
      <Innovation />
      <Team />
      <Contact />
    </div>
  );
};

export default Index;
