# BlackLens — Projects & Portfolio Specification (`/projects` & `/projects/[slug]`)
**Source Document:** `BlackLabs_BlackLens_Company_Website_Presentation_EN.pptx` (Slides 14, 15, 16)  
**Routes:**
* Overview: `/projects`
* Dynamic Project Detail: `/projects/[slug]`
**Purpose:** Let the visuals take center stage with a clean, high-impact portfolio grid and a reusable editorial project detail page template.

---

## 1. Portfolio Overview Page (`/projects`) (Slide 14 & 15)

### Header & Copy
* **Category Tag:** `BLACKLABS  /  BRAND & DIGITAL  /  PORTFOLIO`
* **Main Headline:**
  > **PROJECTS & PORTFOLIO.**  
  > **LET THE VISUALS TAKE CENTER STAGE.**
* **Subtitle:**
  > *"A curated selection of commercial films, aerial visuals, and creative cinematic experiments."*

### Filter Categories (Optional Pills / Tabs)
* `All`
* `Commercial & Brand Films`
* `Aerial Cinematography`
* `Creative & Documentary`

### Card Grid & Micro-Interactions (Slide 18 & 19)
* **Desktop:** Responsive 3-column / 2-column editorial grid.
* **Image Hover Effect:** Exact scale zoom **`1.035`** with smooth cubic-bezier easing.
* **Arrow Indicator:** Subtle Champagne arrow shift (`translateX(4px)`) on hover.
* **Card Metadata:**
  * Project Title
  * Category / Discipline
  * Year (`2026`)
  * Thumbnail (16:9 cinematic aspect ratio)

---

## 2. Reusable Project Detail Template (`/projects/[slug]`) (Slide 16)

The client presentation defines a **standard, reusable layout for every project**:

```
+---------------------------------------------------------+
|                  1. LARGE HERO IMAGE                    |
|   (Title, Category, Year & Visual Atmosphere)           |
+---------------------------------------------------------+
|                  2. THE STORY                           |
|   (Short project description & creative approach)       |
+---------------------------------------------------------+
|                  3. IMAGES & VIDEO                      |
|   (Video player / Gallery with clear playback controls) |
+---------------------------------------------------------+
|                  4. KEEP EXPLORING                      |
|   (Next Project / Back to Overview / Get in Touch CTA)  |
+---------------------------------------------------------+
```

### Breakdown of the 4 Template Blocks:

### Block 1: Large Hero Image / Header
* Full-width or boxed widescreen visual banner showcasing the key film still.
* **Project Meta Sidebar / Header:**
  * Project Title (e.g. *Alpine Velocity*, *Urban Pulse*)
  * Client / Brand Name
  * Category (e.g. *Commercial*, *Aerial*)
  * Role (e.g. *Cinematography, Drone, Color Grading*)
  * Year / Release Date

### Block 2: The Story
* **Headline:** `THE STORY & CONCEPT`
* **Body Content:**
  * Short project background and context.
  * The creative approach and directorial intention.
  * Technical execution notes (e.g. Sony FX3 settings, lighting setup, flight conditions).

### Block 3: Video Player & High-Resolution Gallery
* Embedded high-definition video player (YouTube/Vimeo embed or HTML5 `<video>` with custom Champagne playback controls).
* Secondary image gallery showcasing selected 4K film frame grabs and behind-the-scenes photographs.

### Block 4: Keep Exploring (Navigation & CTA)
* **Previous / Next Project Controls:** Quick links with thumbnail previews to jump to adjacent projects.
* **Back to Overview Link:** `Back to All Projects (←)`.
* **Direct Conversion CTA Banner:**
  * Headline: *"Like what you see? Let's create something together."*
  * Button: `Start a Project (→)` $\rightarrow$ `/kontakt`

