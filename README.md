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
| `content/site.ts` | Navn, kontakt, LIA-periode, intro, «Om mig», motto, kompetanse |
| `content/projects.ts` | Prosjektene (tekst, teknologier, lenker, bilder/kodeutdrag) |
| `components/` | Én fil per seksjon (Hero, Projects, About, Skills, Contact …) |
| `app/globals.css` | Farger (lyst og mørkt tema) og animasjoner |
| `app/layout.tsx` | Skrifttyper, sidetittel og beskrivelse for Google/deling |
| `public/projects/` | Prosjektbilder |

## Endre tekst

Åpne `content/site.ts` eller `content/projects.ts` og endre teksten mellom anførselstegnene. Komponentene trenger du ikke å røre.

## Legge til et prosjekt

1. Legg bilder i `public/projects/` (ekte skjermbilder, gjerne 1440 px brede).
2. Importer dem øverst i `content/projects.ts`:
   ```ts
   import mittBilde from "@/public/projects/mitt-bilde.png";
   ```
3. Legg til et nytt objekt i `projects`-listen. Kopier et eksisterende og endre det.
   - `done`: det som faktisk fungerer.
   - `planned`: det som ikke er bygget ennå (valgfritt).
   - `media`: enten `kind: "screenshots"` med bilder eller `kind: "code"` med et ekte kodeutdrag.
   - `links`: bare lenker som fungerer.

Rekkefølgen i listen er rekkefølgen på siden. Annethvert prosjekt får bildet på motsatt side automatisk.

## Oppdatere CV

Legg PDF-en i `public/cv.pdf` (nøyaktig det navnet). Knappen «Ladda ner CV» dukker da opp i introen og under Kontakt. Uten filen vises ingen knapp. Kontrollen skjer når siden bygges, så kjør `npm run build` på nytt eller push til GitHub.

## Publisere på Vercel

Siden ligger på **https://portofolio-regron.vercel.app** (Vercel-prosjekt `portofolio-rr`).
Mappen er allerede koblet til prosjektet (`.vercel/`). For å publisere endringer:

```bash
npm run build                  # sjekk at alt bygger
npx vercel deploy --prod       # publiser
```

### Alternativ: automatisk publisering via GitHub

1. Lag et nytt repo på GitHub og push koden (se kommandoene under).
2. Gå til vercel.com → prosjektet `portofolio-rr` → **Settings → Git** → koble til repoet.
3. Etter det publiseres hver `git push` til `main` automatisk.

```bash
git init
git add .
git commit -m "Første versjon av porteføljen"
git branch -M main
git remote add origin https://github.com/Regron95/portfolio.git
git push -u origin main
```
