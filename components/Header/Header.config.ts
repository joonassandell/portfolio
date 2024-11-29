import { type AnimationProps, type Variants } from 'motion/react'
import {
  FONT_SIZE,
  TRANS_PRIMARY,
  TRANS_PRIMARY_FAST,
  TRANS_PRIMARY_FASTEST,
} from '@/lib/config'
import { getCSSVarValue } from '@/lib/utils'

/* =======================================
 * General
 * ======================================= */

export const HEADER_HEIGHT =
  parseFloat(getCSSVarValue('--Header-height') ?? '0') * FONT_SIZE

/* =======================================
 * Logo, button, reveal items
 * ======================================= */

/**
 * Note that these enter/exit animations rely heavily on the mask animation, so
 * if you add too much delay things may not work well. Keep these in sync.
 */
export const BTN_ENTER_EXIT_OPEN: AnimationProps = {
  exit: {
    opacity: 0,
  },
  transition: TRANS_PRIMARY_FASTEST,
}

export const BTN_ENTER_EXIT_TEXT: AnimationProps = {
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
}

export const BTN_ENTER_EXIT_ARROW: AnimationProps = {
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
}

export const MAIN_ITEM_VARIANT: Readonly<Variants> = {
  close: {
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
}

export const MAIN_ITEM_IN_VARIANT: Readonly<Variants> = {
  close: {
    transition: TRANS_PRIMARY_FAST,
    y: '3rem',
  },
  initial: {
    y: '3rem',
  },
  open: {
    transition: TRANS_PRIMARY_FAST,
    y: 0,
  },
}

export const MAIN_ITEM_OUT_VARIANT: Readonly<Variants> = {
  close: {
    transition: TRANS_PRIMARY_FAST,
    y: 0,
  },
  open: {
    transition: TRANS_PRIMARY_FAST,
    y: '-3rem',
  },
}

/* =======================================
 * Mask
 * ======================================= */

export const MASK_OPEN_TRANSITION = TRANS_PRIMARY

export const MASK_CLOSE_TRANSITION = TRANS_PRIMARY

export const MASK_NAV_VARIANT: Readonly<Variants> = {
  close: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  open: {
    transition: { delayChildren: 0.1, staggerChildren: 0.05 },
  },
}

export const MASK_ITEM_VARIANT: Readonly<Variants> = {
  close: ({ y = '11rem' } = {}) => ({
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
}

export const MASK_ITEM_MARQUEE_VARIANT: Readonly<Variants> = {
  in: (pos: 'top' | 'bottom') => {
    if (pos === 'top') {
      return {
        y: ['-102%', '0%'],
      }
    }

    return {
      y: ['102%', '0%'],
    }
  },
  out: (pos: 'top' | 'bottom') => {
    if (pos === 'top') {
      return {
        y: '-102%',
      }
    }

    return {
      y: '102%',
    }
  },
}

export const MASK_ITEM_MARQUEE_INNER_VARIANT: Readonly<Variants> = {
  in: (pos: 'top' | 'bottom') => {
    if (pos === 'top') {
      return {
        y: ['102%', '0%'],
      }
    }

    return {
      y: ['-102%', '0%'],
    }
  },
  out: (pos: 'top' | 'bottom') => {
    if (pos === 'top') {
      return {
        y: '102%',
      }
    }

    return {
      y: '-102%',
    }
  },
}

export const MASK_ITEM_MARQUEE_TRANSITION = TRANS_PRIMARY_FASTEST
