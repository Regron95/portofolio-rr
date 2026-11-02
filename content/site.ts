// All text om mig samlad på ett ställe. Ändra här, inte i komponenterna.

export const profile = {
  name: "Regine Ronesen",
  city: "Stockholm",
  email: "regine.ronesen@gmail.com",
  github: "https://github.com/Regron95",
  githubUser: "Regron95",
  education: {
    program: "Webbutvecklare fullstack open source",
    school: "Nackademin",
    period: "aug 2025 – maj 2027",
  },
  lia: {
    period: "9 nov 2026 – 23 apr 2027",
    start: "Flexibel, i samråd med skolan",
  },
};

export const hero = {
  intro:
    "Jag studerar till webbutvecklare och söker LIA-plats. Jag vill se hur programmering används i riktiga projekt och lära mig hur utvecklare arbetar tillsammans.",
};

export const contact = {
  intro: `Jag söker LIA under perioden ${profile.lia.period}. Jag är också öppen för en senare start om det passar ert företag bättre. Mejla mig om du har en plats eller vill veta mer.`,
};

export const about = {
  paragraphs: [
    "Innan jag började studera programmering arbetade jag i över tio år inom vården. Där tog jag ansvar, samarbetade med många olika människor och lärde mig nya system när arbetssätten förändrades. Det har jag med mig in i utvecklingen.",
    "Jag tycker om att förstå hur saker hänger ihop, från det användaren ser till databasen bakom. Just nu är jag mest intresserad av frontend, backend, integrationer, testning och automatisering.",
    "På sikt vill jag fördjupa mig i cybersäkerhet och etisk hackning.",
  ],
  motto: "Ingenting är omöjligt, det omöjliga tar bara lite längre tid.",
  facts: [
    { label: "Bor i", value: "Stockholm" },
    { label: "Studerar", value: "Webbutvecklare fullstack open source, Nackademin" },
    { label: "Bakgrund", value: "Över tio år inom vården" },
    { label: "Vill lära mig mer om", value: "Testning, automatisering och säkerhet" },
  ],
};

// Tekniker jag har använt. Inga nivåer, bara grupper.
export const skills = {
  intro:
    "Det här är tekniker jag har använt i skolprojekt och egna projekt. Jag lär mig fortfarande, och en del använder jag mer än annat.",
  groups: [
    { title: "Språk", items: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"] },
    { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
    { title: "Backend och data", items: ["Node.js", "Hono", "PostgreSQL", "Supabase"] },
    { title: "Verktyg", items: ["Git", "GitHub", "VS Code", "Figma", "Vercel"] },
    { title: "Grundläggande", items: ["Python", "Linux"] },
  ],
};
