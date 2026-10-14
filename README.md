# Portfolio

Personal portfolio website.

## Stack

TypeScript, React, Vite, Tailwind CSS, i18next. The `/api/chat` endpoint is a Vercel Edge Function that streams responses from the Gemini API.

## Environment variables

Copy `.env.example` to `.env` and fill in:

| Variable | Required | Description |
| --- | --- | --- |
| `GEMINI_API_KEY` | Yes | Server-side key for the Gemini API, used by `api/chat.ts`. Never exposed to the client. |

## Local development

```
npm install
npm run dev
```

`vite.config.ts` includes a dev-only middleware that runs `api/chat.ts` directly, so `/api/chat` works against the real Gemini API while running `npm run dev` without needing the Vercel CLI.

## Deploying to Vercel

1. Import this repository into Vercel (framework preset: Vite, auto-detected via `vercel.json`).
2. Add `GEMINI_API_KEY` as an environment variable in the Vercel project settings — `.env` is gitignored and never gets deployed.
3. Deploy. The static site builds to `dist/`, and `api/chat.ts` runs as an Edge Function.
