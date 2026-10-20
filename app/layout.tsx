import type { Metadata } from "next";
import { Instrument_Sans, Lexend } from "next/font/google";
import "./styles/normalize.css";
import "./styles/webflow.css";
import "./styles/blacklens-3a9e08.webflow.css";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BlackLens - Cinematic Filmmaking & Aerial Production",
  description:
    "Entdecken Sie BlackLens, spezialisiert auf Filmproduktion, Drohnenaufnahmen und Schnitt & Colorgrading. Erleben Sie atemberaubende visuelle Geschichten.",
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/webclip.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${instrumentSans.variable} ${lexend.variable}`}>
      <body>{children}</body>
    </html>
  );
}
