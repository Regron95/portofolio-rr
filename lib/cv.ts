import { existsSync } from "node:fs";
import { join } from "node:path";

// Lägg din CV som public/cv.pdf. Knappen visas bara om filen finns.
// Kontrollen görs när sidan byggs, så bygg om (eller pusha) efter att du lagt till filen.
const CV_PATH = "/cv.pdf";

export function getCvUrl(): string | null {
  return existsSync(join(process.cwd(), "public", CV_PATH)) ? CV_PATH : null;
}
