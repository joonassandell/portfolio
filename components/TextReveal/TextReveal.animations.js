import { TRANS_PRIMARY } from '@/lib/config';

export const parentVariant = {
  animate: ({ delay = 0 } = {}) => ({
    transition: {
      delayChildren: delay,
      staggerChildren: 0.2,
    },
  }),
};

export const textVariant = {
  animate: ({ transition = TRANS_PRIMARY } = {}) => ({
    opacity: 1,
    skewX: 0,
    y: 0,
    transition,
  }),
  initial: ({ y = '100%' } = {}) => ({
    opacity: 0,
    skewX: -50,
    y,
  }),
};
