import { FadeIn } from '../ui/FadeIn'

type Props = {
  src: string
  alt: string
  caption?: string
  className?: string
  /** תמונה ראשונה מעל הקיפול — שיפור LCP */
  priority?: boolean
}

export function ContentFigure({ src, alt, caption, className = '', priority = false }: Props) {
  return (
    <FadeIn variant="image">
      <figure
        className={`mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.06)] max-md:my-8 md:mt-10 ${className}`.trim()}
      >
        <img
          src={src}
          srcSet={`${src} 480w, ${src} 768w, ${src} 1200w`}
          sizes="(max-width: 768px) 100vw, 1200px"
          alt={alt}
          width={1200}
          height={800}
          className="h-auto w-full object-cover object-center"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : undefined}
        />
        {caption ? (
          <figcaption className="border-t border-white/10 bg-neutral-950/55 px-4 py-3 text-center text-sm font-light text-white/58">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </FadeIn>
  )
}
