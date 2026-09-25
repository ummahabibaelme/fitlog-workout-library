# FitLog — Workout Library

FitLog is a dark, no-nonsense workout library and daily training log built to match the supplied FitLog reference design. It uses the provided FitLog API for all workout data, lets users browse and sort the library, open individual workout details, add up to five lifts to today's plan, save workouts for later, mark planned lifts as done, remove items, and persist plan/saved state across reloads.

## Technologies

- Next.js 16 App Router
- React 19 + TypeScript
- Tailwind CSS v4
- Lucide React for icons
- Next.js Image component
- Browser localStorage for persistence
- Next.js Route Handlers as a server-side proxy for the supplied FitLog API
- Vercel-ready deployment setup

## FitLog API

The project consumes the supplied API:

- All workouts: `https://api.abcz.workers.dev/api/fitlog`
- Single workout: `https://api.abcz.workers.dev/api/fitlog/:id`

The app normalizes the API response into the UI's workout model while preserving the API's workout names, images, muscle groups, equipment, difficulty, sets, reps, duration, calories, rating, descriptions, and instructions.

## Key Features

1. Responsive FitLog navbar with live Plan and Saved counters.
2. Reference-matched hero banner using the supplied hero artwork and anchor navigation to the library.
3. Twelve-workout API-backed library with responsive 3-column desktop grid.
4. Sort By control for Duration, Calories, and Rating, with Duration selected by default.
5. Dynamic workout detail pages with specs, instructions, and action buttons.
6. My Plan page with live exercise, minute, and calorie metrics.
7. Today's Plan / Saved tabs with View Details, Mark as Done, and Remove actions.
8. Toast notifications, loading states, custom 404 handling, five-lift daily cap, and localStorage persistence.

## Routes

- `/` — workout library
- `/workouts/[id]` — workout detail page
- `/my-plan` — today's plan and saved workouts
- `/api/workouts` — server-side API proxy for all workouts
- `/api/workouts/[id]` — server-side API proxy for one workout
- any unknown route — custom 404 page

## Run Locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production Check

```bash
npm run build
npm run start
```

The production build should finish without errors before deployment.

## Git History Requirement

The project contains at least eight meaningful commits covering the main implementation stages. Keep those commits when pushing the project to GitHub.

## Deployment

Deploy the repository to Vercel, Netlify, Cloudflare Pages, or another Next.js-compatible host. Do not configure the app as a static-only export because it uses App Router routes and server-side API Route Handlers.

Before submitting:

- Confirm `/` loads after a hard refresh.
- Confirm `/my-plan` loads after a hard refresh.
- Open a workout detail page directly and refresh it.
- Open an invalid URL and confirm the 404 page appears.
- Add a workout, reload, and confirm it remains in the plan.
- Save a workout, reload, and confirm it remains saved.
- Test the five-workout cap.
- Test Duration, Calories, and Rating sorting.
- Test mobile, tablet, and desktop widths.

## Submission

Live Link: `PASTE YOUR DEPLOYMENT URL HERE`

GitHub Repository Link: `PASTE YOUR GITHUB URL HERE`
