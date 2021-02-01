import {
  transPrimary,
  transPrimaryFast,
  transPrimaryFastest,
  transSecondary,
  transSecondaryFast,
  transSecondaryFastest,
} from "../../lib/config";

const enterExitAnimButtonText = {
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
    // , delay: 0.3 or any slower transition breaks the mask anim
    transition: { ...transSecondaryFastest },
  },
  transition: { ...transSecondaryFastest },
};

const enterExitAnimBtnArrow = {
  // ...enterExitAnimButtonText,
  // transition: { ...transSecondaryFast, delay: 0.74, duration: 0.4 },
  // exit: {
  //   opacity: 0,
  //   y: 16,
  //   transition: { ...transSecondaryFastest, delay: 0 },
  // },
  // transition: { ...transSecondaryFast, delay: 0, duration: 0.4 },
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
    transition: { ...transSecondaryFastest },
  },
  transition: { ...transSecondaryFastest, delay: 0.6 },
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
    // transition: { ...transSecondaryFastest, duration: 0.2 },
    y: 36,
  },
};

export {
  enterExitAnimButtonText,
  enterExitAnimBtnArrow,
  navVariant,
  navItemVariant,
  ctrlVariant,
  ctrlItemOutVariant,
  ctrlItemInVariant,
};
