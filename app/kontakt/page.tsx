import type { Metadata } from "next";
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import ContactForm from "@/app/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktseite von Dilges Koc für Anfragen zu Webseiten, Landingpages und Frontend-Projekten.",
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050816] text-white">
        <section className="relative overflow-hidden px-6 py-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.14),transparent_25%)]" />

          <div className="mx-auto max-w-6xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
              Kontakt
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
              Lass uns über dein Projekt sprechen
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              Du suchst Unterstützung für eine moderne Webseite, Landingpage,
              Firmenwebseite oder ein Frontend-Projekt? Dann sende mir einfach
              eine Anfrage und wir schauen gemeinsam, was am besten zu deinem
              Vorhaben passt.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-[#0b1224] via-[#0a1020] to-[#050816] p-8 shadow-2xl shadow-cyan-950/20 md:p-10">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
                Anfrageformular
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Anfrage senden
              </h2>
              <p className="mt-4 max-w-2xl text-zinc-300">
                Nutze das Formular für deine Projektanfrage. Ich melde mich so
                bald wie möglich bei dir zurück.
              </p>

              <ContactForm />
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-8 backdrop-blur">
                <p className="text-sm text-zinc-500">E-Mail</p>
                <a
                  href="mailto:dilgaskoc@outlook.de"
                  className="mt-2 inline-block text-xl font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  dilgaskoc@outlook.de
                </a>
              </div>

              <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-8 backdrop-blur">
                <p className="text-sm text-zinc-500">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/dilges-koc-131054319/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-xl font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  Profil ansehen
                </a>
              </div>

              <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-8 backdrop-blur">
                <p className="text-sm text-zinc-500">Typische Anfragen</p>
                <ul className="mt-4 space-y-3 text-zinc-300">
                  <li>• Landingpages</li>
                  <li>• Firmenwebseiten</li>
                  <li>• Frontend-Entwicklung</li>
                  <li>• Individuelle Weblösungen</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 p-8">
                <p className="text-sm text-zinc-500">Hinweis</p>
                <p className="mt-4 leading-7 text-zinc-300">
                  Beschreibe in deiner Nachricht am besten kurz dein Vorhaben,
                  welche Art von Website oder Lösung du brauchst und was dir
                  besonders wichtig ist.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}