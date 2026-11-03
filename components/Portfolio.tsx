import type { Metadata } from "next";
import { langPath, texts } from "@/content";
import { profile } from "@/content/profile";
import type { Lang } from "@/content/types";
import { getCvUrl } from "@/lib/cv";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

// Hela sidan. Används av app/(sv)/page.tsx och app/(en)/en/page.tsx.
export function Portfolio({ lang }: { lang: Lang }) {
  const cvUrl = getCvUrl();

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {texts[lang].skipLink}
      </a>
      <Header lang={lang} />
      <main id="main">
        <Hero lang={lang} cvUrl={cvUrl} />
        <Projects lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Contact lang={lang} cvUrl={cvUrl} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

// Titel och beskrivning för Google och delning, plus länkar mellan språkversionerna.
export function portfolioMetadata(lang: Lang): Metadata {
  const t = texts[lang].meta;
  return {
    metadataBase: new URL(profile.siteUrl),
    title: t.title,
    description: t.description,
    alternates: { canonical: langPath[lang], languages: { sv: langPath.sv, en: langPath.en } },
    openGraph: {
      title: t.title,
      description: t.shareDescription,
      locale: lang === "sv" ? "sv_SE" : "en_GB",
      type: "website",
    },
  };
}
