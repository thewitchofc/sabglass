import { lazy, Suspense } from 'react'
import { Hero } from '../components/sections/Hero'
import { useDeferredHomeBelowFold } from '../hooks/useDeferredHomeBelowFold'
import { useScrollToHash } from '../hooks/useScrollToHash'

const HomePageBelowFold = lazy(() =>
  import('./HomePageBelowFold').then((m) => ({ default: m.HomePageBelowFold })),
)

export function HomePage() {
  useScrollToHash()
  const loadBelowFold = useDeferredHomeBelowFold()

  return (
    <main className="min-h-screen bg-neutral-950 font-sans text-white antialiased">
      <Hero />
      {loadBelowFold ? (
        <Suspense fallback={null}>
          <HomePageBelowFold />
        </Suspense>
      ) : null}
    </main>
  )
}
