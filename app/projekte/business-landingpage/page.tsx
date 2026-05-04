import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

export const metadata: Metadata = {
  title: "Business Landingpage",
  description:
    "Showcase-Projekt einer modernen Business Landingpage mit klarem Design und professioneller Struktur.",
};

export default function BusinessLandingpagePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#050816] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
            Showcase-Projekt
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
            Business Landingpage
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Dieses Showcase-Projekt zeigt eine moderne Business Landingpage mit
            starkem Hero-Bereich, klaren Leistungen, vertrauensbildenden
            Sektionen und professioneller visueller Hierarchie.
          </p>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-[#0b1224]/80 shadow-2xl shadow-black/30">
            <Image
              src="/showcase/business-landingpage.png"
              alt="Business Landingpage Showcase"
              width={1448}
              height={1086}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Ziel</h2>
              <p className="mt-3 text-zinc-400">
                Ein moderner und überzeugender erster Eindruck für ein
                Unternehmen oder Angebot.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Fokus</h2>
              <p className="mt-3 text-zinc-400">
                Klare Struktur, visuelle Wirkung, starke Nutzerführung und
                professionelle Außenwirkung.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Geeignet für</h2>
              <p className="mt-3 text-zinc-400">
                Unternehmen, Dienstleister, Startups und digitale Angebote.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-[#0b1224] via-[#0a1020] to-[#050816] p-8">
            <h2 className="text-2xl font-semibold">
              Du brauchst eine ähnliche Landingpage?
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-300">
              Ich unterstütze bei modernen Landingpages mit professionellem
              Design, klarer Struktur und sauberer Umsetzung.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/kontakt"
                className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
              >
                Projekt anfragen
              </a>
              <a
                href="/projekte"
                className="rounded-full border border-cyan-400/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                Zur Projektübersicht
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}