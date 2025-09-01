import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductsSchema from "@/components/ProductsSchema";
import Solutions from "@/components/Solutions";
import Innovation from "@/components/Innovation";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProductsSchema />
      <Solutions />
      <Innovation />
      <Team />
      <Contact />
      <ContactForm />
    </div>
  );
};

export default Index;
