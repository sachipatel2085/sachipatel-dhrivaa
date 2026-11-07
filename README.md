# DHRIVAA – Global Trade Partner

> **Agricultural Commodity Sourcing & Procurement Corporate Website**  
> Tailored for International Commodity Buyers (UAE, Saudi Arabia, Oman, Qatar, Bahrain, Kuwait & Global Markets).

---

## 🌾 Project Overview

**DHRIVAA** is an India-based agricultural commodity sourcing and procurement coordination partner connecting international buyers with verified Indian solvent extraction plants and crushing mills across Gujarat and western India.

This project is built as a high-performance, SEO-optimized, static corporate website adhering to international trade credibility aesthetics inspired by Solstice Trading and Chemixco.

---

## 🛠️ Technology Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / SSG)
- **UI Components**: [React 18](https://react.dev/) (interactive forms, sticky navigation & dropdowns)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO & Metadata**: `@astrojs/sitemap`, Open Graph, JSON-LD Schema (Organization, Product, BreadcrumbList)
- **Type Safety**: TypeScript

---

## 📁 Project Architecture

```
D:\c data\Desktop\DHRIVAA\
├── public/
│   ├── images/
│   │   ├── hero-port.jpg          # Deepwater container port sunset photography
│   │   ├── rapeseed-meal.jpg      # Rapeseed meal protein powder & canola flowers
│   │   ├── castorseed-meal.jpg    # Organic brown castor meal & seeds
│   │   ├── castor-oil.jpg         # Golden castor oil glassware & seeds
│   │   ├── step-requirements.jpg  # Procurement specifications review
│   │   ├── step-suppliers.jpg     # Gujarat agro-processing storage silos
│   │   ├── step-quality.jpg       # Laboratory testing & sample inspection
│   │   └── step-logistics.jpg     # Port container loading & crane logistics
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── Logo.astro         # Vector SVG logo matching corporate mark
│   │   ├── contact/
│   │   │   └── ContactForm.tsx    # Accessible, validated inquiry form
│   │   ├── home/
│   │   │   ├── Hero.astro         # Cinematic hero with Gulf trade arcs
│   │   │   ├── Capabilities.astro # Horizontal business capabilities strip
│   │   │   ├── ProductShowcase.astro # Commodity portfolio cards
│   │   │   ├── WhyChooseUs.astro  # 6 Pillars of trade partnership
│   │   │   ├── SourcingProcess.astro # 4-step procurement workflow
│   │   │   ├── GlobalMarkets.astro # Gulf trade corridor & port map
│   │   │   ├── QualityAssurance.astro # Quality coordination checkpoints
│   │   │   └── FinalCTA.astro     # Dual action quote & WhatsApp banner
│   │   └── layout/
│   │       ├── Navbar.tsx         # Sticky, responsive navbar with dropdowns
│   │       └── Footer.astro       # Corporate dark navy footer with legal notes
│   ├── data/
│   │   ├── company.ts             # Central company configuration & pillars
│   │   ├── navigation.ts          # Nav links & dropdown structure
│   │   └── products.ts            # Local structured commodity data & FAQs
│   ├── layouts/
│   │   └── BaseLayout.astro       # Root SEO layout, JSON-LD, typography
│   ├── pages/
│   │   ├── index.astro            # Homepage (/)
│   │   ├── about-us.astro         # About Us (/about-us)
│   │   ├── products/
│   │   │   ├── index.astro        # Products Catalog (/products)
│   │   │   └── [slug].astro       # Dedicated SEO product pages (/products/*)
│   │   ├── sourcing-procurement.astro # Sourcing Process (/sourcing-procurement)
│   │   ├── quality-assurance.astro # Quality & Inspection (/quality-assurance)
│   │   ├── contact.astro          # Contact & Inquiry desk (/contact)
│   │   ├── privacy-policy.astro   # Corporate Privacy (/privacy-policy)
│   │   ├── terms-and-conditions.astro # Terms & Conditions (/terms-and-conditions)
│   │   └── 404.astro              # Custom 404 page (/404)
│   └── styles/
│       └── global.css             # Tailwind base, typography & scrollbars
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 🚀 Running the Project

### 1. Install Dependencies (if cloned elsewhere)
```bash
npm install
```

### 2. Development Server
Start the local development server at `http://localhost:4321`:
```bash
npm run dev
```

### 3. Production Build
Generates the fully pre-rendered static HTML website inside `dist/`:
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🛡️ Business Positioning Integrity
DHRIVAA is positioned strictly as an **independent sourcing and procurement coordinator**, connecting international buyers with verified Indian crushing and extraction units. The website adheres to honest corporate language:
- No manufacturing claims or false production facility ownership.
- Product specifications are marked as **"available upon request"** per buyer contract rather than fabricated chemical grades.
- Pre-shipment inspections are coordinated via accredited third-party surveyors (e.g., SGS, Bureau Veritas) on demand.

---

## 📈 SEO & Performance Highlights
- 100% Pre-rendered Static HTML (zero backend server dependency).
- JSON-LD Structured Data: `Organization`, `Product`, `BreadcrumbList`.
- Automatic XML Sitemap generation at `/sitemap-index.xml`.
- Target keywords naturally integrated:
  - *Rapeseed Meal Supplier India*, *Rapeseed Meal Supplier UAE*
  - *Castorseed Meal Supplier India*, *Castor Seed Meal Sourcing*
  - *Castor Oil Supplier India*, *Bulk Castor Oil Supplier UAE*
  - *Agricultural Commodity Sourcing India*
- Responsive, accessible forms with `autocomplete`, visible labels, and `prefers-reduced-motion` compliance.
