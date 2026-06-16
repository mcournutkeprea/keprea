import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const ContactCTA = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('is-visible');
      }),
      { threshold: 0.15 }
    );
    const section = document.getElementById('contact-cta-section');
    if (section) {
      section.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact-cta-section"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-foreground"
    >
      <div className="container mx-auto max-w-4xl text-center">

        <div className="reveal">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold bg-white/10 text-white/70 mb-8">
            Passons à l'action
          </span>
        </div>

        <div className="reveal reveal-delay-1">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Prêt à tester nos solutions<br className="hidden sm:block" /> sur votre exploitation ?
          </h2>
        </div>

        <div className="reveal reveal-delay-2">
          <p className="text-lg text-white/60 max-w-xl mx-auto leading-relaxed mb-12">
            Nos équipes vous accompagnent de l'essai terrain à la mise en place.
            Réponse garantie sous 48 heures.
          </p>
        </div>

        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-between gap-4 h-14 rounded-full bg-white text-foreground font-semibold text-base px-6 group transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/90 active:scale-[0.98]"
          >
            <span>Nous contacter</span>
            <span className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-px transition-transform duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </span>
          </Link>

          <Link
            to="/solutions"
            className="inline-flex items-center h-14 rounded-full border border-white/20 text-white/80 font-medium text-base px-6 hover:bg-white/5 hover:text-white transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98]"
          >
            Voir nos solutions
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;
