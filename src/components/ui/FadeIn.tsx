import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

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
    hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  heading: {
    hidden: { opacity: 0, y: 18, filter: 'blur(5px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  card: {
    hidden: { opacity: 0, y: 34, scale: 0.985, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
  },
  image: {
    hidden: { opacity: 0, y: 24, scale: 1.025, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
  },
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
  const sharedProps = {
    className,
    initial: shouldReduceMotion ? false : 'hidden',
    whileInView: shouldReduceMotion ? undefined : 'visible',
    viewport: { once: true, margin: '-72px 0px -48px' },
    variants: revealVariants[variant],
    transition: {
      duration: 0.72,
      delay,
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
