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
    opacity: 0,
    skewX: -50,
    transition: TRANS_PRIMARY_FASTEST,
    y: '-100%',
  },
  out: {
    transition: TRANS_PRIMARY_FASTEST,
    y: 0,
  },
};

export const characterInVariants: Variants = {
  in: {
    opacity: 1,
    skewX: 0,
    transition: TRANS_PRIMARY_FASTEST,
    y: 0,
  },
  out: {
    opacity: 0,
    skewX: 50,
    transition: TRANS_PRIMARY_FASTEST,
    y: '90%',
  },
};
