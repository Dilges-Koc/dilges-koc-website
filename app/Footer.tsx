export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Dilges Koc. Alle Rechte vorbehalten.</p>

        <div className="flex flex-wrap items-center gap-4">
          <a href="/impressum" className="transition hover:text-cyan-300">
            Impressum
          </a>
          <a href="/datenschutz" className="transition hover:text-cyan-300">
            Datenschutz
          </a>
          <a
            href="https://www.linkedin.com/in/dilges-koc-131054319/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}