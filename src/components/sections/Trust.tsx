import { premiumCopy } from '../../content/premium'
import { FadeIn } from '../ui/FadeIn'

export function Trust() {
  const { trust } = premiumCopy

  return (
    <section
      className="relative isolate overflow-hidden border-y border-white/10 bg-neutral-950 text-white"
      aria-labelledby="trust-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(184,163,105,0.1),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.025),transparent_30%)] md:bg-[radial-gradient(circle_at_20%_24%,rgba(184,163,105,0.16),transparent_28%),radial-gradient(circle_at_80%_76%,rgba(255,255,255,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.045),transparent_30%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/24 to-transparent" />

      <div className="relative mx-auto max-w-6xl py-11 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] md:px-8 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16">
          <div>
            <FadeIn variant="heading">
              <p className="text-xs font-medium uppercase tracking-[0.36em] text-gold-soft/75">
                Verified Trust
              </p>
              <h2
                id="trust-heading"
                className="mt-4 text-balance text-4xl font-light tracking-tight text-white max-md:text-[1.75rem] md:text-5xl"
              >
                {trust.title}
              </h2>
            </FadeIn>

            <FadeIn
              variant="card"
              className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_16px_48px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm md:mt-10 md:rounded-[2rem] md:bg-white/[0.055] md:p-8 md:shadow-[0_28px_90px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              <p className="text-2xl tracking-wide text-gold-soft drop-shadow-[0_0_18px_rgba(184,163,105,0.18)] md:text-4xl md:drop-shadow-[0_0_24px_rgba(184,163,105,0.25)]">
                <span className="sr-only">חמישה כוכבים</span>
                <span aria-hidden>★★★★★</span>
              </p>
              <p className="mt-3 text-xl font-light text-white md:mt-5 md:text-3xl">{trust.stat}</p>
              <p className="mt-2 text-xs font-light leading-relaxed text-white/58 md:hidden">
                {trust.starsLabelMobile}
              </p>
              <p className="mt-3 hidden text-sm font-light leading-relaxed text-white/62 md:block md:text-base">
                {trust.starsLabel}
              </p>
            </FadeIn>
          </div>

          <div>
            <h3 className="text-xl font-light tracking-tight text-white md:text-3xl">
              {trust.testimonialsHeading}
            </h3>
            <div className="mt-5 grid gap-3 md:mt-10 md:grid-cols-2 md:gap-4">
            {trust.testimonials.map((t, i) => (
              <FadeIn
                key={`${t.author}-${t.city}`}
                as="figure"
                variant="card"
                delay={i * 0.06}
                className={`rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_14px_42px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm md:rounded-3xl md:bg-white/[0.055] md:p-6 md:shadow-[0_24px_70px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.08)] ${
                  i >= 2 ? 'hidden md:block' : ''
                } ${i === 0 ? 'md:col-span-2' : ''}`.trim()}
              >
                <blockquote className="max-w-[95%] text-sm font-light leading-relaxed text-white/80 md:max-w-none md:text-xl md:leading-snug">
                  «{t.quote}»
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3 text-xs font-light text-white/54 md:mt-5 md:text-sm">
                  <span className="h-px w-6 bg-gold-soft/40 md:w-8 md:bg-gold-soft/45" aria-hidden />
                  {t.author}, {t.city}
                </figcaption>
              </FadeIn>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
