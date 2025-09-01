import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Solutions = () => {
  const solutions = [
    {
      title: "Fertilisation",
      description: "Acides aminés naturels issus d'insectes pour nourrir vos cultures de manière optimale",
      icon: "🌱",
      benefits: ["Absorption rapide", "Nutrition équilibrée", "Croissance renforcée"]
    },
    {
      title: "Boosters de performance",
      description: "Formulations à base de chitine pour stimuler la résistance et la vitalité des plantes",
      icon: "🚀", 
      benefits: ["Résistance accrue", "Vitalité optimisée", "Rendements améliorés"]
    },
    {
      title: "Protection biocontrôle",
      description: "Insectes vivants pour une protection naturelle et durable de vos cultures",
      icon: "🛡️",
      benefits: ["Protection naturelle", "Solution durable", "Équilibre écologique"]
    }
  ];

  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos biosolutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une gamme complète de solutions innovantes pour répondre à tous vos besoins agricoles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <CardTitle className="text-xl font-bold">{solution.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
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
    </section>
  );
};

export default Solutions;