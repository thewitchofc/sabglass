import { Link } from 'react-router-dom'
import { articleLinkTitle, type ArticleContent } from '../../content/seoContent'

export function ArticleRelated({ articles }: { articles: ArticleContent[] }) {
  if (!articles.length) return null
  return (
    <section
      className="mt-9 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4 shadow-[0_14px_44px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm md:mt-12 md:rounded-[2rem] md:bg-white/[0.045] md:p-8 md:shadow-[0_24px_80px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.06)]"
      aria-labelledby="related-articles-heading"
    >
      <h2
        id="related-articles-heading"
        className="text-xl font-light tracking-tight text-white md:text-2xl"
      >
        מאמרים נוספים שיכולים לעזור
      </h2>
      <ul className="mt-5 space-y-3 md:mt-6 md:space-y-4">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link
              to={a.path}
              className="group block max-w-full rounded-xl border border-white/10 bg-neutral-950/30 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 md:rounded-2xl md:bg-neutral-950/35 md:px-5 md:py-4"
            >
              <span className="text-pretty text-sm font-medium text-white transition-colors group-hover:text-gold-soft md:text-lg">
                {articleLinkTitle(a)}
              </span>
              <span className="mt-1.5 hidden max-w-[62ch] text-pretty text-sm font-light leading-relaxed text-white/58 md:block">
                {a.intro}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
