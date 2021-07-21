import {
  transPrimary,
  transSecondary,
  mobileExtraDelay,
  transTertiary,
} from '@/lib/config';

import { getCSSVarValue } from '@/lib/utility';

const delayAfterBgCirle = 0.3;

export const headingVariants = {
  exit: mobile => ({
    y: '-175%',
    transition: {
      ...transPrimary,
      ...(mobile && { delay: mobileExtraDelay }),
    },
  }),
};

export const circleBgVariants = {
  exit: mobile => ({
    // clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // bottom/right/left
    // clipPath: 'circle(100% at 50% 50%)',
    // scale: 2.5,
    scale: [0, 10],
    transition: {
      ...transPrimary,
      ...(mobile && { delay: mobileExtraDelay }),
    },
  }),
  // preTransition: {
  //   // clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', // bottom
  //   // clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', // right
  //   // clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', // left
  //   // clipPath: 'polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)', // bottom left
  //   // clipPath: 'circle(15% at 50% 50%)',
  // },
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
      delay: 0.25,
      ...(mobile && { delay: 0.25 + mobileExtraDelay }),
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
      delay: 0.1,
      ...(mobile && { delay: 0.1 + mobileExtraDelay }),
    },
    y: 0,
  }),
  preTransition: {
    opacity: 0,
    y: -96,
  },
};

export const dropVariants3 = {
  exit: mobile => ({
    opacity: 1,
    transition: {
      ...transTertiary,
      delay: 0.25,
      ...(mobile && { delay: 0.25 + mobileExtraDelay }),
    },
    y: 0,
  }),
  preTransition: {
    opacity: 0,
    y: -40,
  },
};
