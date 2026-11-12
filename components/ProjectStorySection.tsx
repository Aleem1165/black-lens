import React from "react";

interface ProjectStorySectionProps {
  description: string;
}

export default function ProjectStorySection({
  description,
}: ProjectStorySectionProps) {
  return (
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
          {description}
        </p>
        <p>
          Ziel dieses Projekts war es, echte Emotionen und technische Perfektion zu vereinen. Jede Kamerafahrt, jede Brennweite und jedes Licht-Setting wurde präzise abgestimmt, um eine dichte Atmosphäre zu erschaffen.
        </p>
        <p>
          Die Kombination aus bodennaher Sony FX3 Führung und weitreichenden Drohnenperspektiven erzeugt einen cinematischen Spannungsbogen, der den Zuschauer von der ersten Sekunde an fesselt.
        </p>
      </div>
    </div>
  );
}

