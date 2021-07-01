import { transPrimary, transSecondary, transTertiary } from '../../lib/config';

/**
 * Extra delay is for smoother animation in mobile,
 * check later if this could be fixed in some other way.
 */
const extraDelay = 0.5;

export const headingVariants = {
  exit: {
    y: '-175%',
    // transition: transPrimary,
    transition: { ...transPrimary, delay: extraDelay },
  },
};

export const bgVariants = {
  exit: {
    height: '100vh',
    background: [
      'linear-gradient(180deg, #E9E9E9 0%, rgba(233, 233, 233, 1) 100%)',
      'linear-gradient(180deg, #E9E9E9 0%, rgba(233, 233, 233, 0) 100%)',
    ],
    // transition: transSecondary,
    transition: { ...transSecondary, delay: extraDelay },
  },
};

export const dropVariants = {
  exit: {
    opacity: 1,
    transition: {
      ...transTertiary,
      delay: 0.25 + extraDelay,
    },
    y: 0,
  },
  preAnimation: {
    opacity: 0,
    y: -24,
  },
};

export const dropVariants2 = {
  exit: {
    opacity: 1,
    transition: {
      ...transTertiary,
      delay: 0.1 + extraDelay,
    },
    y: 0,
  },
  preAnimation: {
    opacity: 0,
    y: -96,
  },
};

export const dropVariants3 = {
  exit: {
    opacity: 1,
    transition: {
      ...transTertiary,
      delay: 0.25 + extraDelay,
    },
    y: 0,
  },
  preAnimation: {
    opacity: 0,
    y: -40,
  },
};
