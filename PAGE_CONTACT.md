# BlackLens — Contact Page & Form Specification (`/kontakt` or `/contact`)
**Source Document:** `BlackLabs_BlackLens_Company_Website_Presentation_EN.pptx` (Slides 16, 17, 18, 20)  
**Route:** `/kontakt` (or `/contact`)  
**Purpose:** A direct, personal, and frictionless path from initial visitor interest to a concrete project inquiry.

---

## 1. Page Header & Direct Channels (Slide 16 & 17)

### Visual Style
* Split layout:
  * **Left Column:** Editorial German/English typography, personal greeting, and direct studio contact channels.
  * **Right Column:** Clean, dark Charcoal form card (`#17191C`) with Warm White inputs.

### Exact Copy & Headlines
* **Pre-title:** `BLACKLABS  /  BRAND & DIGITAL  /  CONTACT`
* **Main Headline:**
  > **LASS UNS**  
  > **ETWAS SCHAFFEN.**  
  > *(Let's create something together.)*
* **Subtitle:**
  > *"Contact: Simple & Personal. A direct path from interest to inquiry."*

### Official Contact Details (Exact Client Data from Slide 17)
* **Email:** [`office@blacklabs.ch`](mailto:office@blacklabs.ch)
* **Phone:** `+41 79 726 74 56`
* **Instagram:** `@BlackLens.ch` (Link: `https://instagram.com/BlackLens.ch`)
* **Studio Address:**
  > **Rickstrasse 6**  
  > **9037 Speicherschwendi**  
  > **Switzerland**

---

## 2. Contact Form Specification (Slide 17 & 18)

The presentation strictly defines the required fields, optional fields, and UI feedback states:

### Form Fields

| Field Name | Type | Status | Placeholder / Options / Validation |
| :--- | :--- | :--- | :--- |
| **Name** | Text Input | **REQUIRED** | e.g. "Alex Müller" |
| **Email** | Email Input | **REQUIRED** | e.g. "alex@company.com" (valid email format) |
| **Project Type** | Select / Dropdown | **REQUIRED** | Options:<br>• *Commercial Film*<br>• *Aerial Cinematography*<br>• *Brand Documentary / Image Film*<br>• *Post-Production & Color Grading*<br>• *Other Inquiry* |
| **Message** | Textarea | **REQUIRED** | e.g. "Tell us about your project, ideas, or timeline..." |
| **Timeline** | Text Input / Select | *OPTIONAL* | e.g. "Immediate / 1-2 months / Flexible" |
| **Approximate Budget** | Select / Text Input | *OPTIONAL* | e.g. "< CHF 3,000 / CHF 3,000 - 6,000 / > CHF 6,000" |
| **Privacy Consent** | Checkbox | **REQUIRED** | *"I agree that my submitted data will be processed to handle this inquiry in accordance with the privacy policy."* |

---

## 3. Form States & System Messages (Slide 18)

### Submit Button
* **Button Text:** `Send Inquiry (→)`
* **Color:** Champagne (`#D9B899`), hover effect, loading spinner on submission.

### Success State (Exact Presentation String)
* **Trigger:** Successful server-side validation and email delivery dispatch.
* **Message Box:**
  > ✅ **"Thank you! Your message has been sent."**  
  > *(We will get back to you within 24–48 hours.)*

### Error State (Exact Presentation String)
* **Trigger:** Network failure, invalid field input, or server dispatch error.
* **Message Box:**
  > ❌ **"Your inquiry could not be sent. Please try again."**  
  > *(Or contact us directly via email at office@blacklabs.ch)*

---

## 4. Technical & Security Requirements (Slide 20)
* **Server-side Validation:** Validate all fields on Next.js API route / Server Action.
* **Spam Prevention:** Honeypot field and rate-limiting to prevent bot spam.
* **Zero Front-end Secrets:** Keep SMTP credentials / API keys safely on the server side (`process.env`).
* **Instant Reset:** Clean form fields on verified success.

