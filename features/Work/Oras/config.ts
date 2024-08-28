import { TRANS_TERTIARY } from '@/lib/config';
import { type Variants } from 'framer-motion';

export const DROP_VARIANTS: Variants = {
  animate: ({ delay = 0 } = {}) => ({
    opacity: 1,
    transition: {
      ...TRANS_TERTIARY,
      delay,
    },
    y: 0,
  }),
  initial: {
    opacity: 0,
    y: -24,
  },
} as const;

export const DROP_VARIANTS_2: Variants = {
  animate: ({ delay = 0 } = {}) => ({
    opacity: 1,
    transition: {
      ...TRANS_TERTIARY,
      delay: 0.2 + delay,
    },
    y: 0,
  }),
  initial: {
    opacity: 0,
    y: -48,
  },
} as const;

export const DROP_VARIANTS_3: Variants = {
  animate: ({ delay = 0 } = {}) => ({
    opacity: 1,
    transition: {
      ...TRANS_TERTIARY,
      delay: 0.3 + delay,
    },
    y: 0,
  }),
  initial: {
    opacity: 0,
    y: -80,
  },
} as const;
