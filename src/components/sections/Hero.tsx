import { Link } from 'react-router-dom'
import { WhatsAppLink } from '../ui/WhatsAppLink'
import { premiumCopy } from '../../content/premium'
import { WHATSAPP_PHOTO_MESSAGE } from '../../config/site'

export function Hero() {
  const { hero, brand, primaryCta, a11y } = premiumCopy

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
          src="/hero-bg-1200.webp"
          srcSet="/hero-bg-480.webp 480w, /hero-bg-768.webp 768w, /hero-bg-1200.webp 1200w"
          sizes="100vw"
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          loading="eager"
          className="h-full w-full object-cover object-[76%_40%] md:object-center"
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
        className="pointer-events-none absolute inset-x-0 z-[8] hidden text-center md:block"
        style={{ top: 'calc(env(safe-area-inset-top, 0px) + 3.75rem)' }}
        aria-hidden
      >
        <div className="mx-auto flex max-w-6xl justify-center px-8">
          <div className="[text-rendering:geometricPrecision]">
            <div className="flex flex-col items-center gap-2.5 text-white">
              <span className="text-[clamp(1.75rem,2.75vw,2.625rem)] font-bold leading-none tracking-[0.18em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] antialiased">
                {brand.name}
              </span>
              <span className="max-w-[22rem] text-pretty text-[0.8125rem] font-medium leading-snug text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] antialiased sm:text-sm">
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
            <span className="text-[clamp(1.5rem,6.5vw,2rem)] font-bold leading-none tracking-[0.18em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
              {brand.name}
            </span>
            <span className="max-w-[17rem] text-pretty text-xs font-medium leading-snug text-white/88 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
              {brand.tagline}
            </span>
          </Link>
        </div>
        <h1
          id="hero-heading"
          className="sr-only max-w-[95%] text-balance text-3xl font-light leading-[1.15] tracking-tight text-white md:not-sr-only md:max-w-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          {hero.titleLine1}
        </h1>

        <div
          className="mt-4 max-w-[95%] space-y-1.5 md:hidden"
        >
          <p className="text-pretty text-[0.8125rem] font-light leading-relaxed text-white">
            {hero.leadMobileLine1}
          </p>
          <p className="text-pretty text-[11px] font-light leading-relaxed text-white">{hero.leadMobileLine2}</p>
        </div>

        <ul
          className="mt-6 max-w-[min(17.5rem,calc(100vw-2rem))] space-y-1 text-start md:hidden"
          aria-label="למה אפשר לסמוך"
        >
          {hero.trustMicroMobile.map((line) => (
            <li
              key={line}
              className="flex items-start gap-2 text-[10.5px] font-light leading-snug text-white"
            >
              <span className="mt-px shrink-0 text-white/55" aria-hidden>
                ✔
              </span>
              <span className="text-pretty">{line}</span>
            </li>
          ))}
        </ul>

        <p
          className="mt-5 hidden max-w-[95%] text-sm font-light leading-relaxed tracking-wide text-white md:block md:max-w-2xl md:text-base md:leading-normal"
        >
          {hero.differentiators}
        </p>

        <p
          className="mt-4 hidden max-w-[95%] text-xs font-light leading-relaxed text-white md:block md:max-w-2xl md:text-sm"
        >
          {hero.scarcity}
        </p>

        <p
          className="mt-6 hidden max-w-[95%] text-sm font-light leading-relaxed text-white md:block md:max-w-xl md:text-base md:leading-normal"
        >
          {hero.outcomeHint}
        </p>

        <WhatsAppLink
          variant="whatsapp"
          size="lg"
          message={WHATSAPP_PHOTO_MESSAGE}
          ariaLabel={a11y.whatsappSendPhotoQuote}
          trackingLabel="hero"
          className="mt-6 w-fit"
        >
          {primaryCta}
        </WhatsAppLink>

        <p
          className="mt-3 hidden max-w-[95%] text-xs font-light leading-relaxed text-white md:block md:max-w-xl md:text-sm"
        >
          {hero.serviceReach}
        </p>
          </div>
        </div>
      </div>
    </section>
  )
}
