import { TRANS_PRIMARY, TRANS_SECONDARY } from '@/lib/config';
import { type Variants } from 'framer-motion';

export const HEADING_VARIANTS: Readonly<Variants> = {
  animate: {
    transition: TRANS_PRIMARY,
    y: '-150%',
  },
};

export const FIGURE_BG_VARIANTS: Readonly<Variants> = {
  animate: {
    background: [
      'linear-gradient(to bottom, hsl(var(--Hero-figure-bg-hsl) / 0.06), hsl(var(--Hero-figure-bg-hsl) / 0.06))',
      'linear-gradient(to bottom, hsl(var(--Hero-figure-bg-hsl) / 0.15), hsl(var(--Hero-figure-bg-hsl) / 0))',
    ],
    scaleY: 4,
    transition: {
      ...TRANS_SECONDARY,
      delay: 0.15,
    },
  },
};
