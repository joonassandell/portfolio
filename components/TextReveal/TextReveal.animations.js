import { transPrimary } from '@/lib/config';

export const headingVariant = {
  in: {
    transition: {
      staggerChildren: 0.5,
    },
  },
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
