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
    <main className="min-h-dvh bg-white pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] font-sans text-neutral-900 antialiased md:pb-0">
      <Hero />
      {loadBelowFold ? (
        <Suspense fallback={null}>
          <HomePageBelowFold />
        </Suspense>
      ) : null}
    </main>
  )
}
