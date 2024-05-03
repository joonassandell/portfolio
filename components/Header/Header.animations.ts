import { type AnimationProps, type Variants } from 'framer-motion';
import {
  TRANS_PRIMARY,
  TRANS_PRIMARY_FAST,
  TRANS_PRIMARY_FASTEST,
  TRANS_SECONDARY_FAST,
  TRANS_SECONDARY_FASTEST,
} from '@/lib/config';

/* =======================================
 * Header, Logo, Separator etc.
 * ======================================= */

/**
 * Note that these enter/exit animations rely heavily on the mask animation, so
 * if you add too much delay things may look shit, so keep them in sync.
 */
export const enterExitBtnTextIfNavOpen: AnimationProps = {
  exit: {
    opacity: 0,
  },
  transition: TRANS_SECONDARY_FASTEST,
};

export const enterExitBtnArrowIfNavOpen: AnimationProps = {
  exit: {
    opacity: 0,
    y: '1rem',
  },
  transition: TRANS_SECONDARY_FASTEST,
};

export const enterExitBtnText: AnimationProps = {
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
  },
  transition: TRANS_PRIMARY_FAST,
};

export const enterExitBtnArrow: AnimationProps = {
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
  },
  transition: { ...TRANS_PRIMARY_FAST, delay: 0.1 },
};

export const ctrlVariant: Variants = {
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

export const ctrlItemOutVariant: Variants = {
  open: {
    transition: TRANS_SECONDARY_FAST,
    y: '-3rem',
  },
  closed: {
    transition: TRANS_PRIMARY_FAST,
    y: 0,
  },
};

export const ctrlItemInVariant: Variants = {
  open: {
    transition: TRANS_PRIMARY_FAST,
    y: 0,
  },
  initial: {
    y: '3rem',
  },
  closed: {
    transition: TRANS_SECONDARY_FAST,
    y: '3rem',
  },
};

/* =======================================
 * Mask
 * ======================================= */

export const maskOpen = {
  transition: TRANS_PRIMARY,
};

export const maskClose = {
  transition: TRANS_PRIMARY,
};

/* =======================================
 * Navigation
 * ======================================= */

export const navVariant: Variants = {
  open: {
    transition: { delayChildren: 0.1, staggerChildren: 0.05 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const navItemVariant: Variants = {
  open: {
    opacity: 1,
    transition: TRANS_PRIMARY_FAST,
    y: 0,
  },
  initial: {
    opacity: 0,
    transition: TRANS_PRIMARY_FAST,
    y: 88,
  },
  closed: {
    opacity: 0,
    transition: TRANS_PRIMARY_FAST,
    y: 88,
  },
};

export const marqueeVariants: Variants = {
  in: (pos: 'top' | 'bottom') => {
    if (pos === 'top') {
      return {
        y: ['-102%', '0%'],
      };
    }

    return {
      y: ['102%', '0%'],
    };
  },
  out: (pos: 'top' | 'bottom') => {
    if (pos === 'top') {
      return {
        y: '-102%',
      };
    }

    return {
      y: '102%',
    };
  },
};

export const marqueeInnerVariants: Variants = {
  in: (pos: 'top' | 'bottom') => {
    if (pos === 'top') {
      return {
        y: ['102%', '0%'],
      };
    }

    return {
      y: ['-102%', '0%'],
    };
  },
  out: (pos: 'top' | 'bottom') => {
    if (pos === 'top') {
      return {
        y: '102%',
      };
    }

    return {
      y: '-102%',
    };
  },
};

export const marqueeTransition = TRANS_PRIMARY_FASTEST;
