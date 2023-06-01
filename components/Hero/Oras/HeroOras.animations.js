import { transSecondary, transTertiary } from '@/lib/config';
import { getCSSVarValue } from '@/lib/utility';
import { headingVariants as headingVars } from '../Hero.animations';

export const headingVariants = {
  animate: {
    ...headingVars.animate,
    y: '-150%',
  },
};

export const figureBgVariants = {
  animate: {
    scaleY: 4,
    background: [
      'linear-gradient(180deg, var(--oras-Hero-figureBg) 0%, rgba(var(--oras-Hero-figureBgRgb), 1) 100%)',
      'linear-gradient(180deg, var(--oras-Hero-figureBg) 0%, rgba(var(--oras-Hero-figureBgRgb), 0) 100%)',
    ],
    opacity: parseFloat(getCSSVarValue('--oras-Hero-figureBgAlpha')),
    transition: {
      ...transSecondary,
    },
  },
};

export const dropVariants = {
  animate: ({ delay = 0 } = {}) => ({
    opacity: 1,
    transition: {
      ...transTertiary,
      delay,
    },
    y: 0,
  }),
  initial: ({ enableInitial = true } = {}) => {
    if (!enableInitial) return;
    return {
      opacity: 0,
      y: -24,
    };
  },
};

export const dropVariants2 = {
  animate: ({ delay = 0 } = {}) => ({
    opacity: 1,
    transition: {
      ...transTertiary,
      delay: 0.2 + delay,
    },
    y: 0,
  }),
  initial: ({ enableInitial = true } = {}) => {
    if (!enableInitial) return;
    return {
      opacity: 0,
      y: -48,
    };
  },
};

export const dropVariants3 = {
  animate: ({ delay = 0 } = {}) => ({
    opacity: 1,
    transition: {
      ...transTertiary,
      delay: 0.1 + delay,
    },
    y: 0,
  }),
  initial: ({ enableInitial = true } = {}) => {
    if (!enableInitial) return;
    return {
      opacity: 0,
      y: -80,
    };
  },
};
