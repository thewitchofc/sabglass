import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'
import type { GalleryItem } from '../../data/catalog'

type Props = {
  items: GalleryItem[]
  index: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function GalleryLightbox({ items, index, onClose, onPrev, onNext }: Props) {
  const open = index !== null
  const item = open ? items[index] : null
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const previousFocusedRef = useRef<HTMLElement | null>(null)

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [open, onClose, onPrev, onNext],
  )

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  useEffect(() => {
    if (open) {
      previousFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      const focusTimer = window.setTimeout(() => {
        const dialog = dialogRef.current
        if (!dialog) return
        const firstFocusable = dialog.querySelector<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        )
        ;(firstFocusable ?? dialog).focus()
      }, 0)
      return () => {
        window.clearTimeout(focusTimer)
        document.body.style.overflow = prev
        previousFocusedRef.current?.focus()
      }
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const dialog = dialogRef.current
      if (!dialog) return

      const focusables = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute('disabled') && el.tabIndex !== -1)

      if (focusables.length === 0) {
        e.preventDefault()
        dialog.focus()
        return
      }

      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      } else if (e.shiftKey && (active === first || active === dialog)) {
        e.preventDefault()
        last.focus()
      }
    }

    window.addEventListener('keydown', trapFocus)
    return () => window.removeEventListener('keydown', trapFocus)
  }, [open])

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          ref={dialogRef}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-3 pt-[max(0.75rem,env(safe-area-inset-top,0px))] pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] pl-[max(0.75rem,env(safe-area-inset-left,0px))] pr-[max(0.75rem,env(safe-area-inset-right,0px))] backdrop-blur-sm sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`תצוגת גלריה מוגדלת — ${item.alt}`}
          tabIndex={-1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
        >
          <motion.button
            type="button"
            className="absolute z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/80 end-[max(1rem,env(safe-area-inset-right,0px))] top-[max(1rem,env(safe-area-inset-top,0px))]"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            aria-label="סגירת חלון תצוגת התמונות המוגדלת"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-xl leading-none">×</span>
          </motion.button>

          <button
            type="button"
            className="absolute start-[max(0.5rem,env(safe-area-inset-left,0px))] top-1/2 z-[110] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/80 md:h-auto md:w-auto md:p-3"
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            aria-label="הצגת התמונה הקודמת בגלריה"
          >
            <Chevron dir="prev" />
          </button>
          <button
            type="button"
            className="absolute end-[max(0.5rem,env(safe-area-inset-right,0px))] top-1/2 z-[110] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/80 md:h-auto md:w-auto md:p-3"
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            aria-label="הצגת התמונה הבאה בגלריה"
          >
            <Chevron dir="next" />
          </button>

          <motion.figure
            key={item.src}
            className="relative z-10 max-h-[85dvh] max-w-5xl"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.src}
              srcSet={`${item.src} 480w, ${item.src} 768w, ${item.src} 1200w`}
              sizes="90vw"
              alt={item.alt}
              width={1200}
              height={1600}
              loading="lazy"
              decoding="async"
              className="max-h-[80dvh] w-auto max-w-full rounded-sm object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm font-light text-neutral-300">
              {item.category}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Chevron({ dir }: { dir: 'prev' | 'next' }) {
  return (
    <svg
      className={`h-5 w-5 ${dir === 'next' ? '' : 'rotate-180'}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
