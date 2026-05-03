import type { Metadata } from "next";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

export const metadata: Metadata = {
  title: "Firmenwebseiten",
  description:
    "Professionelle Firmenwebseiten für Selbstständige, lokale Unternehmen und Startups.",
};

export default function FirmenwebseitenPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050816] px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
            Leistung
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Firmenwebseiten
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Ich entwickle professionelle Firmenwebseiten für Selbstständige,
            lokale Unternehmen, Dienstleister und Startups. Ziel ist ein
            moderner, seriöser und vertrauenswürdiger Online-Auftritt, der dein
            Unternehmen klar präsentiert.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Professioneller Auftritt</h2>
              <p className="mt-3 text-zinc-400">
                Eine Website, die dein Unternehmen modern und hochwertig
                präsentiert.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Vertrauen</h2>
              <p className="mt-3 text-zinc-400">
                Klar strukturierte Inhalte und sauberes Design schaffen
                Glaubwürdigkeit.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Responsiv</h2>
              <p className="mt-3 text-zinc-400">
                Optimiert für Desktop, Tablet und Smartphone.
              </p>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              Für wen Firmenwebseiten sinnvoll sind
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 p-6">
                <h3 className="text-xl font-semibold">Selbstständige</h3>
                <p className="mt-3 text-zinc-400">
                  Für Einzelunternehmer, Freelancer, Berater oder lokale
                  Dienstleister mit klarer Außendarstellung.
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 p-6">
                <h3 className="text-xl font-semibold">Unternehmen</h3>
                <p className="mt-3 text-zinc-400">
                  Für kleinere Firmen und Startups, die seriös auftreten und
                  online sichtbar sein wollen.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              Typische Inhalte einer Firmenwebseite
            </h2>

            <div className="mt-8 rounded-[2rem] border border-cyan-400/10 bg-[#0b1224]/80 p-8">
              <ul className="space-y-3 text-zinc-300">
                <li>• Startseite mit klarer Botschaft</li>
                <li>• Leistungs- oder Angebotsübersicht</li>
                <li>• Über-uns oder Über-mich-Bereich</li>
                <li>• Kontaktmöglichkeit oder Anfrageformular</li>
                <li>• seriöse und moderne mobile Darstellung</li>
              </ul>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              Warum eine gute Firmenwebseite wichtig ist
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              Die Website ist für viele potenzielle Kunden der erste Eindruck
              eines Unternehmens. Deshalb sollte sie klar, modern und
              vertrauenswürdig aufgebaut sein. Eine professionelle Firmenwebseite
              hilft dabei, Angebote verständlich zu präsentieren, Vertrauen
              aufzubauen und Kontaktanfragen zu erleichtern.
            </p>
          </section>

          <div className="mt-16 rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-[#0b1224] via-[#0a1020] to-[#050816] p-8 shadow-2xl shadow-cyan-950/20">
            <h2 className="text-2xl font-semibold">
              Du brauchst eine professionelle Firmenwebseite?
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-300">
              Wenn du dein Unternehmen modern und professionell online
              präsentieren möchtest, kannst du mir gerne eine Anfrage senden.
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