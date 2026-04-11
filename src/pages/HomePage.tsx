import { BenSection } from '../components/sections/BenSection'
import { Benefits } from '../components/sections/Benefits'
import { CtaStrip } from '../components/sections/CtaStrip'
import { Hero } from '../components/sections/Hero'
import { HowItWorks } from '../components/sections/HowItWorks'
import { MidCta } from '../components/sections/MidCta'
import { PhotoLeadSection } from '../components/sections/PhotoLeadSection'
import { SiteFooter } from '../components/sections/SiteFooter'
import { Trust } from '../components/sections/Trust'
import { useScrollToHash } from '../hooks/useScrollToHash'

export function HomePage() {
  useScrollToHash()

  return (
    <main className="min-h-dvh bg-white pb-[calc(10rem+env(safe-area-inset-bottom,0px))] font-sans text-neutral-900 antialiased md:pb-0">
      <Hero />
      <BenSection />
      <Benefits />
      <CtaStrip />
      <PhotoLeadSection />
      <HowItWorks />
      <Trust />
      <MidCta />
      <SiteFooter />
    </main>
  )
}
