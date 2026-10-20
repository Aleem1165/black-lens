"use client";

import React, { useState } from "react";

export default function ContactFormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !agree) {
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
    <div className="content-block">
      <div className="form_block w-form">
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="form" noValidate>
            <div className="form_item">
              <label htmlFor="name-4" className="input_label">
                Name
              </label>
              <input
                className="input_field w-input"
                maxLength={256}
                name="name-4"
                placeholder="Your name"
                type="text"
                id="name-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form_item">
              <label htmlFor="email-7" className="input_label">
                E-Mail
              </label>
              <input
                className="input_field w-input"
                maxLength={256}
                name="email-7"
                placeholder="email@website.com"
                type="email"
                id="email-7"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form_item">
              <label htmlFor="message-8" className="input_label">
                Nachricht
              </label>
              <textarea
                id="message-8"
                name="message-8"
                maxLength={5000}
                placeholder="Type your message..."
                className="input_field input_text-area w-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="form_item">
              <label
                className="w-checkbox checkbox"
                onClick={() => setAgree(!agree)}
                style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <div
                  className={`w-checkbox-input w-checkbox-input--inputType-custom inline-input-0 ${
                    agree ? "w--redirected-checked" : ""
                  }`}
                  style={
                    agree
                      ? {
                          backgroundColor: "#3898ec",
                          borderColor: "#3898ec",
                        }
                      : undefined
                  }
                />
                <input
                  type="checkbox"
                  name="agreement-checkbox-4"
                  id="agreement-checkbox-4"
                  required
                  style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <span className="checkbox_label w-form-label">
                  Ich stimme der{" "}
                  <a href="#" className="text-link is-secondary text-span_padding" onClick={(e) => e.stopPropagation()}>
                    Datenschutzerklärung
                  </a>{" "}
                  zu.
                </span>
              </label>
            </div>

            <div className="form_item">
              <div className="button-group is-vertical-stretch">
                <input
                  type="submit"
                  disabled={isSubmitting}
                  className="button w-button"
                  value={isSubmitting ? "Bitte warten..." : "Submit"}
                  style={{ cursor: "pointer", width: "100%" }}
                />
              </div>
            </div>

            {isError && (
              <div className="form_error-message w-form-fail" style={{ display: "block", marginTop: "1rem" }}>
                <div className="form_error-message_content">
                  <div className="display_inline-block">
                    {!agree
                      ? "Bitte stimmen Sie der Datenschutzerklärung zu."
                      : "Fehler. Bitte Eingaben prüfen."}
                  </div>
                </div>
              </div>
            )}
          </form>
        ) : (
          <div className="form_success-message w-form-done" style={{ display: "block" }}>
            <div>Danke, wir melden uns bald.</div>
          </div>
        )}
      </div>
    </div>
  );
}
