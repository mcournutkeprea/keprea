import { createContext, useContext, useState, type ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'es' | 'pt' | 'de';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
    es: string;
    pt: string;
    de: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.solutions': {
    fr: 'Solutions',
    en: 'Solutions',
    es: 'Soluciones',
    pt: 'Soluções',
    de: 'Lösungen'
  },
  'nav.innovation': {
    fr: 'Innovation',
    en: 'Innovation',
    es: 'Innovación',
    pt: 'Inovação',
    de: 'Innovation'
  },
  'nav.production': {
    fr: 'Notre site de production',
    en: 'Our production site',
    es: 'Nuestro sitio de producción',
    pt: 'Nosso local de produção',
    de: 'Unser Produktionsstandort'
  },
  'nav.about': {
    fr: 'À propos',
    en: 'About',
    es: 'Acerca de',
    pt: 'Sobre',
    de: 'Über uns'
  },
  'nav.game': {
    fr: 'Pack jeu éducatif',
    en: 'Educational game pack',
    es: 'Pack juego educativo',
    pt: 'Pacote de jogo educativo',
    de: 'Lernspielpaket'
  },
  'nav.contact': {
    fr: 'Nous contacter',
    en: 'Contact us',
    es: 'Contáctanos',
    pt: 'Entre em contato',
    de: 'Kontakt'
  },
  // Hero section
  'hero.title': {
    fr: 'La nature au service de vos cultures',
    en: 'Nature at the service of your crops',
    es: 'La naturaleza al servicio de sus cultivos',
    pt: 'A natureza a trabalhar pelas suas culturas',
    de: 'Die Natur im Dienste Ihrer Kulturen'
  },
  'hero.subtitle': {
    fr: 'Protégez, stimulez et nourrissez vos cultures grâce à la puissance des insectes.',
    en: 'Protect, stimulate and nourish your crops with the power of insects.',
    es: 'Proteja, estimule y nutra sus cultivos con el poder de los insectos.',
    pt: 'Proteja, estimule e nutra as suas culturas com o poder dos insetos.',
    de: 'Schützen, stimulieren und nähren Sie Ihre Kulturen mit der Kraft von Insekten.'
  },
  'hero.cta': {
    fr: 'Découvrir notre portfolio',
    en: 'Discover our portfolio',
    es: 'Descubrir nuestro portafolio',
    pt: 'Descobrir nosso portfólio',
    de: 'Unser Portfolio entdecken'
  },
  'hero.stat1.value': {
    fr: '100%',
    en: '100%',
    es: '100%',
    pt: '100%',
    de: '100%'
  },
  'hero.stat1.label': {
    fr: 'Naturel',
    en: 'Natural',
    es: 'Natural',
    pt: 'Natural',
    de: 'Natürlich'
  },
  'hero.stat2.value': {
    fr: '10',
    en: '10',
    es: '10',
    pt: '10',
    de: '10'
  },
  'hero.stat2.label': {
    fr: 'solutions en développement',
    en: 'solutions in development',
    es: 'soluciones en desarrollo',
    pt: 'soluções em desenvolvimento',
    de: 'Lösungen in Entwicklung'
  },
  'hero.stat3.value': {
    fr: '✓',
    en: '✓',
    es: '✓',
    pt: '✓',
    de: '✓'
  },
  'hero.stat3.label': {
    fr: 'Prêt à l\'emploi',
    en: 'Ready to use',
    es: 'Listo para usar',
    pt: 'Pronto para usar',
    de: 'Sofort einsatzbereit'
  },
  // Solutions section
  'solutions.title': {
    fr: '4 gammes pour une agriculture sans compromis',
    en: '4 ranges for uncompromising agriculture',
    es: '4 gamas para una agricultura sin compromisos',
    pt: '4 linhas para uma agricultura sem compromissos',
    de: '4 Produktlinien für eine kompromisslose Landwirtschaft'
  },
  'solutions.subtitle': {
    fr: 'Issues de la biologie des insectes, nos solutions remplacent les intrants chimiques sans sacrifier votre rendement.',
    en: 'Derived from insect biology, our solutions replace chemical inputs without sacrificing your yield.',
    es: 'Basadas en la biología de los insectos, nuestras soluciones sustituyen los insumos químicos sin sacrificar el rendimiento.',
    pt: 'Baseadas na biologia dos insetos, nossas soluções substituem os insumos químicos sem sacrificar a produtividade.',
    de: 'Basierend auf der Insektenbiologie ersetzen unsere Lösungen chemische Inputs, ohne Ihren Ertrag zu beeinträchtigen.'
  },
  'solutions.subtitle2': {
    fr: 'Nous répondons aux défis majeurs des agriculteurs du monde entier :',
    en: 'We address the major challenges faced by farmers worldwide:',
    es: 'Respondemos a los principales desafíos de los agricultores de todo el mundo:',
    pt: 'Respondemos aos principais desafios enfrentados no campo em todo o mundo:',
    de: 'Wir begegnen den großen Herausforderungen der Landwirte weltweit:'
  },
  'solutions.challenges': {
    fr: 'compétitivité, productivité, préservation des sols, de la biodiversité et du climat',
    en: 'competitiveness, productivity, soil preservation, biodiversity and climate',
    es: 'competitividad, productividad, preservación de suelos, biodiversidad y clima',
    pt: 'competitividade, produtividade, preservação dos solos, biodiversidade e clima',
    de: 'Wettbewerbsfähigkeit, Produktivität, Bodenschutz, Biodiversität und Klima'
  },
  'solutions.approach': {
    fr: 'Pour cela, nous exploitons le potentiel des insectes pour créer des solutions agricoles durables, performantes et abordables. Notre approche scientifique et technique combine',
    en: 'To achieve this, we harness the potential of insects to create sustainable, efficient and affordable agricultural solutions. Our scientific and technical approach combines',
    es: 'Para ello, aprovechamos el potencial de los insectos para crear soluciones agrícolas sostenibles, eficientes y asequibles. Nuestro enfoque científico y técnico combina',
    pt: 'Para isso, aproveitamos o potencial dos insetos para criar soluções agrícolas sustentáveis, eficientes e acessíveis. Nossa abordagem científica e técnica combina',
    de: 'Dafür nutzen wir das Potenzial von Insekten, um nachhaltige, leistungsstarke und erschwingliche Agrarlösungen zu schaffen. Unser wissenschaftlich-technischer Ansatz verbindet'
  },
  'solutions.expertise': {
    fr: 'savoir faire artisanal, maîtrise de la production et compétences agronomiques',
    en: 'artisanal expertise, production mastery and agronomic skills',
    es: 'saber hacer artesanal, dominio de la producción y competencias agronómicas',
    pt: 'saber-fazer artesanal, excelência produtiva e competências agronômicas',
    de: 'handwerkliches Know-how, Produktionsbeherrschung und agronomische Kompetenz'
  },
  'solutions.forFarmers': {
    fr: 'pour répondre aux besoins des agriculteurs.',
    en: 'to meet the needs of farmers.',
    es: 'para satisfacer las necesidades de los agricultores.',
    pt: 'para atender às necessidades dos agricultores.',
    de: 'um den Bedürfnissen der Landwirte gerecht zu werden.'
  },
  // Solutions cards
  'solutions.bioprotection.title': {
    fr: 'Bioprotection',
    en: 'Bioprotection',
    es: 'Bioprotección',
    pt: 'Bioproteção',
    de: 'Bioschutz'
  },
  'solutions.bioprotection.subtitle': {
    fr: 'Protéger vos cultures avec le vivant',
    en: 'Protect your crops with living organisms',
    es: 'Proteger sus cultivos con seres vivos',
    pt: 'Proteger suas culturas com seres vivos',
    de: 'Schützen Sie Ihre Kulturen mit Lebewesen'
  },
  'solutions.bioprotection.pests': {
    fr: 'Contre les',
    en: 'Against',
    es: 'Contra',
    pt: 'Controle',
    de: 'Gegen'
  },
  'solutions.bioprotection.pestsList': {
    fr: 'pucerons, la pyrale, la cochenille',
    en: 'aphids, corn borer, scale insects',
    es: 'pulgones, la polilla, la cochinilla',
    pt: 'pulgões, broca, cochonilhas e outras pragas.',
    de: 'Blattläuse, Maiszünsler, Schildläuse'
  },
  'solutions.bioprotection.innovation': {
    fr: 'Solutions d\'application innovantes pour une meilleure performance',
    en: 'Innovative application solutions for better performance',
    es: 'Soluciones de aplicación innovadoras para un mejor rendimiento',
    pt: 'Tecnologias de aplicação inovadoras para máximo desempenho.',
    de: 'Innovative Anwendungslösungen für bessere Leistung'
  },
  'solutions.biopesticides.title': {
    fr: 'Biopesticides',
    en: 'Biopesticides',
    es: 'Biopesticidas',
    pt: 'Biopesticidas',
    de: 'Biopestizide'
  },
  'solutions.biopesticides.subtitle': {
    fr: 'Solutions écologiques innovantes',
    en: 'Innovative ecological solutions',
    es: 'Soluciones ecológicas innovadoras',
    pt: 'Soluções ecológicas inovadoras',
    de: 'Innovative ökologische Lösungen'
  },
  'solutions.biopesticides.molecules': {
    fr: 'Extraits des',
    en: 'Extracts of',
    es: 'Extractos de',
    pt: 'Moléculas e extratos naturais para',
    de: 'Extrakte von'
  },
  'solutions.biopesticides.protection': {
    fr: 'molécules de protection',
    en: 'protective molecules',
    es: 'moléculas de protección',
    pt: 'proteção',
    de: 'Schutzmolekülen'
  },
  'solutions.biopesticides.agents': {
    fr: 'Agents actifs naturels',
    en: 'Natural active agents',
    es: 'Agentes activos naturales',
    pt: 'Ingredientes ativos de origem natural',
    de: 'Natürliche Wirkstoffe'
  },
  'solutions.boosters.title': {
    fr: 'Boosters',
    en: 'Boosters',
    es: 'Potenciadores',
    pt: 'Bioestimulante',
    de: 'Booster'
  },
  'solutions.boosters.subtitle': {
    fr: 'Activateur de sol et résistance aux stress',
    en: 'Soil activator and stress resistance',
    es: 'Activador de suelo y resistencia al estrés',
    pt: 'Ativador de solo e resistência ao estresse',
    de: 'Bodenaktivator und Stressresistenz'
  },
  'solutions.boosters.polypeptides': {
    fr: 'Riche en',
    en: 'Rich in',
    es: 'Rico en',
    pt: 'Rico em',
    de: 'Reich an'
  },
  'solutions.boosters.substances': {
    fr: 'Extraits actifs',
    en: 'Active extracts',
    es: 'Extractos activos',
    pt: 'Extratos bioativos',
    de: 'Aktive Extrakte'
  },
  'solutions.biofertilisant.title': {
    fr: 'Biofertilisant',
    en: 'Biofertilizer',
    es: 'Biofertilizante',
    pt: 'Biofertilizante',
    de: 'Biodünger'
  },
  'solutions.biofertilisant.subtitle': {
    fr: 'Nutrition optimale des cultures',
    en: 'Optimal crop nutrition',
    es: 'Nutrición óptima de cultivos',
    pt: 'Nutrição completa para suas culturas',
    de: 'Optimale Pflanzenernährung'
  },
  'solutions.biofertilisant.organic': {
    fr: 'Riche en matière organique',
    en: 'Rich in organic matter',
    es: 'Rico en materia orgánica',
    pt: 'Rico em matéria orgânica',
    de: 'Reich an organischer Substanz'
  },
  'solutions.biofertilisant.npk': {
    fr: 'Concentration équilibrée en NPK',
    en: 'Balanced NPK concentration',
    es: 'Concentración equilibrada de NPK',
    pt: 'Equilíbrio de NPK para melhor desempenho',
    de: 'Ausgewogene NPK-Konzentration'
  },
  // Innovation section
  'innovation.title': {
    fr: 'L\'innovation par les insectes',
    en: 'Innovation through insects',
    es: 'Innovación a través de insectos',
    pt: 'Inovação através de insetos',
    de: 'Innovation durch Insekten'
  },
  'innovation.substances.question': {
    fr: 'Pourquoi protéger vos cultures avec des extraits d\'insectes?',
    en: 'Why protect your crops with insect extracts?',
    es: '¿Por qué proteger sus cultivos con extractos de insectos?',
    pt: 'Por que proteger suas culturas com extratos de insetos?',
    de: 'Warum Ihre Kulturen mit Insektenextrakten schützen?'
  },
  'innovation.biocontrol.question': {
    fr: 'Pourquoi protéger vos cultures avec des insectes auxiliaires?',
    en: 'Why protect your crops with beneficial insects?',
    es: '¿Por qué proteger sus cultivos con insectos auxiliares?',
    pt: 'Por que proteger suas culturas com insetos auxiliares?',
    de: 'Warum Ihre Kulturen mit Nützlingen schützen?'
  },
  // Infographic - Substances
  'innovation.infographic.substances.title': {
    fr: 'Des extraits d\'insectes pour l\'agriculture',
    en: 'Insect extracts for agriculture',
    es: 'Extractos de insectos para la agricultura',
    pt: 'Extratos de insetos para a agricultura',
    de: 'Insektenextrakte für die Landwirtschaft'
  },
  'innovation.infographic.substances.benefit1': {
    fr: 'Interagissent rapidement avec la plante et le sol, naturellement',
    en: 'Interact quickly with the plant and soil, naturally',
    es: 'Interactúan rápidamente con la planta y el suelo, naturalmente',
    pt: 'Interagem rapidamente com a planta e o solo, naturalmente',
    de: 'Interagieren schnell und natürlich mit Pflanze und Boden'
  },
  'innovation.infographic.substances.benefit2': {
    fr: 'Respectent le sol sans aucun résidu toxique',
    en: 'Respect the soil without any toxic residue',
    es: 'Respetan el suelo sin ningún residuo tóxico',
    pt: 'Respeitam o solo sem nenhum resíduo tóxico',
    de: 'Schonen den Boden ohne toxische Rückstände'
  },
  'innovation.infographic.substances.benefit3': {
    fr: 'Améliorent le rendement',
    en: 'Improve yield',
    es: 'Mejoran el rendimiento',
    pt: 'Melhoram o rendimento',
    de: 'Verbessern den Ertrag'
  },
  // Infographic - Biocontrol
  'innovation.infographic.biocontrol.title': {
    fr: 'Biocontrôle vivant pour les cultures',
    en: 'Living biocontrol for crops',
    es: 'Biocontrol vivo para los cultivos',
    pt: 'Biocontrole vivo para as culturas',
    de: 'Lebende Biokontrolle für Kulturen'
  },
  'innovation.infographic.biocontrol.stat1.value': {
    fr: '84%',
    en: '84%',
    es: '84%',
    pt: '84%',
    de: '84%'
  },
  'innovation.infographic.biocontrol.stat1.label': {
    fr: 'des cultures dépendent des insectes pour leur qualité et rendement',
    en: 'of crops depend on insects for their quality and yield',
    es: 'de los cultivos dependen de los insectos para su calidad y rendimiento',
    pt: 'das culturas dependem dos insetos para sua qualidade e rendimento',
    de: 'der Kulturen hängen für Qualität und Ertrag von Insekten ab'
  },
  'innovation.infographic.biocontrol.stat2.value': {
    fr: '5500',
    en: '5500',
    es: '5500',
    pt: '5500',
    de: '5500'
  },
  'innovation.infographic.biocontrol.stat2.label': {
    fr: 'auxiliaires utiles recensés en France',
    en: 'useful auxiliaries recorded in France',
    es: 'auxiliares útiles registrados en Francia',
    pt: 'auxiliares úteis registrados na França',
    de: 'nützliche Helfer in Frankreich erfasst'
  },
  'innovation.infographic.biocontrol.stat3.value': {
    fr: '10 000',
    en: '10,000',
    es: '10 000',
    pt: '10 000',
    de: '10.000'
  },
  'innovation.infographic.biocontrol.stat3.label': {
    fr: 'individus actifs par m² en moyenne',
    en: 'active individuals per m² on average',
    es: 'individuos activos por m² en promedio',
    pt: 'indivíduos ativos por m² em média',
    de: 'aktive Individuen pro m² im Durchschnitt'
  },
  // Production section
  'production.title': {
    fr: 'Notre site de production',
    en: 'Our production site',
    es: 'Nuestro sitio de producción',
    pt: 'Nosso local de produção',
    de: 'Unser Produktionsstandort'
  },
  'production.subtitle': {
    fr: 'Découvrez notre site de production moderne situé à Dole, en France, où nous développons et produisons nos biosolutions',
    en: 'Discover our modern production site located in Dole, France, where we develop and produce our biosolutions',
    es: 'Descubra nuestro moderno sitio de producción ubicado en Dole, Francia, donde desarrollamos y producimos nuestras biosoluciones',
    pt: 'Descubra a nossa moderna unidade de produção, localizada em Dole, França, onde desenvolvemos e produzimos as nossas biosoluções.',
    de: 'Entdecken Sie unseren modernen Produktionsstandort in Dole, Frankreich, wo wir unsere Biolösungen entwickeln und herstellen'
  },
  'production.excellence': {
    fr: 'Un site d\'excellence',
    en: 'A site of excellence',
    es: 'Un sitio de excelencia',
    pt: 'Um local de excelência',
    de: 'Ein Standort der Exzellenz'
  },
  'production.location.title': {
    fr: 'Localisation stratégique',
    en: 'Strategic location',
    es: 'Ubicación estratégica',
    pt: 'Localização estratégica',
    de: 'Strategische Lage'
  },
  'production.location.desc': {
    fr: 'Situé sur la ville de Dole, notre site est à seulement 2 heures de Paris, Bâle, Genève et Lyon, au cœur d\'un important bassin céréalier et viticole français.',
    en: 'Located in the city of Dole, our site is only 2 hours from Paris, Basel, Geneva and Lyon, in the heart of an important French cereal and wine-growing basin.',
    es: 'Situado en la ciudad de Dole, nuestro sitio está a solo 2 horas de París, Basilea, Ginebra y Lyon, en el corazón de una importante cuenca cerealera y vitícola francesa.',
    pt: 'Localizado na cidade de Dole, nossa unidade fica a apenas 2 horas de Paris, Basileia, Genebra e Lyon, no coração de uma importante região produtora de cereais e cultivo de uva para vinho na França.',
    de: 'In der Stadt Dole gelegen, ist unser Standort nur 2 Stunden von Paris, Basel, Genf und Lyon entfernt, im Herzen eines wichtigen französischen Getreide- und Weinanbaugebiets.'
  },
  'production.technology.title': {
    fr: 'Technologies modernes',
    en: 'Modern technologies',
    es: 'Tecnologías modernas',
    pt: 'Tecnologias modernas',
    de: 'Moderne Technologien'
  },
  'production.technology.desc': {
    fr: 'Équipements de pointe pour la production de solutions de bioprotection et de boosters',
    en: 'State-of-the-art equipment for the production of bioprotection solutions and boosters',
    es: 'Equipos de vanguardia para la producción de soluciones de bioprotección y potenciadores',
    pt: 'Equipamentos de ponta para a produção de soluções de bioproteção e potenciadores',
    de: 'Modernste Ausrüstung für die Herstellung von Bioschutzlösungen und Boostern'
  },
  'production.environment.title': {
    fr: 'Respect de l\'environnement',
    en: 'Environmental respect',
    es: 'Respeto al medio ambiente',
    pt: 'Respeito ao meio ambiente',
    de: 'Umweltschutz'
  },
  'production.environment.desc': {
    fr: 'Processus de production éco-responsable et certifications qualité',
    en: 'Eco-responsible production process and quality certifications',
    es: 'Proceso de producción eco-responsable y certificaciones de calidad',
    pt: 'Processo de produção eco-responsável e certificações de qualidade',
    de: 'Umweltbewusster Produktionsprozess und Qualitätszertifizierungen'
  },
  'production.team.title': {
    fr: 'Équipe d\'experts',
    en: 'Team of experts',
    es: 'Equipo de expertos',
    pt: 'Equipe de especialistas',
    de: 'Expertenteam'
  },
  'production.team.desc': {
    fr: 'Une équipe de spécialistes dédiée à l\'innovation et à la qualité',
    en: 'A team of specialists dedicated to innovation and quality',
    es: 'Un equipo de especialistas dedicado a la innovación y la calidad',
    pt: 'Uma equipe de especialistas dedicada à inovação e qualidade',
    de: 'Ein Spezialistenteam für Innovation und Qualität'
  },
  'production.process.title': {
    fr: 'De la larve au champ',
    en: 'From larva to field',
    es: 'De la larva al campo',
    pt: 'Da larva ao campo',
    de: 'Von der Larve aufs Feld'
  },
  'production.process.step1': {
    fr: 'Élevage d\'insectes auxiliaires',
    en: 'Beneficial Insect Breeding',
    es: 'Cría de insectos auxiliares',
    pt: 'Criação de insetos auxiliares',
    de: 'Nützlingszucht'
  },
  'production.process.step2': {
    fr: 'Collecte de Co-produits',
    en: 'Co-product Collection',
    es: 'Recolección de Co-productos',
    pt: 'Coleta de Co-produtos',
    de: 'Sammlung von Nebenprodukten'
  },
  'production.process.step3': {
    fr: 'Préparation ou transformation',
    en: 'Preparation or transformation',
    es: 'Preparación o transformación',
    pt: 'Preparação ou transformação',
    de: 'Aufbereitung oder Verarbeitung'
  },
  'production.process.step4': {
    fr: 'Packaging',
    en: 'Packaging',
    es: 'Envasado',
    pt: 'Embalagem',
    de: 'Verpackung'
  },
  'production.process.step5': {
    fr: 'Conseil d\'utilisation en plein champ',
    en: 'Field Application Advice',
    es: 'Consejo de uso en campo',
    pt: 'Orientação de uso no campo',
    de: 'Anwendungsberatung im Freiland'
  },
  'production.process.transport': {
    fr: 'Transport',
    en: 'Transport',
    es: 'Transporte',
    pt: 'Transporte',
    de: 'Transport'
  },
  // About section
  'about.title': {
    fr: 'À propos de Keprea',
    en: 'About Keprea',
    es: 'Acerca de Keprea',
    pt: 'Sobre a Keprea',
    de: 'Über Keprea'
  },
  'about.subtitle': {
    fr: 'Producteurs de biosolutions Made in France',
    en: 'Producers of biosolutions Made in France',
    es: 'Productores de biosoluciones Made in France',
    pt: 'Produtores de biosoluções Made in France',
    de: 'Hersteller von Biolösungen Made in France'
  },
  'about.history.title': {
    fr: 'Notre Histoire',
    en: 'Our History',
    es: 'Nuestra Historia',
    pt: 'Nossa História',
    de: 'Unsere Geschichte'
  },
  'about.history.p1': {
    fr: 'Fondée en',
    en: 'Founded in',
    es: 'Fundada en',
    pt: 'Fundada em',
    de: 'Gegründet im Jahr'
  },
  'about.history.p1.year': {
    fr: '2025',
    en: '2025',
    es: '2025',
    pt: '2025',
    de: '2025'
  },
  'about.history.p1.by': {
    fr: 'par',
    en: 'by',
    es: 'por',
    pt: 'por',
    de: 'von'
  },
  'about.history.p1.associates': {
    fr: '7 associés experts',
    en: '7 expert associates',
    es: '7 socios expertos',
    pt: 'sete sócios especialistas',
    de: '7 Expertengründern'
  },
  'about.history.p1.roles': {
    fr: '(agriculteurs, entomologistes, agronomes et entrepreneurs)',
    en: '(farmers, entomologists, agronomists and entrepreneurs)',
    es: '(agricultores, entomólogos, agrónomos y empresarios)',
    pt: '(agricultores, entomologistas, agrônomos e empresários)',
    de: '(Landwirte, Entomologen, Agronomen und Unternehmer)'
  },
  'about.history.p1.vision.intro': {
    fr: 'Keprea est née d\'une vision commune :',
    en: 'Keprea was born from a common vision:',
    es: 'Keprea nació de una visión común:',
    pt: 'a Keprea nasceu de uma visão comum:',
    de: 'Keprea entstand aus einer gemeinsamen Vision:'
  },
  'about.history.p1.vision.bold': {
    fr: 'que le vivant revienne au cœur de la gestion de la ferme.',
    en: 'bringing life back to the heart of farm management.',
    es: 'que lo vivo vuelva al corazón de la gestión de la granja.',
    pt: 'trazer a vida de volta ao centro da gestão da fazenda.',
    de: 'das Lebendige wieder in den Mittelpunkt der Betriebsführung zu stellen.'
  },
  'about.history.p2.location': {
    fr: 'Implantée à proximité de',
    en: 'Located near',
    es: 'Ubicada cerca de',
    pt: 'Localizada perto de',
    de: 'In der Nähe von'
  },
  'about.history.p2.city': {
    fr: 'Dole dans le Jura',
    en: 'Dole in the Jura',
    es: 'Dole en el Jura',
    pt: 'Dole no Jura',
    de: 'Dole im Jura'
  },
  'about.history.p2.site': {
    fr: ', notre site de production de',
    en: ', our production site of',
    es: ', nuestro sitio de producción de',
    pt: ', a nossa unidade de produção, com',
    de: ', unser Produktionsstandort von'
  },
  'about.history.p2.size': {
    fr: '3 000 m²',
    en: '3,000 m²',
    es: '3.000 m²',
    pt: '3.000 m²',
    de: '3.000 m²'
  },
  'about.history.p2.develop': {
    fr: 'nous permet de développer une gamme complète de solutions pour les agriculteurs : solutions de',
    en: 'allows us to develop a complete range of solutions for farmers: solutions of',
    es: 'nos permite desarrollar una gama completa de soluciones para los agricultores: soluciones de',
    pt: ', nos permite desenvolver uma gama completa de soluções para os agricultores: soluções de',
    de: 'ermöglicht uns die Entwicklung eines kompletten Lösungsportfolios für Landwirte: Lösungen für'
  },
  'about.history.p2.bioprotection': {
    fr: 'bioprotection',
    en: 'bioprotection',
    es: 'bioprotección',
    pt: 'bioproteção',
    de: 'Bioschutz'
  },
  'about.history.p2.rest': {
    fr: 'performantes et abordables,',
    en: 'that are efficient and affordable,',
    es: 'eficientes y asequibles,',
    pt: 'eficientes e acessíveis,',
    de: 'die leistungsstark und erschwinglich sind,'
  },
  'about.history.p2.boosters': {
    fr: 'boosters',
    en: 'boosters',
    es: 'potenciadores',
    pt: 'potenciadores',
    de: 'Booster'
  },
  'about.history.p2.activators': {
    fr: 'et activateurs de sols pour la résistance des cultures contre les stress abiotiques,',
    en: 'and soil activators for crop resistance against abiotic stress,',
    es: 'y activadores de suelo para la resistencia de los cultivos contra el estrés abiótico,',
    pt: 'e ativadores de solo para reforçar a resistência das culturas ao estresse abiótico,',
    de: 'und Bodenaktivatoren für die Widerstandsfähigkeit der Kulturen gegen abiotischen Stress,'
  },
  'about.history.p2.biofertilisants': {
    fr: 'biofertilisants',
    en: 'biofertilizers',
    es: 'biofertilizantes',
    pt: 'biofertilizantes',
    de: 'Biodünger'
  },
  'about.history.p2.biofertilisants.desc': {
    fr: 'pour régénérer les sols et nourrir les cultures. Toutes ces solutions étant utilisables en',
    en: 'to regenerate soils and nourish crops. All these solutions can be used in',
    es: 'para regenerar los suelos y nutrir los cultivos. Todas estas soluciones se pueden usar en',
    pt: 'para regenerar os solos e nutrir as culturas. Todas essas soluções podem ser utilizadas na',
    de: 'zur Bodenregeneration und Pflanzenernährung. All diese Lösungen sind einsetzbar im'
  },
  'about.history.p2.organic': {
    fr: 'agriculture biologique',
    en: 'organic farming',
    es: 'agricultura ecológica',
    pt: 'agricultura orgânica.',
    de: 'ökologischen Landbau'
  },
  'about.history.p3': {
    fr: 'Notre expertise en',
    en: 'Our expertise in',
    es: 'Nuestra experiencia en',
    pt: 'Nossa experiência em',
    de: 'Unsere Expertise in'
  },
  'about.history.p3.process': {
    fr: 'biofabrique et agriculture',
    en: 'biomanufacturing and agriculture',
    es: 'biofábrica y agricultura',
    pt: 'biofábrica e agricultura',
    de: 'Bioproduktion und Landwirtschaft'
  },
  'about.history.p3.guarantee': {
    fr: 'nous permet de garantir des produits de qualité stable et reproductible, répondant aux exigences les plus strictes du monde agricole.',
    en: 'allows us to guarantee products of stable and reproducible quality, meeting the strictest requirements of the agricultural world.',
    es: 'nos permite garantizar productos de calidad estable y reproducible, que cumplen con los requisitos más estrictos del mundo agrícola.',
    pt: 'garante produtos de qualidade, que atendem aos requisitos mais rigorosos do setor agrícola.',
    de: 'ermöglicht es uns, Produkte von stabiler und reproduzierbarer Qualität zu garantieren, die den strengsten Anforderungen der Landwirtschaft entsprechen.'
  },
  // About values
  'about.value1.title': {
    fr: 'Innovation Naturelle',
    en: 'Natural Innovation',
    es: 'Innovación Natural',
    pt: 'Inovação Natural',
    de: 'Natürliche Innovation'
  },
  'about.value1.desc': {
    fr: 'Nous développons des solutions biosourcées issues d\'insectes pour une agriculture durable et respectueuse de l\'environnement.',
    en: 'We develop bio-based solutions from insects for sustainable and environmentally friendly agriculture.',
    es: 'Desarrollamos soluciones de base biológica derivadas de insectos para una agricultura sostenible y respetuosa con el medio ambiente.',
    pt: 'Desenvolvemos soluções de base biológica derivadas de insetos para uma agricultura sustentável e respeitadora do meio ambiente.',
    de: 'Wir entwickeln biobasierte Lösungen aus Insekten für eine nachhaltige und umweltfreundliche Landwirtschaft.'
  },
  'about.value2.title': {
    fr: 'Excellence Scientifique',
    en: 'Scientific Excellence',
    es: 'Excelencia Científica',
    pt: 'Excelência Científica',
    de: 'Wissenschaftliche Exzellenz'
  },
  'about.value2.desc': {
    fr: 'Notre équipe R&D combine expertise entomologique et agronomique pour créer des produits efficaces et homologués.',
    en: 'Our R&D team combines entomological and agronomic expertise to create effective and approved products.',
    es: 'Nuestro equipo de I+D combina experiencia entomológica y agronómica para crear productos eficaces y homologados.',
    pt: 'Nossa equipe de P&D combina experiência entomológica e agronômica para criar produtos eficazes e aprovados.',
    de: 'Unser F&E-Team verbindet entomologische und agronomische Expertise, um wirksame und zugelassene Produkte zu entwickeln.'
  },
  'about.value3.title': {
    fr: 'Partenariat Agricole',
    en: 'Agricultural Partnership',
    es: 'Asociación Agrícola',
    pt: 'Parceria Agrícola',
    de: 'Landwirtschaftliche Partnerschaft'
  },
  'about.value3.desc': {
    fr: 'Nous accompagnons les agriculteurs dans leur transition vers des pratiques plus durables avec des solutions adaptées.',
    en: 'We support farmers in their transition to more sustainable practices with tailored solutions.',
    es: 'Acompañamos a los agricultores en su transición hacia prácticas más sostenibles con soluciones adaptadas.',
    pt: 'Acompanhamos os agricultores em sua transição para práticas mais sustentáveis com soluções adaptadas.',
    de: 'Wir begleiten Landwirte bei der Umstellung auf nachhaltigere Praktiken mit maßgeschneiderten Lösungen.'
  },
  'about.value4.title': {
    fr: 'Impact Mesurable',
    en: 'Measurable Impact',
    es: 'Impacto Medible',
    pt: 'Impacto Mensurável',
    de: 'Messbare Wirkung'
  },
  'about.value4.desc': {
    fr: 'Des résultats concrets et quantifiables sur le terrain : réduction des intrants chimiques, amélioration des rendements et protection de la biodiversité.',
    en: 'Concrete, measurable results in the field: reduction of chemical inputs, improved yields and protection of biodiversity.',
    es: 'Resultados concretos y cuantificables en el campo: reducción de insumos químicos, mejora de los rendimientos y protección de la biodiversidad.',
    pt: 'Resultados concretos e quantificáveis no campo: redução de insumos químicos, melhoria dos rendimentos e proteção da biodiversidade.',
    de: 'Konkrete und messbare Ergebnisse im Feld: Reduzierung chemischer Betriebsmittel, Ertragssteigerung und Schutz der Biodiversität.'
  },
  // Team section
  'team.title': {
    fr: 'Notre Équipe',
    en: 'Our Team',
    es: 'Nuestro Equipo',
    pt: 'Nossa Equipe',
    de: 'Unser Team'
  },
  'team.subtitle': {
    fr: 'Une équipe passionnée d\'experts en agriculture, industrie et politiques agricoles',
    en: 'A passionate team of experts in biotechnology, agriculture, industry and agricultural policies',
    es: 'Un equipo apasionado de expertos en biotecnología, agricultura, industria y políticas agrícolas',
    pt: 'Uma equipe apaixonada de especialistas em biotecnologia, agricultura, indústria e políticas agrícolas',
    de: 'Ein leidenschaftliches Expertenteam für Landwirtschaft, Industrie und Agrarpolitik'
  },
  'team.hover': {
    fr: 'Survolez les points sur la photo pour découvrir notre équipe',
    en: 'Hover over the points on the photo to discover our team',
    es: 'Pase el cursor sobre los puntos de la foto para descubrir nuestro equipo',
    pt: 'Passe o cursor sobre os pontos da foto para descobrir nossa equipe',
    de: 'Fahren Sie über die Punkte auf dem Foto, um unser Team zu entdecken'
  },
  'team.photoNote': {
    fr: 'Photo à faire ensemble le 15 OCT',
    en: 'Photo to take together on OCT 15',
    es: 'Foto para tomar juntos el 15 de OCT',
    pt: 'Foto para tirar juntos em 15 de OUT',
    de: 'Gemeinsames Foto am 15. OKT'
  },
  // Contact form
  'contact.title': {
    fr: 'Contactez-nous',
    en: 'Contact us',
    es: 'Contáctanos',
    pt: 'Entre em contato',
    de: 'Kontaktieren Sie uns'
  },
  'contact.subtitle': {
    fr: 'Découvrez comment nos biosolutions peuvent transformer votre agriculture',
    en: 'Discover how our biosolutions can transform your agriculture',
    es: 'Descubra cómo nuestras biosoluciones pueden transformar su agricultura',
    pt: 'Descubra como nossas biosoluções podem transformar sua agricultura',
    de: 'Entdecken Sie, wie unsere Biolösungen Ihre Landwirtschaft verändern können'
  },
  'contact.form.title': {
    fr: 'Parlez-nous de votre projet',
    en: 'Tell us about your project',
    es: 'Cuéntanos sobre tu proyecto',
    pt: 'Conte-nos sobre seu projeto',
    de: 'Erzählen Sie uns von Ihrem Projekt'
  },
  'contact.form.firstName': {
    fr: 'Prénom',
    en: 'First name',
    es: 'Nombre',
    pt: 'Nome',
    de: 'Vorname'
  },
  'contact.form.lastName': {
    fr: 'Nom',
    en: 'Last name',
    es: 'Apellido',
    pt: 'Sobrenome',
    de: 'Nachname'
  },
  'contact.form.company': {
    fr: 'Entreprise',
    en: 'Company',
    es: 'Empresa',
    pt: 'Empresa',
    de: 'Unternehmen'
  },
  'contact.form.subject': {
    fr: 'Sujet d\'intérêt',
    en: 'Subject of interest',
    es: 'Tema de interés',
    pt: 'Assunto de interesse',
    de: 'Interessengebiet'
  },
  'contact.form.subject.placeholder': {
    fr: 'Sélectionnez un sujet',
    en: 'Select a subject',
    es: 'Seleccionar un tema',
    pt: 'Selecione um assunto',
    de: 'Thema auswählen'
  },
  'contact.form.subject.biofertilisant': {
    fr: 'Biofertilisant et Boosters',
    en: 'Biofertilizer and Boosters',
    es: 'Biofertilizante y Potenciadores',
    pt: 'Biofertilizante e Potenciadores',
    de: 'Biodünger und Booster'
  },
  'contact.form.subject.biopesticides': {
    fr: 'Biopesticides',
    en: 'Biopesticides',
    es: 'Biopesticidas',
    pt: 'Biopesticidas',
    de: 'Biopestizide'
  },
  'contact.form.subject.biocontrol': {
    fr: 'Biocontrôle',
    en: 'Biocontrol',
    es: 'Biocontrol',
    pt: 'Biocontrole',
    de: 'Biokontrolle'
  },
  'contact.form.subject.info': {
    fr: 'Demande d\'information générale',
    en: 'General information request',
    es: 'Solicitud de información general',
    pt: 'Solicitação de informações gerais',
    de: 'Allgemeine Informationsanfrage'
  },
  'contact.form.message': {
    fr: 'Message',
    en: 'Message',
    es: 'Mensaje',
    pt: 'Mensagem',
    de: 'Nachricht'
  },
  'contact.form.message.placeholder': {
    fr: 'Décrivez votre projet ou vos besoins...',
    en: 'Describe your project or needs...',
    es: 'Describe tu proyecto o necesidades...',
    pt: 'Descreva seu projeto ou necessidades...',
    de: 'Beschreiben Sie Ihr Projekt oder Ihre Anforderungen...'
  },
  'contact.form.submit': {
    fr: 'Envoyer ma demande',
    en: 'Send my request',
    es: 'Enviar mi solicitud',
    pt: 'Enviar minha solicitação',
    de: 'Anfrage senden'
  },
  'contact.form.submitting': {
    fr: 'Envoi en cours...',
    en: 'Sending...',
    es: 'Enviando...',
    pt: 'Enviando...',
    de: 'Wird gesendet...'
  },
  'contact.form.firstName.placeholder': {
    fr: 'Votre prénom',
    en: 'Your first name',
    es: 'Tu nombre',
    pt: 'Seu nome',
    de: 'Ihr Vorname'
  },
  'contact.form.lastName.placeholder': {
    fr: 'Votre nom',
    en: 'Your last name',
    es: 'Tu apellido',
    pt: 'Seu sobrenome',
    de: 'Ihr Nachname'
  },
  'contact.form.email.placeholder': {
    fr: 'votre.email@exemple.com',
    en: 'your.email@example.com',
    es: 'tu.email@ejemplo.com',
    pt: 'seu.email@exemplo.com',
    de: 'ihre.email@beispiel.com'
  },
  'contact.form.company.placeholder': {
    fr: 'Nom de votre entreprise',
    en: 'Your company name',
    es: 'Nombre de tu empresa',
    pt: 'Nome da sua empresa',
    de: 'Ihr Firmenname'
  },
  // Toast messages
  'toast.error': {
    fr: 'Erreur',
    en: 'Error',
    es: 'Error',
    pt: 'Erro',
    de: 'Fehler'
  },
  'toast.error.required': {
    fr: 'Veuillez remplir tous les champs obligatoires',
    en: 'Please fill in all required fields',
    es: 'Por favor complete todos los campos obligatorios',
    pt: 'Por favor preencha todos os campos obrigatórios',
    de: 'Bitte füllen Sie alle Pflichtfelder aus'
  },
  'toast.success': {
    fr: 'Message envoyé !',
    en: 'Message sent!',
    es: '¡Mensaje enviado!',
    pt: 'Mensagem enviada!',
    de: 'Nachricht gesendet!'
  },
  'toast.success.desc': {
    fr: 'Nous avons bien reçu votre message et vous répondrons rapidement.',
    en: 'We have received your message and will respond shortly.',
    es: 'Hemos recibido tu mensaje y te responderemos pronto.',
    pt: 'Recebemos sua mensagem e responderemos em breve.',
    de: 'Wir haben Ihre Nachricht erhalten und werden Ihnen in Kürze antworten.'
  },
  'toast.error.send': {
    fr: 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.',
    en: 'An error occurred while sending the message. Please try again.',
    es: 'Se produjo un error al enviar el mensaje. Por favor, inténtelo de nuevo.',
    pt: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.',
    de: 'Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'
  },
  // Educational Game section
  'game.title': {
    fr: 'AgVengers - Le Jeu Éducatif',
    en: 'AgVengers - The Educational Game',
    es: 'AgVengers - El Juego Educativo',
    pt: 'AgVengers - O Jogo Educativo',
    de: 'AgVengers - Das Lernspiel'
  },
  'game.subtitle': {
    fr: 'Découvrez le monde fascinant des insectes auxiliaires et ravageurs à travers notre jeu de cartes éducatif et ludique',
    en: 'Discover the fascinating world of beneficial and pest insects through our educational and fun card game',
    es: 'Descubre el fascinante mundo de los insectos beneficiosos y plagas a través de nuestro juego de cartas educativo y divertido',
    pt: 'Descubra o fascinante mundo dos insetos benéficos e pragas através do nosso jogo de cartas educativo e divertido',
    de: 'Entdecken Sie die faszinierende Welt der Nützlinge und Schädlinge durch unser lehrreiches und unterhaltsames Kartenspiel'
  },
  'game.howToPlay': {
    fr: 'Comment Jouer ?',
    en: 'How to Play?',
    es: '¿Cómo Jugar?',
    pt: 'Como Jogar?',
    de: 'Wie spielt man?'
  },
  'game.step1.title': {
    fr: 'Découverte',
    en: 'Discovery',
    es: 'Descubrimiento',
    pt: 'Descoberta',
    de: 'Entdeckung'
  },
  'game.step1.description': {
    fr: 'Apprenez à identifier les différents insectes et leurs caractéristiques',
    en: 'Learn to identify different insects and their characteristics',
    es: 'Aprende a identificar diferentes insectos y sus características',
    pt: 'Aprenda a identificar diferentes insetos e suas características',
    de: 'Lernen Sie, verschiedene Insekten und ihre Eigenschaften zu erkennen'
  },
  'game.step2.title': {
    fr: 'Stratégie',
    en: 'Strategy',
    es: 'Estrategia',
    pt: 'Estratégia',
    de: 'Strategie'
  },
  'game.step2.description': {
    fr: 'Utilisez les super-pouvoirs des insectes auxiliaires contre les ravageurs',
    en: 'Use the superpowers of beneficial insects against pests',
    es: 'Usa los superpoderes de los insectos beneficiosos contra las plagas',
    pt: 'Use os superpoderes dos insetos benéficos contra as pragas',
    de: 'Nutzen Sie die Superkräfte der Nützlinge gegen Schädlinge'
  },
  'game.step3.title': {
    fr: 'Protection',
    en: 'Protection',
    es: 'Protección',
    pt: 'Proteção',
    de: 'Schutz'
  },
  'game.step3.description': {
    fr: 'Protégez vos cultures en créant un écosystème équilibré',
    en: 'Protect your crops by creating a balanced ecosystem',
    es: 'Protege tus cultivos creando un ecosistema equilibrado',
    pt: 'Proteja suas culturas criando um ecossistema equilibrado',
    de: 'Schützen Sie Ihre Kulturen durch ein ausgewogenes Ökosystem'
  },
  'game.educational.title': {
    fr: 'Objectif Pédagogique',
    en: 'Educational Objective',
    es: 'Objetivo Educativo',
    pt: 'Objetivo Educacional',
    de: 'Pädagogisches Ziel'
  },
  'game.educational.description': {
    fr: 'Ce jeu permet de comprendre l\'importance des insectes dans l\'écosystème agricole et d\'apprendre à distinguer les alliés des ravageurs.',
    en: 'This game helps understand the importance of insects in the agricultural ecosystem and learn to distinguish allies from pests.',
    es: 'Este juego ayuda a entender la importancia de los insectos en el ecosistema agrícola y aprender a distinguir aliados de plagas.',
    pt: 'Este jogo ajuda a entender a importância dos insetos no ecossistema agrícola e aprender a distinguir aliados de pragas.',
    de: 'Dieses Spiel hilft, die Bedeutung der Insekten im Agrarökosystem zu verstehen und Nützlinge von Schädlingen zu unterscheiden.'
  },
  // Product pages - Common
  'product.back': {
    fr: 'Retour aux biosolutions',
    en: 'Back to biosolutions',
    es: 'Volver a las biosoluciones',
    pt: 'Voltar às biosoluções',
    de: 'Zurück zu den Biolösungen'
  },
  'product.contact': {
    fr: 'Nous contacter',
    en: 'Contact us',
    es: 'Contáctanos',
    pt: 'Entre em contato',
    de: 'Kontaktieren Sie uns'
  },
  // SubstancesNaturelles page
  'substances.title': {
    fr: 'Biopesticides',
    en: 'Biopesticides',
    es: 'Biopesticidas',
    pt: 'Biopesticidas',
    de: 'Biopestizide'
  },
  'substances.subtitle': {
    fr: 'Solutions performantes à base d\'extraits naturels d\'insectes',
    en: 'High-performance solutions based on natural insect extracts',
    es: 'Soluciones de alto rendimiento basadas en extractos naturales de insectos',
    pt: 'Soluções de alto desempenho baseadas em extratos naturais de insetos',
    de: 'Hochleistungslösungen auf Basis natürlicher Insektenextrakte'
  },
  'substances.highlight': {
    fr: '100% Extraits Naturels',
    en: '100% Natural Extracts',
    es: '100% Extractos Naturales',
    pt: '100% Extratos Naturais',
    de: '100% Natürliche Extrakte'
  },
  'substances.benefit1.title': {
    fr: '✓ Protection des cultures et des sols',
    en: '✓ Crop and soil protection',
    es: '✓ Protección de cultivos y suelos',
    pt: '✓ Proteção de culturas e solos',
    de: '✓ Kultur- und Bodenschutz'
  },
  'substances.benefit1.desc': {
    fr: 'Extraits actifs naturels issus d\'insectes',
    en: 'Natural active extracts derived from insects',
    es: 'Extractos activos naturales derivados de insectos',
    pt: 'Extratos ativos naturais derivados de insetos',
    de: 'Natürliche Wirkstoffextrakte aus Insekten'
  },
  'substances.benefit2.title': {
    fr: '✓ Stimulation des défenses',
    en: '✓ Defense stimulation',
    es: '✓ Estimulación de las defensas',
    pt: '✓ Estimulação das defesas',
    de: '✓ Abwehrstimulation'
  },
  'substances.benefit2.desc': {
    fr: 'Contre les ravageurs des feuilles, de la tige et du système racinaire',
    en: 'Against leaf, stem and root system pests',
    es: 'Contra las plagas de hojas, tallos y sistema radicular',
    pt: 'Contra pragas de folhas, caules e sistema radicular',
    de: 'Gegen Schädlinge an Blättern, Stängeln und Wurzelsystemen'
  },
  'substances.benefit3.title': {
    fr: '✓ Respect de l\'environnement',
    en: '✓ Environmental respect',
    es: '✓ Respeto al medio ambiente',
    pt: '✓ Respeito ao meio ambiente',
    de: '✓ Umweltschonung'
  },
  'substances.benefit3.desc': {
    fr: 'Solutions biodégradables et non toxiques',
    en: 'Biodegradable and non-toxic solutions',
    es: 'Soluciones biodegradables y no tóxicas',
    pt: 'Soluções biodegradáveis e não tóxicas',
    de: 'Biologisch abbaubare und ungiftige Lösungen'
  },
  'substances.benefit4.title': {
    fr: '✓ Solutions liquides et solides',
    en: '✓ Liquid and solid solutions',
    es: '✓ Soluciones líquidas y sólidas',
    pt: '✓ Soluções líquidas e sólidas',
    de: '✓ Flüssige und feste Lösungen'
  },
  'substances.benefit4.desc': {
    fr: 'En pulvérisation et en micro-granulés',
    en: 'For spraying and micro-granulators',
    es: 'En pulverización y micro-granuladores',
    pt: 'Em pulverização e micro-granuladores',
    de: 'Zum Sprühen und als Mikrogranulat'
  },
  'substances.tech.title': {
    fr: 'Notre technologie d\'extraction',
    en: 'Our extraction technology',
    es: 'Nuestra tecnología de extracción',
    pt: 'Nossa tecnologia de extração',
    de: 'Unsere Extraktionstechnologie'
  },
  'substances.tech.step1.title': {
    fr: 'Sélection d\'insectes',
    en: 'Insect selection',
    es: 'Selección de insectos',
    pt: 'Seleção de insetos',
    de: 'Insektenauswahl'
  },
  'substances.tech.step1.desc': {
    fr: 'Choix rigoureux d\'espèces d\'insectes aux propriétés spécifiques',
    en: 'Rigorous selection of insect species with specific properties',
    es: 'Selección rigurosa de especies de insectos con propiedades específicas',
    pt: 'Seleção rigorosa de espécies de insetos com propriedades específicas',
    de: 'Sorgfältige Auswahl von Insektenarten mit spezifischen Eigenschaften'
  },
  'substances.tech.step2.title': {
    fr: 'Extraction douce',
    en: 'Gentle extraction',
    es: 'Extracción suave',
    pt: 'Extração suave',
    de: 'Schonende Extraktion'
  },
  'substances.tech.step2.desc': {
    fr: 'Procédés d\'extraction sans solvant préservant l\'intégrité des molécules actives',
    en: 'Solvent-free extraction processes preserving the integrity of active molecules',
    es: 'Procesos de extracción sin solventes que preservan la integridad de las moléculas activas',
    pt: 'Processos de extração sem solventes preservando a integridade das moléculas ativas',
    de: 'Lösungsmittelfreie Extraktionsverfahren, die die Integrität der Wirkstoffe bewahren'
  },
  'substances.tech.step3.title': {
    fr: 'Formulation',
    en: 'Formulation',
    es: 'Formulación',
    pt: 'Formulação',
    de: 'Formulierung'
  },
  'substances.tech.step3.desc': {
    fr: 'Développement de solutions prêtes à l\'emploi',
    en: 'Development of ready-to-use solutions',
    es: 'Desarrollo de soluciones listas para usar',
    pt: 'Desenvolvimento de soluções prontas para uso',
    de: 'Entwicklung gebrauchsfertiger Lösungen'
  },
  // BiocontroleVivant page
  'biocontrole.title': {
    fr: 'Bioprotection',
    en: 'Bioprotection',
    es: 'Bioprotección',
    pt: 'Bioproteção',
    de: 'Bioschutz'
  },
  'biocontrole.subtitle': {
    fr: 'Solutions biologiques vivantes pour une protection durable des cultures',
    en: 'Living biological solutions for sustainable crop protection',
    es: 'Soluciones biológicas vivas para una protección sostenible de los cultivos',
    pt: 'Soluções biológicas vivas para proteção sustentável das culturas',
    de: 'Lebende biologische Lösungen für nachhaltigen Pflanzenschutz'
  },
  'biocontrole.auxiliary': {
    fr: 'Insectes Auxiliaires',
    en: 'Beneficial Insects',
    es: 'Insectos Auxiliares',
    pt: 'Insetos Auxiliares',
    de: 'Nützlinge'
  },
  'biocontrole.auxiliary.desc': {
    fr: 'Solutions d\'insectes pour lutter contre les principaux ravageurs des cultures',
    en: 'Insect solutions to combat major crop pests',
    es: 'Soluciones de insectos para combatir las principales plagas de los cultivos',
    pt: 'Soluções de insetos para combater as principais pragas das culturas',
    de: 'Insektenlösungen zur Bekämpfung der wichtigsten Kulturschädlinge'
  },
  'biocontrole.pests.title': {
    fr: 'Ravageurs ciblés',
    en: 'Targeted pests',
    es: 'Plagas objetivo',
    pt: 'Pragas alvo',
    de: 'Zielschädlinge'
  },
  'biocontrole.pest1.title': {
    fr: 'Pucerons',
    en: 'Aphids',
    es: 'Pulgones',
    pt: 'Pulgões',
    de: 'Blattläuse'
  },
  'biocontrole.pest1.desc': {
    fr: 'Contre tous types de pucerons en champs et sous serre',
    en: 'Against all types of aphids in fields and greenhouses',
    es: 'Contra todo tipo de pulgones en campos e invernaderos',
    pt: 'Contra todos os tipos de pulgões em campos e estufas',
    de: 'Gegen alle Blattlausarten im Freiland und unter Glas'
  },
  'biocontrole.pest2.title': {
    fr: 'Chenilles ravageuses',
    en: 'Destructive caterpillars',
    es: 'Orugas destructivas',
    pt: 'Lagartas destrutivas',
    de: 'Schadhafte Raupen'
  },
  'biocontrole.pest2.desc': {
    fr: 'contre les pyrales',
    en: 'against corn borers',
    es: 'contra las polillas',
    pt: 'contra as brocas',
    de: 'gegen Zünsler'
  },
  'biocontrole.pest3.title': {
    fr: 'Cochenilles',
    en: 'Scale insects',
    es: 'Cochinillas',
    pt: 'Cochonilhas',
    de: 'Schildläuse'
  },
  'biocontrole.pest3.desc': {
    fr: 'Contre les cochenilles farineuses des arbres fruitiers',
    en: 'Against mealybugs on fruit trees',
    es: 'Contra las cochinillas harinosas de los árboles frutales',
    pt: 'Contra cochonilhas farinhentas em árvores frutíferas',
    de: 'Gegen Wollläuse an Obstbäumen'
  },
  'biocontrole.pest4.title': {
    fr: 'Mouches Blanches',
    en: 'Whiteflies',
    es: 'Moscas Blancas',
    pt: 'Moscas Brancas',
    de: 'Weiße Fliegen'
  },
  'biocontrole.pest4.desc': {
    fr: 'Contre les mouches blanches (aleurodes) des tomates, concombres, courgettes...',
    en: 'Against whiteflies on tomatoes, cucumbers, zucchini...',
    es: 'Contra las moscas blancas (aleuródidos) de tomates, pepinos, calabacines...',
    pt: 'Contra moscas brancas (aleuroídeos) de tomates, pepinos, abobrinhas...',
    de: 'Gegen Weiße Fliegen an Tomaten, Gurken, Zucchini...'
  },
  'biocontrole.advantages.title': {
    fr: 'Avantages du biocontrôle',
    en: 'Benefits of biocontrol',
    es: 'Ventajas del biocontrol',
    pt: 'Vantagens do biocontrole',
    de: 'Vorteile der Biokontrolle'
  },
  'biocontrole.adv1.title': {
    fr: 'Naturel',
    en: 'Natural',
    es: 'Natural',
    pt: 'Natural',
    de: 'Natürlich'
  },
  'biocontrole.adv1.desc': {
    fr: 'Solutions 100% biologiques sans résidus chimiques',
    en: '100% biological solutions without chemical residues',
    es: 'Soluciones 100% biológicas sin residuos químicos',
    pt: 'Soluções 100% biológicas sem resíduos químicos',
    de: '100% biologische Lösungen ohne chemische Rückstände'
  },
  'biocontrole.adv2.title': {
    fr: 'Sélectif',
    en: 'Selective',
    es: 'Selectivo',
    pt: 'Seletivo',
    de: 'Selektiv'
  },
  'biocontrole.adv2.desc': {
    fr: 'Préserve les insectes bénéfiques et pollinisateurs',
    en: 'Preserves beneficial insects and pollinators',
    es: 'Preserva los insectos beneficiosos y polinizadores',
    pt: 'Preserva insetos benéficos e polinizadores',
    de: 'Schont Nützlinge und Bestäuber'
  },
  'biocontrole.adv3.title': {
    fr: 'Durable',
    en: 'Sustainable',
    es: 'Sostenible',
    pt: 'Sustentável',
    de: 'Nachhaltig'
  },
  'biocontrole.adv3.desc': {
    fr: 'Aucun développement de résistance',
    en: 'No resistance development',
    es: 'Sin desarrollo de resistencia',
    pt: 'Sem desenvolvimento de resistência',
    de: 'Keine Resistenzentwicklung'
  },
  'biocontrole.adv4.title': {
    fr: 'Utilisable en agriculture biologique',
    en: 'Suitable for organic farming',
    es: 'Apto para agricultura ecológica',
    pt: 'Adequado para agricultura orgânica',
    de: 'Geeignet für den ökologischen Landbau'
  },
  'biocontrole.adv4.desc': {
    fr: 'Préserve la santé des champs et des utilisateurs',
    en: 'Preserves the health of fields and users',
    es: 'Preserva la salud de los campos y usuarios',
    pt: 'Preserva a saúde dos campos e usuários',
    de: 'Schützt die Gesundheit der Felder und Anwender'
  },
  'biocontrole.cta': {
    fr: 'Découvrez nos solutions de protection biologique pour une agriculture durable et performante.',
    en: 'Discover our biological protection solutions for sustainable and efficient agriculture.',
    es: 'Descubra nuestras soluciones de protección biológica para una agricultura sostenible y eficiente.',
    pt: 'Descubra nossas soluções de proteção biológica para uma agricultura sustentável e eficiente.',
    de: 'Entdecken Sie unsere biologischen Pflanzenschutzlösungen für eine nachhaltige und leistungsstarke Landwirtschaft.'
  },
  // Biofertilisant page
  'biofertilisant.title': {
    fr: 'Biofertilisant',
    en: 'Biofertilizer',
    es: 'Biofertilizante',
    pt: 'Biofertilizante',
    de: 'Biodünger'
  },
  'biofertilisant.subtitle': {
    fr: 'Nutrition optimale des cultures',
    en: 'Optimal crop nutrition',
    es: 'Nutrición óptima de cultivos',
    pt: 'Nutrição ideal das culturas',
    de: 'Optimale Pflanzenernährung'
  },
  'biofertilisant.npk': {
    fr: 'Composition NPK 4-3-2',
    en: 'NPK 4-3-2 Composition',
    es: 'Composición NPK 4-3-2',
    pt: 'Composição NPK 4-3-2',
    de: 'NPK 4-3-2 Zusammensetzung'
  },
  'biofertilisant.phosphore': {
    fr: 'Phosphore (P)',
    en: 'Phosphorus (P)',
    es: 'Fósforo (P)',
    pt: 'Fósforo (P)',
    de: 'Phosphor (P)'
  },
  'biofertilisant.phosphore.desc': {
    fr: 'Stimule le développement racinaire et la floraison',
    en: 'Stimulates root development and flowering',
    es: 'Estimula el desarrollo radicular y la floración',
    pt: 'Estimula o desenvolvimento radicular e a floração',
    de: 'Fördert Wurzelentwicklung und Blüte'
  },
  'biofertilisant.azote': {
    fr: 'Azote (N)',
    en: 'Nitrogen (N)',
    es: 'Nitrógeno (N)',
    pt: 'Nitrogênio (N)',
    de: 'Stickstoff (N)'
  },
  'biofertilisant.azote.desc': {
    fr: 'Favorise la croissance végétative et le développement des feuilles',
    en: 'Promotes vegetative growth and leaf development',
    es: 'Favorece el crecimiento vegetativo y el desarrollo de las hojas',
    pt: 'Promove o crescimento vegetativo e o desenvolvimento das folhas',
    de: 'Fördert vegetatives Wachstum und Blattentwicklung'
  },
  'biofertilisant.potassium': {
    fr: 'Potassium (K)',
    en: 'Potassium (K)',
    es: 'Potasio (K)',
    pt: 'Potássio (K)',
    de: 'Kalium (K)'
  },
  'biofertilisant.potassium.desc': {
    fr: 'Renforce la résistance aux maladies et améliore la qualité des fruits',
    en: 'Strengthens disease resistance and improves fruit quality',
    es: 'Fortalece la resistencia a las enfermedades y mejora la calidad de los frutos',
    pt: 'Fortalece a resistência a doenças e melhora a qualidade dos frutos',
    de: 'Stärkt die Krankheitsresistenz und verbessert die Fruchtqualität'
  },
  'biofertilisant.organic': {
    fr: 'Matière organique',
    en: 'Organic matter',
    es: 'Materia orgánica',
    pt: 'Matéria orgânica',
    de: 'Organische Substanz'
  },
  'biofertilisant.organic.desc': {
    fr: 'Améliore la qualité du sol',
    en: 'Improves soil quality',
    es: 'Mejora la calidad del suelo',
    pt: 'Melhora a qualidade do solo',
    de: 'Verbessert die Bodenqualität'
  },
  'biofertilisant.advantages': {
    fr: 'Avantages clés',
    en: 'Key benefits',
    es: 'Ventajas clave',
    pt: 'Vantagens principais',
    de: 'Wichtigste Vorteile'
  },
  'biofertilisant.adv1.title': {
    fr: 'Origine 100% naturelle',
    en: '100% natural origin',
    es: 'Origen 100% natural',
    pt: 'Origem 100% natural',
    de: '100% natürlichen Ursprungs'
  },
  'biofertilisant.adv1.desc': {
    fr: 'Formulé à partir de matières organiques premium, sans produits chimiques de synthèse.',
    en: 'Formulated from premium organic materials, without synthetic chemicals.',
    es: 'Formulado a partir de materiales orgánicos premium, sin productos químicos sintéticos.',
    pt: 'Formulado a partir de materiais orgânicos premium, sem produtos químicos sintéticos.',
    de: 'Aus hochwertigen organischen Materialien formuliert, ohne synthetische Chemikalien.'
  },
  'biofertilisant.adv2.title': {
    fr: 'Absorption rapide',
    en: 'Rapid absorption',
    es: 'Absorción rápida',
    pt: 'Absorção rápida',
    de: 'Schnelle Aufnahme'
  },
  'biofertilisant.adv2.desc': {
    fr: 'Les nutriments sont immédiatement disponibles pour les plantes.',
    en: 'Nutrients are immediately available to plants.',
    es: 'Los nutrientes están inmediatamente disponibles para las plantas.',
    pt: 'Os nutrientes estão imediatamente disponíveis para as plantas.',
    de: 'Die Nährstoffe sind sofort für die Pflanzen verfügbar.'
  },
  'biofertilisant.adv3.title': {
    fr: 'Améliore la structure du sol',
    en: 'Improves soil structure',
    es: 'Mejora la estructura del suelo',
    pt: 'Melhora a estrutura do solo',
    de: 'Verbessert die Bodenstruktur'
  },
  'biofertilisant.adv3.desc': {
    fr: 'Enrichit la terre et favorise l\'activité microbienne bénéfique.',
    en: 'Enriches the soil and promotes beneficial microbial activity.',
    es: 'Enriquece la tierra y favorece la actividad microbiana beneficiosa.',
    pt: 'Enriquece o solo e promove a atividade microbiana benéfica.',
    de: 'Reichert den Boden an und fördert nützliche mikrobielle Aktivität.'
  },
  'biofertilisant.adv4.title': {
    fr: 'Rendements supérieurs',
    en: 'Superior yields',
    es: 'Rendimientos superiores',
    pt: 'Rendimentos superiores',
    de: 'Höhere Erträge'
  },
  'biofertilisant.adv4.desc': {
    fr: 'Augmente significativement la productivité de vos cultures.',
    en: 'Significantly increases the productivity of your crops.',
    es: 'Aumenta significativamente la productividad de sus cultivos.',
    pt: 'Aumenta significativamente a produtividade das suas culturas.',
    de: 'Steigert die Produktivität Ihrer Kulturen erheblich.'
  },
  'biofertilisant.cta.title': {
    fr: 'Prêt à optimiser vos cultures ?',
    en: 'Ready to optimize your crops?',
    es: '¿Listo para optimizar sus cultivos?',
    pt: 'Pronto para otimizar suas culturas?',
    de: 'Bereit, Ihre Kulturen zu optimieren?'
  },
  'biofertilisant.cta.desc': {
    fr: 'Contactez-nous pour découvrir comment notre biofertilisant peut transformer votre agriculture.',
    en: 'Contact us to discover how our biofertilizer can transform your agriculture.',
    es: 'Contáctenos para descubrir cómo nuestro biofertilizante puede transformar su agricultura.',
    pt: 'Entre em contato para descobrir como nosso biofertilizante pode transformar sua agricultura.',
    de: 'Kontaktieren Sie uns, um zu erfahren, wie unser Biodünger Ihre Landwirtschaft verändern kann.'
  },
  // Boosters page
  'boosters.title': {
    fr: 'Boosters',
    en: 'Boosters',
    es: 'Potenciadores',
    pt: 'Potenciadores',
    de: 'Booster'
  },
  'boosters.subtitle': {
    fr: 'Solutions biostimulantes liquides ou solides pour optimiser le potentiel de vos cultures et vos sols',
    en: 'Liquid or solid biostimulant solutions to optimize the potential of your crops and soils',
    es: 'Soluciones bioestimulantes líquidas o sólidas para optimizar el potencial de sus cultivos y sus suelos',
    pt: 'Soluções bioestimulantes líquidas ou sólidas para otimizar o potencial das suas culturas e solos',
    de: 'Flüssige oder feste Biostimulans-Lösungen zur Optimierung des Potenzials Ihrer Kulturen und Böden'
  },
  'boosters.headline': {
    fr: 'Des solutions liquides ou solides pour booster la santé de vos cultures',
    en: 'Liquid or solid solutions to boost the health of your crops',
    es: 'Soluciones líquidas o sólidas para potenciar la salud de sus cultivos',
    pt: 'Soluções líquidas ou sólidas para potenciar a saúde das suas culturas',
    de: 'Flüssige oder feste Lösungen zur Stärkung Ihrer Kulturen'
  },
  'boosters.range.title': {
    fr: 'Notre gamme de boosters',
    en: 'Our range of boosters',
    es: 'Nuestra gama de potenciadores',
    pt: 'Nossa gama de potenciadores',
    de: 'Unsere Booster-Produktpalette'
  },
  'boosters.boostea.desc': {
    fr: 'Riche en polypeptides de très petites tailles et en acides aminés libres (proline), Boostea13 augmente la résistance face aux stress abiotiques et améliore l\'activité du sol.',
    en: 'Rich in very small polypeptides and free amino acids (proline), Boostea13 increases resistance to abiotic stress and improves soil activity.',
    es: 'Rico en polipéptidos de muy pequeño tamaño y aminoácidos libres (prolina), Boostea13 aumenta la resistencia al estrés abiótico y mejora la actividad del suelo.',
    pt: 'Rico em polipeptídeos de tamanho muito pequeno e aminoácidos livres (prolina), Boostea13 aumenta a resistência ao estresse abiótico e melhora a atividade do solo.',
    de: 'Reich an sehr kleinen Polypeptiden und freien Aminosäuren (Prolin) erhöht Boostea13 die Widerstandsfähigkeit gegen abiotischen Stress und verbessert die Bodenaktivität.'
  },
  'boosters.boostea.benefit1': {
    fr: 'Améliore la résistance aux stress hydrique et phytotoxiques',
    en: 'Improves resistance to water and phytotoxic stress',
    es: 'Mejora la resistencia al estrés hídrico y fitotóxico',
    pt: 'Melhora a resistência ao estresse hídrico e fitotóxico',
    de: 'Verbessert die Widerstandsfähigkeit gegen Wasser- und phytotoxischen Stress'
  },
  'boosters.boostea.benefit2': {
    fr: 'Améliore l\'assimilation nutritive',
    en: 'Improves nutrient assimilation',
    es: 'Mejora la asimilación de nutrientes',
    pt: 'Melhora a assimilação de nutrientes',
    de: 'Verbessert die Nährstoffaufnahme'
  },
  'boosters.boostea.benefit3': {
    fr: 'Stimule la photosynthèse',
    en: 'Stimulates photosynthesis',
    es: 'Estimula la fotosíntesis',
    pt: 'Estimula a fotossíntese',
    de: 'Stimuliert die Photosynthese'
  },
  'boosters.soilea.desc': {
    fr: '2% de chitine pure pour stimuler l\'activité chitinolytique des sols et améliorer le système de défense des plantes.',
    en: '2% pure chitin to stimulate soil chitinolytic activity and improve plant defense systems.',
    es: '2% de quitina pura para estimular la actividad quitinolítica de los suelos y mejorar el sistema de defensa de las plantas.',
    pt: '2% de quitina pura para estimular a atividade quitinolítica dos solos e melhorar o sistema de defesa das plantas.',
    de: '2% reine Chitine zur Stimulation der chitinolytischen Bodenaktivität und Verbesserung des pflanzlichen Abwehrsystems.'
  },
  'boosters.soilea.benefit1': {
    fr: 'Matière organique de qualité',
    en: 'Quality organic matter',
    es: 'Materia orgánica de calidad',
    pt: 'Matéria orgânica de qualidade',
    de: 'Hochwertige organische Substanz'
  },
  'boosters.soilea.benefit2': {
    fr: 'Stimule le SDP',
    en: 'Stimulates the PDS',
    es: 'Estimula el SDP',
    pt: 'Estimula as defesas naturais das plantas',
    de: 'Stimuliert die Pflanzenabwehr'
  },
  'boosters.soilea.benefit3': {
    fr: 'Augmente la présence des bons microorganismes',
    en: 'Increases the presence of beneficial microorganisms',
    es: 'Aumenta la presencia de microorganismos beneficiosos',
    pt: 'Aumenta a presença de microorganismos benéficos',
    de: 'Erhöht die Präsenz nützlicher Mikroorganismen'
  },
  'boosters.why.title': {
    fr: 'Pourquoi choisir nos boosters ?',
    en: 'Why choose our boosters?',
    es: '¿Por qué elegir nuestros potenciadores?',
    pt: 'Por que escolher nossos potenciadores?',
    de: 'Warum unsere Booster wählen?'
  },
  'boosters.why1.title': {
    fr: 'Efficacité prouvée',
    en: 'Proven effectiveness',
    es: 'Eficacia probada',
    pt: 'Eficácia comprovada',
    de: 'Nachgewiesene Wirksamkeit'
  },
  'boosters.why1.desc': {
    fr: 'Résultats mesurables sur la croissance et les rendements',
    en: 'Measurable results on growth and yields',
    es: 'Resultados medibles en el crecimiento y los rendimientos',
    pt: 'Resultados mensuráveis no crescimento e nos rendimentos',
    de: 'Messbare Ergebnisse bei Wachstum und Erträgen'
  },
  'boosters.why2.title': {
    fr: '100% naturel',
    en: '100% natural',
    es: '100% natural',
    pt: '100% natural',
    de: '100% natürlich'
  },
  'boosters.why2.desc': {
    fr: 'Formulations respectueuses de l\'environnement',
    en: 'Environmentally friendly formulations',
    es: 'Formulaciones respetuosas con el medio ambiente',
    pt: 'Formulações respeitadoras do meio ambiente',
    de: 'Umweltfreundliche Formulierungen'
  },
  'boosters.why3.title': {
    fr: 'Compatible',
    en: 'Compatible',
    es: 'Compatible',
    pt: 'Compatível',
    de: 'Kompatibel'
  },
  'boosters.why3.desc': {
    fr: 'S\'intègre parfaitement aux programmes de fertilisation et traitements phytosanitaires',
    en: 'Integrates perfectly with fertilization programs and plant protection treatments',
    es: 'Se integra perfectamente con los programas de fertilización y tratamientos fitosanitarios',
    pt: 'Integra-se perfeitamente aos programas de fertilização e tratamentos fitossanitários',
    de: 'Lässt sich perfekt in Düngungsprogramme und Pflanzenschutzbehandlungen integrieren'
  },
  'boosters.why4.title': {
    fr: 'Support technique',
    en: 'Technical support',
    es: 'Soporte técnico',
    pt: 'Suporte técnico',
    de: 'Technischer Support'
  },
  'boosters.why4.desc': {
    fr: 'Pas de modification de l\'itinéraire technique, ni d\'investissement dans le matériel agricole : application foliaire ou au sol.',
    en: 'No modification of the technical itinerary, no investment in agricultural equipment: foliar or soil application.',
    es: 'Sin modificación del itinerario técnico, ni inversión en equipos agrícolas: aplicación foliar o al suelo.',
    pt: 'Sem modificação do itinerário técnico, nem investimento em equipamentos agrícolas: aplicação foliar ou no solo.',
    de: 'Keine Änderung des technischen Ablaufs, keine Investition in landwirtschaftliche Geräte: Blatt- oder Bodenanwendung.'
  },
  'boosters.cta.title': {
    fr: 'Prêt à booster vos cultures ?',
    en: 'Ready to boost your crops?',
    es: '¿Listo para potenciar sus cultivos?',
    pt: 'Pronto para potenciar suas culturas?',
    de: 'Bereit, Ihre Kulturen zu stärken?'
  },
  'boosters.cta.desc': {
    fr: 'Contactez notre équipe pour découvrir comment nos boosters peuvent améliorer vos rendements.',
    en: 'Contact our team to discover how our boosters can improve your yields.',
    es: 'Contacte a nuestro equipo para descubrir cómo nuestros potenciadores pueden mejorar sus rendimientos.',
    pt: 'Entre em contato com nossa equipe para descobrir como nossos potenciadores podem melhorar seus rendimentos.',
    de: 'Kontaktieren Sie unser Team, um zu erfahren, wie unsere Booster Ihre Erträge verbessern können.'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
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
