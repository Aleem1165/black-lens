import React from "react";
import Link from "next/link";

export default function ServicesOverviewSection() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold mb-2">
              LEISTUNGEN
            </div>
            <h2 className="text-3xl sm:text-5xl font-headline font-bold text-warm-white">
              Drei Disziplinen. Ein gemeinsames Ziel.
            </h2>
          </div>
          <Link
            href="/leistungen"
            className="text-xs uppercase tracking-wider text-muted-grey hover:text-champagne transition-colors flex items-center gap-2"
          >
            Alle Leistungen ansehen <span>&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Discipline 1: Filmproduktion (Slide 14) */}
          <div className="group relative overflow-hidden bg-charcoal border border-white/10 rounded-xl p-8 hover-zoom-cinematic flex flex-col justify-between hover:border-champagne/30 transition-colors">
            <Link
              href="/leistungen#filmproduktion"
              className="absolute inset-0 z-0"
              aria-label="Mehr erfahren über Filmproduktion"
            >
              <span className="sr-only">Mehr erfahren über Filmproduktion</span>
            </Link>

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
            <Link
              href="/leistungen#filmproduktion"
              className="relative z-10 text-xs uppercase tracking-wider text-champagne font-semibold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform w-fit"
            >
              <span>Mehr erfahren</span>
              <span>&rarr;</span>
            </Link>
          </div>

          {/* Discipline 2: Drohnenaufnahmen (Slide 14) */}
          <div className="group relative overflow-hidden bg-charcoal border border-white/10 rounded-xl p-8 hover-zoom-cinematic flex flex-col justify-between hover:border-champagne/30 transition-colors">
            <Link
              href="/leistungen#drohnenaufnahmen"
              className="absolute inset-0 z-0"
              aria-label="Mehr erfahren über Aerial Cinematography"
            >
              <span className="sr-only">Mehr erfahren über Aerial Cinematography</span>
            </Link>

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
            <Link
              href="/leistungen#drohnenaufnahmen"
              className="relative z-10 text-xs uppercase tracking-wider text-champagne font-semibold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform w-fit"
            >
              <span>Mehr erfahren</span>
              <span>&rarr;</span>
            </Link>
          </div>

          {/* Discipline 3: Schnitt & Color (Slide 14) */}
          <div className="group relative overflow-hidden bg-charcoal border border-white/10 rounded-xl p-8 hover-zoom-cinematic flex flex-col justify-between hover:border-champagne/30 transition-colors">
            <Link
              href="/leistungen#schnitt-color"
              className="absolute inset-0 z-0"
              aria-label="Mehr erfahren über Schnitt & Color"
            >
              <span className="sr-only">Mehr erfahren über Schnitt & Color</span>
            </Link>

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
            <Link
              href="/leistungen#schnitt-color"
              className="relative z-10 text-xs uppercase tracking-wider text-champagne font-semibold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform w-fit"
            >
              <span>Mehr erfahren</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
