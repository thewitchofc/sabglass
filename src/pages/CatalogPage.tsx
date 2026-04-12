import { Gallery } from '../components/sections/Gallery'
import { SiteFooter } from '../components/sections/SiteFooter'
import { useScrollToHash } from '../hooks/useScrollToHash'

export function CatalogPage() {
  useScrollToHash()

  return (
    <main className="min-h-dvh bg-white pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] font-sans text-neutral-900 antialiased md:pb-0">
      <Gallery />
      <SiteFooter />
    </main>
  )
}
