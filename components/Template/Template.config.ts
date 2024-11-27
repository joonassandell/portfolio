import { TRANS_TEMPLATE } from '@/lib/config'
import { type Variants } from 'motion/react'

export const VARIANTS_WITH_TRANSITION: Readonly<Variants> = {
  animate: {
    transition: TRANS_TEMPLATE,
    y: 0,
  },
  exit: {
    transition: TRANS_TEMPLATE,
    y: '-50svh',
  },
  initial: {
    y: '100svh',
  },
}

export const VARIANTS_WITHOUT_TRANSITION: Readonly<Variants> = {
  animate: {
    transition: {
      duration: 0,
      ease: 'linear',
    },
    y: 0,
  },
  exit: {
    transition: {
      duration: 0,
      ease: 'linear',
    },
    y: 0,
  },
  initial: {
    y: 0,
  },
}

export const OVERLAY_VARIANTS: Readonly<Variants> = {
  animate: {
    backgroundColor: 'var(--Template-overlay)',
    transition: TRANS_TEMPLATE,
  },
  initial: {
    backgroundColor: 'var(--Template-overlay-initial)',
  },
}
