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
      {/* 1. HERO SECTION: The First Impression (Slide 08 & 09) */}
      <HeroSection />

      {/* 2. SERVICES OVERVIEW SECTION (Slide 10 & 14) */}
      <ServicesOverviewSection />

      {/* 3. FEATURED PORTFOLIO SECTION (Slide 10 & 15) */}
      <FeaturedPortfolioSection />

      {/* 4. ABOUT TIMO SNIPPET (Slide 10, 11 & 12) */}
      <AboutTimoSnippetSection />

      {/* 5. PRODUCTION PROCESS (Slide 10 in German) */}
      <ProductionProcessSection />

      {/* 6. CLOSING CTA BANNER: DESIGN 1 — SPLIT-SCREEN EDITORIAL STUDIO */}
      <ClosingCtaSection />
    </div>
  );
}
