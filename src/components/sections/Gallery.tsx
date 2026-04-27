import { lazy, Suspense, useMemo, useState } from 'react'
import { WHATSAPP_PHOTO_MESSAGE } from '../../config/site'
import { premiumCopy } from '../../content/premium'
import { catalogProducts, getFlatGalleryItems } from '../../data/catalog'
import { WaMicroLine } from '../WaFrictionHints'
import { FadeIn } from '../ui/FadeIn'
import { WhatsAppLink } from '../ui/WhatsAppLink'
const GalleryLightbox = lazy(() =>
  import('./GalleryLightbox').then((m) => ({ default: m.GalleryLightbox })),
)

export function Gallery() {
  const flatItems = useMemo(() => getFlatGalleryItems(), [])
  const productStartIndices = useMemo(() => {
    const starts: number[] = []
    let acc = 0
    for (const p of catalogProducts) {
      starts.push(acc)
      acc += p.images.length
    }
    return starts
  }, [])
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const close = () => setLightboxIndex(null)

  const goPrev = () => {
    if (lightboxIndex === null) return
    setLightboxIndex(
      (lightboxIndex - 1 + flatItems.length) % flatItems.length,
    )
  }

  const goNext = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % flatItems.length)
  }

  const { gallery, a11y } = premiumCopy

  return (
    <section
      id="catalog"
      className="relative isolate scroll-mt-20 overflow-hidden border-b border-white/10 bg-neutral-950 text-white md:scroll-mt-[4.5rem]"
      aria-labelledby="gallery-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(184,163,105,0.16),transparent_30%),radial-gradient(circle_at_86%_22%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.045),transparent_36%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/24 to-transparent" />

      <div className="relative mx-auto max-w-6xl py-16 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] md:px-8 md:py-28">
        <FadeIn variant="heading">
          <p className="text-xs font-medium uppercase tracking-[0.36em] text-gold-soft/75">
            Real Projects
          </p>
          <h1
            id="gallery-heading"
            className="mt-4 text-4xl font-light tracking-tight text-white max-md:text-[2rem] md:text-5xl"
          >
            {gallery.title}
          </h1>
          <h2 className="mt-3 text-xl font-light tracking-tight text-white/86 md:text-2xl">
            {gallery.titlePick}
          </h2>
          <p className="mt-5 max-w-[95%] text-sm font-light leading-relaxed text-white/64 md:hidden">
            {gallery.subtitleMobile}
          </p>
          <p className="mt-5 hidden max-w-[95%] text-sm font-light leading-relaxed text-white/64 md:block md:max-w-2xl md:text-base">
            {gallery.subtitle}
          </p>
        </FadeIn>

        <div className="mt-10 flex flex-col gap-14 md:mt-16 md:gap-24">
          {catalogProducts.map((product, productIndex) => {
            const startIndex = productStartIndices[productIndex] ?? 0

            return (
              <FadeIn
                key={product.id}
                variant="card"
                delay={productIndex * 0.03}
                id={`catalog-${product.id}`}
                className="scroll-mt-20 md:scroll-mt-[4.5rem]"
              >
                <div
                  className={`pt-8 md:pt-14 ${productIndex > 0 ? 'border-t border-white/10' : ''}`}
                >
                  <h2 className="text-xl font-medium tracking-tight text-white max-md:text-[1.25rem] md:text-2xl">
                    {product.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-pretty text-sm font-light leading-relaxed text-white/62 md:text-base">
                    {product.description}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3 md:mt-8 md:grid-cols-3 md:gap-4">
                    {product.images.map((item, imageIndex) => {
                      const globalIndex = startIndex + imageIndex
                      return (
                        <button
                          key={item.src}
                          type="button"
                          className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] text-start shadow-[0_18px_56px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-gold-soft/30 hover:shadow-[0_28px_80px_rgba(0,0,0,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 md:aspect-[3/4]"
                          onClick={() => setLightboxIndex(globalIndex)}
                          aria-label={`פתיחת תצוגת גלריה מוגדלת — ${item.alt}`}
                        >
                          <img
                            src={item.src}
                            srcSet={`${item.src} 480w, ${item.src} 768w, ${item.src} 1200w`}
                            sizes="(max-width: 768px) 50vw, 33vw"
                            alt={item.alt}
                            width={900}
                            height={1200}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                          <span className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-xs font-medium text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            {product.title}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn variant="card" delay={0.06}>
          <div className="mt-20 flex flex-col items-center rounded-[2rem] border border-white/10 bg-white/[0.055] px-5 py-10 text-center shadow-[0_28px_90px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm md:mt-24 md:px-8 md:py-12">
            <h2 className="text-lg font-light tracking-tight text-white md:text-xl">
              {gallery.afterHookTitle}
            </h2>
            <div className="mt-8 flex w-full max-w-md flex-col items-center">
              <WhatsAppLink
                variant="whatsapp"
                size="lg"
                message={WHATSAPP_PHOTO_MESSAGE}
                className="w-full !rounded-full shadow-[0_14px_40px_rgba(37,211,102,0.26)] sm:w-auto"
                ariaLabel={a11y.whatsappGallerySimilar}
                trackingLabel="gallery"
              >
                {gallery.afterCta}
              </WhatsAppLink>
              <WaMicroLine variant="onDark" className="[&_p]:text-center" />
            </div>
          </div>
        </FadeIn>
      </div>

      {lightboxIndex !== null ? (
        <Suspense fallback={null}>
          <GalleryLightbox
            items={flatItems}
            index={lightboxIndex}
            onClose={close}
            onPrev={goPrev}
            onNext={goNext}
          />
        </Suspense>
      ) : null}
    </section>
  )
}
