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
export const clipVariants: Variants = {
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
};

export const moveVariants: Variants = {
  animate: {
    opacity: 1,
    skewY: 0,
    transition: TRANS_TERTIARY_FAST,
    y: 0,
  },
  initial: {
    opacity: 0,
    skewY: 5,
    y: '5rem',
  },
};

export const placeholderVariants: Variants = {
  exit: { opacity: 0, transition: TRANS_TERTIARY_FASTEST },
};

export const placeholderGlareVariants: Variants = {
  animate: {
    backgroundPosition: ['200% 0%', '-10% 0%'],
    transition: {
      duration: TRANS_TERTIARY.duration + 0.1,
      ease: EASE_TERTIARY,
      repeat: Infinity,
      repeatDelay: 0.2,
    },
  },
};

export const glareVariants: Variants = {
  animate: {
    ...placeholderGlareVariants.animate,
    transition: {
      ...TRANS_TERTIARY,
      duration: TRANS_TERTIARY.duration + 0.3,
    },
  },
};
