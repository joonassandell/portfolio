import {
  transPrimary,
  transPrimaryFast,
  transSecondary,
  transSecondaryFast,
  transSecondaryFastest,
} from '../../lib/config';

/**
 * Note that these enter/exit animations rely heavily on the mask animation, so
 * if you add too much delay things may look shit, so keep them in sync.
 */
export const enterExitBtnTextIfNavOpen = {
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: '-2rem',
  },
  exit: {
    opacity: 0,
    transition: transSecondaryFastest,
  },
  transition: { ...transSecondaryFast, delay: 0.3 },
};

export const enterExitBtnArrowIfNavOpen = {
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: '-2rem',
  },
  exit: {
    opacity: 0,
    y: '1rem',
    transition: transSecondaryFastest,
  },
  transition: { ...transSecondaryFastest, delay: 0.5 },
};

export const enterExitBtnText = {
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: '2rem',
  },
  exit: {
    opacity: 0,
    y: '-2rem',
    transition: { ...transPrimaryFast, delay: 0.1 },
  },
  transition: transPrimaryFast,
};

export const enterExitBtnArrow = {
  ...enterExitBtnText,
  exit: {
    opacity: 0,
    y: '-2rem',
    transition: { ...transPrimaryFast, delay: 0.125 },
  },
  transition: { ...transPrimaryFast, delay: 0.03 },
};

/**
 * Mask
 *
 * 1. Add some delay to header mask to prevent flash of content.
 *    TODO: Figure out a better way later.
 */
export const maskOpen = {
  transition: { ...transPrimary, delay: 0.3 }, // [1.]
};

export const maskClose = {
  transition: transPrimary,
};

/**
 * Nav (in mask)
 */
export const navVariant = {
  open: {
    transition: { delayChildren: 0.1, staggerChildren: 0.05 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const navItemVariant = {
  open: {
    opacity: 1,
    transition: transPrimaryFast,
    y: 0,
  },
  initial: {
    opacity: 0,
    transition: transSecondaryFast,
    y: 88,
  },
  closed: {
    opacity: 0,
    transition: transSecondaryFast,
    y: 88,
  },
};

/**
 * Logo, Separator etc.
 */
export const ctrlVariant = {
  open: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.03,
    },
  },
  closed: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.03,
    },
  },
};

export const ctrlItemOutVariant = {
  open: {
    transition: transSecondaryFast,
    y: '-3rem',
  },
  closed: {
    transition: transPrimaryFast,
    y: 0,
  },
};

export const ctrlItemInVariant = {
  open: {
    transition: transPrimaryFast,
    y: 0,
  },
  initial: {
    y: '3rem',
  },
  closed: {
    transition: transSecondaryFast,
    y: '3rem',
  },
};
