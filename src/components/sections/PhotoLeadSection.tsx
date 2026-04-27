import { WHATSAPP_PHOTO_MESSAGE } from '../../config/site'
import { premiumCopy } from '../../content/premium'
import { WaMicroLine } from '../WaFrictionHints'
import { FadeIn } from '../ui/FadeIn'
import { WhatsAppLink } from '../ui/WhatsAppLink'

export function PhotoLeadSection() {
  const { photoLead, primaryCta, conversion, a11y } = premiumCopy
  const steps = ['מצלמים את חדר הרחצה', 'שולחים בוואטסאפ', 'מקבלים כיוון והצעה']

  return (
    <section
      id="send-photo"
      className="relative isolate scroll-mt-20 overflow-hidden bg-neutral-950 text-white md:scroll-mt-[4.5rem]"
      aria-labelledby="photo-lead-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(184,163,105,0.18),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,0.07),transparent_28%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-6xl py-16 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.055] px-5 py-10 text-center shadow-[0_28px_90px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm md:px-12 md:py-14">
          <FadeIn variant="card">
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-gold-soft/75">
              Photo Quote
            </p>
            <h2
              id="photo-lead-heading"
              className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-light tracking-tight text-white max-md:text-[2rem] md:text-5xl md:leading-tight"
            >
              <span className="md:hidden">{photoLead.titleMobile}</span>
              <span className="hidden md:inline">{photoLead.title}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[95%] text-pretty text-lg font-light leading-relaxed text-white/72 md:hidden">
              {photoLead.bodyMobile}
            </p>
            <p className="mx-auto mt-6 hidden max-w-[95%] text-pretty text-lg font-light leading-relaxed text-white/72 md:block md:max-w-xl md:text-xl">
              {photoLead.body}
            </p>
            <div className="mx-auto mt-8 grid max-w-3xl gap-3 text-start sm:grid-cols-3">
              {steps.map((step, i) => (
                <div
                  key={step}
                  className="rounded-2xl border border-white/10 bg-neutral-950/45 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                >
                  <span className="text-xs font-medium tabular-nums tracking-[0.2em] text-gold-soft/80">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-2 text-sm font-light leading-relaxed text-white/82">{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-light text-white/62">{photoLead.note}</p>
            <div className="mx-auto mt-5 hidden max-w-md space-y-1 text-pretty text-sm font-light leading-relaxed text-white/58 md:block">
              <p>{conversion.priceLine1}</p>
              <p>{conversion.priceLine2}</p>
            </div>
            <FadeIn
              variant="default"
              className="mt-8 flex flex-col items-center gap-3 md:hidden"
            >
              <WhatsAppLink
                variant="whatsapp"
                size="lg"
                message={WHATSAPP_PHOTO_MESSAGE}
                ariaLabel={a11y.whatsappSendPhotoQuote}
                trackingLabel="article"
                className="w-full max-w-md !rounded-full shadow-[0_4px_22px_rgba(37,211,102,0.38)]"
              >
                {primaryCta}
              </WhatsAppLink>
              <WaMicroLine tone="heroPhoto" className="max-w-md [&_p]:text-center" />
            </FadeIn>
          </FadeIn>
          <FadeIn
            variant="default"
            delay={0.1}
            className="mt-10 hidden flex-col items-center md:flex"
          >
            <WhatsAppLink
              variant="whatsapp"
              size="lg"
              message={WHATSAPP_PHOTO_MESSAGE}
              ariaLabel={a11y.whatsappSendPhotoQuote}
              trackingLabel="article"
                className="w-full max-w-md !rounded-full shadow-[0_14px_40px_rgba(37,211,102,0.28)] sm:w-auto"
            >
              {primaryCta}
            </WhatsAppLink>
            <WaMicroLine tone="heroPhoto" className="[&_p]:text-center" />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
