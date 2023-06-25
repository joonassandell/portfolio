import { TRANS_PRIMARY, TRANS_TERTIARY_FAST } from '@/lib/config';

export const rulerVariants = {
  animate: {
    scaleX: 1,
    transition: TRANS_PRIMARY,
  },
  initial: {
    scaleX: 0,
  },
};

export const gridVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const colVariants = {
  animate: {
    opacity: 1,
    skewY: 0,
    y: 0,
    transition: TRANS_TERTIARY_FAST,
  },
  initial: {
    opacity: 0,
    skewY: 10,
    y: '3rem',
  },
};
