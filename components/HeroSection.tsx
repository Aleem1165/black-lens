import React from "react";
import Link from "next/link";
import HeroEyebrow from "@/components/HeroEyebrow";

export default function HeroSection() {
  return (
    <section className="relative min-h-[auto] sm:min-h-[90vh] flex flex-col justify-start sm:justify-center items-center px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background Film Still with Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/swiss-alps-drone.jpg"
          alt="Cineastische Alpen-Luftaufnahme Hintergrund"
          className="w-full h-full object-cover opacity-35 scale-100 hover-zoom-cinematic transition-transform duration-[12s]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-cinematic-black/60 to-cinematic-black/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center pt-6 pb-12 sm:py-24">
        {/* Animated Typing & Gliding Eyebrow */}
        <HeroEyebrow />

        {/* Main Headline: "Stories You Can Feel" in German */}
        <h1 className="text-4xl sm:text-7xl md:text-8xl font-bold font-headline tracking-tight leading-[0.95] mb-6">
          GESCHICHTEN,<br />
          <span className="text-champagne">DIE MAN FÜHLT.</span>
        </h1>

        {/* Slogan & Tagline in German */}
        <p className="text-base sm:text-xl md:text-2xl text-muted-grey font-body max-w-2xl mx-auto leading-relaxed mb-10">
          Filmproduktion, Drohnenaufnahmen und Schnitt &mdash; mit Leidenschaft für jedes Detail.
        </p>

        {/* Primary CTAs in German */}
        <div className="flex flex-col min-[540px]:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full">
          <Link
            href="/kontakt"
            className="w-full min-[540px]:w-auto max-w-xs min-[540px]:max-w-none inline-flex items-center justify-center gap-2 group bg-champagne text-cinematic-black font-semibold uppercase tracking-wider px-7 sm:px-8 py-3.5 sm:py-4 rounded text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] whitespace-nowrap"
          >
            <span>Projekt anfragen</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="/projekte"
            className="w-full min-[540px]:w-auto max-w-xs min-[540px]:max-w-none inline-flex items-center justify-center border border-white/20 text-warm-white font-medium uppercase tracking-wider px-7 sm:px-8 py-3.5 sm:py-4 rounded text-sm hover:border-white/50 transition-colors whitespace-nowrap"
          >
            Arbeiten ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}

