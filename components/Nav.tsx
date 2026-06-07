"use client";

import { useLang, LangToggle } from "./i18n";

export default function Nav() {
  const { t } = useLang();

  const links = [
    { href: "#pipeline", label: t.navPipeline },
    { href: "#why", label: t.navWhy },
    { href: "#stack", label: t.navStack },
    { href: "#cta", label: t.navGame },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-crime/20 bg-noir/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2 font-extrabold text-paper">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-crime text-white shadow-sm">
            📸
          </span>
          <span className="text-lg tracking-tight">Gerador de Fotos</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-paper/70 transition hover:text-crime"
            >
              {l.label}
            </a>
          ))}
        </div>

        <LangToggle />
      </nav>
    </header>
  );
}
