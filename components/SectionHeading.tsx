type Props = { id: string; number: string; title: string };

// Rubrik för varje sektion: nummer, titel och en tunn linje.
export function SectionHeading({ id, number, title }: Props) {
  return (
    <div className="mb-10 flex items-baseline gap-4 md:mb-14">
      <span className="font-mono text-sm text-accent" aria-hidden="true">
        {number}
      </span>
      <h2 id={id} className="font-display text-3xl font-medium tracking-tight md:text-4xl">
        {title}
      </h2>
      <span className="h-px flex-1 translate-y-[-0.35em] bg-line" aria-hidden="true" />
    </div>
  );
}
