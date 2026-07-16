"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Controls({ locale }: { locale: "en" | "ru" }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const next = stored === "dark" || (!stored && matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.dataset.theme = next ? "dark" : "light";
  }, []);
  const toggleTheme = () => { const next = document.documentElement.dataset.theme !== "dark"; document.documentElement.dataset.theme = next ? "dark" : "light"; localStorage.setItem("theme", next ? "dark" : "light"); };
  const other = locale === "en" ? "ru" : "en";
  const switched = pathname.replace(/^\/(en|ru)/, `/${other}`);
  return <div className="controls"><a className="control" href={switched} aria-label="Switch language">{other.toUpperCase()}</a><button className="control" onClick={toggleTheme} aria-label="Toggle color theme">Theme</button><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open}>Menu</button>{open && <div className="mobile-menu"><a href={`/${locale}#about`}>About</a><a href={`/${locale}#experience`}>Experience</a><a href={`/${locale}#projects`}>Projects</a><a href={`/${locale}/blog`}>Blog</a><a href={`/${locale}#contact`}>Contact</a></div>}</div>;
}
