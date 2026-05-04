"use client";

import { useEffect, useState } from "react";

export default function PrivacyNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("privacy-notice-accepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("privacy-notice-accepted", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100]">
      <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/10 bg-[#08101f]/95 p-5 text-white shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
              Datenschutz-Hinweis
            </p>
            <p className="mt-2 text-sm leading-7 text-zinc-300">
              Diese Website nutzt aktuell keine Marketing- oder Analyse-Cookies.
              Es werden technisch notwendige Funktionen verwendet sowie ein
              Kontaktformular über Formspree und Hosting über Vercel. Mehr dazu
              in der{" "}
              <a
                href="/datenschutz"
                className="text-cyan-300 transition hover:text-cyan-200"
              >
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/datenschutz"
              className="rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              Mehr erfahren
            </a>
            <button
              type="button"
              onClick={handleAccept}
              className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-200"
            >
              Verstanden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}