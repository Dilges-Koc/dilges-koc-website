import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

export const metadata: Metadata = {
  title: "Projekte",
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
            <a
              href="/projekte/business-landingpage"
              className="group block overflow-hidden rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
            >
              <div className="p-5">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#08101f] shadow-2xl shadow-black/30">
                  <Image
                    src="/showcase/business-landingpage.png"
                    alt="Showcase Business Landingpage"
                    width={1200}
                    height={900}
                    className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
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
                <p className="mt-6 text-sm font-semibold text-cyan-300">
                  Details ansehen →
                </p>
              </div>
            </a>

            <a
              href="/projekte/frontend-dashboard"
              className="group block overflow-hidden rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
            >
              <div className="p-5">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#08101f] shadow-2xl shadow-black/30">
                  <Image
                    src="/showcase/frontend-dashboard.png"
                    alt="Showcase Frontend Dashboard"
                    width={1200}
                    height={900}
                    className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
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
                <p className="mt-6 text-sm font-semibold text-cyan-300">
                  Details ansehen →
                </p>
              </div>
            </a>

            <a
              href="/projekte/firmenwebseite"
              className="group block overflow-hidden rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
            >
              <div className="p-5">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#08101f] shadow-2xl shadow-black/30">
                  <Image
                    src="/showcase/firmenwebseite.png"
                    alt="Showcase Firmenwebseite"
                    width={1200}
                    height={900}
                    className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="px-8 pb-8">
                <p className="text-sm text-cyan-300/70">Showcase 03</p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Firmenwebseite
                </h2>
                <p className="mt-4 leading-7 text-zinc-400">
                  Moderne Firmenwebseite mit Service-Struktur,
                  Vertrauenselementen und professionellem Business-Auftritt.
                </p>
                <p className="mt-4 text-sm text-zinc-500">
                  Fokus: Branding, Struktur, Vertrauen, Nutzerführung
                </p>
                <p className="mt-6 text-sm font-semibold text-cyan-300">
                  Details ansehen →
                </p>
              </div>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}