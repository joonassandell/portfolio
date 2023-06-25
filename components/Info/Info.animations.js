import { TRANS_PRIMARY, TRANS_TERTIARY } from '@/lib/config';

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
      staggerChildren: 0.2,
    },
  },
};

export const colVariants = {
  animate: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...TRANS_TERTIARY,
      ...(delay && { delay }),
    },
  }),
  initial: {
    opacity: 0,
    y: '8rem',
  },
};
