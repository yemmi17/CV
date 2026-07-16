import type { MetadataRoute } from "next";
import { posts } from "../src/content/blog";
export default function sitemap():MetadataRoute.Sitemap{const base="https://example.com";return ["en","ru"].flatMap(locale=>[{url:`${base}/${locale}`},{url:`${base}/${locale}/blog`},...posts.map(p=>({url:`${base}/${locale}/blog/${p.slug}`}))])} // TODO: replace domain.
