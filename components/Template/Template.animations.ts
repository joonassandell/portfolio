import { TRANS_TEMPLATE } from '@/lib/config';
import { Variants } from 'framer-motion';

export const variantsWithTransition: Variants = {
  animate: {
    y: 0,
    transition: TRANS_TEMPLATE,
  },
  exit: {
    y: '-50vh',
    transition: TRANS_TEMPLATE,
  },
  initial: {
    y: 'var(--vh)',
  },
};

export const variantsWithoutTransition: Variants = {
  animate: {
    y: 0,
    transition: {
      duration: 0,
      ease: 'linear',
    },
  },
  exit: {
    y: 0,
    transition: {
      duration: 0,
      ease: 'linear',
    },
  },
  initial: {
    y: 0,
  },
};

export const overlayVariants: Variants = {
  animate: {
    backgroundColor: 'var(--Template-overlay-color)',
    transition: TRANS_TEMPLATE,
  },
  initial: {
    backgroundColor: 'var(--Template-overlay-color-initial)',
  },
};
