import { lazy, Suspense, useEffect, useRef, useState, type ComponentType } from 'react'
import { BenSection } from '../components/sections/BenSection'
import { Benefits } from '../components/sections/Benefits'
import { HowItWorks } from '../components/sections/HowItWorks'
import { PhotoLeadSection } from '../components/sections/PhotoLeadSection'
import { SiteFooter } from '../components/sections/SiteFooter'
import { Trust } from '../components/sections/Trust'

const MidCta = lazy(() =>
  import('../components/sections/MidCta').then((m) => ({ default: m.MidCta })),
)

function DeferredSection({ Component }: { Component: ComponentType }) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const anchorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (shouldLoad) return
    const node = anchorRef.current
    if (!node || typeof window === 'undefined') return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setShouldLoad(true)
        observer.disconnect()
      },
      { rootMargin: '800px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [shouldLoad])

  return (
    <div ref={anchorRef}>
      {shouldLoad ? (
        <Suspense fallback={null}>
          <Component />
        </Suspense>
      ) : null}
    </div>
  )
}

/** כל מה שמתחת ל־Hero בדף הבית — נטען בנפרד כדי לא לעכב את מסך הפתיחה */
export function HomePageBelowFold() {
  return (
    <>
      <BenSection />
      <Benefits />
      <PhotoLeadSection />
      <HowItWorks />
      <Trust />
      <DeferredSection Component={MidCta} />
      <SiteFooter />
    </>
  )
}
