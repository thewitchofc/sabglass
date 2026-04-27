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
      className={`mt-7 rounded-2xl px-4 py-5 md:mt-8 md:rounded-3xl md:px-6 md:py-8 ${
        isDark
          ? 'border border-white/10 bg-white/[0.04] shadow-[0_14px_44px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm md:bg-white/[0.055] md:shadow-[0_24px_80px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)]'
          : 'border border-neutral-200 bg-neutral-50'
      } ${className}`.trim()}
    >
      {title ? (
        <p
          className={`max-w-full text-base font-medium tracking-tight md:max-w-none md:text-xl ${
            isDark ? 'text-white' : 'text-neutral-950'
          }`}
        >
          {title}
        </p>
      ) : null}
      {subtitle ? (
        <p
          className={`mt-2 max-w-full text-pretty text-sm font-light leading-relaxed md:text-lg md:leading-[1.75] ${
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
        className={`w-full !rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.2)] sm:w-auto md:shadow-[0_12px_34px_rgba(37,211,102,0.24)] ${title || subtitle ? 'mt-5 md:mt-6' : ''}`.trim()}
      >
        {label}
      </WhatsAppLink>
      <WaMicroLine variant={isDark ? 'onDark' : 'onLight'} className="mt-3" />
    </div>
  )
}
