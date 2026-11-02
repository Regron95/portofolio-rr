import { skills } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section aria-labelledby="kompetens" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading id="kompetens" number="03" title="Kompetens" />
      <p className="max-w-2xl text-lg leading-relaxed text-muted">{skills.intro}</p>
      <dl className="reveal mt-12 border-t border-line">
        {skills.groups.map((group) => (
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
