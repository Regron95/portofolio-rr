import { texts } from "@/content";
import { profile } from "@/content/profile";
import type { Lang } from "@/content/types";

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="scheme-dark bg-paper text-muted">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="border-t border-line py-8 font-mono text-xs">
          © {new Date().getFullYear()} {profile.name} · {texts[lang].footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
