import Image from "next/image";
import { projects, type Project } from "@/content/projects";
import { profile } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section aria-labelledby="projekt" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading id="projekt" number="01" title="Projekt" />
      <div className="space-y-24 md:space-y-32">
        {projects.map((project, index) => (
          <ProjectEntry key={project.title} project={project} flip={index % 2 === 1} />
        ))}
      </div>
      <p className="mt-20 text-muted">
        Fler skolprojekt finns på{" "}
        <a href={profile.github} className="text-ink underline decoration-accent underline-offset-4 hover:decoration-2">
          min GitHub
        </a>
        .
      </p>
    </section>
  );
}

function ProjectEntry({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article className="reveal grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
      {/* min-w-0 hindrar breda kodrader från att trycka ut kolumnen */}
      <div className={`min-w-0 ${flip ? "lg:order-2" : ""}`}>
        <ProjectMedia media={project.media} />
      </div>

      <div className="min-w-0">
        <p className="font-mono text-xs tracking-wide text-muted uppercase">{project.status}</p>
        <h3 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">{project.title}</h3>
        <p className="mt-1 text-lg text-muted">{project.subtitle}</p>
        <p className="mt-6 leading-relaxed">{project.description}</p>

        <CheckList heading={project.done.heading} items={project.done.items} />
        {project.planned && <CheckList heading={project.planned.heading} items={project.planned.items} planned />}

        {project.role && (
          <p className="mt-6 border-l-2 border-accent pl-4 leading-relaxed text-muted">
            <span className="font-medium text-ink">Min roll: </span>
            {project.role}
          </p>
        )}

        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tekniker">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group inline-flex items-center gap-2 font-medium underline decoration-accent decoration-2 underline-offset-[6px]"
            >
              {link.label}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function CheckList({ heading, items, planned = false }: { heading: string; items: string[]; planned?: boolean }) {
  return (
    <div className="mt-8">
      <h4 className="font-mono text-xs tracking-wide text-muted uppercase">{heading}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-snug">
            <span aria-hidden="true" className={`mt-px font-mono ${planned ? "text-muted" : "text-signal"}`}>
              {planned ? "○" : "✓"}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectMedia({ media }: { media: Project["media"] }) {
  if (media.kind === "code") {
    return (
      <figure className="overflow-hidden rounded-2xl bg-code-bg text-code-ink">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3 font-mono text-xs text-code-comment">
          <span className="truncate">{media.file}</span>
          <span>{media.language}</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[0.8rem] leading-relaxed" tabIndex={0} aria-label={`Kodutdrag ur ${media.file}`}>
          <code>
            {media.code.split("\n").map((line, i) => (
              <span
                key={i}
                className={`block ${line.trim().startsWith("--") ? "whitespace-pre-wrap text-code-comment" : ""}`}
              >
                {line || " "}
              </span>
            ))}
          </code>
        </pre>
        <figcaption className="border-t border-white/10 px-5 py-3 text-xs text-code-comment">
          Utdrag ur min kod: databasen själv nekar dubbelbokningar, även om någon går förbi API:t.
        </figcaption>
      </figure>
    );
  }

  return (
    <div className="relative sm:pr-16 sm:pb-10">
      <Image
        src={media.desktop.src}
        alt={media.desktop.alt}
        sizes="(min-width: 1024px) 540px, 100vw"
        className="w-full rounded-xl border border-line shadow-sm"
        placeholder="blur"
      />
      {media.mobile && (
        <div className="absolute right-0 bottom-0 hidden w-[28%] max-w-40 overflow-hidden rounded-2xl border-4 border-ink shadow-lg sm:block">
          <Image
            src={media.mobile.src}
            alt={media.mobile.alt}
            sizes="160px"
            className="aspect-[9/16] w-full object-cover object-top"
          />
        </div>
      )}
    </div>
  );
}
