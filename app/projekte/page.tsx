import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekte | BlackLens — Filmproduktion & Drohnenaufnahmen",
  description:
    "Ausgewählte Arbeiten, Werbefilme, Luftaufnahmen und cineastische Projekte von BlackLens.",
};

export const sampleProjects = [
  {
    slug: "alpine-velocity",
    title: "Alpine Velocity",
    category: "Commercial / Drohne",
    year: "2026",
    image: "/images/alpine-velocity-drone.jpg",
    stills: [
      "/images/swiss-alps-drone.jpg",
      "/images/22188934-f632-446e-94cf-52e31996e777.avif",
    ],
    description: "Dynamische Drohnenaufnahmen und cineastische Verfolgungsfahrten in den Schweizer Alpen.",
  },
  {
    slug: "urban-pulse",
    title: "Urban Pulse",
    category: "Imagefilm / Commercial",
    year: "2026",
    image: "/images/urban-pulse-car.jpg",
    stills: [
      "/images/DSC01549.JPG",
      "/images/47134afb-9fda-46fc-a9af-5c5030fa518b.avif",
    ],
    description: "Emotionale Markengeschichte mit Fokus auf modernste Sony FX3 Optik und rhythmisches Editing.",
  },
  {
    slug: "silent-horizons",
    title: "Silent Horizons",
    category: "Aerial Cinematography",
    year: "2026",
    image: "/images/1.png00086400.jpg",
    stills: [
      "/images/1.png00086401.jpg",
      "/images/17e29a2e-c268-4e0a-bc53-198f3f30f071.avif",
    ],
    description: "Majestätische Luftaufnahmen bei Sonnenaufgang über den Bergketten von Appenzell.",
  },
  {
    slug: "craft-and-passion",
    title: "Craft & Passion",
    category: "Dokumentarfilm",
    year: "2026",
    image: "/images/2.png00086400.jpg",
    stills: [
      "/images/3.png00086400.jpg",
      "/images/4.png00086400.jpg",
    ],
    description: "Hinter den Kulissen: Ein authentischer Einblick in Handwerk, Präzision und filmische Leidenschaft.",
  },
];

export default function ProjektePage() {
  return (
    <div className="bg-cinematic-black text-warm-white min-h-screen py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Page Header (Slide 14 & 15) */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold font-headline tracking-tight leading-none mb-6">
            PROJEKTE &amp; PORTFOLIO.<br />
            <span className="text-champagne">BILDER, DIE FÜR SICH SPRECHEN.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-grey font-body leading-relaxed">
            Eine kuratierte Auswahl an kommerziellen Produktionen, dynamischen Drohnenflügen und cineastischen Momenten.
          </p>
        </div>

        {/* Projects Grid (Slide 15 & 18) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-24">
          {sampleProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projekte/${project.slug}`}
              className="group block bg-charcoal border border-white/10 rounded-xl overflow-hidden hover-zoom-cinematic"
            >
              {/* Thumbnail with exact 1.035 hover zoom container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-cinematic-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                />
              </div>

              {/* Card Meta */}
              <div className="p-6 sm:p-8 relative overflow-hidden">
                {/* Subtle Category Watermark on Right Side */}
                <div
                  aria-hidden="true"
                  className="absolute top-2 right-4 text-xl sm:text-2xl lg:text-3xl font-headline font-black text-white/[0.05] group-hover:text-champagne/15 transition-colors duration-300 select-none pointer-events-none tracking-wider uppercase max-w-[70%] text-right truncate"
                >
                  {project.category}
                </div>

                <div className="relative z-10 pt-4 sm:pt-5">
                  <h2 className="text-2xl font-headline font-bold text-warm-white group-hover:text-champagne transition-colors mb-3">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-grey font-body leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-warm-white font-medium group-hover:translate-x-1 transition-transform">
                    <span>Projekt ansehen</span>
                    <span className="text-champagne">&rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="relative overflow-hidden w-fit max-w-full mx-auto bg-gradient-to-br from-charcoal/55 via-charcoal/45 to-cinematic-black/60 backdrop-blur-2xl rounded-2xl sm:rounded-3xl px-8 sm:px-14 py-8 sm:py-12 text-center shadow-2xl shadow-black/70">
          {/* Subtle Ambient Radial Highlight in Top-Right (Proportionate for smaller card) */}
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-16 w-48 h-48 bg-champagne/[0.035] rounded-full blur-2xl pointer-events-none"
          />

          <div className="relative z-10">
            {/* Top Badge Tag */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne font-semibold mb-4">
              <span className="w-6 h-px bg-champagne/60" />
              <span>KONTAKT</span>
              <span className="w-6 h-px bg-champagne/60" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-headline font-bold text-warm-white mb-4">
              Möchten Sie Ihr Projekt mit uns realisieren?
            </h3>
            <p className="text-muted-grey font-body max-w-lg mx-auto mb-8">
              Lassen Sie uns Ihre Ideen in bewegte, berührende Bilder verwandeln.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 group bg-champagne text-cinematic-black font-semibold uppercase tracking-wider px-8 py-4 rounded text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] shadow-lg shadow-champagne/10"
            >
              <span>Projekt anfragen</span>
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

