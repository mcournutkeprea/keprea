import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Solutions = () => {
  const boosterProducts = [
    {
      name: "K Boost",
      type: "Seed",
      description: "Traitement de semences à base d'acides aminés d'insectes pour optimiser la germination et le développement racinaire",
      benefits: ["Germination améliorée", "Développement racinaire", "Résistance au stress"]
    },
    {
      name: "K Stim", 
      type: "Foliar",
      description: "Application foliaire pour stimuler la croissance et la résistance des plantes grâce aux propriétés de la chitine",
      benefits: ["Croissance stimulée", "Résistance renforcée", "Meilleure photosynthèse"]
    }
  ];

  const biocontroleProducts = [
    {
      name: "K Protect",
      description: "Solution bio-fongicide à base d'extraits d'insectes pour protéger contre les maladies fongiques",
      benefits: ["Protection antifongique", "Action préventive", "Respectueux de l'environnement"]
    },
    {
      name: "K Tin",
      description: "Bio-nématicide naturel pour lutter contre les nématodes parasites des cultures",
      benefits: ["Contrôle des nématodes", "Protection des racines", "Solution naturelle"]
    },
    {
      name: "Insectes auxiliaires",
      description: "Lâchers d'insectes bénéfiques (Ephestia, Lacewing) pour un contrôle biologique optimal",
      benefits: ["Contrôle biologique", "Équilibre naturel", "Protection durable"]
    }
  ];

  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        
        {/* Section Booster */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Booster
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stimulateurs de croissance à base d'acides aminés et chitine d'insectes pour optimiser le développement de vos cultures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {boosterProducts.map((product, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl">🚀</div>
                    <div>
                      <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
                      <span className="text-sm text-primary font-medium">{product.type}</span>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="text-primary mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section Biocontrôle */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Biocontrôle
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solutions de protection biologique pour une agriculture durable et respectueuse de l'environnement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {biocontroleProducts.map((product, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">🛡️</div>
                  <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="text-primary mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;