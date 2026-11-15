# DiScience Inc. – Website Redesign

A completely modern, premium, professional, responsive, and **100% self-contained/independent** website built from scratch for **DiScience Inc. / DiScience Technology Solutions**.

---

## 🌟 Executive Summary & Key Highlights

- **100% Offline & URL-Independent**: The entire website operates directly from local files without relying on external CDNs, third-party APIs, or live server endpoints. Font files (Inter & Plus Jakarta Sans) and the Lucide Icon library (`js/lucide.min.js`) are fully self-hosted.
- **Strict Clean Tech Stack**: Built purely with semantic **HTML5**, **CSS3**, **Vanilla JavaScript**, and **Browser LocalStorage**. Zero dependencies on React, Next.js, Vue, Angular, Bootstrap, Tailwind, Node.js, PHP, or external databases.
- **Authentic Brand & Content**: All company details, service descriptions, portfolio projects, and legal documentation were sourced directly from company materials and the official URL, preserving genuine technical identity without fabricated stats or artificial filler.
- **Real Asset Curation**: Utilized original high-resolution assets from `discience_images`, organizing them into a structured directory and matching the genuine DiScience circular blue emblem logo and project screenshots.
- **Interactive LocalStorage Persistence**: Versioned client-side storage handles contact form inquiries, cookie consent preferences, and portfolio filter retention.

---

## 📁 Project Directory Structure

```
discience/
├── index.html                     # Homepage (Hero, Intro, Services, Works, Why Choose Us, Expertise, CTA, Footer)
├── about.html                     # About Page (Overview, Mission, Vision, Core Values, 4-Stage Approach)
├── services.html                  # Services Page (BI & Data Warehouse, Cloud Migration, Data Integration, App Dev, Web Dev, QA)
├── portfolio.html                 # Portfolio Page (Interactive filterable gallery + Project Detail Modal)
├── expertise.html                 # Technical Expertise (7 Engineering Domains + DevOps/CI Architecture)
├── contact.html                   # Contact Page (Validated Inquiries Form + LocalStorage Submissions Viewer)
├── privacy.html                   # Privacy & Cookies Policy (Complete official 14-section policy with Table of Contents)
│
├── assets/
│   ├── fonts/                     # Self-hosted WOFF2 fonts (Inter & Plus Jakarta Sans)
│   │   ├── font_0.woff2 ... font_6.woff2
│   ├── icons/                     # Brand identity & favicons
│   │   ├── discience-logo.png     # Official DiScience circular blue emblem logo
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   └── favicon-180x180.png
│   └── images/
│       ├── about/                 # Team collaboration, mission/vision, excellence graphics
│       ├── expertise/             # Domain graphics (BI, cloud, mobile, web, QA, DevOps)
│       ├── hero/                  # Main banner & workspace graphics
│       ├── portfolio/             # Hana Solution, SAP BI, Islamic Events, Event Buddy, etc.
│       └── services/              # High-res architectural visuals for all 6 service lines
│
├── css/
│   ├── fonts.css                  # Self-hosted font declarations (zero external Google requests)
│   ├── style.css                  # Core design tokens, typography, shared header, footer, buttons
│   ├── pages.css                  # Page-specific components (hero, service cards, portfolio grid, modal, forms)
│   ├── animations.css             # Scroll reveal transitions, keyframes, prefers-reduced-motion support
│   └── responsive.css             # Multi-breakpoint layout rules (1200px, 1024px, 768px, 640px, 480px)
│
├── js/
│   ├── lucide.min.js              # Self-hosted Lucide Icons library (zero external CDN dependency)
│   ├── storage.js                 # LocalStorage API manager with versioned keys and error handling
│   ├── navigation.js              # Sticky header, active link highlight, mobile drawer toggle
│   ├── portfolio.js               # Category filter engine & interactive case detail modal
│   ├── contact.js                 # Real-time form validation & LocalStorage inquiry submission engine
│   ├── animations.js              # IntersectionObserver scroll reveals & smooth back-to-top scrolling
│   └── main.js                    # Lucide initialization, cookie banner logic, current year injection
│
└── screenshots/                   # Desktop and mobile responsive verification captures
```

---

## 🚀 How to Run the Website

Because the site is 100% independent and static:

1. **Direct File Mode**: Double-click `index.html` in file explorer. It will open directly in any modern browser (Chrome, Edge, Firefox, Safari).
2. **Local HTTP Server (Optional)**:
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000/` in your browser.

No internet access is required. All fonts, scripts, styles, and assets resolve locally.

---

## 💾 LocalStorage Implementation Details

All client-side persistence is managed via `js/storage.js` with versioned keys:

| Key | Version | Purpose |
| :--- | :--- | :--- |
| `discience_cookie_consent_v1` | `v1` | Records user's consent choice (`accepted`, `rejected`, or `custom`) and analytics preferences. |
| `discience_contact_inquiries_v1` | `v1` | Stores inquiries submitted via the Contact form with timestamps and client details. |
| `discience_portfolio_filter_v1` | `v1` | Remembers the visitor's selected portfolio category filter across page reloads. |

> ⚠️ **Important Notice Regarding Contact Inquiries**:
> As specified in the PRD, this is a client-side frontend implementation without a backend email server. All submitted inquiries are safely persisted directly inside the visitor's browser **LocalStorage** (`discience_contact_inquiries_v1`). They are not transmitted over external email servers. Users can expand the *"View Your Saved Local Submissions"* drawer on `contact.html` to review their stored records.

---

## 📄 Page-by-Page Breakdown

1. **Home (`index.html`)**:
   - Sticky header with official DiScience logo, navigation, and CTA.
   - High-impact split hero section with bold typography, CTA buttons, metrics strip, and floating feature badges.
   - Company introduction highlighting DiScience as an enterprise technology partner.
   - 6 Core Service Cards (BI & Data Warehouse, Cloud Migration, Data Integration, App Development, Web Development, Quality Assurance).
   - Featured Projects showcase (Hana Solution, SAP BI, Islamic Events, Event Buddy).
   - "Why Choose DiScience?" value proposition grid.
   - Technical Expertise preview and high-conversion Call to Action banner.
   - Complete multi-column footer with contact details, quick links, and legal links.
   - Accessible Cookie Consent banner with customizable settings modal.

2. **About Us (`about.html`)**:
   - Executive company overview and engineering philosophy.
   - Mission and Vision split visual cards.
   - Core Values (Technical Integrity, Innovation First, Client-Centricity, Continuous Support).
   - 4-Stage Delivery Approach (Discovery, Architecture, Engineering & QA, Deployment & Support).

3. **Services (`services.html`)**:
   - In-depth architectural breakdown for each of the 6 core practices.
   - Feature checklists, key benefits, and dedicated consultation CTAs with prefilled inquiry routing.

4. **Portfolio (`portfolio.html`)**:
   - Filterable gallery: *All Projects*, *Mobile Applications*, *Web Development*, *Enterprise Solutions*, *Data & BI*.
   - Filter persistence in LocalStorage.
   - Interactive project detail modal featuring problem statements, delivered solutions, feature lists, tech stacks, and mobile screenshots.

5. **Technical Expertise (`expertise.html`)**:
   - Comprehensive matrix covering 7 core engineering domains plus DevOps & CI/CD infrastructure.
   - Granular capability lists, architecture overviews, and technology stacks.

6. **Contact (`contact.html`)**:
   - Direct contact card with official email (`hussam.zeeshan@discienceinc.com`).
   - Comprehensive contact form with real-time field validation (Full Name, Email, Phone, Subject, Message).
   - Client storage notice and interactive viewer for reviewing saved local submissions.

7. **Privacy and Cookies Policy (`privacy.html`)**:
   - Complete official policy preserving all 14 legal sections.
   - Sticky Table of Contents sidebar for instant anchor navigation.
   - Detailed personal data processing table (Usage, Account, Publication, Enquiry, Transaction, Notification data).
   - Cookie categories explanation and browser management guidance.

---

## 📱 Responsive Verification & Accessibility

The design was tested across standard viewport sizes:
- **Desktop (1440px+)**: Multi-column editorial grids, floating glass badges, expanded navigation.
- **Laptop (1024px)**: Fluid layouts, optimized column gaps.
- **Tablet (768px)**: 2-column to 1-column card transitions, full-width action buttons.
- **Mobile (375px to 640px)**: Compact mobile header with slide-in drawer, stacked stat strips, touch-friendly tap targets (>44px), zero horizontal overflow.
- **Reduced Motion**: Full support for `@media (prefers-reduced-motion: reduce)`, disabling CSS transforms and animations for sensitive users.
#   d i s c i e n c e  
 