import { Document } from "@/components/Document";
import { portfolioMetadata } from "@/components/Portfolio";

// Engelsk version: https://portofolio-regron.vercel.app/en
export const metadata = portfolioMetadata("en");

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <Document lang="en">{children}</Document>;
}
