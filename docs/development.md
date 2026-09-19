# Development

## Common commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |
| `npm run test` | Vitest unit tests |
| `npm run prisma:studio` | Visual database browser |

## Adding a new service, portfolio project, or opportunity

Edit the matching file in `src/content/` — `services.ts`, `portfolio.ts`, or `opportunities.ts`. Each entry is a typed object; the list pages and dynamic `[slug]` detail pages read from these files automatically, so no page code needs to change.

## Adding a new page

Create a new folder under `src/app/<route-name>/page.tsx`. Use an existing simple page (e.g. `src/app/why-choose-us/page.tsx`) as a template for the `metadata` export and layout pattern.

## Code style

- TypeScript strict mode is on — avoid `any`.
- Reuse components in `src/components/ui` and `src/components/shared` rather than duplicating markup.
- Never hardcode a color hex value in a component — use the Tailwind classes generated from `tailwind.config.ts`.
