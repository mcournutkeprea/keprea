import { createContext, useContext, useState, type ReactNode } from 'react';

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
  'nav.game': {
    fr: 'Pack jeu éducatif',
    en: 'Educational game pack',
    es: 'Pack juego educativo',
    pt: 'Pacote de jogo educativo'
  },
  'nav.contact': {
    fr: 'Nous contacter',
    en: 'Contact us',
    es: 'Contáctanos',
    pt: 'Entre em contato'
  },
  // Hero section
  'hero.title': {
    fr: 'La nature au service de vos cultures',
    en: 'Nature at the service of your crops',
    es: 'La naturaleza al servicio de sus cultivos',
    pt: 'A natureza a serviço das suas culturas'
  },
  'hero.subtitle': {
    fr: 'Bioprotection, boosters et biofertilisation à base d\'insectes pour une agriculture performante et régénérative',
    en: 'Insect-based bioprotection, boosters and biofertilization for high-performance and regenerative agriculture',
    es: 'Bioprotección, potenciadores y biofertilización a base de insectos para una agricultura de alto rendimiento y regenerativa',
    pt: 'Bioproteção, potenciadores e biofertilização à base de insetos para uma agricultura de alto desempenho e regenerativa'
  },
  'hero.cta': {
    fr: 'Découvrir notre portfolio',
    en: 'Discover our portfolio',
    es: 'Descubrir nuestro portafolio',
    pt: 'Descobrir nosso portfólio'
  },
  'hero.stat1.value': {
    fr: '100%',
    en: '100%',
    es: '100%',
    pt: '100%'
  },
  'hero.stat1.label': {
    fr: 'Naturel',
    en: 'Natural',
    es: 'Natural',
    pt: 'Natural'
  },
  'hero.stat2.value': {
    fr: '10',
    en: '10',
    es: '10',
    pt: '10'
  },
  'hero.stat2.label': {
    fr: 'solutions développées dont 3 déjà disponibles',
    en: 'solutions developed, 3 already available',
    es: 'soluciones desarrolladas, 3 ya disponibles',
    pt: 'soluções desenvolvidas, 3 já disponíveis'
  },
  'hero.stat3.value': {
    fr: '0€',
    en: '€0',
    es: '0€',
    pt: '0€'
  },
  'hero.stat3.label': {
    fr: 'aucun investissement dans du nouveau matériel agricole pour les producteurs',
    en: 'no investment in new agricultural equipment for producers',
    es: 'sin inversión en nuevo equipo agrícola para los productores',
    pt: 'nenhum investimento em novos equipamentos agrícolas para os produtores'
  },
  // Solutions section
  'solutions.title': {
    fr: 'Nos biosolutions, pensées par des agriculteurs, pour des agriculteurs',
    en: 'Our biosolutions, designed by farmers, for farmers',
    es: 'Nuestras biosoluciones, pensadas por agricultores, para agricultores',
    pt: 'Nossas biosoluções, pensadas por agricultores, para agricultores'
  },
  'solutions.subtitle': {
    fr: 'Nos solutions sont pensées par les agriculteurs que nous sommes et pour les agriculteurs.',
    en: 'Our solutions are designed by the farmers we are and for farmers.',
    es: 'Nuestras soluciones están pensadas por los agricultores que somos y para los agricultores.',
    pt: 'Nossas soluções são pensadas pelos agricultores que somos e para os agricultores.'
  },
  'solutions.subtitle2': {
    fr: 'Nous répondons aux défis majeurs des agriculteurs du monde entier :',
    en: 'We address the major challenges faced by farmers worldwide:',
    es: 'Respondemos a los principales desafíos de los agricultores de todo el mundo:',
    pt: 'Respondemos aos principais desafios enfrentados pelos agricultores em todo o mundo:'
  },
  'solutions.challenges': {
    fr: 'compétitivité, productivité, préservation des sols, de la biodiversité et du climat',
    en: 'competitiveness, productivity, soil preservation, biodiversity and climate',
    es: 'competitividad, productividad, preservación de suelos, biodiversidad y clima',
    pt: 'competitividade, produtividade, preservação dos solos, biodiversidade e clima'
  },
  'solutions.approach': {
    fr: 'Pour cela, nous exploitons le potentiel des insectes pour créer des solutions agricoles durables, performantes et abordables. Notre approche scientifique et technique combine',
    en: 'To achieve this, we harness the potential of insects to create sustainable, efficient and affordable agricultural solutions. Our scientific and technical approach combines',
    es: 'Para ello, aprovechamos el potencial de los insectos para crear soluciones agrícolas sostenibles, eficientes y asequibles. Nuestro enfoque científico y técnico combina',
    pt: 'Para isso, aproveitamos o potencial dos insetos para criar soluções agrícolas sustentáveis, eficientes e acessíveis. Nossa abordagem científica e técnica combina'
  },
  'solutions.expertise': {
    fr: 'savoir faire artisanal, maîtrise de la production et compétences agronomiques',
    en: 'artisanal expertise, production mastery and agronomic skills',
    es: 'saber hacer artesanal, dominio de la producción y competencias agronómicas',
    pt: 'saber fazer artesanal, domínio da produção e competências agronômicas'
  },
  'solutions.forFarmers': {
    fr: 'pour répondre aux besoins des agriculteurs.',
    en: 'to meet the needs of farmers.',
    es: 'para satisfacer las necesidades de los agricultores.',
    pt: 'para atender às necessidades dos agricultores.'
  },
  // Solutions cards
  'solutions.bioprotection.title': {
    fr: 'Bioprotection',
    en: 'Bioprotection',
    es: 'Bioprotección',
    pt: 'Bioproteção'
  },
  'solutions.bioprotection.subtitle': {
    fr: 'Protéger vos cultures avec le vivant',
    en: 'Protect your crops with living organisms',
    es: 'Proteger sus cultivos con seres vivos',
    pt: 'Proteger suas culturas com seres vivos'
  },
  'solutions.bioprotection.pests': {
    fr: 'Contre les',
    en: 'Against',
    es: 'Contra',
    pt: 'Contra'
  },
  'solutions.bioprotection.pestsList': {
    fr: 'pucerons, la pyrale, la cochenille',
    en: 'aphids, corn borer, scale insects',
    es: 'pulgones, la polilla, la cochinilla',
    pt: 'pulgões, a broca, a cochonilha'
  },
  'solutions.bioprotection.innovation': {
    fr: 'Solutions d\'application innovantes pour une meilleur performance',
    en: 'Innovative application solutions for better performance',
    es: 'Soluciones de aplicación innovadoras para un mejor rendimiento',
    pt: 'Soluções de aplicação inovadoras para melhor desempenho'
  },
  'solutions.biopesticides.title': {
    fr: 'Biopesticides',
    en: 'Biopesticides',
    es: 'Biopesticidas',
    pt: 'Biopesticidas'
  },
  'solutions.biopesticides.subtitle': {
    fr: 'Solutions écologiques innovantes',
    en: 'Innovative ecological solutions',
    es: 'Soluciones ecológicas innovadoras',
    pt: 'Soluções ecológicas inovadoras'
  },
  'solutions.biopesticides.molecules': {
    fr: 'Extraits des',
    en: 'Extracts of',
    es: 'Extractos de',
    pt: 'Extratos de'
  },
  'solutions.biopesticides.protection': {
    fr: 'molécules de protection',
    en: 'protective molecules',
    es: 'moléculas de protección',
    pt: 'moléculas de proteção'
  },
  'solutions.biopesticides.agents': {
    fr: 'Agents actifs naturels',
    en: 'Natural active agents',
    es: 'Agentes activos naturales',
    pt: 'Agentes ativos naturais'
  },
  'solutions.boosters.title': {
    fr: 'Boosters',
    en: 'Boosters',
    es: 'Potenciadores',
    pt: 'Potenciadores'
  },
  'solutions.boosters.subtitle': {
    fr: 'Activateur de sol et augmentation de la tolérance des cultures aux stress abiotiques',
    en: 'Soil activator and increased crop tolerance to abiotic stress',
    es: 'Activador de suelo y aumento de la tolerancia de los cultivos al estrés abiótico',
    pt: 'Ativador de solo e aumento da tolerância das culturas ao estresse abiótico'
  },
  'solutions.boosters.polypeptides': {
    fr: 'Riche en',
    en: 'Rich in',
    es: 'Rico en',
    pt: 'Rico em'
  },
  'solutions.boosters.substances': {
    fr: 'Extraits actifs',
    en: 'Active extracts',
    es: 'Extractos activos',
    pt: 'Extratos ativos'
  },
  'solutions.biofertilisant.title': {
    fr: 'Biofertilisant',
    en: 'Biofertilizer',
    es: 'Biofertilizante',
    pt: 'Biofertilizante'
  },
  'solutions.biofertilisant.subtitle': {
    fr: 'Nutrition optimale des cultures',
    en: 'Optimal crop nutrition',
    es: 'Nutrición óptima de cultivos',
    pt: 'Nutrição ideal das culturas'
  },
  'solutions.biofertilisant.organic': {
    fr: 'Riche en matière organique',
    en: 'Rich in organic matter',
    es: 'Rico en materia orgánica',
    pt: 'Rico em matéria orgânica'
  },
  'solutions.biofertilisant.npk': {
    fr: 'Concentration équilibrée en  NPK',
    en: 'Balanced NPK concentration',
    es: 'Concentración equilibrada de NPK',
    pt: 'Concentração equilibrada de NPK'
  },
  // Innovation section
  'innovation.title': {
    fr: 'L\'innovation par les insectes',
    en: 'Innovation through insects',
    es: 'Innovación a través de insectos',
    pt: 'Inovação através de insetos'
  },
  'innovation.substances.question': {
    fr: 'Pourquoi protéger vos cultures avec des extraits d\'insectes?',
    en: 'Why protect your crops with insect extracts?',
    es: '¿Por qué proteger sus cultivos con extractos de insectos?',
    pt: 'Por que proteger suas culturas com extratos de insetos?'
  },
  'innovation.biocontrol.question': {
    fr: 'Pourquoi protéger vos cultures avec des insectes auxiliaires?',
    en: 'Why protect your crops with beneficial insects?',
    es: '¿Por qué proteger sus cultivos con insectos auxiliares?',
    pt: 'Por que proteger suas culturas com insetos auxiliares?'
  },
  // Infographic - Substances
  'innovation.infographic.substances.title': {
    fr: 'Des extraits d\'insectes pour l\'agriculture',
    en: 'Insect extracts for agriculture',
    es: 'Extractos de insectos para la agricultura',
    pt: 'Extratos de insetos para a agricultura'
  },
  'innovation.infographic.substances.benefit1': {
    fr: 'Interagissent rapidement avec la plante et le sol, naturellement',
    en: 'Interact quickly with the plant and soil, naturally',
    es: 'Interactúan rápidamente con la planta y el suelo, naturalmente',
    pt: 'Interagem rapidamente com a planta e o solo, naturalmente'
  },
  'innovation.infographic.substances.benefit2': {
    fr: 'Respectent le sol sans aucun résidu toxique',
    en: 'Respect the soil without any toxic residue',
    es: 'Respetan el suelo sin ningún residuo tóxico',
    pt: 'Respeitam o solo sem nenhum resíduo tóxico'
  },
  'innovation.infographic.substances.benefit3': {
    fr: 'Améliorent le rendement',
    en: 'Improve yield',
    es: 'Mejoran el rendimiento',
    pt: 'Melhoram o rendimento'
  },
  // Infographic - Biocontrol
  'innovation.infographic.biocontrol.title': {
    fr: 'Biocontrôle vivant pour les cultures',
    en: 'Living biocontrol for crops',
    es: 'Biocontrol vivo para los cultivos',
    pt: 'Biocontrole vivo para as culturas'
  },
  'innovation.infographic.biocontrol.stat1.value': {
    fr: '84%',
    en: '84%',
    es: '84%',
    pt: '84%'
  },
  'innovation.infographic.biocontrol.stat1.label': {
    fr: 'des cultures dépendent des insectes pour leur qualité et rendement',
    en: 'of crops depend on insects for their quality and yield',
    es: 'de los cultivos dependen de los insectos para su calidad y rendimiento',
    pt: 'das culturas dependem dos insetos para sua qualidade e rendimento'
  },
  'innovation.infographic.biocontrol.stat2.value': {
    fr: '5500',
    en: '5500',
    es: '5500',
    pt: '5500'
  },
  'innovation.infographic.biocontrol.stat2.label': {
    fr: 'auxiliaires utiles recensés en France',
    en: 'useful auxiliaries recorded in France',
    es: 'auxiliares útiles registrados en Francia',
    pt: 'auxiliares úteis registrados na França'
  },
  'innovation.infographic.biocontrol.stat3.value': {
    fr: '10 000',
    en: '10,000',
    es: '10 000',
    pt: '10 000'
  },
  'innovation.infographic.biocontrol.stat3.label': {
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
    fr: 'Découvrez notre site de production moderne situé à Dole, en France, où nous développons et produisons nos biosolutions',
    en: 'Discover our modern production site located in Dole, France, where we develop and produce our biosolutions',
    es: 'Descubra nuestro moderno sitio de producción ubicado en Dole, Francia, donde desarrollamos y producimos nuestras biosoluciones',
    pt: 'Descubra nosso moderno local de produção localizado em Dole, França, onde desenvolvemos e produzimos nossas biosoluções'
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
    fr: 'Situé sur la ville de Dole, notre site est à seulement 2 heures de Paris, Bâle, Genève et Lyon, au cœur d\'un important bassin céréalier et viticole français.',
    en: 'Located in the city of Dole, our site is only 2 hours from Paris, Basel, Geneva and Lyon, in the heart of an important French cereal and wine-growing basin.',
    es: 'Situado en la ciudad de Dole, nuestro sitio está a solo 2 horas de París, Basilea, Ginebra y Lyon, en el corazón de una importante cuenca cerealera y vitícola francesa.',
    pt: 'Localizado na cidade de Dole, nosso local fica a apenas 2 horas de Paris, Basileia, Genebra e Lyon, no coração de uma importante bacia cerealífera e vitícola francesa.'
  },
  'production.technology.title': {
    fr: 'Technologies modernes',
    en: 'Modern technologies',
    es: 'Tecnologías modernas',
    pt: 'Tecnologias modernas'
  },
  'production.technology.desc': {
    fr: 'Équipements de pointe pour la production de solutions de bioprotection et de boosters',
    en: 'State-of-the-art equipment for the production of bioprotection solutions and boosters',
    es: 'Equipos de vanguardia para la producción de soluciones de bioprotección y potenciadores',
    pt: 'Equipamentos de ponta para a produção de soluções de bioproteção e potenciadores'
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
  'production.process.title': {
    fr: 'De la larve au champ',
    en: 'From larva to field',
    es: 'De la larva al campo',
    pt: 'Da larva ao campo'
  },
  'production.process.step1': {
    fr: 'Élevage d\'insectes auxiliaires',
    en: 'Beneficial Insect Breeding',
    es: 'Cría de insectos auxiliares',
    pt: 'Criação de insetos auxiliares'
  },
  'production.process.step2': {
    fr: 'Collecte de Co-produits',
    en: 'Co-product Collection',
    es: 'Recolección de Co-productos',
    pt: 'Coleta de Co-produtos'
  },
  'production.process.step3': {
    fr: 'Préparation ou transformation',
    en: 'Preparation or transformation',
    es: 'Preparación o transformación',
    pt: 'Preparação ou transformação'
  },
  'production.process.step4': {
    fr: 'Packaging',
    en: 'Packaging',
    es: 'Envasado',
    pt: 'Embalagem'
  },
  'production.process.step5': {
    fr: 'Conseil d\'utilisation en plein champ',
    en: 'Field Application Advice',
    es: 'Consejo de uso en campo',
    pt: 'Conselho de uso no campo'
  },
  'production.process.transport': {
    fr: 'Transport',
    en: 'Transport',
    es: 'Transporte',
    pt: 'Transporte'
  },
  // About section
  'about.title': {
    fr: 'À propos de Keprea',
    en: 'About Keprea',
    es: 'Acerca de Keprea',
    pt: 'Sobre a Keprea'
  },
  'about.subtitle': {
    fr: 'Producteurs de biosolutions Made in France',
    en: 'Producers of biosolutions Made in France',
    es: 'Productores de biosoluciones Made in France',
    pt: 'Produtores de biosoluções Made in France'
  },
  'about.history.title': {
    fr: 'Notre Histoire',
    en: 'Our History',
    es: 'Nuestra Historia',
    pt: 'Nossa História'
  },
  'about.history.p1': {
    fr: 'Fondée en',
    en: 'Founded in',
    es: 'Fundada en',
    pt: 'Fundada em'
  },
  'about.history.p1.year': {
    fr: '2025',
    en: '2025',
    es: '2025',
    pt: '2025'
  },
  'about.history.p1.by': {
    fr: 'par',
    en: 'by',
    es: 'por',
    pt: 'por'
  },
  'about.history.p1.associates': {
    fr: '7 associés experts',
    en: '7 expert associates',
    es: '7 socios expertos',
    pt: '7 associados especialistas'
  },
  'about.history.p1.roles': {
    fr: '(agriculteurs, entomologistes, agronomes et entrepreneurs)',
    en: '(farmers, entomologists, agronomists and entrepreneurs)',
    es: '(agricultores, entomólogos, agrónomos y empresarios)',
    pt: '(agricultores, entomologistas, agrônomos e empresários)'
  },
  'about.history.p1.vision.intro': {
    fr: 'Keprea est née d\'une vision commune :',
    en: 'Keprea was born from a common vision:',
    es: 'Keprea nació de una visión común:',
    pt: 'A Keprea nasceu de uma visão comum:'
  },
  'about.history.p1.vision.bold': {
    fr: 'que le vivant revienne au cœur de la gestion de la ferme.',
    en: 'bringing life back to the heart of farm management.',
    es: 'que lo vivo vuelva al corazón de la gestión de la granja.',
    pt: 'trazer a vida de volta ao coração da gestão da fazenda.'
  },
  'about.history.p2.location': {
    fr: 'Implantée à proximité de',
    en: 'Located near',
    es: 'Ubicada cerca de',
    pt: 'Localizada perto de'
  },
  'about.history.p2.city': {
    fr: 'Dole dans le Jura',
    en: 'Dole in the Jura',
    es: 'Dole en el Jura',
    pt: 'Dole no Jura'
  },
  'about.history.p2.site': {
    fr: ', notre site de production de',
    en: ', our production site of',
    es: ', nuestro sitio de producción de',
    pt: ', nosso local de produção de'
  },
  'about.history.p2.size': {
    fr: '3 000 m²',
    en: '3,000 m²',
    es: '3.000 m²',
    pt: '3.000 m²'
  },
  'about.history.p2.develop': {
    fr: 'nous permet de développer une gamme complète de solutions pour les agriculteurs : solutions de',
    en: 'allows us to develop a complete range of solutions for farmers: solutions of',
    es: 'nos permite desarrollar una gama completa de soluciones para los agricultores: soluciones de',
    pt: 'nos permite desenvolver uma gama completa de soluções para os agricultores: soluções de'
  },
  'about.history.p2.bioprotection': {
    fr: 'bioprotection',
    en: 'bioprotection',
    es: 'bioprotección',
    pt: 'bioproteção'
  },
  'about.history.p2.rest': {
    fr: 'performantes et abordables,',
    en: 'that are efficient and affordable,',
    es: 'eficientes y asequibles,',
    pt: 'eficientes e acessíveis,'
  },
  'about.history.p2.boosters': {
    fr: 'boosters',
    en: 'boosters',
    es: 'potenciadores',
    pt: 'potenciadores'
  },
  'about.history.p2.activators': {
    fr: 'et activateurs de sols pour la résistance des cultures contre les stress abiotiques,',
    en: 'and soil activators for crop resistance against abiotic stress,',
    es: 'y activadores de suelo para la resistencia de los cultivos contra el estrés abiótico,',
    pt: 'e ativadores de solo para a resistência das culturas contra o estresse abiótico,'
  },
  'about.history.p2.biofertilisants': {
    fr: 'biofertilisants',
    en: 'biofertilizers',
    es: 'biofertilizantes',
    pt: 'biofertilizantes'
  },
  'about.history.p2.biofertilisants.desc': {
    fr: 'pour régénérer les sols et nourrir les cultures. Toutes ces solutions étant utilisables en',
    en: 'to regenerate soils and nourish crops. All these solutions can be used in',
    es: 'para regenerar los suelos y nutrir los cultivos. Todas estas soluciones se pueden usar en',
    pt: 'para regenerar os solos e nutrir as culturas. Todas essas soluções podem ser usadas em'
  },
  'about.history.p2.organic': {
    fr: 'agriculture biologique',
    en: 'organic farming',
    es: 'agricultura ecológica',
    pt: 'agricultura orgânica'
  },
  'about.history.p3': {
    fr: 'Notre expertise en',
    en: 'Our expertise in',
    es: 'Nuestra experiencia en',
    pt: 'Nossa experiência em'
  },
  'about.history.p3.process': {
    fr: 'biofabrique et agriculture',
    en: 'biomanufacturing and agriculture',
    es: 'biofábrica y agricultura',
    pt: 'biofábrica e agricultura'
  },
  'about.history.p3.guarantee': {
    fr: 'nous permet de garantir des produits de qualité stable et reproductible, répondant aux exigences les plus strictes du monde agricole.',
    en: 'allows us to guarantee products of stable and reproducible quality, meeting the strictest requirements of the agricultural world.',
    es: 'nos permite garantizar productos de calidad estable y reproducible, que cumplen con los requisitos más estrictos del mundo agrícola.',
    pt: 'nos permite garantir produtos de qualidade estável e reproduzível, atendendo aos requisitos mais rigorosos do mundo agrícola.'
  },
  // About values
  'about.value1.title': {
    fr: 'Innovation Naturelle',
    en: 'Natural Innovation',
    es: 'Innovación Natural',
    pt: 'Inovação Natural'
  },
  'about.value1.desc': {
    fr: 'Nous développons des solutions biosourcées issues d\'insectes pour une agriculture durable et respectueuse de l\'environnement.',
    en: 'We develop bio-based solutions from insects for sustainable and environmentally friendly agriculture.',
    es: 'Desarrollamos soluciones de base biológica derivadas de insectos para una agricultura sostenible y respetuosa con el medio ambiente.',
    pt: 'Desenvolvemos soluções de base biológica derivadas de insetos para uma agricultura sustentável e respeitadora do meio ambiente.'
  },
  'about.value2.title': {
    fr: 'Excellence Scientifique',
    en: 'Scientific Excellence',
    es: 'Excelencia Científica',
    pt: 'Excelência Científica'
  },
  'about.value2.desc': {
    fr: 'Notre équipe R&D combine expertise entomologique et agronomique pour créer des produits efficaces et homologués.',
    en: 'Our R&D team combines entomological and agronomic expertise to create effective and approved products.',
    es: 'Nuestro equipo de I+D combina experiencia entomológica y agronómica para crear productos eficaces y homologados.',
    pt: 'Nossa equipe de P&D combina experiência entomológica e agronômica para criar produtos eficazes e aprovados.'
  },
  'about.value3.title': {
    fr: 'Partenariat Agricole',
    en: 'Agricultural Partnership',
    es: 'Asociación Agrícola',
    pt: 'Parceria Agrícola'
  },
  'about.value3.desc': {
    fr: 'Nous accompagnons les agriculteurs dans leur transition vers des pratiques plus durables avec des solutions adaptées.',
    en: 'We support farmers in their transition to more sustainable practices with tailored solutions.',
    es: 'Acompañamos a los agricultores en su transición hacia prácticas más sostenibles con soluciones adaptadas.',
    pt: 'Acompanhamos os agricultores em sua transição para práticas mais sustentáveis com soluções adaptadas.'
  },
  'about.value4.title': {
    fr: 'Impact Mesurable',
    en: 'Measurable Impact',
    es: 'Impacto Medible',
    pt: 'Impacto Mensurável'
  },
  'about.value4.desc': {
    fr: 'Nous accompagnons les agriculteurs dans leur transition vers des pratiques plus durables avec des solutions adaptées, conçues par des agriculteurs pour des agriculteurs.',
    en: 'We support farmers in their transition to more sustainable practices with tailored solutions, designed by farmers for farmers.',
    es: 'Acompañamos a los agricultores en su transición hacia prácticas más sostenibles con soluciones adaptadas, diseñadas por agricultores para agricultores.',
    pt: 'Acompanhamos os agricultores na sua transição para práticas mais sustentáveis com soluções adaptadas, concebidas por agricultores para agricultores.'
  },
  // Team section
  'team.title': {
    fr: 'Notre Équipe',
    en: 'Our Team',
    es: 'Nuestro Equipo',
    pt: 'Nossa Equipe'
  },
  'team.subtitle': {
    fr: 'Une équipe passionnée d\'experts en agriculture, industrie et politiques agricoles',
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
  'team.photoNote': {
    fr: 'Photo à faire ensemble le 15 OCT',
    en: 'Photo to take together on OCT 15',
    es: 'Foto para tomar juntos el 15 de OCT',
    pt: 'Foto para tirar juntos em 15 de OUT'
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
  'contact.form.subject.biofertilisant': {
    fr: 'Biofertilisant et Boosters',
    en: 'Biofertilizer and Boosters',
    es: 'Biofertilizante y Potenciadores',
    pt: 'Biofertilizante e Potenciadores'
  },
  'contact.form.subject.biopesticides': {
    fr: 'Biopesticides',
    en: 'Biopesticides',
    es: 'Biopesticidas',
    pt: 'Biopesticidas'
  },
  'contact.form.subject.biocontrol': {
    fr: 'Biocontrôle',
    en: 'Biocontrol',
    es: 'Biocontrol',
    pt: 'Biocontrole'
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
  'contact.form.submitting': {
    fr: 'Envoi en cours...',
    en: 'Sending...',
    es: 'Enviando...',
    pt: 'Enviando...'
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
  },
  // Toast messages
  'toast.error': {
    fr: 'Erreur',
    en: 'Error',
    es: 'Error',
    pt: 'Erro'
  },
  'toast.error.required': {
    fr: 'Veuillez remplir tous les champs obligatoires',
    en: 'Please fill in all required fields',
    es: 'Por favor complete todos los campos obligatorios',
    pt: 'Por favor preencha todos os campos obrigatórios'
  },
  'toast.success': {
    fr: 'Message envoyé !',
    en: 'Message sent!',
    es: '¡Mensaje enviado!',
    pt: 'Mensagem enviada!'
  },
  'toast.success.desc': {
    fr: 'Nous avons bien reçu votre message et vous répondrons rapidement.',
    en: 'We have received your message and will respond shortly.',
    es: 'Hemos recibido tu mensaje y te responderemos pronto.',
    pt: 'Recebemos sua mensagem e responderemos em breve.'
  },
  'toast.error.send': {
    fr: 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.',
    en: 'An error occurred while sending the message. Please try again.',
    es: 'Se produjo un error al enviar el mensaje. Por favor, inténtelo de nuevo.',
    pt: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.'
  },
  // Educational Game section
  'game.title': {
    fr: 'AgVengers - Le Jeu Éducatif',
    en: 'AgVengers - The Educational Game',
    es: 'AgVengers - El Juego Educativo',
    pt: 'AgVengers - O Jogo Educativo'
  },
  'game.subtitle': {
    fr: 'Découvrez le monde fascinant des insectes auxiliaires et ravageurs à travers notre jeu de cartes éducatif et ludique',
    en: 'Discover the fascinating world of beneficial and pest insects through our educational and fun card game',
    es: 'Descubre el fascinante mundo de los insectos beneficiosos y plagas a través de nuestro juego de cartas educativo y divertido',
    pt: 'Descubra o fascinante mundo dos insetos benéficos e pragas através do nosso jogo de cartas educativo e divertido'
  },
  'game.howToPlay': {
    fr: 'Comment Jouer ?',
    en: 'How to Play?',
    es: '¿Cómo Jugar?',
    pt: 'Como Jogar?'
  },
  'game.step1.title': {
    fr: 'Découverte',
    en: 'Discovery',
    es: 'Descubrimiento',
    pt: 'Descoberta'
  },
  'game.step1.description': {
    fr: 'Apprenez à identifier les différents insectes et leurs caractéristiques',
    en: 'Learn to identify different insects and their characteristics',
    es: 'Aprende a identificar diferentes insectos y sus características',
    pt: 'Aprenda a identificar diferentes insetos e suas características'
  },
  'game.step2.title': {
    fr: 'Stratégie',
    en: 'Strategy',
    es: 'Estrategia',
    pt: 'Estratégia'
  },
  'game.step2.description': {
    fr: 'Utilisez les super-pouvoirs des insectes auxiliaires contre les ravageurs',
    en: 'Use the superpowers of beneficial insects against pests',
    es: 'Usa los superpoderes de los insectos beneficiosos contra las plagas',
    pt: 'Use os superpoderes dos insetos benéficos contra as pragas'
  },
  'game.step3.title': {
    fr: 'Protection',
    en: 'Protection',
    es: 'Protección',
    pt: 'Proteção'
  },
  'game.step3.description': {
    fr: 'Protégez vos cultures en créant un écosystème équilibré',
    en: 'Protect your crops by creating a balanced ecosystem',
    es: 'Protege tus cultivos creando un ecosistema equilibrado',
    pt: 'Proteja suas culturas criando um ecossistema equilibrado'
  },
  'game.educational.title': {
    fr: 'Objectif Pédagogique',
    en: 'Educational Objective',
    es: 'Objetivo Educativo',
    pt: 'Objetivo Educacional'
  },
  'game.educational.description': {
    fr: 'Ce jeu permet de comprendre l\'importance des insectes dans l\'écosystème agricole et d\'apprendre à distinguer les alliés des ravageurs.',
    en: 'This game helps understand the importance of insects in the agricultural ecosystem and learn to distinguish allies from pests.',
    es: 'Este juego ayuda a entender la importancia de los insectos en el ecosistema agrícola y aprender a distinguir aliados de plagas.',
    pt: 'Este jogo ajuda a entender a importância dos insetos no ecossistema agrícola e aprender a distinguir aliados de pragas.'
  },
  // Product pages - Common
  'product.back': {
    fr: 'Retour aux biosolutions',
    en: 'Back to biosolutions',
    es: 'Volver a las biosoluciones',
    pt: 'Voltar às biosoluções'
  },
  'product.contact': {
    fr: 'Nous contacter',
    en: 'Contact us',
    es: 'Contáctanos',
    pt: 'Entre em contato'
  },
  // SubstancesNaturelles page
  'substances.title': {
    fr: 'Extraits Naturels',
    en: 'Natural Extracts',
    es: 'Extractos Naturales',
    pt: 'Extratos Naturais'
  },
  'substances.subtitle': {
    fr: 'Solutions performantes à base d\'extraits naturels d\'insectes',
    en: 'High-performance solutions based on natural insect extracts',
    es: 'Soluciones de alto rendimiento basadas en extractos naturales de insectos',
    pt: 'Soluções de alto desempenho baseadas em extratos naturais de insetos'
  },
  'substances.highlight': {
    fr: '100% Extraits Naturels',
    en: '100% Natural Extracts',
    es: '100% Extractos Naturales',
    pt: '100% Extratos Naturais'
  },
  'substances.benefit1.title': {
    fr: '✓ Protection des cultures et des sols',
    en: '✓ Crop and soil protection',
    es: '✓ Protección de cultivos y suelos',
    pt: '✓ Proteção de culturas e solos'
  },
  'substances.benefit1.desc': {
    fr: 'Extraits actifs naturels issus d\'insectes',
    en: 'Natural active extracts derived from insects',
    es: 'Extractos activos naturales derivados de insectos',
    pt: 'Extratos ativos naturais derivados de insetos'
  },
  'substances.benefit2.title': {
    fr: '✓ Stimulation des défenses',
    en: '✓ Defense stimulation',
    es: '✓ Estimulación de las defensas',
    pt: '✓ Estimulação das defesas'
  },
  'substances.benefit2.desc': {
    fr: 'Contre les ravageurs des feuilles, de la tige et des système racinaire',
    en: 'Against leaf, stem and root system pests',
    es: 'Contra las plagas de hojas, tallos y sistema radicular',
    pt: 'Contra pragas de folhas, caules e sistema radicular'
  },
  'substances.benefit3.title': {
    fr: '✓ Respect de l\'environnement',
    en: '✓ Environmental respect',
    es: '✓ Respeto al medio ambiente',
    pt: '✓ Respeito ao meio ambiente'
  },
  'substances.benefit3.desc': {
    fr: 'Solutions biodégradables et non toxiques',
    en: 'Biodegradable and non-toxic solutions',
    es: 'Soluciones biodegradables y no tóxicas',
    pt: 'Soluções biodegradáveis e não tóxicas'
  },
  'substances.benefit4.title': {
    fr: '✓ Solutions liquides et solides',
    en: '✓ Liquid and solid solutions',
    es: '✓ Soluciones líquidas y sólidas',
    pt: '✓ Soluções líquidas e sólidas'
  },
  'substances.benefit4.desc': {
    fr: 'En pulvérisation et en micro-granulateurs',
    en: 'For spraying and micro-granulators',
    es: 'En pulverización y micro-granuladores',
    pt: 'Em pulverização e micro-granuladores'
  },
  'substances.tech.title': {
    fr: 'Notre technologie d\'extraction',
    en: 'Our extraction technology',
    es: 'Nuestra tecnología de extracción',
    pt: 'Nossa tecnologia de extração'
  },
  'substances.tech.step1.title': {
    fr: 'Sélection d\'insectes',
    en: 'Insect selection',
    es: 'Selección de insectos',
    pt: 'Seleção de insetos'
  },
  'substances.tech.step1.desc': {
    fr: 'Choix rigoureux d\'espèces d\'insectes aux propriétés spécifiques',
    en: 'Rigorous selection of insect species with specific properties',
    es: 'Selección rigurosa de especies de insectos con propiedades específicas',
    pt: 'Seleção rigorosa de espécies de insetos com propriedades específicas'
  },
  'substances.tech.step2.title': {
    fr: 'Extraction douce',
    en: 'Gentle extraction',
    es: 'Extracción suave',
    pt: 'Extração suave'
  },
  'substances.tech.step2.desc': {
    fr: 'Procédés d\'extraction sans solvant préservant l\'intégrité des molécules actives',
    en: 'Solvent-free extraction processes preserving the integrity of active molecules',
    es: 'Procesos de extracción sin solventes que preservan la integridad de las moléculas activas',
    pt: 'Processos de extração sem solventes preservando a integridade das moléculas ativas'
  },
  'substances.tech.step3.title': {
    fr: 'Formulation',
    en: 'Formulation',
    es: 'Formulación',
    pt: 'Formulação'
  },
  'substances.tech.step3.desc': {
    fr: 'Développement de solutions prêtes à l\'emploi',
    en: 'Development of ready-to-use solutions',
    es: 'Desarrollo de soluciones listas para usar',
    pt: 'Desenvolvimento de soluções prontas para uso'
  },
  // BiocontroleVivant page
  'biocontrole.title': {
    fr: 'Bioprotection',
    en: 'Bioprotection',
    es: 'Bioprotección',
    pt: 'Bioproteção'
  },
  'biocontrole.subtitle': {
    fr: 'Solutions biologiques vivantes pour une protection durable des cultures',
    en: 'Living biological solutions for sustainable crop protection',
    es: 'Soluciones biológicas vivas para una protección sostenible de los cultivos',
    pt: 'Soluções biológicas vivas para proteção sustentável das culturas'
  },
  'biocontrole.auxiliary': {
    fr: 'Insectes Auxiliaires',
    en: 'Beneficial Insects',
    es: 'Insectos Auxiliares',
    pt: 'Insetos Auxiliares'
  },
  'biocontrole.auxiliary.desc': {
    fr: 'Solutions d\'insectes pour lutter contre les principaux ravageurs des cultures',
    en: 'Insect solutions to combat major crop pests',
    es: 'Soluciones de insectos para combatir las principales plagas de los cultivos',
    pt: 'Soluções de insetos para combater as principais pragas das culturas'
  },
  'biocontrole.pests.title': {
    fr: 'Ravageurs ciblés',
    en: 'Targeted pests',
    es: 'Plagas objetivo',
    pt: 'Pragas alvo'
  },
  'biocontrole.pest1.title': {
    fr: 'Pucerons',
    en: 'Aphids',
    es: 'Pulgones',
    pt: 'Pulgões'
  },
  'biocontrole.pest1.desc': {
    fr: 'Contre tout types de pucerons en champs et sous serre',
    en: 'Against all types of aphids in fields and greenhouses',
    es: 'Contra todo tipo de pulgones en campos e invernaderos',
    pt: 'Contra todos os tipos de pulgões em campos e estufas'
  },
  'biocontrole.pest2.title': {
    fr: 'Chenilles ravageuses',
    en: 'Destructive caterpillars',
    es: 'Orugas destructivas',
    pt: 'Lagartas destrutivas'
  },
  'biocontrole.pest2.desc': {
    fr: 'contre les pyrales',
    en: 'against corn borers',
    es: 'contra las polillas',
    pt: 'contra as brocas'
  },
  'biocontrole.pest3.title': {
    fr: 'Cochenilles',
    en: 'Scale insects',
    es: 'Cochinillas',
    pt: 'Cochonilhas'
  },
  'biocontrole.pest3.desc': {
    fr: 'Contre les cochenilles farineuses des arbres fruitiers',
    en: 'Against mealybugs on fruit trees',
    es: 'Contra las cochinillas harinosas de los árboles frutales',
    pt: 'Contra cochonilhas farinhentas em árvores frutíferas'
  },
  'biocontrole.pest4.title': {
    fr: 'Mouches Blanches',
    en: 'Whiteflies',
    es: 'Moscas Blancas',
    pt: 'Moscas Brancas'
  },
  'biocontrole.pest4.desc': {
    fr: 'Contre les mouches blanches (aleurodes) des tomates, concombres, courgettes...',
    en: 'Against whiteflies on tomatoes, cucumbers, zucchini...',
    es: 'Contra las moscas blancas (aleuródidos) de tomates, pepinos, calabacines...',
    pt: 'Contra moscas brancas (aleuroídeos) de tomates, pepinos, abobrinhas...'
  },
  'biocontrole.advantages.title': {
    fr: 'Avantages du biocontrôle',
    en: 'Benefits of biocontrol',
    es: 'Ventajas del biocontrol',
    pt: 'Vantagens do biocontrole'
  },
  'biocontrole.adv1.title': {
    fr: '🌱 Naturel',
    en: '🌱 Natural',
    es: '🌱 Natural',
    pt: '🌱 Natural'
  },
  'biocontrole.adv1.desc': {
    fr: 'Solutions 100% biologiques sans résidus chimiques',
    en: '100% biological solutions without chemical residues',
    es: 'Soluciones 100% biológicas sin residuos químicos',
    pt: 'Soluções 100% biológicas sem resíduos químicos'
  },
  'biocontrole.adv2.title': {
    fr: '🎯 Sélectif',
    en: '🎯 Selective',
    es: '🎯 Selectivo',
    pt: '🎯 Seletivo'
  },
  'biocontrole.adv2.desc': {
    fr: 'Préserve les insectes bénéfiques et pollinisateurs',
    en: 'Preserves beneficial insects and pollinators',
    es: 'Preserva los insectos beneficiosos y polinizadores',
    pt: 'Preserva insetos benéficos e polinizadores'
  },
  'biocontrole.adv3.title': {
    fr: '🔄 Durable',
    en: '🔄 Sustainable',
    es: '🔄 Sostenible',
    pt: '🔄 Sustentável'
  },
  'biocontrole.adv3.desc': {
    fr: 'Aucun développement de résistance',
    en: 'No resistance development',
    es: 'Sin desarrollo de resistencia',
    pt: 'Sem desenvolvimento de resistência'
  },
  'biocontrole.adv4.title': {
    fr: '✅ Utilisable en agriculture biologique',
    en: '✅ Suitable for organic farming',
    es: '✅ Apto para agricultura ecológica',
    pt: '✅ Adequado para agricultura orgânica'
  },
  'biocontrole.adv4.desc': {
    fr: 'Préserve la santé des champs et des utilisateurs',
    en: 'Preserves the health of fields and users',
    es: 'Preserva la salud de los campos y usuarios',
    pt: 'Preserva a saúde dos campos e usuários'
  },
  'biocontrole.cta': {
    fr: 'Découvrez nos solutions de protection biologique pour une agriculture durable et performante.',
    en: 'Discover our biological protection solutions for sustainable and efficient agriculture.',
    es: 'Descubra nuestras soluciones de protección biológica para una agricultura sostenible y eficiente.',
    pt: 'Descubra nossas soluções de proteção biológica para uma agricultura sustentável e eficiente.'
  },
  // Biofertilisant page
  'biofertilisant.title': {
    fr: 'Biofertilisant',
    en: 'Biofertilizer',
    es: 'Biofertilizante',
    pt: 'Biofertilizante'
  },
  'biofertilisant.subtitle': {
    fr: 'Nutrition optimale des cultures',
    en: 'Optimal crop nutrition',
    es: 'Nutrición óptima de cultivos',
    pt: 'Nutrição ideal das culturas'
  },
  'biofertilisant.npk': {
    fr: 'Composition NPK 4-3-2',
    en: 'NPK 4-3-2 Composition',
    es: 'Composición NPK 4-3-2',
    pt: 'Composição NPK 4-3-2'
  },
  'biofertilisant.phosphore': {
    fr: 'Phosphore (P)',
    en: 'Phosphorus (P)',
    es: 'Fósforo (P)',
    pt: 'Fósforo (P)'
  },
  'biofertilisant.phosphore.desc': {
    fr: 'Stimule le développement racinaire et la floraison',
    en: 'Stimulates root development and flowering',
    es: 'Estimula el desarrollo radicular y la floración',
    pt: 'Estimula o desenvolvimento radicular e a floração'
  },
  'biofertilisant.azote': {
    fr: 'Azote (N)',
    en: 'Nitrogen (N)',
    es: 'Nitrógeno (N)',
    pt: 'Nitrogênio (N)'
  },
  'biofertilisant.azote.desc': {
    fr: 'Favorise la croissance végétative et le développement des feuilles',
    en: 'Promotes vegetative growth and leaf development',
    es: 'Favorece el crecimiento vegetativo y el desarrollo de las hojas',
    pt: 'Promove o crescimento vegetativo e o desenvolvimento das folhas'
  },
  'biofertilisant.potassium': {
    fr: 'Potassium (K)',
    en: 'Potassium (K)',
    es: 'Potasio (K)',
    pt: 'Potássio (K)'
  },
  'biofertilisant.potassium.desc': {
    fr: 'Renforce la résistance aux maladies et améliore la qualité des fruits',
    en: 'Strengthens disease resistance and improves fruit quality',
    es: 'Fortalece la resistencia a las enfermedades y mejora la calidad de los frutos',
    pt: 'Fortalece a resistência a doenças e melhora a qualidade dos frutos'
  },
  'biofertilisant.organic': {
    fr: 'Matière organique',
    en: 'Organic matter',
    es: 'Materia orgánica',
    pt: 'Matéria orgânica'
  },
  'biofertilisant.organic.desc': {
    fr: 'Améliore la qualité du sol',
    en: 'Improves soil quality',
    es: 'Mejora la calidad del suelo',
    pt: 'Melhora a qualidade do solo'
  },
  'biofertilisant.advantages': {
    fr: 'Avantages clés',
    en: 'Key benefits',
    es: 'Ventajas clave',
    pt: 'Vantagens principais'
  },
  'biofertilisant.adv1.title': {
    fr: 'Origine 100% naturelle',
    en: '100% natural origin',
    es: 'Origen 100% natural',
    pt: 'Origem 100% natural'
  },
  'biofertilisant.adv1.desc': {
    fr: 'Formulé à partir de matières organiques premium, sans produits chimiques de synthèse.',
    en: 'Formulated from premium organic materials, without synthetic chemicals.',
    es: 'Formulado a partir de materiales orgánicos premium, sin productos químicos sintéticos.',
    pt: 'Formulado a partir de materiais orgânicos premium, sem produtos químicos sintéticos.'
  },
  'biofertilisant.adv2.title': {
    fr: 'Absorption rapide',
    en: 'Rapid absorption',
    es: 'Absorción rápida',
    pt: 'Absorção rápida'
  },
  'biofertilisant.adv2.desc': {
    fr: 'Les nutriments sont immédiatement disponibles pour les plantes.',
    en: 'Nutrients are immediately available to plants.',
    es: 'Los nutrientes están inmediatamente disponibles para las plantas.',
    pt: 'Os nutrientes estão imediatamente disponíveis para as plantas.'
  },
  'biofertilisant.adv3.title': {
    fr: 'Améliore la structure du sol',
    en: 'Improves soil structure',
    es: 'Mejora la estructura del suelo',
    pt: 'Melhora a estrutura do solo'
  },
  'biofertilisant.adv3.desc': {
    fr: 'Enrichit la terre et favorise l\'activité microbienne bénéfique.',
    en: 'Enriches the soil and promotes beneficial microbial activity.',
    es: 'Enriquece la tierra y favorece la actividad microbiana beneficiosa.',
    pt: 'Enriquece o solo e promove a atividade microbiana benéfica.'
  },
  'biofertilisant.adv4.title': {
    fr: 'Rendements supérieurs',
    en: 'Superior yields',
    es: 'Rendimientos superiores',
    pt: 'Rendimentos superiores'
  },
  'biofertilisant.adv4.desc': {
    fr: 'Augmente significativement la productivité de vos cultures.',
    en: 'Significantly increases the productivity of your crops.',
    es: 'Aumenta significativamente la productividad de sus cultivos.',
    pt: 'Aumenta significativamente a produtividade das suas culturas.'
  },
  'biofertilisant.cta.title': {
    fr: 'Prêt à optimiser vos cultures ?',
    en: 'Ready to optimize your crops?',
    es: '¿Listo para optimizar sus cultivos?',
    pt: 'Pronto para otimizar suas culturas?'
  },
  'biofertilisant.cta.desc': {
    fr: 'Contactez-nous pour découvrir comment notre biofertilisant peut transformer votre agriculture.',
    en: 'Contact us to discover how our biofertilizer can transform your agriculture.',
    es: 'Contáctenos para descubrir cómo nuestro biofertilizante puede transformar su agricultura.',
    pt: 'Entre em contato para descobrir como nosso biofertilizante pode transformar sua agricultura.'
  },
  // Boosters page
  'boosters.title': {
    fr: 'Boosters',
    en: 'Boosters',
    es: 'Potenciadores',
    pt: 'Potenciadores'
  },
  'boosters.subtitle': {
    fr: 'Solutions biostimulantes liquides ou solides pour optimiser le potentiel de vos cultures et vos sols',
    en: 'Liquid or solid biostimulant solutions to optimize the potential of your crops and soils',
    es: 'Soluciones bioestimulantes líquidas o sólidas para optimizar el potencial de sus cultivos y sus suelos',
    pt: 'Soluções bioestimulantes líquidas ou sólidas para otimizar o potencial das suas culturas e solos'
  },
  'boosters.headline': {
    fr: 'Des solutions liquides ou solides pour booster la santé de vos cultures',
    en: 'Liquid or solid solutions to boost the health of your crops',
    es: 'Soluciones líquidas o sólidas para potenciar la salud de sus cultivos',
    pt: 'Soluções líquidas ou sólidas para potenciar a saúde das suas culturas'
  },
  'boosters.range.title': {
    fr: 'Notre gamme de boosters',
    en: 'Our range of boosters',
    es: 'Nuestra gama de potenciadores',
    pt: 'Nossa gama de potenciadores'
  },
  'boosters.boostea.desc': {
    fr: 'Riche en polypeptides de très petites tailles et en acides aminés libres (proline), Boostea13 augmente la résistance face aux stress abiotiques et améliore l\'activité du sol.',
    en: 'Rich in very small polypeptides and free amino acids (proline), Boostea13 increases resistance to abiotic stress and improves soil activity.',
    es: 'Rico en polipéptidos de muy pequeño tamaño y aminoácidos libres (prolina), Boostea13 aumenta la resistencia al estrés abiótico y mejora la actividad del suelo.',
    pt: 'Rico em polipeptídeos de tamanho muito pequeno e aminoácidos livres (prolina), Boostea13 aumenta a resistência ao estresse abiótico e melhora a atividade do solo.'
  },
  'boosters.boostea.benefit1': {
    fr: 'Améliore la résistance aux stress hydrique et phytotoxiques',
    en: 'Improves resistance to water and phytotoxic stress',
    es: 'Mejora la resistencia al estrés hídrico y fitotóxico',
    pt: 'Melhora a resistência ao estresse hídrico e fitotóxico'
  },
  'boosters.boostea.benefit2': {
    fr: 'Améliore l\'assimilation nutritive',
    en: 'Improves nutrient assimilation',
    es: 'Mejora la asimilación de nutrientes',
    pt: 'Melhora a assimilação de nutrientes'
  },
  'boosters.boostea.benefit3': {
    fr: 'Stimule la photosynthèse',
    en: 'Stimulates photosynthesis',
    es: 'Estimula la fotosíntesis',
    pt: 'Estimula a fotossíntese'
  },
  'boosters.soilea.desc': {
    fr: '2% de chitine pure pour stimuler l\'activité chitinolitique des sols et améliorer la système de défense des plantes.',
    en: '2% pure chitin to stimulate soil chitinolytic activity and improve plant defense systems.',
    es: '2% de quitina pura para estimular la actividad quitinolítica de los suelos y mejorar el sistema de defensa de las plantas.',
    pt: '2% de quitina pura para estimular a atividade quitinolítica dos solos e melhorar o sistema de defesa das plantas.'
  },
  'boosters.soilea.benefit1': {
    fr: 'Matière organique de qualité',
    en: 'Quality organic matter',
    es: 'Materia orgánica de calidad',
    pt: 'Matéria orgânica de qualidade'
  },
  'boosters.soilea.benefit2': {
    fr: 'Stimule le SDP',
    en: 'Stimulates the PDS',
    es: 'Estimula el SDP',
    pt: 'Estimula o SDP'
  },
  'boosters.soilea.benefit3': {
    fr: 'Augmente la présence des bons microorganismes',
    en: 'Increases the presence of beneficial microorganisms',
    es: 'Aumenta la presencia de microorganismos beneficiosos',
    pt: 'Aumenta a presença de microorganismos benéficos'
  },
  'boosters.why.title': {
    fr: 'Pourquoi choisir nos boosters ?',
    en: 'Why choose our boosters?',
    es: '¿Por qué elegir nuestros potenciadores?',
    pt: 'Por que escolher nossos potenciadores?'
  },
  'boosters.why1.title': {
    fr: 'Efficacité prouvée',
    en: 'Proven effectiveness',
    es: 'Eficacia probada',
    pt: 'Eficácia comprovada'
  },
  'boosters.why1.desc': {
    fr: 'Résultats mesurables sur la croissance et les rendements',
    en: 'Measurable results on growth and yields',
    es: 'Resultados medibles en el crecimiento y los rendimientos',
    pt: 'Resultados mensuráveis no crescimento e nos rendimentos'
  },
  'boosters.why2.title': {
    fr: '100% naturel',
    en: '100% natural',
    es: '100% natural',
    pt: '100% natural'
  },
  'boosters.why2.desc': {
    fr: 'Formulations respectueuses de l\'environnement',
    en: 'Environmentally friendly formulations',
    es: 'Formulaciones respetuosas con el medio ambiente',
    pt: 'Formulações respeitadoras do meio ambiente'
  },
  'boosters.why3.title': {
    fr: 'Compatible',
    en: 'Compatible',
    es: 'Compatible',
    pt: 'Compatível'
  },
  'boosters.why3.desc': {
    fr: 'S\'intègre parfaitement aux programmes de fertilisation et traitements phytosanitaires',
    en: 'Integrates perfectly with fertilization programs and plant protection treatments',
    es: 'Se integra perfectamente con los programas de fertilización y tratamientos fitosanitarios',
    pt: 'Integra-se perfeitamente aos programas de fertilização e tratamentos fitossanitários'
  },
  'boosters.why4.title': {
    fr: 'Support technique',
    en: 'Technical support',
    es: 'Soporte técnico',
    pt: 'Suporte técnico'
  },
  'boosters.why4.desc': {
    fr: 'Pas de modification de l\'itinéraire technique, ni d\'investissement dans le matériel agricole : application foliaire ou au sol.',
    en: 'No modification of the technical itinerary, no investment in agricultural equipment: foliar or soil application.',
    es: 'Sin modificación del itinerario técnico, ni inversión en equipos agrícolas: aplicación foliar o al suelo.',
    pt: 'Sem modificação do itinerário técnico, nem investimento em equipamentos agrícolas: aplicação foliar ou no solo.'
  },
  'boosters.cta.title': {
    fr: 'Prêt à booster vos cultures ?',
    en: 'Ready to boost your crops?',
    es: '¿Listo para potenciar sus cultivos?',
    pt: 'Pronto para potenciar suas culturas?'
  },
  'boosters.cta.desc': {
    fr: 'Contactez notre équipe pour découvrir comment nos boosters peuvent améliorer vos rendements.',
    en: 'Contact our team to discover how our boosters can improve your yields.',
    es: 'Contacte a nuestro equipo para descubrir cómo nuestros potenciadores pueden mejorar sus rendimientos.',
    pt: 'Entre em contato com nossa equipe para descobrir como nossos potenciadores podem melhorar seus rendimentos.'
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