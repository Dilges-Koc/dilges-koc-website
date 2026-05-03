import type { Metadata } from "next";
import Header from "../../Header";
import Footer from "../../Footer";

export const metadata: Metadata = {
  title: "Frontend-Entwicklung | Dilges Koc",
  description:
    "Moderne Frontend-Entwicklung mit React, Next.js, TypeScript und Fokus auf Nutzerfreundlichkeit und Design.",
};

export default function FrontendEntwicklungPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-24 text-white">
      <Header />
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
          Leistung
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Frontend-Entwicklung
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-300">
          Ich entwickle moderne Benutzeroberflächen mit Fokus auf Klarheit,
          Performance, Responsiveness und ein professionelles Nutzererlebnis.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Moderne UI</h2>
            <p className="mt-3 text-zinc-400">
              Klare, strukturierte und moderne Oberflächen für Webprojekte.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Responsive Umsetzung</h2>
            <p className="mt-3 text-zinc-400">
              Gute Darstellung auf allen wichtigen Bildschirmgrößen.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Saubere Struktur</h2>
            <p className="mt-3 text-zinc-400">
              Durchdachter Aufbau für wartbare und verständliche Frontends.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Tech-Stack</h2>
            <p className="mt-3 text-zinc-400">
              React, Next.js, TypeScript und Tailwind CSS.
            </p>
          </div>
        </div>

        <a
          href="/#kontakt"
          className="mt-10 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
        >
          Anfrage senden
        </a>
      </div>
      <Footer />
    </main>
  );
}