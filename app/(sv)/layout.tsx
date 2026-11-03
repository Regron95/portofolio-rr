import { Document } from "@/components/Document";
import { portfolioMetadata } from "@/components/Portfolio";

// Svensk version: https://portofolio-regron.vercel.app/
export const metadata = portfolioMetadata("sv");

export default function SwedishLayout({ children }: { children: React.ReactNode }) {
  return <Document lang="sv">{children}</Document>;
}
