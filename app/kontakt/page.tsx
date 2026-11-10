import React from "react";
import type { Metadata } from "next";
import ContactFormPage from "@/components/ContactFormPage";

export const metadata: Metadata = {
  title: "Kontakt | BlackLens — Filmproduktion & Drohnenaufnahmen",
  description:
    "Lass uns etwas schaffen. Ein direkter Weg vom Interesse zur Anfrage. Filmproduktion, Drohnenaufnahmen und Schnitt in der Schweiz.",
};

export default function KontaktPage() {
  return (
    <div className="bg-cinematic-black text-warm-white py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct studio channels from Slide 16 & 17 */}
          <div className="lg:col-span-5">
            <div className="mb-10">
              <h1 className="text-4xl sm:text-6xl font-bold font-headline tracking-tight leading-none mb-6">
                LASS UNS<br />
                <span className="text-champagne">ETWAS SCHAFFEN.</span>
              </h1>
              <p className="text-lg text-muted-grey font-body leading-relaxed">
                Kontakt: Einfach &amp; persönlich. Ein direkter Weg vom Interesse zur Anfrage. Lassen Sie uns gemeinsam etwas Einzigartiges erschaffen.
              </p>
            </div>

            {/* Direct Info List */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-charcoal border border-white/10 flex items-center justify-center text-champagne text-base">
                  ✉
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-grey">E-Mail</div>
                  <a href="mailto:office@blacklabs.ch" className="text-warm-white text-base font-medium hover:text-champagne transition-colors">
                    office@blacklabs.ch
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-charcoal border border-white/10 flex items-center justify-center text-champagne text-base">
                  ☎
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-grey">Telefon</div>
                  <a href="tel:+41797267456" className="text-warm-white text-base font-medium hover:text-champagne transition-colors">
                    +41 79 726 74 56
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-charcoal border border-white/10 flex items-center justify-center text-champagne text-base">
                  ◎
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-grey">Instagram</div>
                  <a
                    href="https://instagram.com/BlackLens.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-warm-white text-base font-medium hover:text-champagne transition-colors"
                  >
                    @BlackLens.ch
                  </a>
                </div>
              </div>

              {/* Studio Location (Slide 17) */}
              <div className="flex items-start gap-4 pt-2">
                <div className="w-10 h-10 rounded-full bg-charcoal border border-white/10 flex items-center justify-center text-champagne text-base">
                  📍
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-grey">Studio</div>
                  <div className="text-warm-white text-sm leading-relaxed mt-1">
                    Rickstrasse 6<br />
                    9037 Speicherschwendi<br />
                    Schweiz
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (Charcoal #17191C Card) */}
          <div className="lg:col-span-7 bg-charcoal p-8 sm:p-12 rounded-xl border border-white/10">
            <h2 className="text-2xl font-headline font-semibold text-warm-white mb-2">
              Projekt starten
            </h2>
            <p className="text-sm text-muted-grey mb-8 font-body">
              Füllen Sie das Formular aus und wir melden uns zeitnah mit ersten Ideen und nächsten Schritten.
            </p>

            <ContactFormPage />
          </div>

        </div>
      </div>
    </div>
  );
}
