import { TRANS_PRIMARY, TRANS_PRIMARY_FAST, TRANS_TAP } from '@/lib/config';
import { type Variants } from 'framer-motion';

export const stampVariants: Variants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 1.05,
    transition: TRANS_TAP,
  },
};

export const stampTransition = TRANS_PRIMARY_FAST;

export const svgVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

export const overlayVariants: Variants = {
  animate: {
    scale: [0, 13],
    transition: TRANS_PRIMARY,
  },
};
