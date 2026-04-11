import { whatsappHref } from '../../config/site'
import type { WhatsAppClickLabel } from '../../analytics/whatsappTracking'
import { trackWhatsAppClick } from '../../analytics/whatsappTracking'
import type { MouseEventHandler, ReactNode } from 'react'

type Variant = 'solid' | 'outline' | 'ghost' | 'light' | 'invert' | 'whatsapp'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

const base = `inline-flex items-center justify-center gap-2 text-center font-medium transition-colors duration-300 ease-out ${focusRing}`

/** ירוק וואטסאפ, שטוח, פינות עדינות, hover כהה (פרימיום, בלי צל/גרדיאנט) */
export const waGreenPremium =
  'rounded-[10px] bg-[#25D366] text-white hover:bg-[#1DA851] active:bg-[#18914a] focus-visible:ring-white focus-visible:ring-offset-[#25D366]'

const variants: Record<Variant, string> = {
  solid:
    'rounded-sm bg-neutral-950 px-8 py-4 text-sm tracking-wide text-white hover:bg-neutral-800 active:scale-[0.99] focus-visible:ring-neutral-950 focus-visible:ring-offset-white',
  whatsapp: `${waGreenPremium} px-8 py-4 text-sm tracking-wide`,
  invert:
    'rounded-sm bg-white px-8 py-4 text-sm tracking-wide text-neutral-950 hover:bg-neutral-100 active:scale-[0.99] focus-visible:ring-neutral-950 focus-visible:ring-offset-white',
  outline:
    'rounded-sm border-2 border-neutral-950 bg-transparent px-8 py-4 text-sm tracking-wide text-neutral-950 hover:bg-neutral-950 hover:text-white active:scale-[0.99] focus-visible:ring-neutral-950 focus-visible:ring-offset-white',
  ghost:
    'rounded-sm px-2 py-2 text-sm text-neutral-600 underline-offset-4 hover:text-neutral-950 hover:underline focus-visible:ring-neutral-950 focus-visible:ring-offset-white',
  light:
    'rounded-sm border-2 border-white bg-transparent px-8 py-4 text-sm tracking-wide text-white hover:bg-white hover:text-neutral-950 active:scale-[0.99] focus-visible:ring-white focus-visible:ring-offset-neutral-950',
}

type Props = {
  children: ReactNode
  className?: string
  message?: string
  variant?: Variant
  /** כפתור ראשי בולט יותר (Hero וכו׳) */
  size?: 'default' | 'lg' | 'sm'
  /** aria-label לנגישות (מומלץ לכל קישורי הוואטסאפ) */
  ariaLabel?: string
  /** מיקום ל־analytics (whatsapp_click) */
  trackingLabel?: WhatsAppClickLabel
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

/** מובייל: מגע נוח ורוחב מלא כברירת מחדל; מ־md נשמר העיצוב הקיים */
const mobileCtaTouch =
  'max-md:min-h-12 max-md:justify-center max-md:px-5 max-md:py-3'

const sizeLg =
  'min-h-12 px-5 py-3 text-base md:min-h-[3.5rem] md:px-12 md:py-5 md:text-lg'
const sizeSm =
  'px-4 py-2.5 text-xs tracking-wide max-md:min-h-11 max-md:px-5 max-md:py-2.5 md:px-6 md:py-2.5 md:text-sm'

export function WhatsAppLink({
  children,
  className = '',
  message,
  variant = 'solid',
  size = 'default',
  ariaLabel,
  trackingLabel,
  onClick,
}: Props) {
  const sizeClass = size === 'lg' ? sizeLg : size === 'sm' ? sizeSm : ''
  return (
    <a
      href={whatsappHref(message)}
      className={`${base} ${variants[variant]} ${sizeClass} ${mobileCtaTouch} ${className}`.trim()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={(e) => {
        if (trackingLabel) trackWhatsAppClick(trackingLabel)
        onClick?.(e)
      }}
    >
      {children}
    </a>
  )
}
