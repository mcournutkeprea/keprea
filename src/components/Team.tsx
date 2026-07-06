import { useLanguage } from "@/contexts/LanguageContext";

interface TeamMember {
  name: string;
  roleKey: string;
}

const teamMembers: TeamMember[] = [
  { name: "Alexandre Pernot", roleKey: "team.role.alexandre" },
  { name: "Antoine Hubert", roleKey: "team.role.antoine" },
  { name: "Béatrice Vassy", roleKey: "team.role.beatrice" },
  { name: "Emilien Bohuon", roleKey: "team.role.emilien" },
  { name: "Guillaume Daoulas", roleKey: "team.role.guillaume" },
  { name: "Isabelle Couvert", roleKey: "team.role.isabelle" },
  { name: "Julien Denormandie", roleKey: "team.role.julien" },
  { name: "Pascal Maignet", roleKey: "team.role.pascal" },
  { name: "Thibault Sarton du Jonchay", roleKey: "team.role.thibault" },
  { name: "Thierry Dumbardon Martial", roleKey: "team.role.thierry" },
  { name: "Valentin Frenceshi", roleKey: "team.role.valentin" },
];

const getInitials = (name: string) => {
  const parts = name.split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const Team = () => {
  const { t } = useLanguage();

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

        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-primary/10 transition-transform duration-300 ease-out group-hover:scale-[1.03]">
                <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-primary/60 sm:text-4xl">
                  {getInitials(member.name)}
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {member.name}
                </p>
                <p className="text-xs text-muted-foreground">{t(member.roleKey)}</p>
                <span className="mx-auto mt-1.5 block h-0.5 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
