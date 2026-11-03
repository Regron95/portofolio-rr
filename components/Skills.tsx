import { texts } from "@/content";
import type { Lang } from "@/content/types";
import { SectionHeading } from "./SectionHeading";

export function Skills({ lang }: { lang: Lang }) {
  const t = texts[lang].skills;

  return (
    <section aria-labelledby="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading id="skills" number="03" title={t.heading} />
      <p className="max-w-2xl text-lg leading-relaxed text-muted">{t.intro}</p>
      <dl className="reveal mt-12 border-t border-line">
        {t.groups.map((group) => (
          <div
            key={group.title}
            className="grid gap-2 border-b border-line py-5 sm:grid-cols-[14rem_1fr] sm:items-baseline sm:gap-8"
          >
            <dt className="font-mono text-sm text-muted">{group.title}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-6 gap-y-1 text-lg">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
