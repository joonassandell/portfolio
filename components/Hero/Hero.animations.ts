import { getCSSVarValue } from '@/lib/utils';
import { TRANS_PRIMARY, TRANS_SECONDARY } from '@/lib/config';
import { type Variants } from 'framer-motion';

export const headingVariants: Variants = {
  animate: {
    transition: TRANS_PRIMARY,
    y: '-150%',
  },
};

/**
 * For some reason applying: 'var(--Hero-figure-bg-alpha)' won't animate opacity
 * correctly even if the initial prop is set to 'var(--Hero-figure-pre-bg-alpha)'.
 * https://www.framer.com/motion/component/##css-variables
 */
export const figureBgVariants: Variants = {
  animate: {
    background: [
      'linear-gradient(180deg, var(--Hero-figure-bg) 0%, rgba(var(--Hero-figure-bg-rgb), 1) 100%)',
      'linear-gradient(180deg, var(--Hero-figure-bg) 0%, rgba(var(--Hero-figure-bg-rgb), 0) 100%)',
    ],
    opacity: parseFloat(getCSSVarValue('--Hero-figure-bg-alpha') as string), // [1.]
    scaleY: 4,
    transition: TRANS_SECONDARY,
  },
};
