import { notFound } from "next/navigation";
import { experience, getExperience } from "../../../../src/content/experience";
import { profile } from "../../../../src/content/profile";
import { Controls } from "../../../../src/components/site-client";

export function generateStaticParams() {
  return ["en", "ru"].flatMap((locale) => experience.map(({ slug }) => ({ locale, slug })));
}

export default async function ExperienceDetail({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (locale !== "en" && locale !== "ru") notFound();
  const item = getExperience(slug);
  if (!item) notFound();

  return <main><header className="nav shell"><a className="brand" href={`/${locale}`}>{profile.name[locale]}<span> / SRE</span></a><nav><a href={`/${locale}#experience`}>{locale === "ru" ? "Опыт" : "Experience"}</a><a href={`/${locale}#projects`}>{locale === "ru" ? "Проекты" : "Projects"}</a><a href={`/${locale}#contact`}>{locale === "ru" ? "Контакты" : "Contact"}</a></nav><Controls locale={locale}/></header><article className="experience-detail shell"><a className="back" href={`/${locale}#experience`}>← {locale === "ru" ? "Назад к опыту" : "Back to experience"}</a><header className="experience-detail-hero"><div><p className="eyebrow">{item.period}</p><h1>{item.role}</h1><p className="detail-company">{item.company}</p></div><div className="detail-status"><i/><span>{item.range.end ? (locale === "ru" ? "Завершённый период" : "Completed period") : (locale === "ru" ? "Текущая позиция" : "Current position")}</span></div></header><div className="detail-grid"><aside><p className="detail-label">{locale === "ru" ? "Фокус" : "Focus"}</p>{item.focus[locale].map(x => <span className="detail-focus" key={x}>{x}</span>)}<p className="detail-label stack-label">Stack</p><div className="tags">{item.stack.map(x => <span key={x}>{x}</span>)}</div></aside><div className="detail-body"><p className="detail-intro">{item.summary[locale]}</p>{item.narrative[locale].map(paragraph => <p key={paragraph}>{paragraph}</p>)}<h2>{locale === "ru" ? "Зона ответственности" : "Responsibilities"}</h2><ul>{item.responsibilities[locale].map(x => <li key={x}>{x}</li>)}</ul><h2>{locale === "ru" ? "Ключевые результаты" : "Key outcomes"}</h2><ol className="outcome-list">{item.outcomes[locale].map((x, i) => <li key={x}><span>0{i + 1}</span><p>{x}</p></li>)}</ol></div></div><nav className="experience-next">{experience.filter(other => other.slug !== item.slug).map(other => <a key={other.slug} href={`/${locale}/experience/${other.slug}`}><span>{locale === "ru" ? "Другой период" : "Another period"}</span><strong>{other.company} ↗</strong></a>)}</nav></article></main>;
}
