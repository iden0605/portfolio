# About

_Last updated: 2026-08-17 (session 7)_

## What It Is

Personal portfolio website for Iden McElhone (Systems & Cloud Architect / DevOps Engineer), showcasing projects and work experience at [idenmcelhone.dev](https://idenmcelhone.dev/).

## Stack

- **Framework:** React 19 + React Router v7
- **Language:** JavaScript (JSX)
- **Build tool:** Vite 6
- **Styling:** Custom CSS (no Tailwind) — Catppuccin Macchiato terminal dark theme
- **Animations:** Framer Motion, AOS (scroll reveal)
- **Contact:** EmailJS (`@emailjs/browser`)
- **Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Structure

```
src/
  App.jsx                  # Router root — all routes defined here
  Components/
    Global/                # Navbar (incl. Resume link + social icons), Footer, ContactMePage, ImageModal, NotFound
    HomePage/              # Body.jsx (landing page), Profile.jsx, Terminal.jsx
    Projects/              # Projects.jsx (grid), ProjectDetail.jsx (router shim),
                           # ProjectHeader.jsx, ProjectDetailTabSection.jsx, TroopCarousel.jsx
    WorkExperience/        # WorkExperience.jsx (list), WorkExperienceDetailPage.jsx, WorkExperienceHeader.jsx
    Utilities/             # ScrollToTop.jsx
  Data/
    projectData.js         # All project entries (object keyed by display name)
    jobExperienceData.js   # Work experience entries
    skillsData.js          # Skills/tech for homepage display
public/
  assets/project/{Name}/  # Project images/videos per project
  {tokenizedname}-hover.mp4  # Card hover preview videos (root of public/)
```

## Key Files

| File | Purpose |
|------|---------|
| `src/Data/projectData.js` | Single source of truth for all projects — add new entries here |
| `src/Data/jobExperienceData.js` | Work experience entries |
| `src/App.jsx` | All routes — add new project/work-experience routes here |
| `src/Components/Projects/ProjectDetail.jsx` | Generic detail page — resolves `:slug` route param against `tokenizedName` in `projectData.js`, renders `ProjectHeader` + `ProjectDetailTabSection` |
| `src/Components/Projects/ProjectHeader.jsx` | Terminal-style header for every project detail page |
| `src/Components/Projects/ProjectDetailTabSection.jsx` | Tab-based detail section (image/text/video/carousel blocks) |
| `.github/workflows/deploy.yml` | CI deploy — runs `npm run deploy` with EmailJS secrets injected |
| `vercel.json` | Vercel config (present but site is hosted on GitHub Pages) |

## Common Tasks

- **Add a new project:** Add entry to `projectData.js` as the first key (routing is fully dynamic via `/projects/:slug` → `ProjectDetail.jsx`; no per-project component or `App.jsx` edit needed) — use `/update-portfolio-project` skill for guided flow
- **Add work experience:** Add entry to `jobExperienceData.js`, create detail component, add route in `App.jsx`
- **Run locally:** `npm run dev`
- **Deploy:** Push to `master` — GitHub Actions runs `npm run deploy` automatically; also runnable locally with `npm run deploy`

## Conventions & Gotchas

- Project detail pages must use only `ProjectHeader` + `ProjectDetailTabSection` — no raw HTML sections or custom layouts in detail components
- `projectName` prop passed to both components must exactly match the key string in `projectData.js`
- `award` key must be omitted entirely (not `""` or `null`) if no award
- Empty link fields use `""` — all link keys must be present
- Optional extra link fields `diagramLink` (e.g. draw.io), `docsLink` (e.g. Google Doc), `datasetLink` (e.g. Kaggle), and `presentationLink` (e.g. Google Slides) are supported by `ProjectHeader.jsx`'s link bar but not required — omit entirely if unused (unlike the core link fields, which use `""`)
- `previewVid` path: `"/{tokenizedname}-hover.mp4"` — root of `public/`, no subfolder
- Detail content types: `"image"`, `"text"`, `"video"`, `"troop-carousel"` — handled by `ProjectDetailTabSection`
- Theme is Catppuccin Macchiato: base `#24273a`, mantle `#1e2030`, green `#a6da95`, blue `#8aadf4`, pink/red `#ed8796`
- Contact uses a single `ContactMePage` component/route (`/contact`) on both desktop and mobile — there is no popup; the navbar's "Contact" is a normal nav tab
- Navbar top-right shows a "Resume" link (opens `/Resume.pdf`), a `|` separator, then small GitHub/LinkedIn/Gmail icon links (same SVGs as `Footer.jsx`, rendered smaller) — hidden on mobile in favor of the hamburger sidebar, which shows the same social icons at the bottom of the slide-out menu
- Projects page (`Projects.jsx`) has no category filter UI — it lists all entries from `projectData.js` directly, but each entry has a `category` (`"hackathons"` | `"university"` | `"personal"`) that colours a small dot on the project card
- Project detail sections (`details[]`) render as a `git log --graph` style collapsible commit list (`ProjectDetailTabSection.jsx`), not tabs — each entry's badge (`demo`/`system`/`feature`/`notes`) is auto-inferred from its content block types (video→demo, troop-carousel→system, image→feature, else→notes)
- EmailJS keys (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) must be set as GitHub Actions secrets — they are gitignored locally and injected into the build via the workflow's `env:` block on the deploy step. Without them, the built bundle gets `undefined` and EmailJS throws "public key required"
- Contact form logic lives in `src/hooks/useContactForm.js`, used by `ContactMePage`
