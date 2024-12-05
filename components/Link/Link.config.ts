import { TRANS_PRIMARY_FAST, TRANS_PRIMARY_FASTEST } from '@/lib/config'
import { type Variants } from 'motion/react'

export const IN_VARIANT: Readonly<Variants> = {
  in: {
    transition: TRANS_PRIMARY_FASTEST,
    y: 0,
  },
  initial: {
    y: '100%',
  },
  out: {
    transition: TRANS_PRIMARY_FAST,
    y: '100%',
  },
}

export const OUT_VARIANT: Readonly<Variants> = {
  in: {
    transition: TRANS_PRIMARY_FASTEST,
    y: '-110%',
  },
  out: {
    transition: TRANS_PRIMARY_FAST,
    y: 0,
  },
}
