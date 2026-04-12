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
  'rounded-lg bg-[#25D366] text-white hover:bg-[#1DA851] active:bg-[#18914a] focus-visible:ring-white focus-visible:ring-offset-[#25D366]'

const variants: Record<Variant, string> = {
  solid:
    'rounded-sm bg-neutral-950 px-8 py-4 text-sm tracking-wide text-white hover:bg-neutral-800 active:scale-[0.99] focus-visible:ring-neutral-950 focus-visible:ring-offset-white',
  whatsapp: `${waGreenPremium} px-6 py-3 text-sm`,
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
  id?: string
  className?: string
  message?: string
  variant?: Variant
  /** כפתור ראשי בולט יותר (Hero וכו׳) */
  size?: 'default' | 'lg' | 'sm'
  /**
   * במובייל בלבד: מראה משני (outline, קטן יותר) מעל רקע בהיר.
   * לדסקטופ אין שינוי. רלוונטי כש־variant הוא whatsapp.
   */
  subduedMobile?: boolean
  /** יחד עם subduedMobile — רקע כהה (למשל MidCta) */
  subduedMobileOnDark?: boolean
  /** aria-label לנגישות (מומלץ לכל קישורי הוואטסאפ) */
  ariaLabel?: string
  /** מיקום ל־analytics (whatsapp_click) */
  trackingLabel?: WhatsAppClickLabel
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

/** מובייל: מגע נוח ורוחב מלא כברירת מחדל; מ־md נשמר העיצוב הקיים */
const mobileCtaTouch =
  'max-md:min-h-12 max-md:justify-center max-md:px-5 max-md:py-3'

/** מובייל: CTA משני מול ירוק Hero — outline, לא חוסם היררכיה */
const subduedMobileLight =
  'max-md:!min-h-11 max-md:!rounded-sm max-md:!border-2 max-md:!border-neutral-950 max-md:!bg-transparent max-md:!px-4 max-md:!py-2.5 max-md:!text-xs max-md:!font-medium max-md:!tracking-wide max-md:!text-neutral-950 max-md:hover:!bg-neutral-950 max-md:hover:!text-white max-md:active:!scale-[0.99] max-md:focus-visible:!ring-neutral-950 max-md:focus-visible:!ring-offset-white'

const subduedMobileDark =
  'max-md:!min-h-11 max-md:!rounded-sm max-md:!border-2 max-md:!border-white max-md:!bg-transparent max-md:!px-4 max-md:!py-2.5 max-md:!text-xs max-md:!font-medium max-md:!tracking-wide max-md:!text-white max-md:hover:!bg-white max-md:hover:!text-neutral-950 max-md:active:!scale-[0.99] max-md:focus-visible:!ring-white max-md:focus-visible:!ring-offset-neutral-950'

/** lg: נשאר נוח במובייל; בדסקטופ מרוסן מול הגרסה הקודמת (px-12 / text-lg) */
const sizeLg =
  'min-h-12 px-5 py-3 text-sm md:min-h-12 md:px-8 md:py-3 md:text-sm'
const sizeSm =
  'px-4 py-2.5 text-xs tracking-wide max-md:min-h-11 max-md:px-5 max-md:py-2.5 md:px-6 md:py-2.5 md:text-sm'

export function WhatsAppLink({
  children,
  id,
  className = '',
  message,
  variant = 'solid',
  size = 'default',
  subduedMobile = false,
  subduedMobileOnDark = false,
  ariaLabel,
  trackingLabel,
  onClick,
}: Props) {
  const sizeClass = size === 'lg' ? sizeLg : size === 'sm' ? sizeSm : ''
  const subdued =
    subduedMobile && variant === 'whatsapp'
      ? subduedMobileOnDark
        ? subduedMobileDark
        : subduedMobileLight
      : ''
  return (
    <a
      id={id}
      href={whatsappHref(message)}
      className={`${base} ${variants[variant]} ${sizeClass} ${mobileCtaTouch} ${subdued} ${className}`.trim()}
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
