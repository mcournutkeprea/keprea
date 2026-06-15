import { Head } from "vite-react-ssg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactPage = () => (
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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contactez-Nous</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une question sur nos produits, un projet de partenariat ou un besoin spécifique ?
              Notre équipe vous répond sous 48h.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Coordonnées */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Nos coordonnées</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Siège social</p>
                      <p className="text-muted-foreground">Dole (39100) — Jura, France</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:contact@keprea.com"
                        className="text-primary hover:underline"
                      >
                        contact@keprea.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/40 rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">Vous êtes agriculteur ou conseiller agricole ?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nous proposons des essais terrain et des accompagnements techniques.
                  Mentionnez votre culture et votre région pour un conseil ciblé.
                </p>
              </div>
            </div>

            {/* Formulaire */}
            <div id="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default ContactPage;
