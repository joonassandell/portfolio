import { TRANS_PRIMARY } from '@/lib/config';

export const figureInnerVariants = {
  animate: {
    filter: 'grayscale(0)',
    rotate: '-25deg',
    x: '20rem',
    transition: TRANS_PRIMARY,
  },
  initial: {
    filter: 'grayscale(0.6)',
    rotate: '0deg',
    x: '0rem',
  },
};
