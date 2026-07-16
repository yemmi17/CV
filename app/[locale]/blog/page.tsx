import { notFound } from "next/navigation";
import { posts } from "../../../src/content/blog";
import { Controls } from "../../../src/components/site-client";
import { profile } from "../../../src/content/profile";

export const metadata = { title: "Field notes", description: "Notes on SRE, Kubernetes, observability and AI agents." };
export default async function Blog({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (locale !== "en" && locale !== "ru") notFound(); return <main><header className="nav shell"><a className="brand" href={`/${locale}`}>{profile.name[locale]}<span> / SRE</span></a><nav><a href={`/${locale}`}>Home</a><a href={`/${locale}#projects`}>Projects</a><a href={`/${locale}#contact`}>Contact</a></nav><Controls locale={locale}/></header><section className="blog-hero shell"><p className="eyebrow">Journal / 2026</p><h1>{locale === "ru" ? "Инженерные заметки" : "Field notes"}</h1><p className="lede">SRE, Kubernetes, observability, incident response and context engineering.</p></section><section className="blog-grid shell">{posts.map(p => <a className="blog-card" key={p.slug} href={`/${locale}/blog/${p.slug}`}><p className="status">{p.date} · {p.minutes} min</p><h2>{p.title}</h2><p>{p.description}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></a>)}</section></main>; }
