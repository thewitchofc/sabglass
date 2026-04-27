import { ARTICLE_SEO } from '../../content/seoContent'

export function ArticleAuthorBio() {
  return (
    <aside
      className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm md:p-8"
      aria-labelledby="article-author-label"
    >
      <p id="article-author-label" className="text-xs font-medium uppercase tracking-wider text-gold-soft/75">
        נכתב ע״י
      </p>
      <p className="mt-2 text-pretty text-lg font-medium leading-snug text-white md:text-xl">
        {ARTICLE_SEO.authorName} – {ARTICLE_SEO.authorRole}
      </p>
      <p className="mt-2 max-w-[55ch] text-pretty text-sm font-light leading-relaxed text-white/62 md:text-base">
        {ARTICLE_SEO.authorBio}
      </p>
    </aside>
  )
}
