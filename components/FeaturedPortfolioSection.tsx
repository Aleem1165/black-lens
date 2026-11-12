import React from "react";
import Link from "next/link";

export const featuredProjects = [
  {
    slug: "alpine-velocity",
    title: "Alpine Velocity",
    category: "Commercial / Drohne",
    year: "2026",
    image: "/images/alpine-velocity-drone.jpg",
    description: "Dynamische Drohnenaufnahmen und cineastische Verfolgungsfahrten in den Schweizer Alpen.",
  },
  {
    slug: "urban-pulse",
    title: "Urban Pulse",
    category: "Imagefilm / Commercial",
    year: "2026",
    image: "/images/urban-pulse-car.jpg",
    description: "Emotionale Markengeschichte mit Fokus auf modernste Sony FX3 Optik und rhythmisches Editing.",
  },
  {
    slug: "silent-horizons",
    title: "Silent Horizons",
    category: "Aerial Cinematography",
    year: "2026",
    image: "/images/1.png00086400.jpg",
    description: "Majestätische Luftaufnahmen bei Sonnenaufgang über den Bergketten von Appenzell.",
  },
  {
    slug: "craft-and-passion",
    title: "Craft & Passion",
    category: "Dokumentarfilm",
    year: "2026",
    image: "/images/2.png00086400.jpg",
    description: "Hinter den Kulissen: Ein authentischer Einblick in Handwerk, Präzision und filmische Leidenschaft.",
  },
];

export default function FeaturedPortfolioSection() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-12 border-t border-white/5 bg-cinematic-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold mb-2">
              PORTFOLIO
            </div>
            <h2 className="text-3xl sm:text-5xl font-headline font-bold text-warm-white">
              Bilder, die im Gedächtnis bleiben.
            </h2>
          </div>
          <Link
            href="/projekte"
            className="text-xs uppercase tracking-wider text-muted-grey hover:text-champagne transition-colors flex items-center gap-2"
          >
            Alle Arbeiten ansehen <span>&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projekte/${project.slug}`}
              className="group block bg-charcoal border border-white/10 rounded-xl overflow-hidden hover-zoom-cinematic"
            >
              {/* 1.035 Hover Zoom thumbnail (Slide 18) */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-cinematic-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                />
              </div>

              <div className="p-6 sm:p-8 relative overflow-hidden">
                {/* Subtle Category Watermark on Right Side */}
                <div
                  aria-hidden="true"
                  className="absolute top-2 right-4 text-xl sm:text-2xl lg:text-3xl font-headline font-black text-white/[0.05] group-hover:text-champagne/15 transition-colors duration-300 select-none pointer-events-none tracking-wider uppercase max-w-[70%] text-right truncate"
                >
                  {project.category}
                </div>

                <div className="relative z-10 pt-4 sm:pt-5">
                  <h3 className="text-2xl font-headline font-bold text-warm-white group-hover:text-champagne transition-colors mb-2">
                    {project.title}
                  </h3>
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
      </div>
    </section>
  );
}
