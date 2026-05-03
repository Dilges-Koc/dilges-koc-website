import type { Metadata } from "next";
import Header from "../../Header";
import Footer from "../../Footer";

export const metadata: Metadata = {
  title: "Individuelle Weblösungen | Dilges Koc",
  description:
    "Individuelle Weblösungen und maßgeschneiderte Frontend-Projekte für konkrete geschäftliche Anforderungen.",
};

export default function IndividuelleWebloesungenPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-24 text-white">
      <Header />
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
          Leistung
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Individuelle Weblösungen
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-300">
          Nicht jedes Projekt passt in ein Standard-Template. Ich unterstütze
          bei individuellen Webseiten und Weboberflächen, die auf konkrete
          Anforderungen zugeschnitten sind.
        </p>

        <div className="mt-12 rounded-[2rem] border border-cyan-400/10 bg-[#0b1224]/80 p-8">
          <h2 className="text-2xl font-semibold">Mögliche Bereiche</h2>
          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>• individuelle Weboberflächen</li>
            <li>• spezielle Layouts und Komponenten</li>
            <li>• angepasste Business-Webseiten</li>
            <li>• projektbezogene Frontend-Lösungen</li>
          </ul>
        </div>

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Zusammenarbeit</h2>
          <p className="mt-4 leading-8 text-zinc-300">
            Wenn du bereits eine Idee oder konkrete Anforderungen hast, können
            wir gemeinsam eine passende Lösung abstimmen und sauber umsetzen.
          </p>
        </div>

        <a
          href="/#kontakt"
          className="mt-10 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
        >
          Projekt besprechen
        </a>
      </div>
      <Footer />
    </main>
  );
}