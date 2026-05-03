import type { Metadata } from "next";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

export const metadata: Metadata = {
  title: "Frontend-Entwicklung",
  description:
    "Moderne Frontend-Entwicklung mit React, Next.js, TypeScript und Fokus auf Nutzerfreundlichkeit und Design.",
};

export default function FrontendEntwicklungPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050816] px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
            Leistung
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Frontend-Entwicklung
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Ich entwickle moderne Benutzeroberflächen für Webseiten und
            Webanwendungen mit Fokus auf Klarheit, Performance,
            Nutzerfreundlichkeit und professionelles Design. Ziel ist ein
            Frontend, das nicht nur gut aussieht, sondern sich auch sauber und
            verständlich anfühlt.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Moderne UI</h2>
              <p className="mt-3 text-zinc-400">
                Klare und zeitgemäße Oberflächen für moderne Webprojekte.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Responsiv</h2>
              <p className="mt-3 text-zinc-400">
                Gute Darstellung und Bedienbarkeit auf allen wichtigen
                Bildschirmgrößen.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Sauber umgesetzt</h2>
              <p className="mt-3 text-zinc-400">
                Strukturierter Aufbau für verständliche und wartbare Frontends.
              </p>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              Für wen Frontend-Entwicklung geeignet ist
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 p-6">
                <h3 className="text-xl font-semibold">Unternehmen</h3>
                <p className="mt-3 text-zinc-400">
                  Für Firmen, die moderne Oberflächen für Webseiten, interne
                  Tools oder digitale Anwendungen brauchen.
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 p-6">
                <h3 className="text-xl font-semibold">Startups & Teams</h3>
                <p className="mt-3 text-zinc-400">
                  Für Projekte, bei denen klare Nutzerführung, modernes Design
                  und saubere Umsetzung wichtig sind.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              Typische Inhalte eines Frontend-Projekts
            </h2>

            <div className="mt-8 rounded-[2rem] border border-cyan-400/10 bg-[#0b1224]/80 p-8">
              <ul className="space-y-3 text-zinc-300">
                <li>• moderne Seiten- und Komponentenstruktur</li>
                <li>• responsive Benutzeroberflächen</li>
                <li>• klare Navigation und Nutzerführung</li>
                <li>• saubere visuelle Hierarchie</li>
                <li>• moderne technische Basis mit React / Next.js</li>
              </ul>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              Technologien und Fokus
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              Ich arbeite im Frontend mit modernen Technologien wie React,
              Next.js, TypeScript und Tailwind CSS. Dabei liegt mein Fokus auf
              klaren Layouts, guter Nutzererfahrung, sauberer Struktur und einem
              professionellen Gesamtbild.
            </p>
          </section>

          <div className="mt-16 rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-[#0b1224] via-[#0a1020] to-[#050816] p-8 shadow-2xl shadow-cyan-950/20">
            <h2 className="text-2xl font-semibold">
              Du brauchst Unterstützung im Frontend?
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-300">
              Wenn du eine moderne Benutzeroberfläche oder Unterstützung bei
              einem Frontend-Projekt brauchst, kannst du mir gerne eine Anfrage
              senden.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/#kontakt"
                className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
              >
                Anfrage senden
              </a>

              <a
                href="/leistungen"
                className="rounded-full border border-cyan-400/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                Zur Leistungsübersicht
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}