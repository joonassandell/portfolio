import {
  transPrimary,
  transPrimaryFast,
  transPrimaryFastest,
  transSecondaryFast,
  transSecondaryFastest,
} from '@/lib/config';

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
    transition: { ...transPrimaryFast },
  },
  transition: transPrimaryFast,
};

export const enterExitBtnArrow = {
  ...enterExitBtnText,
  exit: {
    opacity: 0,
    y: '-2rem',
    transition: { ...transPrimaryFast, delay: 0.1 },
  },
  transition: { ...transPrimaryFast, delay: 0.03 },
};

export const maskOpen = {
  transition: transPrimary,
};

export const maskClose = {
  transition: transPrimary,
};

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
    transition: transPrimaryFast,
    y: 88,
  },
  closed: {
    opacity: 0,
    transition: transPrimaryFast,
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

export const marqueeVariants = {
  in: pos => {
    if (pos === 'top') {
      return {
        y: ['-102%', '0%'],
      };
    }

    if (pos === 'bottom') {
      return {
        y: ['102%', '0%'],
      };
    }
  },
  out: pos => {
    if (pos === 'top') {
      return {
        y: '-102%',
      };
    }

    if (pos === 'bottom') {
      return {
        y: '102%',
      };
    }
  },
  transition: transPrimaryFastest,
};

export const marqueeInnerVariants = {
  in: pos => {
    if (pos === 'top') {
      return {
        y: ['102%', '0%'],
      };
    }

    if (pos === 'bottom') {
      return {
        y: ['-102%', '0%'],
      };
    }
  },
  out: pos => {
    if (pos === 'top') {
      return {
        y: '102%',
      };
    }

    if (pos === 'bottom') {
      return {
        y: '-102%',
      };
    }
  },
};
