import { SiteFooter } from '../components/sections/SiteFooter'
import { ContentCta } from '../components/content/ContentCta'
import { ContentFigure } from '../components/content/ContentFigure'
import { FadeIn } from '../components/ui/FadeIn'
import { serviceShowerPage } from '../content/seoContent'
import { WHATSAPP_PHOTO_MESSAGE } from '../config/site'
import { premiumCopy } from '../content/premium'
import { WhatsAppLink } from '../components/ui/WhatsAppLink'
import { WaMicroLine } from '../components/WaFrictionHints'

export function ShowerGlassServicePage() {
  const { a11y } = premiumCopy
  const p = serviceShowerPage

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] font-sans text-white antialiased md:pb-0">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(184,163,105,0.16),transparent_30%),radial-gradient(circle_at_82%_30%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.045),transparent_34%)]"
        aria-hidden
      />
      <article className="relative mx-auto max-w-4xl pb-8 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pt-24 md:px-8 md:pt-28">
        <FadeIn variant="heading">
        <header className="rounded-[2.25rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.36em] text-gold-soft/75">
            Glass Shower Service
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-light tracking-tight text-white max-md:text-[2rem] md:text-5xl">
            {p.h1}
          </h1>
          <p className="mt-6 max-w-[95%] text-pretty text-lg font-light leading-relaxed text-white/70 md:max-w-none">
            {p.intro}
          </p>
        </header>
        </FadeIn>

        <ContentFigure src={p.image.src} alt={p.image.alt} />

        <FadeIn variant="card">
        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.055] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm">
          <WhatsAppLink
            variant="whatsapp"
            size="lg"
            message={WHATSAPP_PHOTO_MESSAGE}
            ariaLabel={a11y.whatsappSendPhotoQuote}
            trackingLabel="article"
            className="w-full !rounded-full shadow-[0_12px_34px_rgba(37,211,102,0.24)] sm:w-auto"
          >
            {p.ctaMid}
          </WhatsAppLink>
          <WaMicroLine variant="onDark" className="mt-3" />
        </div>
        </FadeIn>

        {p.sections.map((sec, idx) => (
          <FadeIn key={sec.h2} variant="card" delay={Math.min(idx, 3) * 0.03}>
          <section key={sec.h2} className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm md:p-8">
            <h2 className="text-2xl font-light tracking-tight text-white md:text-3xl">{sec.h2}</h2>
            {sec.paragraphs.map((para, pi) => (
              <p
                key={`${sec.h2}-${pi}`}
                className="mt-5 text-pretty text-base font-light leading-relaxed text-white/66 md:text-lg"
              >
                {para}
              </p>
            ))}
            <ContentCta label={p.ctaMid} message="photo" variant="dark" />
          </section>
          </FadeIn>
        ))}

        <FadeIn variant="card">
        <ContentCta
          label={p.ctaMid}
          message="photo"
          title="מוכנים לשדרוג חדר הרחצה?"
          subtitle="שלחו תמונה — נחזור עם כיוון, מחיר משוער והמשך תיאום."
          variant="dark"
          className="mt-12 text-center md:text-start"
        />
        </FadeIn>
      </article>
      <SiteFooter />
    </main>
  )
}
