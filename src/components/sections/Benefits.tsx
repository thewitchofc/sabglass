import { premiumCopy } from '../../content/premium'
import { FadeIn } from '../ui/FadeIn'

export function Benefits() {
  const { benefits } = premiumCopy

  return (
    <section
      className="relative isolate overflow-hidden border-b border-white/10 bg-neutral-950 text-white"
      aria-labelledby="benefits-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_72%,rgba(184,163,105,0.1),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%)] md:bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.08),transparent_26%),radial-gradient(circle_at_82%_72%,rgba(184,163,105,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_28%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/25 to-transparent" />

      <div className="relative mx-auto max-w-6xl py-11 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] md:px-8 md:py-28">
        <div className="grid gap-7 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] md:gap-14">
          <FadeIn variant="heading">
            <p className="text-xs font-medium uppercase tracking-[0.36em] text-gold-soft/75">
              Why SAB
            </p>
            <h2
              id="benefits-heading"
              className="mt-4 text-balance text-4xl font-light tracking-tight text-white max-md:text-[1.75rem] md:text-5xl"
            >
              {benefits.title}
            </h2>
            <p className="mt-4 max-w-[95%] text-sm font-light leading-relaxed text-white/64 md:hidden">
              {benefits.leadMobile}
            </p>
            <p className="mt-5 hidden max-w-[95%] text-base font-light leading-relaxed text-white/68 md:block md:max-w-sm">
              {benefits.lead}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:gap-4">
            {benefits.items.map((item, i) => (
              <FadeIn
                key={item}
                variant="card"
                delay={i * 0.06}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_14px_42px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold-soft/30 hover:bg-white/[0.06] sm:p-7 md:rounded-3xl md:bg-white/[0.055] md:p-6 md:shadow-[0_24px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] ${
                  i === 0 ? 'sm:col-span-2 md:col-span-1' : ''
                }`}
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <span className="text-[11px] font-medium tabular-nums tracking-[0.2em] text-gold-soft/75 md:text-xs md:tracking-[0.22em]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 text-pretty text-sm font-light leading-relaxed text-white/82 md:mt-5 md:text-lg">
                  {item}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
