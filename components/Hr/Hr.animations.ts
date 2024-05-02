import { TRANS_PRIMARY } from '@/lib/config';
import { type Variants } from 'framer-motion';

export const hrVariants: Variants = {
  animate: {
    scaleX: 1,
    transition: TRANS_PRIMARY,
  },
  initial: {
    scaleX: 0,
  },
};
