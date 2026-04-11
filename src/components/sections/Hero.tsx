import { motion } from 'framer-motion'
import { WHATSAPP_CONSULT_MESSAGE, WHATSAPP_PHOTO_MESSAGE } from '../../config/site'
import { premiumCopy } from '../../content/premium'
import { heroBackgroundImage } from '../../data/catalog'
import { WaMicroLine } from '../WaFrictionHints'
import { WhatsAppLink } from '../ui/WhatsAppLink'

export function Hero() {
  const { hero, primaryCta, secondaryCtas, a11y } = premiumCopy

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden scroll-mt-0 antialiased"
      aria-label="פתיחה"
    >
      {/* רקע: במובייל מזיזים מיקוד לצד המקלחון (ימין בתמונה); בדסקטופ מרכז */}
      <div className="absolute inset-0 overflow-hidden bg-neutral-900" aria-hidden>
        <img
          src={heroBackgroundImage}
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[76%_40%] md:object-center"
        />
      </div>
      {/* קריאות טקסט לבן ב־RTL: כהה מהצד שבו הטקסט (התחלה = ימין) */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/45 via-black/15 to-transparent md:hidden"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/10" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(58dvh,480px)] bg-gradient-to-t from-black/68 via-black/28 to-transparent"
        aria-hidden
      />

      {/* justify-start ב־RTL = יישור לימין המסך */}
      <div className="relative z-10 flex w-full justify-start pl-[max(1.25rem,env(safe-area-inset-left,0px))] pr-[max(1.25rem,env(safe-area-inset-right,0px))] pb-[calc(10rem+env(safe-area-inset-bottom,0px))] pt-32 md:px-8 md:pb-24 md:pt-48">
        <div className="w-full max-w-6xl">
        <motion.h1
          className="max-w-[95%] text-balance text-3xl font-light leading-[1.15] tracking-tight text-white max-md:text-[1.625rem] max-md:leading-snug md:max-w-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.titleLine1}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-[95%] text-sm font-light leading-relaxed tracking-wide text-white/90 md:max-w-2xl md:text-base md:leading-normal"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.differentiators}
        </motion.p>

        <motion.p
          className="mt-4 max-w-[95%] text-xs font-light leading-relaxed text-white/80 md:max-w-2xl md:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {hero.scarcity}
        </motion.p>

        <motion.p
          className="mt-6 max-w-[95%] text-sm font-light leading-relaxed text-white/90 md:max-w-xl md:text-base md:leading-normal"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.outcomeHint}
        </motion.p>

        <motion.p
          className="mt-3 max-w-[95%] text-xs font-light leading-relaxed text-white/85 md:max-w-xl md:text-sm"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.serviceReach}
        </motion.p>

        <motion.div
          className="mt-8 flex w-full max-w-xl flex-col gap-5 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-start sm:gap-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex w-full flex-col sm:w-auto">
            <WhatsAppLink
              variant="whatsapp"
              size="lg"
              message={WHATSAPP_PHOTO_MESSAGE}
              className="w-full sm:w-auto"
              ariaLabel={a11y.whatsappSendPhotoQuote}
              trackingLabel="hero"
            >
              {primaryCta}
            </WhatsAppLink>
            <WaMicroLine variant="onDark" tone="heroPhoto" />
          </div>
          <WhatsAppLink
            variant="light"
            message={WHATSAPP_CONSULT_MESSAGE}
            className="w-full sm:w-auto"
            ariaLabel={a11y.whatsappConsult}
            trackingLabel="hero"
          >
            {secondaryCtas.talkNow}
          </WhatsAppLink>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
