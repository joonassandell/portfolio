import { transPrimary } from '@/lib/config';

export const headingVariant = {
  animate: ({ delay } = { delay: 0 }) => ({
    transition: {
      delayChildren: delay,
      staggerChildren: 0.3,
    },
  }),
};

export const inVariant = {
  animate: {
    transition: transPrimary,
    y: 0,
  },
  initial: ({ enableInitial } = { enableInitial: true }) => {
    return enableInitial
      ? {
          y: '100%',
        }
      : {};
  },
};
