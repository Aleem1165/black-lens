import React from "react";
import ContactFormPage from "@/components/ContactFormPage";

export default function ContactFormSection() {
  return (
    <div className="lg:col-span-7 bg-charcoal p-8 sm:p-12 rounded-xl border border-white/10">
      <h2 className="text-2xl font-headline font-semibold text-warm-white mb-2">
        Projekt starten
      </h2>
      <p className="text-sm text-muted-grey mb-8 font-body">
        Füllen Sie das Formular aus und wir melden uns zeitnah mit ersten Ideen und nächsten Schritten.
      </p>

      <ContactFormPage />
    </div>
  );
}

