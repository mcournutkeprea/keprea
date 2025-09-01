import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  x: number; // Position X en pourcentage
  y: number; // Position Y en pourcentage
}

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  
  // Positions des membres sur la photo (à ajuster selon la vraie photo)
  const teamMembers: TeamMember[] = [
    { id: 1, name: "Marie", role: "CEO", x: 25, y: 40 },
    { id: 2, name: "Pierre", role: "CTO", x: 50, y: 45 },
    { id: 3, name: "Sophie", role: "R&D Manager", x: 75, y: 42 },
    // Ajoutez plus de membres selon votre équipe
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Notre Équipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une équipe passionnée d'experts en agtech et biotechnologie
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Container pour la photo d'équipe */}
          <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-200 aspect-[16/10]">
            {/* Placeholder pour la photo - sera remplacé par votre vraie photo */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <p>Photo d'équipe à intégrer</p>
            </div>

            {/* Points interactifs pour chaque membre */}
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="absolute w-4 h-4 cursor-pointer"
                style={{ left: `${member.x}%`, top: `${member.y}%` }}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Point indicateur */}
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg animate-pulse hover:scale-125 transition-transform"></div>
                
                {/* Tooltip avec nom et fonction */}
                {hoveredMember === member.id && (
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-background border border-border rounded-lg px-3 py-2 shadow-lg z-10 whitespace-nowrap">
                    <div className="text-sm font-medium text-foreground">
                      {member.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {member.role}
                    </div>
                    {/* Flèche du tooltip */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Survolez les points sur la photo pour découvrir notre équipe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;