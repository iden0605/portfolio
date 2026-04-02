---
name: understand-project
description: Use when starting a new session on this portfolio project, when asked to understand the project context, add a new project entry, add a new work experience, or modify how projects and work experience are displayed.
---

## What This Skill Does

Loads complete context about this portfolio website so you can immediately contribute — adding new work experiences, projects, or modifying how they're displayed — without needing re-explanation.

---

## Step 1: Read the Live Data Files

Read these two files first. They are the source of truth for all content:

- `src/Data/projectData.js` — all projects
- `src/Data/jobExperienceData.js` — all work experiences

Also read for full routing picture:
- `src/App.jsx` — all registered routes

---

## Project Architecture

**Framework:** React 19 + React Router v7 + Vite. Deployed on Vercel.

**Key directories:**
```
src/
  Components/
    Global/          → Navbar, Footer, ContactMePopup, ImageModal
    HomePage/        → Profile, AboutMe, Skills, EducationAndSkills
    Projects/        → Projects list page + individual detail components
    WorkExperience/  → Work list page + individual detail components
    Utilities/       → ScrollToTop
  Data/
    projectData.js         → all project entries
    jobExperienceData.js   → all work experience entries
    skillsData.js          → skills by category
public/assets/
  project/{ProjectName}/   → images, videos for each project
  WorkExperience/{Company}/→ images for each work experience
```

---

## Work Experience Data (`src/Data/jobExperienceData.js`)

**Structure — each entry is keyed by full company name:**

```js
"Company Name": {
  tokenizedName: "kebab-case-id",       // used in URL route
  jobTitle: "string",
  cardImage: "/assets/WorkExperience/CompanyName/image.jpg",
  headerImage: "/assets/WorkExperience/CompanyName/image.jpg",
  cardImageSize: "210px",               // CSS width on card
  headerImageSize: "280px",             // CSS width on detail header
  description: `paragraph text`,
  date: "Nov 2025 - Present",           // "MMM YYYY - MMM YYYY" or "MMM YYYY - Present"
  teamSize: 8,                          // number
  timeInRole: "Ongoing",                // "Ongoing" or e.g. "8 Months"
  keyResponsibilities: ["...", "..."],  // array of strings
  technologies: "Comma, Separated, String"
}
```

**How it displays:**
- List page (`/work-experience`): iterates `Object.entries(jobExperienceData)`, renders a card per entry showing image, company name, job title, date, team size, and a calculated duration badge ("Ongoing" if date ends in "Present").
- Detail page: accessed at `/work-experience/{tokenizedName}`. Each company has its own detail component in `src/Components/WorkExperience/` (e.g. `KewPumpDetail.jsx`). The component calls `WorkExperienceHeader` with `companyName` (the exact data key), which renders the full detail layout.

**To add a new work experience:**
1. Add an entry to `jobExperienceData.js` using the schema above.
2. Place images in `public/assets/WorkExperience/{CompanyName}/`.
3. Create `src/Components/WorkExperience/{CompanyName}Detail.jsx` — copy an existing one, change the data key passed to `WorkExperienceHeader`.
4. Register the route in `src/App.jsx`:
   ```jsx
   <Route path="/work-experience/{tokenizedName}" element={<CompanyNameDetail />} />
   ```
5. Import the new detail component at the top of `App.jsx`.

---

## Projects Data (`src/Data/projectData.js`)

**Structure — each entry is keyed by project name:**

```js
"Project Name": {
  tokenizedName: "kebab-case-id",       // used in URL route
  description: `paragraph text`,
  date: "string",                       // e.g. "Click & Claw 2026 Finalist"
  type: "Game Jam" | "Hackathon" | "University Project",
  award: "Winner" | "Finalist" | undefined,
  teamSize: 3,
  role: "string",                       // e.g. "Game Programmer | Artist"
  thumbnail: "/assets/project/ProjectName/image.png",
  previewVid: "/video.mp4",             // plays on card hover (root of public/)
  images: [],                           // array of image paths shown in detail
  technologies: ["array", "of", "strings"],
  liveLink: "https://...",              // YouTube / demo URL
  githubLink: "https://github.com/...",
  itchLink: "https://itch.io/...",
  wwwLink: "https://...",
  status: "Released" | "Completed",
  projectTime: "4 Days",
  keyResponsibilities: ["...", "..."],
  details: [ ... ]                      // optional — see rich detail pattern below
}
```

**How it displays:**
- List page (`/projects`): iterates `Object.entries(projectData)`, renders a card per project. Hovering swaps thumbnail for `previewVid`. Shows title, type badge, role, date, award badge (if set), and team size.
- Detail page: accessed at `/projects/{tokenizedName}`. Each project has its own detail component in `src/Components/Projects/` (e.g. `AfloatDetail.jsx`). All render `ProjectHeader` with `projectName` (exact data key), which handles: YouTube embed, external links (GitHub / Itch.io / website), description, status, project time, technologies, key responsibilities.

**Two detail page patterns:**

*Simple (no `details` array):*
- Render `ProjectHeader` then add any extra image/text sections manually in JSX.
- Example: `PebbleTaskDetail.jsx`, `MindBackDetail.jsx`

*Rich (with `details` array):*
- `details` is an array of sections, each with `{ title, content[] }`.
- Content items use a `renderContentBlock()` switch on `type`:
  - `"image"` → clickable image that opens `ImageModal`; requires `src`, `width`
  - `"text"` → paragraph; requires `text`
  - `"video"` → auto-playing muted video; requires `src`, `width`
  - `"troop-carousel"` → custom carousel component; requires `items[]` with `{ name, sprite, gif, attackName, description }`
- Example: `AfloatDetail.jsx`

**To add a new project:**
1. Add an entry to `projectData.js` using the schema above.
2. Place assets in `public/assets/project/{ProjectName}/`.
3. Create `src/Components/Projects/{ProjectName}Detail.jsx` — copy a simple or rich detail component depending on complexity.
4. Register the route in `src/App.jsx`:
   ```jsx
   <Route path="/projects/{tokenizedName}" element={<ProjectNameDetail />} />
   ```
5. Import the new detail component at the top of `App.jsx`.

---

## Skills Data (`src/Data/skillsData.js`)

```js
export const skills = {
  "Category Name": ["Skill 1", "Skill 2", ...]
}
```

Six categories: Programming Languages, Frontend Development, Databases, Backend Development, Cloud & DevOps, Platforms & Software. Add a skill by appending to the relevant array. Add a new category by adding a new key.

---

## Routing Summary

All routes are manually registered in `src/App.jsx` — there is no file-based or dynamic routing.

```
/                                       → home (Body)
/work-experience                        → work list
/work-experience/bookings-made-easy     → BookingsMadeEasyDetail
/work-experience/iden-mcelhone-freelance→ TutoringDetail
/work-experience/umgmc                  → UMGMCDetail
/work-experience/momu                   → MomuDetail
/work-experience/kewpump                → KewpumpDetail
/work-experience/stego-studios          → StegoStudiosDetail
/projects                               → projects list
/projects/pebbletask                    → PebbleTaskDetail
/projects/mindback                      → MindBackDetail
/projects/overgrown                     → OverGrownDetail
/projects/academic-predictive-models    → AcademicPerformanceDetail
/projects/echoai                        → EchoAIDetail
/projects/afloat                        → AfloatDetail
/contact                                → ContactMePage
```

`tokenizedName` in data = the URL segment. The data key (full name) is what detail components pass to header components to look up data.

---

## Key Conventions

- **Date format:** `"MMM YYYY - MMM YYYY"` or `"MMM YYYY - Present"` (e.g. `"Nov 2025 - Present"`)
- **Work experience images:** `public/assets/WorkExperience/{CompanyName}/`
- **Project images/videos:** `public/assets/project/{ProjectName}/`
- **Preview videos** for project cards live at the root of `public/` (e.g. `/Afloat-hover.mp4`)
- **No global state management** — all state is component-local (`useState`, `useEffect`)
- **Animations:** AOS (Animate On Scroll) via `data-aos="fade-up"` attributes; Framer Motion used in some components
- **Scroll reset:** `ScrollToTop` component in `App.jsx` resets scroll on every route change

---

## Notes

- Every new route requires: (1) data entry, (2) detail component, (3) route in `App.jsx`, (4) import in `App.jsx`.
- `tokenizedName` in data must exactly match the URL segment registered in `App.jsx`.
- The data object key (e.g. `"Kewpump"`, `"Afloat"`) must exactly match what the detail component passes to `WorkExperienceHeader` / `ProjectHeader` as the name prop.
- Links that are empty strings (`""`) are hidden in `ProjectHeader` — safe to leave blank.
