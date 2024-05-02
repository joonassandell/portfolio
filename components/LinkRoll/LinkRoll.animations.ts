import { TRANS_PRIMARY_FASTEST } from '@/lib/config';
import { type Variants } from 'framer-motion';

export const linkVariants: Variants = {
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

export const characterOutVariants: Variants = {
  in: {
    skewX: -50,
    opacity: 0,
    y: '-100%',
    transition: TRANS_PRIMARY_FASTEST,
  },
  out: {
    y: 0,
    transition: TRANS_PRIMARY_FASTEST,
  },
};

export const characterInVariants: Variants = {
  in: {
    opacity: 1,
    skewX: 0,
    y: 0,
    transition: TRANS_PRIMARY_FASTEST,
  },
  out: {
    opacity: 0,
    skewX: 50,
    y: '90%',
    transition: TRANS_PRIMARY_FASTEST,
  },
};
