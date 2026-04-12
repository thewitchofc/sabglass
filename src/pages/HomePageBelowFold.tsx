import { BenSection } from '../components/sections/BenSection'
import { Benefits } from '../components/sections/Benefits'
import { HowItWorks } from '../components/sections/HowItWorks'
import { MidCta } from '../components/sections/MidCta'
import { PhotoLeadSection } from '../components/sections/PhotoLeadSection'
import { SiteFooter } from '../components/sections/SiteFooter'
import { Trust } from '../components/sections/Trust'

/** כל מה שמתחת ל־Hero בדף הבית — נטען בנפרד כדי לא לעכב את מסך הפתיחה */
export function HomePageBelowFold() {
  return (
    <>
      <BenSection />
      <Benefits />
      <PhotoLeadSection />
      <HowItWorks />
      <Trust />
      <MidCta />
      <SiteFooter />
    </>
  )
}
