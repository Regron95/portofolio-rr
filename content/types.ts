export type Lang = "sv" | "en";

// Samma värde på båda språken, t.ex. { sv: "Besök sajten", en: "Visit the site" }
export type Localized<T = string> = Record<Lang, T>;

// All text på sidan. sv.ts och en.ts måste ha exakt samma nycklar,
// annars säger TypeScript ifrån när du bygger.
export type SiteText = {
  meta: { title: string; description: string; shareDescription: string };
  skipLink: string;
  backToTop: string;
  // Uppläses av skärmläsare på länken som leder TILL detta språk (SV/EN i menyn)
  switchLanguage: string;
  nav: { projects: string; about: string; skills: string; contact: string };
  hero: {
    program: string;
    intro: string;
    seeProjects: string;
    contactMe: string;
    downloadCv: string;
    portraitAlt: string;
    statusLabel: string;
    status: { key: string; value: string; signal?: boolean }[];
  };
  projects: {
    heading: string;
    roleLabel: string;
    techLabel: string;
    moreOnGithub: [before: string, link: string, after: string];
  };
  about: {
    heading: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
    motto: string;
    mottoCaption: string;
  };
  skills: {
    heading: string;
    intro: string;
    groups: { title: string; items: string[] }[];
  };
  contact: {
    heading: string;
    intro: string;
    downloadCv: string;
  };
  footer: { builtWith: string };
};
