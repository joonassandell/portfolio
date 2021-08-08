import {
  transPrimary,
  transTertiary,
  transTertiaryFast,
  transPrimaryFast,
  transPrimaryFastest,
  transSecondary,
  transSecondaryFast,
  transSecondaryFastest,
} from '@/lib/config';

export const clipVariants = {
  inView: {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    opacity: 1,
    scale: 1,
    transition: transPrimary,
  },
  hidden: {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    opacity: 1,
    scale: 1.07,
  },
};

/**
 * Added is mask figure is visible after hero transition from homepage.
 * This may not be necessary.
 */
export const maskVariants = {
  inView: {
    opacity: 1,
    transition: transPrimaryFast,
  },
  hidden: {
    opacity: 0,
  },
};

export const moveVariants = {
  inView: {
    opacity: 1,
    scale: 1,
    transition: transTertiaryFast,
    y: 0,
  },
  hidden: {
    opacity: 0,
    scale: 1.07,
    y: '4rem',
  },
};
