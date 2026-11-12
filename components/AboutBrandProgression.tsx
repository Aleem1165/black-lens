import React from "react";

export default function AboutBrandProgression() {
  return (
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
  );
}

