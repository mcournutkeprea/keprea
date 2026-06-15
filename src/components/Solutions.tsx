import type { RefObject } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import leavesDropletsBg from "@/assets/leaves-droplets-bg.jpg";
import { useInView } from "@/hooks/useInView";

const Solutions = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: gridRef, inView: gridVisible } = useInView(0.05);

  const handleNav = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const cardBase = "relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl";

  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div ref={headerRef as RefObject<HTMLDivElement>} className={`mb-12 reveal${headerVisible ? ' is-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
            {t('solutions.title')}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            <span className="text-foreground font-medium">{t('solutions.subtitle')}</span>{' '}
            {t('solutions.subtitle2')}{' '}
            <span className="text-primary font-semibold">{t('solutions.challenges')}</span>.{' '}
            {t('solutions.approach')}{' '}
            <span className="text-primary font-semibold">{t('solutions.expertise')}</span>{' '}
            {t('solutions.forFarmers')}
          </p>
        </div>

        {/* Asymmetric 3-column brick grid: [2/3 + 1/3] then [1/3 + 2/3] */}
        <div ref={gridRef as RefObject<HTMLDivElement>} className={`grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl reveal reveal-delay-1${gridVisible ? ' is-visible' : ''}`}>

          {/* Bioprotection — featured, spans 2 columns */}
          <div className={`${cardBase} md:col-span-2 min-h-[340px]`} onClick={() => handleNav('/solutions/bioprotection')}>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/lovable-uploads/bf0fefed-2323-4a06-a4f9-b4681de73dfe.png')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-7">
              <span className="text-xs text-white/50 uppercase tracking-widest mb-2">{t('solutions.bioprotection.subtitle')}</span>
              <h3 className="text-2xl font-bold text-white mb-2">{t('solutions.bioprotection.title')}</h3>
              <p className="text-sm text-white/75 max-w-sm leading-relaxed">{t('solutions.bioprotection.pests')} <strong className="text-white">{t('solutions.bioprotection.pestsList')}</strong></p>
            </div>
          </div>

          {/* Biopesticides — 1 column */}
          <div className={`${cardBase} min-h-[340px]`} onClick={() => handleNav('/solutions/biopesticides')}>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${leavesDropletsBg})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-7">
              <span className="text-xs text-white/50 uppercase tracking-widest mb-2">{t('solutions.biopesticides.subtitle')}</span>
              <h3 className="text-2xl font-bold text-white mb-2">{t('solutions.biopesticides.title')}</h3>
              <p className="text-sm text-white/75 leading-relaxed">{t('solutions.biopesticides.molecules')} <strong className="text-white">{t('solutions.biopesticides.protection')}</strong></p>
            </div>
          </div>

          {/* Boosters — 1 column */}
          <div className={`${cardBase} min-h-[340px]`} onClick={() => handleNav('/solutions/boosters')}>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/lovable-uploads/5a41caf6-fec0-40ca-984c-f9543cae5d7e.png')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-7">
              <span className="text-xs text-white/50 uppercase tracking-widest mb-2">{t('solutions.boosters.subtitle')}</span>
              <h3 className="text-2xl font-bold text-white mb-2">{t('solutions.boosters.title')}</h3>
              <p className="text-sm text-white/75 leading-relaxed">{t('solutions.boosters.polypeptides')} <strong className="text-white">Polypeptides &amp; Proline</strong></p>
            </div>
          </div>

          {/* Biofertilisant — spans 2 columns */}
          <div className={`${cardBase} md:col-span-2 min-h-[340px]`} onClick={() => handleNav('/solutions/biofertilisant')}>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('/lovable-uploads/514c70d9-ef8f-4f9f-8df3-f38124715fa6.png')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-7">
              <span className="text-xs text-white/50 uppercase tracking-widest mb-2">{t('solutions.biofertilisant.subtitle')}</span>
              <h3 className="text-2xl font-bold text-white mb-2">{t('solutions.biofertilisant.title')}</h3>
              <p className="text-sm text-white/75 max-w-sm leading-relaxed"><strong className="text-primary">{t('solutions.biofertilisant.organic')}</strong> — {t('solutions.biofertilisant.npk')}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solutions;
