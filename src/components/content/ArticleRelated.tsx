import { Link } from 'react-router-dom'
import { articleLinkTitle, type ArticleContent } from '../../content/seoContent'

export function ArticleRelated({ articles }: { articles: ArticleContent[] }) {
  if (!articles.length) return null
  return (
    <section
      className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm md:p-8"
      aria-labelledby="related-articles-heading"
    >
      <h2
        id="related-articles-heading"
        className="text-xl font-light tracking-tight text-white md:text-2xl"
      >
        מאמרים נוספים שיכולים לעזור
      </h2>
      <ul className="mt-6 space-y-4">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link
              to={a.path}
              className="group block max-w-full rounded-2xl border border-white/10 bg-neutral-950/35 px-5 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              <span className="text-pretty text-base font-medium text-white transition-colors group-hover:text-gold-soft md:text-lg">
                {articleLinkTitle(a)}
              </span>
              <span className="mt-1.5 block max-w-[62ch] text-pretty text-sm font-light leading-relaxed text-white/58">
                {a.intro}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
