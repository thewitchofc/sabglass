import { Link } from 'react-router-dom'
import { ContentCta } from '../components/content/ContentCta'
import { SiteFooter } from '../components/sections/SiteFooter'
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
    <main className="min-h-dvh bg-white pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] font-sans text-neutral-900 antialiased md:pb-0">
      <div className="mx-auto max-w-2xl pb-10 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pt-24 md:px-8 md:pt-28">
        <nav className="text-sm font-light text-neutral-600" aria-label="שביל ניווט בעמוד מאמרים">
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
            <li className="font-normal text-neutral-800" aria-current="page">
              מאמרים
            </li>
          </ol>
        </nav>

        <h1 className="mt-6 text-balance text-3xl font-light tracking-tight text-neutral-950 max-md:text-[1.625rem] md:text-4xl">
          מדריך מקלחונים וזכוכית בהתאמה אישית
        </h1>
        <p className="mt-6 max-w-[95%] text-pretty text-lg font-light leading-relaxed text-neutral-700 md:max-w-[65ch] md:leading-[1.75]">
          כל מה שצריך לדעת לפני שבוחרים מקלחון — בחירה נכונה, מחיר, זכוכית והתאמה לחלל. מתחילים מהמדריך המלא או בוחרים נושא מהרשימה.
        </p>

        <ContentCta
          label={SITE_WIDE_CTA_BUTTON_LABEL}
          message="photo"
          title="מעדיפים לדבר לפני הקריאה?"
          subtitle="שלחו תמונה של חדר הרחצה — נכוון אתכם למאמרים הרלוונטיים."
          className="mt-8 text-center md:text-start"
        />

        <Link
          to={pillarMiklahonGuidePage.path}
          className="mt-8 block rounded-sm border border-emerald-900/20 bg-emerald-50/40 px-5 py-5 transition-colors hover:border-emerald-900/35 hover:bg-emerald-50/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900/90">
            עמוד עמודים
          </span>
          <span className="mt-1 block text-lg font-medium text-neutral-950">{pillarMiklahonGuidePage.h1}</span>
          <span className="mt-2 block text-sm font-light leading-relaxed text-neutral-600">
            סיכום מבנה: סוגים, חלל, מחיר וזכוכית — עם קישורים למאמרים המלאים.
          </span>
        </Link>

        <section className="mt-10" aria-labelledby="service-hub-title">
          <h2 id="service-hub-title" className="text-lg font-medium text-neutral-950">
            שירות והתקנה
          </h2>
          <Link
            to={serviceShowerPage.path}
            className="mt-4 block rounded-sm border border-neutral-200 bg-neutral-50/50 px-5 py-4 text-neutral-800 transition-colors hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2"
          >
            <span className="font-medium text-neutral-950">{serviceShowerPage.h1}</span>
            <span className="mt-1 block text-sm font-light leading-relaxed text-neutral-600">
              מקלחוני זכוכית בהתאמה אישית, סוגים, התקנה ויתרונות זכוכית מחוסמת.
            </span>
          </Link>
        </section>

        <section className="mt-12" aria-labelledby="local-hub-title">
          <h2 id="local-hub-title" className="text-lg font-medium text-neutral-950">
            אזור שירות
          </h2>
          <Link
            to={localLandingCenterIsraelPage.path}
            className="mt-4 block rounded-sm border border-neutral-200 px-5 py-4 transition-colors hover:border-neutral-400 hover:bg-neutral-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2"
          >
            <span className="font-medium text-neutral-950">{localLandingCenterIsraelPage.h1}</span>
            <span className="mt-1 block text-sm font-light text-neutral-600">
              {SERVICE_AREA_COPY.reachTrust}
            </span>
          </Link>
        </section>

        <ContentCta
          label={SITE_WIDE_CTA_BUTTON_LABEL}
          message="photo"
          title="כבר בחרתם נושא?"
          subtitle="אם יש תמונה — נענה מהר יותר עם כיוון מדויק."
          className="mt-14 border-t border-neutral-200 pt-12 text-center md:text-start"
        />

        {articleHubGroups.map((group) => (
          <section key={group.id} className="mt-14 border-t border-neutral-200 pt-12" aria-labelledby={`hub-${group.id}`}>
            <h2 id={`hub-${group.id}`} className="text-xl font-light tracking-tight text-neutral-950 md:text-2xl">
              {group.title}
            </h2>
            <ul className="mt-6 space-y-3">
              {group.links.map((item) => {
                const a = articlesBySlug[item.slug]
                if (!a) return null
                return (
                  <li key={`${group.id}-${item.slug}`}>
                    <Link
                      to={a.path}
                      className="block rounded-sm border border-neutral-200 px-5 py-4 transition-colors hover:border-neutral-400 hover:bg-neutral-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2"
                    >
                      <span className="font-medium text-neutral-950">{item.label}</span>
                      <span className="mt-1 block text-sm font-light leading-relaxed text-neutral-600 line-clamp-2">
                        {a.metaDescription}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>
        ))}

        <section className="mt-14 border-t border-neutral-200 pt-12" aria-labelledby="all-articles-title">
          <h2 id="all-articles-title" className="text-xl font-light tracking-tight text-neutral-950 md:text-2xl">
            כל המאמרים
          </h2>
          <ul className="mt-6 space-y-3">
            {articlesList.map((a) => (
              <li key={a.slug}>
                <Link
                  to={a.path}
                  className="block rounded-sm border border-neutral-200 px-5 py-3 text-sm transition-colors hover:border-neutral-400 hover:bg-neutral-50/80"
                >
                  <span className="font-medium text-neutral-950">{a.h1}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {plannedArticleTopics.length > 0 ? (
          <section className="mt-14 border-t border-dashed border-neutral-200 pt-12" aria-labelledby="planned-title">
            <h2 id="planned-title" className="text-lg font-medium text-neutral-950">
              בקרוב במדריך
            </h2>
            <p className="mt-2 max-w-[65ch] text-sm font-light leading-relaxed text-neutral-600">
              נושאים שנוסיף כמאמרים נפרדים — עקבו אחר העדכונים בעמוד זה.
            </p>
            <ul className="mt-4 space-y-2 text-sm font-light text-neutral-600">
              {plannedArticleTopics.map((t) => (
                <li key={t.id} className="flex items-center gap-2">
                  <span className="text-neutral-400" aria-hidden>
                    ○
                  </span>
                  {t.title}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <ContentCta
          label={SITE_WIDE_CTA_BUTTON_LABEL}
          message="photo"
          title="סיימתם לקרוא?"
          subtitle="שלחו תמונה בוואטסאפ — נחזור עם הצעה מותאמת למקלחון שלכם."
          className="mt-14 border-t border-neutral-200 pt-12 text-center md:text-start"
        />
      </div>
      <SiteFooter />
    </main>
  )
}
