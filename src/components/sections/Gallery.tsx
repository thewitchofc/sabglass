import { lazy, Suspense, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
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
      className="scroll-mt-20 border-b border-neutral-200/80 bg-white md:scroll-mt-[4.5rem]"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl py-14 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] md:px-8 md:py-28">
        <FadeIn>
          <h1
            id="gallery-heading"
            className="text-3xl font-light tracking-tight text-neutral-950 max-md:text-[1.625rem] md:text-4xl"
          >
            {gallery.title}
          </h1>
          <p className="mt-2 text-xl font-light tracking-tight text-neutral-950 md:mt-3 md:text-2xl">
            {gallery.titlePick}
          </p>
          <p className="mt-5 max-w-[95%] text-sm font-light leading-relaxed text-neutral-600 md:hidden">
            {gallery.subtitleMobile}
          </p>
          <p className="mt-5 hidden max-w-[95%] text-sm font-light leading-relaxed text-neutral-600 md:block md:max-w-2xl md:text-base">
            {gallery.subtitle}
          </p>
        </FadeIn>

        <div className="mt-10 flex flex-col gap-14 md:mt-16 md:gap-24">
          {catalogProducts.map((product, productIndex) => {
            const startIndex = productStartIndices[productIndex] ?? 0

            return (
              <motion.article
                key={product.id}
                id={`catalog-${product.id}`}
                className="scroll-mt-20 md:scroll-mt-[4.5rem]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  delay: productIndex * 0.03,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className={`pt-8 md:pt-14 ${productIndex > 0 ? 'border-t border-neutral-200' : ''}`}
                >
                  <h2 className="text-xl font-medium tracking-tight text-neutral-950 max-md:text-[1.25rem] md:text-2xl">
                    {product.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-pretty text-sm font-light leading-relaxed text-neutral-600 md:text-base">
                    {product.description}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3 md:mt-8 md:grid-cols-3 md:gap-4">
                    {product.images.map((item, imageIndex) => {
                      const globalIndex = startIndex + imageIndex
                      return (
                        <button
                          key={item.src}
                          type="button"
                          className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-sm border border-neutral-200/90 bg-neutral-100 text-start transition-shadow duration-500 hover:border-neutral-400 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 md:aspect-[3/4]"
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
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          />
                          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                          <span className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-xs font-medium text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            {product.title}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <FadeIn delay={0.06}>
          <div className="mt-20 flex flex-col items-center border-t border-neutral-200 pt-16 text-center md:mt-24 md:pt-20">
            <h2 className="text-lg font-light tracking-tight text-neutral-950 md:text-xl">
              {gallery.afterHookTitle}
            </h2>
            <div className="mt-8 flex w-full max-w-md flex-col items-center">
              <WhatsAppLink
                variant="whatsapp"
                size="lg"
                message={WHATSAPP_PHOTO_MESSAGE}
                className="w-full sm:w-auto"
                ariaLabel={a11y.whatsappGallerySimilar}
                trackingLabel="gallery"
              >
                {gallery.afterCta}
              </WhatsAppLink>
              <WaMicroLine className="[&_p]:text-center" />
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
