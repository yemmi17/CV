import { profile } from "../content/profile";
import { socials } from "../content/socials";
import { experience } from "../content/experience";
import { projects } from "../content/projects";
import { skillGroups } from "../content/skills";
import { posts } from "../content/blog";
import { en } from "../messages/en";
import { ru } from "../messages/ru";
import { Controls } from "./site-client";

export function Site({ locale }: { locale: "en" | "ru" }) {
  const t = locale === "ru" ? ru : en;
  return <main>
    <header className="nav shell"><a className="brand" href={`/${locale}`}>{profile.name[locale]}<span> / SRE</span></a><nav>{t.nav.map((item, i) => <a key={item} href={i === 3 ? `/${locale}/blog` : `/${locale}#${["about","experience","projects","blog","contact"][i]}`}>{item}</a>)}</nav><Controls locale={locale} /></header>
    <section className="hero shell" id="about"><div className="hero-copy"><p className="eyebrow">{t.eyebrow}</p><h1>{t.headline.split("\n").map(x => <span key={x}>{x}</span>)}</h1><p className="lede">{t.intro}</p><div className="availability"><i />{profile.availability[locale]}</div></div><figure className="portrait"><Image src={profile.photo} width={1254} height={1254} priority sizes="(max-width: 850px) 100vw, 38vw" alt={`${profile.name[locale]}, SRE and DevOps engineer`} /><figcaption>{profile.location[locale]} <span>© 2026</span></figcaption></figure></section>
    <section className="section shell" id="experience"><div className="section-label"><span>01</span><h2>{t.nav[1]}</h2></div><div className="timeline">{experience.map(job => <article key={job.role}><div className="job-meta"><p>{job.period}</p><p>{job.company}</p></div><div><h3>{job.role}</h3><p className="summary">{job.summary[locale]}</p><ul>{job.outcomes[locale].map(x => <li key={x}>{x}</li>)}</ul><div className="tags">{job.stack.map(x => <span key={x}>{x}</span>)}</div></div></article>)}</div></section>
    <section className="section shell skills"><div className="section-label"><span>02</span><h2>Capabilities</h2></div><div className="skill-grid">{Object.entries(skillGroups).map(([group, items]) => <div key={group}><h3>{group}</h3><p>{items.join(" · ")}</p></div>)}</div></section>
    <section className="section shell" id="projects"><div className="section-label"><span>03</span><h2>{t.selected}</h2></div><div className="projects">{projects.map((project, i) => <article key={project.name}><div className="project-no">0{i + 1}</div><p className="status">{project.status}</p><h3>{project.name}</h3><p>{project.description[locale]}</p><div className="tags">{project.stack.map(x => <span key={x}>{x}</span>)}</div></article>)}</div></section>
    <section className="section shell" id="blog"><div className="section-label"><span>04</span><h2>{t.writing}</h2></div><div className="post-list">{posts.map(post => <a key={post.slug} href={`/${locale}/blog/${post.slug}`}><span>{post.date}</span><h3>{post.title}</h3><em>{post.minutes} min ↗</em></a>)}</div><a className="text-link" href={`/${locale}/blog`}>{t.allPosts} →</a></section>
    <section className="contact shell" id="contact"><p className="eyebrow">05 / Contact</p><h2>{t.contact}</h2><p>{t.contactText}</p><div className="contact-links"><a href={`mailto:${socials.email}`}>{socials.email}</a><a href={socials.github}>GitHub ↗</a><a href={socials.linkedin}>LinkedIn ↗</a><a href={socials.telegram}>Telegram ↗</a><a href={profile.cv}>{t.cv} ↓</a></div></section>
    <footer className="shell"><span>Nick / SRE Engineer</span><span>Built with care for reliability.</span></footer>
  </main>;
}
import Image from "next/image";
