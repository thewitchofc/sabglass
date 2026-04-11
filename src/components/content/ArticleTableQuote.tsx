/** ציטוט קצר לאחר טבלת מחירים — חיזוק אמון */
export function ArticleTableQuote({
  quote,
  attribution,
}: {
  quote: string
  attribution: string
}) {
  return (
    <figure className="mt-8 rounded-sm border border-emerald-900/10 bg-emerald-50/35 px-5 py-5 md:px-6">
      <blockquote className="text-pretty text-base font-medium leading-relaxed text-neutral-900 md:text-lg">
        <span className="text-emerald-900/80" aria-hidden>
          &ldquo;
        </span>
        {quote}
        <span className="text-emerald-900/80" aria-hidden>
          &rdquo;
        </span>
      </blockquote>
      <figcaption className="mt-3 text-sm font-light text-neutral-600 md:text-base">— {attribution}</figcaption>
    </figure>
  )
}
