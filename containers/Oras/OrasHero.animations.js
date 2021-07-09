import {
  transPrimary,
  transSecondary,
  mobileExtraDelay,
  transTertiary,
} from '@/lib/config';

export const headingVariants = {
  exit: mobile => ({
    y: '-175%',
    transition: {
      ...transPrimary,
      ...(mobile && { delay: mobileExtraDelay }),
    },
  }),
};

export const bgVariants = {
  exit: mobile => ({
    scaleY: 4,
    background: [
      'linear-gradient(180deg, #E9E9E9 0%, rgba(233, 233, 233, 1) 100%)',
      'linear-gradient(180deg, #E9E9E9 0%, rgba(233, 233, 233, 0) 100%)',
    ],
    transition: {
      ...transSecondary,
      ...(mobile && { delay: mobileExtraDelay }),
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
  preAnimation: {
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
  preAnimation: {
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
  preAnimation: {
    opacity: 0,
    y: -40,
  },
};
