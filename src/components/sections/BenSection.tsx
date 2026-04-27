import { useState } from 'react'
import { BEN_PORTRAIT_SRC } from '../../config/site'
import { premiumCopy } from '../../content/premium'
import { FadeIn } from '../ui/FadeIn'

export function BenSection() {
  const { ben, about } = premiumCopy
  const [imgFailed, setImgFailed] = useState(false)
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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(184,163,105,0.18),transparent_28%),radial-gradient(circle_at_18%_70%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_22%,rgba(255,255,255,0.04)_62%,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/35 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl py-16 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] md:px-8 md:py-32">
        <div className="grid items-center gap-12 max-md:gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] md:gap-20">
          <FadeIn variant="heading">
            <p className="text-xs font-medium uppercase tracking-[0.36em] text-gold-soft/80">
              Founder & Craft
            </p>
            <h2
              id="ben-heading"
              className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-balance text-4xl font-light tracking-tight text-white max-md:text-[2rem] md:text-5xl"
            >
              <span>מי עומד מאחורי</span>
              <img
                src="/sab-glass-logo.svg"
                alt="SAB Glass"
                width={1500}
                height={260}
                className="h-auto w-[min(12rem,52vw)] object-contain brightness-0 invert drop-shadow-[0_0_18px_rgba(0,0,0,0.65)] md:w-60"
              />
            </h2>
            <p className="mt-6 text-xl font-light text-white md:text-2xl">{ben.greeting}</p>
            <p className="mt-3 text-base font-medium text-gold-soft md:text-lg">{ben.role}</p>
            <p className="mt-2 max-w-xl text-sm font-light text-white/65 md:text-base">
              {ben.personalLine}
            </p>
            <p className="mt-6 max-w-[95%] text-pretty text-base font-light leading-relaxed text-white/72 md:hidden">
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
            <p className="mt-7 text-sm font-medium text-white md:text-base">{about.servicesHeading}</p>
            <ul className="mt-4 flex max-w-xl flex-wrap gap-2.5 text-sm font-light text-white/78 md:text-base">
              {about.services.map((line) => (
                <li
                  key={line}
                  className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm"
                >
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
              {trustHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                >
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="mt-1 text-xs font-light leading-relaxed text-white/58">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-[95%] text-pretty text-base font-light leading-relaxed text-white/72 md:hidden">
              {about.closingMobile}
            </p>
            <p className="mt-5 hidden max-w-[95%] text-pretty text-base font-light leading-relaxed text-white/72 md:block md:max-w-xl md:text-lg">
              {about.closing}
            </p>
            <p className="mt-4 max-w-[95%] text-pretty text-base font-light leading-relaxed text-white/72 md:hidden">
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
            className="relative mx-auto my-6 w-full max-w-[14rem] max-md:my-8 md:my-0 md:max-w-[18rem]"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-gold/25 via-white/5 to-transparent blur-2xl" aria-hidden />
            <div className="relative rounded-[2rem] border border-white/12 bg-white/[0.06] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-neutral-900">
                {!imgFailed ? (
                  <img
                    src={BEN_PORTRAIT_SRC}
                    srcSet={`${BEN_PORTRAIT_SRC} 480w, ${BEN_PORTRAIT_SRC} 768w, ${BEN_PORTRAIT_SRC} 1200w`}
                    sizes="(max-width: 768px) 14rem, 18rem"
                    alt={ben.imageAlt}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover object-center saturate-[0.92]"
                    loading="lazy"
                    decoding="async"
                    onError={() => setImgFailed(true)}
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-neutral-900 px-6 text-center">
                    <span className="text-4xl font-light tracking-widest text-white/70">SAB</span>
                    <span className="text-xs font-light text-white/50">
                      יש להוסיף תמונה בשם ben.png בתיקיית הקבצים הציבוריים של האתר
                    </span>
                  </div>
                )}
              </div>
              <div className="pointer-events-none absolute inset-3 rounded-[1.45rem] bg-gradient-to-t from-black/28 via-transparent to-white/8" aria-hidden />
            </div>
            <div className="relative mx-auto -mt-5 w-[88%] rounded-2xl border border-white/10 bg-neutral-950/80 px-5 py-4 text-center shadow-[0_18px_48px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <p className="text-sm font-medium text-white">{ben.greeting}</p>
              <p className="mt-1 text-xs font-light text-white/58">{ben.role}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
