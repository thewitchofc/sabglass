import { WHATSAPP_PHOTO_MESSAGE } from '../../config/site'
import { premiumCopy } from '../../content/premium'
import { WaMicroLine } from '../WaFrictionHints'
import { FadeIn } from '../ui/FadeIn'
import { WhatsAppLink } from '../ui/WhatsAppLink'

export function HowItWorks() {
  const { how, primaryCta, a11y } = premiumCopy

  return (
    <section
      className="relative isolate overflow-hidden border-y border-white/10 bg-neutral-950 text-white"
      aria-labelledby="how-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(184,163,105,0.1),transparent_26%),linear-gradient(135deg,transparent,rgba(255,255,255,0.025)_52%,transparent)] md:bg-[radial-gradient(circle_at_22%_18%,rgba(184,163,105,0.14),transparent_26%),radial-gradient(circle_at_86%_58%,rgba(255,255,255,0.07),transparent_30%),linear-gradient(135deg,transparent,rgba(255,255,255,0.045)_52%,transparent)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/22 to-transparent" />

      <div className="relative mx-auto max-w-6xl py-11 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] md:px-8 md:py-28">
        <div className="grid gap-7 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] md:gap-16">
          <FadeIn variant="heading">
            <p className="text-xs font-medium uppercase tracking-[0.36em] text-gold-soft/75">
              The Process
            </p>
            <h2
              id="how-heading"
              className="mt-4 text-balance text-4xl font-light tracking-tight text-white max-md:text-[1.75rem] md:text-5xl"
            >
              {how.title}
            </h2>
            <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-white/62 md:mt-5 md:text-base">
              תהליך קצר, ברור ומדויק — מהתמונה הראשונה ועד התקנה נקייה בבית.
            </p>

            <FadeIn
              variant="default"
              className="mt-10 hidden max-w-md flex-col md:flex"
            >
              <WhatsAppLink
                variant="whatsapp"
                message={WHATSAPP_PHOTO_MESSAGE}
                ariaLabel={a11y.whatsappSendPhotoQuote}
                trackingLabel="article"
                className="w-full !rounded-full shadow-[0_14px_40px_rgba(37,211,102,0.24)] sm:w-auto"
              >
                {primaryCta}
              </WhatsAppLink>
              <WaMicroLine className="[&_p]:text-white/55" />
            </FadeIn>
          </FadeIn>

          <div className="relative">
            <span
              className="absolute end-[1.35rem] top-8 bottom-8 hidden w-px bg-gradient-to-b from-gold-soft/0 via-gold-soft/35 to-gold-soft/0 md:block"
              aria-hidden
            />
            <ol className="relative m-0 list-none space-y-2.5 p-0 md:space-y-5">
            {how.steps.map((step, i) => (
              <FadeIn
                key={step.title}
                as="li"
                variant="card"
                delay={i * 0.08}
                className="relative flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_14px_42px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm md:gap-6 md:rounded-3xl md:bg-white/[0.055] md:p-7 md:shadow-[0_24px_70px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-soft/20 bg-gold/10 text-xs font-medium tabular-nums text-gold-soft shadow-[0_0_18px_rgba(184,163,105,0.12)] md:h-12 md:w-12 md:text-sm md:shadow-[0_0_32px_rgba(184,163,105,0.18)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="pt-0.5">
                  <h3 className="text-base font-medium text-white md:text-xl">
                    <span className="md:hidden">
                      {'titleMobile' in step && step.titleMobile ? step.titleMobile : step.title}
                    </span>
                    <span className="hidden md:inline">{step.title}</span>
                  </h3>
                  <p className="mt-1.5 max-w-[95%] text-xs font-light leading-relaxed text-white/58 md:hidden">
                    {step.textMobile}
                  </p>
                  <p className="mt-2 hidden max-w-[95%] text-sm font-light leading-relaxed text-white/65 md:block md:max-w-md md:text-base">
                    {step.text}
                  </p>
                </div>
              </FadeIn>
            ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
