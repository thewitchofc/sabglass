import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

/** עוגנים שב־Hero בלבד — שאר ה־hash דורש את מקטעי דף הבית מתחת לקיפול */
function needsBelowFoldForHash(hash: string): boolean {
  if (!hash || hash === '#') return false
  const id = decodeURIComponent(hash.slice(1))
  if (!id) return false
  if (id === 'home' || id === 'hero-heading') return false
  return true
}

/**
 * דוחה את טעינת ה־JS של מקטעי דף הבית מתחת ל־Hero עד גלילה, אינטראקציה או timeout.
 * ללא שינוי לוגיקת המקטעים — רק מתי הם נטענים ל־DOM.
 */
export function useDeferredHomeBelowFold() {
  const { hash } = useLocation()
  const [ready, setReady] = useState(() => needsBelowFoldForHash(hash))

  useEffect(() => {
    if (needsBelowFoldForHash(hash)) setReady(true)
  }, [hash])

  useEffect(() => {
    if (ready) return

    let cancelled = false
    const load = () => {
      if (cancelled) return
      setReady(true)
    }

    const scrollThreshold = () => Math.max(80, Math.round(window.innerHeight * 0.12))

    const onScroll = () => {
      if (window.scrollY > scrollThreshold()) load()
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    const opts: AddEventListenerOptions = { once: true, capture: true, passive: true }
    window.addEventListener('pointerdown', load, opts)
    window.addEventListener('touchstart', load, opts)
    window.addEventListener('keydown', load, opts)
    window.addEventListener('wheel', load, opts)

    const fallbackMs = 4500
    const fallbackId = window.setTimeout(load, fallbackMs)

    let idleId: number | undefined
    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(() => load(), { timeout: fallbackMs })
    }

    return () => {
      cancelled = true
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('pointerdown', load, { capture: true } as AddEventListenerOptions)
      window.removeEventListener('touchstart', load, { capture: true } as AddEventListenerOptions)
      window.removeEventListener('keydown', load, { capture: true } as AddEventListenerOptions)
      window.removeEventListener('wheel', load, { capture: true } as AddEventListenerOptions)
      window.clearTimeout(fallbackId)
      if (idleId !== undefined && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId)
      }
    }
  }, [ready])

  return ready
}
