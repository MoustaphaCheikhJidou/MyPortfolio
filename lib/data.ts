import type { LocalizedString } from "@/lib/i18n";

export const profile = {
  name: "El Moustpha Cheikh Jiddou",
  firstName: "El Moustpha",
  lastName: "Cheikh Jiddou",
  title: {
    en: "State Engineer in Statistics & Data Engineering, Higher Polytechnic School & Data Enthusiast — turning raw data into meaningful insights.",
    fr: "Ingénieur d'État en Statistique & Ingénierie des Données, École Supérieure Polytechnique & passionné de données — je transforme la donnée brute en connaissances utiles.",
  } satisfies LocalizedString,
  shortTitle: {
    en: "Data Engineer & Full Stack Developer",
    fr: "Ingénieur Data & Développeur Full Stack",
  } satisfies LocalizedString,
  email: "elmoustapha.cheikh.jiddou@gmail.com",
  phone: "+222 48 64 73 76",
  whatsapp: "22248647376",
  socials: {
    kaggle: "https://www.kaggle.com/jiddou26",
    linkedin: "https://www.linkedin.com/in/el-moustapha-cheikh-jidou/",
    github: "https://github.com/MoustaphaCheikhJidou",
  },
  stats: [
    { value: "13+", label: { en: "Projects Completed", fr: "Projets Réalisés" } satisfies { en: string; fr: string } },
    { value: "3+", label: { en: "Years Experience", fr: "Années d'Expérience" } satisfies { en: string; fr: string } },
  ],
  heroImages: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"],
};

export const heroRoles: LocalizedString[] = [
  { en: "Data Engineer", fr: "Ingénieur Data" },
  { en: "Full Stack Developer", fr: "Développeur Full Stack" },
  { en: "Statistical Analyst", fr: "Analyste Statisticien" },
  { en: "AI Enthusiast", fr: "Passionné d'IA" },
];

export type CVVersion = {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  href: LocalizedString;
  pages: number;
};

export const cvVersions: CVVersion[] = [
  {
    id: "principal",
    title: { en: "Complete Résumé", fr: "CV Principal Complet" },
    description: {
      en: "Full career history — every experience, project, and certification.",
      fr: "Parcours complet — toutes les expériences, projets et certifications.",
    },
    href: { en: "/cv/cv-principal-complet.pdf", fr: "/cv/cv-principal-complet.pdf" },
    pages: 5,
  },
];

export type TechItem = {
  label: string;
  monogram: string;
  colorClass: string;
  logo?: string;
};

export type TechCategoryEntry = {
  title: LocalizedString;
  description: LocalizedString;
  items: TechItem[];
};

const tech = (
  label: string,
  monogram: string,
  colorClass = "bg-primary/20 text-primary-light",
  logo?: string
): TechItem => ({
  label,
  monogram,
  colorClass,
  logo: logo ? `/images/tech/${logo}.png` : undefined,
});

// Derived from the existing bio ("Python, Next.js, PostgreSQL + pgvector, Docker, and LaTeX")
export const techStack: TechItem[] = [
  tech("Python", "Py", "bg-[#3776ab]/20 text-[#4b8bbe]", "python"),
  tech("Next.js", "N", "bg-white/10 text-text", "nextjs"),
  tech("PostgreSQL", "Pg", "bg-[#336791]/20 text-[#6ba6d6]", "postgresql"),
  tech("pgvector", "Vc", "bg-cyan/20 text-cyan-light"),
  tech("Docker", "Dk", "bg-[#2496ed]/20 text-[#4fb4f7]", "docker"),
  tech("LaTeX", "Tx", "bg-primary/20 text-primary-light", "latex"),
];

// Full technology stack shown in the dedicated "Tech Stack" section, categorized
// to match the reference layout (icon + label grids, no prose).
export const techCategories: TechCategoryEntry[] = [
  {
    title: { en: "Programming Languages", fr: "Langages de Programmation" },
    description: {
      en: "Core languages used across data, backend and scripting work.",
      fr: "Langages essentiels utilisés pour la data, le backend et le scripting.",
    },
    items: [
      tech("Python", "Py", "bg-[#3776ab]/20 text-[#4b8bbe]", "python"),
      tech("R", "R", "bg-[#276dc3]/20 text-[#276dc3]", "r"),
      tech("Julia", "Jl", "bg-[#9558b2]/20 text-[#9558b2]", "julia"),
      tech("Scala", "Sc", "bg-[#dc322f]/20 text-[#dc322f]", "scala"),
      tech("Java", "Jv", "bg-[#f89820]/20 text-[#f89820]", "java"),
      tech("JavaScript", "Js", "bg-[#f7df1e]/20 text-[#f7df1e]", "javascript"),
      tech("PySpark", "PySp", "bg-[#e25a1c]/20 text-[#e25a1c]", "pyspark"),
      tech("VBA", "Vba", "bg-[#004E8C]/20 text-[#5b9bd5]", "vba"),
      tech("Bash", "Sh", "bg-white/10 text-text", "bash"),
    ],
  },
  {
    title: { en: "Statistics, Econometrics & Survey Tools", fr: "Statistiques, Économétrie & Outils d'Enquête" },
    description: {
      en: "Software for statistical analysis, econometric modeling, economic analysis and field data collection.",
      fr: "Logiciels d'analyse statistique, de modélisation économétrique, d'analyse économique et de collecte de données de terrain.",
    },
    items: [
      tech("Stata", "St", undefined, "stata"),
      tech("SPSS", "Sp", undefined, "spss"),
      tech("Eviews", "Ev", undefined, "eviews"),
      tech("GAMS", "Ga", undefined, "gams"),
      tech("Sphinx", "Sx", undefined, "sphinx"),
      tech("KoboToolbox", "Ko", undefined, "kobotoolbox"),
      tech("ODK Collect", "Odk", undefined, "odkcollect"),
      tech("CSPro", "Cs", undefined, "cspro"),
      tech("ERETES", "Er", undefined, "eretes"),
    ],
  },
  {
    title: { en: "Frontend Development", fr: "Développement Frontend" },
    description: {
      en: "Technologies for building modern, responsive web interfaces.",
      fr: "Technologies pour créer des interfaces web modernes et réactives.",
    },
    items: [
      tech("React", "Rc", "bg-[#61dafb]/20 text-[#61dafb]", "react"),
      tech("Next.js", "N", "bg-white/10 text-text", "nextjs"),
      tech("HTML5", "H5", "bg-[#e34f26]/20 text-[#e34f26]", "html5"),
      tech("CSS3", "C3", "bg-[#1572b6]/20 text-[#1572b6]", "css3"),
      tech("Tailwind CSS", "Tw", "bg-[#06b6d4]/20 text-cyan-light", "tailwindcss"),
      tech("Flutter", "Fl", "bg-[#02569b]/20 text-[#54c5f8]", "flutter"),
    ],
  },
  {
    title: { en: "Data Engineering & Backend", fr: "Data Engineering & Backend" },
    description: {
      en: "Server-side frameworks and pipelines for moving and processing data.",
      fr: "Frameworks serveur et pipelines pour traiter et faire circuler la donnée.",
    },
    items: [
      tech("Django", "Dj", "bg-[#092e20]/40 text-[#44b78b]", "django"),
      tech("Flask", "Fk", "bg-white/10 text-text", "flask"),
      tech("FastAPI", "Fa", "bg-[#009688]/20 text-[#38d9c9]", "fastapi"),
      tech("Spring Boot", "Sb", "bg-[#6db33f]/20 text-[#6db33f]", "springboot"),
      tech("Hadoop", "Hd", "bg-[#66ccff]/20 text-[#66ccff]", "hadoop"),
      tech("Spark", "Sp", "bg-[#e25a1c]/20 text-[#e25a1c]", "spark"),
      tech("Kafka", "Kf", "bg-white/10 text-text", "kafka"),
      tech("n8n", "n8", "bg-[#ea4b71]/20 text-[#ea4b71]", "n8n"),
      tech("Airbyte", "Ab", "bg-[#615eff]/20 text-[#8886ff]", "airbyte"),
      tech("dbt", "dbt", "bg-[#ff694b]/20 text-[#ff694b]", "dbt"),
    ],
  },
  {
    title: { en: "Databases & GIS", fr: "Bases de Données & SIG" },
    description: {
      en: "Data storage and spatial analysis technologies.",
      fr: "Technologies de stockage de données et d'analyse spatiale.",
    },
    items: [
      tech("PostgreSQL", "Pg", "bg-[#336791]/20 text-[#6ba6d6]", "postgresql"),
      tech("Oracle", "Or", "bg-[#f80000]/20 text-[#f80000]", "oracle"),
      tech("QGIS", "Qg", "bg-[#589632]/20 text-[#83c17e]", "qgis"),
      tech("ArcGIS", "Ag", "bg-[#4bb4e6]/20 text-[#4bb4e6]", "arcgis"),
    ],
  },
  {
    title: { en: "AI & Machine Learning", fr: "IA & Machine Learning" },
    description: {
      en: "Frameworks for deep learning, NLP/RAG and MLOps.",
      fr: "Frameworks pour le deep learning, le NLP/RAG et le MLOps.",
    },
    items: [
      tech("TensorFlow", "Tf", "bg-[#ff6f00]/20 text-[#ff9d45]", "tensorflow"),
      tech("PyTorch", "Pt", "bg-[#ee4c2c]/20 text-[#ee4c2c]", "pytorch"),
      tech("Keras", "Kr", "bg-[#d00000]/20 text-[#ff5a5a]", "keras"),
      tech("MLflow", "Ml", "bg-[#0194e2]/20 text-[#4fb4e8]", "mlflow"),
    ],
  },
  {
    title: { en: "Data Science & Dev Tools", fr: "Data Science & Outils de Développement" },
    description: {
      en: "Everyday tools for analysis, visualization and version control.",
      fr: "Outils du quotidien pour l'analyse, la visualisation et le versioning.",
    },
    items: [
      tech("NumPy", "Np", "bg-[#4dabcf]/20 text-[#4dabcf]", "numpy"),
      tech("Pandas", "Pd", "bg-[#150458]/40 text-[#8f8ce7]", "pandas"),
      tech("Plotly", "Pl", "bg-[#3f4f75]/30 text-[#7c93d6]", "plotly"),
      tech("Gradio", "Gr", "bg-[#ff7c00]/20 text-[#ff9d45]", "gradio"),
      tech("Power BI", "Bi", "bg-[#f2c811]/20 text-[#f2c811]", "powerbi"),
      tech("Kaggle", "Kg", "bg-[#20beff]/20 text-[#20beff]", "kaggle"),
      tech("Git", "Gt", "bg-[#f05032]/20 text-[#f05032]", "git"),
      tech("GitHub", "Gh", "bg-white/10 text-text", "github"),
      tech("Linux", "Lx", "bg-[#fcc624]/20 text-[#fcc624]", "linux"),
      tech("LaTeX", "Tx", "bg-primary/20 text-primary-light", "latex"),
      tech("Excel", "Ex", "bg-[#217346]/20 text-[#4caf7d]", "excel"),
    ],
  },
  {
    title: { en: "Collaboration & Dev Environments", fr: "Collaboration & Environnements de Développement" },
    description: {
      en: "Project tracking and editors used for day-to-day development work.",
      fr: "Outils de suivi de projet et éditeurs utilisés au quotidien.",
    },
    items: [
      tech("Jira", "Jr", "bg-[#0052cc]/20 text-[#4c9aff]", "jira"),
      tech("Trello", "Tr", "bg-[#0052cc]/20 text-[#4c9aff]", "trello"),
      tech("VS Code", "Vs", "bg-[#007acc]/20 text-[#4fc1e9]", "vscode"),
      tech("Cursor", "Cu", "bg-white/10 text-text", "cursor"),
    ],
  },
];

export const about = {
  paragraphs: [
    {
      en: 'State Engineer in Statistics and Data Engineering from <strong>École Supérieure Polytechnique (ESP)</strong>, Mauritania. Working as a Data Systems &amp; IT Architecture intern at the <strong>Banque Nationale de Mauritanie</strong> — building a centralized data warehouse, containerized microservices, and a secure multi-LLM RAG chatbot integrated with WhatsApp.',
      fr: 'Ingénieur d\'État en Statistique et Ingénierie des Données de l\'<strong>École Supérieure Polytechnique (ESP)</strong>, Mauritanie. Stagiaire Architecte Systèmes de Données &amp; IT à la <strong>Banque Nationale de Mauritanie</strong> — conception d\'un data warehouse centralisé, de microservices conteneurisés et d\'un chatbot RAG multi-LLM sécurisé intégré à WhatsApp.',
    },
    {
      en: "I've also completed a macroeconomic research internship at the <strong>Banque Centrale de Mauritanie</strong> (DSGE modeling of monetary regimes) and a geotechnical engineering internship at <strong>Kinross Gold (Tasiast)</strong>, building monitoring dashboards and short-term forecasting tools.",
      fr: "J'ai également complété un stage de recherche macroéconomique à la <strong>Banque Centrale de Mauritanie</strong> (modélisation DSGE des régimes monétaires) ainsi qu'un stage d'ingénierie géotechnique chez <strong>Kinross Gold (Tasiast)</strong>, où j'ai développé des tableaux de bord de suivi et des outils de prévision court terme.",
    },
    {
      en: "My stack spans <strong>Python, Next.js, PostgreSQL + pgvector, Docker</strong>, and LaTeX — with a strong interest in applied AI, data pipelines, and systems that actually work in production. As <strong>President of the ESP Data Club</strong>, I led projects that encourage collaboration and learning in data science.",
      fr: "Ma stack couvre <strong>Python, Next.js, PostgreSQL + pgvector, Docker</strong>, et LaTeX — avec un fort intérêt pour l'IA appliquée, les pipelines de données, et les systèmes qui fonctionnent réellement en production. En tant que <strong>Président de l'ESP Data Club</strong>, j'ai dirigé des projets favorisant la collaboration et l'apprentissage en data science.",
    },
  ] satisfies LocalizedString[],
};

export type EducationEntry = {
  year: LocalizedString;
  title: LocalizedString;
  institution: string;
  location: string;
  logo?: string;
};

export const education: EducationEntry[] = [
  {
    year: { en: "October 2023 – June 2026", fr: "Octobre 2023 – Juin 2026" },
    title: { en: "State Engineer in Statistics and Data Engineering", fr: "Ingénieur d'État en Statistique et en Ingénierie des Données" },
    institution: "Higher Polytechnic School of Nouakchott (ESP)",
    location: "Mauritania",
    logo: "/images/logos/esp.png",
  },
  {
    year: { en: "October 2025 – February 2026", fr: "Octobre 2025 – Février 2026" },
    title: { en: "Exchange Semester: Computer Engineering & Networks", fr: "Semestre d'échange : Ingénierie Informatique et Réseaux" },
    institution: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS)",
    location: "Rabat, Morocco",
    logo: "/images/logos/ensias.png",
  },
  {
    year: { en: "October 2023 – June 2025", fr: "Octobre 2023 – Juin 2025" },
    title: {
      en: "Master's in Applied Econometrics and Statistics – Economic Statistical Engineering Track",
      fr: "Master en Économétrie et Statistiques Appliquées – Parcours Ingénierie Statistique Économique",
    },
    institution: "Faculty of Economic Sciences and Management (FSEG)",
    location: "Mauritania",
    logo: "/images/logos/fseg.png",
  },
  {
    year: { en: "October 2020 – June 2023", fr: "Octobre 2020 – Juin 2023" },
    title: { en: "Bachelor's in Applied Statistics", fr: "Licence Professionnelle en Statistique Appliquée" },
    institution: "Higher Institute of Statistical Professions (GP)",
    location: "Mauritania",
    logo: "/images/logos/gp.png",
  },
];

export type ExperienceRole = {
  id?: string;
  title: LocalizedString;
  period: string;
  location: string;
  bullets: LocalizedString[];
};

export type ExperienceGroup = {
  org: string;
  logo?: string;
  roles: ExperienceRole[];
};

export const experience: ExperienceGroup[] = [
  {
    org: "Banque Nationale de Mauritanie (BNM)",
    logo: "/images/logos/bnm.png",
    roles: [
      {
        title: { en: "Data Systems & IT Architecture Intern", fr: "Stagiaire Architecte Systèmes de Données & IT" },
        period: "Feb 2025 – Present",
        location: "Nouakchott",
        bullets: [
          {
            en: "Designed and implemented a centralized enterprise Data Warehouse backed by robust ELT pipelines, automated flow orchestration, and predictive models.",
            fr: "Conception et implémentation d'un Data Warehouse centralisé d'entreprise s'appuyant sur des pipelines ELT robustes, l'orchestration automatisée des flux et des modèles prédictifs.",
          },
          {
            en: "Architected and deployed a containerized microservices infrastructure over isolated Docker networks on on-premise production servers.",
            fr: "Architecture et déploiement d'une infrastructure de microservices conteneurisée via des réseaux Docker isolés sur des serveurs applicatifs de production on-premise.",
          },
          {
            en: "Built a secure conversational agent (Click) connected to the WhatsApp REST API, with a custom NLU module for dynamic query routing.",
            fr: "Développement et intégration d'un agent conversationnel intelligent sécurisé (Click) connecté aux API REST de WhatsApp, incluant un module NLU personnalisé pour le routage dynamique des requêtes.",
          },
          {
            en: "Implemented a RAG (Retrieval-Augmented Generation) architecture with PostgreSQL/pgvector to index and query official banking documentation without data leakage.",
            fr: "Mise en œuvre d'une architecture RAG (Retrieval-Augmented Generation) avec base de données PostgreSQL/pgvector pour indexer et interroger la documentation bancaire officielle sans fuite de données.",
          },
          {
            en: "Benchmarked several LLMs (GPT-4o, Claude 3.5, Gemini 1.5, local Llama) to balance performance, infrastructure cost, and strict confidentiality.",
            fr: "Évaluation technique et benchmarking de plusieurs grands modèles de langage (GPT-4o, Claude 3.5, Gemini 1.5, Llama local) afin d'optimiser le compromis performance, coûts d'infrastructure et stricte confidentialité.",
          },
          {
            en: "Developed sequential neural network models (LSTM, GRU) to anticipate rapid photovoltaic power drops and plan for critical infrastructure resilience.",
            fr: "Développement de modèles de réseaux de neurones séquentiels (LSTM, GRU) infra-horaires pour anticiper les chutes rapides de puissance photovoltaïque et planifier la résilience des infrastructures critiques.",
          },
          {
            en: "Environment: Python (FastAPI), Data Warehousing, ELT pipelines, Docker, N8N, PostgreSQL (pgvector), PyTorch, React, REST APIs, Linux/Bash.",
            fr: "Environnement technique : Python (FastAPI), Data Warehousing, pipelines ELT, Docker, N8N, PostgreSQL (pgvector), PyTorch, React, API REST, Linux/Bash.",
          },
        ],
      },
    ],
  },
  {
    org: "Institut Supérieur des Métiers de la Statistique (ISS)",
    logo: "/images/logos/gp.png",
    roles: [
      {
        id: "iss-teaching-year2",
        title: {
          en: "Lecturer — Poverty & Household Living Conditions + Sociological Survey Methods",
          fr: "Enseignant vacataire — Pauvreté & Conditions de Vie des Ménages + Enquête Sociologique",
        },
        period: "Feb 2026 – Jun 2026",
        location: "Nouakchott",
        bullets: [
          {
            en: "Renewed for a second consecutive year with an additional course module.",
            fr: "Reconduction pour une deuxième année avec un module supplémentaire.",
          },
          {
            en: "Taught Poverty and Household Living Conditions module (improved edition).",
            fr: "Enseignement du module Pauvreté et Conditions de Vie des Ménages (édition améliorée).",
          },
          {
            en: "Designed and delivered a new module: Sociological Survey Methods (survey methodology, sampling, questionnaire design, data analysis).",
            fr: "Conception et enseignement d'un nouveau module : Enquête Sociologique (méthodologie d'enquête, échantillonnage, conception de questionnaires, analyse des données).",
          },
          {
            en: "Supervised tutorials and practical sessions with field survey simulations using KoboToolbox, CSPro, and Stata.",
            fr: "Encadrement des TD et TP avec simulation d'enquêtes terrain et utilisation de KoboToolbox, CSPro et Stata.",
          },
          {
            en: "Directed and evaluated final-year projects (PFE) and supervised worker internships.",
            fr: "Direction et évaluation des PFE et encadrement des stages ouvriers.",
          },
          {
            en: "Developed course materials, case studies, and evaluation frameworks for both modules.",
            fr: "Développement des supports de cours, études de cas et grilles d'évaluation.",
          },
        ],
      },
      {
        id: "iss-teaching-year1",
        title: {
          en: "Lecturer — Poverty and Household Living Conditions",
          fr: "Enseignant vacataire — Pauvreté et Conditions de Vie des Ménages",
        },
        period: "Feb 2025 – Jun 2025",
        location: "Nouakchott",
        bullets: [
          {
            en: "First higher education teaching experience at the institution from which I graduated.",
            fr: "Première expérience d'enseignement supérieur au sein de l'établissement dont je suis diplômé.",
          },
          {
            en: "Prepared and delivered lectures on poverty measurement methodologies and household living conditions analysis.",
            fr: "Préparation et animation des cours magistraux sur les méthodologies de mesure de la pauvreté et l'analyse des conditions de vie des ménages.",
          },
          {
            en: "Designed and supervised tutorials (TD) and practical sessions (TP), using real case studies from national household surveys.",
            fr: "Conception et encadrement des travaux dirigés (TD) et travaux pratiques (TP), avec études de cas réels issus d'enquêtes ménages nationales.",
          },
          {
            en: "Provided personalized academic support and continuous student monitoring throughout the semester.",
            fr: "Accompagnement pédagogique personnalisé et suivi continu des étudiants tout au long du semestre.",
          },
          {
            en: "Supervised final-year projects (PFE) and worker internships, with mentoring on methodological and technical aspects.",
            fr: "Encadrement des projets de fin d'études (PFE) et des stages ouvriers, avec mentorat sur les aspects méthodologiques et techniques.",
          },
        ],
      },
    ],
  },
  {
    org: "Banque Centrale de Mauritanie (BCM) — Economic Studies & Monetary Stability",
    logo: "/images/logos/bcm.png",
    roles: [
      {
        title: { en: "End-of-Studies Internship — Macroeconomic Analysis & DSGE Modeling", fr: "Stage de fin d'études — Analyse macroéconomique et modélisation DSGE" },
        period: "Feb 2026 – May 2026",
        location: "Nouakchott",
        bullets: [
          {
            en: "Produced a master's thesis in Econometrics and Applied Statistics comparing monetary regimes in Mauritania using a small open-economy DSGE model.",
            fr: "Réalisation d'un mémoire de master en Économétrie et Statistique Appliquée portant sur l'analyse comparative des régimes monétaires en Mauritanie à l'aide d'un modèle DSGE de petite économie ouverte.",
          },
          {
            en: "Analyzed monetary policy transmission mechanisms, inflation, exchange rate dynamics, and macroeconomic trends in the Mauritanian context.",
            fr: "Analyse des mécanismes de transmission de la politique monétaire, de l'inflation, du taux de change et des dynamiques macroéconomiques dans le contexte mauritanien.",
          },
          {
            en: "Structured macroeconomic and monetary time series from BCM, ANSADE, and international databases for calibration and simulation.",
            fr: "Exploitation et structuration de séries macroéconomiques et monétaires issues de la BCM, de l'ANSADE et de bases internationales pour la calibration et les simulations économiques.",
          },
          {
            en: "Contributed to the department's conjunctural analysis, macroeconomic forecasts, and monetary statistics.",
            fr: "Participation aux activités de la Direction Générale des Études et de la Stabilité Monétaire : analyse conjoncturelle, prévisions macroéconomiques et statistiques monétaires.",
          },
          {
            en: "Environment: Econometrics, DSGE, macroeconomic analysis, Python, R, Excel, Julia, GAMS.",
            fr: "Environnement : Économétrie, DSGE, analyse macroéconomique, statistiques monétaires, Python, R, Excel, Julia, GAMS.",
          },
        ],
      },
    ],
  },
  {
    org: "Kinross Gold Corporation (Tasiast)",
    logo: "/images/logos/kinross.png",
    roles: [
      {
        title: { en: "Assistant Engineer Intern — Mining & Geotechnical Department", fr: "Stagiaire assistant-ingénieur — Département Mine, Service Géotechnique" },
        period: "Jul 2025 – Sep 2025",
        location: "Tasiast, Mauritania",
        bullets: [
          {
            en: "Wall Compliance & 80/80: built a Python/Gradio dashboard for Toe/Crest/Berm Width/BFA monitoring from CALC and COMPLIANCE files, with auto-detection, KPIs, and trend tracking.",
            fr: "Wall Compliance & 80/80 : conception d'un mini-dashboard Python/Gradio pour le suivi Toe/Crest/Berm Width/BFA à partir des fichiers CALC et COMPLIANCE (auto-détection des entrées, KPI, barres 80/80, tendances & deltas).",
          },
          {
            en: "Daily Survey digitization: Microsoft Forms → SharePoint/Excel Web → Power BI pipeline with near real-time KPIs (% Done, Backlog, SLA Breach).",
            fr: "Digitalisation Daily Survey : chaîne Microsoft Forms → SharePoint/Excel Web → Power BI avec typages/contrôles, calcul de durées, KPI (% Done, Backlog, SLA Breach) et rafraîchissement quasi temps réel.",
          },
          {
            en: "PV short-term forecasting: prepared minute-level data (lags, ramps, time encodings) and prototyped LSTM/GRU models to anticipate power drops.",
            fr: "Prévision PV infra-horaire : préparation de données minute (lags, rampes ΔP, encodages temporels) et prototypes séquentiels (LSTM/GRU) pour anticiper les chutes rapides de puissance.",
          },
          {
            en: "Environment: Python (NumPy, pandas, Plotly, Gradio), Power BI, SharePoint/Excel Web, Git.",
            fr: "Environnement : Python (NumPy, pandas, Plotly, Gradio), Power BI, SharePoint/Excel Web, versionnement git.",
          },
        ],
      },
    ],
  },
  {
    org: "Caisse des Dépôts et de Développement (CDD)",
    logo: "/images/logos/cdd.png",
    roles: [
      {
        title: { en: "End-of-Study Internship", fr: "Stage de Fin d'Étude" },
        period: "Feb – Jun 2023",
        location: "Nouakchott",
        bullets: [
          {
            en: "Analyzed banking data from CDD to assess the impact of the credit guarantee system on loan defaults in Mauritania.",
            fr: "Analyse des données bancaires issues de la CDD pour évaluer l'impact du système de garantie de crédit sur les défauts de paiement en Mauritanie.",
          },
          {
            en: "Used econometric models and modern machine learning approaches to predict default risks.",
            fr: "Utilisation de modèles économétriques et d'approches modernes de machine learning pour prédire les risques de défaut.",
          },
          {
            en: "Prepared and interpreted statistical reports on the socio-demographic and financial characteristics of borrowers.",
            fr: "Élaboration et interprétation de rapports statistiques concernant les caractéristiques sociodémographiques et financières des emprunteurs.",
          },
          {
            en: "Developed computational solutions for risk analysis using logistic regression, k-NN, and Random Forest.",
            fr: "Développement de solutions computationnelles pour l'analyse des risques avec des algorithmes tels que la régression logistique, k-NN et Random Forest.",
          },
        ],
      },
    ],
  },
  {
    org: "ANSADE",
    logo: "/images/logos/ansade.png",
    roles: [
      {
        title: { en: "Enumerator", fr: "Agent Recenseur" },
        period: "Jul – Aug 2022",
        location: "Nouakchott",
        bullets: [
          {
            en: "Collected field data for the pilot General Population and Housing Census (RGPH).",
            fr: "Collecte de données sur le terrain pour le Recensement Général de la Population et de l'Habitat (RGPH) pilote.",
          },
          {
            en: "Skills acquired: data collection, communication, and fieldwork.",
            fr: "Compétences acquises : collecte de données, communication, travail sur le terrain.",
          },
        ],
      },
      {
        title: { en: "Worker Internship", fr: "Stage Ouvrier" },
        period: "Apr – Jun 2022",
        location: "Nouakchott",
        bullets: [
          {
            en: "Developed a methodology for data mapping to design sectoral accounts.",
            fr: "Élaboration d'une méthodologie pour la cartographie de données en vue de la conception des comptes sectoriels.",
          },
          {
            en: "Participated in the collection and processing of economic branch data for national accounts.",
            fr: "Participation à la collecte et au traitement des données des branches économiques pour les comptes nationaux.",
          },
          {
            en: "Analyzed sectoral data using ERETES software to compile economic accounts.",
            fr: "Analyse des données sectorielles en utilisant le logiciel ERETES pour compiler les comptes économiques.",
          },
          {
            en: "Trained on GDP decomposition techniques as part of the International Comparison Program.",
            fr: "Formation sur les techniques de décomposition du PIB dans le cadre du Programme de Comparaison Internationale.",
          },
          {
            en: "Contributed to the national survey process for the mobilization and quantification of ZAKAT.",
            fr: "Contribution au processus d'enquête nationale pour la mobilisation et la quantification de la ZAKAT.",
          },
        ],
      },
    ],
  },
];

export type SkillEntry = {
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
};

export const skills: SkillEntry[] = [
  {
    icon: "users",
    title: { en: "Soft Skills", fr: "Savoir-Être" },
    description: {
      en: "Leadership, project management, communication, teamwork, adaptability.",
      fr: "Leadership, gestion de projet, communication, travail d'équipe, adaptabilité.",
    },
  },
];

export type LanguageEntry = {
  name: LocalizedString;
  level: LocalizedString;
  proficiency: number; // out of 4
};

export const languages: LanguageEntry[] = [
  {
    name: { en: "Arabic", fr: "Arabe" },
    level: { en: "Native Language", fr: "Langue Natale" },
    proficiency: 4,
  },
  {
    name: { en: "French", fr: "Français" },
    level: { en: "DALF C1", fr: "DALF C1" },
    proficiency: 3,
  },
  {
    name: { en: "English", fr: "Anglais" },
    level: { en: "CEFR B1 — Tracktest English Assessment", fr: "CECR B1 — Tracktest English Assessment" },
    proficiency: 2,
  },
];

export type AssociativeRole = {
  title: LocalizedString;
  period: string;
};

export type AssociativeGroup = {
  org: LocalizedString;
  logo?: string;
  roles: AssociativeRole[];
};

export const associative: AssociativeGroup[] = [
  {
    org: { en: "ISS Alumni Association", fr: "Alumni de l'ISS" },
    logo: "/images/logos/iss-alumni.png",
    roles: [{ title: { en: "President", fr: "Président" }, period: "" }],
  },
  {
    org: { en: "Association des Statisticiens Mauritaniens", fr: "Association des Statisticiens Mauritaniens" },
    logo: "/images/logos/asm.png",
    roles: [{ title: { en: "Events & Programs Officer", fr: "Responsable des événements et programmes" }, period: "" }],
  },
  {
    org: { en: "ESP Data Club", fr: "ESP Data Club" },
    logo: "/images/logos/esp-data-club.png",
    roles: [
      { title: { en: "President", fr: "Président" }, period: "January 2023 – April 2025" },
      { title: { en: "Event Coordinator", fr: "Coordinateur d'événements" }, period: "October 2022 – January 2023" },
    ],
  },
  {
    org: { en: "Clubs Leaders Étudiants Francophones (CLEF)", fr: "Clubs Leaders Étudiants Francophones (CLEF)" },
    logo: "/images/logos/clef.png",
    roles: [{ title: { en: "Member", fr: "Membre" }, period: "" }],
  },
  {
    org: { en: "Mauritanian Engineering Community (MEC)", fr: "Mauritanian Engineering Community (MEC)" },
    logo: "/images/logos/mec.png",
    roles: [{ title: { en: "Member", fr: "Membre" }, period: "" }],
  },
  {
    org: { en: "Military Training", fr: "Formation Militaire" },
    roles: [{ title: { en: "Participant", fr: "Participant" }, period: "" }],
  },
];

export type AchievementEntry = {
  title: LocalizedString;
  description: LocalizedString;
  href?: string;
};

export const achievements: AchievementEntry[] = [
  {
    title: { en: "1st Place, RIMAI Data Science Challenge 2024", fr: "1ère place au RIMAI Data Science Challenge 2024" },
    description: {
      en: "Competition focused on license plate recognition using AI techniques.",
      fr: "Compétition axée sur la reconnaissance de plaques d'immatriculation en utilisant des techniques d'IA.",
    },
    href: "https://www.rim-ai.com/challenge",
  },
  {
    title: { en: "Organizer, First Datathon in Mauritania", fr: "Organisation du premier Datathon en Mauritanie" },
    description: {
      en: "Three-day competition centered on Mauritanian data analysis. As ESP Data Club president, supervised the organization and judged competitors through data science challenges.",
      fr: "Compétition de trois jours axée sur l'analyse des données mauritaniennes. En tant que président de l'ESP Data Club, j'ai supervisé l'organisation et évalué les participants à travers des défis de data science.",
    },
  },
];

export type CertificationEntry = {
  title: string;
  issuer: string;
  date: string;
  href: string;
};

// Certification titles are official course/program names — kept unchanged across languages.
export const certifications: CertificationEntry[] = [
  {
    title: "Relational Database (v8)",
    issuer: "freeCodeCamp",
    date: "November 2025",
    href: "https://freecodecamp.org/certification/el_moustapha_cheikh_jidou/relational-database-v8",
  },
  {
    title: "Data Manipulation in SQL",
    issuer: "DataCamp",
    date: "November 2023",
    href: "https://www.datacamp.com/statement-of-accomplishment/course/0b455b5c403a108e847df406cae8ae46aa9623f6?raw=1",
  },
  {
    title: "Google Advanced Data Analytics Capstone",
    issuer: "Google",
    date: "November 2023",
    href: "https://www.coursera.org/account/accomplishments/records/UCU4W3HV5KAR",
  },
  {
    title: "Google Advanced Data Analytics Professional Certificate",
    issuer: "Google",
    date: "November 2023",
    href: "https://www.coursera.org/account/accomplishments/specialization/F6NY5HAVFY2S",
  },
  {
    title: "Intermediate SQL",
    issuer: "DataCamp",
    date: "November 2023",
    href: "https://www.datacamp.com/statement-of-accomplishment/course/dc4900c31a4d547e6e4f317fe9f64588c49fb71e?raw=1",
  },
  {
    title: "Introduction to Data Science in Python",
    issuer: "DataCamp",
    date: "November 2023",
    href: "https://www.datacamp.com/statement-of-accomplishment/course/b1207834324f0c856760624c2bb470b3afd6d642?raw=1",
  },
  {
    title: "Python Data Science Toolbox (Part 2)",
    issuer: "DataCamp",
    date: "November 2023",
    href: "https://www.datacamp.com/statement-of-accomplishment/course/c6351222bc9ed2c5771273e520045c09e60d5b48?raw=1",
  },
  {
    title: "Understanding Data Engineering",
    issuer: "DataCamp",
    date: "November 2023",
    href: "https://www.datacamp.com/statement-of-accomplishment/course/c129bc893ba40d2669b9682325ad8a4c3b6d8ecc?raw=1",
  },
  {
    title: "Writing Efficient R Code",
    issuer: "DataCamp",
    date: "November 2023",
    href: "https://www.datacamp.com/statement-of-accomplishment/course/6995ad305b5768d3d465ca0c38f3c26b8b25e3a4?raw=1",
  },
  {
    title: "Google Data Analytics",
    issuer: "Google",
    date: "September 2023",
    href: "https://www.coursera.org/account/accomplishments/specialization/certificate/JG3NPUJ7LZGL",
  },
  {
    title: "Data Visualization",
    issuer: "freeCodeCamp",
    date: "January 2023",
    href: "https://freecodecamp.org/certification/EL_Moustapha_Cheikh_Jidou/data-visualization",
  },
  {
    title: "Intermediate Python",
    issuer: "DataCamp",
    date: "November 2022",
    href: "https://www.datacamp.com/statement-of-accomplishment/course/43feb083d3979dbbec34f54a6c8cf6458e15cd12",
  },
  {
    title: "Intermediate R",
    issuer: "DataCamp",
    date: "November 2022",
    href: "https://www.datacamp.com/statement-of-accomplishment/course/929a5e8c2a4e42f4880ba65107b27e8f4b411fa3",
  },
  {
    title: "Introduction to Version Control with Git",
    issuer: "DataCamp",
    date: "November 2022",
    href: "https://www.datacamp.com/statement-of-accomplishment/course/a0d86c15550db6e4e8955c19e2c1f8037bda5497",
  },
  {
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    date: "October 2022",
    href: "https://freecodecamp.org/certification/EL_Moustapha_Cheikh_Jidou/data-analysis-with-python-v7",
  },
  {
    title: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    date: "October 2022",
    href: "https://freecodecamp.org/certification/EL_Moustapha_Cheikh_Jidou/scientific-computing-with-python-v7",
  },
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "September 2022",
    href: "https://freecodecamp.org/certification/EL_Moustapha_Cheikh_Jidou/front-end-development-libraries",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "August 2022",
    href: "https://freecodecamp.org/certification/ELMoustapha_Cheikh_Jidou/responsive-web-design",
  },
];

export const interests: LocalizedString[] = [
  { en: "Coding", fr: "Codage" },
  { en: "Travel", fr: "Voyage" },
  { en: "Football", fr: "Football" },
  { en: "Tourism", fr: "Tourisme" },
];

export type ProjectCategory = "data-science" | "web-development" | "statistics";

export type ProjectEntry = {
  title: string;
  description: LocalizedString;
  image?: string;
  category: ProjectCategory;
  href?: string;
  comingSoon?: boolean;
};

export const projectCategoryLabels: Record<ProjectCategory, LocalizedString> = {
  "data-science": { en: "Data Science", fr: "Data Science" },
  "web-development": { en: "Web Development", fr: "Développement Web" },
  statistics: { en: "Statistics", fr: "Statistiques" },
};

export const projectCategories: { value: "all" | ProjectCategory; label: LocalizedString }[] = [
  { value: "all", label: { en: "All", fr: "Tous" } },
  { value: "data-science", label: projectCategoryLabels["data-science"] },
  { value: "web-development", label: projectCategoryLabels["web-development"] },
  { value: "statistics", label: projectCategoryLabels["statistics"] },
];

export const projects: ProjectEntry[] = [
  {
    title: "Grain Size Analysis of 316L Microstructure",
    description: {
      en: "Computer-vision pipeline segmenting grain boundaries in 316L stainless steel micrographs (500×), comparing thresholding, gradient filters, HED, and a U-Net model, with a Gradio interface to extract grain size statistics.",
      fr: "Pipeline de vision par ordinateur segmentant les joints de grains sur des micrographies d'acier inox 316L (500×), comparant seuillage, filtres de gradient, HED et un modèle U-Net, avec une interface Gradio pour extraire les statistiques granulométriques.",
    },
    image: "/images/grain-size-analysis.png",
    category: "data-science",
    href: "https://github.com/MoustaphaCheikhJidou/grain-size-analysis-316L-microstructure",
  },
  {
    title: "Agricultural Data Analysis System (Smart Greenhouse)",
    description: {
      en: "Design and development of an intelligent system for analyzing agricultural data, specifically for greenhouses.",
      fr: "Conception et développement d'un système intelligent pour l'analyse de données agricoles, spécifiquement pour les serres agricoles.",
    },
    image: "/images/agr.png",
    category: "data-science",
    href: "https://github.com/MoustaphaCheikhJidou/smart-agriculture-system",
  },
  {
    title: "DataMine App",
    description: {
      en: "Collaborative platform for managing and tracking tasks on a geostatistical data project, with an interface for visualizing task progress on GitHub.",
      fr: "Plateforme collaborative pour la gestion et le suivi des tâches d'un projet de données géostatistiques, avec une interface de visualisation de l'avancement sur GitHub.",
    },
    image: "/images/datamine-app.png",
    category: "web-development",
    href: "https://github.com/MoustaphaCheikhJidou/DataMineSynergy-App.git",
  },
  {
    title: "Disaster Tweets NLP Classification",
    description: {
      en: "Development of a machine learning model to classify tweets related to natural disasters.",
      fr: "Développement d'un modèle d'apprentissage automatique pour classifier les tweets relatifs aux désastres naturels.",
    },
    image: "/images/clasification.png",
    category: "data-science",
    href: "https://github.com/MoustaphaCheikhJidou/disaster-tweets-nlp-classification.git",
  },
  {
    title: "Survey Management Application",
    description: {
      en: "Design and implementation of a survey management application to facilitate data collection and tracking.",
      fr: "Conception et réalisation d'une application de gestion d'enquête pour faciliter la collecte et le suivi des données.",
    },
    image: "/images/survayapp.avif",
    category: "web-development",
    href: "https://github.com/MoustaphaCheikhJidou/survey-data-collection.git",
  },
  {
    title: "Survey on the Perception of Influencers",
    description: {
      en: "Design and implementation of a survey on the perception of influencers in Mauritanian society.",
      fr: "Conception et réalisation d'une enquête sur la perception des influenceurs dans la société mauritanienne.",
    },
    image: "/images/survayinf.avif",
    category: "statistics",
    comingSoon: true,
  },
  {
    title: "Grade Management Application",
    description: {
      en: "Backend development with the Flask framework and use of HTML, CSS, and JavaScript for the frontend.",
      fr: "Développement backend avec le framework Flask et utilisation des langages HTML, CSS et JavaScript pour le front-end.",
    },
    image: "/images/note.webp",
    category: "web-development",
    href: "https://github.com/MoustaphaCheikhJidou/ISMSNotesApp.git",
  },
  {
    title: "Determinants of Academic Performance in Mauritania",
    description: {
      en: "Analysis of the factors influencing academic performance in Mauritania using R.",
      fr: "Analyse des facteurs influençant les performances scolaires en Mauritanie sous R.",
    },
    image: "/images/educ.jpg",
    category: "statistics",
    comingSoon: true,
  },
  {
    title: "Bridging the Future Baseline Data Challenge",
    description: {
      en: "A data analysis and predictive modeling project aimed at improving primary school reading proficiency in Mauritania across regions of Tagant, Gorgol and Brakna under the USDA-funded initiative.",
      fr: "Projet d'analyse de données et de modélisation prédictive visant à améliorer les compétences en lecture des élèves du primaire en Mauritanie dans les régions du Tagant, du Gorgol et du Brakna, dans le cadre d'une initiative financée par l'USDA.",
    },
    image: "/images/futur.jpg",
    category: "data-science",
    href: "https://github.com/MoustaphaCheikhJidou/Bridging-the-Future-Baseline-Data-Challenge",
  },
  {
    title: "Poverty & Inequality Forecasting in Mauritania",
    description: {
      en: "Forecasts four key poverty indicators from 1996 to 2030 using survey data and interpolation techniques to support policy planning.",
      fr: "Prévisions de quatre indicateurs clés de pauvreté de 1996 à 2030 à partir de données d'enquête et de techniques d'interpolation pour appuyer la planification des politiques publiques.",
    },
    image: "/images/pauv.jpg",
    category: "statistics",
    href: "https://github.com/MoustaphaCheikhJidou/Poverty-Gini-Forecast-Mauritania",
  },
  {
    title: "Modeling the Drivers of Mauritania's GDP with an ARDL Framework",
    description: {
      en: "Econometric modeling of Mauritania's growth dynamics using an AutoRegressive Distributed Lag (ARDL) model in R.",
      fr: "Modélisation économétrique de la dynamique de croissance de la Mauritanie à l'aide d'un modèle ARDL (AutoRegressive Distributed Lag) sous R.",
    },
    image: "/images/pib.jpg",
    category: "statistics",
    href: "https://github.com/MoustaphaCheikhJidou/ARDL-Growth-Mauritania",
  },
  {
    title: "Data Management Platform for the NCPI (ANSADE Project)",
    description: {
      en: "A Django web application for managing and analyzing data related to the National Consumer Price Index (NCPI).",
      fr: "Application web Django pour la gestion et l'analyse des données relatives à l'Indice National des Prix à la Consommation (INPC).",
    },
    image: "/images/inpc.jpg",
    category: "web-development",
    href: "https://github.com/MoustaphaCheikhJidou/INPC-Data-Management-and-Analysis-Platform",
  },
  {
    title: "RAG-WebSystem",
    description: {
      en: "End-to-end Retrieval-Augmented Generation engine: FAISS-based semantic search over indexed documents, contextual answer generation with an open-source model, exposed via a FastAPI backend and a React + Tailwind interface.",
      fr: "Moteur RAG (Retrieval-Augmented Generation) de bout en bout : recherche sémantique par vecteurs FAISS sur documents indexés, génération de réponses contextuelles avec un modèle open-source, exposé via un backend FastAPI et une interface React + Tailwind.",
    },
    image: "/images/legal.jpg",
    category: "data-science",
    href: "https://github.com/MoustaphaCheikhJidou/RAG-WebSystem",
  },
];
