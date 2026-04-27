import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const SEEN_KEY = 'sab-glass-initial-loader-seen'

function shouldShowInitialLoader() {
  if (typeof window === 'undefined') return false

  try {
    return window.sessionStorage.getItem(SEEN_KEY) !== '1'
  } catch {
    return true
  }
}

export function InitialLoader() {
  const shouldReduceMotion = useReducedMotion()
  const [isVisible, setIsVisible] = useState(shouldShowInitialLoader)

  useEffect(() => {
    if (!isVisible) return

    let isMounted = true
    const minDelay = shouldReduceMotion ? 180 : 850

    const markAsSeen = () => {
      try {
        window.sessionStorage.setItem(SEEN_KEY, '1')
      } catch {
        // If sessionStorage is unavailable, the loader still closes normally.
      }
    }

    const waitForPageLoad = new Promise<void>((resolve) => {
      if (document.readyState === 'complete') {
        resolve()
        return
      }

      window.addEventListener('load', () => resolve(), { once: true })
    })

    const waitForMinimumDelay = new Promise<void>((resolve) => {
      window.setTimeout(resolve, minDelay)
    })

    void Promise.all([waitForPageLoad, waitForMinimumDelay]).then(() => {
      if (!isMounted) return
      markAsSeen()
      setIsVisible(false)
    })

    return () => {
      isMounted = false
    }
  }, [isVisible, shouldReduceMotion])

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-[120] flex min-h-[100dvh] items-center justify-center overflow-hidden bg-neutral-950 text-white"
          role="status"
          aria-live="polite"
          aria-label="האתר נטען"
          initial={shouldReduceMotion ? false : { opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.015, filter: 'blur(10px)' }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(184,163,105,0.22),transparent_32%),radial-gradient(circle_at_18%_78%,rgba(255,255,255,0.08),transparent_28%)]"
            aria-hidden
          />
          <motion.div
            className="relative flex flex-col items-center px-8 text-center"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18, filter: 'blur(8px)' }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/sab-glass-logo.svg"
              alt="SAB Glass"
              width={1500}
              height={260}
              className="h-auto w-[min(18rem,72vw)] brightness-0 invert drop-shadow-[0_0_28px_rgba(0,0,0,0.82)] md:w-[24rem]"
            />
            <p className="mt-5 text-xs font-light tracking-[0.42em] text-gold-soft/75 md:text-sm">
              LUXURY GLASS SHOWERS
            </p>
            <div className="mt-8 h-px w-48 overflow-hidden rounded-full bg-white/10" aria-hidden>
              <motion.div
                className="h-full w-20 rounded-full bg-gradient-to-l from-transparent via-gold-soft to-transparent"
                initial={shouldReduceMotion ? false : { x: '-110%' }}
                animate={shouldReduceMotion ? { opacity: 0.8 } : { x: '260%' }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 1.15,
                  ease: [0.22, 1, 0.36, 1],
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  repeatDelay: 0.18,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
