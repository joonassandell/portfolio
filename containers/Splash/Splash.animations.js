import {
  transPrimary,
  transPrimaryFast,
  transPrimaryFastest,
  transSecondary,
  transTemplate,
} from '@/lib/config';

/**
 * 1. This is here to wait the CSS animation to end
 */
export const splashVariants = {
  exit: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    transition: {
      ...transSecondary,
      delay: 1.6,
      // delay: 0.4,
      // delayChildren: transPrimary.duration,  // [1]
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
      ...transPrimary,
      delay: 1.3, // [1]
    },
    y: '-100%',
  },
};
