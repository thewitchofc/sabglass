import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ContentCta } from '../components/content/ContentCta'
import { SiteFooter } from '../components/sections/SiteFooter'
import { SITE_WIDE_CTA_BUTTON_LABEL } from '../config/site'
import { pillarMiklahonGuidePage } from '../content/seoContent'

export function MiklahonGuidePage() {
  const p = pillarMiklahonGuidePage

  return (
    <main className="min-h-dvh bg-white pb-[calc(10rem+env(safe-area-inset-bottom,0px))] font-sans text-neutral-900 antialiased md:pb-0">
      <article className="mx-auto max-w-2xl pb-10 pl-[max(1.25rem,env(safe-area-inset-left,0px))] pr-[max(1.25rem,env(safe-area-inset-right,0px))] pt-24 md:px-8 md:pt-28">
        <nav className="text-sm font-light text-neutral-500" aria-label="שביל ניווט">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link
                to="/"
                className="rounded-sm hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2"
              >
                בית
              </Link>
            </li>
            <li className="text-neutral-300 select-none" aria-hidden>
              ›
            </li>
            <li>
              <Link
                to="/articles"
                className="rounded-sm hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2"
              >
                מאמרים
              </Link>
            </li>
            <li className="text-neutral-300 select-none" aria-hidden>
              ›
            </li>
            <li className="max-w-[min(100%,18rem)] truncate font-normal text-neutral-800" aria-current="page">
              {p.breadcrumbLabel}
            </li>
          </ol>
        </nav>

        <h1 className="mt-6 text-balance text-3xl font-light tracking-tight text-neutral-950 max-md:text-[1.625rem] md:text-4xl">
          {p.h1}
        </h1>
        <p className="mt-6 max-w-[95%] text-pretty text-lg font-light leading-relaxed text-neutral-700 md:max-w-[65ch] md:leading-[1.75]">
          {p.intro}
        </p>

        <ContentCta
          label={SITE_WIDE_CTA_BUTTON_LABEL}
          message="photo"
          className="mt-8 text-center md:text-start"
        />

        {p.sections.map((sec, idx) => (
          <Fragment key={sec.h2}>
            <section className="mt-14 border-t border-neutral-200 pt-14">
              <h2 className="text-2xl font-light tracking-tight text-neutral-950 md:text-3xl">{sec.h2}</h2>
              {sec.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="mt-5 max-w-[65ch] text-pretty text-base font-light leading-[1.75] text-neutral-600 md:text-lg"
                >
                  {para}
                </p>
              ))}
              <ul className="mt-6 space-y-2.5 border-s-2 border-emerald-900/20 ps-4">
                {sec.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      className="text-pretty text-base font-medium text-emerald-950 underline decoration-emerald-800/35 underline-offset-[5px] transition-colors hover:decoration-emerald-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2"
                    >
                      {l.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            {idx === 1 ? (
              <ContentCta
                label={SITE_WIDE_CTA_BUTTON_LABEL}
                message="photo"
                title="רוצים כיוון לפני שקוראים הכל?"
                subtitle="שלחו תמונה של חדר הרחצה — נחזור עם המלצה מותאמת."
                className="mt-14 border-t border-neutral-200 pt-14 text-center md:text-start"
              />
            ) : null}
          </Fragment>
        ))}

        <nav className="mt-14 border-t border-neutral-200 pt-10" aria-label="המשך קריאה">
          <p className="text-sm font-medium text-neutral-950">כל המדריכים</p>
          <Link
            to="/articles"
            className="mt-3 inline-block text-base font-light text-neutral-700 underline decoration-neutral-300 underline-offset-[5px] hover:text-neutral-950"
          >
            חזרה למרכז המאמרים
          </Link>
        </nav>

        <ContentCta
          label={SITE_WIDE_CTA_BUTTON_LABEL}
          message="photo"
          title="מוכנים להתקדם?"
          subtitle="שלחו תמונה של חדר הרחצה ונחזור עם כיוון מדויק."
          className="mt-12 text-center md:text-start"
        />
      </article>
      <SiteFooter />
    </main>
  )
}
