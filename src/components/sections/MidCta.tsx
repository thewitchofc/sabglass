import { motion } from 'framer-motion'
import { WHATSAPP_PHOTO_MESSAGE } from '../../config/site'
import { premiumCopy } from '../../content/premium'
import { WaMicroLine } from '../WaFrictionHints'
import { WhatsAppLink } from '../ui/WhatsAppLink'

export function MidCta() {
  const { midCta, primaryCta, conversion, a11y } = premiumCopy

  return (
    <section
      className="relative isolate overflow-hidden border-y border-white/10 bg-neutral-950 text-white antialiased"
      aria-labelledby="mid-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-[0.05] md:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(184,163,105,0.14),transparent_30%)] md:bg-[radial-gradient(circle_at_50%_18%,rgba(184,163,105,0.22),transparent_30%),radial-gradient(circle_at_12%_76%,rgba(255,255,255,0.08),transparent_28%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/24 to-transparent" />

      <div className="relative mx-auto max-w-5xl py-11 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] text-center md:px-8 md:py-28">
        <div className="mx-auto rounded-[1.6rem] border border-white/10 bg-white/[0.04] px-4 py-8 shadow-[0_18px_54px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm md:rounded-[2.25rem] md:bg-white/[0.055] md:px-12 md:py-16 md:shadow-[0_34px_110px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.09)]">
        <motion.img
          src="/sab-glass-logo.svg"
          alt=""
          width={1500}
          height={260}
          className="mx-auto h-auto w-32 brightness-0 invert opacity-90 drop-shadow-[0_0_18px_rgba(0,0,0,0.65)] md:w-56 md:drop-shadow-[0_0_22px_rgba(0,0,0,0.7)]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        />
        <motion.h2
          id="mid-cta-heading"
          className="mx-auto mt-5 max-w-3xl text-balance text-3xl font-light leading-snug tracking-tight max-md:text-[1.75rem] md:mt-7 md:text-5xl md:leading-tight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {midCta.title}
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-[95%] text-pretty text-sm font-light leading-relaxed text-white/66 md:mt-5 md:max-w-md md:text-xl md:text-white/72"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {midCta.body}
        </motion.p>
        <motion.div
          className="mx-auto mt-6 hidden max-w-lg space-y-1 text-pretty text-xs font-light leading-relaxed text-white/58 md:block md:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>{conversion.priceLine1}</p>
          <p>{conversion.priceLine2}</p>
        </motion.div>
        <motion.div
          className="mt-6 flex flex-col items-center gap-2 md:hidden"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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
          <WaMicroLine variant="onDark" className="max-w-md [&_p]:text-center" />
        </motion.div>
        <motion.div
          className="mt-10 hidden flex-col items-center md:flex"
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
            className="w-full max-w-md !rounded-full shadow-[0_16px_46px_rgba(37,211,102,0.28)] sm:w-auto"
          >
            {primaryCta}
          </WhatsAppLink>
          <WaMicroLine variant="onDark" />
        </motion.div>
        </div>
      </div>
    </section>
  )
}
