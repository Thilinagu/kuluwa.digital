# Content Management

Content that changes often lives in `src/content/*.ts` as plain TypeScript arrays — no database or CMS required to update copy for services, portfolio, opportunities, or FAQs. Edit the file, redeploy.

## When to introduce a real CMS

If the business owner needs to update this content without a developer, migrate `src/content/*.ts` into a headless CMS (Sanity, Contentful, or similar) and replace the static imports with fetch calls in each page — the page components themselves (`ServiceCard`, `PortfolioCard`, etc.) don't need to change, since they already just receive typed props.

## Placeholders

Any content that couldn't be filled with real, verified information is marked, e.g. portfolio entries include `isConcept: true` and render a "Concept Project" badge rather than being presented as real client work. Do not flip `isConcept` to `false` without a real, approved case study behind it.
