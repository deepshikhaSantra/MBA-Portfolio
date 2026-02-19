# Aman Jaiswal — MBA Portfolio

A premium dark-themed personal portfolio website built for Aman Jaiswal, showcasing MBA education, professional experience, strategy consulting projects, and core competencies.

> **Live Preview:** Run `npm run dev` and open [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

| Layer         | Technology                                |
| ------------- | ----------------------------------------- |
| Framework     | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| Language      | TypeScript 5                              |
| Styling       | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations    | [Framer Motion](https://www.framer.com/motion/) |
| Icons         | [Lucide React](https://lucide.dev/)       |
| Runtime       | React 19                                  |

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or pnpm / yarn)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd mba_portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at **http://localhost:3000**.

### Production Build

```bash
npm run build
npm run start
```

---

## Project Structure

```
mba_portfolio/
├── app/
│   ├── globals.css        # Dark theme, custom properties, scrollbar
│   ├── layout.tsx         # Root layout, metadata, Inter font
│   └── page.tsx           # Entry point (server component)
├── components/
│   ├── AnimatedSection.tsx # Bidirectional scroll animation wrapper
│   ├── MotionButton.tsx   # Glassmorphism button with glow effects
│   ├── Loader.tsx         # Full-screen loading animation
│   ├── Navbar.tsx         # Fixed navbar with active section tracking
│   ├── Hero.tsx           # Split-layout hero with profile image
│   ├── About.tsx          # About section with stat cards
│   ├── Education.tsx      # Education timeline
│   ├── Experience.tsx     # Work experience timeline
│   ├── Skills.tsx         # Skills grid with animated pills
│   ├── Projects.tsx       # Featured projects cards
│   ├── Contact.tsx        # Contact info + social links
│   ├── Footer.tsx         # Site footer
│   └── PortfolioClient.tsx# Client orchestrator (loader → site reveal)
├── lib/
│   └── data.ts            # ✏️ ALL editable content lives here
├── public/
│   └── logo.jpg           # Profile photo
├── package.json
├── tailwind v4 (via postcss.config.mjs)
└── tsconfig.json
```

---

## How to Edit Content

**All portfolio text, links, and data are in a single file:**

```
lib/data.ts
```

This file exports a `portfolioData` object with clearly labelled sections:

| Section       | What it controls                              |
| ------------- | --------------------------------------------- |
| `meta`        | Page title & description (SEO)                |
| `nav`         | Logo text, navigation links, CTA button       |
| `hero`        | Name, title, tagline, CTAs, profile image     |
| `about`       | Bio paragraphs, stat cards                    |
| `education`   | Degrees, institutions, highlights             |
| `experience`  | Roles, companies, achievements                |
| `skills`      | Skill categories and individual skills        |
| `projects`    | Project titles, descriptions, outcomes        |
| `contact`     | Email, phone, location, social links          |
| `footer`      | Copyright text, "built with" line             |

> **No JSX editing required.** Update the data object and the site updates automatically.

### Changing the Profile Photo

Replace `public/logo.jpg` with the new image (keep the filename, or update the `hero.profileImage` path in `data.ts`).

---

## Design System

### Theme

The dark premium palette is defined in `app/globals.css` via Tailwind v4's `@theme inline`:

| Token              | Value     | Usage                    |
| ------------------ | --------- | ------------------------ |
| `--color-surface`        | `#0f1117` | Page background          |
| `--color-surface-raised` | `#161924` | Cards, elevated surfaces |
| `--color-surface-overlay`| `#1e2235` | Modals, overlays         |
| `--color-accent`         | `#6366f1` | Primary accent (Indigo)  |
| `--color-accent-dark`    | `#4f46e5` | Hover / pressed states   |
| `--color-accent-light`   | `#818cf8` | Highlights, active items |

To change the accent colour, update these three values in `globals.css`.

### Animations

- **Bidirectional scroll animations** — elements animate in when entering the viewport and reset when leaving (powered by `whileInView` + `viewport={{ once: false }}`)
- **Staggered text reveals** — hero text items appear in sequence
- **Glassmorphism buttons** — backdrop-blur with glow-on-hover
- **Cinematic loader** — logo reveal → progress bar → blur exit → site fade-in
- All animation variants are defined as constants outside components for reusability

---

## Key Features

- **Fully responsive** — optimised for mobile, tablet, and desktop
- **Fixed navbar** — transparent on top, glass blur on scroll, animated active section indicator
- **Profile image hero** — split layout with `next/image` optimisation
- **Dark premium aesthetic** — inspired by Linear, Vercel, and Notion
- **60fps animations** — GPU-accelerated transforms, no heavy canvas/particles
- **Accessible** — semantic HTML, focus-visible rings, reduced-motion support
- **Static export** — pre-rendered at build time for fast loading

---

## Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start dev server (Turbopack)       |
| `npm run build` | Production build                   |
| `npm run start` | Serve production build locally     |