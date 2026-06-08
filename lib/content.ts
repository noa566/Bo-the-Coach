import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export type HomeContent = {
  hero: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  philosophy: {
    eyebrow: string;
    quote: string;
    author: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; description: string; cta: string }[];
  };
  approach: {
    eyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    cta: string;
  };
  citation: {
    quote: string;
    author: string;
  };
  finalCta: {
    title: string;
    description: string;
    button: string;
  };
};

export const defaultHomeContent: HomeContent = {
  hero: {
    eyebrow: "Coaching mental · Genève",
    titleStart: "Révéler votre",
    titleAccent: "potentiel",
    titleEnd: ", un pas à la fois.",
    lead: "Coaching personnel, coaching d'équipe et formations pour vous accompagner dans vos transitions, clarifier vos priorités et construire l'avenir qui vous ressemble.",
    ctaPrimary: "Séance découverte gratuite",
    ctaSecondary: "Découvrir le coaching",
    stats: [
      { value: "10+", label: "Années d'expérience" },
      { value: "FSEA", label: "Formateur certifié" },
      { value: "PNL", label: "Praticien" },
    ],
  },
  philosophy: {
    eyebrow: "Ma conviction",
    quote:
      "« Nous avons toutes et tous les capacités pour révéler notre potentiel, et vivre aligné avec nos aspirations profondes. »",
    author: "Boris Lazzarotto",
  },
  services: {
    eyebrow: "Mes accompagnements",
    title: "Trois espaces pour cheminer",
    intro:
      "Chaque proposition s'adapte à vos besoins, à votre rythme et à votre contexte.",
    items: [
      {
        title: "Coaching personnel",
        description:
          "Un espace pour clarifier vos priorités, vous (re)connecter à vos ressources et passer à l'action avec sérénité.",
        cta: "Explorer",
      },
      {
        title: "Coaching d'équipe",
        description:
          "Renforcer la dynamique collective, fluidifier la communication et accompagner les transitions de votre équipe.",
        cta: "Explorer",
      },
      {
        title: "Formation",
        description:
          "Des interventions sur mesure pour faire évoluer les pratiques, réaliser le potentiel et renforcer la dynamique.",
        cta: "Explorer",
      },
    ],
  },
  approach: {
    eyebrow: "Mon approche",
    title: "Un partenaire engagé à vos côtés",
    paragraph1:
      "Le coach questionne, écoute, relance. Je n'apporte pas les réponses, je vous accompagne pour faire émerger les vôtres. Ni thérapeute, ni conseiller, je suis un partenaire engagé à vos côtés : vous donnez la direction, et nous explorons ensemble les chemins qui mènent à vos objectifs pour passer à l'action.",
    paragraph2:
      "La déontologie est au cœur de mon accompagnement : confidentialité et respect des personnes guident chaque échange.",
    cta: "Découvrir mon parcours",
  },
  citation: {
    quote:
      "Le secret du changement est de concentrer toute votre énergie, non pas à lutter contre le passé, mais à construire l'avenir.",
    author: "Socrate",
  },
  finalCta: {
    title: "Prêt à faire le premier pas ?",
    description:
      "La séance « fondation » est gratuite et sans engagement. C'est l'occasion de faire connaissance, de clarifier vos attentes et de répondre à vos questions.",
    button: "Réserver ma séance découverte",
  },
};

const CONTENT_COLLECTION = "content";
const HOME_DOC_ID = "home";

/**
 * Reads the home page content from Firestore.
 * Merges shallowly with defaults so that partial Firestore docs still work.
 * Falls back to defaults entirely if Firestore is unreachable.
 */
export async function getHomeContent(): Promise<HomeContent> {
  try {
    const ref = doc(db, CONTENT_COLLECTION, HOME_DOC_ID);
    const snap = await getDoc(ref);
    if (!snap.exists()) return defaultHomeContent;
    const data = snap.data() as Partial<HomeContent>;
    return mergeWithDefaults(data);
  } catch (err) {
    console.error("[content] Firestore read failed, using defaults:", err);
    return defaultHomeContent;
  }
}

/**
 * Persists the full home page content to Firestore.
 * Requires the caller to be authenticated (enforced by Firestore Rules).
 */
export async function saveHomeContent(content: HomeContent): Promise<void> {
  const ref = doc(db, CONTENT_COLLECTION, HOME_DOC_ID);
  await setDoc(ref, content, { merge: false });
}

function mergeWithDefaults(partial: Partial<HomeContent>): HomeContent {
  return {
    hero: { ...defaultHomeContent.hero, ...(partial.hero ?? {}) },
    philosophy: {
      ...defaultHomeContent.philosophy,
      ...(partial.philosophy ?? {}),
    },
    services: {
      ...defaultHomeContent.services,
      ...(partial.services ?? {}),
      items:
        partial.services?.items && partial.services.items.length === 3
          ? partial.services.items
          : defaultHomeContent.services.items,
    },
    approach: { ...defaultHomeContent.approach, ...(partial.approach ?? {}) },
    citation: { ...defaultHomeContent.citation, ...(partial.citation ?? {}) },
    finalCta: { ...defaultHomeContent.finalCta, ...(partial.finalCta ?? {}) },
  };
}
