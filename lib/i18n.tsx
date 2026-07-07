"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Locale = "en" | "fr";

export type LocalizedString = Record<Locale, string>;

export function pick(locale: Locale, value: LocalizedString): string {
  return value[locale];
}

type UIStrings = {
  nav: { home: string; about: string; projects: string; contact: string; blog: string };
  hero: {
    greeting: string;
    aboutBadge: string;
    iAm: string;
    viewProjects: string;
    getInTouch: string;
    downloadCV: string;
    techStackHeading: string;
    seeFullStack: string;
  };
  cvModal: {
    title: string;
    subtitle: string;
    preview: string;
    download: string;
    close: string;
    onePage: string;
    pagesLabel: string;
  };
  about: {
    tagWhoIAm: string;
    title: string;
    tagAcademic: string;
    education: string;
    tagCareer: string;
    experience: string;
    tagExpertise: string;
    skills: string;
    tagBeyondData: string;
    languagesAndAssociative: string;
    languages: string;
    associativeLife: string;
    tagFiertes: string;
    achievements: string;
    learnMore: string;
    tagLearning: string;
    certifications: string;
    tagBeyondWork: string;
    interests: string;
  };
  techStack: {
    tag: string;
    title: string;
    subtitle: string;
  };
  projects: {
    tag: string;
    title: string;
    subtitle: string;
    viewCode: string;
    comingSoon: string;
    previewSoon: string;
  };
  contact: {
    title: string;
    subtitle: string;
    orReach: string;
  };
  footer: {
    backToTop: string;
  };
  dock: {
    home: string;
    blog: string;
    github: string;
    linkedin: string;
    whatsapp: string;
    theme: string;
    language: string;
  };
};

export const uiStrings: Record<Locale, UIStrings> = {
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact", blog: "Blog" },
    hero: {
      greeting: "Hello, I'm",
      aboutBadge: "About",
      iAm: "I am",
      viewProjects: "View Projects",
      getInTouch: "Get in Touch",
      downloadCV: "Download CV",
      techStackHeading: "Current Tech Stack",
      seeFullStack: "See full tech stack",
    },
    cvModal: {
      title: "Download my Résumé",
      subtitle: "Pick the version that best matches what you're looking for.",
      preview: "Preview",
      download: "Download",
      close: "Close",
      onePage: "1 page",
      pagesLabel: "pages",
    },
    about: {
      tagWhoIAm: "Who I Am",
      title: "About Me",
      tagAcademic: "Academic Path",
      education: "Education",
      tagCareer: "Career",
      experience: "Professional Experiences",
      tagExpertise: "Character",
      skills: "Soft Skills",
      tagBeyondData: "Beyond the Data",
      languagesAndAssociative: "Languages & Associative Life",
      languages: "Languages",
      associativeLife: "Associative Life",
      tagFiertes: "Achievements",
      achievements: "Achievements",
      learnMore: "Learn more",
      tagLearning: "Continuous Learning",
      certifications: "Certifications",
      tagBeyondWork: "Beyond Work",
      interests: "Interests",
    },
    techStack: {
      tag: "Skills & Technologies",
      title: "My Tech Stack",
      subtitle: "Discover my technology stack and the tools I use to build modern web applications.",
    },
    projects: {
      tag: "Portfolio",
      title: "Projects",
      subtitle:
        "A selection of data science, statistics and web development projects — each solving a real-world problem.",
      viewCode: "View Code",
      comingSoon: "Coming Soon",
      previewSoon: "Preview coming soon",
    },
    contact: {
      title: "Let's Talk",
      subtitle: "Have a project, opportunity, or just want to connect? Drop me a message — I'd love to hear from you.",
      orReach: "— or reach me at —",
    },
    footer: {
      backToTop: "Back to top",
    },
    dock: {
      home: "Home",
      blog: "Blog",
      github: "GitHub",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      theme: "Toggle theme",
      language: "Switch language",
    },
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", projects: "Projets", contact: "Contact", blog: "Blog" },
    hero: {
      greeting: "Bonjour, je suis",
      aboutBadge: "À propos",
      iAm: "Je suis",
      viewProjects: "Voir les Projets",
      getInTouch: "Me Contacter",
      downloadCV: "Télécharger le CV",
      techStackHeading: "Stack Technique Actuelle",
      seeFullStack: "Voir toute la stack technique",
    },
    cvModal: {
      title: "Télécharger mon CV",
      subtitle: "Choisissez la version qui correspond le mieux à votre besoin.",
      preview: "Prévisualiser",
      download: "Télécharger",
      close: "Fermer",
      onePage: "1 page",
      pagesLabel: "pages",
    },
    about: {
      tagWhoIAm: "Qui Suis-Je",
      title: "À Propos de Moi",
      tagAcademic: "Parcours Académique",
      education: "Formation",
      tagCareer: "Carrière",
      experience: "Expériences Professionnelles",
      tagExpertise: "Caractère",
      skills: "Savoir-Être",
      tagBeyondData: "Au-delà des Données",
      languagesAndAssociative: "Langues & Vie Associative",
      languages: "Langues",
      associativeLife: "Vie Associative",
      tagFiertes: "Fiertés",
      achievements: "Fiertés",
      learnMore: "En savoir plus",
      tagLearning: "Formation Continue",
      certifications: "Certifications",
      tagBeyondWork: "En Dehors du Travail",
      interests: "Centres d'Intérêt",
    },
    techStack: {
      tag: "Compétences & Technologies",
      title: "Ma Stack Technique",
      subtitle: "Découvrez ma stack technologique et les outils que j'utilise pour créer des applications web modernes.",
    },
    projects: {
      tag: "Portfolio",
      title: "Projets",
      subtitle:
        "Une sélection de projets en data science, statistiques et développement web — chacun résolvant un problème concret.",
      viewCode: "Voir le Code",
      comingSoon: "Bientôt Disponible",
      previewSoon: "Aperçu à venir",
    },
    contact: {
      title: "Discutons",
      subtitle: "Un projet, une opportunité, ou simplement envie d'échanger ? Écris-moi — je serais ravi d'échanger avec toi.",
      orReach: "— ou contacte-moi au —",
    },
    footer: {
      backToTop: "Retour en haut",
    },
    dock: {
      home: "Accueil",
      blog: "Blog",
      github: "GitHub",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      theme: "Changer de thème",
      language: "Changer de langue",
    },
  },
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: UIStrings;
  tr: (value: LocalizedString) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "portfolio-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // `window` doesn't exist during the static export render pass, so the
    // stored locale can only be read once mounted in the browser.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "fr") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: uiStrings[locale],
      tr: (v: LocalizedString) => v[locale],
    }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
