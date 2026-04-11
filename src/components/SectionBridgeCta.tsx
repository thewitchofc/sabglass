import { WHATSAPP_PHOTO_MESSAGE } from '../config/site'
import { premiumCopy } from '../content/premium'
import { WaMicroLine } from './WaFrictionHints'
import { FadeIn } from './ui/FadeIn'
import { WhatsAppLink } from './ui/WhatsAppLink'

type Props = {
  className?: string
  align?: 'start' | 'center'
}

export function SectionBridgeCta({ className = '', align = 'start' }: Props) {
  const { sectionBridge, primaryCta, a11y } = premiumCopy
  const alignClass = align === 'center' ? 'text-center [&_a]:mx-auto' : ''

  return (
    <div
      className={`mt-14 max-md:mt-16 border-t border-neutral-200/90 pt-10 max-md:pt-12 ${alignClass} ${className}`.trim()}
    >
      <FadeIn>
        <p className="max-w-[95%] text-sm font-light leading-relaxed text-neutral-500 md:max-w-none md:leading-normal">
          {sectionBridge.line}
        </p>
        <div className="mt-4 flex w-full max-w-full flex-col items-stretch max-md:max-w-[95%] md:w-auto md:items-start">
          <WhatsAppLink
            variant="outline"
            size="sm"
            message={WHATSAPP_PHOTO_MESSAGE}
            ariaLabel={a11y.whatsappSendPhotoQuote}
            trackingLabel="article"
            className="w-full md:w-auto"
          >
            {primaryCta}
          </WhatsAppLink>
          <WaMicroLine className={align === 'center' ? 'mx-auto' : ''} />
        </div>
      </FadeIn>
    </div>
  )
}
