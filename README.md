# Deus

Personal website for Oleksii Gapchenko. Built with React, TypeScript, and Vinext, with self-hosted fonts and a static Sites export.

## Develop

```sh
npm install
npm run dev -- --port 4310
```

## Verify and build

```sh
npx tsc --noEmit
npm run lint
npm run build
# Output: dist/client
```

## Content

The page lives in `app/page.tsx`, the design in `app/globals.css`, and small progressive interactions in `app/site-interactions.tsx`. Project links are real: AllCheck is invitation-only, The Getaway is a playable prototype, Routewise links to the AI Maps code, and MoneyWave has no public demo.

The hero is original generated architectural artwork, not a photograph of a real landmark. The portrait comes from Oleksii's public GitHub profile. The game image is an actual development screenshot. AllCheck uses its own app icon. No personal project databases or private financial records are part of this website.

Hosting is registered in `.openai/hosting.json`. Sites access remains owner-only. Local research and verification output are ignored and are not part of the deployment.

Lint checks site-owned code; the unmodified scaffold component catalog and generated browser artifacts are excluded. The deployment contains only static public output, with no React server or image-processing endpoint.
