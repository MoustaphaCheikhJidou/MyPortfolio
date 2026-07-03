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
    { value: "11+", label: "Projects Completed" },
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
};

// Derived from the existing bio ("Python, Next.js, PostgreSQL + pgvector, Docker, and LaTeX")
export const techStack: TechStackEntry[] = [
  { label: "Python", monogram: "Py", colorClass: "bg-[#3776ab]/20 text-[#4b8bbe]" },
  { label: "Next.js", monogram: "N", colorClass: "bg-white/10 text-text" },
  { label: "PostgreSQL", monogram: "Pg", colorClass: "bg-[#336791]/20 text-[#6ba6d6]" },
  { label: "pgvector", monogram: "Vc", colorClass: "bg-cyan/20 text-cyan-light" },
  { label: "Docker", monogram: "Dk", colorClass: "bg-[#2496ed]/20 text-[#4fb4f7]" },
  { label: "LaTeX", monogram: "Tx", colorClass: "bg-primary/20 text-primary-light" },
];

export const about = {
  paragraphs: [
    'Final-year engineering student at <strong>École Supérieure Polytechnique (ESP)</strong>, Mauritania. Currently completing my end-of-study project at the <strong>Banque Nationale de Mauritanie</strong> — building a multi-LLM RAG chatbot integrated with WhatsApp, orchestrated via N8N, with OpenAI, Gemini and Ollama as interchangeable backends.',
    "I also teach <strong>poverty measurement and household survey methods</strong> at ISMS (Institut Supérieur des Métiers de la Statistique), and work on development project management for programs funded by the <strong>Islamic Development Bank</strong> and <strong>African Development Bank</strong>.",
    "My stack spans <strong>Python, Next.js, PostgreSQL + pgvector, Docker</strong>, and LaTeX — with a strong interest in applied AI, data pipelines, and systems that actually work in production. As <strong>President of the ESP Data Club</strong>, I lead projects that encourage collaboration and learning in data science.",
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
    year: "2023 – Present",
    title: "Engineer in Statistics and Data Engineering",
    institution: "Higher Polytechnic School of Nouakchott (ESP)",
    location: "Mauritania",
  },
  {
    year: "2023 – Present",
    title: "Professional Master's in Econometrics and Applied Statistics",
    institution: "Faculty of Legal and Economic Sciences (FSJE)",
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
    title: "President & Event Coordinator",
    org: "ESP Data Club",
    period: "Oct 2022 – Present",
    location: "Nouakchott",
    bullets: [
      "Event Coordinator (Oct 2022 – Jan 2023): Organized events to promote statistics and data analysis. Coordinated with members to ensure the success of activities.",
      "President (Jan 2023 – Present): Leading the club, setting strategic objectives, managing data collection and analysis projects, and developing academic partnerships.",
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
    description: "Statistical analysis, econometric modeling, surveys, and inquiries.",
  },
  {
    icon: "laptop-code",
    title: "Software",
    description: "Stata, SPSS, Excel, Eviews, Sphinx, KoboToolbox, ODKCollect, CSPro.",
  },
  {
    icon: "database",
    title: "Data Analysis",
    description: "Data cleaning, preparation, and exploitation of statistical and economic data.",
  },
  {
    icon: "robot",
    title: "Machine Learning",
    description: "Techniques and tools for advanced machine learning and predictive modeling.",
  },
  {
    icon: "code",
    title: "Programming",
    description: "Python, VBA, R, Scala.",
  },
  {
    icon: "server",
    title: "Big Data",
    description: "Big Data Processing, Statistical Analysis, Visualization, Data Architecture & Governance.",
  },
  {
    icon: "globe",
    title: "Web Development",
    description: "Front-end: HTML, CSS, JavaScript. Back-end: Django, Flask, Next.js.",
  },
  {
    icon: "users",
    title: "Soft Skills",
    description: "Leadership, project management, communication, teamwork, adaptability.",
  },
];

export const languages = [
  { name: "Arabic", level: "Native Language" },
  { name: "French", level: "DELF C1" },
  { name: "English", level: "CEFR B1 — Tracktest English Assessment" },
];

export const associative = [
  { name: "President of the ESP Data Club", period: "Since January 2023" },
  { name: "Event Coordinator at ESP Data Club", period: "October 2022 – January 2023" },
  { name: "Military Training", period: "" },
];

export type ProjectCategory = "data-science" | "web-development" | "statistics";

export type ProjectEntry = {
  title: string;
  description: string;
  image: string;
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
    title: "Agricultural Data Analysis System (Smart Greenhouse)",
    description:
      "Design and development of an intelligent system for analyzing agricultural data, specifically for greenhouses.",
    image: "/images/agr.png",
    category: "data-science",
    categoryLabel: "Data Science",
    href: "https://github.com/MoustaphaCheikhJidou/smart-agriculture-system",
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
    title: "RAG-WebSystem – Mauritania Legal Chatbot",
    description:
      "A Django-based web application integrating a Retrieval-Augmented Generation (RAG) pipeline with a locally hosted GGUF model and the Gemini API.",
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
