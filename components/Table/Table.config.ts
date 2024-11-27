import { TRANS_TERTIARY_FAST } from '@/lib/config'
import { type Variants } from 'motion/react'

export const ROW_VARIANT: Readonly<Variants> = {
  animate: {
    opacity: 1,
    transition: TRANS_TERTIARY_FAST,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: '3rem',
  },
}
