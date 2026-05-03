import type { Metadata } from "next";
import Header from "../../Header";
import Footer from "../../Footer";

export const metadata: Metadata = {
  title: "Firmenwebseiten | Dilges Koc",
  description:
    "Professionelle Firmenwebseiten für Selbstständige, lokale Unternehmen und Startups.",
};

export default function FirmenwebseitenPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-24 text-white">
      <Header />
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
          Leistung
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">Firmenwebseiten</h1>

        <p className="mt-6 text-lg leading-8 text-zinc-300">
          Ich entwickle professionelle Webseiten für Unternehmen,
          Selbstständige, lokale Betriebe und Startups. Ziel ist ein moderner
          und seriöser Online-Auftritt, der Vertrauen schafft.
        </p>

        <div className="mt-12 space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Professioneller Außenauftritt</h2>
            <p className="mt-3 text-zinc-400">
              Eine Website, die dein Unternehmen modern, klar und vertrauenswürdig präsentiert.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Passend für deine Zielgruppe</h2>
            <p className="mt-3 text-zinc-400">
              Inhalte und Struktur werden so aufgebaut, dass sie zu deinem Angebot passen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Responsiv und modern</h2>
            <p className="mt-3 text-zinc-400">
              Optimiert für Desktop, Tablet und Smartphone.
            </p>
          </div>
        </div>

        <a
          href="/#kontakt"
          className="mt-10 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
        >
          Projekt anfragen
        </a>
      </div>
      <Footer />
    </main>
  );
}