import { transPrimary, transTertiary } from '@/lib/config';

export const infoRulerVariants = {
  inView: {
    scaleX: 1,
    transition: transPrimary,
  },
  hidden: {
    scaleX: 0,
  },
};

export const infoGridVariants = {
  inView: {
    transition: { staggerChildren: 0.15 },
  },
};

export const infoGridCellVariants = {
  inView: delay => ({
    y: 0,
    opacity: 1,
    transition: {
      ...transTertiary,
      ...(delay && { delay }),
    },
  }),
  hidden: {
    opacity: 0,
    y: '5rem',
  },
};
