import {
  TRANS_PRIMARY,
  TRANS_PRIMARY_FAST,
  TRANS_PRIMARY_FASTEST,
  TRANS_SECONDARY,
  TRANS_TEMPLATE,
} from '@/lib/config';

/**
 * 1. This is here to wait the CSS animation to end
 */
export const splashVariants = {
  exit: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    transition: {
      ...TRANS_SECONDARY,
      delay: 1.6,
      // delay: 0.4,
      // delayChildren: TRANS_PRIMARY.duration,  // [1]
      // when: 'afterChildren',
    },
  },
  initial: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  },
};

export const textVariants = {
  exit: {
    transition: {
      ...TRANS_PRIMARY,
      delay: 1.3, // [1]
    },
    y: '-100%',
  },
};
