import { SiteFooter } from '../components/sections/SiteFooter'
import { ContentCta } from '../components/content/ContentCta'
import { ContentFigure } from '../components/content/ContentFigure'
import { serviceShowerPage } from '../content/seoContent'
import { WHATSAPP_PHOTO_MESSAGE } from '../config/site'
import { premiumCopy } from '../content/premium'
import { WhatsAppLink } from '../components/ui/WhatsAppLink'
import { WaMicroLine } from '../components/WaFrictionHints'

export function ShowerGlassServicePage() {
  const { a11y } = premiumCopy
  const p = serviceShowerPage

  return (
    <main className="min-h-dvh bg-white pb-[calc(10rem+env(safe-area-inset-bottom,0px))] font-sans text-neutral-900 antialiased md:pb-0">
      <article className="mx-auto max-w-3xl pb-8 pl-[max(1.25rem,env(safe-area-inset-left,0px))] pr-[max(1.25rem,env(safe-area-inset-right,0px))] pt-24 md:px-8 md:pt-28">
        <h1 className="text-balance text-3xl font-light tracking-tight text-neutral-950 max-md:text-[1.625rem] md:text-4xl">
          {p.h1}
        </h1>
        <p className="mt-6 max-w-[95%] text-pretty text-lg font-light leading-relaxed text-neutral-700 md:max-w-none">
          {p.intro}
        </p>

        <ContentFigure src={p.image.src} alt={p.image.alt} />

        <div className="mt-10 rounded-sm border border-gold/30 bg-neutral-50/80 px-6 py-8">
          <WhatsAppLink
            variant="whatsapp"
            size="lg"
            message={WHATSAPP_PHOTO_MESSAGE}
            ariaLabel={a11y.whatsappSendPhotoQuote}
            trackingLabel="article"
            className="w-full sm:w-auto"
          >
            {p.ctaMid}
          </WhatsAppLink>
          <WaMicroLine className="mt-3" />
        </div>

        {p.sections.map((sec) => (
          <section key={sec.h2} className="mt-16 border-t border-neutral-200 pt-14 first:mt-14 first:border-t-0 first:pt-0">
            <h2 className="text-2xl font-light tracking-tight text-neutral-950 md:text-3xl">{sec.h2}</h2>
            {sec.paragraphs.map((para, pi) => (
              <p
                key={`${sec.h2}-${pi}`}
                className="mt-5 text-pretty text-base font-light leading-relaxed text-neutral-600 md:text-lg"
              >
                {para}
              </p>
            ))}
            <ContentCta label={p.ctaMid} message="photo" />
          </section>
        ))}

        <ContentCta
          label={p.ctaMid}
          message="photo"
          title="מוכנים לשדרוג חדר הרחצה?"
          subtitle="שלחו תמונה — נחזור עם כיוון, מחיר משוער והמשך תיאום."
          className="mt-16 border-t border-neutral-200 pt-14 text-center md:text-start"
        />
      </article>
      <SiteFooter />
    </main>
  )
}
