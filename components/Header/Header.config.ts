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
export const ENTER_EXIT_BTN_TEXT_IF_NAV_OPEN: AnimationProps = {
  exit: {
    opacity: 0,
  },
  transition: TRANS_SECONDARY_FASTEST,
} as const;

export const ENTER_EXIT_BTN_ARROW_IF_NAV_OPEN: AnimationProps = {
  exit: {
    opacity: 0,
    y: '1rem',
  },
  transition: TRANS_SECONDARY_FASTEST,
} as const;

export const ENTER_EXIT_BTN_TEXT: AnimationProps = {
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
} as const;

export const ENTER_EXIT_BTN_ARROW: AnimationProps = {
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
} as const;

export const MAIN_ITEM_VARIANT: Variants = {
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
} as const;

export const MAIN_ITEM_IN_VARIANT: Variants = {
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
} as const;

export const MAIN_ITEM_OUT_VARIANT: Variants = {
  closed: {
    transition: TRANS_PRIMARY_FAST,
    y: 0,
  },
  open: {
    transition: TRANS_SECONDARY_FAST,
    y: '-3rem',
  },
} as const;

/* =======================================
 * Mask
 * ======================================= */

export const MASK_OPEN_TRANSITION = TRANS_PRIMARY;

export const MASK_CLOSE_TRANSITION = TRANS_PRIMARY;

export const MASK_NAV_VARIANT: Variants = {
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  open: {
    transition: { delayChildren: 0.1, staggerChildren: 0.05 },
  },
} as const;

export const MASK_ITEM_VARIANT: Variants = {
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
} as const;

export const MASK_ITEM_MARQUEE_VARIANT: Variants = {
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
} as const;

export const MASK_ITEM_MARQUEE_INNER_VARIANT: Variants = {
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
} as const;

export const MASK_ITEM_MARQUEE_TRANSITION = TRANS_PRIMARY_FASTEST;
