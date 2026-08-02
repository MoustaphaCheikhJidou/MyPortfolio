import type { CVVersion } from "@/lib/data";

// Static metadata for the 6 specialization résumés. The PDFs are compiled by
// hand from the .tex sources in CV/ (same style.cls as the main résumé,
// English variants suffixed _EN) and placed as static assets in public/cv/ —
// there is no generation step.
export const orientedCvVersions: CVVersion[] = [
  {
    id: "data-ai-engineer",
    title: { en: "Data & AI Engineer", fr: "Data & AI Engineer" },
    description: {
      en: "Data Warehousing, ELT pipelines, RAG/LLM systems, and containerized infrastructure.",
      fr: "Data Warehousing, pipelines ELT, systèmes RAG/LLM et infrastructures conteneurisées.",
    },
    href: { en: "/cv/data-ai-engineer-en.pdf", fr: "/cv/data-ai-engineer-fr.pdf" },
    pages: 1,
  },
  {
    id: "statistician-economist",
    title: { en: "Statistician-Economist", fr: "Statisticien-Économiste" },
    description: {
      en: "Focused on econometrics, survey methods, and macroeconomic modeling.",
      fr: "Orienté économétrie, enquêtes statistiques et modélisation macroéconomique.",
    },
    href: { en: "/cv/statistician-economist-en.pdf", fr: "/cv/statistician-economist-fr.pdf" },
    pages: 1,
  },
  {
    id: "data-science-ml",
    title: { en: "Data Science / Machine Learning", fr: "Data Science / Machine Learning" },
    description: {
      en: "Focused on machine learning, deep learning, and NLP/RAG systems.",
      fr: "Orienté machine learning, deep learning et systèmes NLP/RAG.",
    },
    href: { en: "/cv/data-science-ml-en.pdf", fr: "/cv/data-science-ml-fr.pdf" },
    pages: 1,
  },
  {
    id: "web-dev-fullstack",
    title: { en: "Web Development / Full Stack", fr: "Développement Web / Full Stack" },
    description: {
      en: "Focused on full-stack web applications, APIs, and system integration.",
      fr: "Orienté applications web full-stack, APIs et intégration de systèmes.",
    },
    href: { en: "/cv/web-dev-fullstack-en.pdf", fr: "/cv/web-dev-fullstack-fr.pdf" },
    pages: 1,
  },
  {
    id: "macroeconomic-analyst",
    title: { en: "Macroeconomic Analyst", fr: "Analyste Macroéconomique" },
    description: {
      en: "Focused on monetary policy analysis, DSGE modeling, and macroeconomic forecasting.",
      fr: "Orienté analyse de politique monétaire, modélisation DSGE et prévisions macroéconomiques.",
    },
    href: { en: "/cv/macroeconomic-analyst-en.pdf", fr: "/cv/macroeconomic-analyst-fr.pdf" },
    pages: 1,
  },
  {
    id: "data-analyst",
    title: { en: "Data Analyst", fr: "Data Analyst" },
    description: {
      en: "Focused on dashboards, reporting pipelines, and data visualization.",
      fr: "Orienté dashboards, pipelines de reporting et visualisation de données.",
    },
    href: { en: "/cv/data-analyst-en.pdf", fr: "/cv/data-analyst-fr.pdf" },
    pages: 1,
  },
  {
    id: "enseignant",
    title: { en: "Lecturer", fr: "Enseignant" },
    description: {
      en: "Focused on higher education teaching, academic supervision, and survey methodology.",
      fr: "Orienté enseignement supérieur, encadrement académique et méthodologie d'enquête.",
    },
    href: { en: "/cv/enseignant-en.pdf", fr: "/cv/enseignant-fr.pdf" },
    pages: 1,
  },
];
