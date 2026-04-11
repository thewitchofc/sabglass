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
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => cancelAnimationFrame(frame)
  }, [location.pathname, location.hash, navigationType])
}
