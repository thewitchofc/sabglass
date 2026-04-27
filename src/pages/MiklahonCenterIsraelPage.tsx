import { Link } from 'react-router-dom'
import { ContentCta } from '../components/content/ContentCta'
import { SiteFooter } from '../components/sections/SiteFooter'
import { FadeIn } from '../components/ui/FadeIn'
import { SITE_WIDE_CTA_BUTTON_LABEL } from '../config/site'
import { localLandingCenterIsraelPage, serviceShowerPage } from '../content/seoContent'

export function MiklahonCenterIsraelPage() {
  const p = localLandingCenterIsraelPage

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] font-sans text-white antialiased md:pb-0">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(184,163,105,0.16),transparent_30%),radial-gradient(circle_at_82%_30%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.045),transparent_34%)]"
        aria-hidden
      />
      <article className="relative mx-auto max-w-4xl pb-10 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pt-24 md:px-8 md:pt-28">
        <nav className="text-sm font-light text-white/58" aria-label="שביל ניווט בעמוד שירות אזור מרכז הארץ">
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
            <li
              className="max-w-[min(100%,18rem)] truncate font-normal text-white"
              aria-current="page"
            >
              {p.breadcrumbLabel}
            </li>
          </ol>
        </nav>

        <FadeIn variant="heading">
        <header className="mt-10 rounded-[2.25rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.36em] text-gold-soft/75">
            Service Area
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-light tracking-tight text-white max-md:text-[2rem] md:text-5xl">
            {p.h1}
          </h1>
          {p.paragraphs[0] ? (
            <p className="mt-6 max-w-[95%] text-pretty text-lg font-light leading-relaxed text-white/70 md:max-w-[65ch] md:leading-[1.75]">
              {p.paragraphs[0]}
            </p>
          ) : null}
        </header>
        </FadeIn>

        <FadeIn variant="card">
        <ContentCta
          label={SITE_WIDE_CTA_BUTTON_LABEL}
          message="photo"
          title="מתחילים מתמונה אחת"
          subtitle="שלחו צילום של חדר הרחצה — נחזור עם הערכה והמשך צעדים."
          variant="dark"
          className="mt-10 text-center md:text-start"
        />
        </FadeIn>

        {p.paragraphs[1] ? (
          <p className="mt-8 max-w-[95%] text-pretty text-lg font-light leading-relaxed text-white/70 md:max-w-[65ch] md:leading-[1.75]">
            {p.paragraphs[1]}
          </p>
        ) : null}

        <FadeIn>
        <p className="mt-8 max-w-[95%] text-pretty text-base font-light leading-relaxed text-white/66 md:max-w-[65ch] md:leading-[1.75]">
          לקריאה מעמיקה:{' '}
          <Link
            to="/miklahon-guide"
            className="font-medium text-gold-soft underline decoration-gold-soft/35 underline-offset-[5px] hover:decoration-gold-soft/70"
          >
            המדריך המלא למקלחונים בהתאמה אישית
          </Link>
          , או{' '}
          <Link
            to={serviceShowerPage.path}
            className="font-medium text-gold-soft underline decoration-gold-soft/35 underline-offset-[5px] hover:decoration-gold-soft/70"
          >
            עמוד השירות
          </Link>
          .
        </p>
        </FadeIn>

        <FadeIn variant="card">
        <ContentCta
          label={SITE_WIDE_CTA_BUTTON_LABEL}
          message="photo"
          title="קראתם את המדריך?"
          subtitle="אם נשארו שאלות — שלחו תמונה ונדייק יחד את הפתרון."
          variant="dark"
          className="mt-10 text-center md:text-start"
        />
        </FadeIn>

        <FadeIn variant="card">
        <ContentCta
          label={SITE_WIDE_CTA_BUTTON_LABEL}
          message="photo"
          title="רוצים הצעה לפני ביקור בשטח?"
          subtitle="שלחו תמונה של חדר הרחצה — נחזור עם הערכה מדויקת."
          variant="dark"
          className="mt-12 text-center md:text-start"
        />
        </FadeIn>
      </article>
      <SiteFooter />
    </main>
  )
}
