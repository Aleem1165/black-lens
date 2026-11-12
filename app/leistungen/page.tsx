import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import ServiceScrollHandler from "@/components/ServiceScrollHandler";

export const metadata: Metadata = {
  title: "Leistungen | BlackLens — Filmproduktion & Drohnenaufnahmen",
  description:
    "Drei filmische Disziplinen. Ein gemeinsames Ziel: Filmproduktion, Drohnenaufnahmen & Luftbild sowie Schnitt & Colorgrading.",
};

export default function LeistungenPage() {
  const services = [
    {
      id: "filmproduktion",
      number: "01",
      icon: "/images/Herunterladen-1.svg",
      title: "FILMPRODUKTION",
      subtitle: "Kreative Kameraführung, Bildgestaltung & Storytelling",
      description:
        "Vom ersten Funken bis zum finalen Bild. Wir realisieren hochwertige Werbefilme, Imagefilme und visuelle Dokumentationen mit moderner Kinotechnik (Sony FX3 Cinema Line).",
      features: [
        "Konzept & Storyboarding",
        "Kameraführung mit Sony FX3",
        "Gimbal & Dynamische Kamerafahrten",
        "Cineastisches Licht & professioneller Ton",
      ],
    },
    {
      id: "drohnenaufnahmen",
      number: "02",
      icon: "/images/Herunterladen-2.svg",
      title: "AERIAL CINEMATOGRAPHY",
      subtitle: "Drohnenaufnahmen & Dynamische Luftperspektiven",
      description:
        "Neue Perspektiven, majestätische Landschaften und dynamische Kamerafahrten aus der Luft — selbstverständlich unter strikter Einhaltung aller schweizerischen und europäischen Luftfahrtvorschriften.",
      features: [
        "4K / Ultra-HD Luftaufnahmen",
        "Fahrzeug- & Landschaftsverfolgung",
        "Architektur- & Naturüberflüge",
        "Zertifizierte Drohnenpiloten (CH/EU)",
      ],
    },
    {
      id: "schnitt-color",
      number: "03",
      icon: "/images/Herunterladen-3.svg",
      title: "SCHNITT & COLORGRADING",
      subtitle: "Rhythmus, Sounddesign & Bildsprache",
      description:
        "Rhythmus, Sound, Bildsprache und Farbe verschmelzen zu einer fesselnden Geschichte. Wir formen Rohmaterial zu einem emotionalen Filmerlebnis mit eigenem Color-Look.",
      features: [
        "Präziser Schnitt & Taktgefühl",
        "Cineastisches Colorgrading (S-Log3)",
        "Sounddesign, Abmischung & Soundeffekte",
        "Export optimiert für Kino, Web & Social Media",
      ],
    },
  ];

  return (
    <div className="bg-cinematic-black text-warm-white min-h-screen py-16 px-4 sm:px-8 lg:px-12">
      <ServiceScrollHandler />
      <div className="max-w-[1400px] mx-auto">
        {/* Page Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl sm:text-6xl font-bold font-headline tracking-tight leading-none mb-6">
            DREI DISZIPLINEN.<br />
            <span className="text-champagne">EIN GEMEINSAMES ZIEL.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-grey font-body leading-relaxed">
            Filmproduktion, Drohnenaufnahmen und Schnitt — mit Leidenschaft für jedes Detail und kompromissloser visueller Qualität.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="space-y-12 mb-24">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="group relative overflow-hidden bg-charcoal border border-white/10 rounded-xl p-8 sm:p-12 hover-zoom-cinematic hover:border-champagne/30 transition-all scroll-mt-24 sm:scroll-mt-[112px]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                {/* Left Column: Watermark Icon + Title + Subtitle + CTA Button */}
                <div className="lg:col-span-5 relative flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-10">
                  {/* Large Subtle Watermark Icon positioned on Left Side */}
                  <div
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-56 sm:h-56 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none select-none z-0"
                  >
                    <img
                      src={service.icon}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="relative z-10">
                    <h2 className="text-2xl sm:text-3xl font-headline font-bold text-warm-white group-hover:text-champagne transition-colors mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-grey text-sm font-body leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>

                  <div className="pt-8 mt-auto relative z-10">
                    <Link
                      href={`/kontakt?service=${service.id}`}
                      className="inline-flex items-center gap-2 group/btn bg-champagne text-cinematic-black font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]"
                    >
                      <span>Jetzt anfragen</span>
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5"
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

                {/* Right Column: Description + Feature Deliverables */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <p className="text-warm-white/90 text-base sm:text-lg leading-relaxed font-body">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-white/10 mt-auto">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-muted-grey">
                        <span className="text-champagne font-bold text-base">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section (Slide 10) */}
        <div className="py-16 border-t border-white/10 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold mb-3">
              DER WORKFLOW
            </div>
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-warm-white">
              Vier Schritte zu Ihrem Film.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "IDEE", desc: "Gemeinsames Briefing, Visual Treatment & kreative Ausrichtung." },
              { step: "02", title: "PLANUNG", desc: "Shotlist, Drehorte, Technik-Setup und zeitlicher Ablauf." },
              { step: "03", title: "DREH", desc: "Professioneller Dreh mit Sony FX3, Drohne & cineastischem Licht." },
              { step: "04", title: "SCHNITT", desc: "Rhythmus, Colorgrading, Sounddesign und finale Master-Lieferung." },
            ].map((p, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden bg-charcoal border border-white/10 rounded-xl p-7 hover-zoom-cinematic hover:border-champagne/30 transition-all flex flex-col justify-between"
              >
                {/* Large Cinematic Watermark Number (Same as Home) */}
                <div
                  aria-hidden="true"
                  className="absolute top-2 right-4 text-7xl font-headline font-black text-white/[0.05] group-hover:text-champagne/15 transition-colors select-none pointer-events-none"
                >
                  {p.step}
                </div>

                <div className="relative z-10 pt-1">
                  <h3 className="text-xl font-headline font-bold text-warm-white group-hover:text-champagne transition-colors mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-grey font-body leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="relative overflow-hidden w-fit max-w-full mx-auto bg-gradient-to-br from-charcoal/55 via-charcoal/45 to-cinematic-black/60 backdrop-blur-2xl rounded-2xl sm:rounded-3xl px-8 sm:px-14 py-8 sm:py-12 text-center shadow-2xl shadow-black/70">
          {/* Subtle Ambient Radial Highlight in Top-Right (Proportionate for smaller card) */}
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-16 w-48 h-48 bg-champagne/[0.035] rounded-full blur-2xl pointer-events-none"
          />

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-headline font-bold text-warm-white mb-4">
              Haben Sie ein konkretes Projekt vor Augen?
            </h3>
            <p className="text-muted-grey font-body max-w-lg mx-auto mb-8">
              Egal ob Imagefilm, Drohnenaufnahmen oder Colorgrading — wir freuen uns auf den Austausch.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 group bg-champagne text-cinematic-black font-semibold uppercase tracking-wider px-8 py-4 rounded text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] shadow-lg shadow-champagne/10"
            >
              <span>Projekt starten</span>
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
    </div>
  );
}

