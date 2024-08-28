import { TRANS_PRIMARY } from '@/lib/config';
import { type Variants } from 'framer-motion';

export const HR_VARIANTS: Readonly<Variants> = {
  animate: {
    scaleX: 1,
    transition: TRANS_PRIMARY,
  },
  initial: {
    scaleX: 0,
  },
};
