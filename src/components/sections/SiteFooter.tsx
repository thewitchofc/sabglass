import { Link, useLocation } from 'react-router-dom'
import { trackWhatsAppClick } from '../../analytics/whatsappTracking'
import { premiumCopy } from '../../content/premium'
import { DEVELOPER_BRAND_LOGO_SRC, WHATSAPP_DISPLAY, WHATSAPP_PHOTO_MESSAGE, whatsappHref } from '../../config/site'

export function SiteFooter() {
  const { pathname } = useLocation()
  const { footer, primaryCta, conversion, a11y } = premiumCopy
  const wa = whatsappHref(WHATSAPP_PHOTO_MESSAGE)
  const waMobileLabel = pathname === '/' ? footer.whatsappCtaLabelMobile : primaryCta

  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t border-neutral-200 bg-white md:scroll-mt-[4.5rem]"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl py-14 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] md:px-8 md:py-20">
        <div className="grid gap-14 max-md:gap-16 md:grid-cols-3 md:gap-8 md:[&>div]:min-w-0">
          <div className="min-w-0 text-start">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">Premium</p>
            <p className="mt-3 text-xl font-light tracking-wide text-neutral-950">{footer.brand}</p>
            <p className="mt-1 text-sm font-light text-neutral-600">{footer.serviceAreaLine}</p>
            <p className="mt-1 text-sm font-medium text-neutral-700 md:hidden">{footer.serviceAreaReachLineMobile}</p>
            <p className="mt-1 hidden text-sm font-medium text-neutral-700 md:block">{footer.serviceAreaReachLine}</p>
            <p className="mt-2 text-sm font-light text-neutral-600">{footer.rights}</p>
            <h4 className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">{footer.learnTitle}</h4>
            <ul className="mt-3 space-y-2 text-sm font-light">
              <li>
                <Link
                  to="/articles"
                  className="text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950/25 focus-visible:ring-offset-2"
                >
                  {footer.linkArticles}
                </Link>
              </li>
              <li>
                <Link
                  to="/shower-glass-custom"
                  className="text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950/25 focus-visible:ring-offset-2"
                >
                  {footer.linkServiceShower}
                </Link>
              </li>
            </ul>
          </div>
          <div className="min-w-0 text-start">
            <h3 id="contact-heading" className="text-sm font-medium text-neutral-950">
              {footer.contact}
            </h3>
            <p className="mt-4 text-sm font-light text-neutral-600">{WHATSAPP_DISPLAY}</p>
            <Link
              to="/#send-photo"
              className="mt-3 inline-block rounded-sm text-sm font-light text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950/30 focus-visible:ring-offset-2"
            >
              {footer.sendPhotoLink}
            </Link>
            <h4 className="mt-8 text-sm font-medium text-neutral-950">{footer.hoursTitle}</h4>
            <p className="mt-3 text-sm font-light text-neutral-600">
              {footer.hoursWeekdaysLabel}{' '}
              <span dir="ltr" className="inline-block tabular-nums [unicode-bidi:isolate]">
                {footer.hoursWeekdaysTimes}
              </span>
            </p>
            <p className="mt-1 text-sm font-light text-neutral-600">{footer.hoursClosed}</p>
          </div>
          <div className="min-w-0 text-start">
            <h3 className="text-sm font-medium text-neutral-950">{footer.whatsapp}</h3>
            <a
              href={wa}
              className={`mt-4 inline-block max-w-full break-words rounded-sm text-sm font-light text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950/30 focus-visible:ring-offset-2 ${pathname === '/' ? 'max-md:text-xs' : ''}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={a11y.whatsappSendPhotoQuote}
              onClick={() => trackWhatsAppClick('article')}
            >
              <span className="md:hidden">{waMobileLabel}</span>
              <span className="hidden md:inline">{primaryCta}</span>
            </a>
            <div className="mt-3 max-w-xs space-y-1 text-xs font-light leading-relaxed text-neutral-600">
              <p>{conversion.priceLine1}</p>
              <p>{conversion.priceLine2}</p>
            </div>
            <p className="mt-2 text-xs font-light text-neutral-600">
              <span aria-hidden>⏱️</span> {conversion.microQuick}
            </p>
          </div>
        </div>

        {/* קרדיט פיתוח — שורה מלאה, מיושר לימין הדף (התחלה ב־RTL) */}
        <div className="mt-12 flex w-full justify-start border-t border-neutral-100 pt-10 md:mt-14 md:pt-12">
          <div className="flex max-w-[220px] flex-col items-start text-start">
            <p className="text-sm font-semibold tracking-wide text-[#b8943f]">
              {footer.developerCreditTitle}
            </p>
            <p className="mt-2 text-sm font-semibold text-[#1a3d2c]">{footer.developerCreditSubtitle}</p>
            <div className="mt-4 inline-flex opacity-95">
              <img
                src={DEVELOPER_BRAND_LOGO_SRC}
                alt={footer.developerLogoAlt}
                width={120}
                height={120}
                className="h-auto max-h-14 w-auto max-w-[120px] rounded-md object-contain object-center contrast-[1.02] md:max-h-12 md:max-w-[104px]"
                decoding="async"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-xs font-medium tracking-wide text-neutral-600">
              {footer.developerCopyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
