import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "Leistungen | Dilges Koc",
  description:
    "Übersicht der Leistungen von Dilges Koc: Landingpages, Firmenwebseiten, Frontend-Entwicklung und individuelle Weblösungen.",
};

export default function LeistungenPage() {

  const leistungen = [
    {
      title: "Landingpages",
      href: "/leistungen/landingpages",
      text: "Moderne Seiten für Produkte, Dienstleistungen und starke erste Eindrücke.",
    },
    {
      title: "Firmenwebseiten",
      href: "/leistungen/firmenwebseiten",
      text: "Professionelle Webseiten für Selbstständige, Unternehmen und lokale Betriebe.",
    },
    {
      title: "Frontend-Entwicklung",
      href: "/leistungen/frontend-entwicklung",
      text: "Saubere und moderne Benutzeroberflächen mit Fokus auf Klarheit und Nutzerfreundlichkeit.",
    },
    {
      title: "Individuelle Weblösungen",
      href: "/leistungen/individuelle-webloesungen",
      text: "Maßgeschneiderte Weboberflächen und individuelle digitale Lösungen.",
    },
  ];

  return (
    
    <main className="min-h-screen bg-[#050816] px-6 py-24 text-white">
      <Header />
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
          Leistungen
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
          Meine Leistungen im Bereich Webentwicklung
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Ich unterstütze Unternehmen, Selbstständige, Startups und kleine Teams
          bei modernen Webseiten, Frontend-Entwicklung und individuellen
          Weblösungen.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {leistungen.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 p-8 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-[#101933]"
            >
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="mt-4 leading-7 text-zinc-400">{item.text}</p>
              <p className="mt-6 text-sm font-semibold text-cyan-300">
                Mehr erfahren →
              </p>
            </a>
          ))}
        </div>
      </div>
       <Footer />
    </main>
  );
}