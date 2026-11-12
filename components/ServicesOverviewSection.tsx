import React from "react";
import Link from "next/link";
import ServiceCardLink from "@/components/ServiceCardLink";

export default function ServicesOverviewSection() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center sm:text-left mb-8 sm:mb-12">
          {/* Eyebrow Row: on sm+ link is on the right across from the eyebrow */}
          <div className="flex items-center justify-center sm:justify-between mb-2 sm:mb-3 gap-4">
            <div className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold">
              LEISTUNGEN
            </div>
            {/* Desktop link on top line (sm+) */}
            <Link
              href="/leistungen"
              className="hidden sm:inline-flex text-xs uppercase tracking-wider text-muted-grey hover:text-champagne transition-colors items-center gap-1.5 group whitespace-nowrap"
            >
              <span>Alle Leistungen ansehen</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Heading: Centered on mobile, Left on desktop */}
          <h2 className="text-3xl sm:text-5xl font-headline font-bold text-warm-white">
            Drei Disziplinen. Ein gemeinsames Ziel.
          </h2>

          {/* Mobile-only Link beneath heading */}
          <div className="sm:hidden mt-3 flex justify-center">
            <Link
              href="/leistungen"
              className="inline-flex text-xs uppercase tracking-wider text-champagne font-semibold items-center gap-1.5 group py-1"
            >
              <span>Alle Leistungen ansehen</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Discipline 1: Filmproduktion (Slide 14) */}
          <div className="group relative overflow-hidden bg-charcoal border border-white/10 rounded-xl p-8 hover-zoom-cinematic flex flex-col justify-between hover:border-champagne/30 transition-colors">
            <ServiceCardLink
              serviceId="filmproduktion"
              className="absolute inset-0 z-0"
              aria-label="Mehr erfahren über Filmproduktion"
            >
              <span className="sr-only">Mehr erfahren über Filmproduktion</span>
            </ServiceCardLink>

            {/* Large Cinematic Watermark Number */}
            <div
              aria-hidden="true"
              className="absolute top-3 right-6 text-7xl font-headline font-black text-white/[0.05] group-hover:text-champagne/15 transition-colors select-none pointer-events-none"
            >
              01
            </div>

            <div className="relative z-10 pointer-events-none">
              <h3 className="text-2xl font-headline font-bold text-warm-white group-hover:text-champagne transition-colors mb-4 pt-2">
                FILMPRODUKTION
              </h3>
              <p className="text-sm text-muted-grey font-body leading-relaxed mb-6">
                Kreative Kinematographie, Bildkomposition, Bewegung und visuelles Storytelling mit modernster Technik (Sony FX3).
              </p>
            </div>
            <ServiceCardLink
              serviceId="filmproduktion"
              className="relative z-10 text-xs uppercase tracking-wider text-champagne font-semibold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform w-fit"
            >
              <span>Mehr erfahren</span>
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </ServiceCardLink>
          </div>

          {/* Discipline 2: Drohnenaufnahmen (Slide 14) */}
          <div className="group relative overflow-hidden bg-charcoal border border-white/10 rounded-xl p-8 hover-zoom-cinematic flex flex-col justify-between hover:border-champagne/30 transition-colors">
            <ServiceCardLink
              serviceId="drohnenaufnahmen"
              className="absolute inset-0 z-0"
              aria-label="Mehr erfahren über Aerial Cinematography"
            >
              <span className="sr-only">Mehr erfahren über Aerial Cinematography</span>
            </ServiceCardLink>

            {/* Large Cinematic Watermark Number */}
            <div
              aria-hidden="true"
              className="absolute top-3 right-6 text-7xl font-headline font-black text-white/[0.05] group-hover:text-champagne/15 transition-colors select-none pointer-events-none"
            >
              02
            </div>

            <div className="relative z-10 pointer-events-none">
              <h3 className="text-2xl font-headline font-bold text-warm-white group-hover:text-champagne transition-colors mb-4 pt-2">
                AERIAL CINEMATOGRAPHY
              </h3>
              <p className="text-sm text-muted-grey font-body leading-relaxed mb-6">
                Frische Perspektiven, Landschaften und dynamische Drohnenaufnahmen &mdash; unter Einhaltung aller gesetzlichen Vorgaben.
              </p>
            </div>
            <ServiceCardLink
              serviceId="drohnenaufnahmen"
              className="relative z-10 text-xs uppercase tracking-wider text-champagne font-semibold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform w-fit"
            >
              <span>Mehr erfahren</span>
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </ServiceCardLink>
          </div>

          {/* Discipline 3: Schnitt & Color (Slide 14) */}
          <div className="group relative overflow-hidden bg-charcoal border border-white/10 rounded-xl p-8 hover-zoom-cinematic flex flex-col justify-between hover:border-champagne/30 transition-colors">
            <ServiceCardLink
              serviceId="schnitt-color"
              className="absolute inset-0 z-0"
              aria-label="Mehr erfahren über Schnitt & Color"
            >
              <span className="sr-only">Mehr erfahren über Schnitt & Color</span>
            </ServiceCardLink>

            {/* Large Cinematic Watermark Number */}
            <div
              aria-hidden="true"
              className="absolute top-3 right-6 text-7xl font-headline font-black text-white/[0.05] group-hover:text-champagne/15 transition-colors select-none pointer-events-none"
            >
              03
            </div>

            <div className="relative z-10 pointer-events-none">
              <h3 className="text-2xl font-headline font-bold text-warm-white group-hover:text-champagne transition-colors mb-4 pt-2">
                SCHNITT &amp; COLOR
              </h3>
              <p className="text-sm text-muted-grey font-body leading-relaxed mb-6">
                Rhythmus, Sounddesign, Bildsprache und Farbe verschmelzen zu einer fesselnden Geschichte mit individuellem Look.
              </p>
            </div>
            <ServiceCardLink
              serviceId="schnitt-color"
              className="relative z-10 text-xs uppercase tracking-wider text-champagne font-semibold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform w-fit"
            >
              <span>Mehr erfahren</span>
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </ServiceCardLink>
          </div>
        </div>
      </div>
    </section>
  );
}
