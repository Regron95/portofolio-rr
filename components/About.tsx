import { texts } from "@/content";
import type { Lang } from "@/content/types";
import { SectionHeading } from "./SectionHeading";

export function About({ lang }: { lang: Lang }) {
  const t = texts[lang].about;

  return (
    <section aria-labelledby="about" className="border-y border-line bg-paper-raised">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHeading id="about" number="02" title={t.heading} />
        <div className="reveal grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div className="space-y-5 text-lg leading-relaxed">
            {t.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <dl className="space-y-5 self-start">
            {t.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs tracking-wide text-muted uppercase">{fact.label}</dt>
                <dd className="mt-1">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="reveal mt-16 md:mt-24">
          <blockquote className="max-w-4xl font-display text-3xl leading-tight font-normal tracking-tight italic md:text-5xl">
            <span className="text-accent">”</span>
            {t.motto}
            <span className="text-accent">”</span>
          </blockquote>
          <figcaption className="mt-4 font-mono text-sm text-muted">{t.mottoCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
