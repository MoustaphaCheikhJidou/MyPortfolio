export const profile = {
  name: "El Moustapha Cheikh Jiddou",
  firstName: "El Moustapha",
  lastName: "Cheikh Jiddou",
  title:
    "Engineering Student at Higher Polytechnic School & Data Enthusiast — turning raw data into meaningful insights.",
  email: "elmoustapha.cheikh.jiddou@gmail.com",
  phone: "+222 48 64 73 76",
  cvHref: "/assets/cv-moustapha-cheikh-jiddou.pdf",
  socials: {
    kaggle: "https://www.kaggle.com/jiddou26",
    linkedin: "https://www.linkedin.com/in/el-moustapha-cheikh-jidou/",
    github: "https://github.com/MoustaphaCheikhJidou",
  },
  stats: [
    { value: "13+", label: "Projects Completed" },
    { value: "3+", label: "Years Experience" },
  ],
  heroImages: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"],
  shortTitle: "Ingénieur Data & Développeur Full Stack",
};

export const heroRoles = [
  "Data Engineer",
  "Développeur Full Stack",
  "Analyste Statisticien",
  "Passionné d'IA",
];

export type TechStackEntry = {
  label: string;
  monogram: string;
  colorClass: string;
  logo?: string;
};

// Derived from the existing bio ("Python, Next.js, PostgreSQL + pgvector, Docker, and LaTeX")
export const techStack: TechStackEntry[] = [
  { label: "Python", monogram: "Py", colorClass: "bg-[#3776ab]/20 text-[#4b8bbe]", logo: "/images/tech/python.svg" },
  { label: "Next.js", monogram: "N", colorClass: "bg-white/10 text-text", logo: "/images/tech/nextjs.svg" },
  { label: "PostgreSQL", monogram: "Pg", colorClass: "bg-[#336791]/20 text-[#6ba6d6]", logo: "/images/tech/postgresql.svg" },
  { label: "pgvector", monogram: "Vc", colorClass: "bg-cyan/20 text-cyan-light" },
  { label: "Docker", monogram: "Dk", colorClass: "bg-[#2496ed]/20 text-[#4fb4f7]", logo: "/images/tech/docker.svg" },
  { label: "LaTeX", monogram: "Tx", colorClass: "bg-primary/20 text-primary-light", logo: "/images/tech/latex.svg" },
];

export const about = {
  paragraphs: [
    'Final-year engineering student at <strong>École Supérieure Polytechnique (ESP)</strong>, Mauritania, currently on exchange at <strong>ENSIAS, Rabat</strong>. Working as a Data Systems &amp; IT Architecture intern at the <strong>Banque Nationale de Mauritanie</strong> — building a centralized data warehouse, containerized microservices, and a secure multi-LLM RAG chatbot integrated with WhatsApp.',
    "I've also completed a macroeconomic research internship at the <strong>Banque Centrale de Mauritanie</strong> (DSGE modeling of monetary regimes) and a geotechnical engineering internship at <strong>Kinross Gold (Tasiast)</strong>, building monitoring dashboards and short-term forecasting tools.",
    "My stack spans <strong>Python, Next.js, PostgreSQL + pgvector, Docker</strong>, and LaTeX — with a strong interest in applied AI, data pipelines, and systems that actually work in production. As <strong>President of the ESP Data Club</strong>, I led projects that encourage collaboration and learning in data science.",
  ],
};

export type EducationEntry = {
  year: string;
  title: string;
  institution: string;
  location: string;
};

export const education: EducationEntry[] = [
  {
    year: "2025 – Present",
    title: "Exchange Semester: Computer Engineering & Networks",
    institution: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS)",
    location: "Rabat, Morocco",
  },
  {
    year: "2023 – 2026",
    title: "Engineer in Statistics and Data Engineering",
    institution: "Higher Polytechnic School of Nouakchott (ESP)",
    location: "Mauritania",
  },
  {
    year: "2023 – 2025",
    title: "Master's in Economic Statistics",
    institution: "Faculty of Economic Sciences and Management (FSEG)",
    location: "Mauritania",
  },
  {
    year: "2020 – 2023",
    title: "Bachelor's in Applied Statistics",
    institution: "Higher Institute of Statistical Professions (GP)",
    location: "Mauritania",
  },
  {
    year: "2019 – 2020",
    title: "Mathematics Option Baccalaureate (Bac C)",
    institution: "Atar High School",
    location: "Atar, Mauritania",
  },
];

export type ExperienceEntry = {
  title: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    title: "Data Systems & IT Architecture Intern",
    org: "Banque Nationale de Mauritanie (BNM)",
    period: "Feb 2025 – Present",
    location: "Nouakchott",
    bullets: [
      "Designed and implemented a centralized enterprise Data Warehouse backed by robust ELT pipelines, automated flow orchestration, and predictive models.",
      "Architected and deployed a containerized microservices infrastructure over isolated Docker networks on on-premise production servers.",
      "Built a secure conversational agent (Click) connected to the WhatsApp REST API, with a custom NLU module for dynamic query routing.",
      "Implemented a RAG (Retrieval-Augmented Generation) architecture with PostgreSQL/pgvector to index and query official banking documentation without data leakage.",
      "Benchmarked several LLMs (GPT-4o, Claude 3.5, Gemini 1.5, local Llama) to balance performance, infrastructure cost, and strict confidentiality.",
      "Developed sequential neural network models (LSTM, GRU) to anticipate rapid photovoltaic power drops and plan for critical infrastructure resilience.",
      "Environment: Python (FastAPI), Data Warehousing, ELT pipelines, Docker, N8N, PostgreSQL (pgvector), PyTorch, React, REST APIs, Linux/Bash.",
    ],
  },
  {
    title: "End-of-Studies Internship — Macroeconomic Analysis & DSGE Modeling",
    org: "Banque Centrale de Mauritanie (BCM) — Economic Studies & Monetary Stability",
    period: "Feb 2026 – May 2026",
    location: "Nouakchott",
    bullets: [
      "Produced a master's thesis in Econometrics and Applied Statistics comparing monetary regimes in Mauritania using a small open-economy DSGE model.",
      "Analyzed monetary policy transmission mechanisms, inflation, exchange rate dynamics, and macroeconomic trends in the Mauritanian context.",
      "Structured macroeconomic and monetary time series from BCM, ANSADE, and international databases for calibration and simulation.",
      "Contributed to the department's conjunctural analysis, macroeconomic forecasts, and monetary statistics.",
      "Environment: Econometrics, DSGE, macroeconomic analysis, Python, R, Excel, Julia, GAMS.",
    ],
  },
  {
    title: "Assistant Engineer Intern — Mining & Geotechnical Department",
    org: "Kinross Gold Corporation (Tasiast)",
    period: "Jul 2025 – Sep 2025",
    location: "Tasiast, Mauritania",
    bullets: [
      "Wall Compliance & 80/80: built a Python/Gradio dashboard for Toe/Crest/Berm Width/BFA monitoring from CALC and COMPLIANCE files, with auto-detection, KPIs, and trend tracking.",
      "Daily Survey digitization: Microsoft Forms → SharePoint/Excel Web → Power BI pipeline with near real-time KPIs (% Done, Backlog, SLA Breach).",
      "PV short-term forecasting: prepared minute-level data (lags, ramps, time encodings) and prototyped LSTM/GRU models to anticipate power drops.",
      "Environment: Python (NumPy, pandas, Plotly, Gradio), Power BI, SharePoint/Excel Web, Git.",
    ],
  },
  {
    title: "President & Event Coordinator",
    org: "ESP Data Club",
    period: "Oct 2022 – Apr 2025",
    location: "Nouakchott",
    bullets: [
      "Event Coordinator (Oct 2022 – Jan 2023): Organized events to promote statistics and data analysis. Coordinated with members to ensure the success of activities.",
      "President (Jan 2023 – Apr 2025): Led the club, set strategic objectives, managed data collection and analysis projects, and developed academic partnerships.",
      "Skills: Leadership, project management, event planning, communication.",
    ],
  },
  {
    title: "End-of-Study Internship",
    org: "Caisse des Dépôts et de Développement (CDD)",
    period: "Feb – Jun 2023",
    location: "Nouakchott",
    bullets: [
      "Analyzed banking data from CDD to assess the impact of the credit guarantee system on loan defaults in Mauritania.",
      "Used econometric models and modern machine learning approaches to predict default risks.",
      "Prepared and interpreted statistical reports on the socio-demographic and financial characteristics of borrowers.",
      "Developed computational solutions for risk analysis using logistic regression, k-NN, and Random Forest.",
    ],
  },
  {
    title: "Enumerator",
    org: "ANSADE",
    period: "Jul – Aug 2022",
    location: "Nouakchott",
    bullets: [
      "Collected field data for the pilot General Population and Housing Census (RGPH).",
      "Skills acquired: data collection, communication, and fieldwork.",
    ],
  },
  {
    title: "Worker Internship",
    org: "ANSADE",
    period: "Apr – Jun 2022",
    location: "Nouakchott",
    bullets: [
      "Developed a methodology for data mapping to design sectoral accounts.",
      "Participated in the collection and processing of economic branch data for national accounts.",
      "Analyzed sectoral data using ERETES software to compile economic accounts.",
      "Trained on GDP decomposition techniques as part of the International Comparison Program.",
      "Contributed to the national survey process for the mobilization and quantification of ZAKAT.",
    ],
  },
];

export type SkillEntry = {
  icon: string;
  title: string;
  description: string;
};

export const skills: SkillEntry[] = [
  {
    icon: "chart-bar",
    title: "Analysis & Modeling",
    description:
      "Statistical analysis, econometric modeling, surveys, data mining (classification, regression, clustering, association rules), time series forecasting.",
  },
  {
    icon: "server",
    title: "Data Engineering & Big Data",
    description:
      "Data Warehouse architecture, ELT/ETL (Airbyte, dbt), flow orchestration (N8N), Hadoop, Spark, Kafka, MapReduce, Hive SQL.",
  },
  {
    icon: "database",
    title: "Databases & GIS",
    description:
      "PostgreSQL/PostGIS (incl. pgvector), Oracle SQL (tuning, indexing, partitioning), QGIS/ArcGIS spatial analysis.",
  },
  {
    icon: "robot",
    title: "AI & Machine Learning",
    description:
      "Supervised ML, deep learning (LSTM/GRU, CNN, Transformers) with TensorFlow/PyTorch/Keras, NLP & RAG, MLOps (MLflow, Docker Compose).",
  },
  {
    icon: "code",
    title: "Programming Languages",
    description: "Python, PySpark, Julia, R, Scala, Java (Spring Boot, Spring Cloud, Spring Security), VBA.",
  },
  {
    icon: "globe",
    title: "Web Development",
    description: "HTML, CSS, JavaScript, Django, Flask, FastAPI, REST APIs, React, Next.js, Flutter.",
  },
  {
    icon: "laptop-code",
    title: "Statistical Software & Tools",
    description:
      "Stata, SPSS, Excel, GAMS, Eviews, Sphinx, KoboToolbox, ODKCollect, CSPro, Docker, Git/GitHub, LaTeX.",
  },
  {
    icon: "users",
    title: "Soft Skills",
    description: "Leadership, project management, communication, teamwork, adaptability.",
  },
];

export const languages = [
  { name: "Arabic", level: "Native Language" },
  { name: "French", level: "DALF C1" },
  { name: "English", level: "CEFR B1 — Tracktest English Assessment" },
];

export const associative = [
  { name: "President of the ESP Data Club", period: "January 2023 – April 2025" },
  { name: "Event Coordinator at ESP Data Club", period: "October 2022 – January 2023" },
  { name: "Member, Clubs Leaders Étudiants Francophones (CLEF)", period: "" },
  { name: "Member, Mauritanian Engineering Community (MEC)", period: "" },
  { name: "Military Training", period: "" },
];

export type AchievementEntry = {
  title: string;
  description: string;
  href?: string;
};

export const achievements: AchievementEntry[] = [
  {
    title: "1st Place, RIMAI Data Science Challenge 2024",
    description:
      "Competition focused on license plate recognition using AI techniques.",
    href: "https://www.rim-ai.com/challenge",
  },
  {
    title: "Organizer, First Datathon in Mauritania",
    description:
      "Three-day competition centered on Mauritanian data analysis. As ESP Data Club president, supervised the organization and judged competitors through data science challenges.",
  },
];

export type CertificationEntry = {
  title: string;
  issuer: string;
  date: string;
  href: string;
};

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

export const interests = ["Coding", "Travel", "Football", "Tourism"];

export type ProjectCategory = "data-science" | "web-development" | "statistics";

export type ProjectEntry = {
  title: string;
  description: string;
  image?: string;
  category: ProjectCategory;
  categoryLabel: string;
  href?: string;
  comingSoon?: boolean;
};

export const projectCategories: { value: "all" | ProjectCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "data-science", label: "Data Science" },
  { value: "web-development", label: "Web Development" },
  { value: "statistics", label: "Statistics" },
];

export const projects: ProjectEntry[] = [
  {
    title: "Grain Size Analysis of 316L Microstructure",
    description:
      "Computer-vision pipeline segmenting grain boundaries in 316L stainless steel micrographs (500×), comparing thresholding, gradient filters, HED, and a U-Net model, with a Gradio interface to extract grain size statistics.",
    category: "data-science",
    categoryLabel: "Data Science",
    href: "https://github.com/MoustaphaCheikhJidou/grain-size-analysis-316L-microstructure",
  },
  {
    title: "Agricultural Data Analysis System (Smart Greenhouse)",
    description:
      "Design and development of an intelligent system for analyzing agricultural data, specifically for greenhouses.",
    image: "/images/agr.png",
    category: "data-science",
    categoryLabel: "Data Science",
    href: "https://github.com/MoustaphaCheikhJidou/smart-agriculture-system",
  },
  {
    title: "DataMine App",
    description:
      "Collaborative platform for managing and tracking tasks on a geostatistical data project, with an interface for visualizing task progress on GitHub.",
    category: "web-development",
    categoryLabel: "Web Development",
    href: "https://github.com/MoustaphaCheikhJidou/DataMineSynergy-App.git",
  },
  {
    title: "Disaster Tweets NLP Classification",
    description:
      "Development of a machine learning model to classify tweets related to natural disasters.",
    image: "/images/clasification.png",
    category: "data-science",
    categoryLabel: "Data Science",
    href: "https://github.com/MoustaphaCheikhJidou/disaster-tweets-nlp-classification.git",
  },
  {
    title: "Survey Management Application",
    description:
      "Design and implementation of a survey management application to facilitate data collection and tracking.",
    image: "/images/survayapp.avif",
    category: "web-development",
    categoryLabel: "Web Development",
    href: "https://github.com/MoustaphaCheikhJidou/survey-data-collection.git",
  },
  {
    title: "Survey on the Perception of Influencers",
    description:
      "Design and implementation of a survey on the perception of influencers in Mauritanian society.",
    image: "/images/survayinf.avif",
    category: "statistics",
    categoryLabel: "Statistics",
    comingSoon: true,
  },
  {
    title: "Grade Management Application",
    description:
      "Backend development with the Flask framework and use of HTML, CSS, and JavaScript for the frontend.",
    image: "/images/note.webp",
    category: "web-development",
    categoryLabel: "Web Development",
    href: "https://github.com/MoustaphaCheikhJidou/ISMSNotesApp.git",
  },
  {
    title: "Determinants of Academic Performance in Mauritania",
    description: "Analysis of the factors influencing academic performance in Mauritania using R.",
    image: "/images/educ.jpg",
    category: "statistics",
    categoryLabel: "Statistics",
    comingSoon: true,
  },
  {
    title: "Bridging the Future Baseline Data Challenge",
    description:
      "A data analysis and predictive modeling project aimed at improving primary school reading proficiency in Mauritania across regions of Tagant, Gorgol and Brakna under the USDA-funded initiative.",
    image: "/images/futur.jpg",
    category: "data-science",
    categoryLabel: "Data Science",
    href: "https://github.com/MoustaphaCheikhJidou/Bridging-the-Future-Baseline-Data-Challenge",
  },
  {
    title: "Poverty & Inequality Forecasting in Mauritania",
    description:
      "Forecasts four key poverty indicators from 1996 to 2030 using survey data and interpolation techniques to support policy planning.",
    image: "/images/pauv.jpg",
    category: "statistics",
    categoryLabel: "Statistics",
    href: "https://github.com/MoustaphaCheikhJidou/Poverty-Gini-Forecast-Mauritania",
  },
  {
    title: "Modeling the Drivers of Mauritania's GDP with an ARDL Framework",
    description:
      "Econometric modeling of Mauritania's growth dynamics using an AutoRegressive Distributed Lag (ARDL) model in R.",
    image: "/images/pib.jpg",
    category: "statistics",
    categoryLabel: "Statistics",
    href: "https://github.com/MoustaphaCheikhJidou/ARDL-Growth-Mauritania",
  },
  {
    title: "Data Management Platform for the NCPI (ANSADE Project)",
    description:
      "A Django web application for managing and analyzing data related to the National Consumer Price Index (NCPI).",
    image: "/images/inpc.jpg",
    category: "web-development",
    categoryLabel: "Web Development",
    href: "https://github.com/MoustaphaCheikhJidou/INPC-Data-Management-and-Analysis-Platform",
  },
  {
    title: "RAG-WebSystem",
    description:
      "End-to-end Retrieval-Augmented Generation engine: FAISS-based semantic search over indexed documents, contextual answer generation with an open-source model, exposed via a FastAPI backend and a React + Tailwind interface.",
    image: "/images/legal.jpg",
    category: "data-science",
    categoryLabel: "Data Science",
    href: "https://github.com/MoustaphaCheikhJidou/RAG-WebSystem",
  },
];

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
