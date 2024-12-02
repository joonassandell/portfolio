import { TRANS_SECONDARY } from '@/lib/config'
import { type Variants } from 'motion/react'

export const DROP_VARIANTS: Readonly<Variants> = {
  animate: ({ delay = 0 } = {}) => ({
    opacity: 1,
    transition: {
      ...TRANS_SECONDARY,
      delay,
    },
    y: 0,
  }),
  initial: {
    opacity: 0,
    y: -24,
  },
}

export const DROP_VARIANTS_2: Readonly<Variants> = {
  animate: ({ delay = 0 } = {}) => ({
    opacity: 1,
    transition: {
      ...TRANS_SECONDARY,
      delay: 0.2 + delay,
    },
    y: 0,
  }),
  initial: {
    opacity: 0,
    y: -48,
  },
}

export const DROP_VARIANTS_3: Readonly<Variants> = {
  animate: ({ delay = 0 } = {}) => ({
    opacity: 1,
    transition: {
      ...TRANS_SECONDARY,
      delay: 0.3 + delay,
    },
    y: 0,
  }),
  initial: {
    opacity: 0,
    y: -80,
  },
}
