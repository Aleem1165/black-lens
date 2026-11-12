import React from "react";
import Link from "next/link";

export interface ServiceItem {
  id: string;
  number: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
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

export default function ServicesList() {
  return (
    <div className="space-y-12 mb-24">
      {SERVICES_DATA.map((service) => (
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
  );
}

