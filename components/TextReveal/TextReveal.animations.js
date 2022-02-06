import { transPrimary } from '@/lib/config';

export const headingVariant = {
  in: (delay = 0) => ({
    transition: {
      delayChildren: delay ? delay : 0,
      staggerChildren: 0.5,
    },
  }),
};

export const inVariant = {
  in: {
    transition: transPrimary,
    y: 0,
  },
  initial: {
    y: '100%',
  },
};
