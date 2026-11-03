# Portfolio – Regine Ronesen

Next.js 16, TypeScript og Tailwind CSS 4. Ingen database eller backend: siden bygges som statisk HTML.

## Kjøre lokalt

```bash
npm install      # første gang
npm run dev      # åpne http://localhost:3000
npm run build    # sjekk at alt bygger før du publiserer
```

## Hvor ting ligger

| Fil | Innhold |
|---|---|
| `content/sv.ts` | All svensk tekst: intro, LIA-periode, «Om mig», motto, kompetanse, kontakt, sidetittel |
| `content/en.ts` | Den samme teksten på engelsk |
| `content/projects.ts` | Prosjektene, med svensk og engelsk tekst side om side |
| `content/profile.ts` | Det som er likt på begge språk: navn, e-post, GitHub, adressen til siden |
| `content/types.ts` | Strukturen som `sv.ts` og `en.ts` må følge |
| `components/` | Én fil per seksjon (Hero, Projects, About, Skills, Contact …). `Portfolio.tsx` setter dem sammen |
| `app/(sv)/` og `app/(en)/en/` | Den svenske siden (`/`) og den engelske (`/en`) |
| `app/globals.css` | Farger (lyst og mørkt tema), frimerkekanten og animasjoner |
| `public/projects/` | Prosjektbilder |

## Endre tekst

Åpne `content/sv.ts` og `content/en.ts` og endre teksten mellom anførselstegnene. Komponentene trenger du ikke å røre.

Husk å endre **begge** språkene. Legger du til et nytt felt i det ene, må det også inn i det andre og i `content/types.ts`. Ellers stopper `npm run build` med en feilmelding som forteller hva som mangler.

## Legge til et prosjekt

1. Legg bilder i `public/projects/` (ekte skjermbilder, gjerne 1440 px brede).
2. Importer dem øverst i `content/projects.ts`:
   ```ts
   import mittBilde from "@/public/projects/mitt-bilde.png";
   ```
3. Legg til et nytt objekt i `projects`-listen. Kopier et eksisterende og endre det.
   - `text.sv` og `text.en`: beskrivelsen på hvert språk.
   - `done`: det som faktisk fungerer.
   - `planned`: det som ikke er bygget ennå (valgfritt).
   - `media`: enten `kind: "screenshots"` med bilder eller `kind: "code"` med et ekte kodeutdrag.
   - `links`: bare lenker som fungerer, med `label: { sv: "…", en: "…" }`.

Rekkefølgen i listen er rekkefølgen på siden. Annethvert prosjekt får bildet på motsatt side automatisk.

## Oppdatere CV

Legg PDF-en i `public/cv.pdf` (nøyaktig det navnet). Knappen «Ladda ner CV» dukker da opp i introen og under Kontakt. Uten filen vises ingen knapp. Kontrollen skjer når siden bygges, så kjør `npm run build` på nytt eller push til GitHub.

## Publisere på Vercel

Siden ligger på **https://portofolio-regron.vercel.app** (Vercel-prosjekt `portofolio-rr`).
Koden ligger på https://github.com/Regron95/portofolio-rr, som er koblet til Vercel.
Hver `git push` til `main` publiseres automatisk:

```bash
npm run build                        # sjekk at alt bygger
git add .
git commit -m "Beskriv endringen"
git push
```

Etter et minutt eller to er endringen live. Status ser du på vercel.com under prosjektet.
