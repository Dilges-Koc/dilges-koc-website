import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Dilges Koc",
  description: "Datenschutzerklärung der Website von Dilges Koc.",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
          Datenschutz
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">Datenschutzerklärung</h1>

        <div className="mt-10 space-y-8 text-zinc-300">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Allgemeine Hinweise</h2>
            <p className="mt-3 leading-8">
              Der Schutz deiner persönlichen Daten ist mir wichtig. Diese Website
              verarbeitet personenbezogene Daten nur im technisch notwendigen
              Umfang.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. Verantwortlicher</h2>
            <p className="mt-3 leading-8">
              Dilges Koc
              <br />
              Peterstraß 5
              <br />
              52062 Aachen
              <br />
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
            <h2 className="text-xl font-semibold text-white">3. Server-Logfiles</h2>
            <p className="mt-3 leading-8">
              Beim Besuch dieser Website können durch den Hosting-Anbieter
              technisch erforderliche Daten verarbeitet werden, etwa IP-Adresse,
              Zeitpunkt des Zugriffs, Browsertyp oder Betriebssystem.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. Kontaktaufnahme</h2>
            <p className="mt-3 leading-8">
              Wenn du mich per E-Mail kontaktierst, werden deine Angaben zur
              Bearbeitung deiner Anfrage gespeichert und verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Deine Rechte</h2>
            <p className="mt-3 leading-8">
              Du hast das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung sowie auf Widerspruch im Rahmen der
              gesetzlichen Vorschriften.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Hinweis</h2>
            <p className="mt-3 leading-8">
              Bitte ergänze diese Datenschutzerklärung später passend zu deinem
              tatsächlichen Hosting, deinen eingesetzten Diensten und deiner
              finalen Website-Konfiguration.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}