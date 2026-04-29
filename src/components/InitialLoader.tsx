import { useEffect, useState } from 'react'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false,
  )

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(query.matches)

    update()
    query.addEventListener('change', update)

    return () => query.removeEventListener('change', update)
  }, [])

  return isMobile
}

function useReducedMotionPreference() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false,
  )

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setShouldReduceMotion(query.matches)

    update()
    query.addEventListener('change', update)

    return () => query.removeEventListener('change', update)
  }, [])

  return shouldReduceMotion
}

export function InitialLoader() {
  const shouldReduceMotion = useReducedMotionPreference()
  const isMobile = useIsMobile()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!isVisible || isMobile) return

    let isMounted = true
    const minDelay = shouldReduceMotion ? 160 : 920

    const timer = window.setTimeout(() => {
      if (!isMounted) return
      setIsVisible(false)
    }, minDelay)

    return () => {
      isMounted = false
      window.clearTimeout(timer)
    }
  }, [isMobile, isVisible, shouldReduceMotion])

  if (isMobile) return null

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 z-[120] flex min-h-[100dvh] items-center justify-center overflow-hidden bg-neutral-950 text-white"
      role="status"
      aria-live="polite"
      aria-label="האתר נטען"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(184,163,105,0.22),transparent_32%),radial-gradient(circle_at_18%_78%,rgba(255,255,255,0.08),transparent_28%)]"
        aria-hidden
      />
      <div className="relative flex flex-col items-center px-8 text-center">
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
          <div
            className={`h-full w-20 rounded-full bg-gradient-to-l from-transparent via-gold-soft to-transparent ${
              shouldReduceMotion ? 'opacity-80' : 'animate-[loader-shimmer_1.15s_cubic-bezier(0.22,1,0.36,1)_infinite]'
            }`}
          />
        </div>
      </div>
    </div>
  )
}
