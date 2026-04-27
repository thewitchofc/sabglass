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
  variant = 'light',
}: {
  label: string
  message: Msg
  className?: string
  title?: string
  subtitle?: string
  waTrackingLabel?: WhatsAppClickLabel
  variant?: 'light' | 'dark'
}) {
  const { a11y } = premiumCopy
  const m = message === 'consult' ? WHATSAPP_CONSULT_MESSAGE : WHATSAPP_PHOTO_MESSAGE
  const aria = message === 'consult' ? a11y.whatsappConsult : a11y.whatsappSendPhotoQuote
  const isDark = variant === 'dark'

  return (
    <div
      className={`mt-8 rounded-3xl px-4 py-7 max-md:px-4 max-md:py-7 md:px-6 md:py-8 ${
        isDark
          ? 'border border-white/10 bg-white/[0.055] shadow-[0_24px_80px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm'
          : 'border border-neutral-200 bg-neutral-50'
      } ${className}`.trim()}
    >
      {title ? (
        <p
          className={`max-w-full text-lg font-medium tracking-tight md:max-w-none md:text-xl ${
            isDark ? 'text-white' : 'text-neutral-950'
          }`}
        >
          {title}
        </p>
      ) : null}
      {subtitle ? (
        <p
          className={`mt-2 max-w-full text-pretty text-base font-light leading-[1.75] md:text-lg ${
            isDark ? 'text-white/66' : 'text-neutral-600'
          }`}
        >
          {subtitle}
        </p>
      ) : null}
      <WhatsAppLink
        variant="whatsapp"
        message={m}
        ariaLabel={aria}
        trackingLabel={waTrackingLabel}
        className={`w-full !rounded-full shadow-[0_12px_34px_rgba(37,211,102,0.24)] sm:w-auto ${title || subtitle ? 'mt-6' : ''}`.trim()}
      >
        {label}
      </WhatsAppLink>
      <WaMicroLine variant={isDark ? 'onDark' : 'onLight'} className="mt-3" />
    </div>
  )
}
