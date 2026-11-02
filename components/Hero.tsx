import Image from "next/image";
import portrait from "@/public/regine-ronesen.jpg";
import { hero, profile } from "@/content/site";

export function Hero({ cvUrl }: { cvUrl: string | null }) {
  const status = [
    { key: "status", value: "Söker LIA", signal: true },
    { key: "period", value: profile.lia.period },
    { key: "start", value: profile.lia.start },
    { key: "ort", value: profile.city },
  ];

  return (
    <section id="top" aria-labelledby="hero-title" className="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6 md:pt-20 md:pb-32">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
        <div className="fade-up">
          {/* Porträtt som ett litet frimärke. Kanten ritas i globals.css (.stamp) */}
          <div className="stamp mb-8 w-28 -rotate-3 sm:w-32">
            <Image
              src={portrait}
              alt={`Porträtt av ${profile.name}`}
              sizes="128px"
              placeholder="blur"
              priority
              className="aspect-[4/5] w-full object-cover object-[50%_35%]"
            />
          </div>

          <p className="font-mono text-sm text-muted">
            {profile.education.program} · {profile.education.school}
          </p>
          <h1
            id="hero-title"
            className="mt-5 font-display text-5xl leading-[1.02] font-medium tracking-tight sm:text-7xl md:text-8xl"
          >
            {profile.name}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">{hero.intro}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projekt"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
            >
              Se mina projekt
            </a>
            <a
              href="#kontakt"
              className="rounded-full border border-ink/25 px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
            >
              Kontakta mig
            </a>
            {cvUrl && (
              <a
                href={cvUrl}
                download
                className="rounded-full border border-ink/25 px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
              >
                Ladda ner CV <span className="text-muted">(PDF)</span>
              </a>
            )}
          </div>
        </div>

        {/* LIA-information som en liten "statusrad", lätt att skumma */}
        <dl
          className="fade-up rounded-2xl border border-line bg-paper-raised p-6 font-mono text-sm [animation-delay:150ms] md:p-7"
          aria-label="Om min LIA"
        >
          {status.map((row) => (
            <div key={row.key} className="grid grid-cols-[5.5rem_1fr] gap-3 border-b border-line py-3 first:pt-0 last:border-0 last:pb-0">
              <dt className="text-muted">{row.key}</dt>
              <dd className="flex items-center gap-2">
                {row.signal && (
                  <span className="relative flex size-2" aria-hidden="true">
                    <span className="absolute inline-flex size-full rounded-full bg-signal opacity-60 motion-safe:animate-ping" />
                    <span className="relative inline-flex size-2 rounded-full bg-signal" />
                  </span>
                )}
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
