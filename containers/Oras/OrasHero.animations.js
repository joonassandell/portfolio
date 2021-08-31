import {
  transPrimary,
  transSecondary,
  extraDelay,
  transTertiary,
} from '@/lib/config';

import { getCSSVarValue } from '@/lib/utility';

export const headingVariants = {
  exit: {
    y: '-175%',
    transition: {
      ...transPrimary,
      delay: extraDelay,
    },
  },
};

export const figureBgVariants = {
  exit: {
    scaleY: 4,
    background: [
      'linear-gradient(180deg, var(--OrasHero-figureBg) 0%, rgba(var(--OrasHero-figureBgRgb), 1) 100%)',
      'linear-gradient(180deg, var(--OrasHero-figureBg) 0%, rgba(var(--OrasHero-figureBgRgb), 0) 100%)',
    ],
    opacity: parseFloat(getCSSVarValue('--OrasHero-figureBgAlpha')),
    transition: {
      ...transSecondary,
      delay: extraDelay,
    },
  },
};

export const dropVariants = {
  exit: {
    opacity: 1,
    transition: {
      ...transTertiary,
      delay: 0.1 + extraDelay,
    },
    y: 0,
  },
  preTransition: {
    opacity: 0,
    y: -24,
  },
};

export const dropVariants2 = {
  exit: {
    opacity: 1,
    transition: {
      ...transTertiary,
      delay: extraDelay,
    },
    y: 0,
  },
  preTransition: {
    opacity: 0,
    y: -72,
  },
};

export const dropVariants3 = {
  exit: {
    opacity: 1,
    transition: {
      ...transTertiary,
      delay: 0.3 + extraDelay,
    },
    y: 0,
  },
  preTransition: {
    opacity: 0,
    y: -48,
  },
};
