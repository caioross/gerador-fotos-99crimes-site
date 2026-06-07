"use client";

import { useLang } from "./i18n";

const GAME_URL = "https://github.com/caioross/99Crimes";

export function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 animate-flicker bg-[radial-gradient(600px_300px_at_50%_0%,rgba(179,18,42,0.25),transparent)]" />
      <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:py-32">
        <span className="inline-block rounded-full border border-crime/40 bg-crime/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-crime">
          {t.heroBadge}
        </span>
        <h1 className="mt-6 text-5xl font-black tracking-tight text-paper sm:text-7xl">
          {t.heroTitle}
        </h1>
        <p className="mt-4 font-mono text-lg text-crime sm:text-xl">{t.heroTagline}</p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-paper/75 sm:text-lg">
          {t.heroSub}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pipeline"
            className="rounded-full bg-crime px-7 py-3 font-semibold text-white shadow-lg shadow-crime/30 transition hover:bg-crimeDim"
          >
            {t.heroCtaPrimary}
          </a>
          <a
            href={GAME_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-paper/30 px-7 py-3 font-semibold text-paper transition hover:border-crime hover:text-crime"
          >
            {t.heroCtaSecondary}
          </a>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-3 sm:grid-cols-9 sm:gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg border border-crime/20 bg-gradient-to-br from-film to-noir shadow-inner"
              style={{ opacity: 0.4 + (i % 3) * 0.2 }}
            >
              <div className="grid h-full place-items-center text-2xl text-crime/40">
                ?
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pipeline() {
  const { t } = useLang();
  return (
    <section id="pipeline" className="border-t border-crime/10 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-paper sm:text-4xl">
          {t.pipelineTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-paper/70">
          {t.pipelineLead}
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((s) => (
            <div
              key={s.n}
              className="group relative rounded-2xl border border-crime/20 bg-film/60 p-6 transition hover:border-crime/60"
            >
              <span className="font-mono text-4xl font-black text-crime/40 transition group-hover:text-crime">
                {s.n}
              </span>
              <h3 className="mt-3 text-lg font-bold text-paper">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Why() {
  const { t } = useLang();
  return (
    <section id="why" className="border-t border-crime/10 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-paper sm:text-4xl">
          {t.whyTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-paper/70">{t.whyLead}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {t.features.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 rounded-2xl border border-crime/20 bg-film/40 p-6"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-crime/15 text-2xl">
                {f.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-paper">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-paper/70">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stack() {
  const { t } = useLang();
  return (
    <section id="stack" className="border-t border-crime/10 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-paper sm:text-4xl">{t.stackTitle}</h2>
          <p className="mt-3 text-paper/70">{t.stackLead}</p>
          <ul className="mt-6 space-y-3">
            {t.stackItems.map((s) => (
              <li key={s} className="flex items-start gap-3 text-paper/85">
                <span className="mt-1 text-crime">▹</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-crime/20 bg-film/60 p-6">
          <h3 className="text-lg font-bold text-paper">{t.qualityTitle}</h3>
          <ul className="mt-4 space-y-3">
            {t.qualityItems.map((q) => (
              <li key={q} className="flex items-start gap-3 text-paper/85">
                <span className="mt-0.5 text-crime">✓</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  const { t } = useLang();
  return (
    <section id="cta" className="border-t border-crime/10 py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold text-paper sm:text-4xl">{t.ctaTitle}</h2>
        <p className="mx-auto mt-4 max-w-xl text-paper/75">{t.ctaLead}</p>
        <a
          href={GAME_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-crime px-8 py-3 font-semibold text-white shadow-lg shadow-crime/30 transition hover:bg-crimeDim"
        >
          {t.ctaButton}
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-crime/10 py-10">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-paper/50">
        <p>{t.footerNote}</p>
        <p className="mt-1">
          © {new Date().getFullYear()} Caio · {t.footerRights}
        </p>
      </div>
    </footer>
  );
}
