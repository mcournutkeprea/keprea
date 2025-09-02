import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'es' | 'pt';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
    es: string;
    pt: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.solutions': {
    fr: 'Solutions',
    en: 'Solutions',
    es: 'Soluciones',
    pt: 'Soluções'
  },
  'nav.innovation': {
    fr: 'Innovation',
    en: 'Innovation',
    es: 'Innovación',
    pt: 'Inovação'
  },
  'nav.production': {
    fr: 'Notre site de production',
    en: 'Our production site',
    es: 'Nuestro sitio de producción',
    pt: 'Nosso local de produção'
  },
  'nav.about': {
    fr: 'À propos',
    en: 'About',
    es: 'Acerca de',
    pt: 'Sobre'
  },
  'nav.contact': {
    fr: 'Nous contacter',
    en: 'Contact us',
    es: 'Contáctanos',
    pt: 'Entre em contato'
  },
  // Hero section
  'hero.title': {
    fr: 'Biosolutions révolutionnaires à base d\'insectes',
    en: 'Revolutionary insect-based biosolutions',
    es: 'Biosoluciones revolucionarias basadas en insectos',
    pt: 'Biosoluções revolucionárias baseadas em insetos'
  },
  'hero.subtitle': {
    fr: 'Fertilisation, boosters et protection naturelle des cultures pour une agriculture durable et performante',
    en: 'Fertilization, boosters and natural crop protection for sustainable and efficient agriculture',
    es: 'Fertilización, potenciadores y protección natural de cultivos para una agricultura sostenible y eficiente',
    pt: 'Fertilização, potencializadores e proteção natural de culturas para uma agricultura sustentável e eficiente'
  },
  'hero.cta': {
    fr: 'Découvrir nos solutions',
    en: 'Discover our solutions',
    es: 'Descubrir nuestras soluciones',
    pt: 'Descobrir nossas soluções'
  },
  // Production section
  'production.title': {
    fr: 'Notre site de production',
    en: 'Our production site',
    es: 'Nuestro sitio de producción',
    pt: 'Nosso local de produção'
  },
  'production.subtitle': {
    fr: 'Découvrez notre site de production moderne situé à Damparis, en France, où nous développons nos solutions bio-innovantes',
    en: 'Discover our modern production site located in Damparis, France, where we develop our bio-innovative solutions',
    es: 'Descubra nuestro moderno sitio de producción ubicado en Damparis, Francia, donde desarrollamos nuestras soluciones bio-innovadoras',
    pt: 'Descubra nosso moderno local de produção localizado em Damparis, França, onde desenvolvemos nossas soluções bio-inovadoras'
  },
  'production.excellence': {
    fr: 'Un site d\'excellence',
    en: 'A site of excellence',
    es: 'Un sitio de excelencia',
    pt: 'Um local de excelência'
  },
  'production.location.title': {
    fr: 'Localisation stratégique',
    en: 'Strategic location',
    es: 'Ubicación estratégica',
    pt: 'Localização estratégica'
  },
  'production.location.desc': {
    fr: 'Situé sur la commune de Damparis, notre site est à seulement 2 heures de Paris, Bâle, Genève et Lyon, au cœur d\'un important bassin céréalier et viticole français.',
    en: 'Located in the municipality of Damparis, our site is only 2 hours from Paris, Basel, Geneva and Lyon, in the heart of an important French cereal and wine-growing basin.',
    es: 'Situado en el municipio de Damparis, nuestro sitio está a solo 2 horas de París, Basilea, Ginebra y Lyon, en el corazón de una importante cuenca cerealera y vitícola francesa.',
    pt: 'Localizado no município de Damparis, nosso local fica a apenas 2 horas de Paris, Basileia, Genebra e Lyon, no coração de uma importante bacia cerealífera e vitícola francesa.'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};