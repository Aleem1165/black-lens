import React from "react";
import Link from "next/link";

export default function AboutTimoSnippetSection() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-12 border-t border-white/5 bg-charcoal/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left: Portrait */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-charcoal border border-white/10 hover-zoom-cinematic">
              <img
                src="/images/timo-gear-sony-fx3.jpg"
                alt="Timo's Sony FX3 Cinema Kamera"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-cinematic-black/90 to-transparent">
                <div className="text-xs tracking-wider uppercase text-champagne font-semibold mb-1">
                  Gründer &amp; Filmemacher
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

          {/* Right: Exact Copy from Slide 11 & 12 in German */}
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold mb-3">
              DIE PERSON HINTER DER KAMERA
            </div>
            <h2 className="text-3xl sm:text-5xl font-headline font-bold text-warm-white tracking-tight mb-6">
              21 JAHRE.<br />
              <span className="text-champagne">EINE GROSSE VISION.</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-grey font-body leading-relaxed mb-6">
              Ich bin Timo, 21 Jahre alt, und interessiere mich seit meiner Kindheit für das Filmemachen. Was mit Neugier und einfachen Videos begann, ist über die Jahre zu einer echten Leidenschaft gewachsen.
            </p>
            <p className="text-base sm:text-lg text-muted-grey font-body leading-relaxed mb-8">
              Zunächst gründete ich BlackLabs &mdash; einen Raum für meine Hobbys, technischen Projekte und Experimente. Später entstand daraus BlackLens als eigenständige Marke für kreative Filmdienstleistungen. Heute hebe ich meine Arbeit mit meiner Sony FX3 auf das nächste Level.
            </p>

            <Link
              href="/ueber-uns"
              className="inline-flex items-center gap-2 group bg-champagne text-cinematic-black font-semibold uppercase tracking-wider px-6 py-3.5 rounded text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]"
            >
              <span>Meine Story lesen</span>
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
          </div>

        </div>
      </div>
    </section>
  );
}

