import { trackWhatsAppClick } from '../analytics/whatsappTracking'
import { premiumCopy } from '../content/premium'
import { SERVICE_AREA_COPY } from '../content/serviceAreaCopy'
import { WHATSAPP_PHOTO_MESSAGE, whatsappHref } from '../config/site'
import { waGreenPremium } from './ui/WhatsAppLink'

export function StickyMobileCta() {
  const { primaryCta, a11y, conversion } = premiumCopy
  const href = whatsappHref(WHATSAPP_PHOTO_MESSAGE)

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[45] border-t border-white/10 bg-neutral-950 py-3 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] shadow-[0_-8px_30px_rgba(0,0,0,0.2)] antialiased md:hidden"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom, 0px))' }}
      role="region"
      aria-label={a11y.stickyRegionLabel}
    >
      <div className="mx-auto flex max-w-lg flex-col gap-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-12 w-full items-center justify-center px-5 py-3 text-center text-sm font-medium leading-snug ${waGreenPremium} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950`}
          aria-label={a11y.whatsappStickyBar}
          onClick={() => trackWhatsAppClick('sticky')}
        >
          {primaryCta}
        </a>
        <p className="text-center text-[11px] font-light leading-relaxed text-white/85">
          {conversion.microPhoto}
        </p>
        <p className="text-center text-[11px] font-light leading-relaxed text-white/70 sm:text-xs">
          {SERVICE_AREA_COPY.reachTrust}
        </p>
      </div>
    </div>
  )
}
