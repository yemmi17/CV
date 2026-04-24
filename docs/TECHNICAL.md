# Technical Project Guide

This document describes the current technical shape of the repository. It is meant as an engineering map for future changes, not as user-facing site copy.

## Project Overview

The project is an Astro 5 personal CV and portfolio site. It was derived from a blog-oriented template and is currently being adapted into a smaller bilingual profile site for Nikita Borisov.

The active public experience is centered on:

- a home/profile page in English at `/`
- a home/profile page in Russian at `/ru/`
- an English about page at `/about`
- a Russian about page at `/ru/about`
- Markdown-style content endpoints such as `/index.md` and `/about.md`

The repository still contains blog infrastructure, content collection configuration, sitemap rules, Pagefind generation, and Vercel redirects from the original blog template. Some of those pieces are not actively used by the current CV pages but are still part of the build surface.

## Runtime Stack

- Astro is the main framework and router.
- TypeScript is used for typed data, API routes, utilities, and React islands.
- React is enabled through `@astrojs/react`; the current React code lives under `src/components/ui`.
- Tailwind CSS 4 is wired through `@tailwindcss/vite`.
- MDX support is enabled with `@astrojs/mdx`.
- PWA support is configured with `@vite-pwa/astro`.
- Sitemap generation is handled by `@astrojs/sitemap`.
- Search indexing is generated after production builds with Pagefind.
- Vercel is the target deployment platform, configured through `vercel.json`.

## Important Commands

Install dependencies:

```sh
npm install
```

Run locally:

```sh
npm run dev
```

Build production output:

```sh
npm run build
```

Run Astro validation plus build and search indexing:

```sh
npm run build:check
```

Run Biome checks:

```sh
npm run check
```

Format and lint source files with Biome:

```sh
npm run check:fix
```

## Directory Map

`src/pages` contains route entry points. Astro maps files here directly to URLs.

`src/layouts` contains page shells. `Layout.astro` is the active modern shell for the CV pages. `BaseLayout.astro`, `AboutLayout.astro`, and `Main.astro` are template-era layouts still available for older routes or compatibility.

`src/components` contains Astro UI components. The current CV flow primarily uses `Header`, `Footer`, `ProfileHome`, `ProfileAbout`, `Socials`, `LanguageSwitcher`, and SEO-related components.

`src/components/ui` contains React components. They are available because the React integration is enabled, but they are not the primary rendering model for the current pages.

`src/data/profile.ts` is the main content source for the bilingual profile pages. It defines the `ProfileContent` type and stores English and Russian profile copy.

`src/consts.ts` stores site-wide metadata, navigation defaults, feature toggles, and compatibility exports such as `SITE_TITLE` and `SITE_DESCRIPTION`.

`src/constants.ts` stores social links and share links. `src/config.ts` re-exports both `consts.ts` and `constants.ts` so older imports can continue using `@/config`.

`src/content/blog` is the configured Astro content collection location for blog posts. It currently exists as infrastructure even though the repository was cleaned up for CV/portfolio use.

`src/styles` contains global CSS, Tailwind entry styles, typography rules, and custom overrides.

`src/utils` contains small build/rendering helpers, including critical CSS injection and placeholder OG image generation.

`public` contains static assets served at the site root, including the avatar, favicon, web manifest, fonts, and the theme toggle script.

`docs` contains repository documentation.

## Routing And Page Composition

The English home page is `src/pages/index.astro`. It loads `profileContent.en`, wraps the page in `Layout.astro`, emits `WebSite` and `Person` JSON-LD through `StructuredData.astro`, then renders `Header`, `ProfileHome`, and `Footer`.

The Russian home page is `src/pages/ru/index.astro`. It follows the same structure but uses `profileContent.ru`, `lang="ru"`, Russian canonical links, and Russian alternate links.

The English about page has two surfaces:

- `src/pages/about.mdx` renders the HTML page through `AboutLayout.astro` and `ProfileAbout`.
- `src/pages/about.md.ts` returns a generated Markdown response for `/about.md`.

The Russian about page is `src/pages/ru/about.astro`. It uses `Layout.astro`, `Header`, `ProfileAbout`, and `Footer`.

`src/pages/index.md.ts` returns a generated Markdown representation of the English home/profile content.

`src/pages/robots.txt.ts` generates `robots.txt` and points crawlers to `sitemap-index.xml`.

`src/pages/page/[page].astro` remains from pagination/blog infrastructure. With `SITE.postPerIndex` and `SITE.postPerPage` currently set to `0`, pagination should be reviewed before blog listing pages are reintroduced.

## Data Flow

Most public profile content flows from `src/data/profile.ts`.

`profileContent` is keyed by locale:

- `en` for English pages
- `ru` for Russian pages

The profile components receive a `ProfileContent` object as a prop and render without fetching or transforming external data.

Global site metadata flows from `SITE` in `src/consts.ts`. The modern import path is usually `@/config`, which re-exports `SITE` and social constants for compatibility with earlier code.

Social links are maintained in two places:

- `SOCIALS` in `src/constants.ts`, used by `Socials.astro`
- `SOCIAL_LINKS` in `src/consts.ts`, kept for simpler navigation/social metadata compatibility

When changing social URLs, check both files unless the duplicated model is intentionally removed.

## Layouts And Head Metadata

`src/layouts/Layout.astro` is the primary layout for the current CV pages. It handles:

- document shell
- language attribute
- canonical link
- alternate language links
- Open Graph and Twitter metadata
- Google site verification through `PUBLIC_GOOGLE_SITE_VERIFICATION`
- Astro view transitions
- global CSS import
- inline theme script from `/toggle-theme.js`
- Vercel analytics component

`src/components/BaseHead.astro` is used by older layouts. It includes:

- PWA metadata
- critical CSS injection from `src/utils/criticalCSS.ts`
- font preloads
- theme initialization script
- Open Graph and Twitter metadata

Because both systems exist, new pages should prefer `Layout.astro` unless there is a specific reason to preserve the older layout path.

## Styling

The styling model combines Tailwind utility classes with global CSS:

- `src/styles/global.css` is imported by `Layout.astro`.
- `src/styles/tailwind.css` is the Tailwind stylesheet entry.
- `src/styles/typography.css` provides prose and long-form typography behavior.
- `src/styles/custom.css` contains project-specific overrides.
- `src/utils/criticalCSS.ts` contains inline critical CSS used by the older head/layout path.

The active theme system uses CSS variables and a `dark` class on the document element. The runtime toggle behavior is served from `public/toggle-theme.js`.

## Content Collection

`src/content.config.ts` defines a `blog` collection using Astro's content loader:

```ts
export const BLOG_PATH = "src/content/blog";
```

The schema supports blog metadata such as `title`, `description`, `pubDatetime`, `tags`, `draft`, `ogImage`, `heroImage`, and compatibility fields like `source` and `AIDescription`.

The collection remains useful if blog posts are reintroduced. The current README states that original blog posts and media were removed, so the collection should be treated as dormant infrastructure until new posts are added.

## PWA And Static Assets

PWA behavior is configured in `astro.config.mjs` through `AstroPWA`.

Important details:

- `registerType` is `autoUpdate`.
- `favicon.ico` and `avatar.jpg` are included as assets.
- The manifest identifies the site as Nikita Borisov's profile.
- Runtime caching covers Google font CSS and images.
- PWA dev mode is enabled with warnings suppressed.

Static files under `public` are served from the site root. For example, `public/avatar.jpg` is available as `/avatar.jpg`.

## Sitemap, SEO, And Structured Data

Sitemap generation is configured in `astro.config.mjs`.

The sitemap currently contains logic inherited from blog usage:

- homepage has daily change frequency and highest priority
- section pages such as `/about`, `/posts`, and `/search` have higher priority
- post URLs receive priority based on year
- tag and pagination pages receive lower priority

Current CV pages use `StructuredData.astro` for JSON-LD:

- `WebSite`
- `Person`
- `BlogPosting`, available for future blog pages

If blog routes remain disabled or absent, sitemap logic for posts, tags, archives, and search should eventually be simplified.

## Markdown Representations

The project provides Markdown responses for some pages:

- `src/pages/index.md.ts`
- `src/pages/about.md.ts`

`vercel.json` also contains rewrites that route requests with `Accept: text/markdown` to Markdown endpoints, for example `/` to `/index.md` and `/about` to `/about.md`.

There are also redirects for `.md` requests on the `steipete.me` host to `steipete.md`. These rules appear inherited from the original source project and should be reviewed before production use on a different domain.

## Deployment

Vercel deployment is configured by `vercel.json`:

- build command: `npm run build`
- output directory: `dist`
- dev command: `npm run dev`
- install command: `npm install`
- framework: `astro`
- `trailingSlash`: `false`

The same file defines redirects, rewrites, and security headers. Many redirect rules still point at `steipete.me`, `steipete.md`, or old blog paths. Treat these as legacy until the intended production domains are confirmed.

## CI

GitHub Actions are configured in `.github/workflows`.

`astro-build.yml`:

- runs on pushes to `main` and `astro-erudite-design`
- runs on pull requests targeting `main`
- uses Node.js 20
- installs with `npm ci`
- builds with `npm run build`

`lint.yml`:

- runs on pushes to `main`
- runs on pull requests targeting `main`
- uses Node.js 20
- installs with `npm ci`
- checks with `npm run check`

The current working branch for this documentation pass is `codex-project-tech-docs`.

## Quality Tools

Biome is configured in `biome.json`.

Notable choices:

- `dist`, `node_modules`, `.astro`, `public`, `package-lock.json`, and CSS files are excluded from Biome processing.
- formatting uses two spaces and a 100-character line width.
- recommended lint rules are enabled.
- several rules are relaxed for template compatibility, including unused imports/variables and explicit `any`.

TypeScript uses Astro's strict base config through `tsconfig.json`, with `@/*` mapped to `src/*`.

Husky and lint-staged are configured. Staged JavaScript, TypeScript, TSX, and JSON files run `biome check --write --files-ignore-unknown=true`.

## Known Technical Questions

These items need confirmation before making behavior-changing updates:

- `SITE.website` is currently `https://example.com/`. Confirm the real production URL before final SEO, canonical, sitemap, robots, and structured-data work.
- Russian profile content and several Russian UI labels appear corrupted in source as mojibake. Confirm the intended Russian copy and file encoding before fixing it.
- `vercel.json` still contains many `steipete.me`, `steipete.md`, old blog, and external-domain rules. Confirm whether this repository should keep those legacy redirects or replace them with Nikita Borisov's actual domains.
- `README.md` says RSS and search pages were removed, but `npm run build` still runs Pagefind indexing. Confirm whether search should be fully removed, reintroduced, or kept for future blog content.
- Blog infrastructure exists while `SITE.postPerIndex` and `SITE.postPerPage` are set to `0`. Confirm whether the blog is planned; if yes, pagination/list routes need a dedicated pass.
- There are two metadata/head systems: `Layout.astro` and the older `BaseHead.astro` path. Confirm whether older layouts should be removed after all routes are migrated.
- Social links are duplicated between `src/constants.ts` and `src/consts.ts`. Confirm whether both compatibility surfaces are still needed.
