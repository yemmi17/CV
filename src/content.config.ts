import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/content/blog";
export const PAGES_PATH = "src/content/pages";
export const PROJECTS_PATH = "src/content/projects";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.coerce.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      unlisted: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      heroImage: z.string().optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
      // Additional fields from existing posts
      source: z.string().optional(),
      AIDescription: z.boolean().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: `./${PAGES_PATH}`,
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.enum(["about", "contacts"]),
    locale: z.enum(["en", "ru"]),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: `./${PROJECTS_PATH}`,
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(["en", "ru"]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { blog, pages, projects };
