import { type BezierDefinition, type Variants } from 'framer-motion';
import { type Links, type Sitemap } from '@/types';

/* =======================================
 * Sitemap, content, links
 * ======================================= */

export const SITEMAP: Sitemap = {
  common: [
    {
      id: 'about',
      navTitle: 'About',
      themeColor: '#eeeae5',
      title: 'About',
      url: '/about',
    },
    {
      id: 'milestones',
      navTitle: 'Milestones',
      title: 'Milestones',
      url: '/milestones',
    },
    {
      hidden: true,
      id: 'approach',
      navTitle: 'Approach',
      themeColor: '#eeeae5',
      title: 'Approach',
      url: '/approach',
    },
    {
      id: 'contact',
      navTitle: 'Contact',
      themeColor: '#c1c0b6',
      title: 'Contact',
      url: '/contact',
    },
  ],
  project: [
    {
      color: 'var(--biocode-primary)',
      id: 'biocode',
      imagesPath: './public/biocode/*.{jpg,png}',
      navTitle: 'Biocode',
      themeColor: '#00081F',
      title: 'Biocode',
      url: '/biocode',
      year: new Date().getFullYear(),
    },
    {
      color: 'var(--oras-primary)',
      id: 'oras',
      imagesPath: './public/oras/*.{jpg,png}',
      navTitle: 'Oras',
      themeColor: '#fefefe',
      title: 'Oras',
      url: '/oras',
      year: 2016,
    },
    {
      color: 'var(--mediasignal-primary)',
      id: 'mediasignal',
      imagesPath: './public/mediasignal/*.{jpg,png}',
      navTitle: 'Mediasignal',
      themeColor: '#C8D9E1',
      title: 'Mediasignal',
      url: '/mediasignal',
      year: 2019,
    },
    {
      color: 'var(--sandbox-primary)',
      id: 'sandbox',
      imagesPath: './public/sandbox/*.{jpg,png}',
      navTitle: 'Sandbox',
      themeColor: '#E2BCA7',
      title: 'Sandbox',
      url: '/sandbox',
      year: `2010–${new Date().getFullYear()}`,
    },
    {
      color: 'var(--more-work-primary)',
      id: 'more-work',
      imagesPath: './public/more-work/*.{jpg,png}',
      navTitle: 'More work',
      themeColor: '#CCCFC9',
      title: 'More work',
      url: '/more-work',
      year: `2010–${new Date().getFullYear()}`,
    },
    {
      color: 'var(--archive-primary)',
      hidden: true,
      id: 'archive',
      imagesPath: './public/archive/*.{jpg,png}',
      navTitle: 'Work archive',
      themeColor: '#CCCFC9',
      title: 'Archive',
      url: '/archive',
      year: '2010–2016',
    },
    {
      color: 'var(--white)',
      id: 'home',
      navTitle: 'Browse all',
      themeColor: '#eeeae5',
      title: 'Browse all',
      url: '/',
      year: `2010–${new Date().getFullYear()}`,
    },
  ],
} as const;

export const LINKS: Links = {
  common: [
    {
      id: 'source',
      title: 'View source',
      url: 'https://github.com/joonassandell/joonassandell-portfolio',
    },
  ],
  social: [
    {
      id: 'twitter',
      title: 'Twitter',
      url: 'https://twitter.com/joonassandell',
    },
    {
      id: 'github',
      title: 'Github',
      url: 'https://github.com/joonassandell',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/joonassandell',
    },
    {
      id: 'dribbble',
      title: 'Dribbble',
      url: 'https://dribbble.com/joonassandell',
    },
    {
      id: 'instagram',
      title: 'Instagram',
      url: 'https://www.instagram.com/mode.apart',
    },
    {
      id: 'soundcloud',
      title: 'SoundCloud',
      url: 'https://soundcloud.com/modeapart',
    },
  ],
} as const;

export const CONTENT = {
  defaultNavTitle: 'Selected works',
} as const;

/* =======================================
 * Animations
 * =======================================
 *
 * easeInOutExpo: [0.87, 0, 0.13, 1]
 * easeInOutQuart: [0.76, 0, 0.24, 1]
 *
 * @link https://www.framer.com/motion/easing-functions
 */

export const EASE: BezierDefinition = [0.68, 0, 0.1, 1];
export const EASE_CSS = 'cubic-bezier(0.68, 0, 0.1, 1)';
export const EASE_SECONDARY: BezierDefinition = [0.87, 0, 0.13, 1];
export const EASE_SECONDARY_CSS = 'cubic-bezier(0.87, 0, 0.13, 1)';
export const EASE_TERTIARY: BezierDefinition = [0.4, 0, 0.28, 1];

export const TRANS_PRIMARY = {
  duration: 1.3,
  ease: EASE,
};

export const TRANS_PRIMARY_FAST = {
  duration: 0.6,
  ease: EASE,
};

export const TRANS_PRIMARY_FASTEST = {
  duration: 0.3,
  ease: EASE,
};

export const TRANS_SECONDARY = {
  duration: 1,
  ease: EASE_SECONDARY,
};

export const TRANS_SECONDARY_FAST = {
  duration: 0.6,
  ease: EASE_SECONDARY,
};

export const TRANS_SECONDARY_FASTEST = {
  duration: 0.3,
  ease: EASE_SECONDARY,
};

export const TRANS_TERTIARY = {
  duration: 1.3,
  ease: EASE_TERTIARY,
};

export const TRANS_TERTIARY_FAST = {
  duration: 1,
  ease: EASE_TERTIARY,
};

export const TRANS_TERTIARY_FASTEST = {
  duration: 0.3,
  ease: EASE_TERTIARY,
};

export const TRANS_TEMPLATE = {
  duration: 1,
  ease: [0.76, 0, 0.18, 1],
};

export const TRANS_TAP = {
  duration: 0.1,
};

/* =======================================
 * Various
 * ======================================= */

export const SCROLL_TO_DURATION = 200;
export const SCROLL_SPEED = 1.5;
export const SLOW_NETWORK_DELAY = 1000;

/* =======================================
 * Variants
 * ======================================= */

export const FADE_OUT_VARIANTS: Variants = {
  animate: {
    opacity: 0,
    transition: TRANS_PRIMARY_FAST,
  },
};

export const JUMP_FIX_VARIANTS: Variants = {
  animate: {
    opacity: 1,
    transition: {
      delay: TRANS_TEMPLATE.duration + 0.3,
      duration: 0.3,
      ease: 'linear',
    },
  },
  initial: {
    opacity: 0,
  },
};

export const TEXT_VARIANTS: Variants = {
  animate: ({ delay = 0 } = {}) => ({
    opacity: 1,
    skewY: 0,
    transition: {
      ...TRANS_TERTIARY_FAST,
      ...(delay && { delay }),
    },
    y: 0,
  }),
  initial: {
    opacity: 0,
    skewY: 5,
    y: '5rem',
  },
};

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
} as const;

/* =======================================
 * Environment variables
 * ======================================= */

export const DISABLE_LOADING =
  process.env.NEXT_PUBLIC_DISABLE_LOADING === 'true';
export const GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const PRODUCTION = process.env.NODE_ENV === 'production';
export const PRODUCTION_LIVE =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';
export const PREVIEW = process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview';
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ??
  (PREVIEW
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`);
