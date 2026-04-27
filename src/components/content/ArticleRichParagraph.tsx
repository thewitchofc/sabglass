import { Link } from 'react-router-dom'
import type { RichTextSegment } from '../../content/seoContent'

const linkClass =
  'font-medium text-gold-soft underline decoration-gold-soft/35 underline-offset-[5px] transition-colors hover:decoration-gold-soft/70'

export function ArticleRichParagraph({
  segments,
  className,
}: {
  segments: RichTextSegment[]
  className?: string
}) {
  const base =
    'mt-5 text-pretty text-base font-light leading-relaxed text-white/66 md:text-lg'
  return (
    <p className={className ?? base}>
      {segments.map((s, i) =>
        s.href ? (
          <Link key={i} to={s.href} className={linkClass}>
            {s.text}
          </Link>
        ) : (
          <span key={i}>{s.text}</span>
        ),
      )}
    </p>
  )
}
