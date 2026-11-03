import type { SiteText } from "./types";

const liaPeriod = "9 nov 2026 – 23 apr 2027";

// All svensk text på sidan. Den engelska versionen finns i en.ts.
export const sv: SiteText = {
  meta: {
    title: "Regine Ronesen – webbutvecklare under utbildning",
    description:
      "Portfolio för Regine Ronesen. Studerar Webbutvecklare fullstack open source på Nackademin och söker LIA från november 2026.",
    shareDescription: "Studerar på Nackademin och söker LIA från november 2026.",
  },
  skipLink: "Hoppa till innehållet",
  backToTop: "till toppen",
  switchLanguage: "Läs på svenska",
  nav: { projects: "Projekt", about: "Om mig", skills: "Kompetens", contact: "Kontakt" },

  hero: {
    program: "Webbutvecklare fullstack open source · Nackademin",
    intro:
      "Jag studerar till webbutvecklare och söker LIA-plats. Jag vill se hur programmering används i riktiga projekt och lära mig hur utvecklare arbetar tillsammans.",
    seeProjects: "Se mina projekt",
    contactMe: "Kontakta mig",
    downloadCv: "Ladda ner CV",
    portraitAlt: "Porträtt av Regine Ronesen",
    statusLabel: "Om min LIA",
    status: [
      { key: "status", value: "Söker LIA", signal: true },
      { key: "period", value: liaPeriod },
      { key: "start", value: "Flexibel, i samråd med skolan" },
      { key: "ort", value: "Stockholm" },
    ],
  },

  projects: {
    heading: "Projekt",
    roleLabel: "Min roll:",
    techLabel: "Tekniker",
    moreOnGithub: ["Fler skolprojekt finns på", "min GitHub", "."],
  },

  about: {
    heading: "Om mig",
    paragraphs: [
      "Innan jag började studera programmering arbetade jag i över tio år inom vården. Där tog jag ansvar, samarbetade med många olika människor och lärde mig nya system när arbetssätten förändrades. Det har jag med mig in i utvecklingen.",
      "Jag tycker om att förstå hur saker hänger ihop, från det användaren ser till databasen bakom. Just nu är jag mest intresserad av frontend, backend, integrationer, testning och automatisering.",
      "På sikt vill jag fördjupa mig i cybersäkerhet och etisk hackning.",
    ],
    facts: [
      { label: "Bor i", value: "Stockholm" },
      { label: "Studerar", value: "Webbutvecklare fullstack open source, Nackademin (aug 2025 – maj 2027)" },
      { label: "Bakgrund", value: "Över tio år inom vården" },
      { label: "Vill lära mig mer om", value: "Testning, automatisering och säkerhet" },
    ],
    motto: "Ingenting är omöjligt, det omöjliga tar bara lite längre tid.",
    mottoCaption: "Mitt motto",
  },

  // Tekniker jag har använt. Inga nivåer, bara grupper.
  skills: {
    heading: "Kompetens",
    intro:
      "Det här är tekniker jag har använt i skolprojekt och egna projekt. Jag lär mig fortfarande, och en del använder jag mer än annat.",
    groups: [
      { title: "Språk", items: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"] },
      { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
      { title: "Backend och data", items: ["Node.js", "Hono", "PostgreSQL", "Supabase"] },
      { title: "Verktyg", items: ["Git", "GitHub", "VS Code", "Figma", "Vercel"] },
      { title: "Grundläggande", items: ["Python", "Linux"] },
    ],
  },

  contact: {
    heading: "Kontakt",
    intro: `Jag söker LIA under perioden ${liaPeriod}. Jag är också öppen för en senare start om det passar ert företag bättre. Mejla mig om du har en plats eller vill veta mer.`,
    downloadCv: "Ladda ner CV (PDF)",
  },

  footer: { builtWith: "Byggd med Next.js och Tailwind CSS" },
};
