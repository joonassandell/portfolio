import { type AnimationProps, type Variants } from 'framer-motion';
import {
  TRANS_PRIMARY,
  TRANS_PRIMARY_FAST,
  TRANS_PRIMARY_FASTEST,
  TRANS_SECONDARY_FAST,
  TRANS_SECONDARY_FASTEST,
} from '@/lib/config';

/* =======================================
 * Logo, button, reveal items
 * ======================================= */

/**
 * Note that these enter/exit animations rely heavily on the mask animation, so
 * if you add too much delay things may not work well. Keep these in sync.
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
  exit: {
    opacity: 0,
    y: '-2rem',
  },
  initial: {
    opacity: 0,
    y: '2rem',
  },
  transition: TRANS_PRIMARY_FAST,
};

export const enterExitBtnArrow: AnimationProps = {
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: '-2rem',
  },
  initial: {
    opacity: 0,
    y: '2rem',
  },
  transition: { ...TRANS_PRIMARY_FAST, delay: 0.1 },
};

export const mainItemVariant: Variants = {
  closed: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.03,
    },
  },
  open: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.03,
    },
  },
};

export const mainItemInVariant: Variants = {
  closed: {
    transition: TRANS_SECONDARY_FAST,
    y: '3rem',
  },
  initial: {
    y: '3rem',
  },
  open: {
    transition: TRANS_PRIMARY_FAST,
    y: 0,
  },
};

export const mainItemOutVariant: Variants = {
  closed: {
    transition: TRANS_PRIMARY_FAST,
    y: 0,
  },
  open: {
    transition: TRANS_SECONDARY_FAST,
    y: '-3rem',
  },
};

/* =======================================
 * Mask
 * ======================================= */

export const maskOpenTransition = TRANS_PRIMARY;

export const maskCloseTransition = TRANS_PRIMARY;

export const maskNavVariant: Variants = {
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  open: {
    transition: { delayChildren: 0.1, staggerChildren: 0.05 },
  },
};

export const maskItemVariant: Variants = {
  closed: ({ y = '11rem' } = {}) => ({
    opacity: 0,
    transition: TRANS_PRIMARY_FAST,
    y,
  }),
  initial: ({ y = '11rem' } = {}) => ({
    opacity: 0,
    transition: TRANS_PRIMARY_FAST,
    y,
  }),
  open: {
    opacity: 1,
    transition: TRANS_PRIMARY_FAST,
    y: 0,
  },
};

export const maskItemMarqueeVariant: Variants = {
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

export const maskItemMarqueeInnerVariant: Variants = {
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

export const maskItemMarqueeTransition = TRANS_PRIMARY_FASTEST;
