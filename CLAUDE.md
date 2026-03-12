# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Start development server
npm run build    # Build production bundle (output: build/)
npm test         # Run tests in watch mode
npm test -- --watchAll=false  # Run tests once (CI mode)
```

No lint script is configured; ESLint runs via `react-scripts` using the `react-app` config defined in `package.json`.

## Architecture

A Create React App (TypeScript) portfolio site displaying completed Udemy courses, grouped by instructor, with certificate preview support.

**Data flow:**
- `src/models/courses.ts` — hardcoded course data (the only data source)
- `src/models/interfaces.ts` — core types: `Course`, `Author`, `AuthorCourses`, `SubjectTime`
- `CoursesCollection` (singleton) — groups courses by author
- Redux store (`src/store/`) — two slices: `data` (read-only courses/authors) and `overlay` (certificate preview state)
- Custom hooks in `src/hooks/` encapsulate all store access and derived state

**Component tree:**
```
App
├── Navbar — stats, contact info
└── CoursesContainer — iterates AuthorCourses
    └── AuthorCard (per author)
        ├── AuthorHeader
        └── CoursesList → CourseRow (badges: certificate, homework, time)
            └── CertificateOverlay (shown via overlay Redux slice)
```

**Key patterns:**
- All Redux reads go through custom hooks (`use-authors-courses`, `use-stats`, `use-certificate`, etc.)
- `use-mobile.ts` drives responsive behavior (no CSS breakpoints for logic)
- Bootstrap 5 loaded via CDN in `public/index.html`, not npm

## Deployment

Firebase Hosting (`udemycoursespp` project). Deploy via `firebase deploy` after `npm run build`. Live: https://udemycoursespp.web.app
