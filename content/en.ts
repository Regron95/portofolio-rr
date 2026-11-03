import type { SiteText } from "./types";

const liaPeriod = "9 Nov 2026 – 23 Apr 2027";

// All English text on the site. The Swedish version is in sv.ts.
export const en: SiteText = {
  meta: {
    title: "Regine Ronesen – web developer in training",
    description:
      "Portfolio of Regine Ronesen. Studying Web Developer Fullstack Open Source at Nackademin and looking for an internship (LIA) from November 2026.",
    shareDescription: "Studying at Nackademin and looking for an internship (LIA) from November 2026.",
  },
  skipLink: "Skip to content",
  backToTop: "back to top",
  switchLanguage: "Read in English",
  nav: { projects: "Projects", about: "About", skills: "Skills", contact: "Contact" },

  hero: {
    program: "Web Developer Fullstack Open Source · Nackademin",
    intro:
      "I'm studying to become a web developer and I'm looking for an internship (LIA). I want to see how programming is used in real projects and learn how developers work together.",
    seeProjects: "See my projects",
    contactMe: "Contact me",
    downloadCv: "Download CV",
    portraitAlt: "Portrait of Regine Ronesen",
    statusLabel: "About my internship",
    status: [
      { key: "status", value: "Looking for an internship", signal: true },
      { key: "period", value: liaPeriod },
      { key: "start", value: "Flexible, in agreement with my school" },
      { key: "location", value: "Stockholm" },
    ],
  },

  projects: {
    heading: "Projects",
    roleLabel: "My role:",
    techLabel: "Technologies",
    moreOnGithub: ["More school projects are on", "my GitHub", "."],
  },

  about: {
    heading: "About me",
    paragraphs: [
      "Before I started studying programming, I worked in healthcare for more than ten years. There I took responsibility, worked with many different people and learned new systems when the way we worked changed. I bring that with me into development.",
      "I like understanding how things fit together, from what the user sees to the database behind it. Right now I'm most interested in frontend, backend, integrations, testing and automation.",
      "In the long run, I want to go deeper into cybersecurity and ethical hacking.",
    ],
    facts: [
      { label: "Based in", value: "Stockholm" },
      { label: "Studying", value: "Web Developer Fullstack Open Source, Nackademin (Aug 2025 – May 2027)" },
      { label: "Background", value: "More than ten years in healthcare" },
      { label: "Want to learn more about", value: "Testing, automation and security" },
    ],
    motto: "Nothing is impossible, the impossible just takes a little longer.",
    mottoCaption: "My motto",
  },

  skills: {
    heading: "Skills",
    intro:
      "These are technologies I have used in school projects and my own projects. I'm still learning, and I use some of them more than others.",
    groups: [
      { title: "Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"] },
      { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
      { title: "Backend and data", items: ["Node.js", "Hono", "PostgreSQL", "Supabase"] },
      { title: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Vercel"] },
      { title: "Basics", items: ["Python", "Linux"] },
    ],
  },

  contact: {
    heading: "Contact",
    intro: `I'm looking for an internship (LIA) between ${liaPeriod}. I'm also open to a later start if that suits your company better. Email me if you have a position or want to know more.`,
    downloadCv: "Download CV (PDF)",
  },

  footer: { builtWith: "Built with Next.js and Tailwind CSS" },
};
