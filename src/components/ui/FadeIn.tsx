import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import { useEffect, useState, type ReactNode } from 'react'

type RevealVariant = 'default' | 'heading' | 'card' | 'image'

type Props = {
  children: ReactNode
  as?: 'div' | 'li' | 'figure'
  className?: string
  delay?: number
  variant?: RevealVariant
} & Omit<HTMLMotionProps<'div'>, 'children' | 'initial' | 'whileInView' | 'viewport' | 'variants'>

const revealVariants: Record<RevealVariant, { hidden: Record<string, number | string>, visible: Record<string, number | string> }> = {
  default: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  heading: {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  },
  card: {
    hidden: { opacity: 0, y: 34, scale: 0.985 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  image: {
    hidden: { opacity: 0, y: 24, scale: 1.025 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
}

const mobileRevealVariants: typeof revealVariants = {
  default: {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
  },
  heading: {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  },
  card: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  },
  image: {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  },
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches,
  )

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)')
    const sync = () => setIsMobile(query.matches)

    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  return isMobile
}

export function FadeIn({
  children,
  as = 'div',
  className = '',
  delay = 0,
  variant = 'default',
  ...motionProps
}: Props) {
  const shouldReduceMotion = useReducedMotion()
  const isMobile = useIsMobile()
  const activeVariants = isMobile ? mobileRevealVariants : revealVariants
  const sharedProps = {
    className,
    initial: shouldReduceMotion ? false : 'hidden',
    whileInView: shouldReduceMotion ? undefined : 'visible',
    viewport: { once: true, margin: '-72px 0px -48px' },
    variants: activeVariants[variant],
    transition: {
      duration: isMobile ? 0.44 : 0.72,
      delay: isMobile ? Math.min(delay, 0.06) : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }

  if (as === 'li') {
    return (
      <motion.li {...sharedProps} {...(motionProps as HTMLMotionProps<'li'>)}>
        {children}
      </motion.li>
    )
  }

  if (as === 'figure') {
    return (
      <motion.figure {...sharedProps} {...(motionProps as HTMLMotionProps<'figure'>)}>
        {children}
      </motion.figure>
    )
  }

  return (
    <motion.div {...sharedProps} {...motionProps}>
      {children}
    </motion.div>
  )
}
