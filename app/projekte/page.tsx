import type { Metadata } from "next";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

export const metadata: Metadata = {
  title: "Projekte | Dilges Koc",
  description:
    "Showcase-Projekte und Beispielarbeiten von Dilges Koc im Bereich Webentwicklung, Frontend und moderne Webseiten.",
};

export default function ProjektePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050816] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
            Projekte
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
            Showcase-Projekte und Beispielarbeiten
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Diese Projekte zeigen beispielhaft, wie moderne Webseiten,
            Benutzeroberflächen und digitale Auftritte gestaltet und umgesetzt
            werden können.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="overflow-hidden rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 transition hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]">
              <div className="p-5">
                <div className="rounded-2xl border border-white/10 bg-[#08101f] p-4 shadow-2xl shadow-black/30">
                  <div className="mb-4 flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400/70" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <div className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>

                  <div className="rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/10 p-6">
                    <div className="h-4 w-20 rounded bg-cyan-200/60" />
                    <div className="mt-6 h-10 w-4/5 rounded bg-white/90" />
                    <div className="mt-3 h-4 w-full rounded bg-white/20" />
                    <div className="mt-2 h-4 w-5/6 rounded bg-white/20" />
                    <div className="mt-8 h-10 w-32 rounded-full bg-cyan-300" />
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8">
                <p className="text-sm text-cyan-300/70">Showcase 01</p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Business Landingpage
                </h2>
                <p className="mt-4 leading-7 text-zinc-400">
                  Moderne Landingpage für ein Unternehmen mit Hero-Bereich,
                  klaren Leistungen und professioneller Außenwirkung.
                </p>
                <p className="mt-4 text-sm text-zinc-500">
                  Fokus: Design, Struktur, Conversion, Responsiveness
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 transition hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]">
              <div className="p-5">
                <div className="rounded-2xl border border-white/10 bg-[#08101f] p-4 shadow-2xl shadow-black/30">
                  <div className="mb-4 flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400/70" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <div className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>

                  <div className="grid grid-cols-[80px_1fr] gap-4">
                    <div className="rounded-xl bg-white/5 p-3">
                      <div className="h-4 w-full rounded bg-cyan-300/40" />
                      <div className="mt-3 h-4 w-3/4 rounded bg-white/10" />
                      <div className="mt-2 h-4 w-2/3 rounded bg-white/10" />
                      <div className="mt-2 h-4 w-4/5 rounded bg-white/10" />
                    </div>

                    <div className="rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-400/10 p-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-20 rounded-xl bg-white/10" />
                        <div className="h-20 rounded-xl bg-white/10" />
                        <div className="col-span-2 h-28 rounded-xl bg-cyan-300/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8">
                <p className="text-sm text-cyan-300/70">Showcase 02</p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Frontend Dashboard
                </h2>
                <p className="mt-4 leading-7 text-zinc-400">
                  Dashboard-Konzept mit moderner Oberfläche, Navigation,
                  Kennzahlen und strukturierter Benutzerführung.
                </p>
                <p className="mt-4 text-sm text-zinc-500">
                  Fokus: UI, Klarheit, moderne Komponenten
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 transition hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]">
              <div className="p-5">
                <div className="rounded-2xl border border-white/10 bg-[#08101f] p-4 shadow-2xl shadow-black/30">
                  <div className="mb-4 flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400/70" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <div className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>

                  <div className="rounded-xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-black p-6">
                    <div className="h-4 w-24 rounded bg-cyan-300/40" />
                    <div className="mt-6 h-12 w-3/4 rounded bg-white/90" />
                    <div className="mt-3 h-4 w-full rounded bg-white/20" />
                    <div className="mt-2 h-4 w-4/5 rounded bg-white/20" />
                    <div className="mt-8 grid grid-cols-3 gap-3">
                      <div className="h-16 rounded-xl bg-white/10" />
                      <div className="h-16 rounded-xl bg-white/10" />
                      <div className="h-16 rounded-xl bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8">
                <p className="text-sm text-cyan-300/70">Showcase 03</p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Portfolio / Freelancer Website
                </h2>
                <p className="mt-4 leading-7 text-zinc-400">
                  Moderne persönliche Website mit Leistungen, Kontaktformular,
                  Unterseiten und professionellem Auftritt.
                </p>
                <p className="mt-4 text-sm text-zinc-500">
                  Fokus: Branding, Vertrauen, Nutzerführung
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}