import type { APIRoute } from "astro";
import { getPageDocument } from "@/utils/content";

export const GET: APIRoute = async () => {
  try {
    const page = await getPageDocument("en", "about");
    const markdownContent = `# ${page.data.title}\n\n${page.body}`;

    return new Response(markdownContent, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
};
