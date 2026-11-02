import { contact, profile } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function Contact({ cvUrl }: { cvUrl: string | null }) {
  return (
    <section aria-labelledby="kontakt" className="scheme-dark bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHeading id="kontakt" number="04" title="Kontakt" />
        <div className="reveal">
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            {contact.intro}
          </p>

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
                  Ladda ner CV (PDF) ↓
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
