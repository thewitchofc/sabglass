/** ציטוט קצר לאחר טבלת מחירים — חיזוק אמון */
export function ArticleTableQuote({
  quote,
  attribution,
}: {
  quote: string
  attribution: string
}) {
  return (
    <figure className="mt-8 rounded-3xl border border-gold-soft/15 bg-gold/10 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:px-6">
      <blockquote className="text-pretty text-base font-medium leading-relaxed text-white/86 md:text-lg">
        <span className="text-gold-soft/80" aria-hidden>
          &ldquo;
        </span>
        {quote}
        <span className="text-gold-soft/80" aria-hidden>
          &rdquo;
        </span>
      </blockquote>
      <figcaption className="mt-3 text-sm font-light text-white/58 md:text-base">— {attribution}</figcaption>
    </figure>
  )
}
