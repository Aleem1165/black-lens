/**
 * BlackLens — Global Design Tokens & Theme Constants
 * Source: BlackLabs_BlackLens_Company_Website_Presentation_EN.pptx
 */

export const COLORS = {
  // Primary dark background
  cinematicBlack: "#090A0C",
  // Containers, cards, elevated surfaces
  charcoal: "#17191C",
  // Headlines, primary titles, high-contrast light text
  warmWhite: "#F6F4F0",
  // Paragraphs, secondary text, metadata
  mutedGrey: "#ACB0B5",
  // Primary CTA buttons, interactive badges, accent highlights
  champagne: "#D9B899",
  // Subtle borders, tags, optional accent
  steelBlue: "#526D79",
} as const;

export type ColorToken = keyof typeof COLORS;

export const FONTS = {
  headline: "var(--font-instrument-sans), 'Instrument Sans', sans-serif",
  body: "var(--font-lexend), 'Lexend', sans-serif",
} as const;

export const ANIMATIONS = {
  // Client requirement: exact card hover image zoom 1.035
  hoverScale: 1.035,
  hoverScaleClass: "transition-transform duration-500 ease-out hover:scale-[1.035]",
  transitionEase: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

export const SPACING_GRID = {
  unit: 8, // 8px consistent grid
  xs: "8px",
  sm: "16px",
  md: "24px",
  lg: "32px",
  xl: "48px",
  "2xl": "64px",
  "3xl": "96px",
  "4xl": "128px",
} as const;

