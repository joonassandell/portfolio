import {
  transPrimary,
  transSecondary,
  extraDelay,
  transTertiary,
} from '@/lib/config';

import { getCSSVarValue } from '@/lib/utility';

export const headingVariants = {
  animate: {
    y: '-175%',
    transition: {
      ...transPrimary,
      delay: extraDelay,
    },
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
      delay: extraDelay,
    },
  },
};

export const dropVariants = {
  animate: (delay = 0) => ({
    opacity: 1,
    transition: {
      ...transTertiary,
      delay: delay + extraDelay,
    },
    y: 0,
  }),
  initial: {
    opacity: 0,
    y: -24,
  },
};

export const dropVariants2 = {
  animate: (delay = 0) => ({
    opacity: 1,
    transition: {
      ...transTertiary,
      delay: 0.2 + delay + extraDelay,
    },
    y: 0,
  }),
  initial: {
    opacity: 0,
    y: -48,
  },
};

export const dropVariants3 = {
  animate: (delay = 0) => ({
    opacity: 1,
    transition: {
      ...transTertiary,
      delay: 0.3 + delay + extraDelay,
    },
    y: 0,
  }),
  initial: {
    opacity: 0,
    y: -72,
  },
};
