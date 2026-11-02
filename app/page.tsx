import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { getCvUrl } from "@/lib/cv";

export default function Home() {
  const cvUrl = getCvUrl();

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Hoppa till innehållet
      </a>
      <Header />
      <main id="main">
        <Hero cvUrl={cvUrl} />
        <Projects />
        <About />
        <Skills />
        <Contact cvUrl={cvUrl} />
      </main>
      <Footer />
    </>
  );
}
