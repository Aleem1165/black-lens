"use client";

import React, { useState } from "react";

export default function ContactFormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim() || !agree) {
      setIsError(true);
      return;
    }
    setIsSubmitting(true);
    setIsError(false);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div className="content-block" style={{ width: "100%" }}>
      <div className="form_block w-form">
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="form" noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            
            {/* Name (Pflichtfeld) */}
            <div className="form_item">
              <label htmlFor="name" className="input_label" style={{ color: "#F6F4F0" }}>
                Name *
              </label>
              <input
                className="input_field w-input"
                maxLength={256}
                name="name"
                placeholder="Ihr Name"
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email (Pflichtfeld) */}
            <div className="form_item">
              <label htmlFor="email" className="input_label" style={{ color: "#F6F4F0" }}>
                E-Mail *
              </label>
              <input
                className="input_field w-input"
                maxLength={256}
                name="email"
                placeholder="ihre.email@beispiel.ch"
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Projektart (Pflichtfeld - Slide 18) */}
            <div className="form_item">
              <label htmlFor="projectType" className="input_label" style={{ color: "#F6F4F0" }}>
                Projektart *
              </label>
              <select
                id="projectType"
                name="projectType"
                className="input_field w-input"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                style={{ backgroundColor: "#17191C", color: projectType ? "#F6F4F0" : "#ACB0B5" }}
              >
                <option value="">Projektart auswählen...</option>
                <option value="film-production">Filmproduktion</option>
                <option value="aerial">Drohnenaufnahmen / Luftbild</option>
                <option value="editing-color">Schnitt &amp; Colorgrading</option>
                <option value="other">Sonstige Anfrage</option>
              </select>
            </div>

            {/* Zeitplan & Budget (Optional - Slide 18) */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div className="form_item">
                <label htmlFor="timeline" className="input_label" style={{ color: "#ACB0B5" }}>
                  Zeitplan (Optional)
                </label>
                <input
                  className="input_field w-input"
                  name="timeline"
                  placeholder="z.B. Sommer 2026"
                  type="text"
                  id="timeline"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                />
              </div>

              <div className="form_item">
                <label htmlFor="budget" className="input_label" style={{ color: "#ACB0B5" }}>
                  Budgetrahmen (Optional)
                </label>
                <input
                  className="input_field w-input"
                  name="budget"
                  placeholder="z.B. CHF 3'000 - 5'000"
                  type="text"
                  id="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
            </div>

            {/* Nachricht (Pflichtfeld) */}
            <div className="form_item">
              <label htmlFor="message" className="input_label" style={{ color: "#F6F4F0" }}>
                Nachricht *
              </label>
              <textarea
                id="message"
                name="message"
                maxLength={5000}
                placeholder="Erzählen Sie uns von Ihrem Projekt, Ideen oder Zielen..."
                className="form_input is-text-area w-input"
                style={{ height: "140px" }}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Datenschutz (Pflichtfeld - Slide 18) */}
            <div className="form_checkbox-wrapper" style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginTop: "0.25rem" }}>
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                style={{ marginTop: "4px", accentColor: "#D9B899", cursor: "pointer" }}
                required
              />
              <label htmlFor="privacy" style={{ fontSize: "0.85rem", color: "#ACB0B5", cursor: "pointer", lineHeight: "1.4" }}>
                Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Beantwortung meiner Anfrage verarbeitet werden.
              </label>
            </div>

            {/* Fehlermeldung (Slide 18) */}
            {isError && (
              <div
                style={{
                  padding: "0.85rem 1rem",
                  backgroundColor: "rgba(220, 38, 38, 0.12)",
                  border: "1px solid rgba(220, 38, 38, 0.4)",
                  color: "#fca5a5",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                }}
              >
                Ihre Anfrage konnte nicht gesendet werden. Bitte füllen Sie alle Pflichtfelder aus und versuchen Sie es erneut.
              </div>
            )}

            {/* Absenden Button (Champagne #D9B899) */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="button w-button"
              style={{
                backgroundColor: "#D9B899",
                color: "#090A0C",
                fontWeight: "600",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                padding: "0.9rem 1.75rem",
                borderRadius: "3px",
                border: "none",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                transition: "opacity 0.2s ease, transform 0.2s ease",
                marginTop: "0.5rem",
              }}
            >
              {isSubmitting ? "Wird gesendet..." : "Anfrage absenden (→)"}
            </button>
          </form>
        ) : (
          /* Erfolgsmeldung (Slide 18) */
          <div
            style={{
              padding: "2.5rem 2rem",
              backgroundColor: "#17191C",
              border: "1px solid #D9B899",
              borderRadius: "6px",
              textAlign: "center",
            }}
          >
            <div style={{ color: "#D9B899", fontSize: "2rem", marginBottom: "0.75rem" }}>✓</div>
            <h3 style={{ color: "#F6F4F0", fontSize: "1.4rem", marginBottom: "0.5rem" }}>
              Vielen Dank! Ihre Nachricht wurde gesendet.
            </h3>
            <p style={{ color: "#ACB0B5", fontSize: "0.95rem", maxWidth: "400px", margin: "0 auto 1.5rem" }}>
              Wir haben Ihre Nachricht erhalten und melden uns so schnell wie möglich bei Ihnen.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsSuccess(false);
                setName("");
                setEmail("");
                setMessage("");
                setAgree(false);
              }}
              style={{
                background: "transparent",
                border: "1px solid #ACB0B5",
                color: "#F6F4F0",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                borderRadius: "3px",
                fontSize: "0.85rem",
              }}
            >
              Weitere Nachricht senden
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
