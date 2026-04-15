import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
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
const PrivacyPolicyPage = lazy(() =>
  import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })),
)
const TermsOfUsePage = lazy(() =>
  import('./pages/TermsOfUsePage').then((m) => ({ default: m.TermsOfUsePage })),
)
const AccessibilityStatementPage = lazy(() =>
  import('./pages/AccessibilityStatementPage').then((m) => ({ default: m.AccessibilityStatementPage })),
)

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

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SeoHead />
      <SiteHeader />
      <main className="pt-14 md:pt-[3.25rem]">
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
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            <Route path="/accessibility-statement" element={<AccessibilityStatementPage />} />
          </Routes>
        </Suspense>
      </main>
      <FloatingWhatsApp />
    </BrowserRouter>
  )
}

export default App
