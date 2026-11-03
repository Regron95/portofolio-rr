import type { StaticImageData } from "next/image";
import type { Localized } from "./types";
import lundbergDesktop from "@/public/projects/lundberg-desktop.png";
import lundbergMobile from "@/public/projects/lundberg-mobil-bokning.png";

// Ett projekt visar antingen riktiga skärmbilder eller ett riktigt kodutdrag.
type ProjectMedia =
  | {
      kind: "screenshots";
      desktop: { src: StaticImageData; alt: Localized };
      mobile?: { src: StaticImageData; alt: Localized };
    }
  | { kind: "code"; file: string; language: string; code: string; caption: Localized };

// Texten som skiljer sig mellan svenska och engelska
type ProjectText = {
  subtitle: string;
  status: string;
  description: string;
  // Det som faktiskt fungerar i dag
  done: { heading: string; items: string[] };
  // Det som är planerat men inte byggt än (valfritt)
  planned?: { heading: string; items: string[] };
  role?: string;
};

export type Project = {
  title: string;
  tech: string[];
  links: { href: string; label: Localized }[];
  media: ProjectMedia;
  text: Localized<ProjectText>;
};

export const projects: Project[] = [
  {
    title: "Lundberg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Resend", "Vercel"],
    // Koden ligger i ett privat repo. Lägg till en länk här om du gör det publikt:
    // { href: "https://github.com/Regron95/lundbergsResturant", label: { sv: "Koden på GitHub", en: "Code on GitHub" } }
    links: [
      { href: "https://www.restauranglundberg.se", label: { sv: "Besök sajten", en: "Visit the site" } },
    ],
    media: {
      kind: "screenshots",
      desktop: {
        src: lundbergDesktop,
        alt: {
          sv: "Startsidan för Lundbergs pub med knappar för meny och bordsbokning, adress och öppettider.",
          en: "The home page of Lundberg's pub with buttons for the menu and table booking, address and opening hours.",
        },
      },
      mobile: {
        src: lundbergMobile,
        alt: {
          sv: "Bokningsformuläret på Lundbergs webbplats i mobilvy.",
          en: "The booking form on Lundberg's website on a phone.",
        },
      },
    },
    text: {
      sv: {
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
      },
      en: {
        subtitle: "Website for a restaurant in Stockholm",
        status: "Live",
        description:
          "Lundberg has two restaurants: a pub and a pasta and pizza restaurant. The website shows menus and opening hours in Swedish and English, and guests can book a table directly on the site.",
        done: {
          heading: "What the site has",
          items: [
            "Menus and opening hours for both restaurants",
            "Swedish and English",
            "Table booking stored in Supabase that prevents overbooking",
            "A page where the staff manage bookings",
            "Email confirmation when someone books",
            "Hosted on Vercel with a custom domain",
          ],
        },
        role: "I built and launched the site, and set up hosting on Vercel and the custom domain. I wrote large parts of the code with the help of GitHub Copilot.",
      },
    },
  },
  {
    title: "StayFinder",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Hono", "Zod", "Supabase", "PostgreSQL"],
    links: [
      { href: "https://github.com/Regron95/stayfinder", label: { sv: "Koden på GitHub", en: "Code on GitHub" } },
    ],
    media: {
      kind: "code",
      file: "backend/supabase/migrations/003_bookings.sql",
      language: "SQL",
      caption: {
        sv: "Utdrag ur min kod: databasen själv nekar dubbelbokningar, även om någon går förbi API:t.",
        en: "An excerpt from my code (comments in Swedish): the database itself rejects double bookings, even if someone bypasses the API.",
      },
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
    text: {
      sv: {
        subtitle: "Bokningstjänst för boenden",
        status: "Skolprojekt",
        description:
          "Ett skolprojekt på Nackademin: en tjänst där man kan hitta, lägga upp och boka boenden. Jag har byggt frontend, API och databas och kopplat ihop dem med inloggning.",
        done: {
          heading: "Det här fungerar",
          items: [
            "Lista över boenden med filter på plats, maxpris och antal gäster, och sortering på pris",
            "Konto, inloggning och utloggning med Supabase Auth, där sessionen sparas i en httpOnly-cookie",
            "Inloggade kan lägga upp egna boenden och boka andras",
            "Bokningsformulär som visar antal nätter och totalpris innan man bokar",
            "Se, ändra, avboka och ta bort sina bokningar",
            "Behörighet både i API:t och i databasen med Row Level Security",
            "Databasen stoppar dubbelbokningar och räknar själv ut priset",
          ],
        },
        planned: {
          heading: "Nästa steg",
          items: ["Förbättra designen och detaljerna i gränssnittet"],
        },
      },
      en: {
        subtitle: "Booking service for places to stay",
        status: "School project",
        description:
          "A school project at Nackademin: a service where you can find, list and book places to stay. I built the frontend, the API and the database and connected them with login.",
        done: {
          heading: "What works",
          items: [
            "A list of places with filters for location, max price and number of guests, and sorting by price",
            "Sign up, log in and log out with Supabase Auth, with the session stored in an httpOnly cookie",
            "Logged-in users can list their own places and book other people's",
            "A booking form that shows the number of nights and the total price before you book",
            "View, change, cancel and delete your bookings",
            "Permissions in both the API and the database with Row Level Security",
            "The database prevents double bookings and calculates the price itself",
          ],
        },
        planned: {
          heading: "Next steps",
          items: ["Improve the design and the details of the interface"],
        },
      },
    },
  },
];
