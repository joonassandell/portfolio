import { TRANS_PRIMARY_FASTEST } from '@/lib/config';
import { type Variants } from 'framer-motion';

export const LINK_VARIANTS: Variants = {
  in: {
    transition: {
      staggerChildren: 0.02,
    },
  },
  out: {
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
} as const;

export const CHARACTER_OUT_VARIANTS: Variants = {
  in: {
    opacity: 0,
    skewX: -50,
    transition: TRANS_PRIMARY_FASTEST,
    y: '-100%',
  },
  out: {
    transition: TRANS_PRIMARY_FASTEST,
    y: 0,
  },
} as const;

export const CHARACTER_IN_VARIANTS: Variants = {
  in: {
    opacity: 1,
    skewX: 0,
    transition: TRANS_PRIMARY_FASTEST,
    y: 0,
  },
  out: {
    opacity: 0,
    skewX: 50,
    transition: TRANS_PRIMARY_FASTEST,
    y: '90%',
  },
} as const;
