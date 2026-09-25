# FitLog — Workout Library

FitLog is a dark, no-nonsense workout library and daily training log built from the supplied Figma-style reference. It lets users browse twelve workouts, open a detail page, add up to five lifts to today's plan, save workouts for later, mark planned lifts as done, remove items, and keep the plan after a reload.

## Technologies

- Next.js App Router
- React + TypeScript
- Tailwind CSS v4
- Headless UI for the Sort By menu
- Lucide React for icons
- Next.js Image component
- Browser localStorage for persistence
- Next.js Route Handlers for the workout API
- Vercel-ready deployment setup

## Key Features

1. Responsive FitLog navbar with live Plan and Saved counters.
2. Hero banner with anchor navigation to the workout library.
3. Twelve-workout API-backed library with responsive 3-column desktop grid.
4. Sort By dropdown for Duration, Calories, and Rating.
5. Dynamic workout detail pages with specs, instructions, and action buttons.
6. My Plan page with live exercise, minute, and calorie metrics.
7. Today's Plan / Saved tabs with View Details, Mark as Done, and Remove actions.
8. Toast notifications, loading states, 404 handling, five-lift daily cap, and localStorage persistence.

## Routes

- `/` — workout library
- `/workouts/[id]` — workout detail page
- `/my-plan` — today's plan and saved workouts
- `/api/workouts` — workout API
- `/api/workouts/[id]` — individual workout API
- any unknown route — custom 404 page

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production check

```bash
npm run build
npm run start
```

The production build should finish without errors before deployment.

## Git history requirement

The project is prepared to be committed in small, meaningful steps. For the assignment, make at least eight commits. Suggested messages:

1. `created Next.js app structure`
2. `added FitLog global styling and responsive layout`
3. `added workout API and library data`
4. `added responsive workout library cards`
5. `added workout detail page and actions`
6. `added My Plan and Saved tabs`
7. `added persistence, toasts, sorting, and loading states`
8. `added README and final deployment polish`

## Deployment

Deploy the repository to Vercel, Netlify, Cloudflare Pages, or another Next.js-compatible host. The app uses normal App Router routes and API Route Handlers, so do not configure it as a static-only export.

Before submitting:

- Confirm `/` loads after a hard refresh.
- Confirm `/my-plan` loads after a hard refresh.
- Open a workout detail page directly and refresh it.
- Open an invalid URL and confirm the 404 page appears.
- Add a workout, reload, and confirm it remains in the plan.
- Save a workout, reload, and confirm it remains saved.
- Test the five-workout cap.
- Test the Sort By menu.
- Test mobile, tablet, and desktop widths.

## Submission

Live Link: `PASTE YOUR DEPLOYMENT URL HERE`

GitHub Repository Link: `PASTE YOUR GITHUB URL HERE`

## Final QA

The project includes the supplied reference-inspired visual treatment and a self-contained local workout dataset exposed through Next.js Route Handlers.
