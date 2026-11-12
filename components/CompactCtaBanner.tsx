import React from "react";
import Link from "next/link";

interface CompactCtaBannerProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CompactCtaBanner({
  headline = "Haben Sie ein konkretes Projekt vor Augen?",
  description = "Egal ob Imagefilm, Drohnenaufnahmen oder Colorgrading — wir freuen uns auf den Austausch.",
  buttonText = "Projekt starten",
  buttonHref = "/kontakt",
}: CompactCtaBannerProps) {
  return (
    <div className="relative overflow-hidden w-fit max-w-full mx-auto bg-gradient-to-br from-charcoal/55 via-charcoal/45 to-cinematic-black/60 backdrop-blur-2xl rounded-2xl sm:rounded-3xl px-8 sm:px-14 py-8 sm:py-12 text-center shadow-2xl shadow-black/70">
      {/* Subtle Ambient Radial Highlight in Top-Right */}
      <div
        aria-hidden="true"
        className="absolute -top-16 -right-16 w-48 h-48 bg-champagne/[0.035] rounded-full blur-2xl pointer-events-none"
      />

      <div className="relative z-10">
        <h3 className="text-2xl sm:text-3xl font-headline font-bold text-warm-white mb-4">
          {headline}
        </h3>
        <p className="text-muted-grey font-body max-w-lg mx-auto mb-8">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 group bg-champagne text-cinematic-black font-semibold uppercase tracking-wider px-8 py-4 rounded text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] shadow-lg shadow-champagne/10"
        >
          <span>{buttonText}</span>
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
        </Link>
      </div>
    </div>
  );
}
