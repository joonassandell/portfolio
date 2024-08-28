import {
  EASE_TERTIARY,
  TRANS_TERTIARY,
  TRANS_TERTIARY_FAST,
  TRANS_TERTIARY_FASTEST,
} from '@/lib/config';
import { type Variants } from 'framer-motion';

/**
 * 1. From top to bottom
 * 2. From bottom to top
 */
export const CLIP_VARIANTS: Variants = {
  animate: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // [1.]
    // clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', // [2.]
    scale: 1,
    transition: TRANS_TERTIARY,
  },
  initial: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', // [1.]
    // clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', // [2.]
    scale: 1.07,
  },
} as const;

export const MOVE_VARIANTS: Variants = {
  animate: {
    opacity: 1,
    skewY: 0,
    transition: {
      ...TRANS_TERTIARY_FAST,
      skewY: {
        ...TRANS_TERTIARY,
        delay: 0.1,
      },
    },
    y: 0,
  },
  initial: {
    opacity: 0,
    skewY: 5,
    y: '5rem',
  },
} as const;

export const PLACEHOLDER_VARIANTS: Variants = {
  exit: { opacity: 0, transition: TRANS_TERTIARY_FASTEST },
} as const;

export const PLACEHOLDER_GLARE_VARIANTS: Variants = {
  animate: {
    backgroundPosition: ['200% 0%', '-10% 0%'],
    transition: {
      duration: TRANS_TERTIARY.duration + 0.1,
      ease: EASE_TERTIARY,
      repeat: Infinity,
      repeatDelay: 0.2,
    },
  },
} as const;

export const GLARE_VARIANTS: Variants = {
  animate: {
    ...PLACEHOLDER_GLARE_VARIANTS.animate,
    transition: {
      ...TRANS_TERTIARY,
      duration: TRANS_TERTIARY.duration + 0.3,
    },
  },
} as const;
