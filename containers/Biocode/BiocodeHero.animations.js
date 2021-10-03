import {
  transPrimary,
  transSecondary,
  extraDelay,
  transTertiary,
} from '@/lib/config';

export const headingVariants = {
  exit: {
    y: '-175%',
    transition: {
      ...transPrimary,
      delay: extraDelay,
    },
  },
};

export const figurePreVariants = {
  exit: {
    // clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', // to top
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', // to bottom
    transition: {
      // ...transSecondary,
      ...transPrimary,
      // delay: extraDelay,
    },
  },
  preTransition: {
    // clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // from bottom
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // from top
  },
};
