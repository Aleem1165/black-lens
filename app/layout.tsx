import type { Metadata } from "next";
import { Instrument_Sans, Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
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
  title: {
    default: "BlackLens — Filmproduktion & Drohnenaufnahmen",
    template: "%s | BlackLens",
  },
  description:
    "BlackLens — Ihr Partner für cineastische Filmproduktion, Drohnenaufnahmen und Schnitt & Colorgrading in der Schweiz. Geschichten, die bleiben.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${instrumentSans.variable} ${lexend.variable} overflow-x-hidden`}
    >
      <body className="bg-cinematic-black text-warm-white antialiased flex flex-col min-h-screen overflow-x-hidden">
        {/* <ScrollToTop /> */}
        <Navbar />
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
