import type { Locale } from "./config";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
  };
  nav: {
    home: string;
    about: string;
    contact: string;
    language: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    imageCount: string;
    view: string;
    ariaLabel: string;
  };
  lightbox: {
    close: string;
    previous: string;
    next: string;
    previousImage: string;
    nextImage: string;
    loading: string;
  };
  about: {
    title: string;
    intro: string;
    missionTitle: string;
    mission: string;
    featuresTitle: string;
    features: string[];
  };
  contact: {
    title: string;
    intro: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
    formNote: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
  social: {
    github: string;
    linkedin: string;
    email: string;
    twitter: string;
    instagram: string;
  };
  galleryItems: Record<
    string,
    {
      title: string;
      caption: string;
    }
  >;
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fa: () => import("./dictionaries/fa").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
