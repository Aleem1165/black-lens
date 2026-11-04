# BlackLens — Global Design System & Project Overview
**Source Document:** `BlackLabs_BlackLens_Company_Website_Presentation_EN.pptx`  
**Brand:** BlackLens (Presented by BlackLabs)  
**Year:** 2026  
**Status:** Approved Client Brief & Blueprint  

---

## 1. Brand Identity & Vision

### The Core Philosophy
> *"PASSION BECOMES PRESENCE."*  
> *"A premium website that does not pretend to be a large agency, but showcases genuine passion, filmmaking skills and growth."*

* **Founder & Filmmaker:** **Timo** (21 years old, Switzerland).
* **Gear & Craft:** Sony FX3, cinematic composition, authentic visual storytelling.
* **Long-term Vision:** To direct and produce an independent feature film for cinema/big screen.
* **The Brand Relationship:**
  1. **BlackLabs:** The technical lab, experimental ground, and digital venture creator.
  2. **Evolution:** Childhood video hobby maturing into ambitious, high-end filmmaking.
  3. **BlackLens:** Dedicated creative film brand with a distinct personal signature.

---

## 2. Visual DNA & Aesthetic Guidelines
* **Core Pillars:** `Cinematic` | `Minimal` | `Editorial` | `Emotional`
* **Philosophy:** *"Fewer effects. Greater impact."*
* **Spacing & Grid:** 
  * Generous whitespace.
  * Strict, consistent **8px grid system** (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`, `128px`).
* **Visual Tone:** Authentic, moody, premium, warm film grain and high-contrast composition.

---

## 3. Color Palette & UI Role

| Color Name | HEX Code | Tailwind Token | UI Role / Usage Hierarchy |
| :--- | :--- | :--- | :--- |
| **Cinematic Black** | `#090A0C` | `bg-cinematic-black` | Primary page background across the entire website |
| **Charcoal** | `#17191C` | `bg-charcoal` / `surface` | Card surfaces, modals, containers, section dividers |
| **Warm White** | `#F6F4F0` | `text-warm-white` | Main headlines, primary navigation text, light surfaces |
| **Muted Grey** | `#ACB0B5` | `text-muted-grey` | Secondary text, body descriptions, meta tags, timestamps |
| **Champagne** | `#D9B899` | `accent-champagne` | Key actions, primary CTA buttons, badges, subtle highlights |
| **Steel Blue** | `#526D79` | `accent-steel` | Optional accent (borders, tags, subtle hover tint) |

### Visual Hierarchy Rules (Slide 05 & 06)
* **Warm White (`#F6F4F0`):** Dominates all level 1 & level 2 headlines.
* **Muted Grey (`#ACB0B5`):** Applied to all paragraph text and metadata to reduce eye fatigue.
* **Champagne (`#D9B899`):** Reserved strictly for interactive anchors, primary buttons, and key focus badges.
* **Charcoal (`#17191C`):** Subtle card elevated surfaces on top of `#090A0C`.

---

## 4. Typography System (Slide 06)

* **Primary Headline Font:** `Instrument Sans`
  * *Fallback:* `Aptos Display`, `-apple-system`, `sans-serif`
  * *Style:* Uppercase tracking, tight letter spacing on titles, bold and impactful weights.
* **Primary Body Font:** `Lexend`
  * *Fallback:* `Aptos`, `sans-serif`
  * *Style:* Highly readable, clean, modern proportions.
* **Editorial Slogan Font:** German/English bilingual typography accents (e.g. *"GESCHICHTEN, DIE BLEIBEN"*).

---

## 5. Motion with Purpose (Slide 18)

Motion must be cinematic, smooth, and never gimmicky:
1. **Intro Transition:** Soft logo and main headline fade-in on page load.
2. **Hero Motion:** Slow zoom-in effect on hero showreel or background still (`scale-100` to `scale-105` over 12s), non-distracting.
3. **Scroll Reveal:** Page sections gently reveal from below with subtle opacity and slight Y-translation (`y: 20px -> 0px`).
4. **Card / Media Hover:** 
   * Image zoom scale: exactly **`1.035`** (`transform scale(1.035)` with cubic-bezier transition).
   * Subtle arrow motion on link hover (`translateX(4px)`).
5. **Accessibility Requirement:** Full compliance with `prefers-reduced-motion: reduce` (instantly disable non-essential animations).

---

## 6. Responsive Breakpoints & Layout (Slide 19)

* **Desktop ($\ge 1024\text{px}$):**
  * Large expansive hero with video/still.
  * 3-column portfolio grid.
  * Spacious margins and full editorial layout.
* **Tablet ($768\text{px} - 1023\text{px}$):**
  * Flexible 2-column layout.
  * Tighter padding while preserving typography contrast.
* **Smartphone ($< 768\text{px}$):**
  * Single column flow.
  * Minimum 44px touch targets.
  * Full-screen mobile overlay menu with clear navigation.
  * High-contrast readable typography.

---

## 7. Technical Excellence & Standards (Slide 20)

* **Performance:**
  * Optimized video showreel with lightweight poster image fallback.
  * Modern image formats (WebP/AVIF), next/image lazy loading, zero cumulative layout shift (CLS).
* **SEO:**
  * Unique `<title>` and `<meta name="description">` per page.
  * Clean semantic routing (`/`, `/about`, `/services`, `/projects`, `/projects/[slug]`, `/kontakt`).
  * Auto-generated XML Sitemap & OpenGraph metadata.
* **Accessibility:**
  * Strict WCAG AA contrast ratio compliance (Warm White / Champagne against Cinematic Black / Charcoal).
  * Explicit keyboard `:focus-visible` styling.
  * Descriptive `alt` attributes on all video stills and portraits.
* **Contact & Form Security:**
  * Server-side input validation.
  * Spam honeypot protection.
  * Zero client-side API secrets/credentials exposure.

---

## 8. Master Website Architecture (Slide 07)

1. **[PAGE_HOME.md](./PAGE_HOME.md):** Hero, Services Summary, 4 Featured Projects, About Timo Snippet, 4-Step Process, CTA.
2. **[PAGE_ABOUT.md](./PAGE_ABOUT.md):** Timo's Story, 21-Year Milestone, BlackLabs origin, Sony FX3 craft, Feature Film vision.
3. **[PAGE_SERVICES.md](./PAGE_SERVICES.md):** Film Production, Aerial Cinematography, Editing & Color Grading.
4. **[PAGE_PROJECTS.md](./PAGE_PROJECTS.md):** Portfolio Showcase & Reusable Single Project Case Study Template.
5. **[PAGE_CONTACT.md](./PAGE_CONTACT.md):** Swiss Studio Address, Direct Channels, Interactive Inquiry Form with state handlers.

