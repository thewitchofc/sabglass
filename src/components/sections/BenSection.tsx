import { premiumCopy } from '../../content/premium'
import { FadeIn } from '../ui/FadeIn'

export function BenSection() {
  const { ben, about } = premiumCopy
  const trustHighlights = [
    { title: 'ליווי אישי', body: ben.personalLine },
    { title: 'אחריות מלאה', body: 'על כל עבודה' },
    { title: 'גימור מדויק', body: 'עד הפרט האחרון' },
  ]

  return (
    <section
      id="about"
      className="relative isolate scroll-mt-20 overflow-hidden border-y border-white/10 bg-neutral-950 text-white md:scroll-mt-[4.5rem]"
      aria-labelledby="ben-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(184,163,105,0.12),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_24%,rgba(255,255,255,0.025)_62%,transparent)] md:bg-[radial-gradient(circle_at_78%_18%,rgba(184,163,105,0.18),transparent_28%),radial-gradient(circle_at_18%_70%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_22%,rgba(255,255,255,0.04)_62%,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/35 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-20 hidden h-72 w-72 rounded-full bg-white/5 blur-3xl md:block"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl py-11 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] md:px-8 md:py-32">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] md:gap-20">
          <FadeIn variant="heading">
            <p className="text-xs font-medium uppercase tracking-[0.36em] text-gold-soft/80">
              Founder & Craft
            </p>
            <h2
              id="ben-heading"
              className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-balance text-4xl font-light tracking-tight text-white max-md:text-[1.65rem] md:text-5xl"
            >
              <span>מי עומד מאחורי</span>
              <img
                src="/sab-glass-logo.svg"
                alt="SAB Glass"
                width={1500}
                height={260}
                className="h-auto w-[min(9.5rem,46vw)] object-contain brightness-0 invert drop-shadow-[0_0_18px_rgba(0,0,0,0.65)] md:w-60"
              />
            </h2>
            <p className="mt-5 text-lg font-light text-white md:mt-6 md:text-2xl">{ben.greeting}</p>
            <p className="mt-2 text-sm font-medium text-gold-soft md:mt-3 md:text-lg">{ben.role}</p>
            <p className="mt-2 max-w-xl text-sm font-light text-white/65 md:text-base">
              {ben.personalLine}
            </p>
            <p className="mt-5 max-w-[95%] text-pretty text-sm font-light leading-relaxed text-white/68 md:hidden">
              {about.introMobile}
            </p>
            <div className="hidden md:block">
              {about.intro.map((paragraph, i) => (
                <p
                  key={`about-intro-${i}`}
                  className={
                    i === 0
                      ? 'mt-7 max-w-[95%] text-pretty text-base font-light leading-relaxed text-white/72 md:max-w-xl md:text-lg'
                      : 'mt-4 max-w-[95%] text-pretty text-base font-light leading-relaxed text-white/72 md:max-w-xl md:text-lg'
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-6 hidden text-sm font-medium text-white md:block md:text-base">{about.servicesHeading}</p>
            <ul className="mt-4 hidden max-w-xl flex-wrap gap-2.5 text-sm font-light text-white/78 md:flex md:text-base">
              {about.services.map((line) => (
                <li
                  key={line}
                  className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm"
                >
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid max-w-xl grid-cols-3 gap-2 md:mt-8 md:gap-3">
              {trustHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:bg-white/[0.05] md:p-4 md:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                >
                  <p className="text-xs font-medium text-white md:text-sm">{item.title}</p>
                  <p className="mt-1 hidden text-xs font-light leading-relaxed text-white/58 md:block">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 hidden max-w-[95%] text-pretty text-base font-light leading-relaxed text-white/72 md:hidden">
              {about.closingMobile}
            </p>
            <p className="mt-5 hidden max-w-[95%] text-pretty text-base font-light leading-relaxed text-white/72 md:block md:max-w-xl md:text-lg">
              {about.closing}
            </p>
            <p className="mt-4 hidden max-w-[95%] text-pretty text-base font-light leading-relaxed text-white/72 md:hidden">
              {ben.bodyMobile}
            </p>
            <div className="hidden md:block">
              {ben.body.map((paragraph, i) => (
                <p
                  key={`ben-${i}`}
                  className="mt-4 max-w-[95%] text-pretty text-base font-light leading-relaxed text-white/72 md:max-w-xl md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn
            variant="image"
            className="relative mx-auto w-full max-w-[19rem] md:my-0 md:max-w-[20rem]"
          >
            <a
              href="https://www.tiktok.com/@sab.glass/video/7454256349329870088"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mx-auto mt-2 flex w-full max-w-[19rem] items-center justify-center gap-2 rounded-full border border-gold-soft/25 bg-white/[0.045] px-4 py-2.5 text-center text-xs font-medium leading-snug text-white/82 shadow-[0_12px_34px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors hover:border-gold-soft/45 hover:bg-white/[0.075] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 md:mt-0 md:text-sm"
              aria-label="צפייה בטיקטוק: בואו להתקין איתי מקלחון הרמוניקה"
            >
              <span className="min-w-0 flex-1 text-center">בואו להתקין איתי מקלחון הרמוניקה</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="currentColor">
                <path d="M16.6 3c.25 2.12 1.46 3.39 3.4 3.52v3.1a7.2 7.2 0 0 1-3.36-.86v6.18c0 3.08-2.06 5.06-5.14 5.06-2.88 0-5.5-1.84-5.5-5.13 0-3.04 2.4-5.17 5.34-5.17.32 0 .62.03.9.08v3.26a2.9 2.9 0 0 0-.98-.17c-1.16 0-2.12.78-2.12 1.94 0 1.29 1.02 1.92 2.04 1.92 1.24 0 2.06-.76 2.06-2.2V3h3.36Z" />
              </svg>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
