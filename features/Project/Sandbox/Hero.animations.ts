import { TRANS_PRIMARY } from '@/lib/config';
import { type Variants } from 'framer-motion';

export const figureInnerVariants: Variants = {
  animate: {
    filter: 'grayscale(0)',
    rotate: 20,
    transition: TRANS_PRIMARY,
    x: '4rem',
  },
  initial: {
    filter: 'grayscale(0.6)',
    rotate: 0,
    x: '0rem',
  },
};
