import type { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dilges Koc | Webentwicklung & Frontend",
  description:
    "Dilges Koc entwickelt moderne Webseiten, Landingpages und Frontend-Lösungen für Unternehmen, Selbstständige und Startups.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.18),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.10),transparent_25%)]" />

      <Header />
     
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <div className="inline-flex w-fit items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200">
          Freelancer für Webentwicklung
        </div>

        <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-[1.05] md:text-7xl">
           Ich entwickle{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-zinc-100 bg-clip-text text-transparent">
          moderne Webseiten
        </span>{" "}
          für Unternehmen, Selbstständige und digitale Projekte.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
          Von Landingpages über Firmenwebseiten bis zu modernen Frontend-Lösungen:
          Ich unterstütze bei professionellen Webauftritten mit klarem Design,
          sauberer technischer Umsetzung und starker Nutzerführung.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#kontakt"
            className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-cyan-200"
          >
            Projekt anfragen
          </a>

          <a
            href="#projekte"
            className="rounded-full border border-cyan-400/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
          >
            Projekte ansehen
          </a>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-zinc-400">Fokus</p>
            <p className="mt-2 text-xl font-semibold">Moderne Webseiten</p>
          </div>

          <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-zinc-400">Schwerpunkt</p>
            <p className="mt-2 text-xl font-semibold">Frontend & UI</p>
          </div>

          <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-zinc-400">Anspruch</p>
            <p className="mt-2 text-xl font-semibold">Sauber & professionell</p>
          </div>
        </div>
      </section>

      <section id="leistungen" className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
            Leistungen
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Wobei ich dich unterstützen kann
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Ich entwickle moderne und übersichtliche Weblösungen, die nicht nur
            gut aussehen, sondern auch schnell, verständlich und professionell
            wirken.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  <a
    href="/leistungen/landingpages"
    className="block rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 p-8 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
  >
    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-300/30 to-blue-400/20" />
    <h3 className="mt-6 text-2xl font-semibold">Landingpages</h3>
    <p className="mt-4 leading-7 text-zinc-400">
      Moderne Seiten für Dienstleistungen, Produkte und Unternehmen mit
      klarem Aufbau und starkem ersten Eindruck.
    </p>
  </a>

  <a
    href="/leistungen/firmenwebseiten"
    className="block rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 p-8 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
  >
    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-300/30 to-blue-400/20" />
    <h3 className="mt-6 text-2xl font-semibold">Firmenwebseiten</h3>
    <p className="mt-4 leading-7 text-zinc-400">
      Professionelle Webseiten für Selbstständige, lokale Firmen, Startups
      und kleinere Unternehmen.
    </p>
  </a>

  <a
    href="/leistungen/frontend-entwicklung"
    className="block rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 p-8 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
  >
    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-300/30 to-blue-400/20" />
    <h3 className="mt-6 text-2xl font-semibold">Frontend-Entwicklung</h3>
    <p className="mt-4 leading-7 text-zinc-400">
      Saubere, responsive und moderne Benutzeroberflächen mit Fokus auf
      Nutzerfreundlichkeit und gutes Design.
    </p>
  </a>

  <a
    href="/leistungen/individuelle-webloesungen"
    className="block rounded-3xl border border-cyan-400/10 bg-[#0b1224]/80 p-8 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
  >
    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-300/30 to-blue-400/20" />
    <h3 className="mt-6 text-2xl font-semibold">Individuelle Lösungen</h3>
    <p className="mt-4 leading-7 text-zinc-400">
      Maßgeschneiderte Webseiten und Weboberflächen für konkrete
      geschäftliche Anforderungen.
    </p>
  </a>
  
</div>
      </section>

<section className="mx-auto max-w-6xl px-6 pb-24">
  <div className="rounded-[2rem] border border-cyan-400/10 bg-[#0b1224]/70 p-8 md:p-12">
    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
      Vorteile
    </p>

    <h2 className="mt-4 text-3xl font-bold md:text-5xl">
      Worauf ich bei Webprojekten Wert lege
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold">Klarer Auftritt</h3>
        <p className="mt-3 leading-7 text-zinc-400">
          Webseiten und Oberflächen sollen modern, verständlich und professionell
          wirken.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold">Saubere Umsetzung</h3>
        <p className="mt-3 leading-7 text-zinc-400">
          Strukturierter Aufbau, responsive Darstellung und eine solide technische
          Basis.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold">Fokus auf Nutzen</h3>
        <p className="mt-3 leading-7 text-zinc-400">
          Nicht nur schönes Design, sondern Weblösungen, die dein Angebot besser
          präsentieren und Anfragen erleichtern.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="mx-auto max-w-6xl px-6 py-24">
  <div className="max-w-2xl">
    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
      Einstiegspakete
    </p>

    <h2 className="mt-4 text-3xl font-bold md:text-5xl">
      Mögliche Projektstarts
    </h2>

    <p className="mt-4 text-lg text-zinc-400">
      Je nach Umfang und Ziel kann ein Projekt klein starten und später weiter
      ausgebaut werden. Hier sind beispielhafte Einstiegspunkte.
    </p>
  </div>

  <div className="mt-12 grid gap-6 lg:grid-cols-3">
    <div className="rounded-[2rem] border border-cyan-400/10 bg-[#0b1224]/80 p-8">
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/70">
        Starter
      </p>
      <h3 className="mt-4 text-2xl font-semibold">Landingpage</h3>
      <p className="mt-2 text-3xl font-bold text-white">ab 300 €</p>
      <p className="mt-4 leading-7 text-zinc-400">
        Für kleinere, klare Einstiegsprojekte mit modernem Aufbau und
        professioneller Darstellung.
      </p>

      <ul className="mt-6 space-y-3 text-zinc-300">
        <li>• moderne Einzelseite</li>
        <li>• responsives Design</li>
        <li>• klarer Hero-Bereich</li>
        <li>• Kontaktmöglichkeit</li>
      </ul>

      <a
        href="/kontakt"
        className="mt-8 inline-flex rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
      >
        Anfrage senden
      </a>
    </div>

    <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-[#0b1224] via-[#0a1020] to-[#050816] p-8 shadow-2xl shadow-cyan-950/20">
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/70">
        Business
      </p>
      <h3 className="mt-4 text-2xl font-semibold">Firmenwebseite</h3>
      <p className="mt-2 text-3xl font-bold text-white">ab 500 €</p>
      <p className="mt-4 leading-7 text-zinc-400">
        Für Unternehmen, Selbstständige und lokale Anbieter mit professionellem
        und vertrauenswürdigem Webauftritt.
      </p>

      <ul className="mt-6 space-y-3 text-zinc-300">
        <li>• moderne Unternehmensdarstellung</li>
        <li>• strukturierte Inhalte</li>
        <li>• mobile Optimierung</li>
        <li>• professioneller Kontaktbereich</li>
      </ul>

      <a
        href="/kontakt"
        className="mt-8 inline-flex rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
      >
        Projekt besprechen
      </a>
    </div>

    <div className="rounded-[2rem] border border-cyan-400/10 bg-[#0b1224]/80 p-8">
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/70">
        Flexibel
      </p>
      <h3 className="mt-4 text-2xl font-semibold">Frontend-Unterstützung</h3>
      <p className="mt-2 text-3xl font-bold text-white">auf Anfrage</p>
      <p className="mt-4 leading-7 text-zinc-400">
        Für individuelle Frontend-Arbeiten, moderne Oberflächen und projektnahe
        Webentwicklung.
      </p>

      <ul className="mt-6 space-y-3 text-zinc-300">
        <li>• UI-Komponenten</li>
        <li>• responsive Oberflächen</li>
        <li>• moderne Web-Layouts</li>
        <li>• individuelle Anforderungen</li>
      </ul>

      <a
        href="/kontakt"
        className="mt-8 inline-flex rounded-full border border-cyan-400/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
      >
        Anfrage senden
      </a>
    </div>
  </div>

  <p className="mt-6 text-sm text-zinc-500">
    Die Preise dienen als grobe Einstiegspunkte. Der genaue Umfang und Preis
    hängen vom jeweiligen Projekt ab.
  </p>
</section>

     <section id="projekte" className="mx-auto max-w-6xl px-6 py-24">
  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div className="max-w-2xl">
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
        Showcase-Projekte
      </p>
      <h2 className="mt-4 text-3xl font-bold md:text-5xl">
        Ausgewählte Beispielprojekte
      </h2>
    </div>

    <p className="max-w-xl text-zinc-400">
      Diese Projekte zeigen beispielhaft, wie moderne Webseiten, Oberflächen
      und digitale Auftritte gestaltet und umgesetzt werden können.
    </p>
  </div>

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
        <h3 className="mt-2 text-2xl font-semibold">Business Landingpage</h3>
        <p className="mt-4 leading-7 text-zinc-400">
          Moderne Landingpage für ein Unternehmen mit starkem Hero-Bereich,
          klaren Leistungen, Kontaktsektion und professioneller Außenwirkung.
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
        <h3 className="mt-2 text-2xl font-semibold">Frontend Dashboard</h3>
        <p className="mt-4 leading-7 text-zinc-400">
          Dashboard-Konzept mit moderner Oberfläche, Navigation, KPI-Karten,
          Diagrammen und strukturierter Benutzerführung.
        </p>
        <p className="mt-4 text-sm text-zinc-500">
          Fokus: UI, Klarheit, moderne Komponenten, Übersichtlichkeit
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
        <h3 className="mt-2 text-2xl font-semibold">Firmenwebseite</h3>
        <p className="mt-4 leading-7 text-zinc-400">
          Moderne Firmenwebseite mit professionellem Hero-Bereich,
          Service-Struktur, Vertrauenselementen und starkem Business-Auftritt.
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
</section>

      <section
        id="ueber-mich"
        className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1.2fr_0.8fr]"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
            Über mich
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Informatik-Hintergrund mit technischem Blick
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Ich habe mein Bachelorstudium in Informatik erfolgreich abgeschlossen
            und baue aktuell mein eigenes Freelancer-Angebot im Bereich
            Webentwicklung auf. Mein Fokus liegt auf modernen, performanten und
            professionellen Webseiten mit klarem Design und sauberer technischer
            Umsetzung.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Neben moderner Webentwicklung bringe ich auch technisches Verständnis
            für strukturierte Systeme, saubere Architektur und zuverlässige
            Umsetzung mit. Mein Ziel ist es, hochwertige digitale Lösungen zu
            entwickeln, die professionell wirken und echten Nutzen schaffen.
          </p>
        </div>

        <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-8 backdrop-blur">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-zinc-500">Name</p>
              <p className="mt-2 text-lg font-semibold">Dilges Koc</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Schwerpunkte</p>
              <p className="mt-2 text-lg font-semibold">
                Frontend, Webdesign, moderne Webseiten
              </p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Technologien</p>
              <p className="mt-2 text-lg font-semibold">
                React, Next.js, TypeScript, Tailwind
              </p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Zielkunden</p>
              <p className="mt-2 text-lg font-semibold">
                Unternehmen, Selbstständige, Startups und Teams
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-24">
  <div className="rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-[#0b1224] via-[#0a1020] to-[#050816] p-8 shadow-2xl shadow-cyan-950/20 md:p-12">
    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
      Kontakt
    </p>
    <h2 className="mt-4 text-3xl font-bold md:text-5xl">
      Lass uns gemeinsam dein Projekt umsetzen
    </h2>
    <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
      Du suchst Unterstützung für eine moderne Webseite, eine Landingpage
      oder ein Frontend-Projekt? Dann sende mir einfach eine Anfrage.
    </p>

    <ContactForm />
  </div>
</section>
<section className="mx-auto max-w-6xl px-6 pb-24">
  <div className="rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-[#0b1224] via-[#0a1020] to-[#050816] p-8 shadow-2xl shadow-cyan-950/20 md:p-12">
    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
      Projektstart
    </p>

    <h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
      Du brauchst eine moderne Website oder Unterstützung im Frontend?
    </h2>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
      Wenn du dein Unternehmen, dein Angebot oder ein digitales Projekt
      professionell im Web präsentieren willst, kannst du mir gerne eine
      Anfrage senden.
    </p>

    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
      <a
        href="/kontakt"
        className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
      >
        Jetzt Kontakt aufnehmen
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
      <Footer />

    </main>
  );
}