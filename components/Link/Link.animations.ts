import { TRANS_PRIMARY_FAST, TRANS_PRIMARY_FASTEST } from '@/lib/config';
import { Variants } from 'framer-motion';

export const outVariant: Variants = {
  in: {
    transition: TRANS_PRIMARY_FASTEST,
    y: '-110%',
  },
  out: {
    transition: TRANS_PRIMARY_FAST,
    y: 0,
  },
};

export const inVariant: Variants = {
  in: {
    transition: TRANS_PRIMARY_FASTEST,
    y: 0,
  },
  initial: {
    y: '100%',
  },
  out: {
    transition: TRANS_PRIMARY_FAST,
    y: '100%',
  },
};

export const outVariantX: Variants = {
  in: {
    transition: TRANS_PRIMARY_FASTEST,
    x: '110%',
  },
  out: {
    transition: TRANS_PRIMARY_FAST,
    x: 0,
  },
};

export const inVariantX: Variants = {
  in: {
    transition: TRANS_PRIMARY_FASTEST,
    x: 0,
  },
  initial: {
    x: '-100%',
  },
  out: {
    transition: TRANS_PRIMARY_FAST,
    x: '-100%',
  },
};
