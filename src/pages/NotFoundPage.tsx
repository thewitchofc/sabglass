import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteFooter } from '../components/sections/SiteFooter'
import { WhatsAppLink } from '../components/ui/WhatsAppLink'
import { SITE_WIDE_CTA_BUTTON_LABEL, WHATSAPP_PHOTO_MESSAGE } from '../config/site'
import { premiumCopy } from '../content/premium'

function setRobotsNoIndex() {
  const list = document.querySelectorAll<HTMLMetaElement>('meta[name="robots"]')
  const meta = list[0] ?? document.createElement('meta')

  meta.setAttribute('name', 'robots')
  meta.setAttribute('content', 'noindex, follow')
  if (!list[0]) document.head.appendChild(meta)

  for (let i = 1; i < list.length; i++) {
    list[i].remove()
  }
}

export function NotFoundPage() {
  const { a11y } = premiumCopy

  useEffect(() => {
    document.title = 'העמוד לא נמצא | SAB Glass'
    setRobotsNoIndex()
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] font-sans text-white antialiased md:pb-0">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(184,163,105,0.16),transparent_30%),radial-gradient(circle_at_80%_44%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.045),transparent_34%)]"
        aria-hidden
      />
      <section className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-4xl items-center px-[max(1rem,env(safe-area-inset-left,0px))] py-24 md:px-8 md:py-28">
        <div className="w-full rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 text-center shadow-[0_28px_90px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-sm md:rounded-[2.35rem] md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.36em] text-gold-soft/75">
            404
          </p>
          <img
            src="/sab-glass-logo.svg"
            alt="SAB Glass"
            width={1500}
            height={260}
            className="mx-auto mt-6 h-auto w-[min(16rem,72vw)] brightness-0 invert drop-shadow-[0_0_22px_rgba(0,0,0,0.72)] md:w-72"
          />
          <h1 className="mt-7 text-balance text-3xl font-light tracking-tight text-white md:text-5xl">
            העמוד שחיפשתם לא נמצא
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm font-light leading-relaxed text-white/66 md:text-lg">
            ייתכן שהקישור השתנה, שהכתובת הוקלדה לא נכון, או שהעמוד כבר לא פעיל. אפשר לחזור לעמוד הבית, לעבור לקטלוג או לשלוח תמונה ונכוון אתכם.
          </p>
          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-gold-soft/35 hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              חזרה לעמוד הבית
            </Link>
            <Link
              to="/catalog"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold-soft/30 bg-gold/10 px-6 py-3 text-sm font-medium text-gold-soft transition-colors hover:border-gold-soft/55 hover:bg-gold/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft/55 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              מעבר לקטלוג
            </Link>
          </div>
          <div className="mx-auto mt-4 flex max-w-md justify-center">
            <WhatsAppLink
              variant="whatsapp"
              size="lg"
              message={WHATSAPP_PHOTO_MESSAGE}
              ariaLabel={a11y.whatsappSendPhotoQuote}
              trackingLabel="article"
              className="w-full !rounded-full shadow-[0_10px_28px_rgba(37,211,102,0.22)] sm:w-auto"
            >
              {SITE_WIDE_CTA_BUTTON_LABEL}
            </WhatsAppLink>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
