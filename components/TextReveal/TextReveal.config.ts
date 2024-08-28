import { TRANS_PRIMARY } from '@/lib/config';
import { type Variants } from 'framer-motion';

export const PARENT_VARIANT: Readonly<Variants> = {
  animate: ({ delay = 0 } = {}) => ({
    transition: {
      delayChildren: delay,
      staggerChildren: 0.1,
    },
  }),
};

export const TEXT_VARIANT: Readonly<Variants> = {
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
};
