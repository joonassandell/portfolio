import { transPrimary, transSecondary, mobileExtraDelay } from '@/lib/config';

export const stampVariant = {
  exit: mobile => ({
    scale: 0,
    // rotate: 180,
    skew: -45,
    transition: {
      ...transSecondary,
      ...(mobile && { delay: mobileExtraDelay }),
    },
  }),
};

export const stampInnerVariant = {
  animate: {
    rotate: 360,
    transition: {
      duration: 12,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};
