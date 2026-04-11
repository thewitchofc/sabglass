import { FadeIn } from '../ui/FadeIn'
import { WhatsAppLink } from '../ui/WhatsAppLink'
import { premiumCopy } from '../../content/premium'
import { WHATSAPP_PHOTO_MESSAGE } from '../../config/site'
import { WaMicroLine } from '../WaFrictionHints'

export function CtaStrip() {
  const { ctaStrip, primaryCta, conversion, a11y } = premiumCopy

  return (
    <div className="border-y border-neutral-200/90 bg-neutral-50/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 py-16 pl-[max(1.25rem,env(safe-area-inset-left,0px))] pr-[max(1.25rem,env(safe-area-inset-right,0px))] text-center max-md:gap-10 md:flex-row md:items-start md:justify-between md:gap-10 md:px-8 md:py-16 md:text-start">
        <FadeIn className="max-w-xl space-y-4 max-md:max-w-[95%] md:space-y-3">
          <p className="text-base font-medium tracking-tight text-neutral-950 md:text-lg">
            {ctaStrip.headline}
          </p>
          <p className="text-sm font-light leading-relaxed text-neutral-600 md:text-base">
            {ctaStrip.line}{' '}
            <span className="text-neutral-800">{ctaStrip.urgency}</span>
          </p>
          <div className="space-y-1 text-xs font-light leading-relaxed text-neutral-500 md:text-sm">
            <p>{conversion.priceLine1}</p>
            <p>{conversion.priceLine2}</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.08} className="flex w-full max-w-xs flex-col items-center md:items-end">
          <WhatsAppLink
            variant="whatsapp"
            size="lg"
            message={WHATSAPP_PHOTO_MESSAGE}
            className="w-full md:w-auto"
            ariaLabel={a11y.whatsappSendPhotoQuote}
            trackingLabel="article"
          >
            {primaryCta}
          </WhatsAppLink>
          <WaMicroLine className="w-full md:text-end [&_p]:md:text-end" />
        </FadeIn>
      </div>
    </div>
  )
}
