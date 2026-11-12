import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { sampleProjects } from "@/constants/projects";
import CompactCtaBanner from "@/components/CompactCtaBanner";
import ProjectDetailHero from "@/components/ProjectDetailHero";
import ProjectStorySection from "@/components/ProjectStorySection";
import ProjectGallerySection from "@/components/ProjectGallerySection";
import ProjectNavigationCard from "@/components/ProjectNavigationCard";

export async function generateStaticParams() {
  return sampleProjects.map((p) => ({
    slug: p.slug,
  }));
}

export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = sampleProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Projekt | BlackLens" };

  return {
    title: `${project.title} | BlackLens — Filmproduktion`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  return (
    <Suspense fallback={<div className="bg-cinematic-black min-h-screen" />}>
      <ProjectDetailContent params={params} />
    </Suspense>
  );
}

async function ProjectDetailContent({ params }: Props) {
  const { slug } = await params;
  const projectIndex = sampleProjects.findIndex((p) => p.slug === slug);
  const project = sampleProjects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = sampleProjects[(projectIndex + 1) % sampleProjects.length];

  return (
    <div className="bg-cinematic-black text-warm-white min-h-screen py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <ProjectDetailHero
          title={project.title}
          category={project.category}
          image={project.image}
        />
        <ProjectStorySection description={project.description} />
        <ProjectGallerySection
          title={project.title}
          stills={project.stills}
          fallbackImage={project.image}
        />
        <ProjectNavigationCard nextProject={nextProject} />
        <div className="pt-8">
          <CompactCtaBanner
            headline="Gefällt Ihnen dieser Stil?"
            description="Lassen Sie uns ein ähnliches filmisches Erlebnis für Ihre Marke erschaffen."
            buttonText="Projekt starten"
            buttonHref="/kontakt"
          />
        </div>
      </div>
    </div>
  );
}
