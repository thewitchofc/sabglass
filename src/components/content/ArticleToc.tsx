import { useEffect, useId, useMemo, useState, type MouseEvent } from 'react'
import type { ArticleTocItem } from '../../content/seoContent'

const SCROLL_OFFSET_PX = 120

function scrollToAnchor(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' })
  if (typeof window !== 'undefined' && window.history.replaceState) {
    window.history.replaceState(null, '', `#${id}`)
  }
}

export function ArticleToc({ title, items }: { title: string; items: ArticleTocItem[] }) {
  const titleId = useId()
  const progressId = useId()
  const ids = useMemo(() => items.map((i) => i.id), [items])
  const [activeId, setActiveId] = useState<string | null>(() => items[0]?.id ?? null)
  const [readPct, setReadPct] = useState(0)

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!els.length) return

    const docTop = (el: HTMLElement) => el.getBoundingClientRect().top + window.scrollY

    const recompute = () => {
      const y = window.scrollY + SCROLL_OFFSET_PX
      let current: string | null = ids[0] ?? null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (docTop(el) <= y) current = id
      }
      setActiveId(current)
    }

    const observer = new IntersectionObserver(recompute, {
      root: null,
      rootMargin: '-20% 0px -35% 0px',
      threshold: [0, 0.05, 0.5, 1],
    })
    els.forEach((el) => observer.observe(el))
    recompute()
    window.addEventListener('scroll', recompute, { passive: true })
    window.addEventListener('resize', recompute)
    return () => {
      window.removeEventListener('scroll', recompute)
      window.removeEventListener('resize', recompute)
      observer.disconnect()
    }
  }, [ids])

  useEffect(() => {
    const article = document.querySelector('main article')
    if (!article) return

    let raf = 0
    const tick = () => {
      const rect = article.getBoundingClientRect()
      const h = article.scrollHeight
      if (h <= 0) return
      const docTop = window.scrollY + rect.top
      const scrolled = window.scrollY + window.innerHeight - docTop
      const pct = Math.min(100, Math.max(0, Math.round((scrolled / h) * 100)))
      setReadPct(pct)
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(tick)
    }

    tick()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  const onTocClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    scrollToAnchor(id)
  }

  return (
    <nav
      className="mt-8 rounded-3xl border border-white/10 bg-white/[0.055] px-4 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm sm:py-5 md:px-6 md:py-6"
      aria-labelledby={titleId}
    >
      <p id={titleId} className="text-sm font-medium text-white">
        {title}
      </p>
      <div className="mt-3">
        <div className="h-1 overflow-hidden rounded-full bg-white/10" aria-hidden>
          <div
            className="h-full rounded-full bg-gold-soft/45 transition-[width] duration-300 ease-out motion-reduce:transition-none"
            style={{ width: `${readPct}%` }}
          />
        </div>
        <p id={progressId} className="mt-1.5 text-center text-[11px] font-light tabular-nums text-white/56 md:text-start">
          {readPct}%&nbsp;נקרא
        </p>
      </div>
      <ol
        className="mt-3 list-decimal space-y-2.5 ps-5 text-sm font-light leading-relaxed text-white/66 md:mt-3.5 md:space-y-2 md:text-base"
        aria-describedby={progressId}
      >
        {items.map((item) => {
          const isActive = activeId === item.id
          return (
            <li key={item.id} className="text-pretty ps-1">
              <a
                href={`#${item.id}`}
                onClick={(e) => onTocClick(e, item.id)}
                className={`rounded-sm px-1 py-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 ${
                  isActive
                    ? 'font-medium text-gold-soft decoration-gold-soft/70'
                    : 'text-white/74 decoration-white/25'
                } underline underline-offset-[5px] hover:text-white hover:decoration-white/55`}
                aria-current={isActive ? 'location' : undefined}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
