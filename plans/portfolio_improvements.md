# Portfolio Improvement Plan

This plan outlines the steps to update the styling and layout of the portfolio website based on user requirements.

## 1. Global & General Styling
- [x] **Typography & Layout**:
    - Update `src/App.css`:
        - Set `.section` and `.main-content` max-width to `1100-1200px` for consistency.
        - Adjust heading sizes (h1, h2, h3) to create a better hierarchy (slightly smaller titles).
        - Increase contrast/size difference between headings and body text.
    - Update `src/index.css` / `src/App.css`:
        - Enhance `.content-card` and `.job-card` shadows (make them slightly more pronounced).
        - Reduce standard button sizes (including "Contact Me").

## 2. Home Page
- [x] **Profile Section** (`src/Components/HomePage/Profile.css`, `src/Components/HomePage/Profile.jsx`):
    - Reduce `.profile-picture` size by ~15-20%.
    - Reduce margin/gap between the subtitle and the "View Resume" button.
    - Tighten vertical spacing of `.profile-section`.
- [x] **About Me Section** (`src/Components/HomePage/AboutMe.jsx`, `src/App.css`):
    - Constrain text block width (max-width ~800px) and center it.
    - Increase line-height to `1.6-1.8`.
    - Apply `<strong>` tags to keywords: "full-stack development," "DevOps engineering," "Kewpump," "BookingsMadeEasy".
- [x] **Skills Section** (`src/Components/HomePage/Skills.css`):
    - Increase vertical padding for skill pills.
    - Reduce spacing between skill categories.
    - Adjust grid layout to 2 columns on tablet sizes (media queries).
- [x] **Education Section** (`src/Components/HomePage/EducationAndSkills.css`):
    - Reduce internal padding of `.education-card`.
    - Redesign language proficiency items to be smaller badges/pills.

## 3. Work Experience Page
- [ ] **List View (Redesigned)** (`src/Components/WorkExperience/WorkExperience.jsx`, `src/Components/WorkExperience/WorkExperience.css`):
    - **New Layout Structure (Two-Column Grid)**:
        - **Left Column**: 
            - Logo container: Reduced size (120-150px width), square/rectangular, top-left aligned.
        - **Right Column**: All text content.
    - **Content Hierarchy**:
        - **Header**: Company name and Role title aligned with top of logo.
        - **Company Name**: Slightly smaller font size.
        - **Role Title**: Italics, reduced size.
        - **Description**: Left-aligned, constrained max-width (prevent full-width reading), increased spacing below.
        - **Metadata Footer**: Group Date, Duration, and Team Size together at the bottom.
            - Format: `Date • Duration • 👥 Team Size`
            - Style: Smaller, lighter weight text.
    - **Spacing & Visuals**:
        - Reduce internal card padding.
        - Increase vertical spacing between cards.
        - Tighten spacing between header elements.
        - Make cards slightly narrower with consistent margins.
- [x] **Detail Pages** (`src/Components/WorkExperience/WorkExperienceDetail.css`):
    - Reduce `.work-experience-image` (logo) size by ~50%.
    - Set `max-width` for content text for better readability.
    - **Responsibilities List**:
        - Add left padding/margin to bullets.
        - Increase vertical spacing between list items.

## 4. Projects Page
- [x] **Grid View** (`src/Components/Projects/Projects.css`):
    - Standardize card image aspect ratios (crop to 16:9 or 4:3).
    - Ensure equal height for all cards in the grid.
    - Enhance hover states (scale, shadow) for better feedback.
- [x] **Detail Pages** (`src/Components/Projects/ProjectDetails.css`):
    - Reduce size of large screenshots (e.g., PebbleTask code screenshot).
    - Reduce video embed size slightly and ensure consistent padding.
    - Apply `max-width` to text sections for readability.

## 5. Navigation
- [x] **Navbar** (`src/Components/Global/Navbar.css`):
    - Reduce spacing between navigation items.

## 6. Review
- [ ] Verify all changes across Desktop, Tablet, and Mobile breakpoints.