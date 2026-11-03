import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import type { Lang } from "@/content/types";
import "@/app/globals.css";

// Typsnitten laddas ner vid bygget och serveras från egen domän.
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", axes: ["opsz"] });
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

// Gemensamt <html> och <body> för båda språken. lang talar om för webbläsare,
// skärmläsare och Google vilket språk sidan är på.
export function Document({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
