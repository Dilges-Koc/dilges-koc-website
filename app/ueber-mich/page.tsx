import type { Metadata } from "next";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Mehr über Dilges Koc, seinen Hintergrund in Informatik und seinen Fokus auf moderne Webentwicklung und Frontend-Lösungen.",
};

export default function UeberMichPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050816] text-white">
        <section className="relative overflow-hidden px-6 py-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.14),transparent_25%)]" />

          <div className="mx-auto max-w-6xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
              Über mich
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
              Informatik-Hintergrund mit Fokus auf moderne Webentwicklung
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              Ich bin Dilges Koc und habe mein Bachelorstudium in Informatik
              erfolgreich abgeschlossen. Aktuell baue ich mein eigenes
              Freelancer-Angebot im Bereich Webentwicklung auf und unterstütze
              Unternehmen, Selbstständige, Startups und kleine Teams bei
              modernen Webseiten und Frontend-Lösungen.
            </p>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">
                Mein Ansatz
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Mein Fokus liegt auf Webseiten und Weboberflächen, die modern,
                klar und professionell wirken. Mir ist wichtig, dass Design,
                Nutzerführung und technische Umsetzung zusammenpassen und am Ende
                ein Ergebnis entsteht, das nicht nur gut aussieht, sondern auch
                sinnvoll aufgebaut ist.
              </p>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Neben Webentwicklung bringe ich auch ein solides technisches
                Verständnis aus meinem Informatikstudium mit. Dazu gehört ein
                strukturierter Blick auf Systeme, saubere Umsetzung und ein
                professioneller Anspruch an Qualität und Verständlichkeit.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-8 backdrop-blur">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-zinc-500">Name</p>
                  <p className="mt-2 text-lg font-semibold">Dilges Koc</p>
                </div>

                <div>
                  <p className="text-sm text-zinc-500">Abschluss</p>
                  <p className="mt-2 text-lg font-semibold">
                    Bachelor in Informatik
                  </p>
                </div>

                <div>
                  <p className="text-sm text-zinc-500">Schwerpunkte</p>
                  <p className="mt-2 text-lg font-semibold">
                    Webentwicklung, Frontend, moderne Webseiten
                  </p>
                </div>

                <div>
                  <p className="text-sm text-zinc-500">Technologien</p>
                  <p className="mt-2 text-lg font-semibold">
                    React, Next.js, TypeScript, Tailwind CSS
                  </p>
                </div>

                <div>
                  <p className="text-sm text-zinc-500">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/dilges-koc-131054319/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-lg font-semibold text-cyan-300 transition hover:text-cyan-200"
                  >
                    Profil ansehen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
              Arbeitsweise
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              So arbeite ich
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 p-8">
                <h3 className="text-2xl font-semibold">Klar</h3>
                <p className="mt-4 leading-7 text-zinc-400">
                  Verständliche Struktur, saubere Kommunikation und klare
                  Ergebnisse statt unnötiger Komplexität.
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 p-8">
                <h3 className="text-2xl font-semibold">Modern</h3>
                <p className="mt-4 leading-7 text-zinc-400">
                  Zeitgemäße Weblösungen mit Fokus auf professionelles Design,
                  Nutzerfreundlichkeit und technische Basis.
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 p-8">
                <h3 className="text-2xl font-semibold">Strukturiert</h3>
                <p className="mt-4 leading-7 text-zinc-400">
                  Vom ersten Gespräch bis zur Umsetzung arbeite ich organisiert,
                  nachvollziehbar und lösungsorientiert.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-[#0b1224] via-[#0a1020] to-[#050816] p-8 shadow-2xl shadow-cyan-950/20 md:p-12">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
              Kontakt
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Lass uns dein Projekt besprechen
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Wenn du eine moderne Webseite, eine Landingpage oder Unterstützung
              im Frontend suchst, kannst du dich gerne bei mir melden.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/#kontakt"
                className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-cyan-200"
              >
                Anfrage senden
              </a>

              <a
                href="/leistungen"
                className="rounded-full border border-cyan-400/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                Leistungen ansehen
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}