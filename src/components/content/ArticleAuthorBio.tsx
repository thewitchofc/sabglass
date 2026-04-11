import { ARTICLE_SEO } from '../../content/seoContent'

export function ArticleAuthorBio() {
  return (
    <aside className="mt-12 border-t border-neutral-200 pt-10" aria-labelledby="article-author-label">
      <p id="article-author-label" className="text-xs font-medium uppercase tracking-wider text-neutral-500">
        נכתב ע״י
      </p>
      <p className="mt-2 text-pretty text-lg font-medium leading-snug text-neutral-950 md:text-xl">
        {ARTICLE_SEO.authorName} – {ARTICLE_SEO.authorRole}
      </p>
      <p className="mt-2 max-w-[55ch] text-pretty text-sm font-light leading-relaxed text-neutral-600 md:text-base">
        {ARTICLE_SEO.authorBio}
      </p>
    </aside>
  )
}
