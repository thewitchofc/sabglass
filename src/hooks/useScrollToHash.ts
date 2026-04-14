import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

/**
 * גלילה חלקה לעוגן (#) רק בניווט יזום (PUSH / REPLACE).
 * ב־POP (רענון, כניסה ישירה ל־URL עם hash, חזרה בדפדפן) לא גוללים אוטומטית לעוגן.
 */
export function useScrollToHash() {
  const location = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if (!location.hash) return
    if (navigationType === 'POP') return

    const id = location.hash.slice(1)
    let rafId = 0
    let tries = 0
    const maxTries = 45

    const tryScroll = () => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      if (tries >= maxTries) return
      tries += 1
      rafId = requestAnimationFrame(tryScroll)
    }

    rafId = requestAnimationFrame(tryScroll)
    return () => cancelAnimationFrame(rafId)
  }, [location.pathname, location.hash, navigationType])
}
