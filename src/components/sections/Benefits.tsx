import { motion } from 'framer-motion'
import { premiumCopy } from '../../content/premium'
import { SectionBridgeCta } from '../SectionBridgeCta'
import { FadeIn } from '../ui/FadeIn'

export function Benefits() {
  const { benefits } = premiumCopy

  return (
    <section className="bg-neutral-50" aria-labelledby="benefits-heading">
      <div className="mx-auto max-w-6xl py-24 pl-[max(1.25rem,env(safe-area-inset-left,0px))] pr-[max(1.25rem,env(safe-area-inset-right,0px))] md:px-8 md:py-28">
        <FadeIn>
          <h2
            id="benefits-heading"
            className="text-3xl font-light tracking-tight text-neutral-950 max-md:text-[1.625rem] md:text-4xl"
          >
            {benefits.title}
          </h2>
          <p className="mt-4 max-w-[95%] text-sm font-light leading-relaxed text-neutral-500 md:max-w-xl md:text-base md:leading-normal">
            {benefits.lead}
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {benefits.items.map((item, i) => (
            <motion.article
              key={item}
              className="group border border-neutral-200/90 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md sm:p-8"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="text-xs font-medium tabular-nums text-neutral-400 transition-colors group-hover:text-neutral-600">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-4 text-base font-light leading-relaxed text-neutral-800 md:text-lg">
                {item}
              </p>
            </motion.article>
          ))}
        </div>
        <SectionBridgeCta />
      </div>
    </section>
  )
}
