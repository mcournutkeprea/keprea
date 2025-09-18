import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductsSchema from "@/components/ProductsSchema";
import Solutions from "@/components/Solutions";
import Innovation from "@/components/Innovation";
import Production from "@/components/Production";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";


const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculer l'opacité du dégradé basé sur la position de scroll
  const gradientOpacity = Math.min(scrollY / 1000, 1);

  return (
    <div className="min-h-screen relative">
      {/* Dégradé de fond évolutif */}
      <div 
        className="fixed inset-0 pointer-events-none z-[-1]"
        style={{
          background: `linear-gradient(180deg, 
            hsl(120, 60%, ${20 + gradientOpacity * 15}%) 0%, 
            hsl(120, 50%, ${35 + gradientOpacity * 20}%) 50%, 
            hsl(120, 40%, ${50 + gradientOpacity * 25}%) 100%)`,
          opacity: 0.8 + gradientOpacity * 0.2
        }}
      />
      
      {/* Contenu de la page */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <ProductsSchema />
        <Solutions />
        <Innovation />
        <Production />
        <Team />
        <Contact />
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;
