import { motion } from 'framer-motion'
import { WHATSAPP_PHOTO_MESSAGE } from '../../config/site'
import { premiumCopy } from '../../content/premium'
import { WaMicroLine } from '../WaFrictionHints'
import { FadeIn } from '../ui/FadeIn'
import { WhatsAppLink } from '../ui/WhatsAppLink'

export function HowItWorks() {
  const { how, primaryCta, a11y } = premiumCopy

  return (
    <section className="bg-neutral-50" aria-labelledby="how-heading">
      <div className="mx-auto max-w-6xl py-14 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] md:px-8 md:py-28">
        <FadeIn>
          <h2
            id="how-heading"
            className="text-3xl font-light tracking-tight text-neutral-950 max-md:text-[1.625rem] md:text-4xl"
          >
            {how.title}
          </h2>
        </FadeIn>

        <div className="relative mt-16 max-w-3xl md:mt-20">
          <span
            className="absolute end-[0.65rem] top-2 bottom-2 hidden w-px bg-neutral-200 md:block"
            aria-hidden
          />
          <ol className="relative m-0 list-none space-y-8 p-0 md:space-y-14">
          {how.steps.map((step, i) => (
            <motion.li
              key={step.title}
              className="relative flex gap-6 md:gap-10"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-medium text-neutral-900 md:h-12 md:w-12">
                {i + 1}
              </span>
              <div className="pt-1">
                <h3 className="text-lg font-medium text-neutral-950 md:text-xl">
                  <span className="md:hidden">
                    {'titleMobile' in step && step.titleMobile ? step.titleMobile : step.title}
                  </span>
                  <span className="hidden md:inline">{step.title}</span>
                </h3>
                <p className="mt-2 max-w-[95%] text-sm font-light leading-relaxed text-neutral-600 md:hidden">
                  {step.textMobile}
                </p>
                <p className="mt-2 hidden max-w-[95%] text-sm font-light leading-relaxed text-neutral-600 md:block md:max-w-md md:text-base">
                  {step.text}
                </p>
              </div>
            </motion.li>
          ))}
          </ol>
        </div>

        <motion.div
          className="mt-16 hidden max-w-md flex-col md:mt-20 md:flex"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <WhatsAppLink
            variant="whatsapp"
            message={WHATSAPP_PHOTO_MESSAGE}
            ariaLabel={a11y.whatsappSendPhotoQuote}
            trackingLabel="article"
            className="w-full sm:w-auto"
          >
            {primaryCta}
          </WhatsAppLink>
          <WaMicroLine />
        </motion.div>
      </div>
    </section>
  )
}
