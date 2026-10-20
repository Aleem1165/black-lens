import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialSlider from "@/components/TestimonialSlider";

export const metadata: Metadata = {
  title: "Über BlackLens - Cinematic Filmmaking & Aerial Production",
  description:
    "Lernen Sie BlackLens kennen: Ihr Partner für Filmproduktion mit Fokus auf Sony FX3, DJI Drohnen und hochklassigem Storytelling.",
  openGraph: {
    title: "Über BlackLens",
    description:
      "Entdecken Sie die Welt von BlackLens - cineastische Filmproduktion und Drohnenaufnahmen mit modernster Technik.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Über BlackLens",
    description:
      "Entdecken Sie die Welt von BlackLens - cineastische Filmproduktion und Drohnenaufnahmen mit modernster Technik.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Header Section */}
      <header className="section">
        <div className="container">
          <div className="w-layout-grid grid_5-col gap-small">
            <div
              id="w-node-_73756870-a609-d675-3d98-a6465922d099-b1f84ccf"
              className="grid-item-manual w-node-_2e3b282a-4778-0448-481c-4ad408cd82b1-37623da3"
            >
              <div className="header margin-bottom_none height_100percent">
                <h1 className="heading_hero">Über uns. Filmisch. Minimal.</h1>
                <div className="margin_top-auto">
                  <div className="rich-text subheading w-richtext">
                    <p>Cinematic Storytelling. Technik trifft Vision.</p>
                  </div>
                  <div className="button-group">
                    <div className="ix-link-wrapper">
                      <Link href="#galerie" className="button w-button">
                        Team ansehen
                      </Link>
                    </div>
                    <div className="ix-link-wrapper">
                      <Link href="/kontakt" className="button is-secondary w-button">
                        Kontakt
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="w-node-_76a9863c-a16d-5581-6a5d-4c8d3154dc21-b1f84ccf"
              className="grid-item-manual w-node-_2e3b282a-4778-0448-481c-4ad408cd82b9-37623da3"
            >
              <div className="w-layout-grid grid_5-col is-y-top gap-small">
                <div
                  id="w-node-_11c5c04d-ee20-667b-1497-61c956f08f1d-b1f84ccf"
                  className="grid-item-manual w-node-_2e3b282a-4778-0448-481c-4ad408cd82b4-37623da3"
                >
                  <div className="image-ratio_2x3">
                    <img
                      width={1216}
                      height={832}
                      alt="team member explaining a conservation project"
                      src="/images/a0b7615f-d376-4dfb-903a-37987771d3a4.avif"
                      loading="lazy"
                      srcSet="/images/a0b7615f-d376-4dfb-903a-37987771d3a4-p-500.avif 500w, /images/a0b7615f-d376-4dfb-903a-37987771d3a4-p-800.avif 800w, /images/a0b7615f-d376-4dfb-903a-37987771d3a4-p-1080.avif 1080w, /images/a0b7615f-d376-4dfb-903a-37987771d3a4.avif 1216w"
                      sizes="(max-width: 767px) 23vw, (max-width: 5066px) 24vw, 1216px"
                      className="image_cover"
                    />
                  </div>
                </div>
                <div
                  id="w-node-_2373145a-4469-65f6-395c-6f4229c5e246-b1f84ccf"
                  className="grid-item-manual w-node-_2e3b282a-4778-0448-481c-4ad408cd82b7-37623da3"
                >
                  <div className="image-ratio_1x1">
                    <img
                      width={1216}
                      height={832}
                      alt="behind the scenes filming"
                      src="/images/47134afb-9fda-46fc-a9af-5c5030fa518b.avif"
                      loading="lazy"
                      srcSet="/images/47134afb-9fda-46fc-a9af-5c5030fa518b-p-500.avif 500w, /images/47134afb-9fda-46fc-a9af-5c5030fa518b-p-800.avif 800w, /images/47134afb-9fda-46fc-a9af-5c5030fa518b-p-1080.avif 1080w, /images/47134afb-9fda-46fc-a9af-5c5030fa518b.avif 1216w"
                      sizes="(max-width: 767px) 23vw, (max-width: 5066px) 24vw, 1216px"
                      className="image_cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Bento Grid Section */}
      <section className="section is-secondary">
        <div className="container">
          <div className="header is-align-center">
            <h2 className="heading_primary">Minimalismus trifft Filmkunst</h2>
            <div className="subheading w-richtext">
              <p>Reduziert. Zeitlos. Präzise. Wir gestalten visuelle Erlebnisse mit Fokus auf Ästhetik und Klarheit.</p>
            </div>
          </div>

          <div data-wf="bento-full" className="grid_4-col gap-xsmall">
            <div className="grid-item-manual">
              <div className="card height_100percent on-secondary">
                <div className="card_body_small">
                  <div className="eyebrow">Mission</div>
                  <h3>Filmisch. Modern. Pur.</h3>
                  <div className="w-richtext">
                    <p>Visuelle Statements. Klare Linien. Premium-Qualität.</p>
                  </div>
                  <div className="margin_top-auto">
                    <div className="button-group">
                      <Link href="/kontakt" className="text-button is-secondary w-inline-block">
                        <div>Mehr</div>
                        <div className="button_icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none">
                            <path d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-item-manual">
              <div className="card height_100percent">
                <div className="card_body_small">
                  <div className="eyebrow">Werte</div>
                  <h3>Echt &amp; kompromisslos</h3>
                  <div className="w-richtext">
                    <p>Transparenz. Qualität. Fokus auf das Wesentliche.</p>
                  </div>
                  <div className="margin_top-auto">
                    <div className="button-group">
                      <Link href="/kontakt" className="text-button is-secondary w-inline-block">
                        <div>Details</div>
                        <div className="button_icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none">
                            <path d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="w-node-aa3bf2f2-f293-ebef-8271-b6d146ff689f-46ff6872"
              className="grid-item-manual w-node-_2e3b282a-4778-0448-481c-4ad408cd82f6-37623da3"
            >
              <div className="card height_100percent">
                <div className="hero-overlay height_100percent" style={{ position: "relative", minHeight: "260px" }}>
                  <div
                    id="w-node-aa3bf2f2-f293-ebef-8271-b6d146ff68a2-46ff6872"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="hero_back w-node-_2e3b282a-4778-0448-481c-4ad408cd82eb-37623da3"
                    style={{ position: "absolute", inset: 0 }}
                  >
                    <img
                      width={1216}
                      height={832}
                      alt="drone surveying crops"
                      src="/images/17e29a2e-c268-4e0a-bc53-198f3f30f071.avif"
                      loading="lazy"
                      srcSet="/images/17e29a2e-c268-4e0a-bc53-198f3f30f071-p-500.avif 500w, /images/17e29a2e-c268-4e0a-bc53-198f3f30f071-p-800.avif 800w, /images/17e29a2e-c268-4e0a-bc53-198f3f30f071-p-1080.avif 1080w, /images/17e29a2e-c268-4e0a-bc53-198f3f30f071.avif 1216w"
                      sizes="(max-width: 1216px) 100vw, 1216px"
                      className="image_cover"
                    />
                    <div className="overlay_opacity-subtle events_none"></div>
                  </div>
                  <div
                    id="w-node-aa3bf2f2-f293-ebef-8271-b6d146ff68a5-46ff6872"
                    className="hero_front w-node-_2e3b282a-4778-0448-481c-4ad408cd82f3-37623da3"
                    style={{ position: "relative", zIndex: 2 }}
                  >
                    <div className="position_relative">
                      <div className="card_body_small text-color_inverse">
                        <div className="eyebrow">Arbeitsweise</div>
                        <p className="max-width_xsmall heading_small">
                          Konzept. Dreh. Post. Alles aus einer Hand.
                        </p>
                      </div>
                      <div className="overlay backdrop-filter_blur_medium mask_fade-top_small"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Section */}
      <section className="section" id="galerie">
        <div className="container">
          <div className="w-layout-grid grid_3-col gap-xsmall">
            <div className="header">
              <h2 className="heading_primary">Galerie: Blick hinter die Linse</h2>
              <p className="subheading">Minimalistische Shots. Pure Ästhetik. Filmisch, modern, kompromisslos.</p>
              <div className="button-group">
                <div className="ix-link-wrapper">
                  <Link href="/kontakt" className="button w-inline-block">
                    <div>Galerie öffnen</div>
                  </Link>
                </div>
              </div>
            </div>

            <div
              id="w-node-b8e70c04-173a-7ac7-e584-5ae19aa87483-9aa87478"
              className="image-ratio_2x3 w-node-_2e3b282a-4778-0448-481c-4ad408cd8305-37623da3"
            >
              <img
                width={1216}
                height={832}
                alt="park landscape"
                src="/images/9ca918a2-94e9-4946-98d8-0b09c816dcc9.avif"
                loading="lazy"
                srcSet="/images/9ca918a2-94e9-4946-98d8-0b09c816dcc9-p-500.avif 500w, /images/9ca918a2-94e9-4946-98d8-0b09c816dcc9-p-800.avif 800w, /images/9ca918a2-94e9-4946-98d8-0b09c816dcc9-p-1080.avif 1080w, /images/9ca918a2-94e9-4946-98d8-0b09c816dcc9.avif 1216w"
                sizes="(max-width: 479px) 48vw, (max-width: 2481px) 49vw, 1216px"
                className="image_cover"
              />
            </div>

            <div className="image-ratio_2x3">
              <img
                width={1216}
                height={832}
                alt="clapboard on a film set"
                src="/images/22188934-f632-446e-94cf-52e31996e777.avif"
                loading="lazy"
                srcSet="/images/22188934-f632-446e-94cf-52e31996e777-p-500.avif 500w, /images/22188934-f632-446e-94cf-52e31996e777-p-800.avif 800w, /images/22188934-f632-446e-94cf-52e31996e777-p-1080.avif 1080w, /images/22188934-f632-446e-94cf-52e31996e777.avif 1216w"
                sizes="(max-width: 479px) 50vw, (max-width: 2481px) 49vw, 1216px"
                className="image_cover"
              />
            </div>

            <div
              id="w-node-b8e70c04-173a-7ac7-e584-5ae19aa87487-9aa87478"
              className="image-ratio_2x3 w-node-_2e3b282a-4778-0448-481c-4ad408cd8309-37623da3"
            >
              <img
                width={1216}
                height={832}
                alt="optometry tools"
                src="/images/47ddf033-597c-4816-84c6-47a218476a59.avif"
                loading="lazy"
                srcSet="/images/47ddf033-597c-4816-84c6-47a218476a59-p-500.avif 500w, /images/47ddf033-597c-4816-84c6-47a218476a59-p-800.avif 800w, /images/47ddf033-597c-4816-84c6-47a218476a59-p-1080.avif 1080w, /images/47ddf033-597c-4816-84c6-47a218476a59.avif 1216w"
                sizes="(max-width: 479px) 48vw, (max-width: 2481px) 49vw, 1216px"
                className="image_cover"
              />
            </div>

            <div className="image-ratio_2x3">
              <img
                width={1216}
                height={832}
                alt="video editing software screen"
                src="/images/59ce90c0-6f52-4356-a296-184093609b98.avif"
                loading="lazy"
                srcSet="/images/59ce90c0-6f52-4356-a296-184093609b98-p-500.avif 500w, /images/59ce90c0-6f52-4356-a296-184093609b98-p-800.avif 800w, /images/59ce90c0-6f52-4356-a296-184093609b98-p-1080.avif 1080w, /images/59ce90c0-6f52-4356-a296-184093609b98.avif 1216w"
                sizes="(max-width: 479px) 50vw, (max-width: 2481px) 49vw, 1216px"
                className="image_cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section is-secondary">
        <div className="container">
          <div className="header is-align-center">
            <p className="eyebrow">Kundenfeedback</p>
            <h2 className="heading_primary">Echte Stimmen. Klare Qualität.</h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section padding-bottom_none">
        <div className="container">
          <div className="header is-align-center">
            <div className="eyebrow">Bereit für das nächste Projekt?</div>
            <h2 className="heading_primary">Jetzt Kontakt aufnehmen</h2>
            <div className="rich-text subheading w-richtext">
              <p>Minimalistisch. Filmisch. Premium. Lass uns gemeinsam visuelle Statements setzen.</p>
            </div>
            <div className="button-group">
              <div className="ix-link-wrapper">
                <Link href="/kontakt" className="button w-button">
                  Kontakt
                </Link>
              </div>
            </div>
          </div>
          <div className="image-ratio_auto radius_bottom-none">
            <img
              width={1216}
              height={832}
              alt="drone surveying crops"
              src="/images/17e29a2e-c268-4e0a-bc53-198f3f30f071.avif"
              loading="lazy"
              srcSet="/images/17e29a2e-c268-4e0a-bc53-198f3f30f071-p-500.avif 500w, /images/17e29a2e-c268-4e0a-bc53-198f3f30f071-p-800.avif 800w, /images/17e29a2e-c268-4e0a-bc53-198f3f30f071-p-1080.avif 1080w, /images/17e29a2e-c268-4e0a-bc53-198f3f30f071.avif 1216w"
              sizes="(max-width: 1216px) 100vw, 1216px"
              className="image"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
