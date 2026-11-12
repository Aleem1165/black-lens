import React from "react";
import Link from "next/link";

interface ProjectNavigationCardProps {
  nextProject: {
    slug: string;
    title: string;
    category: string;
  };
}

export default function ProjectNavigationCard({
  nextProject,
}: ProjectNavigationCardProps) {
  return (
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
  );
}

