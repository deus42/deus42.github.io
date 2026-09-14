# Deus

Personal website for Oleksii Gapchenko. Built with React, TypeScript, and Vinext, with self-hosted fonts and a static export.

Live at **https://deus42.github.io/**.

## Develop

```sh
npm ci
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

The Futurama section at `/#futurama` describes the private agent setup: Signal coordination, Hermes, Zoidberg/Codex engineering, and Vault-Tec with separate per-agent continuity. Leela and Bender are presented as specialist experiments. This is an architectural overview, not a live runtime status page; keep model versions, host details, private records, and operational logs out of the public copy.

The hero is original generated architectural artwork, not a photograph of a real landmark. The portrait comes from Oleksii's public GitHub profile. The game image is an actual development screenshot. AllCheck uses its own app icon. No personal project databases or private financial records are part of this website.

## Deployment

GitHub Actions verifies and builds every push to `main`, then publishes `dist/client` to GitHub Pages. The workflow can also be run manually from the Actions tab. No deployment secrets are needed; GitHub provides a token scoped to each run.

The repository is named `deus42.github.io` so the site and its assets are served from the account's root URL. If the domain changes, update the metadata in `app/layout.tsx`.

`.openai/hosting.json` retains the original Sites preview configuration. Local research and verification output are ignored and are not part of the deployment.

Lint checks site-owned code; the unmodified scaffold component catalog and generated browser artifacts are excluded. The deployment contains only static public output, with no React server or image-processing endpoint.
