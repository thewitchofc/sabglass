import { Link } from 'react-router-dom'
import { premiumCopy } from '../../content/premium'

export function Hero() {
  const { hero, brand } = premiumCopy

  return (
    <section
      id="home"
      className="relative flex flex-none flex-col justify-end scroll-mt-0 antialiased"
      style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
      aria-labelledby="hero-heading"
    >
      {/* רקע: במובייל מזיזים מיקוד לצד המקלחון (ימין בתמונה); בדסקטופ מרכז */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-neutral-900" aria-hidden>
        <img
          src="/hero-luxury-shower.png"
          alt=""
          width={1024}
          height={528}
          fetchPriority="high"
          decoding="async"
          loading="eager"
          className="h-full w-full object-cover object-center"
        />
      </div>
      {/* קריאות טקסט לבן ב־RTL: כהה מהצד שבו הטקסט (התחלה = ימין) */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/55 via-black/25 to-transparent md:hidden"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-black/10" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(58dvh,480px)] bg-gradient-to-t from-black/68 via-black/28 to-transparent"
        aria-hidden
      />

      {/*
        דסקטופ: טקסט וקטורי מעל האזור שבו המותג מוטמע בצילום — חדות ואנטי־אליאסינג כמו במובייל.
        המותג האינטראקטיבי נשאר בכותרת; כאן רק כיסוי ויזואלי (aria-hidden).
      */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 z-[8] hidden w-full -translate-x-1/2 text-center md:block"
        aria-hidden
      >
        <div className="flex w-full justify-center px-8">
          <div className="[text-rendering:geometricPrecision]">
            <div className="flex flex-col items-center gap-4 text-white">
              <img
                src="/sab-glass-logo.svg"
                alt=""
                width={1500}
                height={260}
                className="h-auto w-[clamp(24rem,52vw,46rem)] object-contain [filter:brightness(0)_invert(1)_drop-shadow(0_0_10px_rgba(0,0,0,0.95))_drop-shadow(0_0_24px_rgba(0,0,0,0.88))_drop-shadow(0_0_48px_rgba(0,0,0,0.72))]"
              />
              <span className="max-w-[24rem] text-pretty text-sm font-medium leading-snug tracking-[0.03em] text-white/92 [text-shadow:0_0_8px_rgba(0,0,0,0.9),0_0_18px_rgba(0,0,0,0.68),0_2px_10px_rgba(0,0,0,0.72)] antialiased">
                {brand.tagline}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* justify-start ב־RTL = יישור לימין המסך */}
      <div className="relative z-10 pt-14 md:pt-[3.25rem]">
        <div className="flex w-full justify-start pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] pt-10 max-md:mb-6 md:mb-0 md:px-8 md:pb-24 md:pt-48">
          <div className="w-full max-w-6xl">
        {/* מובייל: לוגו ממורכז, טיפוגרפיה בולטת וקריאה על רקע התמונה */}
        <div className="mb-4 flex w-full flex-col items-center justify-center text-center [text-rendering:geometricPrecision] md:hidden">
          <Link
            to="/"
            aria-label={`${brand.name} — מעבר לראש דף הבית`}
            className="mx-auto flex w-full max-w-[min(22rem,calc(100vw-2rem))] flex-col items-center gap-2.5 rounded-lg px-4 py-2.5 text-white transition-[opacity,transform] duration-300 hover:opacity-90 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            <span className="font-['Marcellus'] text-[clamp(1.5rem,6.5vw,2rem)] font-normal leading-none tracking-[0.12em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
              {brand.name}
            </span>
            <span className="max-w-[17rem] text-pretty text-xs font-medium leading-snug text-white/88 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
              {brand.tagline}
            </span>
          </Link>
        </div>
        <h1
          id="hero-heading"
          className="sr-only"
        >
          {hero.titleLine1}
        </h1>

          </div>
        </div>
      </div>
    </section>
  )
}
