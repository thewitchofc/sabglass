import { Link } from 'react-router-dom'
import { premiumCopy } from '../../content/premium'
import { DEVELOPER_BRAND_LOGO_SRC } from '../../config/site'

export function SiteFooter() {
  const { footer } = premiumCopy

  return (
    <footer
      className="relative isolate scroll-mt-20 overflow-hidden border-t border-white/10 bg-neutral-950 text-white md:scroll-mt-[4.5rem]"
      aria-labelledby="footer-brand-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(184,163,105,0.14),transparent_28%),radial-gradient(circle_at_86%_82%,rgba(255,255,255,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_36%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/24 to-transparent" />

      <div className="relative mx-auto max-w-6xl py-7 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] md:px-8 md:py-16">
        <div className="grid grid-cols-3 gap-x-3 gap-y-6 md:grid-cols-4 md:gap-8 md:[&>div]:min-w-0">
          <div className="col-span-3 min-w-0 text-center md:col-span-1 md:text-start">
            <p id="footer-brand-heading" className="text-xs font-medium uppercase tracking-[0.28em] text-gold-soft/75">
              Premium
            </p>
            <img
              src="/sab-glass-logo.svg"
              alt={footer.brand}
              width={1500}
              height={260}
              className="mx-auto mt-3 h-auto w-32 brightness-0 invert drop-shadow-[0_0_18px_rgba(0,0,0,0.65)] md:mx-0 md:mt-4 md:w-40"
            />
            <p className="mt-2 text-xs font-light text-white/58 md:mt-4 md:text-sm md:text-white/62">{footer.serviceAreaLine}</p>
            <p className="mt-1 text-xs font-medium text-white/66 md:hidden">{footer.serviceAreaReachLineMobile}</p>
            <p className="mt-1 hidden text-sm font-medium text-white/72 md:block">{footer.serviceAreaReachLine}</p>
            <p className="mt-1.5 text-xs font-light text-white/46 md:mt-2 md:text-sm md:text-white/52">{footer.rights}</p>
          </div>
          <div className="min-w-0 text-start">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.16em] text-gold-soft/70 md:text-xs md:tracking-[0.2em]">
              {footer.learnTitle}
            </h4>
            <ul className="mt-2 space-y-1.5 text-[11px] font-light leading-relaxed md:mt-3 md:space-y-2 md:text-sm">
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
          </div>
          <div className="min-w-0 text-start">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.16em] text-gold-soft/70 md:text-xs md:tracking-[0.2em]">
              {footer.legalTitle}
            </h4>
            <ul className="mt-2 space-y-1.5 text-[11px] font-light leading-relaxed md:mt-3 md:space-y-2 md:text-sm">
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
          <div className="min-w-0 text-center md:text-start">
            <p className="text-[9px] font-semibold tracking-wide text-gold-soft md:text-sm">
              {footer.developerCreditTitle}
            </p>
            <p className="mt-1 text-[10px] font-semibold text-white/70 md:mt-2 md:text-sm">
              {footer.developerCreditSubtitle}
            </p>
            <a
              href="https://thewitch.co.il/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex rounded-lg opacity-95 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 md:mt-4 md:rounded-xl"
              aria-label="מעבר לאתר The Witch"
            >
              <img
                src={DEVELOPER_BRAND_LOGO_SRC}
                srcSet={`${DEVELOPER_BRAND_LOGO_SRC} 480w, ${DEVELOPER_BRAND_LOGO_SRC} 768w, ${DEVELOPER_BRAND_LOGO_SRC} 1200w`}
                sizes="(max-width: 768px) 48px, 88px"
                alt={footer.developerLogoAlt}
                width={1024}
                height={1024}
                className="h-12 w-12 rounded-lg object-cover object-center shadow-[0_8px_18px_rgba(0,0,0,0.2)] md:h-22 md:w-22 md:rounded-xl md:shadow-[0_14px_34px_rgba(0,0,0,0.28)]"
                decoding="async"
                loading="lazy"
              />
            </a>
            <p className="mt-1.5 text-[9px] font-medium tracking-wide text-white/45 md:mt-3 md:text-xs">
              {footer.developerCopyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
