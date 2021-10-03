import {
  transPrimary,
  extraDelay,
  transPrimaryFast,
  transTap,
} from '@/lib/config';

export const stampVariants = {
  // exit: mobile => ({
  //   scale: 0,
  //   // rotate: 180,
  //   skew: -45,
  //   transition: {
  //     ...transSecondary,
  //     ...(mobile && { delay: extraDelay }),
  //   },
  // }),
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 1.05,
    transition: transTap,
  },
  transition: transPrimaryFast,
};

export const svgVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 12,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

export const overlayVariants = {
  exit: {
    scale: [0, 10],
    transition: {
      ...transPrimary,
      delay: extraDelay,
    },
  },
};
