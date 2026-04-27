import { Link } from 'react-router-dom'
import { ContentCta } from '../components/content/ContentCta'
import { SiteFooter } from '../components/sections/SiteFooter'
import { FadeIn } from '../components/ui/FadeIn'
import { SITE_WIDE_CTA_BUTTON_LABEL } from '../config/site'
import {
  articleHubGroups,
  articlesBySlug,
  articlesList,
  localLandingCenterIsraelPage,
  pillarMiklahonGuidePage,
  plannedArticleTopics,
  serviceShowerPage,
} from '../content/seoContent'
import { SERVICE_AREA_COPY } from '../content/serviceAreaCopy'

export function ArticlesIndexPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] font-sans text-white antialiased md:pb-0">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(184,163,105,0.16),transparent_30%),radial-gradient(circle_at_82%_32%,rgba(255,255,255,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.045),transparent_34%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl pb-8 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pt-22 md:px-8 md:pt-28">
        <nav className="text-sm font-light text-white/58" aria-label="שביל ניווט בעמוד מאמרים">
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
            <li className="font-normal text-white" aria-current="page">
              מאמרים
            </li>
          </ol>
        </nav>

        <FadeIn variant="heading">
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.36em] text-gold-soft/75 md:mt-10">
            Shower Guide
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-light tracking-tight text-white max-md:text-[1.75rem] md:text-5xl">
            מדריך מקלחונים וזכוכית בהתאמה אישית
          </h1>
          <p className="mt-4 max-w-[95%] text-pretty text-sm font-light leading-relaxed text-white/66 md:mt-6 md:max-w-[65ch] md:text-lg md:leading-[1.75] md:text-white/70">
            כל מה שצריך לדעת לפני שבוחרים מקלחון — בחירה נכונה, מחיר, זכוכית והתאמה לחלל. מתחילים מהמדריך המלא או בוחרים נושא מהרשימה.
          </p>
        </FadeIn>

        <FadeIn variant="card">
        <ContentCta
          label={SITE_WIDE_CTA_BUTTON_LABEL}
          message="photo"
          title="מעדיפים לדבר לפני הקריאה?"
          subtitle="שלחו תמונה של חדר הרחצה — נכוון אתכם למאמרים הרלוונטיים."
          variant="dark"
          className="mt-8 text-center md:text-start"
        />
        </FadeIn>

        <FadeIn variant="card">
        <Link
          to={pillarMiklahonGuidePage.path}
          className="group relative mt-7 block overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-5 shadow-[0_16px_48px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold-soft/30 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 md:mt-8 md:rounded-[2rem] md:bg-white/[0.06] md:px-6 md:py-7 md:shadow-[0_28px_90px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.08)]"
        >
          <span
            className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-gold/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden
          />
          <span className="relative text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft/80">
            המדריך המרכזי
          </span>
          <span className="relative mt-2 block text-xl font-light tracking-tight text-white md:text-3xl">
            {pillarMiklahonGuidePage.h1}
          </span>
          <span className="relative mt-2 block max-w-2xl text-xs font-light leading-relaxed text-white/58 md:mt-3 md:text-base md:text-white/65">
            סיכום מבנה: סוגים, חלל, מחיר וזכוכית — עם קישורים למאמרים המלאים.
          </span>
        </Link>
        </FadeIn>

        <FadeIn variant="card">
        <section className="mt-8 md:mt-10" aria-labelledby="service-hub-title">
          <h2 id="service-hub-title" className="text-lg font-medium text-white">
            שירות והתקנה
          </h2>
          <Link
            to={serviceShowerPage.path}
            className="mt-3 block rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-white/20 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 md:mt-4 md:rounded-2xl md:bg-white/[0.045] md:px-5 md:py-4"
          >
            <span className="font-medium text-white">{serviceShowerPage.h1}</span>
            <span className="mt-1 hidden text-sm font-light leading-relaxed text-white/60 md:block">
              מקלחוני זכוכית בהתאמה אישית, סוגים, התקנה ויתרונות זכוכית מחוסמת.
            </span>
          </Link>
        </section>
        </FadeIn>

        <FadeIn variant="card">
        <section className="mt-8 md:mt-12" aria-labelledby="local-hub-title">
          <h2 id="local-hub-title" className="text-lg font-medium text-white">
            אזור שירות
          </h2>
          <Link
            to={localLandingCenterIsraelPage.path}
            className="mt-3 block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-white/20 hover:bg-white/[0.055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 md:mt-4 md:rounded-2xl md:bg-white/[0.035] md:px-5 md:py-4"
          >
            <span className="font-medium text-white">{localLandingCenterIsraelPage.h1}</span>
            <span className="mt-1 hidden text-sm font-light text-white/60 md:block">
              {SERVICE_AREA_COPY.reachTrust}
            </span>
          </Link>
        </section>
        </FadeIn>

        <FadeIn variant="card">
        <ContentCta
          label={SITE_WIDE_CTA_BUTTON_LABEL}
          message="photo"
          title="כבר בחרתם נושא?"
          subtitle="אם יש תמונה — נענה מהר יותר עם כיוון מדויק."
          variant="dark"
          className="mt-9 border-t border-white/10 pt-8 text-center md:mt-14 md:pt-12 md:text-start"
        />
        </FadeIn>

        {articleHubGroups.map((group, idx) => (
          <FadeIn key={group.id} variant="card" delay={Math.min(idx, 3) * 0.03}>
          <section key={group.id} className="mt-9 border-t border-white/10 pt-8 md:mt-14 md:pt-12" aria-labelledby={`hub-${group.id}`}>
            <h2 id={`hub-${group.id}`} className="text-xl font-light tracking-tight text-white md:text-2xl">
              {group.title}
            </h2>
            <ul className="mt-4 space-y-2.5 md:mt-6 md:space-y-3">
              {group.links.map((item) => {
                const a = articlesBySlug[item.slug]
                if (!a) return null
                return (
                  <li key={`${group.id}-${item.slug}`}>
                    <Link
                      to={a.path}
                      className="block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-gold-soft/25 hover:bg-white/[0.055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 md:rounded-2xl md:bg-white/[0.035] md:px-5 md:py-4"
                    >
                      <span className="text-sm font-medium text-white md:text-base">{item.label}</span>
                      <span className="mt-1 hidden text-sm font-light leading-relaxed text-white/58 line-clamp-2 md:block">
                        {a.metaDescription}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>
          </FadeIn>
        ))}

        <FadeIn variant="card">
        <section className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 text-white shadow-[0_16px_48px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm md:mt-14 md:rounded-[2rem] md:bg-white/[0.055] md:p-8 md:shadow-[0_28px_90px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div aria-labelledby="all-articles-title">
            <h2 id="all-articles-title" className="text-xl font-light tracking-tight text-white md:text-2xl">
              כל המאמרים
            </h2>
            <ul className="mt-4 space-y-2.5 md:mt-6 md:space-y-3">
              {articlesList.map((a) => (
                <li key={a.slug}>
                  <Link
                    to={a.path}
                    className="block rounded-xl border border-white/10 bg-neutral-950/30 px-4 py-2.5 text-xs transition-colors hover:border-gold-soft/25 hover:bg-white/[0.06] md:rounded-2xl md:bg-neutral-950/35 md:px-5 md:py-3 md:text-sm"
                  >
                    <span className="font-medium text-white/86">{a.h1}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {plannedArticleTopics.length > 0 ? (
            <div className="mt-8 border-t border-dashed border-white/10 pt-7 md:mt-12 md:pt-10" aria-labelledby="planned-title">
              <h2 id="planned-title" className="text-lg font-medium text-white">
                בקרוב במדריך
              </h2>
              <p className="mt-2 hidden max-w-[65ch] text-sm font-light leading-relaxed text-white/58 md:block">
                נושאים שנוסיף כמאמרים נפרדים — עקבו אחר העדכונים בעמוד זה.
              </p>
              <ul className="mt-4 space-y-2 text-sm font-light text-white/58">
                {plannedArticleTopics.map((t) => (
                  <li key={t.id} className="flex items-center gap-2">
                    <span className="text-gold-soft/55" aria-hidden>
                      ○
                    </span>
                    {t.title}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <ContentCta
            label={SITE_WIDE_CTA_BUTTON_LABEL}
            message="photo"
            title="סיימתם לקרוא?"
            subtitle="שלחו תמונה בוואטסאפ — נחזור עם הצעה מותאמת למקלחון שלכם."
            variant="dark"
            className="mt-10 text-center shadow-none md:text-start"
          />
        </section>
        </FadeIn>
      </div>
      <SiteFooter />
    </main>
  )
}
