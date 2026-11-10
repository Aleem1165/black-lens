"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 h-20 flex items-center justify-between">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="BlackLens Home">
          <img
            src="/images/LogoW.png"
            alt="BlackLens"
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links with animated hover underline */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-2 text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-200 ${isActive
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
        <div className="flex items-center gap-4">
          <Link
            href="/kontakt"
            className="hidden sm:inline-flex items-center gap-2 relative group bg-champagne text-cinematic-black font-semibold text-xs uppercase tracking-wider px-6 py-2.5 rounded transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]"
          >
            <span className="font-semibold leading-none">Projekt anfragen</span>
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

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-warm-white p-2 rounded focus:outline-none hover:text-champagne transition-colors"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm uppercase tracking-wider py-2 border-b border-white/5 transition-colors ${isActive ? "text-champagne font-bold" : "text-muted-grey hover:text-warm-white"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/kontakt"
                className="w-full inline-flex items-center justify-center gap-2 group bg-champagne text-cinematic-black font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]"
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
      )}
    </header>
  );
}
