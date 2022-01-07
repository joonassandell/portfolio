import { transPrimary, extraDelay } from '@/lib/config';

export const headingVariants = {
  animate: {
    y: '-175%',
    transition: {
      ...transPrimary,
      delay: extraDelay,
    },
  },
};
