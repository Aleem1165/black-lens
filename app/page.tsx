import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesOverviewSection from "@/components/ServicesOverviewSection";
import FeaturedPortfolioSection from "@/components/FeaturedPortfolioSection";
import AboutTimoSnippetSection from "@/components/AboutTimoSnippetSection";
import ProductionProcessSection from "@/components/ProductionProcessSection";
import ClosingCtaSection from "@/components/ClosingCtaSection";

export const metadata: Metadata = {
  title: "BlackLens — Geschichten, die man fühlt | Filmproduktion & Drohnenaufnahmen",
  description:
    "Filmproduktion, Drohnenaufnahmen und Schnitt in der Schweiz — mit Leidenschaft für jedes Detail. Speicherschwendi, Schweiz.",
};

export default function HomePage() {
  return (
    <div className="bg-cinematic-black text-warm-white">
      <HeroSection />
      <ServicesOverviewSection />
      <FeaturedPortfolioSection />
      <AboutTimoSnippetSection />
      <ProductionProcessSection />
      <ClosingCtaSection />
    </div>
  );
}
