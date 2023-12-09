import { TRANS_PRIMARY, TRANS_SECONDARY } from '@/lib/config';
import { getCSSVarValue } from '@/lib/utility';

export const headingVariants = {
  animate: {
    y: '-150%',
    transition: TRANS_PRIMARY,
  },
};

/**
 * For some reason applying: 'var(--Hero-figure-bg-alpha)' won't animate opacity
 * correctly even if the initial prop is set to 'var(--Hero-figure-pre-bg-alpha)'.
 * https://www.framer.com/motion/component/##css-variables
 */
export const figureBgVariants = {
  animate: {
    scaleY: 4,
    background: [
      'linear-gradient(180deg, var(--Hero-figure-bg) 0%, rgba(var(--Hero-figure-bg-rgb), 1) 100%)',
      'linear-gradient(180deg, var(--Hero-figure-bg) 0%, rgba(var(--Hero-figure-bg-rgb), 0) 100%)',
    ],
    opacity: parseFloat(getCSSVarValue('--Hero-figure-bg-alpha')), // [1.]
    transition: TRANS_SECONDARY,
  },
};
