import {
  EASE_SECONDARY,
  TRANS_SECONDARY,
  TRANS_SECONDARY_FASTEST,
} from '@/lib/config'
import { type Variants } from 'motion/react'

/**
 * 1. From top to bottom
 * 2. From bottom to top
 */
export const CLIP_VARIANTS: Readonly<Variants> = {
  animate: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // [1.]
    // clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', // [2.]
    scale: 1,
    transition: TRANS_SECONDARY,
  },
  initial: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', // [1.]
    // clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', // [2.]
    scale: 1.07,
  },
}

export const PLACEHOLDER_VARIANTS: Readonly<Variants> = {
  exit: { opacity: 0, transition: TRANS_SECONDARY_FASTEST },
}

export const PLACEHOLDER_GLARE_VARIANTS: Readonly<Variants> = {
  animate: {
    backgroundPosition: ['200% 0%', '-10% 0%'],
    transition: {
      duration: TRANS_SECONDARY.duration + 0.1,
      ease: EASE_SECONDARY,
      repeat: Infinity,
      repeatDelay: 0.2,
    },
  },
}

export const GLARE_VARIANTS: Readonly<Variants> = {
  animate: {
    ...PLACEHOLDER_GLARE_VARIANTS.animate,
    transition: {
      ...TRANS_SECONDARY,
      duration: TRANS_SECONDARY.duration + 0.3,
    },
  },
}
