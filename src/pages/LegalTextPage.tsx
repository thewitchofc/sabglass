import { SiteFooter } from '../components/sections/SiteFooter'

type LegalSection = {
  title: string
  paragraphs: string[]
}

type LegalTextPageProps = {
  title: string
  updatedAt: string
  sections: readonly LegalSection[]
}

export function LegalTextPage({ title, updatedAt, sections }: LegalTextPageProps) {
  return (
    <main className="min-h-dvh bg-white pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] font-sans text-neutral-900 antialiased md:pb-0">
      <article className="mx-auto max-w-3xl pb-8 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pt-24 md:px-8 md:pt-28">
        <h1 className="text-balance text-3xl font-light tracking-tight text-neutral-950 max-md:text-[1.625rem] md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-sm font-light text-neutral-500">עדכון אחרון: {updatedAt}</p>

        {sections.map((section) => (
          <section key={section.title} className="mt-12 border-t border-neutral-200 pt-10 first:mt-10 first:border-t-0 first:pt-0">
            <h2 className="text-2xl font-light tracking-tight text-neutral-950 md:text-3xl">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={`${section.title}-${paragraph}`} className="mt-5 text-pretty text-base font-light leading-relaxed text-neutral-600 md:text-lg">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </article>
      <SiteFooter />
    </main>
  )
}
