import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { InitialLoader } from './components/InitialLoader'
import { ScrollToTop } from './components/ScrollToTop'
import { SeoHead } from './components/SeoHead'
import { SiteHeader } from './components/SiteHeader'
import { HomePage } from './pages/HomePage'

const CatalogPage = lazy(() =>
  import('./pages/CatalogPage').then((m) => ({ default: m.CatalogPage })),
)
const ShowerGlassServicePage = lazy(() =>
  import('./pages/ShowerGlassServicePage').then((m) => ({ default: m.ShowerGlassServicePage })),
)
const ArticlesIndexPage = lazy(() =>
  import('./pages/ArticlesIndexPage').then((m) => ({ default: m.ArticlesIndexPage })),
)
const ArticlePage = lazy(() =>
  import('./pages/ArticlePage').then((m) => ({ default: m.ArticlePage })),
)
const MiklahonGuidePage = lazy(() =>
  import('./pages/MiklahonGuidePage').then((m) => ({ default: m.MiklahonGuidePage })),
)
const MiklahonCenterIsraelPage = lazy(() =>
  import('./pages/MiklahonCenterIsraelPage').then((m) => ({ default: m.MiklahonCenterIsraelPage })),
)
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })),
)
const PrivacyPolicyPage = lazy(() =>
  import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })),
)
const TermsOfUsePage = lazy(() =>
  import('./pages/TermsOfUsePage').then((m) => ({ default: m.TermsOfUsePage })),
)
const AccessibilityStatementPage = lazy(() =>
  import('./pages/AccessibilityStatementPage').then((m) => ({ default: m.AccessibilityStatementPage })),
)
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
)

function AnimatedRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/shower-glass-custom" element={<ShowerGlassServicePage />} />
        <Route path="/articles" element={<ArticlesIndexPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/miklahon-guide" element={<MiklahonGuidePage />} />
        <Route path="/miklahon-center-israel" element={<MiklahonCenterIsraelPage />} />
        <Route path="/miklahon-rishon-lezion" element={<Navigate to="/miklahon-center-israel" replace />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        <Route path="/accessibility-statement" element={<AccessibilityStatementPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

function App() {
  useEffect(() => {
    document.getElementById('static-hero-lcp-fallback')?.remove()
  }, [])

  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setViewportHeight()
    window.addEventListener('resize', setViewportHeight)

    return () => {
      window.removeEventListener('resize', setViewportHeight)
    }
  }, [])

  useEffect(() => {
    const isInsideScrollableElement = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return false
      let el: Element | null = target
      while (el && el !== document.body) {
        const style = window.getComputedStyle(el)
        const overflowY = style.overflowY
        if ((overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight) return true
        el = el.parentElement
      }
      return false
    }

    const hasBlockingOverlayOpen = () => {
      const modalOpen = Boolean(document.querySelector('[role="dialog"][aria-modal="true"]'))
      const mobileMenuOpen = Boolean(document.getElementById('mobile-nav'))
      return modalOpen || mobileMenuOpen
    }

    const handleWheel = (e: WheelEvent) => {
      if (e.defaultPrevented) return
      if (hasBlockingOverlayOpen()) return
      if (isInsideScrollableElement(e.target)) return
      window.scrollBy({ top: e.deltaY, behavior: 'auto' })
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SeoHead />
      <a href="#main-content" className="sr-only focus:not-sr-only">
        דלג לתוכן הראשי
      </a>
      <SiteHeader />
      <main id="main-content">
        <AnimatedRoutes />
      </main>
      <FloatingWhatsApp />
      <InitialLoader />
    </BrowserRouter>
  )
}

export default App
