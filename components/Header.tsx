const links = [
  { href: "#projekt", label: "Projekt" },
  { href: "#om-mig", label: "Om mig" },
  { href: "#kompetens", label: "Kompetens" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight" aria-label="Till toppen">
          <span className="sm:hidden">RR</span>
          <span className="hidden sm:inline">regine ronesen</span>
        </a>
        <nav aria-label="Huvudmeny">
          <ul className="flex gap-3 font-mono text-[0.75rem] whitespace-nowrap min-[400px]:gap-4 min-[400px]:text-[0.8rem] sm:gap-7 sm:text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
