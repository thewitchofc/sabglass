import { SiteFooter } from '../components/sections/SiteFooter'
import { FadeIn } from '../components/ui/FadeIn'
import { WhatsAppLink } from '../components/ui/WhatsAppLink'
import { WHATSAPP_DISPLAY, WHATSAPP_PHOTO_MESSAGE } from '../config/site'
import { premiumCopy } from '../content/premium'

export function ContactPage() {
  const { footer, primaryCta, conversion, a11y } = premiumCopy
  const hoursColumns = [footer.hoursByDay.slice(0, 4), footer.hoursByDay.slice(4)]

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 font-sans text-white antialiased">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(184,163,105,0.16),transparent_30%),radial-gradient(circle_at_82%_30%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.045),transparent_34%)]"
        aria-hidden
      />

      <section className="relative mx-auto max-w-4xl pb-10 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pt-22 md:px-8 md:pb-16 md:pt-28">
        <FadeIn variant="heading">
          <header className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 text-center shadow-[0_18px_54px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm md:rounded-[2.25rem] md:bg-white/[0.055] md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.36em] text-gold-soft/75">Contact</p>
            <h1 className="mt-4 text-balance text-4xl font-light tracking-tight text-white max-md:text-[1.8rem] md:text-5xl">
              {footer.contact}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm font-light leading-relaxed text-white/66 md:text-lg md:text-white/70">
              שלחו תמונה או הודעה קצרה, ונחזור עם כיוון, מחיר משוער והמשך תיאום.
            </p>
          </header>
        </FadeIn>

        <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-[1fr_1.15fr] md:gap-6">
          <FadeIn variant="card">
            <section className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 text-center shadow-[0_14px_44px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm md:p-7">
              <h2 className="text-lg font-medium text-white">פרטי התקשרות</h2>
              <p className="mt-4 text-lg font-light text-white/72" dir="ltr">
                {WHATSAPP_DISPLAY}
              </p>
              <WhatsAppLink
                variant="whatsapp"
                size="lg"
                message={WHATSAPP_PHOTO_MESSAGE}
                ariaLabel={a11y.whatsappSendPhotoQuote}
                trackingLabel="article"
                className="mt-5 w-full rounded-full shadow-[0_12px_34px_rgba(37,211,102,0.24)]"
              >
                {primaryCta}
              </WhatsAppLink>
              <div className="mt-4 space-y-1 text-sm font-light leading-relaxed text-white/58">
                <p>{conversion.priceLine1}</p>
                <p>{conversion.priceLine2}</p>
                <p>{conversion.microQuick}</p>
              </div>
            </section>
          </FadeIn>

          <FadeIn variant="card" delay={0.04}>
            <section className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_14px_44px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm md:p-7">
              <h2 className="text-lg font-medium text-white">{footer.hoursTitle}</h2>
              <div className="mt-4 grid grid-cols-2 gap-x-5 text-sm font-light text-white/62">
                {hoursColumns.map((column, columnIndex) => (
                  <div key={columnIndex} className="space-y-2">
                    {column.map((item) => (
                      <p key={item.day} className="flex items-center justify-between gap-3">
                        <span>{item.day}</span>
                        <span dir="ltr" className="tabular-nums [unicode-bidi:isolate]">
                          {item.hours}
                        </span>
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
