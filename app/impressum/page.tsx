import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Dilges Koc",
  description: "Impressum der Website von Dilges Koc.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
          Impressum
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">Impressum</h1>

        <div className="mt-10 space-y-8 text-zinc-300">
          <section>
            <h2 className="text-xl font-semibold text-white">Angaben gemäß § 5 TMG</h2>
            <p className="mt-3 leading-8">
              Dilges Koc
              <br />
              Peterstraße 5
              <br />
              52062 Aachen
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Kontakt</h2>
            <p className="mt-3 leading-8">
              E-Mail:{" "}
              <a
                href="mailto:dilgaskoc@outlook.de"
                className="text-cyan-300 hover:text-cyan-200"
              >
                dilgaskoc@outlook.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Verantwortlich für den Inhalt</h2>
            <p className="mt-3 leading-8">
              Dilges Koc
              <br />
              Peterstraße 5
              <br />
              52062 Aachen
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Hinweis</h2>
            <p className="mt-3 leading-8">
              
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}