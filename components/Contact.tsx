import { texts } from "@/content";
import { profile } from "@/content/profile";
import type { Lang } from "@/content/types";
import { SectionHeading } from "./SectionHeading";

export function Contact({ lang, cvUrl }: { lang: Lang; cvUrl: string | null }) {
  const t = texts[lang].contact;

  return (
    <section aria-labelledby="contact" className="scheme-dark bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHeading id="contact" number="04" title={t.heading} />
        <div className="reveal">
          <p className="max-w-2xl text-lg leading-relaxed text-muted">{t.intro}</p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-10 inline-block font-display text-2xl break-all underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent sm:text-4xl md:text-5xl"
          >
            {profile.email}
          </a>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
            <li>
              <a href={profile.github} className="underline-offset-4 hover:underline">
                GitHub: {profile.githubUser} ↗
              </a>
            </li>
            {cvUrl && (
              <li>
                <a href={cvUrl} download className="underline-offset-4 hover:underline">
                  {t.downloadCv} ↓
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
