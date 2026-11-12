import React from "react";
import type { Metadata } from "next";
import ContactInfo from "@/components/ContactInfo";
import ContactFormSection from "@/components/ContactFormSection";

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
          <ContactInfo />
          <ContactFormSection />
        </div>
      </div>
    </div>
  );
}
