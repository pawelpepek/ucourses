# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Start development server (Vite)
npm run build    # Type-check + build production bundle (output: dist/)
npm run preview  # Preview production build locally
npm test         # Run tests in watch mode (Vitest)
npm test -- --run  # Run tests once (CI mode)
```

## Architecture

A Vite + React 19 + TypeScript portfolio site displaying completed Udemy courses, grouped by instructor, with certificate preview support.

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
- Bootstrap 5 loaded via CDN in `index.html` (root), not npm
- react-tooltip v5: global `<Tooltip>` component with `id={TOOLTIP_ID}` renders once in `App.tsx`; elements use `data-tooltip-id={TOOLTIP_ID}` + `data-tooltip-content="..."` attributes. `TOOLTIP_ID` is exported from `src/components/shared/Tooltip.tsx`
- Use `React.ReactElement` (not `JSX.Element`) for React 19 compatibility

## Deployment

Firebase Hosting (`udemycoursespp` project). Deploy via `firebase deploy` after `npm run build`. Live: https://udemycoursespp.web.app
