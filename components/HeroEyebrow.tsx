"use client";

import React, { useState, useEffect } from "react";

export default function HeroEyebrow() {
  const brandFull = "BLACKLENS";
  const subFull = "FILMPRODUKTION & DROHNENAUFNAHMEN";

  const [displayedBrand, setDisplayedBrand] = useState("");
  const [brandLinesVisible, setBrandLinesVisible] = useState(false);
  const [showDot, setShowDot] = useState(false);
  const [displayedSub, setDisplayedSub] = useState("");
  const [isTypingSub, setIsTypingSub] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [desktopLinesVisible, setDesktopLinesVisible] = useState(false);

  useEffect(() => {
    let brandIndex = 0;
    let subIndex = 0;

    // Phase 1: Type out "BLACKLENS"
    const brandInterval = setInterval(() => {
      brandIndex++;
      setDisplayedBrand(brandFull.slice(0, brandIndex));

      if (brandIndex >= brandFull.length) {
        clearInterval(brandInterval);

        // Phase 2: Animate in side hairlines flanking BLACKLENS on mobile & show dot for desktop
        setTimeout(() => {
          setBrandLinesVisible(true);
          setShowDot(true);

          // Phase 3: Type Line 2 ("FILMPRODUKTION & DROHNENAUFNAHMEN")
          setTimeout(() => {
            setIsTypingSub(true);
            const subInterval = setInterval(() => {
              subIndex++;
              setDisplayedSub(subFull.slice(0, subIndex));

              if (subIndex >= subFull.length) {
                clearInterval(subInterval);
                setIsTypingSub(false);
                setTypingComplete(true);

                // Phase 4 (Desktop Single-line): Animate in both side hairlines after full typing completes
                setTimeout(() => {
                  setDesktopLinesVisible(true);
                }, 120);
              }
            }, 25);
          }, 350);
        }, 80);
      }
    }, 45);

    return () => {
      clearInterval(brandInterval);
    };
  }, []);

  return (
    <div className="mb-5 sm:mb-8 min-h-[50px] md:min-h-[26px] flex flex-col items-center justify-center max-w-full px-2">
      {/* ============================================================== */}
      {/* MOBILE & TABLET LAYOUT (< md): Sequential 3-Step Animation      */}
      {/* Step 1: "BLACKLENS" types out                                   */}
      {/* Step 2: Lines animate in flanking ONLY BLACKLENS on Line 1      */}
      {/* Step 3: "FILMPRODUKTION & DROHNENAUFNAHMEN" types on Line 2     */}
      {/* Fixed line heights guarantee ZERO layout shift / push on h1     */}
      {/* ============================================================== */}
      <div className="flex md:hidden flex-col items-center justify-center text-center">
        {/* Line 1: BLACKLENS + Flanking Hairlines on this same line */}
        <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3.5 h-6">
          {/* Left Hairline flanking BLACKLENS */}
          <span
            aria-hidden="true"
            className={`inline-block h-px bg-gradient-to-r from-transparent to-champagne/60 transition-all duration-500 ease-out shrink-0 ${
              brandLinesVisible ? "w-6 sm:w-10 opacity-100" : "w-0 opacity-0"
            }`}
          />

          <span className="text-warm-white font-bold tracking-[0.24em] sm:tracking-[0.28em] text-[11px] sm:text-xs uppercase whitespace-nowrap leading-none">
            {displayedBrand}
            {displayedBrand.length < brandFull.length && (
              <span
                aria-hidden="true"
                className="inline-block w-1 h-3 bg-champagne animate-pulse ml-0.5 align-middle"
              />
            )}
          </span>

          {/* Right Hairline flanking BLACKLENS */}
          <span
            aria-hidden="true"
            className={`inline-block h-px bg-gradient-to-l from-transparent to-champagne/60 transition-all duration-500 ease-out shrink-0 ${
              brandLinesVisible ? "w-6 sm:w-10 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* Line 2: FILMPRODUKTION & DROHNENAUFNAHMEN cleanly centered beneath */}
        <div className="text-champagne tracking-[0.11em] sm:tracking-[0.18em] font-semibold text-[9px] sm:text-[11px] uppercase whitespace-nowrap mt-1.5 h-5 flex items-center justify-center leading-none">
          {displayedSub}
          {isTypingSub && (
            <span
              aria-hidden="true"
              className="inline-block w-1 h-3 bg-champagne animate-pulse ml-0.5 align-middle"
            />
          )}
        </div>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP LAYOUT (md+): Single Widescreen Row with Hairlines      */}
      {/* First types full text, then both side hairlines animate in      */}
      {/* ============================================================== */}
      <div className="hidden md:inline-flex items-center justify-center text-xs uppercase tracking-[0.26em] font-medium whitespace-nowrap">
        {/* Left Hairline - animates in smoothly after typing completes */}
        <span
          aria-hidden="true"
          className={`inline-block h-px bg-gradient-to-r from-transparent to-champagne/60 transition-all duration-700 ease-out shrink-0 ${
            desktopLinesVisible ? "w-14 opacity-100 mr-4" : "w-0 opacity-0 mr-0"
          }`}
        />

        {/* Brand */}
        <span className="text-warm-white font-bold tracking-[0.3em]">
          {displayedBrand}
        </span>

        {/* Center Dot Divider */}
        {showDot && (
          <span className="text-champagne/40 font-light mx-4">
            &bull;
          </span>
        )}

        {/* Category */}
        <span className="text-champagne tracking-[0.22em] font-semibold">
          {displayedSub}
        </span>

        {/* Typing Cursor */}
        {!typingComplete && (
          <span
            aria-hidden="true"
            className="inline-block w-1.5 h-3.5 bg-champagne animate-pulse ml-1 align-middle"
          />
        )}

        {/* Right Hairline - animates in smoothly after typing completes */}
        <span
          aria-hidden="true"
          className={`inline-block h-px bg-gradient-to-l from-transparent to-champagne/60 transition-all duration-700 ease-out shrink-0 ${
            desktopLinesVisible ? "w-14 opacity-100 ml-4" : "w-0 opacity-0 ml-0"
          }`}
        />
      </div>
    </div>
  );
}
