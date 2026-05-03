import Header from "@/app/Header";
import Footer from "@/app/Footer";

export default function DankePage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.18),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.10),transparent_25%)]" />

        <section className="mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-3xl text-cyan-300">
            ✓
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.25em] text-cyan-300/70">
            Anfrage gesendet
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Danke für deine Nachricht
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Deine Anfrage wurde erfolgreich übermittelt. Ich melde mich so bald
            wie möglich bei dir zurück.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/"
              className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-cyan-200"
            >
              Zur Startseite
            </a>

            <a
              href="/leistungen"
              className="rounded-full border border-cyan-400/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              Leistungen ansehen
            </a>
          </div>

          <div className="mt-12 rounded-3xl border border-cyan-400/10 bg-white/5 p-6 text-left backdrop-blur">
            <p className="text-sm text-zinc-400">Direkter Kontakt</p>
            <p className="mt-2 text-lg font-semibold">dilgaskoc@outlook.de</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}