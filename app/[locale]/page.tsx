import { notFound } from "next/navigation";
import { Site } from "../../src/components/site";

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ru") notFound();
  return <Site locale={locale} />;
}
