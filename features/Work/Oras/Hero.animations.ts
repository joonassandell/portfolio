import { TRANS_TERTIARY } from '@/lib/config';
import { type Variants } from 'framer-motion';

export const dropVariants: Variants = {
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
};

export const dropVariants2: Variants = {
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
};

export const dropVariants3: Variants = {
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
};
