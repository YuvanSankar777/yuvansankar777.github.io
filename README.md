# Yuvan Sankar — Portfolio

An interactive personal portfolio built with a JSON-first architecture: every
piece of content lives in one file, so the design never has to be touched to
update your story.

Built with **React 18 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · lucide-react**.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build locally
```

## Editing your content

**You only ever edit one file:** [`src/data/portfolio.json`](src/data/portfolio.json).

It is fully typed ([`src/types/portfolio.ts`](src/types/portfolio.ts)) and read
through the `usePortfolio()` hook — no component contains hardcoded text.

| Field | What it drives |
|-------|----------------|
| `profile` | Hero name, tagline, role, location, social links |
| `profile.social` | Social pills — **empty strings are hidden automatically** |
| `skills.categories` | The Skills section |
| `experience` | Experience rows (numbered 01, 02, …) |
| `projects` | Project cards — `"highlight": true` is pinned first and badged "Featured" |
| `education` | Education cards in the About section |
| `publications` | IEEE publications block (hidden if the array is empty) |
| `testimonials` | Currently empty — the section is hidden until you add real ones |

### Your avatar

The hero avatar reads `profile.avatarSvg` (default `/avatar.png`).

1. Generate/choose a portrait (a Pixar-style 3D render on a **deep-black background**
   works best — it blends into the site).
2. Save it as `public/avatar.png`.

Until a file exists there, a gradient monogram is shown as a placeholder.
The avatar tracks the cursor with a subtle parallax tilt.

## Project structure

```
src/
  data/portfolio.json     ← all content (edit this)
  types/portfolio.ts      ← content types
  hooks/usePortfolio.ts   ← typed content hook
  components/
    Navbar.tsx  HeroSection.tsx  Avatar.tsx  SocialLinks.tsx
    AboutSection.tsx  SkillsSection.tsx  ExperienceSection.tsx
    ProjectsSection.tsx  ProjectCard.tsx  Footer.tsx
    SectionHeading.tsx  icons.tsx
  index.css               ← design tokens (colors, gradients, fonts)
  App.tsx                 ← section composition
```

## Deploying

Any static host works. For **Vercel** or **Netlify**: framework = Vite,
build command `npm run build`, output directory `dist`.
