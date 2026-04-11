import { Link } from 'react-router-dom'
import type { RichTextSegment } from '../../content/seoContent'

const linkClass =
  'font-medium text-neutral-900 underline decoration-neutral-400 underline-offset-[5px] transition-colors hover:decoration-neutral-900'

export function ArticleRichParagraph({
  segments,
  className,
}: {
  segments: RichTextSegment[]
  className?: string
}) {
  const base =
    'mt-5 text-pretty text-base font-light leading-relaxed text-neutral-600 md:text-lg'
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
