import { type BezierDefinition, type Variants } from 'motion/react'

/* =======================================
 * Environment variables
 * ======================================= */

export const DISABLE_LOADING =
  process.env.NEXT_PUBLIC_DISABLE_LOADING === 'true'
export const GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
export const DEVELOPMENT = process.env.NODE_ENV === 'development'
export const PRODUCTION = process.env.NODE_ENV === 'production'
export const PRODUCTION_LIVE =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
export const PREVIEW = process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
export const BUILD_DATE = process.env.NEXT_PUBLIC_BUILD_DATE as string
export const GIT_COMMIT_SHA = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
export const UI_LAB_URL = process.env.NEXT_PUBLIC_UI_LAB_URL as string
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ??
  (PREVIEW
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`)

/* =======================================
 * App
 * ======================================= */

export const APP = {
  header: {
    defaultNavTitle: 'Work',
  },
  meta: {
    appName: 'Joonas Sandell',
    description:
      'Portfolio of Joonas Sandell, UI/UX Designer and creative Front-end Developer based in Helsinki, Finland.',
    favIcon: '/static/favicon.svg?v=2',
    favIconIco: '/static/favicon.ico?v=2',
    ogImage: `${APP_URL}/static/og.jpg`,
    title: 'Joonas Sandell — Designer & Developer',
    titlePrefix: 'Joonas Sandell',
    touchIcon: '/static/apple-touch-icon.png?v=2',
  },
  person: {
    email: 'me@joonassandell.com',
    location: 'Helsinki, Finland',
    name: 'Joonas Sandell',
    nickname: 'joonassandell',
    thumbnail: `${APP_URL}/images/joonassandell-thumbnail.jpg`,
    title: {
      combined: 'UI/UX Designer and Front-end Developer',
      design: 'UI/UX Designer',
      developer: 'Front-end Developer',
      simple: 'Designer & Developer',
    },
    twitter: '@joonassandell',
    url: 'https://joonassandell.com',
  },
} as const

/* =======================================
 * Animations
 * =======================================
 *
 * easeInOutExpo: [0.87, 0, 0.13, 1]
 * easeInOutQuart: [0.76, 0, 0.24, 1]
 *
 * @link https://www.framer.com/motion/easing-functions
 */

export const EASE: BezierDefinition = [0.68, 0, 0.1, 1]
export const EASE_CSS = 'cubic-bezier(0.68, 0, 0.1, 1)'
export const EASE_SECONDARY: BezierDefinition = [0.4, 0, 0.28, 1]

export const TRANS_PRIMARY = {
  duration: 1.3,
  ease: EASE,
} as const

export const TRANS_PRIMARY_FAST = {
  duration: 0.6,
  ease: EASE,
} as const

export const TRANS_PRIMARY_FASTEST = {
  duration: 0.3,
  ease: EASE,
} as const

export const TRANS_SECONDARY = {
  duration: 1.3,
  ease: EASE_SECONDARY,
} as const

export const TRANS_SECONDARY_FAST = {
  duration: 1,
  ease: EASE_SECONDARY,
} as const

export const TRANS_SECONDARY_FASTEST = {
  duration: 0.3,
  ease: EASE_SECONDARY,
} as const

export const TRANS_TEMPLATE = {
  duration: 1,
  ease: [0.76, 0, 0.18, 1],
} as const

export const TRANS_TAP = {
  duration: 0.1,
} as const

/* =======================================
 * Scroll
 * ======================================= */

export const SCROLL_TO_DURATION = 1

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const SCROLL_SPEED = {
  fastest: 0.4,
  fast: 0.25,
  medium: 0.15,
  slow: 0.1,
  slowest: 0.05,
} as const

/**
 * @link https://easings.net/#easeOutQuart
 */
export const SCROLL_TO_EASE = (x: number) => 1 - Math.pow(1 - x, 4)

/* =======================================
 * Various
 * ======================================= */

export const SLOW_NETWORK_DELAY = 1000
export const FONT_SIZE = 16

/* =======================================
 * Variants
 * ======================================= */

export const FADE_OUT_VARIANTS: Readonly<Variants> = {
  animate: {
    opacity: 0,
    transition: TRANS_PRIMARY_FAST,
  },
}

export const MOVE_IN_VARIANTS: Readonly<Variants> = {
  animate: ({ delay = 0, skewYdelay = 0 } = {}) => ({
    opacity: 1,
    skewY: 0,
    transition: {
      ...TRANS_SECONDARY_FAST,
      ...(delay && { delay }),
      opacity: {
        ...TRANS_SECONDARY,
        ...(delay && { delay }),
      },
      skewY: {
        ...TRANS_SECONDARY,
        ...((delay || skewYdelay) && { delay: skewYdelay ?? delay }),
      },
    },
    y: 0,
  }),
  initial: {
    opacity: 0,
    skewY: 5,
    y: '5rem',
  },
}

/* =======================================
 * Media queries
 * ======================================= */

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const MQ = {
  '3xs': '(min-width: 320px)',
  '2xs': '(min-width: 360px)',
  xs: '(min-width: 480px)',
  s: '(min-width: 600px)',
  m: '(min-width: 768px)',
  ml: '(min-width: 900px)',
  l: '(min-width: 1024px)',
  xl: '(min-width: 1200px)',
  '2xl': '(min-width: 1280px)',
  '3xl': '(min-width: 1528px)',
  '4xl': '(min-width: 1680px)',
  '5xl': '(min-width: 1920px)',
  '6xl': '(min-width: 2560px)',
  '7xl': '(min-width: 3840px)',
} as const
