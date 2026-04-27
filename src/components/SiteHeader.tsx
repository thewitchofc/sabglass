import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { trackWhatsAppClick } from '../analytics/whatsappTracking'
import { catalogProducts } from '../data/catalog'
import { navCopy } from '../content/nav'
import { premiumCopy } from '../content/premium'
import { WHATSAPP_PHOTO_MESSAGE, whatsappHref } from '../config/site'

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, '')
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function SiteHeader() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [catalogOpen, setCatalogOpen] = useState(false)
  /** דסקטופ בדף הבית: כותרת שקופה מעל ה־Hero כדי שהמותג ייראה טבוע בתמונה */
  const [atHeroTop, setAtHeroTop] = useState(true)
  const [isDesktop, setIsDesktop] = useState(false)
  /** תפריט מובייל: קטלוג כ־accordion (סגור כברירת מחדל) */
  const [mobileCatalogExpanded, setMobileCatalogExpanded] = useState(false)
  const catalogRef = useRef<HTMLDivElement>(null)
  const waHref = whatsappHref(WHATSAPP_PHOTO_MESSAGE)
  const { primaryCta, a11y, footer, brand } = premiumCopy

  const closeAll = useCallback(() => {
    setMobileOpen(false)
    setCatalogOpen(false)
    setMobileCatalogExpanded(false)
    document.body.style.overflow = ''
  }, [])

  useEffect(() => {
    if (!mobileOpen) document.body.style.overflow = ''
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    if (typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [mobileOpen, closeAll])

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setMobileOpen(false)
        setMobileCatalogExpanded(false)
        document.body.style.overflow = ''
      }
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const syncDesktop = () => setIsDesktop(mq.matches)
    syncDesktop()
    mq.addEventListener('change', syncDesktop)
    return () => mq.removeEventListener('change', syncDesktop)
  }, [])

  useEffect(() => {
    const onScroll = () => setAtHeroTop(window.scrollY < 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!catalogRef.current?.contains(e.target as Node)) setCatalogOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  const onHomeClick = (e: React.MouseEvent) => {
    closeAll()
    if (location.pathname === '/') {
      e.preventDefault()
      scrollToHash('#home')
    }
  }

  const onHomeHashClick =
    (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      closeAll()
      if (location.pathname === '/' && location.hash === hash) {
        e.preventDefault()
        scrollToHash(hash)
      }
    }

  const onCatalogHashClick =
    (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      closeAll()
      if (location.pathname === '/catalog' && location.hash === hash) {
        e.preventDefault()
        scrollToHash(hash)
      }
    }

  const onCatalogRootClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation()
    closeAll()
    if (location.pathname === '/catalog') {
      e.preventDefault()
      scrollToHash('#catalog')
    }
  }

  const linkClass =
    'rounded-sm text-[13px] font-medium tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const headerWaClass =
    'inline-flex max-w-[10.5rem] shrink-0 items-center justify-center gap-1.5 rounded-sm border-2 px-2 py-2 text-center text-[10px] font-medium leading-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:max-w-[14rem] md:px-3 md:py-2 md:text-xs md:leading-snug lg:max-w-none lg:text-[13px]'
  const isHomeCurrent = location.pathname === '/' && (!location.hash || location.hash === '#home')
  const isGuideCurrent = location.pathname === '/miklahon-guide'
  const isContactCurrent = location.pathname === '/' && location.hash === '#contact'
  const isArticlesCurrent = location.pathname === '/articles' || location.pathname.startsWith('/articles/')
  const isCatalogCurrent =
    location.pathname === '/catalog' || location.pathname === '/shower-glass-custom' || location.pathname === '/catalog/'

  const blendOverHero =
    isHomeCurrent &&
    isDesktop &&
    atHeroTop &&
    !mobileOpen &&
    !catalogOpen

  const midNavLinkClass = blendOverHero
    ? `${linkClass} px-1 py-0.5 text-white/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)] hover:text-white focus-visible:ring-white/45 focus-visible:ring-offset-transparent`
    : `${linkClass} px-1 py-0.5 text-white/70 hover:text-white focus-visible:ring-white/45 focus-visible:ring-offset-neutral-950`

  const catalogTriggerClass = blendOverHero
    ? `${linkClass} inline-flex items-center gap-1 px-0.5 font-semibold text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)] hover:text-white focus-visible:ring-white/45 focus-visible:ring-offset-transparent`
    : `${linkClass} inline-flex items-center gap-1 px-0.5 font-semibold text-white hover:text-gold-soft focus-visible:ring-white/45 focus-visible:ring-offset-neutral-950`

  const headerWaToneClass = blendOverHero
    ? 'border-white bg-white/12 text-white hover:bg-white hover:text-neutral-950 focus-visible:ring-white/55 focus-visible:ring-offset-transparent'
    : 'border-gold-soft/45 bg-white/[0.06] text-white hover:border-gold-soft hover:bg-gold-soft hover:text-neutral-950 focus-visible:ring-gold-soft focus-visible:ring-offset-neutral-950'

  const mobileLinkClass =
    'rounded-sm px-3 py-3 text-sm font-medium text-white/78 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/30'

  const mobileSubLinkClass =
    'rounded-sm py-2.5 text-sm font-light text-white/64 transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/30'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[70] min-h-[calc(3.5rem+env(safe-area-inset-top,0px))] pt-[env(safe-area-inset-top,0px)] transition-[background-color,border-color,backdrop-filter] duration-300 md:min-h-[calc(3.25rem+env(safe-area-inset-top,0px))] ${
        blendOverHero
          ? 'border-b border-white/15 bg-gradient-to-b from-black/45 via-black/20 to-transparent backdrop-blur-[2px] supports-[backdrop-filter]:from-black/40'
          : 'border-b border-white/10 bg-neutral-950/88 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md supports-[backdrop-filter]:bg-neutral-950/78'
      }`}
    >
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 pl-[max(1.25rem,env(safe-area-inset-left,0px))] pr-[max(1.25rem,env(safe-area-inset-right,0px))] md:h-[3.25rem] md:gap-6 md:pl-8 md:pr-8">
        <Link
          to="/"
          onClick={onHomeClick}
          aria-current={isHomeCurrent ? 'page' : undefined}
          className={`relative z-[71] flex shrink-0 flex-col items-start gap-0.5 rounded-sm transition-[color,opacity,filter] duration-300 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 [text-rendering:geometricPrecision] ${
            blendOverHero
              ? 'text-white focus-visible:ring-white/50 focus-visible:ring-offset-transparent drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]'
              : 'text-white focus-visible:ring-white/40 focus-visible:ring-offset-neutral-950'
          }`}
        >
          <img
            src="/sab-glass-logo.svg"
            alt=""
            width={1500}
            height={260}
            className={`h-auto w-28 object-contain md:w-32 ${
              blendOverHero
                ? 'brightness-0 invert drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)]'
                : 'brightness-0 invert drop-shadow-[0_1px_14px_rgba(0,0,0,0.55)]'
            }`}
          />
          <span
            className={`hidden max-w-[11rem] text-[10px] font-medium leading-tight md:block ${
              blendOverHero ? 'text-white/88 drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)]' : 'text-white/58'
            }`}
          >
            {brand.tagline}
          </span>
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 z-[71] hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 lg:gap-12 md:flex"
          aria-label="ניווט ראשי באתר — קטלוג, מדריך מקלחונים וצור קשר"
        >
          <div className="relative" ref={catalogRef}>
            <button
              type="button"
              className={catalogTriggerClass}
              aria-expanded={catalogOpen}
              aria-controls="catalog-submenu"
              onClick={(e) => {
                e.stopPropagation()
                setCatalogOpen((v) => !v)
              }}
            >
              {navCopy.catalog}
              <span className={`text-[10px] ${blendOverHero ? 'opacity-75' : 'opacity-60'}`} aria-hidden>
                ▾
              </span>
            </button>
            {catalogOpen && (
              <div
                id="catalog-submenu"
                className="absolute start-0 top-[calc(100%+0.35rem)] z-50 min-w-[16rem] rounded-2xl border border-white/10 bg-neutral-950/94 py-2 shadow-[0_20px_70px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
              >
                <Link
                  to="/catalog"
                  aria-current={isCatalogCurrent ? 'page' : undefined}
                  className="block rounded-xl px-4 py-2 text-[12px] font-medium text-white/78 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/30"
                  onClick={onCatalogRootClick}
                >
                  {navCopy.catalog}, הכל
                </Link>
                <Link
                  to="/shower-glass-custom"
                  aria-current={location.pathname === '/shower-glass-custom' ? 'page' : undefined}
                  className="block rounded-xl px-4 py-2 text-[12px] font-light text-white/64 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/30"
                  onClick={closeAll}
                >
                  {footer.linkServiceShower}
                </Link>
                <div className="my-1 h-px bg-white/10" />
                {catalogProducts.map((p) => (
                  <Link
                    key={p.id}
                    to={`/catalog#catalog-${p.id}`}
                    className="block rounded-xl px-4 py-2 text-[12px] font-light text-white/64 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/30"
                    onClick={(e) => {
                      e.stopPropagation()
                      onCatalogHashClick(`#catalog-${p.id}`)(e)
                    }}
                  >
                    {p.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/miklahon-guide"
            className={midNavLinkClass}
            onClick={closeAll}
            aria-current={isGuideCurrent ? 'page' : undefined}
          >
            מדריך מקלחונים
          </Link>

          <Link
            to="/#contact"
            onClick={onHomeHashClick('#contact')}
            className={midNavLinkClass}
            aria-current={isContactCurrent ? 'page' : undefined}
          >
            {navCopy.contact}
          </Link>
        </nav>

        <div className="relative z-[71] flex items-center gap-2 md:gap-3">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${headerWaClass} ${headerWaToneClass} hidden md:inline-flex`}
            aria-label={a11y.whatsappHeader}
            onClick={() => {
              trackWhatsAppClick('article')
              closeAll()
            }}
          >
            <svg className="h-3.5 w-3.5 shrink-0 md:h-4 md:w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="text-balance">{primaryCta}</span>
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/14 bg-white/[0.04] text-white/82 transition-colors hover:border-gold-soft/35 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? navCopy.closeMenu : navCopy.openMenu}
            onClick={() =>
              setMobileOpen((v) => {
                if (v) setMobileCatalogExpanded(false)
                return !v
              })
            }
          >
            <span className="sr-only">{mobileOpen ? navCopy.closeMenu : navCopy.openMenu}</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeWidth={1.5} d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 z-[69] overflow-y-auto border-t border-white/10 bg-neutral-950/96 py-6 pl-[max(1.25rem,env(safe-area-inset-left,0px))] pr-[max(1.25rem,env(safe-area-inset-right,0px))] pt-6 shadow-[0_-24px_80px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md md:hidden"
          style={{
            top: 'calc(3.5rem + env(safe-area-inset-top, 0px))',
          }}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 pb-[env(safe-area-inset-bottom,0px)]">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 flex items-center justify-center gap-2 rounded-full border border-gold-soft/45 bg-white/[0.06] px-3 py-3 text-center text-xs font-medium leading-snug text-white transition-colors hover:border-gold-soft hover:bg-gold-soft hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              aria-label={a11y.whatsappHeader}
              onClick={() => {
                trackWhatsAppClick('article')
                closeAll()
              }}
            >
              {primaryCta}
            </a>
            <Link
              to="/"
              aria-current={isHomeCurrent ? 'page' : undefined}
              className={mobileLinkClass}
              onClick={onHomeClick}
            >
              {navCopy.home}
            </Link>
            <Link
              to="/#about"
              className={mobileLinkClass}
              onClick={onHomeHashClick('#about')}
            >
              {navCopy.about}
            </Link>
            <button
              type="button"
              id="mobile-catalog-accordion-trigger"
              className="flex w-full items-center justify-between gap-2 rounded-sm px-3 py-3 text-start text-sm font-medium text-white/78 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/30"
              aria-expanded={mobileCatalogExpanded}
              aria-controls="mobile-catalog-accordion-panel"
              onClick={() => setMobileCatalogExpanded((v) => !v)}
            >
              <span>{navCopy.catalog}</span>
              <svg
                className={`h-4 w-4 shrink-0 text-gold-soft/60 transition-transform duration-200 ${mobileCatalogExpanded ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {mobileCatalogExpanded && (
              <div
                id="mobile-catalog-accordion-panel"
                role="region"
                aria-labelledby="mobile-catalog-accordion-trigger"
                className="ms-2 flex flex-col gap-1 border-s border-white/10 ps-3 pt-0.5"
              >
                <Link
                  to="/catalog"
                  aria-current={isCatalogCurrent ? 'page' : undefined}
                  className="rounded-sm py-2.5 text-sm font-medium text-white/74 transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/30"
                  onClick={onCatalogRootClick}
                >
                  {navCopy.catalog}, הכל
                </Link>
                {catalogProducts.map((p) => (
                  <Link
                    key={p.id}
                    to={`/catalog#catalog-${p.id}`}
                    className={mobileSubLinkClass}
                    onClick={onCatalogHashClick(`#catalog-${p.id}`)}
                  >
                    {p.title}
                  </Link>
                ))}
                <Link
                  to="/shower-glass-custom"
                  aria-current={location.pathname === '/shower-glass-custom' ? 'page' : undefined}
                  className={mobileSubLinkClass}
                  onClick={closeAll}
                >
                  {footer.linkServiceShower}
                </Link>
              </div>
            )}
            <Link
              to="/articles"
              aria-current={isArticlesCurrent ? 'page' : undefined}
              className={mobileLinkClass}
              onClick={closeAll}
            >
              {navCopy.articles}
            </Link>
            <Link
              to="/miklahon-guide"
              aria-current={isGuideCurrent ? 'page' : undefined}
              className={mobileLinkClass}
              onClick={closeAll}
            >
              מדריך מקלחונים
            </Link>
            <Link
              to="/#contact"
              aria-current={isContactCurrent ? 'page' : undefined}
              className={`${mobileLinkClass} mt-4`}
              onClick={onHomeHashClick('#contact')}
            >
              {navCopy.contact}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
