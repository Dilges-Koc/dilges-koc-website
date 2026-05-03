"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="text-sm font-semibold tracking-[0.3em] text-white"
        >
          DILGES KOC
        </a>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <a href="/leistungen" className="transition hover:text-cyan-300">
            Leistungen
          </a>
          <a href="/projekte" className="transition hover:text-cyan-300">
            Projekte
          </a>
          <a href="/ueber-mich" className="transition hover:text-cyan-300">
            Über mich
          </a>
          <a href="/#kontakt" className="transition hover:text-cyan-300">
            Kontakt
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan-300/30 hover:bg-white/10 md:hidden"
        >
          <span className="relative block h-5 w-5">
            <span
              className={`absolute left-0 top-1 h-0.5 w-5 rounded bg-white transition ${
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 h-0.5 w-5 rounded bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 rounded bg-white transition ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#050816]/95 transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-4 text-sm text-zinc-300">
          <a
            href="/leistungen"
            className="transition hover:text-cyan-300"
            onClick={() => setMenuOpen(false)}
          >
            Leistungen
          </a>
          <a
            href="/#projekte"
            className="transition hover:text-cyan-300"
            onClick={() => setMenuOpen(false)}
          >
            Projekte
          </a>
          <a
            href="/#ueber-mich"
            className="transition hover:text-cyan-300"
            onClick={() => setMenuOpen(false)}
          >
            Über mich
          </a>
          <a
            href="/#kontakt"
            className="transition hover:text-cyan-300"
            onClick={() => setMenuOpen(false)}
          >
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}