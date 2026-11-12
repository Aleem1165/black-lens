import React from "react";

interface StudioChannel {
  id: string;
  href: string;
  title?: string;
  target?: string;
  rel?: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

const STUDIO_CHANNELS: StudioChannel[] = [
  {
    id: "email",
    href: "mailto:office@blacklabs.ch",
    content: (
      <span className="relative z-10 pl-11 text-warm-white font-medium text-sm sm:text-base group-hover:text-champagne transition-colors">
        office@blacklabs.ch
      </span>
    ),
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    id: "phone",
    href: "tel:+41797267456",
    content: (
      <span className="relative z-10 pl-11 text-warm-white font-medium text-sm sm:text-base group-hover:text-champagne transition-colors">
        +41 79 726 74 56
      </span>
    ),
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    href: "https://instagram.com/BlackLens.ch",
    target: "_blank",
    rel: "noopener noreferrer",
    content: (
      <span className="relative z-10 pl-11 text-warm-white font-medium text-sm sm:text-base group-hover:text-champagne transition-colors">
        @BlackLens.ch
      </span>
    ),
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    id: "location",
    href: "https://www.google.com/maps/search/?api=1&query=Rickstrasse+6,+9037+Speicherschwendi,+Schweiz",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Auf Google Maps öffnen",
    content: (
      <div className="relative z-10 pl-11 leading-snug">
        <div className="text-warm-white font-medium text-sm sm:text-base group-hover:text-champagne transition-colors">
          Rickstrasse 6
        </div>
        <div className="text-xs text-muted-grey">
          9037 Speicherschwendi, Schweiz
        </div>
      </div>
    ),
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function ContactInfo() {
  return (
    <div className="lg:col-span-5">
      {/* Headline & Description from Presentation Slides 16 & 17 */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-bold font-headline tracking-tight leading-tight mb-6">
          LASS UNS ETWAS<br />
          <span className="text-champagne">SCHAFFEN.</span>
        </h1>
        <p className="text-lg text-muted-grey font-body leading-relaxed">
          Kontakt: Einfach &amp; persönlich. Ein direkter Weg vom Interesse zur Anfrage. Lassen Sie uns gemeinsam etwas Einzigartiges erschaffen.
        </p>
      </div>

      {/* Direct Studio Channels — Watermark Background Icons */}
      <div className="grid grid-cols-1 gap-3">
        {STUDIO_CHANNELS.map((channel) => (
          <a
            key={channel.id}
            href={channel.href}
            target={channel.target}
            rel={channel.rel}
            title={channel.title}
            className="group relative overflow-hidden flex items-center justify-between p-3.5 sm:p-4 rounded-lg bg-charcoal/70 border border-white/10 hover:border-champagne/50 hover:bg-charcoal transition-all duration-300"
          >
            {/* Background Watermark Icon on the Left */}
            <div
              aria-hidden="true"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-9 h-9 text-white/[0.08] group-hover:text-champagne/[0.28] transition-all duration-300 pointer-events-none select-none z-0 group-hover:scale-110"
            >
              {channel.icon}
            </div>

            {channel.content}

            {/* Arrow indicator */}
            <svg
              className="relative z-10 w-4 h-4 text-muted-grey/60 group-hover:text-champagne group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}

