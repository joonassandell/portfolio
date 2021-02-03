import {
  transPrimaryFast,
  transPrimaryFastest,
  transSecondaryFast,
  transSecondaryFastest,
} from "../../lib/config";

const enterExitBtnTextIfNavOpenVariant = {
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

const enterExitBtnArrowIfNavOpenVariant = {
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
    y: 16,
    transition: transSecondaryFastest,
  },
  transition: { ...transSecondaryFastest, delay: 0.9 },
};

const enterExitBtnTextVariant = {
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
    y: 16,
    transition: transPrimaryFastest,
  },
  transition: transPrimaryFastest,
};

const enterExitBtnArrowVariant = {
  ...enterExitBtnTextVariant,
  exit: {
    opacity: 0,
    y: 16,
    transition: { ...transPrimaryFastest, delay: 0.05 },
  },
  transition: { ...transPrimaryFastest, delay: 0.05 },
};

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
  closed: {
    opacity: 0,
    transition: transSecondaryFast,
    y: 88,
  },
};

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
      staggerChildren: 0.05,
    },
  },
};

const ctrlItemOutVariant = {
  open: {
    transition: transSecondaryFast,
    y: -36,
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
  closed: {
    transition: transSecondaryFast,
    y: 36,
  },
};

export {
  enterExitBtnTextIfNavOpenVariant,
  enterExitBtnArrowIfNavOpenVariant,
  enterExitBtnTextVariant,
  enterExitBtnArrowVariant,
  navVariant,
  navItemVariant,
  ctrlVariant,
  ctrlItemOutVariant,
  ctrlItemInVariant,
};
