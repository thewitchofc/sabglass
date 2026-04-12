import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { premiumCopy } from '../../content/premium'
import { heroBackgroundImage } from '../../data/catalog'

export function Hero() {
  const { hero, brand } = premiumCopy

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden scroll-mt-0 antialiased"
      aria-labelledby="hero-heading"
    >
      {/* רקע: במובייל מזיזים מיקוד לצד המקלחון (ימין בתמונה); בדסקטופ מרכז */}
      <div className="absolute inset-0 overflow-hidden bg-neutral-900" aria-hidden>
        <img
          src={heroBackgroundImage}
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[76%_40%] md:object-center"
        />
      </div>
      {/* קריאות טקסט לבן ב־RTL: כהה מהצד שבו הטקסט (התחלה = ימין) */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/45 via-black/15 to-transparent md:hidden"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/10" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(58dvh,480px)] bg-gradient-to-t from-black/68 via-black/28 to-transparent"
        aria-hidden
      />

      {/* justify-start ב־RTL = יישור לימין המסך */}
      <div className="relative z-10 flex w-full justify-start pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] pt-10 max-md:mb-6 md:mb-0 md:px-8 md:pb-24 md:pt-48">
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
        <motion.h1
          id="hero-heading"
          className="hidden max-w-[95%] text-balance text-3xl font-light leading-[1.15] tracking-tight text-white md:block md:max-w-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.titleLine1}
        </motion.h1>

        <motion.div
          className="mt-4 max-w-[95%] space-y-1.5 md:hidden"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-pretty text-[0.8125rem] font-light leading-relaxed text-white/90">
            {hero.leadMobileLine1}
          </p>
          <p className="text-pretty text-[11px] font-light leading-relaxed text-white/78">{hero.leadMobileLine2}</p>
        </motion.div>

        <motion.ul
          className="mt-6 max-w-[min(17.5rem,calc(100vw-2rem))] space-y-1 text-start md:hidden"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          aria-label="למה אפשר לסמוך"
        >
          {hero.trustMicroMobile.map((line) => (
            <li
              key={line}
              className="flex items-start gap-2 text-[10.5px] font-light leading-snug text-white/75"
            >
              <span className="mt-px shrink-0 text-white/55" aria-hidden>
                ✔
              </span>
              <span className="text-pretty">{line}</span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          className="mt-5 hidden max-w-[95%] text-sm font-light leading-relaxed tracking-wide text-white/90 md:block md:max-w-2xl md:text-base md:leading-normal"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.differentiators}
        </motion.p>

        <motion.p
          className="mt-4 hidden max-w-[95%] text-xs font-light leading-relaxed text-white/90 md:block md:max-w-2xl md:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {hero.scarcity}
        </motion.p>

        <motion.p
          className="mt-6 hidden max-w-[95%] text-sm font-light leading-relaxed text-white/90 md:block md:max-w-xl md:text-base md:leading-normal"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.outcomeHint}
        </motion.p>

        <motion.p
          className="mt-3 hidden max-w-[95%] text-xs font-light leading-relaxed text-white/90 md:block md:max-w-xl md:text-sm"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.serviceReach}
        </motion.p>
        </div>
      </div>
    </section>
  )
}
