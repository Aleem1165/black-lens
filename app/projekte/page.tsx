import React from "react";
import type { Metadata } from "next";
import CompactCtaBanner from "@/components/CompactCtaBanner";
import ProjectsHeader from "@/components/ProjectsHeader";
import ProjectsGrid from "@/components/ProjectsGrid";

export { sampleProjects } from "@/constants/projects";

export const metadata: Metadata = {
  title: "Projekte | BlackLens — Filmproduktion & Drohnenaufnahmen",
  description:
    "Ausgewählte Arbeiten, Werbefilme, Luftaufnahmen und cineastische Projekte von BlackLens.",
};

export default function ProjektePage() {
  return (
    <div className="bg-cinematic-black text-warm-white min-h-screen py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <ProjectsHeader />
        <ProjectsGrid />
        <CompactCtaBanner
          headline="Möchten Sie Ihr Projekt mit uns realisieren?"
          description="Lassen Sie uns Ihre Ideen in bewegte, berührende Bilder verwandeln."
          buttonText="Projekt anfragen"
          buttonHref="/kontakt"
        />
      </div>
    </div>
  );
}
