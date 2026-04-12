import { motion } from 'framer-motion'
import { WHATSAPP_PHOTO_MESSAGE } from '../../config/site'
import { premiumCopy } from '../../content/premium'
import { WaMicroLine } from '../WaFrictionHints'
import { FadeIn } from '../ui/FadeIn'
import { WhatsAppLink } from '../ui/WhatsAppLink'

export function PhotoLeadSection() {
  const { photoLead, primaryCta, conversion, a11y } = premiumCopy

  return (
    <section
      id="send-photo"
      className="scroll-mt-20 bg-neutral-50 md:scroll-mt-[4.5rem]"
      aria-labelledby="photo-lead-heading"
    >
      <div className="mx-auto max-w-6xl py-14 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2
              id="photo-lead-heading"
              className="text-balance text-3xl font-light tracking-tight text-neutral-950 max-md:text-[1.625rem] md:text-4xl md:leading-snug"
            >
              <span className="md:hidden">{photoLead.titleMobile}</span>
              <span className="hidden md:inline">{photoLead.title}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[95%] text-pretty text-lg font-light leading-relaxed text-neutral-600 md:hidden">
              {photoLead.bodyMobile}
            </p>
            <p className="mx-auto mt-6 hidden max-w-[95%] text-pretty text-lg font-light leading-relaxed text-neutral-600 md:block md:max-w-xl md:text-xl">
              {photoLead.body}
            </p>
            <p className="mt-4 text-sm font-light text-neutral-600">{photoLead.note}</p>
            <div className="mx-auto mt-5 hidden max-w-md space-y-1 text-pretty text-sm font-light leading-relaxed text-neutral-600 md:block">
              <p>{conversion.priceLine1}</p>
              <p>{conversion.priceLine2}</p>
            </div>
            <motion.div
              className="mt-8 flex flex-col items-center gap-3 md:hidden"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <WhatsAppLink
                variant="whatsapp"
                size="lg"
                message={WHATSAPP_PHOTO_MESSAGE}
                ariaLabel={a11y.whatsappSendPhotoQuote}
                trackingLabel="article"
                className="w-full max-w-md !rounded-full shadow-[0_4px_22px_rgba(37,211,102,0.38)]"
              >
                {primaryCta}
              </WhatsAppLink>
              <WaMicroLine tone="heroPhoto" className="max-w-md [&_p]:text-center" />
            </motion.div>
          </FadeIn>
          <motion.div
            className="mt-10 hidden flex-col items-center md:flex"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <WhatsAppLink
              variant="whatsapp"
              size="lg"
              message={WHATSAPP_PHOTO_MESSAGE}
              ariaLabel={a11y.whatsappSendPhotoQuote}
              trackingLabel="article"
              className="w-full max-w-md sm:w-auto"
            >
              {primaryCta}
            </WhatsAppLink>
            <WaMicroLine tone="heroPhoto" className="[&_p]:text-center" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
