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
  // Solutions section
  'solutions.title': {
    fr: 'Nos Bio-solutions',
    en: 'Our Bio-solutions',
    es: 'Nuestras Bio-soluciones',
    pt: 'Nossas Bio-soluções'
  },
  'solutions.subtitle': {
    fr: 'Répondre aux défis majeurs des agriculteurs du monde entier : compétitivité, productivité, préservation de l\'environnement',
    en: 'Addressing the major challenges faced by farmers worldwide: competitiveness, productivity, environmental preservation',
    es: 'Abordando los principales desafíos que enfrentan los agricultores en todo el mundo: competitividad, productividad, preservación ambiental',
    pt: 'Abordando os principais desafios enfrentados pelos agricultores em todo o mundo: competitividade, produtividade, preservação ambiental'
  },
  'solutions.booster.title': {
    fr: 'Solutions Booster',
    en: 'Booster solutions',
    es: 'Soluciones potenciadoras',
    pt: 'Soluções potencializadoras'
  },
  'solutions.booster.subtitle': {
    fr: 'Pour la qualité des sols et la résistance des plantes',
    en: 'For soil quality and plant strength',
    es: 'Para la calidad del suelo y la resistencia de las plantas',
    pt: 'Para qualidade do solo e resistência das plantas'
  },
  'solutions.biocontrol.title': {
    fr: 'Solutions de biocontrôle',
    en: 'Biocontrol solutions',
    es: 'Soluciones de biocontrol',
    pt: 'Soluções de biocontrole'
  },
  'solutions.biocontrol.subtitle': {
    fr: 'Protéger vos cultures, naturellement.',
    en: 'Protecting your crops, naturally.',
    es: 'Protegiendo sus cultivos, naturalmente.',
    pt: 'Protegendo suas culturas, naturalmente.'
  },
  'solutions.biocontrol.nematicide': {
    fr: 'Bionématicide - substances d\'insectes solides',
    en: 'Bionematicide - solid insect substances',
    es: 'Bionematicida - sustancias sólidas de insectos',
    pt: 'Bionematicida - substâncias sólidas de insetos'
  },
  'solutions.biocontrol.pest': {
    fr: 'Solutions innovantes contre les ravageurs',
    en: 'Innovative solutions against pests',
    es: 'Soluciones innovadoras contra plagas',
    pt: 'Soluções inovadoras contra pragas'
  },
  // Innovation section
  'innovation.title': {
    fr: 'L\'innovation par les insectes',
    en: 'Innovation through insects',
    es: 'Innovación a través de insectos',
    pt: 'Inovação através de insetos'
  },
  'innovation.subtitle': {
    fr: 'Nous exploitons le potentiel extraordinaire des insectes pour créer des solutions agricoles durables, performantes et peu coûteuses. Notre approche scientifique combine tradition, innovation et mécanisation pour répondre au besoin des producteurs agricoles.',
    en: 'We harness the extraordinary potential of insects to create sustainable, efficient and cost-effective agricultural solutions. Our scientific approach combines tradition, innovation and mechanization to meet the needs of agricultural producers.',
    es: 'Aprovechamos el extraordinario potencial de los insectos para crear soluciones agrícolas sostenibles, eficientes y rentables. Nuestro enfoque científico combina tradición, innovación y mecanización para satisfacer las necesidades de los productores agrícolas.',
    pt: 'Aproveitamos o extraordinário potencial dos insetos para criar soluções agrícolas sustentáveis, eficientes e econômicas. Nossa abordagem científica combina tradição, inovação e mecanização para atender às necessidades dos produtores agrícolas.'
  },
  'innovation.amino.title': {
    fr: 'Acides aminés bioactifs',
    en: 'Bioactive amino acids',
    es: 'Aminoácidos bioactivos',
    pt: 'Aminoácidos bioativos'
  },
  'innovation.amino.desc': {
    fr: 'Extraction optimisée pour une biodisponibilité maximale',
    en: 'Optimized extraction for maximum bioavailability',
    es: 'Extracción optimizada para máxima biodisponibilidad',
    pt: 'Extração otimizada para máxima biodisponibilidade'
  },
  'innovation.chitin.title': {
    fr: 'Chitine fonctionnelle',
    en: 'Functional chitin',
    es: 'Quitina funcional',
    pt: 'Quitina funcional'
  },
  'innovation.chitin.desc': {
    fr: 'Stimulation naturelle des défenses des plantes',
    en: 'Natural stimulation of plant defenses',
    es: 'Estimulación natural de las defensas de las plantas',
    pt: 'Estimulação natural das defesas das plantas'
  },
  'innovation.biocontrol.title': {
    fr: 'Biocontrôle vivant',
    en: 'Living biocontrol',
    es: 'Biocontrol vivo',
    pt: 'Biocontrole vivo'
  },
  'innovation.biocontrol.desc': {
    fr: 'Équilibre écologique et protection durable',
    en: 'Ecological balance and sustainable protection',
    es: 'Equilibrio ecológico y protección sostenible',
    pt: 'Equilíbrio ecológico e proteção sustentável'
  },
  'innovation.why.substances': {
    fr: 'Pourquoi les substances issues d\'insectes ?',
    en: 'Why substances from insects?',
    es: '¿Por qué sustancias de insectos?',
    pt: 'Por que substâncias de insetos?'
  },
  'innovation.why.organisms': {
    fr: 'Pourquoi les macro-organismes vivants ?',
    en: 'Why living macro-organisms?',
    es: '¿Por qué macro-organismos vivos?',
    pt: 'Por que macro-organismos vivos?'
  },
  'innovation.benefit1': {
    fr: 'Interagissent avec la plante qui réagit pour se défendre des stress de l\'environnement',
    en: 'Interact with plants that react to defend against environmental stress',
    es: 'Interactúan con plantas que reaccionan para defenderse del estrés ambiental',
    pt: 'Interagem com plantas que reagem para se defender do estresse ambiental'
  },
  'innovation.benefit2': {
    fr: 'Respectent le sol sans aucun résidu toxique',
    en: 'Respect the soil without any toxic residue',
    es: 'Respetan el suelo sin ningún residuo tóxico',
    pt: 'Respeitam o solo sem nenhum resíduo tóxico'
  },
  'innovation.benefit3': {
    fr: 'Améliorent le rendement',
    en: 'Improve yield',
    es: 'Mejoran el rendimiento',
    pt: 'Melhoram o rendimento'
  },
  'innovation.quote1': {
    fr: 'Les substances issues d\'insectes offrent une alternative écologique et performante aux produits chimiques de synthèse.',
    en: 'Substances from insects offer an ecological and efficient alternative to synthetic chemicals.',
    es: 'Las sustancias de insectos ofrecen una alternativa ecológica y eficiente a los químicos sintéticos.',
    pt: 'Substâncias de insetos oferecem uma alternativa ecológica e eficiente aos químicos sintéticos.'
  },
  'innovation.quote2': {
    fr: 'Les macro-organismes créent un écosystème équilibré, transformant les ressources naturelles en solutions durables pour l\'agriculture.',
    en: 'Macro-organisms create a balanced ecosystem, transforming natural resources into sustainable solutions for agriculture.',
    es: 'Los macro-organismos crean un ecosistema equilibrado, transformando los recursos naturales en soluciones sostenibles para la agricultura.',
    pt: 'Macro-organismos criam um ecossistema equilibrado, transformando recursos naturais em soluções sustentáveis para a agricultura.'
  },
  'innovation.stat1.desc': {
    fr: 'des cultures dépendent des insectes pour leur qualité et rendement',
    en: 'of crops depend on insects for their quality and yield',
    es: 'de los cultivos dependen de los insectos para su calidad y rendimiento',
    pt: 'das culturas dependem de insetos para sua qualidade e rendimento'
  },
  'innovation.stat2.desc': {
    fr: 'auxiliaires utiles recensés en France',
    en: 'useful auxiliaries recorded in France',
    es: 'auxiliares útiles registrados en Francia',
    pt: 'auxiliares úteis registrados na França'
  },
  'innovation.stat3.desc': {
    fr: 'individus actifs par m² en moyenne',
    en: 'active individuals per m² on average',
    es: 'individuos activos por m² en promedio',
    pt: 'indivíduos ativos por m² em média'
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
  },
  'production.technology.title': {
    fr: 'Technologies modernes',
    en: 'Modern technologies',
    es: 'Tecnologías modernas',
    pt: 'Tecnologias modernas'
  },
  'production.technology.desc': {
    fr: 'Équipements de pointe pour la production de biostimulants et solutions de biocontrôle',
    en: 'State-of-the-art equipment for the production of biostimulants and biocontrol solutions',
    es: 'Equipos de vanguardia para la producción de bioestimulantes y soluciones de biocontrol',
    pt: 'Equipamentos de ponta para a produção de bioestimulantes e soluções de biocontrole'
  },
  'production.environment.title': {
    fr: 'Respect de l\'environnement',
    en: 'Environmental respect',
    es: 'Respeto al medio ambiente',
    pt: 'Respeito ao meio ambiente'
  },
  'production.environment.desc': {
    fr: 'Processus de production éco-responsable et certifications qualité',
    en: 'Eco-responsible production process and quality certifications',
    es: 'Proceso de producción eco-responsable y certificaciones de calidad',
    pt: 'Processo de produção eco-responsável e certificações de qualidade'
  },
  'production.team.title': {
    fr: 'Équipe d\'experts',
    en: 'Team of experts',
    es: 'Equipo de expertos',
    pt: 'Equipe de especialistas'
  },
  'production.team.desc': {
    fr: 'Une équipe de spécialistes dédiée à l\'innovation et à la qualité',
    en: 'A team of specialists dedicated to innovation and quality',
    es: 'Un equipo de especialistas dedicado a la innovación y la calidad',
    pt: 'Uma equipe de especialistas dedicada à inovação e qualidade'
  },
  // Team section
  'team.title': {
    fr: 'Notre Équipe',
    en: 'Our Team',
    es: 'Nuestro Equipo',
    pt: 'Nossa Equipe'
  },
  'team.subtitle': {
    fr: 'Une équipe passionnée d\'experts en biotechnologie, agriculture, industrie et politiques agricoles',
    en: 'A passionate team of experts in biotechnology, agriculture, industry and agricultural policies',
    es: 'Un equipo apasionado de expertos en biotecnología, agricultura, industria y políticas agrícolas',
    pt: 'Uma equipe apaixonada de especialistas em biotecnologia, agricultura, indústria e políticas agrícolas'
  },
  'team.hover': {
    fr: 'Survolez les points sur la photo pour découvrir notre équipe',
    en: 'Hover over the points on the photo to discover our team',
    es: 'Pase el cursor sobre los puntos de la foto para descubrir nuestro equipo',
    pt: 'Passe o cursor sobre os pontos da foto para descobrir nossa equipe'
  },
  // Contact form
  'contact.title': {
    fr: 'Contactez-nous',
    en: 'Contact us',
    es: 'Contáctanos',
    pt: 'Entre em contato'
  },
  'contact.subtitle': {
    fr: 'Découvrez comment nos biosolutions peuvent transformer votre agriculture',
    en: 'Discover how our biosolutions can transform your agriculture',
    es: 'Descubra cómo nuestras biosoluciones pueden transformar su agricultura',
    pt: 'Descubra como nossas biosoluções podem transformar sua agricultura'
  },
  'contact.form.title': {
    fr: 'Parlez-nous de votre projet',
    en: 'Tell us about your project',
    es: 'Cuéntanos sobre tu proyecto',
    pt: 'Conte-nos sobre seu projeto'
  },
  'contact.form.firstName': {
    fr: 'Prénom',
    en: 'First name',
    es: 'Nombre',
    pt: 'Nome'
  },
  'contact.form.lastName': {
    fr: 'Nom',
    en: 'Last name',
    es: 'Apellido',
    pt: 'Sobrenome'
  },
  'contact.form.company': {
    fr: 'Entreprise',
    en: 'Company',
    es: 'Empresa',
    pt: 'Empresa'
  },
  'contact.form.subject': {
    fr: 'Sujet d\'intérêt',
    en: 'Subject of interest',
    es: 'Tema de interés',
    pt: 'Assunto de interesse'
  },
  'contact.form.subject.placeholder': {
    fr: 'Sélectionnez un sujet',
    en: 'Select a subject',
    es: 'Seleccionar un tema',
    pt: 'Selecione um assunto'
  },
  'contact.form.subject.booster': {
    fr: 'Booster',
    en: 'Booster',
    es: 'Potenciador',
    pt: 'Potencializador'
  },
  'contact.form.subject.biocontrol': {
    fr: 'Solutions de biocontrôle',
    en: 'Biocontrol solutions',
    es: 'Soluciones de biocontrol',
    pt: 'Soluções de biocontrole'
  },
  'contact.form.subject.pollination': {
    fr: 'Pollinisation',
    en: 'Pollination',
    es: 'Polinización',
    pt: 'Polinização'
  },
  'contact.form.subject.multiple': {
    fr: 'Plusieurs solutions',
    en: 'Multiple solutions',
    es: 'Múltiples soluciones',
    pt: 'Múltiplas soluções'
  },
  'contact.form.subject.info': {
    fr: 'Demande d\'information générale',
    en: 'General information request',
    es: 'Solicitud de información general',
    pt: 'Solicitação de informações gerais'
  },
  'contact.form.message': {
    fr: 'Message',
    en: 'Message',
    es: 'Mensaje',
    pt: 'Mensagem'
  },
  'contact.form.message.placeholder': {
    fr: 'Décrivez votre projet ou vos besoins...',
    en: 'Describe your project or needs...',
    es: 'Describe tu proyecto o necesidades...',
    pt: 'Descreva seu projeto ou necessidades...'
  },
  'contact.form.submit': {
    fr: 'Envoyer ma demande',
    en: 'Send my request',
    es: 'Enviar mi solicitud',
    pt: 'Enviar minha solicitação'
  },
  'contact.form.firstName.placeholder': {
    fr: 'Votre prénom',
    en: 'Your first name',
    es: 'Tu nombre',
    pt: 'Seu nome'
  },
  'contact.form.lastName.placeholder': {
    fr: 'Votre nom',
    en: 'Your last name',
    es: 'Tu apellido',
    pt: 'Seu sobrenome'
  },
  'contact.form.email.placeholder': {
    fr: 'votre.email@exemple.com',
    en: 'your.email@example.com',
    es: 'tu.email@ejemplo.com',
    pt: 'seu.email@exemplo.com'
  },
  'contact.form.company.placeholder': {
    fr: 'Nom de votre entreprise',
    en: 'Your company name',
    es: 'Nombre de tu empresa',
    pt: 'Nome da sua empresa'
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