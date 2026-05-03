import type { Metadata } from "next";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

export const metadata: Metadata = {
  title: "Landingpages",
  description:
    "Moderne Landingpages für Produkte, Dienstleistungen und Unternehmen mit professionellem Design und klarer Struktur.",
};

export default function LandingpagesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050816] px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
            Leistung
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">Landingpages</h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Ich entwickle moderne Landingpages für Unternehmen, Produkte,
            Dienstleistungen und digitale Angebote. Der Fokus liegt auf klarer
            Struktur, starkem Design und einer professionellen Außenwirkung.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Klarer Aufbau</h2>
              <p className="mt-3 text-zinc-400">
                Besucher verstehen schnell, worum es geht und was angeboten
                wird.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Moderner Look</h2>
              <p className="mt-3 text-zinc-400">
                Zeitgemäßes Design mit professionellem ersten Eindruck.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Saubere Umsetzung</h2>
              <p className="mt-3 text-zinc-400">
                Responsiv, modern und technisch solide für Desktop und Mobile.
              </p>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              Für wen Landingpages geeignet sind
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 p-6">
                <h3 className="text-xl font-semibold">Unternehmen</h3>
                <p className="mt-3 text-zinc-400">
                  Für Dienstleistungen, Produkte, Kampagnen oder einzelne
                  Angebote mit klarem Fokus.
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 p-6">
                <h3 className="text-xl font-semibold">Selbstständige</h3>
                <p className="mt-3 text-zinc-400">
                  Für Coaches, Berater, lokale Anbieter oder digitale
                  Dienstleistungen mit professionellem Auftritt.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              Typische Inhalte einer Landingpage
            </h2>

            <div className="mt-8 rounded-[2rem] border border-cyan-400/10 bg-[#0b1224]/80 p-8">
              <ul className="space-y-3 text-zinc-300">
                <li>• starker Hero-Bereich mit klarer Botschaft</li>
                <li>• Leistungs- oder Produktübersicht</li>
                <li>• Vorteile und Nutzenargumente</li>
                <li>• Kontakt- oder Anfragebereich</li>
                <li>• moderne mobile Darstellung</li>
              </ul>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              Warum eine gute Landingpage wichtig ist
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              Eine Landingpage ist oft der erste Kontaktpunkt mit potenziellen
              Kunden. Deshalb sollte sie nicht nur gut aussehen, sondern klar,
              professionell und überzeugend aufgebaut sein. Gute Struktur,
              sauberes Design und ein klarer Fokus helfen dabei, Vertrauen
              aufzubauen und Anfragen zu fördern.
            </p>
          </section>

          <div className="mt-16 rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-[#0b1224] via-[#0a1020] to-[#050816] p-8 shadow-2xl shadow-cyan-950/20">
            <h2 className="text-2xl font-semibold">
              Du brauchst eine moderne Landingpage?
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-300">
              Wenn du eine moderne und professionelle Landingpage für dein
              Angebot oder dein Unternehmen brauchst, kannst du mir gerne eine
              Anfrage senden.
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