import { Link } from 'react-router-dom'
import { ContentCta } from '../components/content/ContentCta'
import { SiteFooter } from '../components/sections/SiteFooter'
import { SITE_WIDE_CTA_BUTTON_LABEL } from '../config/site'
import { localLandingCenterIsraelPage, serviceShowerPage } from '../content/seoContent'

export function MiklahonCenterIsraelPage() {
  const p = localLandingCenterIsraelPage

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
            <li
              className="max-w-[min(100%,18rem)] truncate font-normal text-neutral-800"
              aria-current="page"
            >
              {p.breadcrumbLabel}
            </li>
          </ol>
        </nav>

        <h1 className="mt-6 text-balance text-3xl font-light tracking-tight text-neutral-950 max-md:text-[1.625rem] md:text-4xl">
          {p.h1}
        </h1>
        {p.paragraphs[0] ? (
          <p className="mt-6 max-w-[95%] text-pretty text-lg font-light leading-relaxed text-neutral-700 md:max-w-[65ch] md:leading-[1.75]">
            {p.paragraphs[0]}
          </p>
        ) : null}

        <ContentCta
          label={SITE_WIDE_CTA_BUTTON_LABEL}
          message="photo"
          title="מתחילים מתמונה אחת"
          subtitle="שלחו צילום של חדר הרחצה — נחזור עם הערכה והמשך צעדים."
          className="mt-10 text-center md:text-start"
        />

        {p.paragraphs[1] ? (
          <p className="mt-8 max-w-[95%] text-pretty text-lg font-light leading-relaxed text-neutral-700 md:max-w-[65ch] md:leading-[1.75]">
            {p.paragraphs[1]}
          </p>
        ) : null}

        <p className="mt-8 max-w-[95%] text-pretty text-base font-light leading-relaxed text-neutral-600 md:max-w-[65ch] md:leading-[1.75]">
          לקריאה מעמיקה:{' '}
          <Link
            to="/miklahon-guide"
            className="font-medium text-emerald-950 underline decoration-emerald-800/35 underline-offset-[5px] hover:decoration-emerald-800/70"
          >
            המדריך המלא למקלחונים בהתאמה אישית
          </Link>
          , או{' '}
          <Link
            to={serviceShowerPage.path}
            className="font-medium text-emerald-950 underline decoration-emerald-800/35 underline-offset-[5px] hover:decoration-emerald-800/70"
          >
            עמוד השירות
          </Link>
          .
        </p>

        <ContentCta
          label={SITE_WIDE_CTA_BUTTON_LABEL}
          message="photo"
          title="קראתם את המדריך?"
          subtitle="אם נשארו שאלות — שלחו תמונה ונדייק יחד את הפתרון."
          className="mt-10 text-center md:text-start"
        />

        <ContentCta
          label={SITE_WIDE_CTA_BUTTON_LABEL}
          message="photo"
          title="רוצים הצעה לפני ביקור בשטח?"
          subtitle="שלחו תמונה של חדר הרחצה — נחזור עם הערכה מדויקת."
          className="mt-12 text-center md:text-start"
        />
      </article>
      <SiteFooter />
    </main>
  )
}
