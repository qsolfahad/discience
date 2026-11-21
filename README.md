# DiScience Inc. – Website Redesign & User Guide

A modern, aesthetic, responsive, and **100% self-contained/independent** website built from scratch for **DiScience Inc. / DiScience Technology Solutions** (https://discienceinc.com/).

---

## 🌟 Executive Summary & Key Highlights

- **Aesthetic & Modern UI/UX**: Designed with dark navy aesthetics (`#0A1124`, `#101B35`), electric blue glow accents (`#246BFD`), purple undertones (`#8B5CF6`), glassmorphism cards, glowing ambient orbs, smooth scroll reveals, micro-interactions, and animated counter metrics.
- **100% Self-Contained & Offline-Ready**: The entire website operates directly by double-clicking `index.html` in any web browser. Zero external CDN dependencies—fonts (Inter & Plus Jakarta Sans WOFF2) and Lucide Icons (`js/lucide.min.js`) are fully self-hosted locally.
- **Color-Coded Mobile App Showcase**:
  - 🟢 **Islamic Events**: Styled with an emerald green theme (`#059669`) using genuine green application screenshots (`assets/images/portfolio/islamic-events-app.png`, `islamic-events-screen-1.jpeg`, `islamic-events-screen-2.jpeg`).
  - 🌸 **Event Buddy**: Styled with a vibrant magenta/pink theme (`#DB2777` / `#9D174D`) using genuine pink application screenshots (`assets/images/portfolio/event-buddy-app.png`, `event-buddy-screen-1.jpeg`, `event-buddy-screen-2.jpeg`).
- **Direct Official Android App Store Links**:
  - **Islamic Events (Google Play Store)**: [https://play.google.com/store/apps/details?id=com.discience.islamicEvents&hl=en](https://play.google.com/store/apps/details?id=com.discience.islamicEvents&hl=en)
  - **Event Buddy (Google Play Store)**: [https://play.google.com/store/apps/details?id=com.discience.eventbuddy&hl=en_CA&gl=US](https://play.google.com/store/apps/details?id=com.discience.eventbuddy&hl=en_CA&gl=US)
- **Dedicated Interactive User Guide Page**: `user-guide.html` provides visitors and clients with comprehensive instructions on website navigation, detailed feature walkthroughs for both mobile applications, service exploration, and an FAQ accordion.
- **Pure Native Tech Stack**: Zero React, Vue, Next.js, Angular, Bootstrap, Tailwind, Node.js, PHP, or external databases. Built strictly with semantic HTML5, CSS3, Vanilla JavaScript, and LocalStorage.

---

## 📁 Project Directory Structure

```
discience/
├── index.html              # Homepage with hero, services, featured projects, why us, expertise, CTA
├── about.html              # Company story, leadership principles, mission/vision, by-the-numbers stats
├── services.html           # 6 core enterprise services with sticky anchor navigation & app store links
├── portfolio.html          # Interactive gallery with 8 projects, category filters, detail modal & app links
├── expertise.html          # 7 technical discipline cards & engineering methodology
├── contact.html            # Contact inquiry form with client-side validation & LocalStorage saving
├── privacy.html            # Formal GDPR/CCPA-aligned privacy policy & cookie management
├── user-guide.html         # Interactive user guide covering site navigation, apps walkthrough & FAQ
│
├── assets/
│   ├── fonts/              # Self-hosted WOFF2 fonts (Inter & Plus Jakarta Sans)
│   ├── icons/              # DiScience circular emblem, favicons (16x16, 32x32, 180x180)
│   └── images/
│       ├── hero/           # Hero visual showcase and consulting workspace imagery
│       ├── services/       # Content-matched service visuals (BI, Cloud, Integration, App, Web, QA)
│       ├── portfolio/      # Color-matched screenshots (Islamic Events in Green, Event Buddy in Pink)
│       ├── expertise/      # Technical domain graphics
│       └── about/          # Collaboration, mission, and lab showcase visuals
│
├── css/
│   ├── style.css           # Core design system, variables, layouts, glassmorphism, buttons, cards
│   ├── pages.css           # Page-specific grids, subpage heroes, sticky navigation
│   ├── animations.css      # 14 custom keyframes (shimmer, orbs, pulse, gradientShift, reveals)
│   ├── responsive.css      # Fluid breakpoints (Desktop 1440px+, Laptop 1024px, Tablet 768px, Mobile 375px+)
│   └── fonts.css           # @font-face rules referencing local WOFF2 font files
│
├── js/
│   ├── main.js             # Global coordinator, Lucide icon hydration, cookie consent, animated counters
│   ├── navigation.js       # Sticky header state, mobile drawer toggle, active link indicators
│   ├── portfolio.js        # Filter button handler with LocalStorage retention
│   ├── contact.js          # Form validation, sanitized submission, LocalStorage storage engine
│   ├── animations.js       # IntersectionObserver scroll reveal engine
│   ├── storage.js          # Safe LocalStorage wrapper with error handling & versioning
│   └── lucide.min.js       # Self-hosted Lucide Icons library
│
├── screenshots/            # Visual verification screenshots across desktop and mobile viewports
├── verify_site.py          # Automated verification script testing all 8 pages for link & image integrity
└── README.md               # Master documentation and reference guide
```

---

## 🧭 Complete Website Navigation & User Guide

### 1. Homepage (`index.html`)
- **Hero Section**: Modern dark navy gradient with floating ambient glowing orbs, bold typography, animated gradient headline, and key metric badges.
- **Services Showcase**: 6 interactive service cards featuring gradient top-border glow transitions on hover.
- **Featured Projects**: Highlights Hana Solution, SAP BI, Islamic Events (with Green theme and Play Store download button), and Event Buddy (with Pink theme and Play Store download button).
- **Why Choose Us**: Glassmorphism cards with gradient icons highlighting team experience, innovation, and 24/7 support.
- **Interactive Metrics**: Live animated number counters displaying years of experience, projects delivered, and client satisfaction.

### 2. Services Page (`services.html`)
- **Sticky Navigation Bar**: A pinned horizontal bar allowing visitors to smoothly jump between all 6 core services:
  1. *BI & Data Warehouse*
  2. *Cloud Migration*
  3. *Data Integration*
  4. *App Development* (includes direct links to download Islamic Events & Event Buddy on Google Play)
  5. *Web Development*
  6. *Quality Assurance*
- **Action CTAs**: Every service block includes dedicated consultation inquiry links pre-configured for the contact page.

### 3. Portfolio Page (`portfolio.html`)
- **Interactive Filtering**: Filter projects by *All Projects*, *Mobile Applications*, *Web Development*, *Enterprise Solutions*, or *Data & BI*. The selected filter is saved to browser LocalStorage.
- **Color-Themed Cards**:
  - **Islamic Events**: Green badge, emerald green accent border, green Google Play button.
  - **Event Buddy**: Pink badge, vibrant magenta accent border, pink Google Play button.
- **Project Detail Modal**: Clicking "View Details" opens a modal displaying the problem context, solution delivered, capabilities, tech stack, screenshots gallery, and direct Play Store download buttons.

### 4. Technical Expertise (`expertise.html`)
- Deep dive into DiScience's core disciplines: Mobile Engineering, Fullstack Web, Enterprise ERP / SAP HANA, Business Intelligence, Cloud Technologies, Data Engineering, and Quality Assurance.

### 5. Dedicated User Guide (`user-guide.html`)
- **Site Navigation Guide**: Visual roadmap detailing what each section of the website contains.
- **Islamic Events App Guide**:
  - Detailed feature breakdown (Prayer schedules, masjid event publishing, community notifications).
  - Green-themed layout with official screenshots.
  - Direct Google Play Store download button.
- **Event Buddy App Guide**:
  - Detailed feature breakdown (Organization registration, catering details, guest scanning, ticket tracking).
  - Pink-themed layout with official screenshots.
  - Direct Google Play Store download button.
- **Client Engagement Walkthrough**: 4-step process explaining how to initiate an enterprise software consulting engagement.
- **Interactive FAQ Accordion**: Expandable answers to common client questions regarding platforms, security, support, and deployment.

### 6. Contact Page (`contact.html`)
- **Contact Form**: Fields for Full Name, Email Address, Phone Number, Subject, and Project Message.
- **Form Validation**: Real-time checking for required fields, valid email syntax, and character minimums.
- **LocalStorage Data Persistence**: Inquiries are saved safely in the visitor's browser `LocalStorage` under `discience_inquiries_v1`.
- ⚠️ **Important Note**: Submissions remain in the user's browser storage for demonstration and review purposes and are not dispatched to live SMTP servers (zero backend architecture).

---

## 📱 Mobile Applications Reference

| Application | Primary Theme | Google Play Store Link | Key Target Audience |
|---|---|---|---|
| **Islamic Events** | Emerald Green (`#059669`) | [Google Play](https://play.google.com/store/apps/details?id=com.discience.islamicEvents&hl=en) | Masajids, Muslim community centers & event attendees |
| **Event Buddy** | Vibrant Pink (`#DB2777`) | [Google Play](https://play.google.com/store/apps/details?id=com.discience.eventbuddy&hl=en_CA&gl=US) | Event planners, corporate organizers & non-profits |

---

## 🧪 Automated Site Verification

Run the Python verification test at any time to validate all 8 HTML pages, internal links, stylesheets, scripts, and local images:

```powershell
python verify_site.py
```

Expected result:
```
=== VERIFYING ALL 8 PAGES ===
--- Checking index.html ---
  Validated: 11 images, 51 internal page links.
--- Checking about.html ---
  Validated: 7 images, 35 internal page links.
--- Checking services.html ---
  Validated: 8 images, 36 internal page links.
--- Checking portfolio.html ---
  Validated: 10 images, 36 internal page links.
--- Checking expertise.html ---
  Validated: 10 images, 35 internal page links.
--- Checking contact.html ---
  Validated: 2 images, 33 internal page links.
--- Checking privacy.html ---
  Validated: 2 images, 33 internal page links.
--- Checking user-guide.html ---
  Validated: 10 images, 58 internal page links.
>>> ALL 8 PAGES PASSED INTEGRITY CHECKS!
```

---

## 🎨 Design System Specifications

| Token | Value | Purpose |
|---|---|---|
| `--primary-navy` | `#101B35` | Main brand dark background |
| `--primary-navy-dark` | `#0A1124` | Hero and deep surface background |
| `--accent-blue` | `#246BFD` | Primary action buttons and focus states |
| `--accent-blue-glow` | `rgba(36, 107, 253, 0.25)` | Ambient glowing backdrop orbs |
| `--islamic-green` | `#059669` / `#047857` | Islamic Events app branding |
| `--eventbuddy-pink` | `#DB2777` / `#9D174D` | Event Buddy app branding |
| `--bg-main` | `#F5F7FB` | Crisp light body background |
| `--bg-surface` | `#FFFFFF` | Clean card and component surfaces |
| `--font-heading` | `Plus Jakarta Sans` | Bold, modern display typography |
| `--font-body` | `Inter` | Clean, highly legible body copy |

---

## 📄 License & Credits
© DiScience Inc. All rights reserved. Built as a high-performance, independent static website.
