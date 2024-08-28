import { TRANS_PRIMARY, TRANS_PRIMARY_FAST, TRANS_TAP } from '@/lib/config';
import { type Variants } from 'framer-motion';

export const STAMP_VARIANTS: Variants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 1.05,
    transition: TRANS_TAP,
  },
} as const;

export const STAMP_TRANSITION = TRANS_PRIMARY_FAST;

export const SVG_VARIANTS: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      ease: 'linear',
      repeat: Infinity,
    },
  },
} as const;

export const OVERLAY_VARIANTS: Variants = {
  animate: {
    scale: [0, 13],
    transition: TRANS_PRIMARY,
  },
} as const;
