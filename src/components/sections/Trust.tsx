import { motion } from 'framer-motion'
import { WHATSAPP_PHOTO_MESSAGE } from '../../config/site'
import { premiumCopy } from '../../content/premium'
import { FadeIn } from '../ui/FadeIn'
import { WhatsAppLink } from '../ui/WhatsAppLink'
import { SectionBridgeCta } from '../SectionBridgeCta'
import { WaMicroLine } from '../WaFrictionHints'

export function Trust() {
  const { trust, primaryCta, a11y } = premiumCopy

  return (
    <section className="border-y border-neutral-200/80 bg-white" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-6xl py-24 pl-[max(1.25rem,env(safe-area-inset-left,0px))] pr-[max(1.25rem,env(safe-area-inset-right,0px))] md:px-8 md:py-28">
        <FadeIn>
          <h2
            id="trust-heading"
            className="text-3xl font-light tracking-tight text-neutral-950 max-md:text-[1.625rem] md:text-4xl"
          >
            {trust.title}
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-12 max-md:gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-2xl tracking-wide text-amber-500 md:text-3xl" aria-label="חמישה כוכבים">
              ★★★★★
            </p>
            <p className="mt-4 text-xl font-light text-neutral-950 md:text-2xl">{trust.stat}</p>
            <p className="mt-2 text-sm font-light text-neutral-500 md:text-base">{trust.starsLabel}</p>
            <div className="mt-8 max-md:w-full">
              <WhatsAppLink
                variant="whatsapp"
                message={WHATSAPP_PHOTO_MESSAGE}
                ariaLabel={a11y.whatsappSendPhotoQuote}
                trackingLabel="article"
                className="w-full max-md:max-w-full sm:w-auto"
              >
                {primaryCta}
              </WhatsAppLink>
              <WaMicroLine />
            </div>
          </motion.div>

          <div>
            <h3 className="text-xl font-light tracking-tight text-neutral-950 md:text-2xl">
              {trust.testimonialsHeading}
            </h3>
            <div className="mt-8 space-y-10 md:mt-10 md:space-y-[4.5rem]">
            {trust.testimonials.map((t, i) => (
              <motion.figure
                key={`${t.author}-${t.city}`}
                className="border-s-2 border-neutral-200 ps-6 md:ps-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="max-w-[95%] text-lg font-light leading-relaxed text-neutral-800 md:max-w-none md:text-xl md:leading-snug">
                  «{t.quote}»
                </blockquote>
                <figcaption className="mt-4 text-sm font-light text-neutral-500">
                  {t.author}, {t.city}
                </figcaption>
              </motion.figure>
            ))}
            </div>
          </div>
        </div>

        <SectionBridgeCta className="mt-16" />
      </div>
    </section>
  )
}
