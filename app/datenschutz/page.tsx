import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Website von Dilges Koc.",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
          Datenschutz
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-10 space-y-8 text-zinc-300">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Verantwortlicher</h2>
            <p className="mt-3 leading-8">
              Dilges Koc
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ Ort]
              <br />
              Deutschland
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
            <h2 className="text-xl font-semibold text-white">2. Allgemeine Hinweise</h2>
            <p className="mt-3 leading-8">
              Der Schutz personenbezogener Daten ist mir wichtig. Personenbezogene
              Daten werden auf dieser Website nur im erforderlichen Umfang
              verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Hosting über Vercel</h2>
            <p className="mt-3 leading-8">
              Diese Website wird über Vercel bereitgestellt. Beim Aufruf der
              Website können technisch erforderliche Daten wie IP-Adresse,
              Zeitpunkte des Zugriffs, Geräte- und Browserinformationen sowie
              Logdaten verarbeitet werden.
            </p>
            <p className="mt-3 leading-8">
              Weitere Informationen findest du in den Datenschutzinformationen von
              Vercel.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. Kontaktformular über Formspree</h2>
            <p className="mt-3 leading-8">
              Für das Kontaktformular wird Formspree verwendet. Wenn du über das
              Formular eine Anfrage sendest, werden die von dir eingegebenen Daten
              an Formspree übermittelt und zur Bearbeitung der Anfrage verarbeitet.
            </p>
            <p className="mt-3 leading-8">
              Dazu gehören insbesondere Name, E-Mail-Adresse, Unternehmen,
              ausgewählte Leistung und Nachricht.
            </p>
            <p className="mt-3 leading-8">
              Weitere Informationen findest du in den Datenschutzhinweisen von
              Formspree.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Cookies und ähnliche Technologien</h2>
            <p className="mt-3 leading-8">
              Diese Website verwendet derzeit keine Marketing- oder Analyse-Cookies.
              Es können technisch notwendige Funktionen genutzt werden, die für
              den Betrieb und die Darstellung der Website erforderlich sind.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Deine Rechte</h2>
            <p className="mt-3 leading-8">
              Du hast im Rahmen der gesetzlichen Vorschriften insbesondere das
              Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung sowie auf Widerspruch.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Hinweis</h2>
            <p className="mt-3 leading-8">
              Bitte ergänze vor der dauerhaften Nutzung dieser Website noch deine
              vollständige ladungsfähige Anschrift.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}