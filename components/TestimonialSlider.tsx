"use client";

import React, { useState } from "react";

interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Minimalistisch, kreativ, kompromisslos. BlackLens liefert filmische Perfektion.",
    author: "Alex Weber, Director bei FrameLab",
  },
  {
    quote: "Präzise, effizient, hochwertig. Zusammenarbeit auf Top-Niveau.",
    author: "Taylor Schmid, Producer bei VisionOne",
  },
  {
    quote: "Filmisch, strukturiert, inspirierend. Qualität bis ins Detail.",
    author: "Robin Fuchs, Editor bei MotionGrid",
  },
  {
    quote: "Starke Typografie, viel Raum, cineastisch umgesetzt.",
    author: "Jamie Lorenz, Art Lead bei Studio Grau",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <div
      data-delay="4000"
      data-animation="cross"
      className="slider w-slider"
      style={{ position: "relative" }}
    >
      <div className="slider_mask is-slide-1-slide w-slider-mask" style={{ overflow: "hidden" }}>
        <div className="slider_slide w-slide" style={{ display: "block" }}>
          <div className="card on-secondary">
            <div className="card_body gap-xsmall">
              <div className="flex_horizontal">
                <div className="logo margin-bottom_xlarge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="100%"
                    viewBox="0 0 54 16"
                    fill="none"
                  >
                    <path
                      d="M19.4,5.4h1.3v5.1h4v1.1h-5.3v-6.2ZM25,8.5c0-1.8,1.3-3.2,4-3.2s4,1.4,4,3.2-1.2,3.2-4,3.2-4-1.3-4-3.2ZM31.7,8.5c0-1.2-.9-2.2-2.7-2.2s-2.7,1-2.7,2.2.9,2.2,2.7,2.2,2.7-1,2.7-2.2ZM33.8,8.6c0-1.8,1.3-3.3,3.9-3.3s3.5,1.2,3.5,2.3,0,0,0,.2h-1.2c0,0,0,0,0-.1,0-.6-.6-1.4-2.3-1.4s-2.6,1-2.6,2.3.8,2.2,2.6,2.2,2.2-.8,2.2-1.4h0s-2.5,0-2.5,0v-.8h3.8v3.1h-1.1c0-.2,0-.8,0-1.3h0c-.3.9-1.2,1.4-2.6,1.4-2.7,0-3.7-1.5-3.7-3.1ZM42.2,8.5c0-1.8,1.3-3.2,4-3.2s4,1.4,4,3.2-1.2,3.2-4,3.2-4-1.3-4-3.2ZM48.8,8.5c0-1.2-.9-2.2-2.7-2.2s-2.7,1-2.7,2.2.9,2.2,2.7,2.2,2.7-1,2.7-2.2ZM16.3,8.5c0,1.2-.3,2.2-.8,3.1-.5.9-1.3,1.6-2.3,2.1-1,.5-2.2.8-3.6.8s-2.5-.2-3.5-.7c-1-.5-1.8-1.2-2.4-2.1s-.9-1.9-.9-3.2.3-2.2.8-3.1c.5-.9,1.3-1.6,2.3-2.1,1-.5,2.2-.8,3.6-.8s2.5.2,3.5.7c1,.5,1.8,1.2,2.4,2.1s.9,1.9.9,3.2ZM15,8.5c0-1-.2-1.8-.6-2.5-.4-.7-1-1.3-1.9-1.7-.8-.4-1.8-.6-2.9-.6s-2,.2-2.8.6c-.8.4-1.4.9-1.9,1.6-.4.7-.7,1.6-.7,2.6s.2,1.8.6,2.5c.4.7,1,1.3,1.9,1.7.8.4,1.8.6,2.9.6s2-.2,2.8-.6,1.4-.9,1.9-1.6c.4-.7.7-1.6.7-2.6ZM13,9.5c-.1.8-.5,1.3-1.1,1.7s-1.3.6-2.2.6-1.9-.3-2.6-.9c-.6-.6-1-1.4-1-2.4s.1-1.2.4-1.7c.3-.5.7-.9,1.2-1.2.5-.3,1.2-.4,1.9-.4,1.7,0,2.7.7,3.1,2.1l-1.4.2c-.1-.4-.4-.7-.6-.9s-.7-.3-1.2-.3-1.2.2-1.6.6c-.4.4-.6.9-.6,1.6s.2,1.3.5,1.6c.4.4.9.6,1.6.6s1,0,1.3-.3c.3-.2.5-.5.6-.9h1.4Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="icon text-color_secondary">
                <svg width="100%" height="100%" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M15.2229 2H19.2L15.168 10.0926H19.2V18H10.9989V10.0926L15.2229 2ZM4.19657 2H8.20114L4.14171 10.0926H8.20114V18H0V10.0926L4.19657 2Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <blockquote className="margin-bottom_none" style={{ minHeight: "3.5rem" }}>
                {current.quote}
              </blockquote>
              <div className="author_info">{current.author}</div>
              <div className="flex_horizontal gap-medium margin-vertical_small">
                <div>
                  <div className="heading_primary margin-bottom_none">52K+</div>
                  <div className="text-color_muted">Kunden überzeugt</div>
                </div>
                <div>
                  <div className="heading_primary margin-bottom_none">2M+</div>
                  <div className="text-color_muted">Shots produziert</div>
                </div>
              </div>
              <div className="flex_horizontal is-space-between is-y-center">
                <a href="/kontakt" className="text-button w-inline-block">
                  <div>Details</div>
                  <div className="button_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>

                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button
                    onClick={prevSlide}
                    className="slider_arrow is-bottom w-slider-arrow-left"
                    style={{
                      position: "static",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "none",
                      borderRadius: "4px",
                    }}
                    aria-label="Previous slide"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M11 1L4 8L11 15" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="slider_arrow is-bottom w-slider-arrow-right"
                    style={{
                      position: "static",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "none",
                      borderRadius: "4px",
                    }}
                    aria-label="Next slide"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M5 1L12 8L5 15" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
