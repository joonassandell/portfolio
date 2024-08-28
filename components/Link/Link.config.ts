import { TRANS_PRIMARY_FAST, TRANS_PRIMARY_FASTEST } from '@/lib/config';
import { type Variants } from 'framer-motion';

export const OUT_VARIANT: Variants = {
  in: {
    transition: TRANS_PRIMARY_FASTEST,
    y: '-110%',
  },
  out: {
    transition: TRANS_PRIMARY_FAST,
    y: 0,
  },
} as const;

export const OUT_VARIANT_X: Variants = {
  in: {
    transition: TRANS_PRIMARY_FASTEST,
    x: '110%',
  },
  out: {
    transition: TRANS_PRIMARY_FAST,
    x: 0,
  },
} as const;

export const IN_VARIANT: Variants = {
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
} as const;

export const IN_VARIANT_X: Variants = {
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
} as const;
