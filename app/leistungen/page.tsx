import React from "react";
import type { Metadata } from "next";
import ProductionProcessSection from "@/components/ProductionProcessSection";
import CompactCtaBanner from "@/components/CompactCtaBanner";
import ServiceScroller from "@/components/ServiceScroller";
import ServicesHeader from "@/components/ServicesHeader";
import ServicesList from "@/components/ServicesList";

export const metadata: Metadata = {
  title: "Leistungen | BlackLens — Filmproduktion & Drohnenaufnahmen",
  description:
    "Drei filmische Disziplinen. Ein gemeinsames Ziel: Filmproduktion, Drohnenaufnahmen & Luftbild sowie Schnitt & Colorgrading.",
};

export default function LeistungenPage() {
  return (
    <div className="bg-cinematic-black text-warm-white min-h-screen py-16 px-4 sm:px-8 lg:px-12">
      <ServiceScroller />
      <div className="max-w-[1400px] mx-auto">
        <ServicesHeader />
        <ServicesList />
        <ProductionProcessSection
          eyebrow="DER WORKFLOW"
          headline="Vier Schritte zu Ihrem Film."
          className="py-16 border-t border-white/10 mb-20"
          steps={[
            { step: "01", title: "IDEE", desc: "Gemeinsames Briefing, Visual Treatment & kreative Ausrichtung." },
            { step: "02", title: "PLANUNG", desc: "Shotlist, Drehorte, Technik-Setup und zeitlicher Ablauf." },
            { step: "03", title: "DREH", desc: "Professioneller Dreh mit Sony FX3, Drohne & cineastischem Licht." },
            { step: "04", title: "SCHNITT", desc: "Rhythmus, Colorgrading, Sounddesign und finale Master-Lieferung." },
          ]}
        />
        <CompactCtaBanner
          headline="Haben Sie ein konkretes Projekt vor Augen?"
          description="Egal ob Imagefilm, Drohnenaufnahmen oder Colorgrading — wir freuen uns auf den Austausch."
          buttonText="Projekt starten"
          buttonHref="/kontakt"
        />
      </div>
    </div>
  );
}
