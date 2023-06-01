import { transPrimaryFastest } from '@/lib/config';

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
    transition: transPrimaryFastest,
  },
  out: {
    y: 0,
    transition: transPrimaryFastest,
  },
};

export const characterInVariants = {
  in: {
    opacity: 1,
    skewX: 0,
    y: 0,
    transition: transPrimaryFastest,
  },
  out: {
    opacity: 0,
    skewX: 50,
    y: '90%',
    transition: transPrimaryFastest,
  },
};
