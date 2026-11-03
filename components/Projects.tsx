import Image from "next/image";
import { texts } from "@/content";
import { profile } from "@/content/profile";
import { projects, type Project } from "@/content/projects";
import type { Lang } from "@/content/types";
import { SectionHeading } from "./SectionHeading";

export function Projects({ lang }: { lang: Lang }) {
  const t = texts[lang].projects;
  const [before, linkText, after] = t.moreOnGithub;

  return (
    <section aria-labelledby="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading id="projects" number="01" title={t.heading} />
      <div className="space-y-24 md:space-y-32">
        {projects.map((project, index) => (
          <ProjectEntry key={project.title} project={project} lang={lang} flip={index % 2 === 1} />
        ))}
      </div>
      <p className="mt-20 text-muted">
        {before}{" "}
        <a href={profile.github} className="text-ink underline decoration-accent underline-offset-4 hover:decoration-2">
          {linkText}
        </a>
        {after}
      </p>
    </section>
  );
}

function ProjectEntry({ project, lang, flip }: { project: Project; lang: Lang; flip: boolean }) {
  const t = texts[lang].projects;
  const text = project.text[lang];

  return (
    <article className="reveal grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
      {/* min-w-0 hindrar breda kodrader från att trycka ut kolumnen */}
      <div className={`min-w-0 ${flip ? "lg:order-2" : ""}`}>
        <ProjectMedia media={project.media} lang={lang} />
      </div>

      <div className="min-w-0">
        <p className="font-mono text-xs tracking-wide text-muted uppercase">{text.status}</p>
        <h3 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">{project.title}</h3>
        <p className="mt-1 text-lg text-muted">{text.subtitle}</p>
        <p className="mt-6 leading-relaxed">{text.description}</p>

        <CheckList heading={text.done.heading} items={text.done.items} />
        {text.planned && <CheckList heading={text.planned.heading} items={text.planned.items} planned />}

        {text.role && (
          <p className="mt-6 border-l-2 border-accent pl-4 leading-relaxed text-muted">
            <span className="font-medium text-ink">{t.roleLabel} </span>
            {text.role}
          </p>
        )}

        <ul className="mt-8 flex flex-wrap gap-2" aria-label={t.techLabel}>
          {project.tech.map((tech) => (
            <li key={tech} className="rounded-full border border-line px-3 py-1 font-mono text-xs">
              {tech}
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
              {link.label[lang]}
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

function ProjectMedia({ media, lang }: { media: Project["media"]; lang: Lang }) {
  if (media.kind === "code") {
    return (
      <figure className="overflow-hidden rounded-2xl bg-code-bg text-code-ink">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3 font-mono text-xs text-code-comment">
          <span className="truncate">{media.file}</span>
          <span>{media.language}</span>
        </div>
        {/* Koden är alltid på svenska, därför lang="sv" även på den engelska sidan */}
        <pre
          className="overflow-x-auto p-5 font-mono text-[0.8rem] leading-relaxed"
          tabIndex={0}
          lang="sv"
          aria-label={media.file}
        >
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
          {media.caption[lang]}
        </figcaption>
      </figure>
    );
  }

  return (
    <div className="relative sm:pr-16 sm:pb-10">
      <Image
        src={media.desktop.src}
        alt={media.desktop.alt[lang]}
        sizes="(min-width: 1024px) 540px, 100vw"
        className="w-full rounded-xl border border-line shadow-sm"
        placeholder="blur"
      />
      {media.mobile && (
        <div className="absolute right-0 bottom-0 hidden w-[28%] max-w-40 overflow-hidden rounded-2xl border-4 border-ink shadow-lg sm:block">
          <Image
            src={media.mobile.src}
            alt={media.mobile.alt[lang]}
            sizes="160px"
            className="aspect-9/16 w-full object-cover object-top"
          />
        </div>
      )}
    </div>
  );
}
