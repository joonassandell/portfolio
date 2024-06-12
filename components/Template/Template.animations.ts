import { TRANS_TEMPLATE } from '@/lib/config';
import { type Variants } from 'framer-motion';

export const variantsWithTransition: Variants = {
  animate: {
    transition: TRANS_TEMPLATE,
    y: 0,
  },
  exit: {
    transition: TRANS_TEMPLATE,
    y: '-50vh',
  },
  initial: {
    y: 'var(--vh)',
  },
};

export const variantsWithoutTransition: Variants = {
  animate: {
    transition: {
      duration: 0,
      ease: 'linear',
    },
    y: 0,
  },
  exit: {
    transition: {
      duration: 0,
      ease: 'linear',
    },
    y: 0,
  },
  initial: {
    y: 0,
  },
};

export const overlayVariants: Variants = {
  animate: {
    backgroundColor: 'var(--Template-overlay)',
    transition: TRANS_TEMPLATE,
  },
  initial: {
    backgroundColor: 'var(--Template-overlay-initial)',
  },
};
