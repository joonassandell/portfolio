import { TRANS_TERTIARY_FAST } from '@/lib/config';

export const textVariants = {
  animate: {
    opacity: 1,
    skewY: 0,
    y: 0,
    transition: TRANS_TERTIARY_FAST,
  },
  initial: {
    opacity: 0,
    skewY: 10,
    y: '8rem',
  },
};
