import type { Metadata } from "next";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

export const metadata: Metadata = {
  title: "Individuelle Weblösungen",
  description:
    "Individuelle Weblösungen und maßgeschneiderte Frontend-Projekte für konkrete geschäftliche Anforderungen.",
};

export default function IndividuelleWebloesungenPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050816] px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
            Leistung
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Individuelle Weblösungen
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Nicht jedes Projekt passt in eine Standardvorlage. Ich unterstütze
            bei individuellen Webseiten, Weboberflächen und digitalen Lösungen,
            die auf konkrete Anforderungen zugeschnitten sind und technisch wie
            visuell professionell umgesetzt werden sollen.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Individuell geplant</h2>
              <p className="mt-3 text-zinc-400">
                Lösungen, die nicht nur gut aussehen, sondern wirklich zu deinem
                Vorhaben passen.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Flexibel aufgebaut</h2>
              <p className="mt-3 text-zinc-400">
                Geeignet für spezielle Anforderungen, besondere Layouts oder
                projektbezogene Funktionen.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Sauber umgesetzt</h2>
              <p className="mt-3 text-zinc-400">
                Klare Struktur, moderne Technik und eine professionelle
                Umsetzung.
              </p>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              Für wen individuelle Lösungen sinnvoll sind
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 p-6">
                <h3 className="text-xl font-semibold">Unternehmen</h3>
                <p className="mt-3 text-zinc-400">
                  Wenn Standard-Webseiten nicht ausreichen und ein passender
                  digitaler Auftritt mit eigener Struktur gebraucht wird.
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 p-6">
                <h3 className="text-xl font-semibold">Spezielle Projekte</h3>
                <p className="mt-3 text-zinc-400">
                  Für besondere Webseiten, Oberflächen oder Frontend-Projekte
                  mit konkreten Anforderungen.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              Mögliche Inhalte und Einsatzbereiche
            </h2>

            <div className="mt-8 rounded-[2rem] border border-cyan-400/10 bg-[#0b1224]/80 p-8">
              <ul className="space-y-3 text-zinc-300">
                <li>• individuelle Webseiten und Weboberflächen</li>
                <li>• angepasste Seitenstrukturen und Layouts</li>
                <li>• spezielle Frontend-Komponenten</li>
                <li>• businessnahe digitale Oberflächen</li>
                <li>• projektbezogene Lösungen mit moderner technischer Basis</li>
              </ul>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              Warum individuelle Lösungen wertvoll sind
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              Manche Projekte brauchen mehr als eine Standardseite. Individuelle
              Weblösungen helfen dabei, Anforderungen gezielt umzusetzen und
              einen digitalen Auftritt zu schaffen, der sich klar an deinem
              Vorhaben orientiert. So entsteht eine Lösung, die besser passt,
              professioneller wirkt und langfristig sinnvoll nutzbar ist.
            </p>
          </section>

          <div className="mt-16 rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-[#0b1224] via-[#0a1020] to-[#050816] p-8 shadow-2xl shadow-cyan-950/20">
            <h2 className="text-2xl font-semibold">
              Du brauchst eine individuelle Weblösung?
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-300">
              Wenn dein Projekt nicht in ein Standard-Template passt und du eine
              moderne, saubere und individuelle Lösung suchst, kannst du mir
              gerne eine Anfrage senden.
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