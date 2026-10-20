import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFormHome from "@/components/ContactFormHome";

export const metadata: Metadata = {
  title: "Home | BlackLens - Cinematic Filmmaking & Aerial Production",
  description:
    "Entdecken Sie BlackLens, spezialisiert auf Filmproduktion, Drohnenaufnahmen und Schnitt & Colorgrading. Erleben Sie atemberaubende visuelle Geschichten.",
  openGraph: {
    title: "Willkommen bei BlackLens",
    description: "Cinematic Filmmaking & Aerial Production. Ihre Vision, unser Handwerk.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Willkommen bei BlackLens",
    description: "Cinematic Filmmaking & Aerial Production. Ihre Vision, unser Handwerk.",
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header className="section">
        <div className="container">
          <div className="header">
            <div className="margin-bottom_small">
              <h1 className="screen-reader">Cinematic. Drohne. Premium.</h1>
              <div className="heading_hero display_inline">Film</div>
              <div className="display_inline padding_xsmall">
                <img
                  width={1178}
                  height={832}
                  alt="director and cinematographer discussing a shot"
                  src="/images/ChatGPT-Image-26.-Juni-2026-20_02_42.png"
                  loading="lazy"
                  srcSet="/images/ChatGPT-Image-26.-Juni-2026-20_02_42-p-500.png 500w, /images/ChatGPT-Image-26.-Juni-2026-20_02_42-p-800.png 800w, /images/ChatGPT-Image-26.-Juni-2026-20_02_42-p-1080.png 1080w, /images/ChatGPT-Image-26.-Juni-2026-20_02_42.png 1536w"
                  sizes="100vw"
                  className="image_heading-inline"
                />
              </div>
              <div className="heading_hero display_inline">Drohne</div>
              <div className="display_inline padding_xsmall">
                <img
                  width={1040}
                  height={832}
                  alt="behind the scenes filming"
                  src="/images/acc71533-8766-49dd-832c-9b2cb99541d2.png"
                  loading="lazy"
                  srcSet="/images/acc71533-8766-49dd-832c-9b2cb99541d2-p-500.png 500w, /images/acc71533-8766-49dd-832c-9b2cb99541d2-p-800.png 800w, /images/acc71533-8766-49dd-832c-9b2cb99541d2-p-1080.png 1080w, /images/acc71533-8766-49dd-832c-9b2cb99541d2.png 1536w"
                  sizes="100vw"
                  className="image_heading-inline"
                />
              </div>
              <div className="heading_hero display_inline">Leidenschaft &amp; Perfektion</div>
            </div>
            <div className="subheading rich-text w-richtext">
              <p>Visuelle Geschichten neu definiert</p>
            </div>
            <div className="button-group">
              <div className="ix-link-wrapper">
                <Link href="#shots" className="button w-button">
                  Projekte ansehen
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
      </header>

      {/* Leistungen Section */}
      <section className="section is-secondary">
        <div className="container">
          <div
            id="w-node-_744bb273-0f08-8207-3974-85f409138e48-09138e44"
            className="header is-align-center w-node-ae4df003-82e8-81f8-4ce5-5deaa2b81a8a-37623b39"
          >
            <h2 className="heading_primary">Leistungen. Klar. Filmisch.</h2>
            <div className="subheading w-richtext">
              <p>Drei Wege zu kompromissloser Qualität.</p>
            </div>
          </div>
          <div className="w-layout-grid grid_3-col gap-xsmall">
            <div
              id="w-node-e103c29a-f04a-aec6-b4d4-ec4836c3c903-09138e44"
              className="card on-secondary w-node-ae4df003-82e8-81f8-4ce5-5deaa2b81a9a-37623b39"
            >
              <div className="card_body">
                <div className="icon margin-bottom_xsmall">
                  <img src="/images/Herunterladen-1.svg" loading="lazy" width={292} alt="Filmproduktion" />
                </div>
                <h3
                  id="w-node-e103c29a-f04a-aec6-b4d4-ec4836c3c906-09138e44"
                  className="heading_small w-node-ae4df003-82e8-81f8-4ce5-5deaa2b81a92-37623b39"
                >
                  Filmproduktion
                </h3>
                <p className="margin-bottom_none">
                  Kreative Filmproduktionen mit Fokus auf Qualität und Storytelling.
                </p>
              </div>
            </div>
            <div
              id="w-node-_0b8f9155-23d0-e08b-8a36-848533dfce9c-09138e44"
              className="card w-node-ae4df003-82e8-81f8-4ce5-5deaa2b81aa7-37623b39"
            >
              <div className="card_body">
                <div className="icon margin-bottom_xsmall">
                  <img src="/images/Herunterladen-2.svg" loading="lazy" width={125} alt="Drohnenaufnahmen" />
                </div>
                <h3
                  id="w-node-_0b8f9155-23d0-e08b-8a36-848533dfce9f-09138e44"
                  className="heading_small w-node-ae4df003-82e8-81f8-4ce5-5deaa2b81a9f-37623b39"
                >
                  Drohnenaufnahmen
                </h3>
                <p className="margin-bottom_none">
                  Professionelle Luftaufnahmen mit modernen Drohnen – für einzigartige Perspektiven und beeindruckende Bilder.
                </p>
              </div>
            </div>
            <div
              id="w-node-bb01564e-c68b-8d19-73ac-9ac033608390-09138e44"
              className="card w-node-ae4df003-82e8-81f8-4ce5-5deaa2b81ab2-37623b39"
            >
              <div className="card_body">
                <div className="icon margin-bottom_xsmall">
                  <img src="/images/Herunterladen-3.svg" loading="lazy" width={72} alt="Schnitt und Colorgrading" />
                </div>
                <h3
                  id="w-node-bb01564e-c68b-8d19-73ac-9ac033608393-09138e44"
                  className="heading_small w-node-ae4df003-82e8-81f8-4ce5-5deaa2b81aae-37623b39"
                >
                  Schnitt &amp; Colorgrading
                </h3>
                <p className="margin-bottom_none">
                  <strong>
                    Präziser Videoschnitt und stimmiges Colorgrading für einen hochwertigen, einheitlichen Look.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Shots Grid */}
      <section className="section" id="shots">
        <div className="container">
          <div className="header is-align-center">
            <h2 className="heading_primary">Cinematic Shots. Pure Ästhetik.</h2>
            <p className="subheading">8 Bilder. 4x2 Grid. Minimalistisch.</p>
          </div>
          <div className="w-layout-grid grid_4-col gap-small">
            <div className="image-ratio_1x1">
              <img
                width={1216}
                height={832}
                alt="coastal vista scenery"
                src="/images/1.png00086400.jpg"
                loading="lazy"
                srcSet="/images/1.png00086400-p-500.jpg 500w, /images/1.png00086400-p-800.jpg 800w, /images/1.png00086400-p-1080.jpg 1080w, /images/1.png00086400-p-1600.jpg 1600w, /images/1.png00086400.jpg 1642w"
                sizes="(max-width: 479px) 48vw, (max-width: 991px) 49vw, 50vw"
                className="image_cover"
              />
            </div>
            <div className="image-ratio_1x1">
              <img
                width={1216}
                height={832}
                alt="director and cinematographer"
                src="/images/DSC01549.JPG"
                loading="lazy"
                srcSet="/images/DSC01549-p-500.jpg 500w, /images/DSC01549-p-800.jpg 800w, /images/DSC01549-p-1080.jpg 1080w, /images/DSC01549-p-1600.jpg 1600w, /images/DSC01549-p-2000.jpg 2000w, /images/DSC01549-p-2600.jpg 2600w, /images/DSC01549.JPG 2832w"
                sizes="(max-width: 479px) 48vw, (max-width: 991px) 49vw, 50vw"
                className="image_cover"
              />
            </div>
            <div className="image-ratio_1x1">
              <img
                width={1216}
                height={832}
                alt="film set production"
                src="/images/1.png00086401.jpg"
                loading="lazy"
                srcSet="/images/1.png00086401-p-500.jpg 500w, /images/1.png00086401-p-800.jpg 800w, /images/1.png00086401-p-1080.jpg 1080w, /images/1.png00086401-p-1600.jpg 1600w, /images/1.png00086401.jpg 1920w"
                sizes="(max-width: 479px) 48vw, (max-width: 991px) 49vw, 50vw"
                className="image_cover"
              />
            </div>
            <div className="image-ratio_1x1">
              <img
                width={1216}
                height={832}
                alt="video editing software screen"
                src="/images/DSC06467.JPG"
                loading="lazy"
                srcSet="/images/DSC06467-p-500.jpg 500w, /images/DSC06467-p-800.jpg 800w, /images/DSC06467-p-1080.jpg 1080w, /images/DSC06467-p-1600.jpg 1600w, /images/DSC06467-p-2000.jpg 2000w, /images/DSC06467-p-2600.jpg 2600w, /images/DSC06467.JPG 2615w"
                sizes="(max-width: 479px) 48vw, (max-width: 991px) 49vw, 50vw"
                className="image_cover"
              />
            </div>
            <div className="image-ratio_1x1">
              <img
                width={1216}
                height={832}
                alt="drone surveying crops"
                src="/images/2.png00086400.jpg"
                loading="lazy"
                srcSet="/images/2.png00086400-p-500.jpg 500w, /images/2.png00086400-p-800.jpg 800w, /images/2.png00086400-p-1080.jpg 1080w, /images/2.png00086400-p-1600.jpg 1600w, /images/2.png00086400.jpg 1920w"
                sizes="(max-width: 479px) 48vw, (max-width: 991px) 49vw, 50vw"
                className="image_cover"
              />
            </div>
            <div className="image-ratio_1x1">
              <img
                width={1216}
                height={832}
                alt="author portrait"
                src="/images/3.png00086400.jpg"
                loading="lazy"
                srcSet="/images/3.png00086400-p-500.jpg 500w, /images/3.png00086400-p-800.jpg 800w, /images/3.png00086400-p-1080.jpg 1080w, /images/3.png00086400-p-1600.jpg 1600w, /images/3.png00086400.jpg 1920w"
                sizes="(max-width: 479px) 48vw, (max-width: 991px) 49vw, 50vw"
                className="image_cover"
              />
            </div>
            <div className="image-ratio_1x1">
              <img
                width={1216}
                height={832}
                alt="lighting setup"
                src="/images/4.png00086400.jpg"
                loading="lazy"
                srcSet="/images/4.png00086400-p-500.jpg 500w, /images/4.png00086400-p-800.jpg 800w, /images/4.png00086400-p-1080.jpg 1080w, /images/4.png00086400-p-1600.jpg 1600w, /images/4.png00086400.jpg 1920w"
                sizes="(max-width: 479px) 48vw, (max-width: 991px) 49vw, 50vw"
                className="image_cover"
              />
            </div>
            <div className="image-ratio_1x1">
              <img
                width={1216}
                height={832}
                alt="clapboard on a film set"
                src="/images/6.png00086401.jpg"
                loading="lazy"
                srcSet="/images/6.png00086401-p-500.jpg 500w, /images/6.png00086401-p-800.jpg 800w, /images/6.png00086401-p-1080.jpg 1080w, /images/6.png00086401-p-1600.jpg 1600w, /images/6.png00086401.jpg 1920w"
                sizes="(max-width: 479px) 48vw, (max-width: 991px) 49vw, 50vw"
                className="image_cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="kontakt-section">
        <div className="container">
          <div className="header is-align-center">
            <h2 className="heading_primary">Lass uns filmisch starten.</h2>
            <p className="subheading">Minimal. Direkt. Für dein Projekt.</p>
          </div>
          <div className="card">
            <div className="padding_xxsmall">
              <div className="w-layout-grid grid_6-col tablet-1-col-1-2">
                <div className="card_body height_100percent">
                  <h3 className="heading_tertiary">Kontakt</h3>
                  <p className="text-color_secondary">Direkt. Klar. Für cineastische Projekte.</p>
                  <ul role="list" className="flex_vertical gap-xsmall margin-vertical_small w-list-unstyled">
                    <li className="flex_horizontal gap-xsmall">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12.5 18.25C16.2279 18.25 19.25 15.2279 19.25 11.5C19.25 7.77208 16.2279 4.75 12.5 4.75C8.77208 4.75 5.75 7.77208 5.75 11.5C5.75 12.6007 6.01345 13.6398 6.48072 14.5578L5 19L9.71819 17.6519C10.5664 18.0361 11.5082 18.25 12.5 18.25Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        +41 79 726 74 56<br />
                      </div>
                    </li>
                    <li className="flex_horizontal gap-xsmall">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5.25 6.75H18.75V17.25H5.25V6.75Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M5.25 6.75L12 12L18.75 6.75"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div className="display_inline-block">
                        <div>office@blacklabs.ch</div>
                      </div>
                    </li>
                    <li className="flex_horizontal gap-xsmall">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M16.3918 14.8527C20.2489 10.9956 17.2769 4.25 12 4.25C6.72299 4.25 3.75102 10.9956 7.60817 14.8527L12 19.25L16.3918 14.8527Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          ></path>
                          <circle cx="12" cy="10.25" r="2" stroke="currentColor" strokeWidth="1.5"></circle>
                        </svg>
                      </div>
                      <div>
                        AR, Schweiz<br />
                      </div>
                    </li>
                  </ul>
                  <ul role="list" className="icon_group margin_top-auto w-list-unstyled">
                    <li>
                      <div className="ix-link-wrapper">
                        <a
                          href="https://www.tiktok.com/@blacklens.ch"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-inline-block"
                        >
                          <div className="icon is-medium">
                            <img src="/images/Herunterladen-4.svg" loading="lazy" width={145} alt="TikTok" />
                          </div>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="ix-link-wrapper">
                        <a
                          href="https://www.instagram.com/blacklens.ch/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-inline-block"
                        >
                          <div className="icon is-medium">
                            <img src="/images/Herunterladen-5.svg" loading="lazy" alt="Instagram" />
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div
                  id="w-node-_64d24ba9-6cee-7e1e-2f3e-ad808311e3af-8027caec"
                  className="grid-item-manual w-node-ae4df003-82e8-81f8-4ce5-5deaa2b81b46-37623b39"
                >
                  <ContactFormHome />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
