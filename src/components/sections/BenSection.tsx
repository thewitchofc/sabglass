import { useState } from 'react'
import { motion } from 'framer-motion'
import { BEN_PORTRAIT_SRC } from '../../config/site'
import { premiumCopy } from '../../content/premium'
import { FadeIn } from '../ui/FadeIn'

export function BenSection() {
  const { ben, about } = premiumCopy
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-neutral-200/80 bg-neutral-50 md:scroll-mt-[4.5rem]"
      aria-labelledby="ben-heading"
    >
      <div className="mx-auto max-w-6xl py-14 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] md:px-8 md:py-28">
        <div className="grid items-center gap-12 max-md:gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-16">
          <FadeIn>
            <h2
              id="ben-heading"
              className="text-3xl font-light tracking-tight text-neutral-950 max-md:text-[1.625rem] md:text-4xl"
            >
              {ben.title}
            </h2>
            <p className="mt-6 text-xl font-light text-neutral-950 md:text-2xl">{ben.greeting}</p>
            <p className="mt-3 text-base font-medium text-neutral-800 md:text-lg">{ben.role}</p>
            <p className="mt-2 max-w-xl text-sm font-light text-neutral-600 md:text-base">
              {ben.personalLine}
            </p>
            <p className="mt-6 max-w-[95%] text-pretty text-base font-light leading-relaxed text-neutral-600 md:hidden">
              {about.introMobile}
            </p>
            <div className="hidden md:block">
              {about.intro.map((paragraph, i) => (
                <p
                  key={`about-intro-${i}`}
                  className={
                    i === 0
                      ? 'mt-6 max-w-[95%] text-pretty text-base font-light leading-relaxed text-neutral-600 md:max-w-xl md:text-lg'
                      : 'mt-4 max-w-[95%] text-pretty text-base font-light leading-relaxed text-neutral-600 md:max-w-xl md:text-lg'
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-5 text-sm font-medium text-neutral-800 md:text-base">{about.servicesHeading}</p>
            <ul className="mt-3 max-w-xl space-y-2 text-pretty text-base font-light leading-relaxed text-neutral-600 md:text-lg">
              {about.services.map((line) => (
                <li key={line} className="flex gap-2.5">
                  <span
                    className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-[95%] text-pretty text-base font-light leading-relaxed text-neutral-600 md:hidden">
              {about.closingMobile}
            </p>
            <p className="mt-5 hidden max-w-[95%] text-pretty text-base font-light leading-relaxed text-neutral-600 md:block md:max-w-xl md:text-lg">
              {about.closing}
            </p>
            <p className="mt-4 max-w-[95%] text-pretty text-base font-light leading-relaxed text-neutral-600 md:hidden">
              {ben.bodyMobile}
            </p>
            <div className="hidden md:block">
              {ben.body.map((paragraph, i) => (
                <p
                  key={`ben-${i}`}
                  className="mt-4 max-w-[95%] text-pretty text-base font-light leading-relaxed text-neutral-600 md:max-w-xl md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          <motion.div
            className="relative mx-auto my-6 aspect-[4/5] w-full max-w-[12rem] overflow-hidden rounded-[12px] border border-neutral-200/90 bg-neutral-200/40 shadow-sm max-md:my-8 md:my-0 md:max-w-[14rem]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {!imgFailed ? (
              <img
                src={BEN_PORTRAIT_SRC}
                srcSet={`${BEN_PORTRAIT_SRC} 480w, ${BEN_PORTRAIT_SRC} 768w, ${BEN_PORTRAIT_SRC} 1200w`}
                sizes="(max-width: 768px) 12rem, 14rem"
                alt={ben.imageAlt}
                width={800}
                height={800}
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-neutral-100 px-6 text-center">
                <span className="text-4xl font-light tracking-widest text-neutral-500">SAB</span>
                <span className="text-xs font-light text-neutral-600">
                  יש להוסיף תמונה בשם ben.png בתיקיית הקבצים הציבוריים של האתר
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
