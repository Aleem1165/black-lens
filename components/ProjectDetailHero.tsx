import React from "react";
import LightboxImage from "@/components/LightboxImage";

interface ProjectDetailHeroProps {
  title: string;
  category: string;
  image: string;
}

export default function ProjectDetailHero({
  title,
  category,
  image,
}: ProjectDetailHeroProps) {
  return (
    <div className="mb-16 text-center">
      {/* Centered Category with Side Hairlines */}
      <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-4 text-xs uppercase tracking-[0.25em] text-champagne font-semibold">
        <span className="w-8 sm:w-14 h-px bg-gradient-to-r from-transparent to-champagne/60" />
        <span>{category}</span>
        <span className="w-8 sm:w-14 h-px bg-gradient-to-l from-transparent to-champagne/60" />
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-headline font-bold text-warm-white tracking-tight mb-10">
        {title}
      </h1>

      <LightboxImage src={image} alt={title} />
    </div>
  );
}

