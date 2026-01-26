import { useLanguage } from "@/contexts/LanguageContext";
import { Leaf, FlaskConical, Users, Target } from "lucide-react";

const About = () => {
  const { t } = useLanguage();
  
  const values = [
    { icon: Leaf, titleKey: "about.value1.title", descKey: "about.value1.desc" },
    { icon: FlaskConical, titleKey: "about.value2.title", descKey: "about.value2.desc" },
    { icon: Users, titleKey: "about.value3.title", descKey: "about.value3.desc" },
    { icon: Target, titleKey: "about.value4.title", descKey: "about.value4.desc" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('about.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('about.subtitle')}</p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">{t('about.history.title')}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {t('about.history.p1')} <strong className="text-primary font-semibold">{t('about.history.p1.year')}</strong> {t('about.history.p1.by')} <strong className="text-primary font-semibold">{t('about.history.p1.associates')}</strong> {t('about.history.p1.roles')} {t('about.history.p1.vision.intro')} <strong className="text-primary font-semibold">{t('about.history.p1.vision.bold')}</strong>
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {t('about.history.p2.location')} <strong className="text-primary font-semibold">{t('about.history.p2.city')}</strong>{t('about.history.p2.site')} <strong className="text-primary font-semibold">{t('about.history.p2.size')}</strong> {t('about.history.p2.develop')} <strong className="text-primary font-semibold">{t('about.history.p2.bioprotection')}</strong> {t('about.history.p2.rest')} <strong className="text-primary font-semibold">{t('about.history.p2.boosters')}</strong> {t('about.history.p2.activators')} <strong className="text-primary font-semibold">{t('about.history.p2.biofertilisants')}</strong> {t('about.history.p2.biofertilisants.desc')} <strong className="text-primary font-semibold">{t('about.history.p2.organic')}</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.history.p3')} <strong className="text-primary font-semibold">{t('about.history.p3.process')}</strong> {t('about.history.p3.guarantee')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{t(value.titleKey)}</h4>
              <p className="text-sm text-muted-foreground">{t(value.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
