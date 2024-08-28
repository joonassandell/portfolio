import { TRANS_PRIMARY } from '@/lib/config';
import { type Variants } from 'framer-motion';

export const FIGURE_INNER_VARIANTS: Variants = {
  animate: {
    filter: 'grayscale(0)',
    rotate: 20,
    transition: TRANS_PRIMARY,
    x: '4rem',
  },
  initial: {
    filter: 'grayscale(0.6)',
    rotate: 0,
    x: '0rem',
  },
} as const;
