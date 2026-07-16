# Nick — SRE | DevOps CV

Editorial bilingual CV site built with the Sites Next-compatible starter.

## Run

On Windows PowerShell:

```powershell
$env:WRANGLER_LOG_PATH='.wrangler/wrangler.log'
npx.cmd vinext dev
```

Production build:

```powershell
$env:WRANGLER_LOG_PATH='.wrangler/wrangler.log'
npx.cmd vinext build
```

## Replace demo data

- Name, location, availability and PDF path: `src/content/profile.ts`
- Email and social URLs: `src/content/socials.ts`
- Education, activities and languages: `src/content/background.ts`
- Employer, dates and outcomes: `src/content/experience.ts`
- Projects: `src/content/projects.ts`
- Skills: `src/content/skills.ts`
- UI copy: `src/messages/en.ts`, `src/messages/ru.ts`
- Production domain: search for `TODO: replace domain`
- CV: copy it to `public/cv/nick-sre-cv.pdf`

## Add an article

Add localized `.mdx` files under `content/blog`, then register metadata in `src/content/blog.ts`. Keep the slug shared between language versions.

## Vercel

For a conventional Vercel deployment, migrate from Vinext to a standard Next.js App Router scaffold, keep `app/`, `src/`, `content/`, and `public/`, then connect the repository in Vercel. The current project is configured for Sites/Cloudflare Worker-compatible output.
