export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  stills: string[];
  description: string;
}

export const sampleProjects: Project[] = [
  {
    slug: "alpine-velocity",
    title: "Alpine Velocity",
    category: "Commercial / Drohne",
    year: "2026",
    image: "/images/alpine-velocity-drone.jpg",
    stills: [
      "/images/swiss-alps-drone.jpg",
      "/images/22188934-f632-446e-94cf-52e31996e777.avif",
    ],
    description: "Dynamische Drohnenaufnahmen und cineastische Verfolgungsfahrten in den Schweizer Alpen.",
  },
  {
    slug: "urban-pulse",
    title: "Urban Pulse",
    category: "Imagefilm / Commercial",
    year: "2026",
    image: "/images/urban-pulse-car.jpg",
    stills: [
      "/images/DSC01549.JPG",
      "/images/47134afb-9fda-46fc-a9af-5c5030fa518b.avif",
    ],
    description: "Emotionale Markengeschichte mit Fokus auf modernste Sony FX3 Optik und rhythmisches Editing.",
  },
  {
    slug: "silent-horizons",
    title: "Silent Horizons",
    category: "Aerial Cinematography",
    year: "2026",
    image: "/images/1.png00086400.jpg",
    stills: [
      "/images/1.png00086401.jpg",
      "/images/17e29a2e-c268-4e0a-bc53-198f3f30f071.avif",
    ],
    description: "Majestätische Luftaufnahmen bei Sonnenaufgang über den Bergketten von Appenzell.",
  },
  {
    slug: "craft-and-passion",
    title: "Craft & Passion",
    category: "Dokumentarfilm",
    year: "2026",
    image: "/images/2.png00086400.jpg",
    stills: [
      "/images/3.png00086400.jpg",
      "/images/4.png00086400.jpg",
    ],
    description: "Hinter den Kulissen: Ein authentischer Einblick in Handwerk, Präzision und filmische Leidenschaft.",
  },
];

