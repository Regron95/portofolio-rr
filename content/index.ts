import { en } from "./en";
import { sv } from "./sv";
import type { Lang, SiteText } from "./types";

export const texts: Record<Lang, SiteText> = { sv, en };

// Adressen för varje språk. Svenska ligger på startsidan.
export const langPath: Record<Lang, string> = { sv: "/", en: "/en" };
