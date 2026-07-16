import type { MetadataRoute } from "next";
import { posts } from "../src/content/blog";
import { experience } from "../src/content/experience";
export default function sitemap():MetadataRoute.Sitemap{const base="https://nick-sre-profile.yemmi0.chatgpt.site";return ["en","ru"].flatMap(locale=>[{url:`${base}/${locale}`},{url:`${base}/${locale}/blog`},...experience.map(item=>({url:`${base}/${locale}/experience/${item.slug}`})),...posts.map(p=>({url:`${base}/${locale}/blog/${p.slug}`}))])}
