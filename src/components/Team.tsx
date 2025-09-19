import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  x: number; // Position X en pourcentage
  y: number; // Position Y en pourcentage
}

const Team = () => {
  const { t } = useLanguage();
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  
  // Positions des membres sur la photo d'équipe (alignées sur les points rouges de référence)
  const teamMembers: TeamMember[] = [
    { id: 1, name: "Emilien Bohuon", role: "Directeur R&D agronomique", x: 9, y: 50 },
    { id: 2, name: "Pascal Maignet", role: "Directeur R&D biocontrole", x: 19, y: 48 },
    { id: 3, name: "Béatrice Vassy", role: "Directrice financière", x: 29, y: 50 },
    { id: 4, name: "Guillaume Daoulas", role: "Directeur de business development", x: 39, y: 46 },
    { id: 5, name: "Thibault Du Jonchay", role: "Directeur industriel", x: 49, y: 48 },
    { id: 6, name: "Antoine Hubert", role: "Président directeur général", x: 60, y: 50 },
    { id: 7, name: "Julien Denormandie", role: "Président du conseil de surveillance", x: 72, y: 48 },
    { id: 8, name: "Thierry Dumbardon Martial", role: "Entomologiste", x: 85, y: 49 },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t('team.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Photo d'équipe */}
          <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[16/10]">
            <img 
              src="/lovable-uploads/a9befb70-02c2-43d9-96de-99567fb9d734.png" 
              alt="Équipe Keprea - Experts en agtech et biosolutions"
              className="w-full h-full object-cover animate-camera-sweep"
            />
            
            {/* Texte overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 text-white px-4 py-2 rounded-lg text-lg font-medium">
                Photo à faire tous ensemble
              </div>
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
              {t('team.hover')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;