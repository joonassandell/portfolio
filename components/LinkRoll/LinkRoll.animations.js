import { transPrimaryFastest } from '@/lib/config';

const trans = {
  duration: transPrimaryFastest.duration,
  ease: [0.215, 0.61, 0.355, 1],
};

export const linkVariants = {
  in: {
    transition: {
      staggerChildren: 0.02,
    },
  },
  out: {
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
};

export const characterOutVariants = {
  in: {
    skewX: -50,
    opacity: 0,
    y: '-100%',
    transition: trans,
  },
  out: {
    y: 0,
    transition: trans,
  },
};

export const characterInVariants = {
  in: {
    opacity: 1,
    skewX: 0,
    y: 0,
    transition: trans,
  },
  out: {
    opacity: 0,
    skewX: 50,
    y: '90%',
    transition: trans,
  },
};
