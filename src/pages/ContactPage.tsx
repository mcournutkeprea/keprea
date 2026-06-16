import { Head } from "vite-react-ssg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Clock, Leaf, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('is-visible');
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>Contactez Keprea | Biosolutions Agricoles à Dole (39)</title>
        <meta
          name="description"
          content="Contactez l'équipe Keprea pour un conseil sur nos biosolutions agricoles, un partenariat ou toute question. Basés à Dole, Jura — réponse sous 48h."
        />
      </Head>
      <Navigation />

      <main className="flex-1 pt-20">

        {/* ── Hero ── */}
        <section className="pt-24 pb-14 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="reveal">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold bg-primary/10 text-primary mb-6">
                Nous contacter
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6">
                Parlons de votre projet
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Une question sur nos biosolutions, un essai terrain ou un projet de partenariat ? Notre équipe vous répond sous 48 heures.
              </p>
            </div>
          </div>
        </section>

        {/* ── Split layout : Form (3/5) + Info (2/5) ── */}
        <section className="pb-32 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-5 gap-10 xl:gap-16 items-start">

              {/* ── Formulaire ── */}
              <div className="lg:col-span-3 reveal reveal-delay-1">
                <ContactForm embedded />
              </div>

              {/* ── Panneau d'information ── */}
              <div className="lg:col-span-2 flex flex-col gap-5">

                {/* Coordonnées */}
                <div className="reveal reveal-delay-2">
                  <div className="p-2 rounded-[2rem] bg-muted/40 ring-1 ring-border/60">
                    <div className="bg-background rounded-[calc(2rem-0.375rem)] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
                        Coordonnées
                      </p>
                      <div className="space-y-5">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <MapPin className="w-4 h-4 text-primary" strokeWidth={1.5} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground mb-0.5">Siège social</p>
                            <p className="text-sm text-muted-foreground">Dole (39100) — Jura, France</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Mail className="w-4 h-4 text-primary" strokeWidth={1.5} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground mb-0.5">Email</p>
                            <a
                              href="mailto:contact@keprea.com"
                              className="text-sm text-primary hover:underline transition-colors"
                            >
                              contact@keprea.com
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Clock className="w-4 h-4 text-primary" strokeWidth={1.5} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground mb-0.5">Délai de réponse</p>
                            <p className="text-sm text-muted-foreground">Sous 48 heures ouvrées</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte agriculteurs */}
                <div className="reveal reveal-delay-3">
                  <div className="p-2 rounded-[2rem] bg-primary/5 ring-1 ring-primary/15">
                    <div className="bg-primary/[0.03] rounded-[calc(2rem-0.375rem)] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                          <Leaf className="w-4 h-4 text-primary" strokeWidth={1.5} />
                        </div>
                        <h2 className="font-semibold text-foreground text-sm leading-tight">
                          Agriculteur ou<br />conseiller agricole ?
                        </h2>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Nous proposons des essais terrain et des accompagnements techniques.
                        Mentionnez votre culture et votre région pour un conseil ciblé.
                      </p>
                      <a
                        href="mailto:contact@keprea.com?subject=Demande%20essai%20terrain"
                        className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-primary group"
                      >
                        <span>Demander un essai</span>
                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                          <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
