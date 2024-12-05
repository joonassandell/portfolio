import { TRANS_TEMPLATE } from '@/lib/config'
import { type Variants } from 'motion/react'

export const SPLASH_VARIANTS: Readonly<Variants> = {
  exit: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    opacity: 1, // Just for detecting the exit animation with CSS
    transition: {
      ...TRANS_TEMPLATE,
      delay: 0.7,
      duration: 0.8,
    },
  },
  initial: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  },
}
