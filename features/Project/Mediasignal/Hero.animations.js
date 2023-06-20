import { TRANS_PRIMARY } from '@/lib/config';

export const figureInnerVariants = {
  animate: {
    x: '10rem',
    y: '8rem',
    transition: TRANS_PRIMARY,
  },
  initial: ({ enableInitial = true } = {}) => {
    if (!enableInitial) return;
    return {
      x: '0rem',
      y: '0rem',
    };
  },
};
