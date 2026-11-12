import React from "react";
import Link from "next/link";

export default function ClosingCtaSection() {
  return (
    <section className="py-24 px-4 sm:px-8 lg:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto relative overflow-hidden bg-gradient-to-br from-charcoal/55 via-charcoal/45 to-cinematic-black/60 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-black/90">
        {/* Subtle Ambient Radial Highlight */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-96 h-96 bg-champagne/[0.04] rounded-full blur-3xl pointer-events-none"
        />

        {/* Large Subtle Watermark Graphic in Background */}
        <div
          aria-hidden="true"
          className="absolute -bottom-8 -right-6 text-7xl sm:text-8xl lg:text-9xl font-headline font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter"
        >
          BLACKLENS
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Heading, Copy, and Primary CTA Button */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-champagne font-semibold mb-4">
              <span className="w-8 h-px bg-champagne/60" />
              <span>KONTAKT AUFNEHMEN</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-headline font-bold text-warm-white tracking-tight leading-[1.05] mb-6">
              LASS UNS<br />
              <span className="text-champagne">ETWAS SCHAFFEN.</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-grey font-body leading-relaxed mb-8 max-w-xl">
              Ein direkter Weg vom Interesse zur Anfrage. Ob anspruchsvoller Werbefilm, Drohnenaufnahmen oder kreativer Brandfilm &mdash; lassen Sie uns Ihre Vision verwirklichen.
            </p>

            <div className="flex justify-start">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-3 group bg-champagne text-cinematic-black font-semibold uppercase tracking-wider px-8 py-4 rounded text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] shadow-lg shadow-champagne/10"
              >
                <span>Projekt starten</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
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

          {/* Right Column: Direct Channels Interactive Cards (Exact same design as /kontakt) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {/* Email Card */}
            <a
              href="mailto:office@blacklabs.ch"
              className="group relative overflow-hidden flex items-center justify-between p-3.5 sm:p-4 rounded-lg bg-charcoal/70 border border-white/10 hover:border-champagne/50 hover:bg-charcoal transition-all duration-300"
            >
              {/* Background Watermark Icon on the Left */}
              <div
                aria-hidden="true"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-9 h-9 text-white/[0.08] group-hover:text-champagne/[0.28] transition-all duration-300 pointer-events-none select-none z-0 group-hover:scale-110"
              >
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>

              <span className="relative z-10 pl-11 text-warm-white font-medium text-sm sm:text-base group-hover:text-champagne transition-colors">
                office@blacklabs.ch
              </span>
              <svg className="relative z-10 w-4 h-4 text-muted-grey/60 group-hover:text-champagne group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+41797267456"
              className="group relative overflow-hidden flex items-center justify-between p-3.5 sm:p-4 rounded-lg bg-charcoal/70 border border-white/10 hover:border-champagne/50 hover:bg-charcoal transition-all duration-300"
            >
              {/* Background Watermark Icon on the Left */}
              <div
                aria-hidden="true"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-9 h-9 text-white/[0.08] group-hover:text-champagne/[0.28] transition-all duration-300 pointer-events-none select-none z-0 group-hover:scale-110"
              >
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>

              <span className="relative z-10 pl-11 text-warm-white font-medium text-sm sm:text-base group-hover:text-champagne transition-colors">
                +41 79 726 74 56
              </span>
              <svg className="relative z-10 w-4 h-4 text-muted-grey/60 group-hover:text-champagne group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>

            {/* Instagram Card */}
            <a
              href="https://instagram.com/BlackLens.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden flex items-center justify-between p-3.5 sm:p-4 rounded-lg bg-charcoal/70 border border-white/10 hover:border-champagne/50 hover:bg-charcoal transition-all duration-300"
            >
              {/* Background Watermark Icon on the Left */}
              <div
                aria-hidden="true"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-9 h-9 text-white/[0.08] group-hover:text-champagne/[0.28] transition-all duration-300 pointer-events-none select-none z-0 group-hover:scale-110"
              >
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>

              <span className="relative z-10 pl-11 text-warm-white font-medium text-sm sm:text-base group-hover:text-champagne transition-colors">
                @BlackLens.ch
              </span>
              <svg className="relative z-10 w-4 h-4 text-muted-grey/60 group-hover:text-champagne group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>

            {/* Studio Location Card (Slide 17) -> Clickable to Google Maps */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rickstrasse+6,+9037+Speicherschwendi,+Schweiz"
              target="_blank"
              rel="noopener noreferrer"
              title="Auf Google Maps öffnen"
              className="group relative overflow-hidden flex items-center justify-between p-3.5 sm:p-4 rounded-lg bg-charcoal/70 border border-white/10 hover:border-champagne/50 hover:bg-charcoal transition-all duration-300"
            >
              {/* Background Watermark Icon on the Left */}
              <div
                aria-hidden="true"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-9 h-9 text-white/[0.08] group-hover:text-champagne/[0.28] transition-all duration-300 pointer-events-none select-none z-0 group-hover:scale-110"
              >
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>

              <div className="relative z-10 pl-11 leading-snug">
                <div className="text-warm-white font-medium text-sm sm:text-base group-hover:text-champagne transition-colors">
                  Rickstrasse 6
                </div>
                <div className="text-xs text-muted-grey">
                  9037 Speicherschwendi, Schweiz
                </div>
              </div>
              <svg className="relative z-10 w-4 h-4 text-muted-grey/60 group-hover:text-champagne group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
