import {
  transPrimary,
  transSecondary,
  mobileExtraDelay,
  transTertiary,
} from '@/lib/config';

import { getCSSVarValue } from '@/lib/utility';

const delayAfterBgCirle = 0;

export const headingVariants = {
  exit: mobile => ({
    y: '-175%',
    transition: {
      ...transPrimary,
      ...(mobile && { delay: mobileExtraDelay }),
    },
  }),
};

export const figureBgVariants = {
  exit: mobile => ({
    scaleY: 4,
    background: [
      'linear-gradient(180deg, var(--OrasHero-figureBg) 0%, rgba(var(--OrasHero-figureBgRgb), 1) 100%)',
      'linear-gradient(180deg, var(--OrasHero-figureBg) 0%, rgba(var(--OrasHero-figureBgRgb), 0) 100%)',
    ],
    opacity: parseFloat(getCSSVarValue('--OrasHero-figureBgAlpha')),
    transition: {
      ...transSecondary,
      delay: delayAfterBgCirle,
      ...(mobile && { delay: delayAfterBgCirle + mobileExtraDelay }),
    },
  }),
};

export const dropVariants = {
  exit: mobile => ({
    opacity: 1,
    transition: {
      ...transTertiary,
      delay: 0.1,
      ...(mobile && { delay: 0.1 + mobileExtraDelay }),
    },
    y: 0,
  }),
  preTransition: {
    opacity: 0,
    y: -24,
  },
};

export const dropVariants2 = {
  exit: mobile => ({
    opacity: 1,
    transition: {
      ...transTertiary,
      ...(mobile && { delay: mobileExtraDelay }),
    },
    y: 0,
  }),
  preTransition: {
    opacity: 0,
    y: -72,
  },
};

export const dropVariants3 = {
  exit: mobile => ({
    opacity: 1,
    transition: {
      ...transTertiary,
      delay: 0.4,
      ...(mobile && { delay: 0.4 + mobileExtraDelay }),
    },
    y: 0,
  }),
  preTransition: {
    opacity: 0,
    y: -48,
  },
};
