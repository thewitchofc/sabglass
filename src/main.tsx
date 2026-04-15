import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

if (typeof window !== 'undefined') {
  let started = false
  let idleId: number | undefined

  const startWebVitals = () => {
    if (started) return
    started = true
    window.removeEventListener('scroll', startWebVitals)
    window.removeEventListener('pointerdown', startWebVitals)
    window.removeEventListener('keydown', startWebVitals)
    window.removeEventListener('touchstart', startWebVitals)
    if (idleId !== undefined && typeof window.cancelIdleCallback === 'function') {
      window.cancelIdleCallback(idleId)
    }
    void import('./analytics/webVitals').then((m) => m.initWebVitals())
  }

  window.addEventListener('scroll', startWebVitals, { passive: true, once: true })
  window.addEventListener('pointerdown', startWebVitals, { once: true })
  window.addEventListener('keydown', startWebVitals, { once: true })
  window.addEventListener('touchstart', startWebVitals, { once: true })

  if (typeof window.requestIdleCallback === 'function') {
    idleId = window.requestIdleCallback(startWebVitals, { timeout: 5000 })
  } else {
    window.setTimeout(startWebVitals, 5000)
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
