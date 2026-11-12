import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import HeroEyebrow from "@/components/HeroEyebrow";

export const metadata: Metadata = {
  title: "BlackLens — Geschichten, die man fühlt | Filmproduktion & Drohnenaufnahmen",
  description:
    "Filmproduktion, Drohnenaufnahmen und Schnitt in der Schweiz — mit Leidenschaft für jedes Detail. Speicherschwendi, Schweiz.",
};

const featuredProjects = [
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

export default function HomePage() {
  return (
    <div className="bg-cinematic-black text-warm-white">

      {/* 1. HERO SECTION: The First Impression (Slide 08 & 09) */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center px-4 sm:px-8 lg:px-12 overflow-hidden">
        {/* Background Film Still with Cinematic Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/swiss-alps-drone.jpg"
            alt="Cineastische Alpen-Luftaufnahme Hintergrund"
            className="w-full h-full object-cover opacity-35 scale-100 hover-zoom-cinematic transition-transform duration-[12s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-cinematic-black/60 to-cinematic-black/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center py-16 sm:py-24">
          {/* Animated Typing & Gliding Eyebrow */}
          <HeroEyebrow />

          {/* Main Headline: "Stories You Can Feel" in German */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold font-headline tracking-tight leading-[0.95] mb-6">
            GESCHICHTEN,<br />
            <span className="text-champagne">DIE MAN FÜHLT.</span>
          </h1>

          {/* Slogan & Tagline in German */}
          <p className="text-base sm:text-xl md:text-2xl text-muted-grey font-body max-w-2xl mx-auto leading-relaxed mb-10">
            Filmproduktion, Drohnenaufnahmen und Schnitt &mdash; mit Leidenschaft für jedes Detail.
          </p>

          {/* Primary CTAs in German */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 group bg-champagne text-cinematic-black font-semibold uppercase tracking-wider px-8 py-4 rounded text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]"
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
            <Link
              href="/projekte"
              className="w-full sm:w-auto border border-white/20 text-warm-white font-medium uppercase tracking-wider px-8 py-4 rounded text-sm hover:border-white/50 transition-colors"
            >
              Arbeiten ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW SECTION (Slide 10 & 14) */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold mb-2">
                LEISTUNGEN
              </div>
              <h2 className="text-3xl sm:text-5xl font-headline font-bold text-warm-white">
                Drei Disziplinen. Ein gemeinsames Ziel.
              </h2>
            </div>
            <Link
              href="/leistungen"
              className="text-xs uppercase tracking-wider text-muted-grey hover:text-champagne transition-colors flex items-center gap-2"
            >
              Alle Leistungen ansehen <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Discipline 1: Filmproduktion (Slide 14) */}
            <div className="group relative overflow-hidden bg-charcoal border border-white/10 rounded-xl p-8 hover-zoom-cinematic flex flex-col justify-between hover:border-champagne/30 transition-colors">
              <Link
                href="/leistungen#filmproduktion"
                className="absolute inset-0 z-0"
                aria-label="Mehr erfahren über Filmproduktion"
              >
                <span className="sr-only">Mehr erfahren über Filmproduktion</span>
              </Link>

              {/* Large Cinematic Watermark Number */}
              <div
                aria-hidden="true"
                className="absolute top-3 right-6 text-7xl font-headline font-black text-white/[0.05] group-hover:text-champagne/15 transition-colors select-none pointer-events-none"
              >
                01
              </div>

              <div className="relative z-10 pointer-events-none">
                <h3 className="text-2xl font-headline font-bold text-warm-white group-hover:text-champagne transition-colors mb-4 pt-2">
                  FILMPRODUKTION
                </h3>
                <p className="text-sm text-muted-grey font-body leading-relaxed mb-6">
                  Kreative Kinematographie, Bildkomposition, Bewegung und visuelles Storytelling mit modernster Technik (Sony FX3).
                </p>
              </div>
              <Link
                href="/leistungen#filmproduktion"
                className="relative z-10 text-xs uppercase tracking-wider text-champagne font-semibold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform w-fit"
              >
                <span>Mehr erfahren</span>
                <span>&rarr;</span>
              </Link>
            </div>

            {/* Discipline 2: Drohnenaufnahmen (Slide 14) */}
            <div className="group relative overflow-hidden bg-charcoal border border-white/10 rounded-xl p-8 hover-zoom-cinematic flex flex-col justify-between hover:border-champagne/30 transition-colors">
              <Link
                href="/leistungen#drohnenaufnahmen"
                className="absolute inset-0 z-0"
                aria-label="Mehr erfahren über Aerial Cinematography"
              >
                <span className="sr-only">Mehr erfahren über Aerial Cinematography</span>
              </Link>

              {/* Large Cinematic Watermark Number */}
              <div
                aria-hidden="true"
                className="absolute top-3 right-6 text-7xl font-headline font-black text-white/[0.05] group-hover:text-champagne/15 transition-colors select-none pointer-events-none"
              >
                02
              </div>

              <div className="relative z-10 pointer-events-none">
                <h3 className="text-2xl font-headline font-bold text-warm-white group-hover:text-champagne transition-colors mb-4 pt-2">
                  AERIAL CINEMATOGRAPHY
                </h3>
                <p className="text-sm text-muted-grey font-body leading-relaxed mb-6">
                  Frische Perspektiven, Landschaften und dynamische Drohnenaufnahmen &mdash; unter Einhaltung aller gesetzlichen Vorgaben.
                </p>
              </div>
              <Link
                href="/leistungen#drohnenaufnahmen"
                className="relative z-10 text-xs uppercase tracking-wider text-champagne font-semibold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform w-fit"
              >
                <span>Mehr erfahren</span>
                <span>&rarr;</span>
              </Link>
            </div>

            {/* Discipline 3: Schnitt & Color (Slide 14) */}
            <div className="group relative overflow-hidden bg-charcoal border border-white/10 rounded-xl p-8 hover-zoom-cinematic flex flex-col justify-between hover:border-champagne/30 transition-colors">
              <Link
                href="/leistungen#schnitt-color"
                className="absolute inset-0 z-0"
                aria-label="Mehr erfahren über Schnitt & Color"
              >
                <span className="sr-only">Mehr erfahren über Schnitt & Color</span>
              </Link>

              {/* Large Cinematic Watermark Number */}
              <div
                aria-hidden="true"
                className="absolute top-3 right-6 text-7xl font-headline font-black text-white/[0.05] group-hover:text-champagne/15 transition-colors select-none pointer-events-none"
              >
                03
              </div>

              <div className="relative z-10 pointer-events-none">
                <h3 className="text-2xl font-headline font-bold text-warm-white group-hover:text-champagne transition-colors mb-4 pt-2">
                  SCHNITT &amp; COLOR
                </h3>
                <p className="text-sm text-muted-grey font-body leading-relaxed mb-6">
                  Rhythmus, Sounddesign, Bildsprache und Farbe verschmelzen zu einer fesselnden Geschichte mit individuellem Look.
                </p>
              </div>
              <Link
                href="/leistungen#schnitt-color"
                className="relative z-10 text-xs uppercase tracking-wider text-champagne font-semibold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform w-fit"
              >
                <span>Mehr erfahren</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PORTFOLIO SECTION (Slide 10 & 15) */}
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

      {/* 4. ABOUT TIMO SNIPPET (Slide 10, 11 & 12) */}
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

      {/* 5. PRODUCTION PROCESS (Slide 10 in German) */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold mb-3">
              DER PROZESS
            </div>
            <h2 className="text-3xl sm:text-5xl font-headline font-bold text-warm-white">
              Idee &bull; Planung &bull; Dreh &bull; Schnitt
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "IDEE", desc: "Brainstorming, Konzeptentwicklung, Bildkomposition und kreatives Treatment." },
              { step: "02", title: "PLANUNG", desc: "Storyboarding, Shotlists, Drehort-Scouting, Vorbereitung der Technik und Zeitplan." },
              { step: "03", title: "DREH", desc: "Regie, Kinematographie mit Sony FX3, Drohnenflüge, gezieltes Licht und Ton." },
              { step: "04", title: "SCHNITT", desc: "Schnittrhythmus, Colorgrading, Sounddesign, Soundscapes und finale Master-Lieferung." },
            ].map((p, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden bg-charcoal border border-white/10 rounded-xl p-8 hover-zoom-cinematic hover:border-champagne/30 transition-all flex flex-col justify-between"
              >
                {/* Large Cinematic Watermark Number */}
                <div
                  aria-hidden="true"
                  className="absolute top-3 right-6 text-7xl font-headline font-black text-white/[0.05] group-hover:text-champagne/15 transition-colors select-none pointer-events-none"
                >
                  {p.step}
                </div>

                <div className="relative z-10">
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
      </section>

      {/* 6. CLOSING CTA BANNER: DESIGN 1 — SPLIT-SCREEN EDITORIAL STUDIO */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto relative overflow-hidden bg-gradient-to-br from-charcoal via-charcoal/90 to-cinematic-black border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16">
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

              <div className="flex justify-end">
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

            {/* Right Column: Direct Channels Interactive Cards */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {/* Email Card */}
              <a
                href="mailto:office@blacklabs.ch"
                className="group flex items-center gap-4 p-4 rounded-xl bg-cinematic-black/50 border border-white/5 hover:border-champagne/40 hover:bg-cinematic-black/80 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center text-champagne/80 group-hover:text-champagne group-hover:scale-110 group-hover:bg-champagne/10 transition-all shrink-0">
                  <svg
                    className="w-5 h-5 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] uppercase tracking-wider text-muted-grey/60 font-semibold mb-0.5">
                    Direkter E-Mail-Kontakt
                  </div>
                  <div className="text-sm sm:text-base text-warm-white font-medium group-hover:text-champagne transition-colors truncate">
                    office@blacklabs.ch
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+41797267456"
                className="group flex items-center gap-4 p-4 rounded-xl bg-cinematic-black/50 border border-white/5 hover:border-champagne/40 hover:bg-cinematic-black/80 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center text-champagne/80 group-hover:text-champagne group-hover:scale-110 group-hover:bg-champagne/10 transition-all shrink-0">
                  <svg
                    className="w-5 h-5 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] uppercase tracking-wider text-muted-grey/60 font-semibold mb-0.5">
                    Telefon / WhatsApp
                  </div>
                  <div className="text-sm sm:text-base text-warm-white font-medium group-hover:text-champagne transition-colors truncate">
                    +41 79 726 74 56
                  </div>
                </div>
              </a>

              {/* Address Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-cinematic-black/50 border border-white/5">
                <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-center text-champagne/80 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] uppercase tracking-wider text-muted-grey/60 font-semibold mb-0.5">
                    Studio Standort
                  </div>
                  <div className="text-sm sm:text-base text-warm-white font-medium truncate">
                    Rickstrasse 6, 9037 Speicherschwendi
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
