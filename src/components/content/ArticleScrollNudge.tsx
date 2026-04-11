import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { WHATSAPP_PHOTO_MESSAGE, WHATSAPP_CONSULT_MESSAGE } from '../../config/site'
import { premiumCopy } from '../../content/premium'
import { WhatsAppLink } from '../ui/WhatsAppLink'

type Msg = 'photo' | 'consult'

function WaGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function ArticleScrollNudge({
  label,
  message,
  microLine,
}: {
  label: string
  message: Msg
  microLine?: string
}) {
  const articleRef = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const reduceMotion = useReducedMotion()

  const { a11y } = premiumCopy
  const m = message === 'consult' ? WHATSAPP_CONSULT_MESSAGE : WHATSAPP_PHOTO_MESSAGE
  const aria = message === 'consult' ? a11y.whatsappConsult : a11y.whatsappSendPhotoQuote

  const showPanel = visible && !dismissed

  useEffect(() => {
    if (typeof document === 'undefined') return
    articleRef.current = document.querySelector('article')
    const article = articleRef.current
    if (!article) return

    let raf = 0
    const check = () => {
      const rect = article.getBoundingClientRect()
      const h = article.scrollHeight
      if (h <= 0) return
      const docTop = window.scrollY + rect.top
      const scrolledPastStart = window.scrollY + window.innerHeight - docTop
      const ratio = scrolledPastStart / h
      setVisible(ratio >= 0.5 && ratio < 0.98)
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(check)
    }

    check()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <AnimatePresence>
      {showPanel ? (
        <motion.div
          key="article-scroll-nudge"
          role="status"
          className="pointer-events-none fixed inset-x-0 z-40 flex justify-center pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] max-md:bottom-[calc(9.5rem+env(safe-area-inset-bottom,0px))] max-md:pb-1 md:bottom-0 md:justify-end md:px-6 md:pb-6"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-auto flex max-w-md flex-col gap-2 rounded-sm border border-neutral-200 bg-white/95 p-3 shadow-lg ring-1 ring-black/5 backdrop-blur-sm md:max-w-sm">
            <div className="flex items-start justify-between gap-2">
              <WhatsAppLink
                variant="whatsapp"
                size="sm"
                message={m}
                ariaLabel={aria}
                trackingLabel="article"
                className="min-w-0 shrink !px-4 !py-2.5 text-xs sm:text-sm"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <WaGlyph className="size-4 shrink-0 text-white opacity-95" />
                  {label}
                </span>
              </WhatsAppLink>
              <button
                type="button"
                onClick={() => setDismissed(true)}
                className="shrink-0 rounded-sm px-2 py-1 text-xs font-light text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2"
                aria-label="סגירת ההצעה הצפה"
              >
                סגירה
              </button>
            </div>
            {microLine ? (
              <p className="text-center text-[11px] font-light text-neutral-500 md:text-start">{microLine}</p>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
