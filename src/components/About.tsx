import type { RefObject } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Leaf, FlaskConical, Users, Target } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const About = () => {
  const { t } = useLanguage();
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: historyRef, inView: historyVisible } = useInView();
  const { ref: valuesRef, inView: valuesVisible } = useInView(0.05);

  const values = [
    { icon: Leaf, titleKey: "about.value1.title", descKey: "about.value1.desc" },
    { icon: FlaskConical, titleKey: "about.value2.title", descKey: "about.value2.desc" },
    { icon: Users, titleKey: "about.value3.title", descKey: "about.value3.desc" },
    { icon: Target, titleKey: "about.value4.title", descKey: "about.value4.desc" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={headerRef as RefObject<HTMLDivElement>} className={`mb-14 reveal${headerVisible ? ' is-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t('about.title')}</h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">{t('about.subtitle')}</p>
        </div>

        {/* History block — Double-Bezel (outer shell + inner core) */}
        <div ref={historyRef as RefObject<HTMLDivElement>} className={`max-w-4xl mb-14 reveal reveal-delay-1${historyVisible ? ' is-visible' : ''}`}>
          {/* Outer shell */}
          <div className="p-2 rounded-[2rem] border bg-primary/4" style={{ borderColor: 'hsl(var(--primary) / 0.12)', boxShadow: '0 4px 32px rgba(0,0,0,0.04)' }}>
          {/* Inner core */}
          <div
            className="bg-background rounded-[calc(2rem-0.5rem)] p-7"
            style={{
              borderLeft: '4px solid hsl(var(--primary))',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.8)',
            }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-5">{t('about.history.title')}</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t('about.history.p1')}{' '}
                <strong className="text-primary font-semibold">{t('about.history.p1.year')}</strong>{' '}
                {t('about.history.p1.by')}{' '}
                <strong className="text-primary font-semibold">{t('about.history.p1.associates')}</strong>{' '}
                {t('about.history.p1.roles')}{' '}
                {t('about.history.p1.vision.intro')}{' '}
                <strong className="text-primary font-semibold">{t('about.history.p1.vision.bold')}</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t('about.history.p2.location')}{' '}
                <strong className="text-primary font-semibold">{t('about.history.p2.city')}</strong>
                {t('about.history.p2.site')}{' '}
                <strong className="text-primary font-semibold">{t('about.history.p2.size')}</strong>{' '}
                {t('about.history.p2.develop')}{' '}
                <strong className="text-primary font-semibold">{t('about.history.p2.bioprotection')}</strong>{' '}
                {t('about.history.p2.rest')}{' '}
                <strong className="text-primary font-semibold">{t('about.history.p2.boosters')}</strong>{' '}
                {t('about.history.p2.activators')}{' '}
                <strong className="text-primary font-semibold">{t('about.history.p2.biofertilisants')}</strong>{' '}
                {t('about.history.p2.biofertilisants.desc')}{' '}
                <strong className="text-primary font-semibold">{t('about.history.p2.organic')}</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {t('about.history.p3')}{' '}
                <strong className="text-primary font-semibold">{t('about.history.p3.process')}</strong>{' '}
                {t('about.history.p3.guarantee')}
              </p>
            </div>
          </div>
          </div>
        </div>

        {/* Values — 2×2 grid with left-accent border, not generic icon-in-box */}
        <div ref={valuesRef as RefObject<HTMLDivElement>} className={`grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl reveal reveal-delay-2${valuesVisible ? ' is-visible' : ''}`}>
          {values.map((value, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 rounded-xl border border-border bg-background shadow-sm hover:shadow-md transition-shadow"
              style={{ borderLeftWidth: '4px', borderLeftColor: 'hsl(var(--primary))' }}
            >
              <value.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-base font-semibold text-foreground mb-1">{t(value.titleKey)}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(value.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
