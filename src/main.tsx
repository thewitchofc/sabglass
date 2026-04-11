import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initWebVitals } from './analytics/webVitals'
import './index.css'
import App from './App.tsx'

if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

initWebVitals()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
