# Sudha Madhuri Vinnakota — AI Engineer Portfolio

A modern, responsive personal portfolio built with **Vite + React + TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **lucide-react** icons. White/blue theme, full dark mode, and content generated from the resume: About, Skills, Experience, Projects, Education, Certifications, and Contact.

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (animations)
- lucide-react (icons)
- react-hook-form (contact form)

## Project structure

```
src/
  components/   Reusable UI pieces (Navbar, Footer, cards, ThemeToggle, ContactForm, ...)
  sections/     Page sections (Hero, About, Skills, Experience, Projects, Education, Certifications, Contact)
  hooks/        useTheme (dark mode with localStorage + system preference)
  utils/        data.ts — all resume content lives here, edit this file to update the site
  assets/       Static assets used by components
public/
  favicon.svg
  Sudha_Madhuri_Vinnakota_Resume.pdf   <- replace with your latest resume (same filename, or update the path in src/utils/data.ts)
```

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the printed local URL (typically http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The static site is output to `dist/`.

## Editing content

Everything text-based (name, summary, skills, experience, projects, education, certifications, links) lives in **`src/utils/data.ts`**. Update that file and every section re-renders automatically — no need to touch component code for content changes.

To swap the résumé download, replace `public/Sudha_Madhuri_Vinnakota_Resume.pdf` with your file (keep the same name, or update `profile.resumeFile` in `src/utils/data.ts`).

## Deploying to Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow the prompts (Framework Preset: Vite)
vercel --prod # promote to production
```

**Option B — Git + Vercel dashboard**
1. Push this project to a GitHub repository.
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects the Vite framework preset:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**. Every push to the main branch redeploys automatically.

## Notes

- Dark mode preference is stored in `localStorage` and respects the OS preference on first visit.
- The contact form opens a pre-filled email to `sudhamadhurivinnakota@gmail.com` (no backend required). Swap `onSubmit` in `src/components/ContactForm.tsx` for a real API/Formspree/EmailJS call if you want in-app delivery.
- Update `og:url` / `twitter:url` in `index.html` once you know your deployed domain, and add a real `public/og-image.png` (1200×630) for social share previews.
