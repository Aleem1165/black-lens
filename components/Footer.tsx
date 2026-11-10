import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10 text-warm-white py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Slogan */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block" aria-label="BlackLens Home">
              <img
                src="/images/LogoW.png"
                alt="BlackLens Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-grey font-body leading-relaxed max-w-sm">
              Cineastische Filmproduktion, Drohnenaufnahmen und Schnitt &mdash; mit Leidenschaft für jedes Detail. A BlackLabs Company.
            </p>
            <div className="text-xs uppercase tracking-widest text-champagne font-semibold pt-1">
              Speicherschwendi, Schweiz
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-champagne font-semibold mb-4">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-sm text-muted-grey font-body">
              <li>
                <Link href="/" translate="no" className="hover:text-warm-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/projekte" className="hover:text-warm-white transition-colors">Projekte &amp; Portfolio</Link>
              </li>
              <li>
                <Link href="/leistungen" className="hover:text-warm-white transition-colors">Unsere Leistungen</Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="hover:text-warm-white transition-colors">Über Timo &amp; Vision</Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-warm-white transition-colors">Kontakt aufnehmen</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & Social */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-champagne font-semibold mb-4">
              KONTAKT &amp; SOCIAL
            </div>
            <div className="space-y-2.5 text-sm text-muted-grey font-body">
              <div>
                <a href="mailto:office@blacklabs.ch" className="hover:text-champagne transition-colors flex items-center gap-2.5 group">
                  <svg className="w-4 h-4 text-champagne/70 group-hover:text-champagne shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>office@blacklabs.ch</span>
                </a>
              </div>
              <div>
                <a href="tel:+41797267456" className="hover:text-champagne transition-colors flex items-center gap-2.5 group">
                  <svg className="w-4 h-4 text-champagne/70 group-hover:text-champagne shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>+41 79 726 74 56</span>
                </a>
              </div>
              <div>
                <a
                  href="https://instagram.com/BlackLens.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-champagne transition-colors flex items-center gap-2.5 group"
                >
                  <svg className="w-4 h-4 text-champagne/70 group-hover:text-champagne shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>@BlackLens.ch</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-grey/70 font-body">
          <div>
            &copy; 2026 BlackLens. Alle Rechte vorbehalten.
          </div>
          <div className="text-muted-grey/50">
            One vision. One brand. A cinematic presence.
          </div>
        </div>

      </div>
    </footer>
  );
}
