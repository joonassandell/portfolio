import {
  transPrimary,
  transPrimaryFast,
  transSecondaryFast,
  transSecondaryFastest,
} from '../../lib/config';

/**
 * Note that these enter/exit animations rely heavily on the mask animation, so
 * if you add too much delay things may look shit, so keep them in sync.
 */
const enterExitBtnTextIfNavOpen = {
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: -16,
  },
  exit: {
    opacity: 0,
    transition: transSecondaryFastest,
  },
  transition: { ...transSecondaryFast, delay: 0.6 },
};

const enterExitBtnArrowIfNavOpen = {
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: -16,
  },
  exit: {
    opacity: 0,
    y: 24,
    transition: transSecondaryFastest,
  },
  transition: { ...transSecondaryFastest, delay: 0.9 },
};

const enterExitBtnText = {
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: -16,
  },
  exit: {
    opacity: 0,
    y: 24,
    transition: { ...transPrimaryFast, delay: 0.15 },
  },
  transition: transPrimaryFast,
};

const enterExitBtnArrow = {
  ...enterExitBtnText,
  exit: {
    opacity: 0,
    y: 32,
    transition: { ...transPrimaryFast, delay: 0.2 },
  },
  transition: { ...transPrimaryFast, delay: 0.03 },
};

/**
 * Mask
 */
const maskOpen = {
  transition: transPrimary,
};

const maskClose = {
  transition: transPrimary,
};

/**
 * Nav (in mask)
 */
const navVariant = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const navItemVariant = {
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
const ctrlVariant = {
  open: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.03,
    },
  },
  closed: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.03,
    },
  },
};

const ctrlItemOutVariant = {
  open: {
    transition: transSecondaryFast,
    y: '-3rem',
  },
  closed: {
    transition: transPrimaryFast,
    y: 0,
  },
};

const ctrlItemInVariant = {
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

export {
  ctrlItemInVariant,
  ctrlItemOutVariant,
  ctrlVariant,
  enterExitBtnArrow,
  enterExitBtnArrowIfNavOpen,
  enterExitBtnText,
  enterExitBtnTextIfNavOpen,
  maskClose,
  maskOpen,
  navItemVariant,
  navVariant,
};
