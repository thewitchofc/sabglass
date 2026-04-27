type Props = {
  beforeSrc: string
  afterSrc: string
  beforeAlt?: string
  afterAlt?: string
  beforeCaption?: string
  afterCaption?: string
}

export function ArticleBeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeCaption,
  afterCaption,
}: Props) {
  const beforeAltFull =
    beforeAlt ?? 'לפני התקנה — חדר רחצה לפני התקנת מקלחון זכוכית'
  const afterAltFull =
    afterAlt ?? 'אחרי התקנה — מקלחון זכוכית לאחר התקנה מקצועית'

  return (
    <div className="mt-6 flex flex-col items-stretch gap-0 md:flex-row md:items-stretch">
      <div className="group flex min-w-0 flex-1 flex-col md:pe-4">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wider text-white/58 md:text-start">
          לפני
        </p>
        <figure className="overflow-hidden rounded-2xl border border-white/10 transition-shadow duration-300 md:group-hover:shadow-[0_18px_50px_rgba(0,0,0,0.28)] md:group-hover:ring-1 md:group-hover:ring-gold-soft/25">
          <img
            src={beforeSrc}
            srcSet={`${beforeSrc} 480w, ${beforeSrc} 768w, ${beforeSrc} 1200w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={beforeAltFull}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="h-auto w-full object-cover object-center transition-[transform] duration-300 ease-out md:group-hover:scale-[1.015] motion-reduce:transition-none"
          />
          {beforeCaption ? (
            <figcaption className="border-t border-white/10 bg-neutral-950/55 px-3 py-2 text-center text-xs font-light text-white/58 md:text-start md:text-sm">
              {beforeCaption}
            </figcaption>
          ) : null}
        </figure>
      </div>

      <div
        className="my-5 flex shrink-0 items-center justify-center md:my-0 md:flex-col md:px-2"
        aria-hidden
      >
        <div className="h-px w-full bg-white/10 md:hidden" />
        <div className="hidden h-full min-h-[120px] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:block" />
      </div>

      <div className="group flex min-w-0 flex-1 flex-col md:ps-4">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wider text-white/58 md:text-start">
          אחרי
        </p>
        <figure className="overflow-hidden rounded-2xl border border-white/10 transition-shadow duration-300 md:group-hover:shadow-[0_18px_50px_rgba(0,0,0,0.28)] md:group-hover:ring-1 md:group-hover:ring-gold-soft/25">
          <img
            src={afterSrc}
            srcSet={`${afterSrc} 480w, ${afterSrc} 768w, ${afterSrc} 1200w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={afterAltFull}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="h-auto w-full object-cover object-center transition-[transform] duration-300 ease-out md:group-hover:scale-[1.015] motion-reduce:transition-none"
          />
          {afterCaption ? (
            <figcaption className="border-t border-white/10 bg-neutral-950/55 px-3 py-2 text-center text-xs font-light text-white/58 md:text-start md:text-sm">
              {afterCaption}
            </figcaption>
          ) : null}
        </figure>
      </div>
    </div>
  )
}
