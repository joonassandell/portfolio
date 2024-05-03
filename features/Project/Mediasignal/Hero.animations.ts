import { TRANS_PRIMARY } from '@/lib/config';
import { type Variants } from 'framer-motion';

export const figureInnerVariants: Variants = {
  animate: ({ delay = 0 } = {}) => ({
    x: '10rem',
    y: '8rem',
    transition: {
      ...TRANS_PRIMARY,
      delay,
    },
  }),
  initial: {
    x: '0rem',
    y: '0rem',
  },
};
