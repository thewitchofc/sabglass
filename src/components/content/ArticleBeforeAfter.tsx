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
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wider text-neutral-600 md:text-start">
          לפני
        </p>
        <figure className="overflow-hidden rounded-sm border border-neutral-200/90 transition-shadow duration-300 md:group-hover:shadow-md md:group-hover:ring-1 md:group-hover:ring-neutral-300/80">
          <img
            src={beforeSrc}
            alt={beforeAltFull}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="h-auto w-full object-cover object-center transition-[transform] duration-300 ease-out md:group-hover:scale-[1.015] motion-reduce:transition-none"
          />
          {beforeCaption ? (
            <figcaption className="border-t border-neutral-200/90 bg-neutral-50 px-3 py-2 text-center text-xs font-light text-neutral-600 md:text-start md:text-sm">
              {beforeCaption}
            </figcaption>
          ) : null}
        </figure>
      </div>

      <div
        className="my-5 flex shrink-0 items-center justify-center md:my-0 md:flex-col md:px-2"
        aria-hidden
      >
        <div className="h-px w-full bg-neutral-200 md:hidden" />
        <div className="hidden h-full min-h-[120px] w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent md:block" />
      </div>

      <div className="group flex min-w-0 flex-1 flex-col md:ps-4">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wider text-neutral-600 md:text-start">
          אחרי
        </p>
        <figure className="overflow-hidden rounded-sm border border-neutral-200/90 transition-shadow duration-300 md:group-hover:shadow-md md:group-hover:ring-1 md:group-hover:ring-neutral-300/80">
          <img
            src={afterSrc}
            alt={afterAltFull}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="h-auto w-full object-cover object-center transition-[transform] duration-300 ease-out md:group-hover:scale-[1.015] motion-reduce:transition-none"
          />
          {afterCaption ? (
            <figcaption className="border-t border-neutral-200/90 bg-neutral-50 px-3 py-2 text-center text-xs font-light text-neutral-600 md:text-start md:text-sm">
              {afterCaption}
            </figcaption>
          ) : null}
        </figure>
      </div>
    </div>
  )
}
