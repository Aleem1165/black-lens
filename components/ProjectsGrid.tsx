import React from "react";
import Link from "next/link";
import { sampleProjects } from "@/constants/projects";

export default function ProjectsGrid() {
  return (
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
  );
}

