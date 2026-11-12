import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns | BlackLens — Filmproduktion & Drohnenaufnahmen",
  description:
    "Lernen Sie BlackLens und Timo kennen: 21 Jahre alt, Leidenschaft für die Sony FX3 und die Vision, emotionale Geschichten auf die große Leinwand zu bringen.",
};

export default function UeberUnsPage() {
  return (
    <div className="bg-cinematic-black text-warm-white min-h-screen py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Hero Section (Slide 10 & 11) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
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

        {/* My Story Section (Slide 11 & 12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-16 border-t border-white/10 mb-20">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold mb-3">
                DIE STORY
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-bold text-warm-white leading-tight">
                Vom Experiment zur filmischen Leidenschaft.
              </h2>
            </div>

            {/* Editorial quote taken directly from Timo's bio */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <blockquote className="text-lg sm:text-xl font-headline italic text-champagne/90 leading-relaxed border-l-2 border-champagne pl-4">
                &bdquo;Was mit Neugier und einfachen Videos begann, ist &uuml;ber die Jahre zu einer echten Leidenschaft gewachsen.&ldquo;
              </blockquote>
              <div className="text-xs uppercase tracking-wider text-muted-grey mt-3 pl-4">
                Timo &mdash; Gr&uuml;nder BlackLens
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-muted-grey text-base sm:text-lg leading-relaxed font-body">
            <p className="text-warm-white/95 text-lg sm:text-xl leading-relaxed">
              Ich bin Timo, 21 Jahre alt, und interessiere mich seit meiner Kindheit für das Filmemachen. Was mit Neugier und einfachen Videos begann, ist über die Jahre zu einer echten Leidenschaft gewachsen.
            </p>
            <p>
              Zunächst gründete ich <strong className="text-warm-white">BlackLabs</strong> — einen Raum für meine Hobbys, technischen Projekte und Experimente. Später entstand daraus <strong className="text-warm-white">BlackLens</strong> als eigenständige Marke für kreative Filmdienstleistungen.
            </p>
            <p>
              Heute möchte ich meine Arbeit auf das nächste Level heben. Ich lerne jeden Tag dazu und liebe es, mit meiner <strong className="text-warm-white">Sony FX3</strong> zu filmen, Videos zu schneiden und neue visuelle Ideen zu verwirklichen.
            </p>
          </div>
        </div>

        {/* 3-Step Brand Progression (Slide 02: An Idea Becomes A Brand) */}
        <div className="py-16 border-t border-white/10 mb-20">
          <div className="max-w-3xl mb-12">
            <div className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold mb-3">
              BLACKLABS / BRAND &amp; DIGITAL
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-warm-white leading-tight mb-4">
              EINE IDEE WIRD ZUR MARKE.<br />
              <span className="text-champagne">Die Evolution hinter BlackLens.</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-grey font-body leading-relaxed">
              Vom Raum für technische Experimente zur unabhängigen Filmmarke mit unverwechselbarer Handschrift.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Step 1: BlackLabs */}
            <div className="group relative overflow-hidden bg-charcoal border border-white/10 rounded-xl p-5 sm:p-6 hover-zoom-cinematic hover:border-champagne/30 transition-all flex flex-col justify-between">
              {/* Subtle Brand Watermark on Right Side */}
              <div
                aria-hidden="true"
                className="absolute top-2 right-4 text-3xl sm:text-4xl md:text-5xl font-headline font-black text-white/[0.05] group-hover:text-champagne/15 transition-colors duration-300 select-none pointer-events-none tracking-wider uppercase"
              >
                BLACKLABS
              </div>

              <div className="relative z-10 pt-5 sm:pt-6">
                <h3 className="text-xl sm:text-2xl font-headline font-bold text-warm-white group-hover:text-champagne transition-colors mb-3">
                  Der Anfang
                </h3>
                <p className="text-sm text-muted-grey font-body leading-relaxed">
                  Ein Raum für technische Projekte, Hobbys, Ideen und Experimente &mdash; der kreative Ursprung, an dem alles begann.
                </p>
              </div>
              <div className="relative z-10 pt-4 mt-5 border-t border-white/5 text-[11px] text-muted-grey/60 uppercase tracking-wider font-medium">
                Ideen &bull; Code &bull; Experimente
              </div>
            </div>

            {/* Step 2: Evolution */}
            <div className="group relative overflow-hidden bg-charcoal border border-white/10 rounded-xl p-5 sm:p-6 hover-zoom-cinematic hover:border-champagne/30 transition-all flex flex-col justify-between">
              {/* Subtle Brand Watermark on Right Side */}
              <div
                aria-hidden="true"
                className="absolute top-2 right-4 text-3xl sm:text-4xl md:text-5xl font-headline font-black text-white/[0.05] group-hover:text-champagne/15 transition-colors duration-300 select-none pointer-events-none tracking-wider uppercase"
              >
                EVOLUTION
              </div>

              <div className="relative z-10 pt-5 sm:pt-6">
                <h3 className="text-xl sm:text-2xl font-headline font-bold text-warm-white group-hover:text-champagne transition-colors mb-3">
                  Das Wachstum
                </h3>
                <p className="text-sm text-muted-grey font-body leading-relaxed">
                  Die wachsende Leidenschaft für das Filmemachen reifte zum klaren Anspruch, sich kontinuierlich auf höchstem Niveau zu professionalisieren.
                </p>
              </div>
              <div className="relative z-10 pt-4 mt-5 border-t border-white/5 text-[11px] text-muted-grey/60 uppercase tracking-wider font-medium">
                Handwerk &bull; Sony FX3 &bull; Anspruch
              </div>
            </div>

            {/* Step 3: BlackLens */}
            <div className="group relative overflow-hidden bg-charcoal border border-white/10 rounded-xl p-5 sm:p-6 hover-zoom-cinematic hover:border-champagne/30 transition-all flex flex-col justify-between">
              {/* Subtle Brand Watermark on Right Side */}
              <div
                aria-hidden="true"
                className="absolute top-2 right-4 text-3xl sm:text-4xl md:text-5xl font-headline font-black text-white/[0.05] group-hover:text-champagne/15 transition-colors duration-300 select-none pointer-events-none tracking-wider uppercase"
              >
                BLACKLENS
              </div>

              <div className="relative z-10 pt-5 sm:pt-6">
                <h3 className="text-xl sm:text-2xl font-headline font-bold text-warm-white group-hover:text-champagne transition-colors mb-3">
                  Die Marke
                </h3>
                <p className="text-sm text-muted-grey font-body leading-relaxed">
                  Eine eigenständige Marke für kreative Filmdienstleistungen mit eigener filmischer Handschrift und dem Ziel der großen Leinwand.
                </p>
              </div>
              <div className="relative z-10 pt-4 mt-5 border-t border-white/5 text-[11px] text-muted-grey/60 uppercase tracking-wider font-medium">
                Film &bull; Vision &bull; Passion
              </div>
            </div>
          </div>
        </div>

        {/* The Dream / Pull Quote (Slide 13) */}
        <div className="bg-charcoal border border-white/10 rounded-xl p-8 sm:p-16 text-center my-20">
          <div className="text-champagne text-xs uppercase tracking-[0.25em] font-semibold mb-6">
            DIE VISION DAHINTER
          </div>
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-headline font-bold text-warm-white leading-tight max-w-4xl mx-auto mb-8">
            &bdquo;MEIN TRAUM IST ES, EINES TAGES EINEN EIGENEN SPIELFILM AUF DIE GROSSE LEINWAND ZU BRINGEN.&ldquo;
          </blockquote>
          <div className="text-muted-grey text-sm tracking-wide">
            &mdash; <span className="text-warm-white font-medium">Timo</span>, Gründer von BlackLens
          </div>
        </div>

        {/* Closing CTA */}
        <div className="text-center py-16 border-t border-white/10">
          <h3 className="text-2xl sm:text-3xl font-headline font-bold text-warm-white mb-4">
            Bereit für das nächste gemeinsame Projekt?
          </h3>
          <p className="text-muted-grey font-body max-w-md mx-auto mb-8">
            Lassen Sie uns über Ihre Filmidee, Drohnenaufnahmen oder Ihr Werbeprojekt sprechen.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 group bg-champagne text-cinematic-black font-semibold uppercase tracking-wider px-8 py-4 rounded text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]"
          >
            <span>Kontakt aufnehmen</span>
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
    </div>
  );
}

