"use client";

import React, { useState, useEffect, useCallback } from "react";

interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export default function LightboxImage({
  src,
  alt,
  className = "w-full h-full object-cover",
  containerClassName = "relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-charcoal border border-white/10 shadow-2xl",
}: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Listen for Escape key to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock background scroll when open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleClose]);

  return (
    <>
      {/* Clickable Image Thumbnail */}
      <div
        onClick={() => setIsOpen(true)}
        className={`${containerClassName} cursor-zoom-in group`}
        role="button"
        tabIndex={0}
        aria-label={`${alt} — Klicken für Vollbild`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen(true);
          }
        }}
      >
        <img
          src={src}
          alt={alt}
          className={`${className} transition-transform duration-500 group-hover:scale-[1.02]`}
        />
        {/* Subtle hover zoom hint badge */}
        <div className="absolute bottom-4 right-4 bg-cinematic-black/75 backdrop-blur-sm border border-white/15 text-warm-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 pointer-events-none">
          <svg className="w-3.5 h-3.5 text-champagne" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
          </svg>
          <span>Vollbild</span>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={handleClose}
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-fadeIn select-none"
        >
          {/* Top Control Bar */}
          <div className="absolute top-5 right-5 sm:top-8 sm:right-8 flex items-center gap-3 z-10">
            <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-muted-grey bg-white/5 border border-white/10 px-3 py-1 rounded">
              ESC zum Schließen
            </span>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Schließen"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-warm-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Full Screen Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[95vw] max-h-[88vh] flex items-center justify-center"
          >
            <img
              src={src}
              alt={alt}
              className="max-h-[85vh] max-w-[92vw] w-auto h-auto object-contain rounded-lg border border-white/10 shadow-2xl"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-5 inset-x-0 text-center text-xs uppercase tracking-widest text-champagne/80 pointer-events-none">
            {alt}
          </div>
        </div>
      )}
    </>
  );
}

