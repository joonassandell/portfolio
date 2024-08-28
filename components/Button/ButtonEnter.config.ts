import {
  TRANS_PRIMARY_FAST,
  TRANS_PRIMARY_FASTEST,
  TRANS_TAP,
} from '@/lib/config';
import { type Variants } from 'framer-motion';

export const BUTTON_VARIANTS: Readonly<Variants> = {
  tap: {
    top: 2,
    transition: TRANS_TAP,
  },
};

export const BG_VARIANTS: Readonly<Variants> = {
  in: {
    backgroundColor: 'var(--bg-50)',
    transition: { ...TRANS_PRIMARY_FAST },
  },
  out: {
    backgroundColor: 'var(--tone-50)',
    transition: { ...TRANS_PRIMARY_FASTEST },
  },
};

export const BG_HOVER_VARIANTS: Readonly<Variants> = {
  in: {
    transition: { ...TRANS_PRIMARY_FAST, delay: 0.02 },
    x: '0.5rem',
    y: '0.5rem',
  },
  out: { transition: TRANS_PRIMARY_FASTEST, x: 0, y: 0 },
};

export const PATH_IN_VARIANTS: Readonly<Variants> = {
  in: { pathLength: 1, transition: { ...TRANS_PRIMARY_FAST } },
  initial: { pathLength: 0, transition: { duration: 0 } },
};

export const PATH_OUT_VARIANTS: Readonly<Variants> = {
  in: {
    pathOffset: 1,
    transition: TRANS_PRIMARY_FASTEST,
  },
  initial: {
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 0 },
  },
};

export const POINTER_IN_VARIANTS: Readonly<Variants> = {
  in: {
    offsetDistance: '100%',
    transition: { ...TRANS_PRIMARY_FAST },
  },
  initial: { offsetDistance: '0%', transition: { duration: 0 } },
};

export const POINTER_OUT_VARIANTS: Readonly<Variants> = {
  in: { transition: TRANS_PRIMARY_FASTEST, x: '1rem' },
  initial: { offsetDistance: '100%', transition: { duration: 0 }, x: 0 },
};
