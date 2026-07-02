import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Identité */}
          <div>
            <img
              src="/lovable-uploads/eprea_Main_Logo.png"
              alt="Keprea : Biosolutions Agricoles"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Biosolutions à base d'insectes pour une agriculture performante et régénérative.
            </p>
            <p className="text-sm text-muted-foreground mt-2">Dole (39100), Jura, France</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Nos solutions
                </Link>
              </li>
              <li>
                <Link to="/innovation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Innovation
                </Link>
              </li>
              <li>
                <Link to="/notre-production" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Notre production
                </Link>
              </li>
              <li>
                <Link to="/qui-sommes-nous" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/ressources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Ressources
                </Link>
              </li>
              <li>
                <Link to="/pourquoi-le-biocontrole" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pourquoi le biocontrôle ?
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & légal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a
                  href="mailto:contact@keprea.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@keprea.com
                </a>
              </li>
            </ul>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mentions-legales" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Keprea. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground">
            Biosolutions naturelles pour l'agriculture de demain.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
