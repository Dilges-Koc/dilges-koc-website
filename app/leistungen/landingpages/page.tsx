import type { Metadata } from "next";
import Header from "../../Header";
import Footer from "../../Footer";

export const metadata: Metadata = {
  title: "Landingpages | Dilges Koc",
  description:
    "Moderne Landingpages für Produkte, Dienstleistungen und Unternehmen mit professionellem Design und klarer Struktur.",
};

export default function LandingpagesPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-24 text-white">
      <Header />
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
          Leistung
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">Landingpages</h1>

        <p className="mt-6 text-lg leading-8 text-zinc-300">
          Ich entwickle moderne Landingpages für Unternehmen, Dienstleistungen,
          Produkte und digitale Angebote. Der Fokus liegt auf klarer Struktur,
          starkem Design und einer professionellen Außenwirkung.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Klarer Aufbau</h2>
            <p className="mt-3 text-zinc-400">
              Strukturierte Inhalte, damit Besucher schnell verstehen, worum es geht.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Moderner Look</h2>
            <p className="mt-3 text-zinc-400">
              Zeitgemäßes, professionelles Design mit klarem ersten Eindruck.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Saubere Umsetzung</h2>
            <p className="mt-3 text-zinc-400">
              Technisch solide und responsive umgesetzt für Desktop und Mobile.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-cyan-400/10 bg-[#0b1224]/80 p-8">
          <h2 className="text-2xl font-semibold">Typische Einsatzbereiche</h2>
          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>• Produktseiten</li>
            <li>• Dienstleistungsseiten</li>
            <li>• Kampagnen- und Angebotsseiten</li>
            <li>• Seiten für Selbstständige und kleine Unternehmen</li>
          </ul>

          <a
            href="/#kontakt"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
          >
            Anfrage senden
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}