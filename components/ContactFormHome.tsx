"use client";

import React, { useState } from "react";

export default function ContactFormHome() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Filmproduktion");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const options = ["Filmproduktion", "Drohnen", "Schnitt & Color", "Sonstiges"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setIsError(true);
      return;
    }
    setIsSubmitting(true);
    setIsError(false);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div className="card_body margin-bottom_none w-form">
      {!isSuccess ? (
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div
            id="w-node-_9212eb8c-5837-8be4-503d-7cf38027cb1f-8027caec"
            className="form_item is-half w-node-ae4df003-82e8-81f8-4ce5-5deaa2b81b12-37623b39"
          >
            <label htmlFor="first-name-6" className="input_label">
              Vorname
            </label>
            <input
              className="input_field w-input"
              maxLength={256}
              name="first-name-6"
              placeholder="First name"
              type="text"
              id="first-name-6"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div
            id="w-node-_9212eb8c-5837-8be4-503d-7cf38027cb23-8027caec"
            className="form_item is-half w-node-ae4df003-82e8-81f8-4ce5-5deaa2b81b16-37623b39"
          >
            <label htmlFor="last-name-6" className="input_label">
              Nachname
            </label>
            <input
              className="input_field w-input"
              maxLength={256}
              name="last-name-6"
              placeholder="Last name"
              type="text"
              id="last-name-6"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="form_item is-half">
            <label htmlFor="email-13" className="input_label">
              E-Mail
            </label>
            <input
              className="input_field w-input"
              maxLength={256}
              name="email-13"
              placeholder="email@website.com"
              type="email"
              id="email-13"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div
            id="w-node-_9212eb8c-5837-8be4-503d-7cf38027cb2b-8027caec"
            className="form_item is-half w-node-ae4df003-82e8-81f8-4ce5-5deaa2b81b1e-37623b39"
          >
            <label htmlFor="phone-number" className="input_label">
              Telefon
            </label>
            <input
              className="input_field w-input"
              maxLength={256}
              name="Phone"
              placeholder="1 (555) 000-0000"
              type="tel"
              id="phone-number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form_item">
            <label className="input_label margin-bottom_xsmall">
              Wobei unterstützen wir?
            </label>
            <div className="flex_horizontal gap-small is-wrap">
              {options.map((opt) => {
                const isSelected = category === opt;
                return (
                  <label
                    key={opt}
                    className="radio w-radio"
                    onClick={() => setCategory(opt)}
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio_toggle w-radio-input ${
                        isSelected ? "w--redirected-checked" : ""
                      }`}
                      style={
                        isSelected
                          ? {
                              backgroundColor: "var(--_colors---core-accent-color--accent-primary, #f6e5ba)",
                              borderColor: "var(--_colors---core-accent-color--accent-primary, #f6e5ba)",
                            }
                          : undefined
                      }
                    />
                    <input
                      type="radio"
                      name="radio"
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                      value={opt}
                      checked={isSelected}
                      onChange={() => setCategory(opt)}
                    />
                    <span className="radio_label w-form-label">{opt}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="form_item">
            <label htmlFor="message-14" className="input_label">
              Nachricht
            </label>
            <textarea
              id="message-14"
              name="message-14"
              maxLength={5000}
              placeholder="Type your message..."
              className="input_field input_text-area w-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="form_item">
            <div className="button-group">
              <input
                type="submit"
                disabled={isSubmitting}
                className="button w-button"
                value={isSubmitting ? "Bitte warten..." : "Submit"}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          {isError && (
            <div className="form_error-message w-form-fail" style={{ display: "block", marginTop: "1rem" }}>
              <div className="form_error-message_content">
                <div className="display_inline-block">Fehler – bitte prüfen Sie die Eingaben.</div>
              </div>
            </div>
          )}
        </form>
      ) : (
        <div className="form_success-message w-form-done" style={{ display: "block" }}>
          <div>Danke, wir melden uns.</div>
        </div>
      )}
    </div>
  );
}
