"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgodonnj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setSuccess(true);
      } else {
        setError("Die Anfrage konnte leider nicht gesendet werden.");
      }
    } catch {
      setError("Es ist ein Fehler aufgetreten. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-10">
      {success ? (
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 text-zinc-100">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
            Erfolgreich gesendet
          </p>
          <h3 className="mt-3 text-2xl font-semibold">
            Danke für deine Anfrage
          </h3>
          <p className="mt-3 leading-7 text-zinc-300">
            Deine Nachricht wurde erfolgreich übermittelt. Ich melde mich so
            bald wie möglich bei dir zurück.
          </p>

          <button
            type="button"
            onClick={() => setSuccess(false)}
            className="mt-6 rounded-full border border-cyan-400/20 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
          >
            Neue Anfrage senden
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          <input
            type="hidden"
            name="_subject"
            value="Neue Anfrage über die Website von Dilges Koc"
          />

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Dein Name"
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/40"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              E-Mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="deine@email.de"
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/40"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Unternehmen
            </label>
            <input
              type="text"
              name="company"
              placeholder="Optional"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/40"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Gewünschte Leistung
            </label>
            <select
              name="service"
              required
              defaultValue=""
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40"
            >
              <option value="" disabled className="text-black">
                Bitte auswählen
              </option>
              <option value="Landingpage" className="text-black">
                Landingpage
              </option>
              <option value="Firmenwebseite" className="text-black">
                Firmenwebseite
              </option>
              <option value="Frontend-Entwicklung" className="text-black">
                Frontend-Entwicklung
              </option>
              <option value="Individuelle Weblösung" className="text-black">
                Individuelle Weblösung
              </option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Nachricht
            </label>
            <textarea
              name="message"
              rows={6}
              placeholder="Beschreibe kurz dein Projekt oder deine Anfrage..."
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300/40"
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-500">
              Oder direkt per E-Mail an{" "}
              <a
                href="mailto:dilgaskoc@outlook.de"
                className="text-cyan-300 transition hover:text-cyan-200"
              >
                dilgaskoc@outlook.de
              </a>
            </p>

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Wird gesendet..." : "Anfrage senden"}
            </button>
          </div>

          {error && (
            <div className="md:col-span-2 rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-200">
              {error}
            </div>
          )}
        </form>
      )}
    </div>
  );
}