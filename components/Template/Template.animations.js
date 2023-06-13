import { TRANS_TEMPLATE } from '@/lib/config';

export const variantsWithTransition = {
  animate: {
    y: 0,
  },
  exit: {
    y: '-50vh',
  },
  initial: {
    y: 'var(--vh)',
  },
  transition: TRANS_TEMPLATE,
};

export const variantsWithoutTransition = {
  animate: {
    y: 0,
  },
  exit: {
    y: 0,
  },
  initial: {
    y: 0,
  },
  transition: {
    duration: 0,
    ease: 'linear',
  },
};

export const overlayVariants = {
  animate: {
    backgroundColor: 'var(--Template-overlay-color)',
    transition: TRANS_TEMPLATE,
  },
  initial: {
    backgroundColor: 'var(--Template-overlay-color-initial)',
  },
};
