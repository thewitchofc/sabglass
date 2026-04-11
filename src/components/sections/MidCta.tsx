import { motion } from 'framer-motion'
import { WHATSAPP_PHOTO_MESSAGE } from '../../config/site'
import { premiumCopy } from '../../content/premium'
import { WaMicroLine } from '../WaFrictionHints'
import { WhatsAppLink } from '../ui/WhatsAppLink'

export function MidCta() {
  const { midCta, primaryCta, conversion, a11y } = premiumCopy

  return (
    <section
      className="relative overflow-hidden bg-neutral-950 text-white antialiased"
      aria-labelledby="mid-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl py-28 pl-[max(1.25rem,env(safe-area-inset-left,0px))] pr-[max(1.25rem,env(safe-area-inset-right,0px))] text-center md:px-8 md:py-32">
        <motion.h2
          id="mid-cta-heading"
          className="text-balance text-2xl font-light leading-snug tracking-tight max-md:text-[1.625rem] md:text-4xl md:leading-snug"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {midCta.title}
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-[95%] text-pretty text-base font-light leading-relaxed text-neutral-400 md:max-w-md md:text-xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {midCta.body}
        </motion.p>
        <motion.div
          className="mx-auto mt-6 max-w-lg space-y-1 text-pretty text-xs font-light leading-relaxed text-white/45 md:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>{conversion.priceLine1}</p>
          <p>{conversion.priceLine2}</p>
        </motion.div>
        <motion.div
          className="mt-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
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
          <WaMicroLine variant="onDark" />
        </motion.div>
      </div>
    </section>
  )
}
