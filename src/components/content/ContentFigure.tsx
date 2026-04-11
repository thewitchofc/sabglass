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
    <figure
      className={`mt-10 overflow-hidden rounded-sm border border-neutral-200/90 max-md:my-8 md:mt-10 ${className}`.trim()}
    >
      <img
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className="h-auto w-full object-cover object-center"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : undefined}
      />
      {caption ? (
        <figcaption className="border-t border-neutral-200/90 bg-neutral-50 px-4 py-3 text-center text-sm font-light text-neutral-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
