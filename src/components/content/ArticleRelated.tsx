import { Link } from 'react-router-dom'
import { articleLinkTitle, type ArticleContent } from '../../content/seoContent'

export function ArticleRelated({ articles }: { articles: ArticleContent[] }) {
  if (!articles.length) return null
  return (
    <section
      className="mt-14 border-t border-neutral-200 pt-12"
      aria-labelledby="related-articles-heading"
    >
      <h2
        id="related-articles-heading"
        className="text-xl font-light tracking-tight text-neutral-950 md:text-2xl"
      >
        מאמרים נוספים שיכולים לעזור
      </h2>
      <ul className="mt-6 space-y-5">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link
              to={a.path}
              className="group inline-block max-w-full rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2"
            >
              <span className="text-pretty text-base font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-[5px] transition-colors group-hover:text-emerald-950 group-hover:decoration-emerald-800/40 md:text-lg">
                {articleLinkTitle(a)}
              </span>
            </Link>
            <p className="mt-1.5 max-w-[62ch] text-pretty text-sm font-light leading-relaxed text-neutral-500">
              {a.intro}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
