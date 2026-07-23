# Hai Ngoc — Portfolio / CV

Modern, production-ready portfolio website for a Mobile Developer with 4 years of experience.

## Tech Stack

- React 19
- Vite
- TypeScript (strict)
- Tailwind CSS v4
- React Router
- Framer Motion
- Lucide React
- ESLint + Prettier

## Features

- **Quick Summary page** (`/summary`) — one-screen CV overview for fast scanning
- Responsive layout (desktop-first, tablet & mobile)
- Dark / light mode with `localStorage` persistence
- Sticky navbar with active section highlight
- Smooth scrolling & scroll progress bar
- Scroll reveal animations (Framer Motion)
- Project filtering (All / React Native / React / NodeJS)
- Contact form (client-side demo)
- Loading screen & 404 page
- SEO meta tags, Open Graph, favicon
- Lazy-loaded images
- Accessibility-friendly landmarks, labels, and focus states

## Project Architecture

```text
src/
  assets/          # Static assets imported by the app
  components/      # Shared components (Navbar, Footer, SEO, UI kit)
    ui/            # Reusable primitives (Button, Card, Reveal, …)
  layouts/         # Page shells (MainLayout)
  pages/           # Route-level pages (Home, 404)
  sections/        # Landing page sections (Hero → Contact)
  hooks/           # Custom hooks (theme, scroll, media query)
  data/            # Dummy content (personal, skills, projects, …)
  utils/           # Helpers (cn, scroll helpers)
  constants/       # Shared constants (section ids, routes, theme keys)
  types/           # TypeScript domain types
```

### Design principles

- **Functional components** only
- **Strict TypeScript** with path alias `@/`
- **Constants over magic strings** (`SECTION_IDS`, `ROUTES`, `STORAGE_KEYS`)
- **Reusable UI** in `components/ui`
- **Data separated from presentation** in `src/data`
- Animations are intentional and restrained (fade / slide / scale / stagger)

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (default `http://localhost:5173`).

## Scripts

| Script            | Description                     |
| ----------------- | ------------------------------- |
| `npm run dev`     | Start development server        |
| `npm run build`   | Type-check and production build |
| `npm run preview` | Preview production build        |
| `npm run lint`    | Run ESLint                      |
| `npm run format`  | Format with Prettier            |

## Customization

1. Update personal details in `src/data/personal.ts`
2. Edit skills, experience, projects, certificates, and education under `src/data/`
3. Replace images in `public/images/`
4. Replace `public/cv-hai-ngoc.pdf` with your real CV
5. Adjust brand colors in `src/index.css` (`@theme` tokens)

## Color Palette

| Token      | Value             |
| ---------- | ----------------- |
| Primary    | `#2563EB`         |
| Secondary  | `#6366F1`         |
| Accent     | `#0EA5E9`         |
| Background | White / Dark Gray |

## Typography

Inter (Google Fonts) — modern, readable UI type.

## Design References

Inspired by Apple, Linear, Vercel, and Stripe — minimal, clean, professional, with soft shadows, rounded corners, and selective glassmorphism.

## License

Private portfolio project.
