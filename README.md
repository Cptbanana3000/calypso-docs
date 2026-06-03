# Calypso IDE — Documentation

Documentation site for [Calypso IDE](../), a phone-first code editor for
Android. Built with [Astro Starlight](https://starlight.astro.build/).

This is a **separate project** from the Flutter app — it has its own
dependencies and deploys independently.

## Develop

```sh
npm install
npm run dev
```

Then open the printed local URL (default <http://localhost:4321>).

## Build

```sh
npm run build      # outputs static site to ./dist
npm run preview    # preview the production build locally
```

## Structure

- `src/content/docs/` — the documentation pages (Markdown / MDX).
- `astro.config.mjs` — site config + sidebar.
- `src/content.config.ts` — content collection config.

## Pages

| Page | File |
| --- | --- |
| What is Calypso? | `src/content/docs/index.mdx` |
| Getting started | `src/content/docs/getting-started.md` |
| What works where | `src/content/docs/capabilities.md` |
| Termux setup | `src/content/docs/termux-setup.md` |
| Git workflow | `src/content/docs/git-workflow.md` |
| Troubleshooting | `src/content/docs/troubleshooting.md` |

## Deploy

Hosting is not yet decided. When it is, set `site` in `astro.config.mjs` and add
the matching deploy config (GitHub Pages Action, Netlify/Cloudflare build, etc.).
The build output is fully static (`./dist`).
