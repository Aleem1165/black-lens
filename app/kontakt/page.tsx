import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFormPage from "@/components/ContactFormPage";

export const metadata: Metadata = {
  title: "Kontakt | BlackLens - Cinematic Filmmaking & Aerial Production",
  description:
    "Lass uns etwas schaffen. Ein direkter Weg vom Interesse zur Anfrage. Filmproduktion, Luftaufnahmen und Schnitt.",
};

export default function KontaktPage() {
  return (
    <div style={{ backgroundColor: "#090A0C", minHeight: "100vh", color: "#F6F4F0" }}>
      <Navbar />

      <main className="section" style={{ padding: "6rem 1.5rem 4rem" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          {/* Breadcrumb / Category indicator from Slide 16 */}
          <div style={{ marginBottom: "1.5rem", fontSize: "0.85rem", letterSpacing: "0.15em", color: "#ACB0B5", textTransform: "uppercase" }}>
            BLACKLABS &nbsp;/&nbsp; BRAND &amp; DIGITAL &nbsp;/&nbsp; KONTAKT
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3.5rem",
              alignItems: "start",
            }}
          >
            {/* Left Column: Direct studio channels from Slide 16 & 17 */}
            <div>
              <div style={{ marginBottom: "2.5rem" }}>
                <h1
                  style={{
                    fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                    lineHeight: "1.1",
                    fontWeight: "700",
                    letterSpacing: "-0.02em",
                    marginBottom: "1rem",
                    color: "#F6F4F0",
                  }}
                >
                  LASS UNS<br />
                  <span style={{ color: "#D9B899" }}>ETWAS SCHAFFEN.</span>
                </h1>
                <p style={{ color: "#ACB0B5", fontSize: "1.1rem", lineHeight: "1.6", maxWidth: "460px" }}>
                  Kontakt: Einfach &amp; persönlich. Ein direkter Weg vom Interesse zur Anfrage. Lassen Sie uns gemeinsam etwas Einzigartiges erschaffen.
                </p>
              </div>

              {/* Direct Info List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {/* Email */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#17191C", display: "flex", alignItems: "center", justifyContent: "center", color: "#D9B899" }}>
                    ✉
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "#ACB0B5", textTransform: "uppercase", letterSpacing: "0.08em" }}>E-Mail</div>
                    <a href="mailto:office@blacklabs.ch" style={{ color: "#F6F4F0", textDecoration: "none", fontSize: "1.05rem", fontWeight: "500" }}>
                      office@blacklabs.ch
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#17191C", display: "flex", alignItems: "center", justifyContent: "center", color: "#D9B899" }}>
                    ☎
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "#ACB0B5", textTransform: "uppercase", letterSpacing: "0.08em" }}>Telefon</div>
                    <a href="tel:+41797267456" style={{ color: "#F6F4F0", textDecoration: "none", fontSize: "1.05rem", fontWeight: "500" }}>
                      +41 79 726 74 56
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#17191C", display: "flex", alignItems: "center", justifyContent: "center", color: "#D9B899" }}>
                    ◎
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "#ACB0B5", textTransform: "uppercase", letterSpacing: "0.08em" }}>Instagram</div>
                    <a
                      href="https://instagram.com/BlackLens.ch"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#F6F4F0", textDecoration: "none", fontSize: "1.05rem", fontWeight: "500" }}
                    >
                      @BlackLens.ch
                    </a>
                  </div>
                </div>

                {/* Studio Location (Slide 17) */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginTop: "0.5rem" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#17191C", display: "flex", alignItems: "center", justifyContent: "center", color: "#D9B899" }}>
                    📍
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "#ACB0B5", textTransform: "uppercase", letterSpacing: "0.08em" }}>Studio</div>
                    <div style={{ color: "#F6F4F0", fontSize: "1rem", lineHeight: "1.5" }}>
                      Rickstrasse 6<br />
                      9037 Speicherschwendi<br />
                      Switzerland
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form (Charcoal #17191C Card) */}
            <div
              style={{
                backgroundColor: "#17191C",
                padding: "clamp(1.5rem, 4vw, 2.5rem)",
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <h2 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.5rem", color: "#F6F4F0" }}>
                Projekt starten
              </h2>
              <p style={{ color: "#ACB0B5", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                Füllen Sie das Formular aus und wir melden uns zeitnah mit ersten Ideen.
              </p>

              <ContactFormPage />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
