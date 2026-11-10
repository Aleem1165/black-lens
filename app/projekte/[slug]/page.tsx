import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { sampleProjects } from "../page";
import LightboxImage from "@/components/LightboxImage";

export async function generateStaticParams() {
  return sampleProjects.map((p) => ({
    slug: p.slug,
  }));
}

export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = sampleProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Projekt | BlackLens" };

  return {
    title: `${project.title} | BlackLens — Filmproduktion`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  return (
    <Suspense fallback={<div className="bg-cinematic-black min-h-screen" />}>
      <ProjectDetailContent params={params} />
    </Suspense>
  );
}

async function ProjectDetailContent({ params }: Props) {
  const { slug } = await params;
  const projectIndex = sampleProjects.findIndex((p) => p.slug === slug);
  const project = sampleProjects[projectIndex];

  if (!project) {
    notFound();
  }

  // Next project logic
  const nextProject = sampleProjects[(projectIndex + 1) % sampleProjects.length];

  return (
    <div className="bg-cinematic-black text-warm-white min-h-screen py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        
        {/* BLOCK 1: Large Hero Image & Header (Slide 16) */}
        <div className="mb-16 text-center">
          {/* Centered Category with Side Hairlines (Same as Home style) */}
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-4 text-xs uppercase tracking-[0.25em] text-champagne font-semibold">
            <span className="w-8 sm:w-14 h-px bg-gradient-to-r from-transparent to-champagne/60" />
            <span>{project.category}</span>
            <span className="w-8 sm:w-14 h-px bg-gradient-to-l from-transparent to-champagne/60" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-headline font-bold text-warm-white tracking-tight mb-10">
            {project.title}
          </h1>

          <LightboxImage
            src={project.image}
            alt={project.title}
          />
        </div>

        {/* BLOCK 2: The Story & Creative Concept (Slide 16) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 border-t border-white/10 mb-16">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-widest text-champagne font-semibold mb-2">
              DAS KONZEPT &amp; DIE STORY
            </div>
            <h2 className="text-2xl font-headline font-bold text-warm-white mb-6">
              Visuelle Identität &amp; Herangehensweise
            </h2>

            <div className="space-y-3 text-xs uppercase tracking-wider text-muted-grey">
              <div><strong className="text-warm-white">Kunde:</strong> Independent Production</div>
              <div><strong className="text-warm-white">Kamera:</strong> Sony FX3 Cinema Line</div>
              <div><strong className="text-warm-white">Drohne:</strong> DJI Pro Series</div>
              <div><strong className="text-warm-white">Color:</strong> S-Log3 / Custom LUT</div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-muted-grey text-base sm:text-lg leading-relaxed font-body">
            <p>
              {project.description}
            </p>
            <p>
              Ziel dieses Projekts war es, echte Emotionen und technische Perfektion zu vereinen. Jede Kamerafahrt, jede Brennweite und jedes Licht-Setting wurde präzise abgestimmt, um eine dichte Atmosphäre zu erschaffen.
            </p>
            <p>
              Die Kombination aus bodennaher Sony FX3 Führung und weitreichenden Drohnenperspektiven erzeugt einen cinematischen Spannungsbogen, der den Zuschauer von der ersten Sekunde an fesselt.
            </p>
          </div>
        </div>

        {/* BLOCK 3: Video Player / Visual Gallery Showcase (Slide 16) */}
        <div className="py-12 border-t border-white/10 mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="text-xs uppercase tracking-[0.2em] text-champagne font-semibold mb-2">
              EINDRÜCKE &amp; STILLS
            </div>
            <h3 className="text-2xl sm:text-3xl font-headline font-bold text-warm-white">
              Cineastische Momentaufnahmen
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <LightboxImage
              src={project.stills?.[0] || project.image}
              alt={`${project.title} — Film Still 1`}
              containerClassName="relative aspect-[16/9] rounded-lg overflow-hidden bg-charcoal border border-white/10"
            />
            <LightboxImage
              src={project.stills?.[1] || project.image}
              alt={`${project.title} — Film Still 2`}
              containerClassName="relative aspect-[16/9] rounded-lg overflow-hidden bg-charcoal border border-white/10"
            />
          </div>
        </div>

        {/* BLOCK 4: Keep Exploring & Navigation (Slide 16) */}
        <div className="bg-charcoal border border-white/10 rounded-xl p-8 sm:p-12 mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-grey mb-1">
                NÄCHSTES PROJEKT
              </div>
              <h4 className="text-2xl font-headline font-bold text-warm-white">
                {nextProject.title}
              </h4>
              <p className="text-sm text-champagne">{nextProject.category}</p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href={`/projekte/${nextProject.slug}`}
                className="inline-flex items-center gap-2 group bg-champagne text-cinematic-black font-semibold uppercase tracking-wider px-6 py-3 rounded text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]"
              >
                <span>Weiter</span>
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

        {/* Final CTA */}
        <div className="text-center py-12 border-t border-white/10">
          <h3 className="text-xl sm:text-2xl font-headline font-bold text-warm-white mb-3">
            Gefällt Ihnen dieser Stil?
          </h3>
          <p className="text-muted-grey font-body text-sm max-w-md mx-auto mb-6">
            Lassen Sie uns ein ähnliches filmisches Erlebnis für Ihre Marke erschaffen.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 group bg-champagne text-cinematic-black font-semibold uppercase tracking-wider px-6 py-3 rounded text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]"
          >
            <span>Projekt starten</span>
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
  );
}
