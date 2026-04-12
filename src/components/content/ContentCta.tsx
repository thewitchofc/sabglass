import type { WhatsAppClickLabel } from '../../analytics/whatsappTracking'
import { WHATSAPP_CONSULT_MESSAGE, WHATSAPP_PHOTO_MESSAGE } from '../../config/site'
import { premiumCopy } from '../../content/premium'
import { WaMicroLine } from '../WaFrictionHints'
import { WhatsAppLink } from '../ui/WhatsAppLink'

type Msg = 'photo' | 'consult'

export function ContentCta({
  label,
  message,
  className = '',
  title,
  subtitle,
  waTrackingLabel = 'article',
}: {
  label: string
  message: Msg
  className?: string
  title?: string
  subtitle?: string
  waTrackingLabel?: WhatsAppClickLabel
}) {
  const { a11y } = premiumCopy
  const m = message === 'consult' ? WHATSAPP_CONSULT_MESSAGE : WHATSAPP_PHOTO_MESSAGE
  const aria = message === 'consult' ? a11y.whatsappConsult : a11y.whatsappSendPhotoQuote
  return (
    <div
      className={`mt-8 rounded-sm border border-neutral-200 bg-neutral-50 px-4 py-7 max-md:px-4 max-md:py-7 md:px-6 md:py-8 ${className}`.trim()}
    >
      {title ? (
        <p className="max-w-full text-lg font-medium tracking-tight text-neutral-950 md:max-w-none md:text-xl">
          {title}
        </p>
      ) : null}
      {subtitle ? (
        <p className="mt-2 max-w-full text-pretty text-base font-light leading-[1.75] text-neutral-600 md:text-lg">
          {subtitle}
        </p>
      ) : null}
      <WhatsAppLink
        variant="whatsapp"
        message={m}
        ariaLabel={aria}
        trackingLabel={waTrackingLabel}
        className={`w-full sm:w-auto ${title || subtitle ? 'mt-6' : ''}`.trim()}
      >
        {label}
      </WhatsAppLink>
      <WaMicroLine className="mt-3" />
    </div>
  )
}
