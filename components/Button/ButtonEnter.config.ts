import {
  TRANS_PRIMARY_FAST,
  TRANS_PRIMARY_FASTEST,
  TRANS_TAP,
} from '@/lib/config';
import { type Variants } from 'framer-motion';

export const BUTTON_VARIANTS: Variants = {
  tap: {
    top: 2,
    transition: TRANS_TAP,
  },
} as const;

export const BG_VARIANTS: Variants = {
  in: {
    backgroundColor: 'var(--bg-50)',
    transition: { ...TRANS_PRIMARY_FAST },
  },
  out: {
    backgroundColor: 'var(--tone-50)',
    transition: { ...TRANS_PRIMARY_FASTEST },
  },
} as const;

export const BG_HOVER_VARIANTS: Variants = {
  in: {
    transition: { ...TRANS_PRIMARY_FAST, delay: 0.02 },
    x: '0.5rem',
    y: '0.5rem',
  },
  out: { transition: TRANS_PRIMARY_FASTEST, x: 0, y: 0 },
} as const;

export const PATH_IN_VARIANTS: Variants = {
  in: { pathLength: 1, transition: { ...TRANS_PRIMARY_FAST } },
  initial: { pathLength: 0, transition: { duration: 0 } },
} as const;

export const PATH_OUT_VARIANTS: Variants = {
  in: {
    pathOffset: 1,
    transition: TRANS_PRIMARY_FASTEST,
  },
  initial: {
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 0 },
  },
} as const;

export const POINTER_IN_VARIANTS: Variants = {
  in: {
    offsetDistance: '100%',
    transition: { ...TRANS_PRIMARY_FAST },
  },
  initial: { offsetDistance: '0%', transition: { duration: 0 } },
} as const;

export const POINTER_OUT_VARIANTS: Variants = {
  in: { transition: TRANS_PRIMARY_FASTEST, x: '1rem' },
  initial: { offsetDistance: '100%', transition: { duration: 0 }, x: 0 },
} as const;
