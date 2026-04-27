import { SiteFooter } from '../components/sections/SiteFooter'
import { FadeIn } from '../components/ui/FadeIn'

type LegalSection = {
  title: string
  paragraphs: readonly string[]
}

type LegalTextPageProps = {
  title: string
  updatedAt: string
  sections: readonly LegalSection[]
}

export function LegalTextPage({ title, updatedAt, sections }: LegalTextPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] font-sans text-white antialiased md:pb-0">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(184,163,105,0.12),transparent_30%),radial-gradient(circle_at_82%_30%,rgba(255,255,255,0.06),transparent_28%)]"
        aria-hidden
      />
      <article className="relative mx-auto max-w-3xl pb-8 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pt-24 md:px-8 md:pt-28">
        <FadeIn variant="heading">
        <header className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm md:p-8">
          <h1 className="text-balance text-3xl font-light tracking-tight text-white max-md:text-[1.625rem] md:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-sm font-light text-white/52">עדכון אחרון: {updatedAt}</p>
        </header>
        </FadeIn>

        {sections.map((section, idx) => (
          <FadeIn key={section.title} variant="card" delay={Math.min(idx, 3) * 0.03}>
          <section key={section.title} className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm md:p-8">
            <h2 className="text-2xl font-light tracking-tight text-white md:text-3xl">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={`${section.title}-${paragraph}`} className="mt-5 text-pretty text-base font-light leading-relaxed text-white/64 md:text-lg">
                {paragraph}
              </p>
            ))}
          </section>
          </FadeIn>
        ))}
      </article>
      <SiteFooter />
    </main>
  )
}
