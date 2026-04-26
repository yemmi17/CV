import { type CollectionEntry, getCollection } from "astro:content";
import type { Locale } from "@/data/profile";

export type PageSlug = "about" | "contacts";
export type ProjectEntry = CollectionEntry<"projects">;

export const getEntrySlug = (entry: Pick<ProjectEntry, "id">) =>
  entry.id
    .replace(/\\/g, "/")
    .replace(/^(en|ru)\//, "")
    .replace(/\.(md|mdx)$/, "");

export async function getPageDocument(locale: Locale, slug: PageSlug) {
  const pages = await getCollection("pages");
  const page = pages.find((entry) => entry.data.locale === locale && entry.data.slug === slug);

  if (!page) {
    throw new Error(`Missing ${locale}/${slug} page document in src/content/pages`);
  }

  return page;
}

export async function getPublishedProjects(locale: Locale) {
  const projects = await getCollection("projects", ({ data }) => data.draft !== true);
  assertProjectTranslations(projects);

  return projects
    .filter((project) => project.data.locale === locale)
    .sort((left, right) => {
      const leftOrder = left.data.order ?? Number.MAX_SAFE_INTEGER;
      const rightOrder = right.data.order ?? Number.MAX_SAFE_INTEGER;

      if (leftOrder !== rightOrder) return leftOrder - rightOrder;

      return left.data.title.localeCompare(right.data.title);
    });
}

export async function getAllPublishedProjects() {
  const projects = await getCollection("projects", ({ data }) => data.draft !== true);
  assertProjectTranslations(projects);

  return projects;
}

function assertProjectTranslations(projects: ProjectEntry[]) {
  const localesBySlug = new Map<string, Set<Locale>>();

  for (const project of projects) {
    const slug = getEntrySlug(project);
    const locales = localesBySlug.get(slug) ?? new Set<Locale>();
    locales.add(project.data.locale);
    localesBySlug.set(slug, locales);
  }

  const missingPairs = [...localesBySlug.entries()]
    .filter(([, locales]) => !locales.has("en") || !locales.has("ru"))
    .map(([slug]) => slug);

  if (missingPairs.length > 0) {
    throw new Error(`Missing project translations for: ${missingPairs.join(", ")}`);
  }
}
