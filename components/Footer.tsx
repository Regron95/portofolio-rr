import { profile } from "@/content/site";

export function Footer() {
  return (
    <footer className="scheme-dark bg-paper text-muted">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="border-t border-line py-8 font-mono text-xs">
          © {new Date().getFullYear()} {profile.name} · Byggd med Next.js och Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
