import { transSecondary } from '@/lib/config';

export const headingVariant = {
  animate: ({ delay } = { delay: 0 }) => ({
    transition: {
      delayChildren: delay,
      staggerChildren: 0.2,
    },
  }),
};

export const inVariant = {
  animate: {
    transition: transSecondary,
    y: 0,
  },
  initial: ({ enableInitial } = { enableInitial: true }) => {
    if (!enableInitial) return;
    return {
      y: '100%',
    };
  },
};
