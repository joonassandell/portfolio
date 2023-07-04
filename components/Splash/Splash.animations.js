import { TRANS_PRIMARY, TRANS_SECONDARY } from '@/lib/config';

export const splashVariants = {
  exit: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    transition: {
      ...TRANS_SECONDARY,
      delay: 0.85,
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
      delay: 0.75,
    },
    y: '-100%',
  },
};
