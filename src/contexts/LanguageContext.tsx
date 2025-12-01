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
    fr: 'Bioprotection, boosters et biofertilisation à base d\'insectes pour une agriculture performante',
    en: 'Insect-based bioprotection, boosters and biofertilization for high-performance agriculture',
    es: 'Bioprotección, potenciadores y biofertilización a base de insectos para una agricultura de alto rendimiento',
    pt: 'Bioproteção, potenciadores e biofertilização à base de insetos para uma agricultura de alto desempenho'
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
    fr: 'solutions développées dont 2 déjà disponibles',
    en: 'solutions developed, 2 already available',
    es: 'soluciones desarrolladas, 2 ya disponibles',
    pt: 'soluções desenvolvidas, 2 já disponíveis'
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
    fr: 'Pour cela, nous exploitons le potentiel extraordinaire des insectes pour créer des solutions agricoles durables, performantes et abordables. Notre approche scientifique et technique combine',
    en: 'To achieve this, we harness the extraordinary potential of insects to create sustainable, efficient and affordable agricultural solutions. Our scientific and technical approach combines',
    es: 'Para ello, aprovechamos el extraordinario potencial de los insectos para crear soluciones agrícolas sostenibles, eficientes y asequibles. Nuestro enfoque científico y técnico combina',
    pt: 'Para isso, aproveitamos o extraordinário potencial dos insetos para criar soluções agrícolas sustentáveis, eficientes e acessíveis. Nossa abordagem científica e técnica combina'
  },
  'solutions.expertise': {
    fr: 'savoir faire artisanal, industriel et agronomique',
    en: 'artisanal, industrial and agronomic expertise',
    es: 'saber hacer artesanal, industrial y agronómico',
    pt: 'saber fazer artesanal, industrial e agronômico'
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
    fr: 'pour la santé des sols et la résilience des plantes',
    en: 'for soil health and plant resilience',
    es: 'para la salud del suelo y la resiliencia de las plantas',
    pt: 'para a saúde do solo e a resiliência das plantas'
  },
  'solutions.boosters.polypeptides': {
    fr: 'Riche en',
    en: 'Rich in',
    es: 'Rico en',
    pt: 'Rico em'
  },
  'solutions.boosters.substances': {
    fr: 'Substances actives',
    en: 'Active substances',
    es: 'Sustancias activas',
    pt: 'Substâncias ativas'
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
    fr: 'Engrais organique naturel',
    en: 'Natural organic fertilizer',
    es: 'Fertilizante orgánico natural',
    pt: 'Fertilizante orgânico natural'
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
    fr: 'Pourquoi protéger vos cultures avec des substances d\'insectes?',
    en: 'Why protect your crops with insect substances?',
    es: '¿Por qué proteger sus cultivos con sustancias de insectos?',
    pt: 'Por que proteger suas culturas com substâncias de insetos?'
  },
  'innovation.biocontrol.question': {
    fr: 'Pourquoi protéger vos cultures avec des insectes auxiliaires?',
    en: 'Why protect your crops with beneficial insects?',
    es: '¿Por qué proteger sus cultivos con insectos auxiliares?',
    pt: 'Por que proteger suas culturas com insetos auxiliares?'
  },
  // Infographic - Substances
  'innovation.infographic.substances.title': {
    fr: 'Des substances d\'insectes pour l\'agriculture',
    en: 'Insect substances for agriculture',
    es: 'Sustancias de insectos para la agricultura',
    pt: 'Substâncias de insetos para a agricultura'
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
    fr: 'Situé sur la commune de Dole, notre site est à seulement 2 heures de Paris, Bâle, Genève et Lyon, au cœur d\'un important bassin céréalier et viticole français.',
    en: 'Located in the municipality of Dole, our site is only 2 hours from Paris, Basel, Geneva and Lyon, in the heart of an important French cereal and wine-growing basin.',
    es: 'Situado en el municipio de Dole, nuestro sitio está a solo 2 horas de París, Basilea, Ginebra y Lyon, en el corazón de una importante cuenca cerealera y vitícola francesa.',
    pt: 'Localizado no município de Dole, nosso local fica a apenas 2 horas de Paris, Basileia, Genebra e Lyon, no coração de uma importante bacia cerealífera e vitícola francesa.'
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
    fr: 'Pionniers des biosolutions agricoles en France',
    en: 'Pioneers of agricultural biosolutions in France',
    es: 'Pioneros de las biosoluciones agrícolas en Francia',
    pt: 'Pioneiros das biosoluções agrícolas na França'
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
  'about.history.p1.vision': {
    fr: 'Keprea est née d\'une vision commune : révolutionner l\'agriculture grâce aux biosolutions issues d\'insectes.',
    en: 'Keprea was born from a common vision: revolutionizing agriculture through insect-based biosolutions.',
    es: 'Keprea nació de una visión común: revolucionar la agricultura gracias a las biosoluciones derivadas de insectos.',
    pt: 'A Keprea nasceu de uma visão comum: revolucionar a agricultura através de biosoluções derivadas de insetos.'
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
    fr: 'et activateurs de sols pour la résistance des cultures contre les stress abiotiques. Toutes ces solutions étant utilisables en',
    en: 'and soil activators for crop resistance against abiotic stress. All these solutions can be used in',
    es: 'y activadores de suelo para la resistencia de los cultivos contra el estrés abiótico. Todas estas soluciones se pueden usar en',
    pt: 'e ativadores de solo para a resistência das culturas contra o estresse abiótico. Todas essas soluções podem ser usadas em'
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
    fr: 'process industriels et agriculture',
    en: 'industrial processes and agriculture',
    es: 'procesos industriales y agricultura',
    pt: 'processos industriais e agricultura'
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
    fr: 'Nos biosolutions offrent des résultats concrets : protection des cultures, amélioration des rendements et réduction des intrants chimiques.',
    en: 'Our biosolutions offer concrete results: crop protection, improved yields and reduced chemical inputs.',
    es: 'Nuestras biosoluciones ofrecen resultados concretos: protección de cultivos, mejora de rendimientos y reducción de insumos químicos.',
    pt: 'Nossas biosoluções oferecem resultados concretos: proteção de culturas, melhoria de rendimentos e redução de insumos químicos.'
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