import React from "react";
import type { Metadata } from "next";
import AboutHeroSection from "@/components/AboutHeroSection";
import AboutStorySection from "@/components/AboutStorySection";
import AboutBrandProgression from "@/components/AboutBrandProgression";
import AboutDreamQuote from "@/components/AboutDreamQuote";
import CompactCtaBanner from "@/components/CompactCtaBanner";

export const metadata: Metadata = {
  title: "Über uns | BlackLens — Filmproduktion & Drohnenaufnahmen",
  description:
    "Lernen Sie BlackLens und Timo kennen: 21 Jahre alt, Leidenschaft für die Sony FX3 und die Vision, emotionale Geschichten auf die große Leinwand zu bringen.",
};

export default function UeberUnsPage() {
  return (
    <div className="bg-cinematic-black text-warm-white min-h-screen py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <AboutHeroSection />
        <AboutStorySection />
        <AboutBrandProgression />
        <AboutDreamQuote />
        <div className="pt-12">
          <CompactCtaBanner
            headline="Bereit für das nächste gemeinsame Projekt?"
            description="Lassen Sie uns über Ihre Filmidee, Drohnenaufnahmen oder Ihr Werbeprojekt sprechen."
            buttonText="Kontakt aufnehmen"
            buttonHref="/kontakt"
          />
        </div>
      </div>
    </div>
  );
}
