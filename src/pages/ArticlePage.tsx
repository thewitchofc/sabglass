import { Fragment } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { SiteFooter } from '../components/sections/SiteFooter'
import { ArticleBeforeAfter } from '../components/content/ArticleBeforeAfter'
import { ArticleDataTable } from '../components/content/ArticleDataTable'
import { ArticleEmphasisParagraph } from '../components/content/ArticleEmphasisParagraph'
import { ArticleRichParagraph } from '../components/content/ArticleRichParagraph'
import { ArticleScrollNudge } from '../components/content/ArticleScrollNudge'
import { ArticleTableQuote } from '../components/content/ArticleTableQuote'
import { ArticleToc } from '../components/content/ArticleToc'
import { ContentCta } from '../components/content/ContentCta'
import { ContentFigure } from '../components/content/ContentFigure'
import { ArticleAuthorBio } from '../components/content/ArticleAuthorBio'
import { ArticleRelated } from '../components/content/ArticleRelated'
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

  return (
    <main
      className={`min-h-dvh bg-white font-sans text-neutral-900 antialiased ${article.scrollNudgeCta ? 'pb-[calc(12rem+env(safe-area-inset-bottom,0px))] md:pb-32' : 'pb-[calc(9rem+env(safe-area-inset-bottom,0px))] md:pb-0'}`}
    >
      <article className="mx-auto max-w-2xl pb-10 pl-[max(1.25rem,env(safe-area-inset-left,0px))] pr-[max(1.25rem,env(safe-area-inset-right,0px))] pt-24 md:px-8 md:pt-28 [&_h2]:max-md:text-[1.625rem] [&_section_p]:max-w-[65ch] [&_section_p]:leading-[1.75] max-md:[&_p]:max-w-[95%] max-md:[&_p]:leading-relaxed max-md:[&_section_p]:max-w-[95%]">
        <nav className="text-sm font-light text-neutral-500" aria-label="שביל ניווט">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link to="/" className="rounded-sm hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2">
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
            <li
              className="max-w-[min(100%,20rem)] truncate font-normal text-neutral-800"
              aria-current="page"
            >
              {article.breadcrumbLabel ?? article.h1}
            </li>
          </ol>
        </nav>

        <h1 className="mt-6 text-balance text-3xl font-light tracking-tight text-neutral-950 max-md:text-[1.625rem] md:text-4xl">
          {article.h1}
        </h1>
        {article.featuredSnippetAnswer ? (
          <p className="mt-5 max-w-[65ch] text-pretty text-base font-light leading-[1.75] text-neutral-700 md:text-lg">
            {article.featuredSnippetAnswer}
          </p>
        ) : null}
        {article.readingTimeLabel ? (
          <p className="mt-4 text-sm font-light text-neutral-500">{article.readingTimeLabel}</p>
        ) : null}
        {article.lastUpdated ? (
          <p className="mt-2 text-sm font-light text-neutral-400">
            עודכן לאחרונה: {formatArticleLastUpdated(article.lastUpdated)}
          </p>
        ) : null}
        <p
          className={`max-w-[65ch] text-pretty text-lg font-light leading-[1.75] text-neutral-700 ${article.readingTimeLabel || article.lastUpdated || article.featuredSnippetAnswer ? 'mt-5' : 'mt-6'}`}
        >
          {article.intro}
        </p>
        {article.earlyCta ? (
          <ContentCta
            label={article.earlyCta.label}
            message={article.earlyCta.message}
            className="mt-6 text-center md:text-start"
          />
        ) : null}
        {article.introAfterCtaRich?.map((segments, i) => (
          <ArticleEmphasisParagraph key={`intro-rich-${i}`} segments={segments} />
        ))}
        {article.introAfterCta?.map((para, i) => (
          <p
            key={`intro-after-${i}`}
            className="mt-6 max-w-[65ch] text-pretty text-lg font-light leading-[1.75] text-neutral-700"
          >
            {para}
          </p>
        ))}
        {article.socialProofLine ? (
          <p className="mt-6 max-w-[65ch] text-pretty text-base font-medium leading-[1.75] text-neutral-800">
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
            <section
              className={
                idx === 0
                  ? 'mt-12'
                  : 'mt-14 border-t border-neutral-200 pt-14'
              }
            >
              <h2
                id={sec.id}
                className="scroll-mt-28 text-2xl font-light tracking-tight text-neutral-950 md:scroll-mt-32 md:text-3xl"
              >
                {sec.h2}
              </h2>
              {sec.paragraphs.map((para, pi) => (
                <p
                  key={`${sec.h2}-${pi}`}
                  className="mt-6 text-pretty text-base font-light leading-[1.75] text-neutral-600 md:text-lg"
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
                <ul className="mt-6 max-w-[65ch] list-disc space-y-2.5 ps-5 text-base font-light leading-[1.75] text-neutral-600 md:text-lg">
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
              {idx === midIdx ? (
                <>
                  {article.midHook ? (
                    <p className="mt-6 text-center text-base font-medium text-neutral-800 md:text-start">
                      {article.midHook}
                    </p>
                  ) : null}
                  <ContentCta
                    label={article.ctaMid}
                    message={article.waMidMessage}
                    title={article.ctaMidTitle}
                    subtitle={article.ctaMidSubtitle}
                    className={`text-center md:text-start ${article.midHook ? 'mt-5' : 'mt-8'}`}
                  />
                </>
              ) : null}
            </section>
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
          <section
            className="mt-14 border-t border-neutral-200 pt-14"
            aria-labelledby="article-before-after-title"
          >
            <h2
              id="article-before-after-title"
              className="scroll-mt-28 text-2xl font-light tracking-tight text-neutral-950 md:scroll-mt-32 md:text-3xl"
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
              <p className="mt-6 max-w-[65ch] text-pretty text-base font-light leading-[1.75] text-neutral-600 md:text-lg">
                {article.beforeAfter.placeholder ??
                  'בקרוב נוסיף כאן צילומי לפני ואחרי מהשטח.'}
              </p>
            )}
          </section>
        ) : null}

        {article.faq && article.faq.length > 0 ? (
          <section
            className="mt-14 border-t border-neutral-200 pt-14"
            aria-labelledby="faq"
          >
            <h2
              id="faq"
              className="scroll-mt-28 text-2xl font-light tracking-tight text-neutral-950 md:scroll-mt-32 md:text-3xl"
            >
              שאלות נפוצות
            </h2>
            {article.faq.map((item) => (
              <div key={item.question} className="mt-10 border-t border-neutral-100 pt-10 first:mt-8 first:border-t-0 first:pt-0">
                <h3 className="text-lg font-medium text-neutral-950 md:text-xl">{item.question}</h3>
                <p className="mt-4 max-w-[65ch] text-pretty text-base font-light leading-[1.75] text-neutral-600 md:text-lg">
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
            {article.faqAfterCta ? (
              <ContentCta
                label={article.faqAfterCta.buttonLabel}
                message={article.faqAfterCta.message}
                title={article.faqAfterCta.title}
                subtitle={article.faqAfterCta.subtitle}
                className="mt-10 text-center md:text-start"
              />
            ) : null}
          </section>
        ) : null}

        {article.galleryClosing ? (
          <ArticleRichParagraph
            segments={article.galleryClosing.segments}
            className="mt-10 max-w-[65ch] text-pretty text-center text-base font-light leading-[1.75] text-neutral-700 md:text-start md:text-lg"
          />
        ) : null}

        <nav
          className="mt-14 border-t border-neutral-200 pt-12"
          aria-label="מדריך ושירות"
        >
          <p className="text-sm font-medium text-neutral-950">ממשיכים בתכנון?</p>
          <p className="mt-3 max-w-[65ch] text-pretty text-base font-light leading-[1.75] text-neutral-600">
            <Link
              to={pillarMiklahonGuidePage.path}
              className="font-medium text-emerald-950 underline decoration-emerald-800/35 underline-offset-[5px] hover:decoration-emerald-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2"
            >
              {pillarMiklahonGuidePage.h1}
            </Link>
            <span className="mx-2 text-neutral-300" aria-hidden>
              ·
            </span>
            <Link
              to={serviceShowerPage.path}
              className="font-medium text-emerald-950 underline decoration-emerald-800/35 underline-offset-[5px] hover:decoration-emerald-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2"
            >
              {serviceShowerPage.h1}
            </Link>
          </p>
        </nav>

        <ArticleRelated articles={getRelatedArticlesForArticle(article, 3)} />

        <ArticleAuthorBio />

        <ContentCta
          label={article.ctaEnd}
          message={article.waEndMessage}
          title={article.ctaEndTitle ?? ARTICLE_DEFAULT_END_CTA.title}
          subtitle={article.ctaEndSubtitle ?? ARTICLE_DEFAULT_END_CTA.subtitle}
          className="mt-12 text-center md:text-start"
        />
        <p className="mt-3 max-w-[65ch] text-center text-xs font-light leading-relaxed text-neutral-500 md:text-start">
          {premiumCopy.conversion.microPhotoLong}
        </p>
      </article>
      {article.scrollNudgeCta ? (
        <ArticleScrollNudge
          label={article.scrollNudgeCta.label}
          message={article.scrollNudgeCta.message}
          microLine={article.scrollNudgeCta.microLine}
        />
      ) : null}
      <SiteFooter />
    </main>
  )
}
