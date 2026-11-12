import React from "react";

export default function AboutStorySection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-16 border-t border-white/10 mb-20">
      <div className="lg:col-span-5 flex flex-col justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-champagne font-semibold mb-3">
            DIE STORY
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-bold text-warm-white leading-tight">
            Vom Experiment zur filmischen Leidenschaft.
          </h2>
        </div>

        {/* Editorial quote taken directly from Timo's bio */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <blockquote className="text-lg sm:text-xl font-headline italic text-champagne/90 leading-relaxed border-l-2 border-champagne pl-4">
            &bdquo;Was mit Neugier und einfachen Videos begann, ist &uuml;ber die Jahre zu einer echten Leidenschaft gewachsen.&ldquo;
          </blockquote>
          <div className="text-xs uppercase tracking-wider text-muted-grey mt-3 pl-4">
            Timo &mdash; Gr&uuml;nder BlackLens
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 space-y-6 text-muted-grey text-base sm:text-lg leading-relaxed font-body">
        <p className="text-warm-white/95 text-lg sm:text-xl leading-relaxed">
          Ich bin Timo, 21 Jahre alt, und interessiere mich seit meiner Kindheit für das Filmemachen. Was mit Neugier und einfachen Videos begann, ist über die Jahre zu einer echten Leidenschaft gewachsen.
        </p>
        <p>
          Zunächst gründete ich <strong className="text-warm-white">BlackLabs</strong> — einen Raum für meine Hobbys, technischen Projekte und Experimente. Später entstand daraus <strong className="text-warm-white">BlackLens</strong> als eigenständige Marke für kreative Filmdienstleistungen.
        </p>
        <p>
          Heute möchte ich meine Arbeit auf das nächste Level heben. Ich lerne jeden Tag dazu und liebe es, mit meiner <strong className="text-warm-white">Sony FX3</strong> zu filmen, Videos zu schneiden und neue visuelle Ideen zu verwirklichen.
        </p>
      </div>
    </div>
  );
}

