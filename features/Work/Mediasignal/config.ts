import { TRANS_PRIMARY } from '@/lib/config';
import { type Variants } from 'motion/react';

export const FIGURE_INNER_VARIANTS: Readonly<Variants> = {
  animate: ({ delay = 0 } = {}) => ({
    transition: {
      ...TRANS_PRIMARY,
      delay,
    },
    x: '10rem',
    y: '8rem',
  }),
  initial: {
    x: '0rem',
    y: '0rem',
  },
};
