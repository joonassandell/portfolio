import { TRANS_PRIMARY } from '@/lib/config';

export const PARENT_VARIANT = {
  animate: ({ delay = 0 } = {}) => ({
    transition: {
      delayChildren: delay,
      staggerChildren: 0.1,
    },
  }),
} as const;

export const TEXT_VARIANT = {
  animate: ({ transition = TRANS_PRIMARY } = {}) => ({
    opacity: 1,
    skewX: 0,
    transition,
    y: 0,
  }),
  initial: ({ y = '100%' } = {}) => ({
    opacity: 0,
    skewX: -50,
    y,
  }),
} as const;
