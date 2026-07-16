import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin", "cyrillic"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Nick — SRE | DevOps Engineer", template: "%s — Nick" },
  description: "SRE and DevOps engineer building reliable infrastructure, observability and automation.",
  metadataBase: new URL("https://example.com"), // TODO: replace with your production domain.
  openGraph: { title: "Nick — SRE | DevOps Engineer", description: "Reliable infrastructure. Calm operations.", type: "website", images: [{ url: "/og.png", width: 1734, height: 907, alt: "Nick — SRE | DevOps Engineer" }] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>;
}
