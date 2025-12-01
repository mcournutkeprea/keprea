import { useLanguage } from "@/contexts/LanguageContext";
import { Leaf, FlaskConical, Users, Target } from "lucide-react";
const About = () => {
  const {
    t
  } = useLanguage();
  const values = [{
    icon: Leaf,
    title: "Innovation Naturelle",
    description: "Nous développons des solutions biosourcées issues d'insectes pour une agriculture durable et respectueuse de l'environnement."
  }, {
    icon: FlaskConical,
    title: "Excellence Scientifique",
    description: "Notre équipe R&D combine expertise entomologique et agronomique pour créer des produits efficaces et homologués."
  }, {
    icon: Users,
    title: "Partenariat Agricole",
    description: "Nous accompagnons les agriculteurs dans leur transition vers des pratiques plus durables avec des solutions adaptées."
  }, {
    icon: Target,
    title: "Impact Mesurable",
    description: "Nos biosolutions offrent des résultats concrets : protection des cultures, amélioration des rendements et réduction des intrants chimiques."
  }];
  return <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            À propos de Keprea
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pionniers des biosolutions agricoles en France
          </p>
        </div>

        {/* Notre histoire */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Notre Histoire</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Fondée en <strong className="text-foreground">2025</strong> par <strong className="text-foreground">7 associés experts</strong> — agriculteurs, entomologistes, agronomes et entrepreneurs — Keprea est née d'une vision commune : révolutionner l'agriculture grâce aux biosolutions issues d'insectes.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">Implantée à proximité de Dole dans le Jura, notre site de production de 3 000 m² nous permet de développer une gamme complète de solution pour les agriculteurs :  boosters de croissance pour stimuler les défenses des plantes, et solutions de biocontrôle vivant avec des insectes auxiliaires.<strong className="text-foreground">Dole dans le Jura</strong>, notre site de production de <strong className="text-foreground">3 000 m²</strong> nous permet de développer une gamme complète de produits : <strong className="text-foreground">biofertilisants</strong> enrichis en substances naturelles, <strong className="text-foreground">boosters de croissance</strong> pour stimuler les défenses des plantes, et <strong className="text-foreground">solutions de biocontrôle vivant</strong> avec des insectes auxiliaires.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Notre expertise en <strong className="text-foreground">process industriels</strong> nous permet de garantir des produits de qualité stable et reproductible, répondant aux exigences les plus strictes du monde agricole.
            </p>
          </div>
        </div>

        {/* Nos valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => <div key={index} className="bg-background rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default About;