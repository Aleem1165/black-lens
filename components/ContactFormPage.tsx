"use client";

import React, { useState } from "react";

export default function ContactFormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim() || !agree) {
      setIsError(true);
      return;
    }
    setIsSubmitting(true);
    setIsError(false);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div className="w-full">
      {!isSuccess ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          {/* Name (Pflichtfeld) */}
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-wider text-warm-white font-medium mb-2">
              Name <span className="text-champagne">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              maxLength={256}
              placeholder="Ihr vollständiger Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-cinematic-black border border-white/10 rounded-md px-4 py-3 text-warm-white placeholder-muted-grey/50 focus:outline-none focus:border-champagne text-sm transition-colors"
            />
          </div>

          {/* Email (Pflichtfeld) */}
          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-wider text-warm-white font-medium mb-2">
              E-Mail <span className="text-champagne">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              maxLength={256}
              placeholder="ihre.email@beispiel.ch"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-cinematic-black border border-white/10 rounded-md px-4 py-3 text-warm-white placeholder-muted-grey/50 focus:outline-none focus:border-champagne text-sm transition-colors"
            />
          </div>

          {/* Projektart (Pflichtfeld - Slide 18) */}
          <div>
            <label htmlFor="projectType" className="block text-xs uppercase tracking-wider text-warm-white font-medium mb-2">
              Projektart <span className="text-champagne">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full bg-cinematic-black border border-white/10 rounded-md px-4 py-3 text-warm-white focus:outline-none focus:border-champagne text-sm transition-colors"
            >
              <option value="">Projektart auswählen...</option>
              <option value="film-production">Filmproduktion</option>
              <option value="aerial">Drohnenaufnahmen / Luftbild</option>
              <option value="editing-color">Schnitt &amp; Colorgrading</option>
              <option value="other">Sonstige Anfrage</option>
            </select>
          </div>

          {/* Zeitplan & Budget (Optional - Slide 18) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="timeline" className="block text-xs uppercase tracking-wider text-muted-grey font-medium mb-2">
                Zeitplan (Optional)
              </label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                placeholder="z.B. Sommer 2026"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full bg-cinematic-black border border-white/10 rounded-md px-4 py-3 text-warm-white placeholder-muted-grey/50 focus:outline-none focus:border-champagne text-sm transition-colors"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-xs uppercase tracking-wider text-muted-grey font-medium mb-2">
                Budgetrahmen (Optional)
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                placeholder="z.B. CHF 3'000 - 5'000"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-cinematic-black border border-white/10 rounded-md px-4 py-3 text-warm-white placeholder-muted-grey/50 focus:outline-none focus:border-champagne text-sm transition-colors"
              />
            </div>
          </div>

          {/* Nachricht (Pflichtfeld) */}
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-wider text-warm-white font-medium mb-2">
              Nachricht <span className="text-champagne">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={5000}
              placeholder="Erzählen Sie uns von Ihrem Projekt, Ideen oder Zielen..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-cinematic-black border border-white/10 rounded-md px-4 py-3 text-warm-white placeholder-muted-grey/50 focus:outline-none focus:border-champagne text-sm transition-colors resize-none"
            />
          </div>

          {/* Datenschutz (Pflichtfeld - Slide 18) */}
          <div className="flex items-start gap-3 mt-1">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-1 accent-champagne cursor-pointer h-4 w-4 rounded"
              required
            />
            <label htmlFor="privacy" className="text-xs text-muted-grey leading-relaxed cursor-pointer select-none">
              Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Beantwortung meiner Anfrage verarbeitet werden.
            </label>
          </div>

          {/* Fehlermeldung (Slide 18) */}
          {isError && (
            <div className="p-3.5 bg-red-950/40 border border-red-500/40 text-red-300 rounded text-xs leading-relaxed">
              Ihre Anfrage konnte nicht gesendet werden. Bitte füllen Sie alle Pflichtfelder aus und bestätigen Sie die Datenschutzerklärung.
            </div>
          )}

          {/* Absenden Button (Champagne #D9B899) */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 group bg-champagne text-cinematic-black font-semibold uppercase tracking-wider px-8 py-4 rounded text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}</span>
            {!isSubmitting && (
              <svg
                className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            )}
          </button>
        </form>
      ) : (
        /* Erfolgsmeldung (Slide 18) */
        <div className="bg-charcoal border border-champagne/40 rounded-xl p-8 sm:p-12 text-center">
          <div className="text-champagne text-3xl mb-4 font-bold">✓</div>
          <h3 className="text-2xl font-headline font-bold text-warm-white mb-2">
            Vielen Dank! Ihre Nachricht wurde gesendet.
          </h3>
          <p className="text-sm text-muted-grey font-body max-w-md mx-auto mb-6">
            Wir haben Ihre Anfrage erhalten und melden uns so schnell wie möglich bei Ihnen.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setName("");
              setEmail("");
              setMessage("");
              setAgree(false);
            }}
            className="border border-white/20 text-warm-white text-xs uppercase tracking-wider px-5 py-2.5 rounded hover:border-white/50 transition-colors"
          >
            Weitere Nachricht senden
          </button>
        </div>
      )}
    </div>
  );
}
