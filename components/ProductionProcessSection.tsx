import React from "react";

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface ProductionProcessSectionProps {
  eyebrow?: string;
  headline?: string;
  steps?: ProcessStep[];
  className?: string;
}

const defaultSteps: ProcessStep[] = [
  { step: "01", title: "IDEE", desc: "Brainstorming, Konzeptentwicklung, Bildkomposition und kreatives Treatment." },
  { step: "02", title: "PLANUNG", desc: "Storyboarding, Shotlists, Drehort-Scouting, Vorbereitung der Technik und Zeitplan." },
  { step: "03", title: "DREH", desc: "Regie, Kinematographie mit Sony FX3, Drohnenflüge, gezieltes Licht und Ton." },
  { step: "04", title: "SCHNITT", desc: "Schnittrhythmus, Colorgrading, Sounddesign, Soundscapes und finale Master-Lieferung." },
];

export default function ProductionProcessSection({
  eyebrow = "DER PROZESS",
  headline = "Idee • Planung • Dreh • Schnitt",
  steps = defaultSteps,
  className = "py-20 px-4 sm:px-8 lg:px-12 border-t border-white/5",
}: ProductionProcessSectionProps) {
  return (
    <section className={className}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold mb-3">
            {eyebrow}
          </div>
          <h2 className="text-3xl sm:text-5xl font-headline font-bold text-warm-white">
            {headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((p, idx) => (
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
  );
}
