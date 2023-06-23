import { TRANS_PRIMARY } from '@/lib/config';

export const figureInnerVariants = {
  animate: {
    filter: 'grayscale(0)',
    rotate: 20,
    x: '4rem',
    transition: TRANS_PRIMARY,
  },
  initial: {
    filter: 'grayscale(0.6)',
    rotate: 0,
    x: '0rem',
  },
};
