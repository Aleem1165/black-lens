import React from "react";
import Link from "next/link";

export default function AboutHeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
      {/* Left Column: Heading, intro & CTA buttons */}
      <div className="lg:col-span-7">
        <h1 className="text-4xl sm:text-6xl font-bold font-headline tracking-tight leading-none mb-6">
          21 JAHRE.<br />
          <span className="text-champagne">EINE GROSSE VISION.</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-grey font-body leading-relaxed mb-8 max-w-xl">
          Ich mache Videos seit meiner Kindheit. Heute möchte ich wachsen, professioneller arbeiten und mit BlackLens eine eigene filmische Handschrift entwickeln.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 group bg-champagne text-cinematic-black font-semibold uppercase tracking-wider px-6 py-3.5 rounded text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]"
          >
            <span>Projekt anfragen</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
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
            className="border border-white/20 text-warm-white font-medium uppercase tracking-wider px-6 py-3.5 rounded text-sm hover:border-white/40 transition-colors"
          >
            Arbeiten ansehen
          </Link>
        </div>
      </div>

      {/* Right Column: Timo & Sony FX3 Gear Image */}
      <div className="lg:col-span-5">
        <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-charcoal border border-white/10 hover-zoom-cinematic">
          <img
            src="/images/timo-gear-sony-fx3.jpg"
            alt="Timo's Sony FX3 Cinema Kamera"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-cinematic-black/90 to-transparent">
            <div className="text-xs tracking-wider uppercase text-champagne font-semibold mb-1">
              Founder &amp; Filmemacher
            </div>
            <div className="text-xl font-headline font-semibold text-warm-white">
              Timo
            </div>
            <div className="text-xs text-muted-grey">
              Sony FX3 &bull; Speicherschwendi, Schweiz
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

