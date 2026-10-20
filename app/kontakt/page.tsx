import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFormPage from "@/components/ContactFormPage";

export const metadata: Metadata = {
  title: "Kontakt | BlackLens - Cinematic Filmmaking & Aerial Production",
  description:
    "Lass uns filmisch starten. Minimal. Direkt. Schreib uns für Projekte im Bereich Filmproduktion, Drohnenaufnahmen und Schnitt & Colorgrading.",
  openGraph: {
    title: "Kontakt | BlackLens",
    description: "Minimal. Direkt. Schreib uns für cineastische Projekte.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | BlackLens",
    description: "Minimal. Direkt. Schreib uns für cineastische Projekte.",
  },
};

export default function KontaktPage() {
  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">
          <div className="w-layout-grid grid_2-col gap-large">
            <div className="grid-item-manual">
              <div className="header margin-bottom_none">
                <h1 className="heading_primary">Lass uns filmisch starten.</h1>
                <div className="rich-text subheading w-richtext">
                  <p>Minimal. Direkt. Schreib uns für Projekte.</p>
                </div>
              </div>
              <ul role="list" className="list gap-xsmall w-list-unstyled">
                <li className="flex_horizontal gap-xxsmall margin-bottom_none">
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
                  <a href="mailto:Office@blacklens.ch" className="text-link w-inline-block">
                    <div className="text-link is-secondary">Office@blacklens.ch</div>
                  </a>
                </li>
                <li className="flex_horizontal gap-xxsmall margin-bottom_none">
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
                  <div>+41 79 726 74 56</div>
                </li>
                <li className="flex_horizontal gap-xxsmall margin-bottom_none">
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
                    Schweiz<br />AR
                  </div>
                </li>
              </ul>
            </div>

            <ContactFormPage />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
