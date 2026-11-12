"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Track scroll position to enhance background blur & styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projekte", href: "/projekte" },
    { name: "Leistungen", href: "/leistungen" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-cinematic-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50"
        : "bg-cinematic-black/40 backdrop-blur-sm border-b border-white/5"
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-6 lg:px-10 h-20 flex items-center justify-between gap-4">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="BlackLens Home">
          <img
            src="/images/LogoW.png"
            alt="BlackLens"
            className="h-7 sm:h-8 md:h-8 lg:h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links with animated hover underline */}
        <nav className="hidden md:flex items-center gap-4 md:gap-5 lg:gap-8 shrink-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-2 text-xs uppercase tracking-wider lg:tracking-[0.18em] font-medium transition-colors duration-200 whitespace-nowrap ${isActive
                  ? "text-champagne font-semibold"
                  : "text-muted-grey hover:text-champagne"
                  }`}
              >
                <span>{link.name}</span>
                {/* Animated underline indicator: only on hover, never stuck on active */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-champagne transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <Link
            href="/kontakt"
            className="hidden md:inline-flex items-center gap-2 relative group bg-champagne text-cinematic-black font-semibold text-xs uppercase tracking-wider px-3.5 sm:px-4 lg:px-6 py-2.5 rounded transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <span className="font-semibold leading-none whitespace-nowrap">Projekt anfragen</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden relative w-10 h-10 flex flex-col items-center justify-center rounded-lg transition-all duration-300 focus:outline-none ${
              mobileMenuOpen
                ? "bg-charcoal border border-champagne/60 shadow-[0_0_15px_rgba(217,184,153,0.2)]"
                : "bg-charcoal/80 border border-white/10 hover:border-champagne/40 hover:bg-charcoal"
            }`}
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-5 flex flex-col items-end gap-[5px]">
              {/* Top Bar (Full width) */}
              <span
                className={`h-[2px] w-5 rounded-full bg-champagne transition-all duration-300 ease-in-out transform origin-center ${
                  mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              {/* Middle Bar (Shorter, right-aligned) */}
              <span
                className={`h-[2px] w-3.5 rounded-full bg-champagne transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "opacity-0 translate-x-1" : "opacity-100"
                }`}
              />
              {/* Bottom Bar (Full width) */}
              <span
                className={`h-[2px] w-5 rounded-full bg-champagne transition-all duration-300 ease-in-out transform origin-center ${
                  mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

      </div>

      {/* Full-Screen Blur Backdrop Overlay — Attached to document.body to bypass header stacking context */}
      {mounted &&
        createPortal(
          <div
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
            className={`md:hidden fixed inset-0 top-20 bg-cinematic-black/80 backdrop-blur-xl z-40 transition-all duration-300 ease-in-out cursor-pointer ${
              mobileMenuOpen
                ? "opacity-100 pointer-events-auto visible"
                : "opacity-0 pointer-events-none invisible"
            }`}
          />,
          document.body
        )}

      {/* Mobile Dropdown Menu — Smooth slide down/up & fade in/out on both open and close */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 w-full bg-[#141619] border-b border-white/10 px-6 py-6 shadow-2xl shadow-black/90 z-50 transition-all duration-300 ease-in-out origin-top ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 -translate-y-4 pointer-events-none invisible"
        }`}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm uppercase tracking-wider py-2 border-b border-white/5 transition-colors ${
                  isActive ? "text-champagne font-bold" : "text-muted-grey hover:text-warm-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2 flex justify-end">
            <Link
              href="/kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="w-fit inline-flex items-center gap-2 group bg-champagne text-cinematic-black font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]"
            >
              <span>Projekt anfragen</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
