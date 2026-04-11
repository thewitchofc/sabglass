import type { ArticleEmphasisSegment } from '../../content/seoContent'

export function ArticleEmphasisParagraph({
  segments,
  className = 'mt-5 text-pretty text-lg font-light leading-relaxed text-neutral-700',
}: {
  segments: ArticleEmphasisSegment[]
  className?: string
}) {
  return (
    <p className={className}>
      {segments.map((s, i) =>
        s.strong ? (
          <strong key={i} className="font-semibold text-neutral-950">
            {s.text}
          </strong>
        ) : (
          <span key={i}>{s.text}</span>
        ),
      )}
    </p>
  )
}
