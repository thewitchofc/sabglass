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
      className="relative isolate scroll-mt-20 overflow-hidden border-t border-white/10 bg-neutral-950 text-white md:scroll-mt-[4.5rem]"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(184,163,105,0.14),transparent_28%),radial-gradient(circle_at_86%_82%,rgba(255,255,255,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_36%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/24 to-transparent" />

      <div className="relative mx-auto max-w-6xl py-10 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-3 md:gap-8 md:[&>div]:min-w-0">
          <div className="min-w-0 text-start">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold-soft/75">Premium</p>
            <img
              src="/sab-glass-logo.svg"
              alt={footer.brand}
              width={1500}
              height={260}
              className="mt-4 h-auto w-32 brightness-0 invert drop-shadow-[0_0_18px_rgba(0,0,0,0.65)] md:w-40"
            />
            <p className="mt-3 text-xs font-light text-white/58 md:mt-4 md:text-sm md:text-white/62">{footer.serviceAreaLine}</p>
            <p className="mt-1 text-xs font-medium text-white/66 md:hidden">{footer.serviceAreaReachLineMobile}</p>
            <p className="mt-1 hidden text-sm font-medium text-white/72 md:block">{footer.serviceAreaReachLine}</p>
            <p className="mt-2 text-xs font-light text-white/46 md:text-sm md:text-white/52">{footer.rights}</p>
            <h4 className="mt-7 text-xs font-medium uppercase tracking-[0.2em] text-gold-soft/70 md:mt-10">{footer.learnTitle}</h4>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-light md:block md:space-y-2 md:text-sm">
              <li>
                <Link
                  to="/articles"
                  className="text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                  {footer.linkArticles}
                </Link>
              </li>
              <li>
                <Link
                  to="/shower-glass-custom"
                  className="text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                  {footer.linkServiceShower}
                </Link>
              </li>
            </ul>
            <h4 className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-gold-soft/70 md:mt-8">{footer.legalTitle}</h4>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-light md:block md:space-y-2 md:text-sm">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                  {footer.linkPrivacyPolicy}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                  {footer.linkTermsOfUse}
                </Link>
              </li>
              <li>
                <Link
                  to="/accessibility-statement"
                  className="text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                  {footer.linkAccessibilityStatement}
                </Link>
              </li>
            </ul>
          </div>
          <div className="min-w-0 text-start">
            <h3 id="contact-heading" className="text-sm font-medium text-white">
              {footer.contact}
            </h3>
            <p className="mt-3 text-sm font-light text-white/62 md:mt-4">{WHATSAPP_DISPLAY}</p>
            <Link
              to="/#send-photo"
              className="mt-3 inline-block rounded-sm text-sm font-light text-white/62 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              {footer.sendPhotoLink}
            </Link>
            <h4 className="mt-6 text-sm font-medium text-white md:mt-8">{footer.hoursTitle}</h4>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-xs font-light text-white/58 md:block md:space-y-1 md:text-sm md:text-white/62">
              {footer.hoursByDay.map((item) => (
                <p key={item.day}>
                  {item.day}:{' '}
                  <span dir="ltr" className="inline-block tabular-nums [unicode-bidi:isolate]">
                    {item.hours}
                  </span>
                </p>
              ))}
            </div>
          </div>
          <div className="min-w-0 text-start">
            <h3 className="text-sm font-medium text-white">{footer.whatsapp}</h3>
            <a
              href={wa}
              className={`mt-4 inline-flex max-w-full break-words rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white shadow-[0_8px_24px_rgba(37,211,102,0.18)] transition-colors hover:bg-[#1DA851] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 md:shadow-[0_14px_38px_rgba(37,211,102,0.22)] ${pathname === '/' ? 'max-md:text-xs' : ''}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={a11y.whatsappSendPhotoQuote}
              onClick={() => trackWhatsAppClick('article')}
            >
              <span className="md:hidden">{waMobileLabel}</span>
              <span className="hidden md:inline">{primaryCta}</span>
            </a>
            <div className="mt-3 max-w-xs space-y-1 text-xs font-light leading-relaxed text-white/52 md:mt-4 md:text-white/58">
              <p>{conversion.priceLine1}</p>
              <p>{conversion.priceLine2}</p>
            </div>
            <p className="mt-2 text-xs font-light text-white/52 md:text-white/58">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="inline-block h-3.5 w-3.5 align-[-0.15em]"
                fill="none"
              >
                <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
                <path
                  d="M12 7.75v4.75l3.1 1.85"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{' '}
              {conversion.microQuick}
            </p>
            <div className="mt-8 border-t border-white/10 pt-6 md:mt-10 md:pt-8">
              <p className="text-xs font-semibold tracking-wide text-gold-soft md:text-sm">
                {footer.developerCreditTitle}
              </p>
              <p className="mt-2 text-xs font-semibold text-white/70 md:text-sm">{footer.developerCreditSubtitle}</p>
              <a
                href="https://thewitch.co.il/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex rounded-xl opacity-95 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 md:mt-4"
                aria-label="מעבר לאתר The Witch"
              >
                <img
                  src={DEVELOPER_BRAND_LOGO_SRC}
                  srcSet={`${DEVELOPER_BRAND_LOGO_SRC} 480w, ${DEVELOPER_BRAND_LOGO_SRC} 768w, ${DEVELOPER_BRAND_LOGO_SRC} 1200w`}
                  sizes="(max-width: 768px) 96px, 88px"
                  alt={footer.developerLogoAlt}
                  width={1024}
                  height={1024}
                  className="h-20 w-20 rounded-xl object-cover object-center shadow-[0_12px_28px_rgba(0,0,0,0.24)] md:h-22 md:w-22 md:shadow-[0_14px_34px_rgba(0,0,0,0.28)]"
                  decoding="async"
                  loading="lazy"
                />
              </a>
              <p className="mt-3 text-[11px] font-medium tracking-wide text-white/50 md:text-xs">
                {footer.developerCopyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
