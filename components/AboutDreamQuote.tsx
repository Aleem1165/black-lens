import React from "react";

export default function AboutDreamQuote() {
  return (
    <div className="relative overflow-hidden w-fit max-w-5xl mx-auto bg-gradient-to-br from-charcoal/55 via-charcoal/45 to-cinematic-black/60 backdrop-blur-2xl rounded-2xl sm:rounded-3xl px-8 sm:px-16 py-10 sm:py-16 text-center my-20 shadow-2xl shadow-black/70">
      {/* Subtle Ambient Radial Highlight in Top-Right */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-20 w-56 h-56 bg-champagne/[0.04] rounded-full blur-2xl pointer-events-none"
      />

      {/* Large Subtle Watermark Graphic in Background */}
      <div
        aria-hidden="true"
        className="absolute -bottom-6 -right-4 sm:-right-8 text-7xl sm:text-8xl md:text-9xl font-headline font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter"
      >
        TIMO
      </div>

      <div className="relative z-10">
        {/* Heading with Hairlines */}
        <div className="inline-flex items-center justify-center gap-3 sm:gap-4 text-champagne text-xs uppercase tracking-[0.25em] font-semibold mb-6">
          <span
            aria-hidden="true"
            className="inline-block h-px bg-gradient-to-r from-transparent to-champagne/60 w-8 sm:w-14"
          />
          <span>DIE VISION DAHINTER</span>
          <span
            aria-hidden="true"
            className="inline-block h-px bg-gradient-to-l from-transparent to-champagne/60 w-8 sm:w-14"
          />
        </div>

        <blockquote className="text-2xl sm:text-4xl md:text-5xl font-headline font-bold text-warm-white leading-tight max-w-4xl mx-auto mb-8">
          &bdquo;MEIN TRAUM IST ES, EINES TAGES EINEN EIGENEN SPIELFILM AUF DIE GROSSE LEINWAND ZU BRINGEN.&ldquo;
        </blockquote>
        <div className="text-muted-grey text-sm tracking-wide">
          &mdash; <span className="text-warm-white font-medium">Timo</span>, Gründer von BlackLens
        </div>
      </div>
    </div>
  );
}

