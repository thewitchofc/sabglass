import { ARTICLE_SEO } from '../../content/seoContent'

export function ArticleAuthorBio() {
  return (
    <aside
      className="mt-9 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4 shadow-[0_14px_44px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm md:mt-12 md:rounded-[2rem] md:bg-white/[0.045] md:p-8 md:shadow-[0_24px_80px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.06)]"
      aria-labelledby="article-author-label"
    >
      <p id="article-author-label" className="text-xs font-medium uppercase tracking-wider text-gold-soft/75">
        נכתב ע״י
      </p>
      <p className="mt-2 text-pretty text-base font-medium leading-snug text-white md:text-xl">
        {ARTICLE_SEO.authorName} – {ARTICLE_SEO.authorRole}
      </p>
      <p className="mt-2 max-w-[55ch] text-pretty text-xs font-light leading-relaxed text-white/58 md:text-base md:text-white/62">
        {ARTICLE_SEO.authorBio}
      </p>
    </aside>
  )
}
