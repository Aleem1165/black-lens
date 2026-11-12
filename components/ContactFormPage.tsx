"use client";

import React, { useState, useRef, useEffect } from "react";

const PROJECT_OPTIONS = [
  { id: "film-production", label: "Filmproduktion" },
  { id: "aerial", label: "Aerial Cinematography (Drohnenaufnahmen)" },
  { id: "editing-color", label: "Schnitt & Colorgrading" },
  { id: "other", label: "Sonstige Anfrage" },
];

export default function ContactFormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Initialize immediately from URL query so there is ZERO delay or flashing
  const [projectType, setProjectType] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service")?.toLowerCase();
      if (serviceParam === "filmproduktion" || serviceParam === "film-production") {
        return "film-production";
      } else if (
        serviceParam === "drohnenaufnahmen" ||
        serviceParam === "drohnen" ||
        serviceParam === "aerial"
      ) {
        return "aerial";
      } else if (
        serviceParam === "schnitt-color" ||
        serviceParam === "schnitt" ||
        serviceParam === "editing-color"
      ) {
        return "editing-color";
      } else if (serviceParam === "other" || serviceParam === "sonstiges") {
        return "other";
      }
    }
    return "";
  });

  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [companyWebsite, setCompanyWebsite] = useState("");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Clean up URL parameter immediately so address bar shows pure "/kontakt"
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search) {
      window.history.replaceState({}, "", "/kontakt");
    }
  }, []);

  const resetForm = () => {
    setName("");
    setEmail("");
    setProjectType("");
    setTimeline("");
    setBudget("");
    setMessage("");
    setAgree(false);
    setCompanyWebsite("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-bot trap: real users won't fill hidden companyWebsite, automated spam bots will
    if (companyWebsite.trim() !== "") {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        resetForm();
      }, 400);
      return;
    }

    if (!name.trim() || !email.trim() || !projectType || !message.trim() || !agree) {
      setIsError(true);
      return;
    }
    setIsSubmitting(true);
    setIsError(false);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      resetForm();
    }, 600);
  };

  return (
    <div className="w-full">
      {!isSuccess ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
          {/* Disguised anti-spam field (hidden from view and screen readers) */}
          <div
            className="opacity-0 absolute -left-[9999px] -top-[9999px] pointer-events-none select-none h-0 w-0 overflow-hidden"
            aria-hidden="true"
            tabIndex={-1}
          >
            <label htmlFor="company_website">Company Website</label>
            <input
              type="text"
              id="company_website"
              name="company_website"
              value={companyWebsite}
              onChange={(e) => setCompanyWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              maxLength={256}
              placeholder=" "
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="peer w-full bg-charcoal border border-white/15 rounded-lg pl-11 pr-4 py-3.5 text-warm-white placeholder-transparent focus:outline-none focus:border-champagne text-sm transition-all"
            />
            {/* Left Icon */}
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-grey peer-focus:text-champagne transition-colors pointer-events-none">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            {/* Floating Label (No asterisk, transparent resting background) */}
            <label
              htmlFor="name"
              className="absolute pointer-events-none transition-all duration-200 select-none px-1.5 font-medium leading-none py-0.5
                top-1/2 -translate-y-1/2 left-11 text-sm text-muted-grey bg-transparent
                peer-focus:-top-2.5 peer-focus:translate-y-0 peer-focus:left-3.5 peer-focus:text-xs peer-focus:text-champagne peer-focus:bg-charcoal
                peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:left-3.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-champagne peer-[:not(:placeholder-shown)]:bg-charcoal"
            >
              Ihr Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              maxLength={256}
              placeholder=" "
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full bg-charcoal border border-white/15 rounded-lg pl-11 pr-4 py-3.5 text-warm-white placeholder-transparent focus:outline-none focus:border-champagne text-sm transition-all"
            />
            {/* Left Icon */}
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-grey peer-focus:text-champagne transition-colors pointer-events-none">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            {/* Floating Label */}
            <label
              htmlFor="email"
              translate="no"
              className="absolute pointer-events-none transition-all duration-200 select-none px-1.5 font-medium leading-none py-0.5
                top-1/2 -translate-y-1/2 left-11 text-sm text-muted-grey bg-transparent
                peer-focus:-top-2.5 peer-focus:translate-y-0 peer-focus:left-3.5 peer-focus:text-xs peer-focus:text-champagne peer-focus:bg-charcoal
                peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:left-3.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-champagne peer-[:not(:placeholder-shown)]:bg-charcoal"
            >
              Email
            </label>
          </div>

          {/* Custom Project Type Dropdown (No native OS blue hover, Theme Champagne hover) */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`w-full h-[50px] bg-charcoal border rounded-lg pl-11 pr-10 text-left text-sm transition-all flex items-center justify-between cursor-pointer focus:outline-none ${
                isDropdownOpen
                  ? "border-champagne"
                  : projectType
                  ? "border-white/25"
                  : "border-white/15 hover:border-white/25"
              }`}
            >
              {/* Selected text: Pre-render all options so Google Translate translates them once on load without re-translating/glitching on selection */}
              <div className="flex-1 truncate">
                {PROJECT_OPTIONS.map((option) => (
                  <span
                    key={option.id}
                    className={`text-sm text-warm-white font-medium ${
                      projectType === option.id ? "block truncate" : "hidden"
                    }`}
                  >
                    {option.label}
                  </span>
                ))}
              </div>

              {/* Left Icon */}
              <div
                className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors pointer-events-none ${
                  isDropdownOpen || projectType ? "text-champagne" : "text-muted-grey"
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" />
                </svg>
              </div>

              {/* Right Dropdown Arrow */}
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-grey pointer-events-none transition-transform duration-200">
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-champagne" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </button>

            {/* Floating Label */}
            <label
              className={`absolute pointer-events-none transition-all duration-200 select-none px-1.5 font-medium leading-none py-0.5 ${
                isDropdownOpen || projectType !== ""
                  ? "-top-2.5 left-3.5 text-xs text-champagne bg-charcoal"
                  : "top-1/2 -translate-y-1/2 left-11 text-sm text-muted-grey bg-transparent"
              }`}
            >
              Projektart
            </label>

            {/* Custom Dropdown Menu with Champagne Theme Hover */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1.5 bg-[#17191C] border border-white/15 rounded-lg shadow-2xl py-1.5 z-40 overflow-hidden">
                {PROJECT_OPTIONS.map((option) => {
                  const isSelected = projectType === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setProjectType(option.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-champagne/15 text-champagne font-medium"
                          : "text-warm-white/90 hover:bg-champagne/10 hover:text-champagne"
                      }`}
                    >
                      <span>{option.label}</span>
                      {isSelected && (
                        <svg className="w-4 h-4 text-champagne shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Zeitplan & Budget (Optional) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Timeline */}
            <div className="relative">
              <input
                type="text"
                id="timeline"
                name="timeline"
                placeholder=" "
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="peer w-full bg-charcoal border border-white/15 rounded-lg pl-11 pr-4 py-3.5 text-warm-white placeholder-transparent focus:outline-none focus:border-champagne text-sm transition-all"
              />
              {/* Left Icon */}
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-grey peer-focus:text-champagne transition-colors pointer-events-none">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              {/* Floating Label */}
              <label
                htmlFor="timeline"
                className="absolute pointer-events-none transition-all duration-200 select-none px-1.5 font-medium leading-none py-0.5
                  top-1/2 -translate-y-1/2 left-11 text-sm text-muted-grey bg-transparent
                  peer-focus:-top-2.5 peer-focus:translate-y-0 peer-focus:left-3.5 peer-focus:text-xs peer-focus:text-champagne peer-focus:bg-charcoal
                  peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:left-3.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-champagne peer-[:not(:placeholder-shown)]:bg-charcoal"
              >
                Zeitplan (Optional)
              </label>
            </div>

            {/* Budget */}
            <div className="relative">
              <input
                type="text"
                id="budget"
                name="budget"
                placeholder=" "
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="peer w-full bg-charcoal border border-white/15 rounded-lg pl-11 pr-4 py-3.5 text-warm-white placeholder-transparent focus:outline-none focus:border-champagne text-sm transition-all"
              />
              {/* Left Icon */}
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-grey peer-focus:text-champagne transition-colors pointer-events-none">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              {/* Floating Label */}
              <label
                htmlFor="budget"
                className="absolute pointer-events-none transition-all duration-200 select-none px-1.5 font-medium leading-none py-0.5
                  top-1/2 -translate-y-1/2 left-11 text-sm text-muted-grey bg-transparent
                  peer-focus:-top-2.5 peer-focus:translate-y-0 peer-focus:left-3.5 peer-focus:text-xs peer-focus:text-champagne peer-focus:bg-charcoal
                  peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:left-3.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-champagne peer-[:not(:placeholder-shown)]:bg-charcoal"
              >
                Budgetrahmen (Optional)
              </label>
            </div>
          </div>

          {/* Nachricht Field */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={4}
              maxLength={5000}
              placeholder=" "
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="peer w-full bg-charcoal border border-white/15 rounded-lg pl-11 pr-4 pt-3.5 pb-3 text-warm-white placeholder-transparent focus:outline-none focus:border-champagne text-sm transition-all resize-none"
            />
            {/* Left Icon */}
            <div className="absolute left-3.5 top-4 text-muted-grey peer-focus:text-champagne transition-colors pointer-events-none">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </div>
            {/* Floating Label */}
            <label
              htmlFor="message"
              className="absolute pointer-events-none transition-all duration-200 select-none px-1.5 font-medium leading-none py-0.5
                top-4 left-11 text-sm text-muted-grey bg-transparent
                peer-focus:-top-2.5 peer-focus:left-3.5 peer-focus:text-xs peer-focus:text-champagne peer-focus:bg-charcoal
                peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-champagne peer-[:not(:placeholder-shown)]:bg-charcoal"
            >
              Ihre Nachricht
            </label>
          </div>

          {/* Custom Checkbox (Only clickable on box, perfectly centered, stylish rounded swoosh tick) */}
          <div className="flex items-center gap-3 select-none pt-1">
            <button
              type="button"
              role="checkbox"
              aria-checked={agree}
              onClick={() => setAgree(!agree)}
              className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all cursor-pointer shrink-0 focus:outline-none ${
                agree
                  ? "bg-charcoal border-champagne"
                  : "bg-charcoal border-white/20 hover:border-champagne/60"
              }`}
            >
              {agree && (
                <svg
                  className="w-4 h-4 text-champagne"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.2 11.2 C 5.6 12.3, 7.2 15, 8.6 15 C 10.2 15, 13 9.2, 16.2 4.8" />
                </svg>
              )}
            </button>
            <span className="text-xs text-muted-grey leading-normal">
              Ich stimme der Kontaktaufnahme und Bearbeitung meiner Anfrage zu.
            </span>
          </div>

          {/* Fehlermeldung (Clean, no privacy policy mention) */}
          {isError && (
            <div className="p-3.5 bg-red-950/40 border border-red-500/40 text-red-300 rounded text-xs leading-relaxed">
              Ihre Anfrage konnte nicht gesendet werden. Bitte füllen Sie alle erforderlichen Felder aus und bestätigen Sie die Kontaktaufnahme.
            </div>
          )}

          {/* Absenden Button (Fit content width, centered) */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="self-center mx-auto w-auto inline-flex items-center justify-center gap-2 group bg-champagne text-cinematic-black font-semibold uppercase tracking-wider px-8 py-4 rounded text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] mt-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}</span>
            {!isSubmitting && (
              <svg
                className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            )}
          </button>
        </form>
      ) : (
        /* Erfolgsmeldung */
        <div className="bg-charcoal border border-champagne/40 rounded-xl p-8 sm:p-12 text-center">
          <div className="text-champagne text-3xl mb-4 font-bold">✓</div>
          <h3 className="text-2xl font-headline font-bold text-warm-white mb-2">
            Vielen Dank! Ihre Nachricht wurde gesendet.
          </h3>
          <p className="text-sm text-muted-grey font-body max-w-md mx-auto mb-6">
            Wir haben Ihre Anfrage erhalten und melden uns so schnell wie möglich bei Ihnen.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              resetForm();
            }}
            className="border border-white/20 text-warm-white text-xs uppercase tracking-wider px-5 py-2.5 rounded hover:border-white/50 transition-colors cursor-pointer"
          >
            Weitere Nachricht senden
          </button>
        </div>
      )}
    </div>
  );
}
