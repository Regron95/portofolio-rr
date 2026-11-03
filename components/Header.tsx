import { langPath, texts } from "@/content";
import { profile } from "@/content/profile";
import type { Lang } from "@/content/types";

const languages: Lang[] = ["sv", "en"];

export function Header({ lang }: { lang: Lang }) {
  const t = texts[lang];
  const links = [
    { href: "#projects", label: t.nav.projects },
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  const languageSwitch = (
    <ul className="flex items-center gap-1 font-mono text-xs" aria-label="Språk / Language">
      {languages.map((l) => (
        <li key={l}>
          <a
            href={langPath[l]}
            hrefLang={l}
            lang={l}
            aria-label={texts[l].switchLanguage}
            aria-current={l === lang ? "page" : undefined}
            className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
              l === lang ? "bg-ink text-paper" : "text-muted hover:text-ink"
            }`}
          >
            {l}
          </a>
        </li>
      ))}
    </ul>
  );

  // Mobil: två rader (namn + språk, sedan menyn). Större skärmar: en rad som följer med vid scroll.
  return (
    <header className="border-b border-line bg-paper/90 backdrop-blur sm:sticky sm:top-0 sm:z-20">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 px-4 sm:h-16 sm:flex-nowrap sm:px-6">
        {/* Monogram: två R rygg mot rygg, den första spegelvänd */}
        <a
          href="#top"
          aria-label={`${profile.name}, ${t.backToTop}`}
          className="flex py-2 font-display text-3xl leading-none font-medium sm:py-0"
        >
          <span aria-hidden="true" className="inline-block -scale-x-100">
            R
          </span>
          <span aria-hidden="true" className="-ml-[0.04em] inline-block">
            R
          </span>
        </a>
        <div className="sm:hidden">{languageSwitch}</div>

        <nav aria-label={lang === "sv" ? "Huvudmeny" : "Main menu"} className="w-full border-t border-line py-3 sm:w-auto sm:border-0 sm:py-0">
          <ul className="flex justify-between gap-3 font-mono text-[0.8rem] whitespace-nowrap sm:justify-start sm:gap-7 sm:text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden sm:block">{languageSwitch}</div>
      </div>
    </header>
  );
}
