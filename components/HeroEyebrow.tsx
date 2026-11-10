"use client";

import React, { useState, useEffect } from "react";

export default function HeroEyebrow() {
  const brandFull = "BLACKLENS";
  const subFull = "FILMPRODUKTION & DROHNENAUFNAHMEN";

  const [displayedBrand, setDisplayedBrand] = useState("");
  const [showDot, setShowDot] = useState(false);
  const [displayedSub, setDisplayedSub] = useState("");
  const [linesVisible, setLinesVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    let brandIndex = 0;
    let subIndex = 0;

    // Phase 1: Type out "BLACKLENS"
    const brandInterval = setInterval(() => {
      brandIndex++;
      setDisplayedBrand(brandFull.slice(0, brandIndex));

      if (brandIndex >= brandFull.length) {
        clearInterval(brandInterval);

        // Phase 2: Show center divider dot
        setTimeout(() => {
          setShowDot(true);

          // Phase 3: Type out "FILMPRODUKTION & DROHNENAUFNAHMEN"
          const subInterval = setInterval(() => {
            subIndex++;
            setDisplayedSub(subFull.slice(0, subIndex));

            if (subIndex >= subFull.length) {
              clearInterval(subInterval);
              setTypingComplete(true);

              // Phase 4: Both side hairlines glide in from further out and settle
              setTimeout(() => {
                setLinesVisible(true);
              }, 120);
            }
          }, 25);
        }, 100);
      }
    }, 45);

    return () => {
      clearInterval(brandInterval);
    };
  }, []);

  return (
    <div className="inline-flex items-center justify-center gap-2.5 sm:gap-4 mb-8 text-[11px] sm:text-xs uppercase tracking-[0.24em] sm:tracking-[0.26em] font-medium min-h-[24px]">
      {/* Left hairline: glides inward from further left and expands into place */}
      <span
        aria-hidden="true"
        className={`hidden sm:inline-block h-px bg-gradient-to-r from-transparent to-champagne/60 transition-all duration-700 ease-out ${
          linesVisible
            ? "w-8 sm:w-14 opacity-100 translate-x-0"
            : "w-0 opacity-0 -translate-x-8"
        }`}
      />

      {/* Brand Title */}
      <span className="text-warm-white font-bold tracking-[0.28em] sm:tracking-[0.3em]">
        {displayedBrand}
      </span>

      {/* Center Dot Divider */}
      {showDot && (
        <span className="text-champagne/40 font-light transition-opacity duration-300">
          &bull;
        </span>
      )}

      {/* Category / Discipline */}
      <span className="text-champagne tracking-[0.2em] sm:tracking-[0.22em] font-semibold">
        {displayedSub}
      </span>

      {/* Subtle typing cursor (active only while typing) */}
      {!typingComplete && (
        <span
          aria-hidden="true"
          className="inline-block w-1.5 h-3.5 bg-champagne animate-pulse ml-0.5 align-middle"
        />
      )}

      {/* Right hairline: glides inward from further right and expands into place */}
      <span
        aria-hidden="true"
        className={`hidden sm:inline-block h-px bg-gradient-to-l from-transparent to-champagne/60 transition-all duration-700 ease-out ${
          linesVisible
            ? "w-8 sm:w-14 opacity-100 translate-x-0"
            : "w-0 opacity-0 translate-x-8"
        }`}
      />
    </div>
  );
}

