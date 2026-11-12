import React from "react";
import LightboxImage from "@/components/LightboxImage";

interface ProjectGallerySectionProps {
  title: string;
  stills?: string[];
  fallbackImage: string;
}

export default function ProjectGallerySection({
  title,
  stills,
  fallbackImage,
}: ProjectGallerySectionProps) {
  const still1 = stills?.[0] || fallbackImage;
  const still2 = stills?.[1] || fallbackImage;

  return (
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
          src={still1}
          alt={`${title} — Film Still 1`}
          containerClassName="relative aspect-[16/9] rounded-lg overflow-hidden bg-charcoal border border-white/10"
        />
        <LightboxImage
          src={still2}
          alt={`${title} — Film Still 2`}
          containerClassName="relative aspect-[16/9] rounded-lg overflow-hidden bg-charcoal border border-white/10"
        />
      </div>
    </div>
  );
}

