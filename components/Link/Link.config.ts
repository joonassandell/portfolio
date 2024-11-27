import { TRANS_PRIMARY_FAST, TRANS_PRIMARY_FASTEST } from '@/lib/config'
import { type Variants } from 'motion/react'

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

export const OUT_VARIANT_X: Readonly<Variants> = {
  in: {
    transition: TRANS_PRIMARY_FASTEST,
    x: '110%',
  },
  out: {
    transition: TRANS_PRIMARY_FAST,
    x: 0,
  },
}

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

export const IN_VARIANT_X: Readonly<Variants> = {
  in: {
    transition: TRANS_PRIMARY_FASTEST,
    x: 0,
  },
  initial: {
    x: '-100%',
  },
  out: {
    transition: TRANS_PRIMARY_FAST,
    x: '-100%',
  },
}
