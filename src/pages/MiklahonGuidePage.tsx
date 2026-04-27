import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ContentCta } from '../components/content/ContentCta'
import { SiteFooter } from '../components/sections/SiteFooter'
import { FadeIn } from '../components/ui/FadeIn'
import { SITE_WIDE_CTA_BUTTON_LABEL } from '../config/site'
import { pillarMiklahonGuidePage } from '../content/seoContent'

export function MiklahonGuidePage() {
  const p = pillarMiklahonGuidePage

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] font-sans text-white antialiased md:pb-0">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(184,163,105,0.16),transparent_30%),radial-gradient(circle_at_82%_28%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.045),transparent_34%)]"
        aria-hidden
      />
      <article className="relative mx-auto max-w-4xl pb-10 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pt-24 md:px-8 md:pt-28">
        <nav className="text-sm font-light text-white/58" aria-label="שביל ניווט במדריך מקלחונים">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link
                to="/"
                className="rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                בית
              </Link>
            </li>
            <li className="select-none text-white/25" aria-hidden>
              ›
            </li>
            <li>
              <Link
                to="/articles"
                className="rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                מאמרים
              </Link>
            </li>
            <li className="select-none text-white/25" aria-hidden>
              ›
            </li>
            <li className="max-w-[min(100%,18rem)] truncate font-normal text-white" aria-current="page">
              {p.breadcrumbLabel}
            </li>
          </ol>
        </nav>

        <FadeIn variant="heading">
        <header className="mt-10 rounded-[2.25rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.36em] text-gold-soft/75">
            Complete Shower Guide
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-light tracking-tight text-white max-md:text-[2rem] md:text-5xl">
            {p.h1}
          </h1>
          <p className="mt-6 max-w-[95%] text-pretty text-lg font-light leading-relaxed text-white/70 md:max-w-[65ch] md:leading-[1.75]">
            {p.intro}
          </p>
        </header>
        </FadeIn>

        <FadeIn variant="card">
        <ContentCta
          label={SITE_WIDE_CTA_BUTTON_LABEL}
          message="photo"
          variant="dark"
          className="mt-8 text-center md:text-start"
        />
        </FadeIn>

        {p.sections.map((sec, idx) => (
          <Fragment key={sec.h2}>
            <FadeIn variant="card" delay={Math.min(idx, 3) * 0.03}>
            <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm md:p-8">
              <h2 className="text-2xl font-light tracking-tight text-white md:text-3xl">{sec.h2}</h2>
              {sec.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="mt-5 max-w-[65ch] text-pretty text-base font-light leading-[1.75] text-white/66 md:text-lg"
                >
                  {para}
                </p>
              ))}
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {sec.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      className="block rounded-2xl border border-white/10 bg-neutral-950/35 px-4 py-3 text-pretty text-sm font-medium text-white/84 transition-colors hover:border-gold-soft/25 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                    >
                      {l.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            </FadeIn>
            {idx === 1 ? (
              <FadeIn variant="card">
              <ContentCta
                label={SITE_WIDE_CTA_BUTTON_LABEL}
                message="photo"
                title="רוצים כיוון לפני שקוראים הכל?"
                subtitle="שלחו תמונה של חדר הרחצה — נחזור עם המלצה מותאמת."
                variant="dark"
                className="mt-10 text-center md:text-start"
              />
              </FadeIn>
            ) : null}
          </Fragment>
        ))}

        <FadeIn variant="card">
        <section className="mt-14 rounded-[2rem] border border-white/10 bg-neutral-950/85 p-6 text-white shadow-[0_28px_90px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.06)] md:p-8">
          <nav aria-label="מעבר חזרה למרכז המאמרים אחרי המדריך">
            <p className="text-sm font-medium text-white">כל המדריכים</p>
            <Link
              to="/articles"
              className="mt-3 inline-block text-base font-light text-white/65 underline decoration-white/30 underline-offset-[5px] hover:text-white"
            >
              חזרה למרכז המאמרים
            </Link>
          </nav>

          <ContentCta
            label={SITE_WIDE_CTA_BUTTON_LABEL}
            message="photo"
            title="מוכנים להתקדם?"
            subtitle="שלחו תמונה של חדר הרחצה ונחזור עם כיוון מדויק."
            variant="dark"
            className="mt-8 !bg-neutral-950/70 text-center shadow-none md:text-start"
          />
        </section>
        </FadeIn>
      </article>
      <SiteFooter />
    </main>
  )
}
