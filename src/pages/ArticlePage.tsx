import { Fragment } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { SiteFooter } from '../components/sections/SiteFooter'
import { ArticleBeforeAfter } from '../components/content/ArticleBeforeAfter'
import { ArticleDataTable } from '../components/content/ArticleDataTable'
import { ArticleEmphasisParagraph } from '../components/content/ArticleEmphasisParagraph'
import { ArticleRichParagraph } from '../components/content/ArticleRichParagraph'
import { ArticleTableQuote } from '../components/content/ArticleTableQuote'
import { ArticleToc } from '../components/content/ArticleToc'
import { ContentCta } from '../components/content/ContentCta'
import { ContentFigure } from '../components/content/ContentFigure'
import { ArticleAuthorBio } from '../components/content/ArticleAuthorBio'
import { ArticleRelated } from '../components/content/ArticleRelated'
import { FadeIn } from '../components/ui/FadeIn'
import { premiumCopy } from '../content/premium'
import {
  ARTICLE_DEFAULT_END_CTA,
  formatArticleLastUpdated,
  getArticleBySlug,
  getRelatedArticlesForArticle,
  pillarMiklahonGuidePage,
  serviceShowerPage,
} from '../content/seoContent'

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined
  if (!article) return <Navigate to="/articles" replace />
  const hasEarlyCta = Boolean(article.earlyCta)
  const showMidCta = !hasEarlyCta

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-neutral-950 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] font-sans text-white antialiased md:pb-0"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(184,163,105,0.16),transparent_30%),radial-gradient(circle_at_82%_30%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.045),transparent_34%)]"
        aria-hidden
      />
      <article className="relative mx-auto max-w-4xl pb-10 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pt-24 md:px-8 md:pt-28 [&_h2]:max-md:text-[1.625rem] [&_section_p]:max-w-[65ch] [&_section_p]:leading-[1.75] max-md:[&_p]:max-w-[100%] max-md:[&_p]:leading-[1.75] max-md:[&_section_p]:max-w-[100%]">
        <nav className="text-sm font-light text-white/58" aria-label="שביל ניווט במאמר">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link to="/" className="rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">
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
            <li
              className="max-w-[min(100%,20rem)] truncate font-normal text-white"
              aria-current="page"
            >
              {article.breadcrumbLabel ?? article.h1}
            </li>
          </ol>
        </nav>

        <FadeIn variant="heading">
        <header className="mt-10 rounded-[2.25rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.36em] text-gold-soft/75">
            SAB Glass Guide
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-light tracking-tight text-white max-md:text-[2rem] md:text-5xl">
            {article.h1}
          </h1>
          {article.featuredSnippetAnswer ? (
            <p className="mt-5 max-w-[65ch] text-pretty text-base font-light leading-[1.75] text-white/70 md:text-lg">
              {article.featuredSnippetAnswer}
            </p>
          ) : null}
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-light text-white/52">
            {article.readingTimeLabel ? <p>{article.readingTimeLabel}</p> : null}
            {article.lastUpdated ? (
              <p>עודכן לאחרונה: {formatArticleLastUpdated(article.lastUpdated)}</p>
            ) : null}
          </div>
          <p
            className={`max-w-[65ch] text-pretty text-lg font-light leading-[1.75] text-white/72 ${article.readingTimeLabel || article.lastUpdated || article.featuredSnippetAnswer ? 'mt-5' : 'mt-6'}`}
          >
            {article.intro}
          </p>
        </header>
        </FadeIn>
        {article.earlyCta ? (
          <ContentCta
            label={article.earlyCta.label}
            message={article.earlyCta.message}
            variant="dark"
            className="mt-6 text-center md:text-start"
          />
        ) : null}
        {article.introAfterCtaRich?.map((segments, i) => (
          <ArticleEmphasisParagraph key={`intro-rich-${i}`} segments={segments} />
        ))}
        {article.introAfterCta?.map((para, i) => (
          <p
            key={`intro-after-${i}`}
            className="mt-6 max-w-[65ch] text-pretty text-lg font-light leading-[1.75] text-white/70"
          >
            {para}
          </p>
        ))}
        {article.socialProofLine ? (
          <p className="mt-6 max-w-[65ch] text-pretty text-base font-medium leading-[1.75] text-white/84">
            {article.socialProofLine}
          </p>
        ) : null}
        {article.toc ? (
          <ArticleToc title={article.toc.title} items={article.toc.items} />
        ) : null}
        {article.introLinked?.map((block, i) => (
          <ArticleRichParagraph key={`intro-${i}`} segments={block.segments} />
        ))}

        <ContentFigure
          src={article.image.src}
          alt={article.image.alt}
          caption={article.image.caption}
          priority
        />

        {article.sections.map((sec, idx) => {
          const midIdx = article.midCtaSectionIndex ?? 1
          return (
          <Fragment key={sec.id ?? sec.h2}>
            <FadeIn variant="card" delay={Math.min(idx, 3) * 0.03}>
              <section
                className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm md:p-8"
              >
              <h2
                id={sec.id}
                className="scroll-mt-28 text-2xl font-light tracking-tight text-white md:scroll-mt-32 md:text-3xl"
              >
                {sec.h2}
              </h2>
              {sec.paragraphs.map((para, pi) => (
                <p
                  key={`${sec.h2}-${pi}`}
                  className="mt-6 text-pretty text-base font-light leading-[1.75] text-white/66 md:text-lg"
                >
                  {para}
                </p>
              ))}
              {sec.dataTable ? <ArticleDataTable table={sec.dataTable} /> : null}
              {sec.tableQuote ? (
                <ArticleTableQuote
                  quote={sec.tableQuote.quote}
                  attribution={sec.tableQuote.attribution}
                />
              ) : null}
              {sec.bullets && sec.bullets.length > 0 ? (
                <ul className="mt-6 max-w-[65ch] list-disc space-y-2.5 ps-5 text-base font-light leading-[1.75] text-white/66 md:text-lg">
                  {sec.bullets.map((item) => (
                    <li key={item} className="text-pretty ps-1">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {sec.linkedParagraphs?.map((lp, li) => (
                <ArticleRichParagraph key={`${sec.h2}-lp-${li}`} segments={lp.segments} />
              ))}
              {showMidCta && idx === midIdx ? (
                <>
                  {article.midHook ? (
                    <p className="mt-6 text-center text-base font-medium text-white/84 md:text-start">
                      {article.midHook}
                    </p>
                  ) : null}
                  <ContentCta
                    label={article.ctaMid}
                    message={article.waMidMessage}
                    title={article.ctaMidTitle}
                    subtitle={article.ctaMidSubtitle}
                    variant="dark"
                    className={`text-center md:text-start ${article.midHook ? 'mt-5' : 'mt-8'}`}
                  />
                </>
              ) : null}
              </section>
            </FadeIn>
            {article.secondaryImage?.afterSectionIndex === idx ? (
              <ContentFigure
                src={article.secondaryImage.src}
                alt={article.secondaryImage.alt}
                className="mt-10"
              />
            ) : null}
          </Fragment>
          )
        })}

        {article.beforeAfter ? (
          <FadeIn variant="card">
            <section
              className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm md:p-8"
              aria-labelledby="article-before-after-title"
            >
            <h2
              id="article-before-after-title"
              className="scroll-mt-28 text-2xl font-light tracking-tight text-white md:scroll-mt-32 md:text-3xl"
            >
              {article.beforeAfter.title}
            </h2>
            {article.beforeAfter.beforeSrc && article.beforeAfter.afterSrc ? (
              <ArticleBeforeAfter
                beforeSrc={article.beforeAfter.beforeSrc}
                afterSrc={article.beforeAfter.afterSrc}
                beforeAlt={article.beforeAfter.beforeAlt}
                afterAlt={article.beforeAfter.afterAlt}
                beforeCaption={article.beforeAfter.beforeCaption}
                afterCaption={article.beforeAfter.afterCaption}
              />
            ) : (
              <p className="mt-6 max-w-[65ch] text-pretty text-base font-light leading-[1.75] text-white/66 md:text-lg">
                {article.beforeAfter.placeholder ??
                  'בקרוב נוסיף כאן צילומי לפני ואחרי מהשטח.'}
              </p>
            )}
            </section>
          </FadeIn>
        ) : null}

        {article.faq && article.faq.length > 0 ? (
          <FadeIn variant="card">
            <section
              className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm md:p-8"
              aria-labelledby="faq"
            >
            <h2
              id="faq"
              className="scroll-mt-28 text-2xl font-light tracking-tight text-white md:scroll-mt-32 md:text-3xl"
            >
              שאלות נפוצות
            </h2>
            {article.faq.map((item) => (
              <div key={item.question} className="mt-10 border-t border-white/10 pt-10 first:mt-8 first:border-t-0 first:pt-0">
                <h3 className="text-lg font-medium text-white md:text-xl">{item.question}</h3>
                <p className="mt-4 max-w-[65ch] text-pretty text-base font-light leading-[1.75] text-white/66 md:text-lg">
                  {item.answer}
                </p>
              </div>
            ))}
            {article.faqClosingQuote ? (
              <ArticleTableQuote
                quote={article.faqClosingQuote.quote}
                attribution={article.faqClosingQuote.attribution}
              />
            ) : null}
            </section>
          </FadeIn>
        ) : null}

        {article.galleryClosing ? (
          <ArticleRichParagraph
            segments={article.galleryClosing.segments}
            className="mt-10 max-w-[65ch] text-pretty text-center text-base font-light leading-[1.75] text-white/70 md:text-start md:text-lg"
          />
        ) : null}

        <FadeIn variant="card">
        <nav
          className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm md:p-8"
          aria-label="קישורים למדריך מקלחונים ולשירות מקלחון זכוכית בהתאמה אישית"
        >
          <p className="text-sm font-medium text-white">ממשיכים בתכנון?</p>
          <p className="mt-3 max-w-[65ch] text-pretty text-base font-light leading-[1.75] text-white/66">
            <Link
              to={pillarMiklahonGuidePage.path}
              className="font-medium text-gold-soft underline decoration-gold-soft/35 underline-offset-[5px] hover:decoration-gold-soft/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              {pillarMiklahonGuidePage.h1}
            </Link>
            <span className="mx-2 text-white/25" aria-hidden>
              ·
            </span>
            <Link
              to={serviceShowerPage.path}
              className="font-medium text-gold-soft underline decoration-gold-soft/35 underline-offset-[5px] hover:decoration-gold-soft/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              {serviceShowerPage.h1}
            </Link>
          </p>
        </nav>
        </FadeIn>

        <ArticleRelated articles={getRelatedArticlesForArticle(article, 3)} />

        <ArticleAuthorBio />

        <ContentCta
          label={article.ctaEnd}
          message={article.waEndMessage}
          title={article.ctaEndTitle ?? ARTICLE_DEFAULT_END_CTA.title}
          subtitle={article.ctaEndSubtitle ?? ARTICLE_DEFAULT_END_CTA.subtitle}
          variant="dark"
          className="mt-12 text-center md:text-start"
        />
        <p className="mt-3 max-w-[65ch] text-center text-xs font-light leading-relaxed text-white/56 md:text-start">
          {premiumCopy.conversion.microPhotoLong}
        </p>
      </article>
      <SiteFooter />
    </main>
  )
}
