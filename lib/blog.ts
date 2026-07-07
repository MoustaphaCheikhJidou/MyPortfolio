import type { LocalizedString } from "@/lib/i18n";

export type BlogPost = {
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  date: string;
  readTime: string;
  tags: string[];
  content: LocalizedString[];
};

// Draft starter posts based on real projects — review and rewrite in your own
// voice before treating these as final.
export const blogPosts: BlogPost[] = [
  {
    slug: "rag-chatbot-whatsapp-banking",
    title: {
      en: "Building a Secure Multi-LLM RAG Chatbot for WhatsApp",
      fr: "Construire un Chatbot RAG Multi-LLM Sécurisé pour WhatsApp",
    },
    excerpt: {
      en: "How I designed a Retrieval-Augmented Generation pipeline on PostgreSQL/pgvector to answer questions from official banking documentation, without any data leaving the premises.",
      fr: "Comment j'ai conçu un pipeline RAG (Retrieval-Augmented Generation) sur PostgreSQL/pgvector pour répondre aux questions à partir de la documentation bancaire officielle, sans qu'aucune donnée ne sorte de l'infrastructure.",
    },
    date: "2026-05-12",
    readTime: "6 min",
    tags: ["RAG", "LLM", "PostgreSQL", "WhatsApp"],
    content: [
      {
        en: "One of the core challenges of deploying generative AI inside a bank is trust: every answer needs to be traceable to an official source, and no sensitive document can leave the internal network. This ruled out most hosted LLM APIs for the retrieval step.",
        fr: "L'un des principaux défis du déploiement de l'IA générative au sein d'une banque est la confiance : chaque réponse doit être traçable jusqu'à une source officielle, et aucun document sensible ne peut sortir du réseau interne. Cela excluait la plupart des API LLM hébergées pour l'étape de récupération.",
      },
      {
        en: "The architecture indexes official documentation into PostgreSQL using the pgvector extension, so the same database that already runs the bank's operational systems also serves as the vector store — no extra infrastructure to secure. A custom NLU module routes incoming WhatsApp messages to the right retrieval flow before a language model drafts the final answer.",
        fr: "L'architecture indexe la documentation officielle dans PostgreSQL grâce à l'extension pgvector : la même base de données qui fait déjà tourner les systèmes opérationnels de la banque sert aussi de vector store, sans infrastructure supplémentaire à sécuriser. Un module NLU personnalisé oriente les messages WhatsApp entrants vers le bon flux de récupération avant qu'un modèle de langage ne rédige la réponse finale.",
      },
      {
        en: "To choose the right model, I benchmarked GPT-4o, Claude 3.5, Gemini 1.5 and a locally hosted Llama across latency, cost and confidentiality constraints — the local model ultimately handled the most sensitive query types, while hosted models cover lower-risk traffic.",
        fr: "Pour choisir le bon modèle, j'ai comparé GPT-4o, Claude 3.5, Gemini 1.5 et un Llama hébergé localement selon la latence, le coût et les contraintes de confidentialité — le modèle local traite finalement les requêtes les plus sensibles, tandis que les modèles hébergés couvrent le trafic à moindre risque.",
      },
    ],
  },
  {
    slug: "grain-boundary-segmentation-316l",
    title: {
      en: "Segmenting Grain Boundaries in 316L Steel with Computer Vision",
      fr: "Segmenter les Joints de Grains d'un Acier 316L par Vision par Ordinateur",
    },
    excerpt: {
      en: "Comparing classical thresholding against a U-Net model to automatically extract grain size statistics from stainless steel micrographs.",
      fr: "Comparaison entre le seuillage classique et un modèle U-Net pour extraire automatiquement les statistiques granulométriques de micrographies d'acier inoxydable.",
    },
    date: "2026-04-02",
    readTime: "5 min",
    tags: ["Computer Vision", "U-Net", "Materials Science"],
    content: [
      {
        en: "Grain size directly affects the mechanical properties of stainless steel, but measuring it by hand from micrographs is slow and inconsistent between operators. The goal of this project was to automate that measurement from 500x micrographs of 316L steel.",
        fr: "La taille des grains influence directement les propriétés mécaniques de l'acier inoxydable, mais la mesurer manuellement à partir de micrographies est lent et peu reproductible d'un opérateur à l'autre. L'objectif de ce projet était d'automatiser cette mesure à partir de micrographies à 500x d'acier 316L.",
      },
      {
        en: "I compared four segmentation approaches: classical thresholding, gradient-based filters, the HED edge detector (via Caffe/OpenCV), and a U-Net trained on a mix of real and synthetic micrographs. The U-Net produced the cleanest, most continuous grain boundaries, especially on noisier images.",
        fr: "J'ai comparé quatre approches de segmentation : le seuillage classique, les filtres à base de gradient, le détecteur de contours HED (via Caffe/OpenCV), et un U-Net entraîné sur un mélange de micrographies réelles et synthétiques. Le U-Net a produit les joints de grains les plus propres et continus, en particulier sur les images bruitées.",
      },
      {
        en: "After segmentation, a pixel-to-micron calibration step converts the raw mask into physical units, producing grain size distributions, mean areas and circularity statistics — all accessible through a small Gradio interface so the results can be explored without touching any code.",
        fr: "Après la segmentation, une étape de calibration pixels/microns convertit le masque brut en unités physiques, produisant les distributions de tailles de grains, les surfaces moyennes et les statistiques de circularité — le tout accessible via une petite interface Gradio permettant d'explorer les résultats sans toucher au code.",
      },
    ],
  },
  {
    slug: "forecasting-poverty-mauritania",
    title: {
      en: "Forecasting Poverty & Inequality in Mauritania to 2030",
      fr: "Prévoir la Pauvreté et les Inégalités en Mauritanie à l'Horizon 2030",
    },
    excerpt: {
      en: "Using survey data and interpolation techniques to project four key poverty indicators and support long-term policy planning.",
      fr: "Utiliser les données d'enquête et des techniques d'interpolation pour projeter quatre indicateurs clés de pauvreté et appuyer la planification des politiques à long terme.",
    },
    date: "2026-02-18",
    readTime: "4 min",
    tags: ["Statistics", "Policy", "Forecasting"],
    content: [
      {
        en: "Policy makers need a view of poverty trends that goes beyond the latest household survey round. This project combines historical survey data from 1996 onward with interpolation techniques to produce a continuous forecast of four key poverty indicators through 2030.",
        fr: "Les décideurs publics ont besoin d'une vision des tendances de la pauvreté qui aille au-delà de la dernière vague d'enquête auprès des ménages. Ce projet combine les données d'enquête historiques depuis 1996 avec des techniques d'interpolation pour produire une prévision continue de quatre indicateurs clés de pauvreté jusqu'en 2030.",
      },
      {
        en: "The biggest methodological challenge was reconciling survey rounds collected under different sampling frames and questionnaire designs, which required careful harmonization before any interpolation could be trusted.",
        fr: "Le principal défi méthodologique a consisté à réconcilier des vagues d'enquête collectées avec des bases de sondage et des questionnaires différents, ce qui a nécessité une harmonisation minutieuse avant de pouvoir faire confiance à l'interpolation.",
      },
      {
        en: "The resulting projections are meant as a planning input, not a substitute for future survey rounds — but they give policy teams an early signal of where inequality is trending between census years.",
        fr: "Les projections obtenues sont conçues comme un outil d'aide à la planification, et non comme un substitut aux futures vagues d'enquête — mais elles donnent aux équipes politiques un signal précoce sur l'évolution des inégalités entre les recensements.",
      },
    ],
  },
];
