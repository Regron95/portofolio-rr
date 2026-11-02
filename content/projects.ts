import type { StaticImageData } from "next/image";
import lundbergDesktop from "@/public/projects/lundberg-desktop.png";
import lundbergMobile from "@/public/projects/lundberg-mobil-bokning.png";

// Ett projekt visar antingen riktiga skärmbilder eller ett riktigt kodutdrag.
type ProjectMedia =
  | {
      kind: "screenshots";
      desktop: { src: StaticImageData; alt: string };
      mobile?: { src: StaticImageData; alt: string };
    }
  | { kind: "code"; file: string; language: string; code: string };

export type Project = {
  title: string;
  subtitle: string;
  status: string;
  description: string;
  // Det som faktiskt fungerar i dag
  done: { heading: string; items: string[] };
  // Det som är planerat men inte byggt än (valfritt)
  planned?: { heading: string; items: string[] };
  role?: string;
  tech: string[];
  links: { label: string; href: string }[];
  media: ProjectMedia;
};

export const projects: Project[] = [
  {
    title: "Lundberg",
    subtitle: "Webbplats för en restaurang i Stockholm",
    status: "Publicerad",
    description:
      "Lundberg har två restauranger: en pub och en pasta- och pizzarestaurang. Webbplatsen visar menyer och öppettider på svenska och engelska, och gästerna kan boka bord direkt på sajten.",
    done: {
      heading: "Det här finns på sajten",
      items: [
        "Menyer och öppettider för båda restaurangerna",
        "Svenska och engelska",
        "Bordsbokning som sparas i Supabase och stoppar överbokning",
        "En sida där personalen hanterar bokningar",
        "Bekräftelse via e-post när någon bokar",
        "Publicerad på Vercel med egen domän",
      ],
    },
    role: "Jag har byggt och publicerat sajten, och satt upp driftsättningen på Vercel och den egna domänen. Stora delar av koden har jag tagit fram med hjälp av GitHub Copilot.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Resend", "Vercel"],
    // Koden ligger i ett privat repo. Lägg till en länk här om du gör det publikt:
    // { label: "Koden på GitHub", href: "https://github.com/Regron95/lundbergsResturant" }
    links: [{ label: "Besök sajten", href: "https://www.restauranglundberg.se" }],
    media: {
      kind: "screenshots",
      desktop: {
        src: lundbergDesktop,
        alt: "Startsidan för Lundbergs pub med knappar för meny och bordsbokning, adress och öppettider.",
      },
      mobile: {
        src: lundbergMobile,
        alt: "Bokningsformuläret på Lundbergs webbplats i mobilvy.",
      },
    },
  },
  {
    title: "StayFinder",
    subtitle: "Bokningstjänst för boenden",
    status: "Pågående skolprojekt",
    description:
      "Ett skolprojekt på Nackademin där jag bygger en tjänst för att hitta och boka boenden. Målet är att koppla ihop frontend, API, databas och inloggning. Hittills har jag byggt API:t och databasen.",
    done: {
      heading: "Klart hittills",
      items: [
        "API byggt med Hono och TypeScript",
        "Validering med Zod och tydliga felkoder",
        "Inloggning med Supabase Auth, där sessionen sparas i en httpOnly-cookie",
        "Behörighet både i API:t och i databasen med Row Level Security",
        "Filtrering och sortering av boenden i backend",
        "Bokningar där databasen stoppar dubbelbokningar och räknar ut priset",
      ],
    },
    planned: {
      heading: "Planerat",
      items: [
        "Frontend i Next.js med inloggning, lista över boenden, filter och bokningsformulär",
      ],
    },
    tech: ["TypeScript", "Hono", "Zod", "Supabase", "PostgreSQL"],
    links: [{ label: "Koden på GitHub", href: "https://github.com/Regron95/stayfinder" }],
    media: {
      kind: "code",
      file: "backend/supabase/migrations/003_bookings.sql",
      language: "SQL",
      code: `-- Två bokningar på samma boende får inte ha överlappande datum.
-- '[)' = check_in räknas, check_out räknas inte → man kan checka in samma dag som någon checkar ut.
-- Avbokade räknas inte. En bokning som ändras jämförs bara mot ANDRA rader.
alter table public.bookings
  add constraint no_overlapping_bookings
  exclude using gist (
    property_id with =,
    daterange(check_in, check_out, '[)') with &&
  )
  where (status <> 'cancelled');`,
    },
  },
];
