import { TRANS_PRIMARY, TRANS_TERTIARY } from '@/lib/config';

export const infoRulerVariants = {
  inView: {
    scaleX: 1,
    transition: TRANS_PRIMARY,
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
  inView: {
    y: 0,
    opacity: 1,
    transition: TRANS_TERTIARY,
  },
  hidden: {
    opacity: 0,
    y: '3rem',
  },
};
