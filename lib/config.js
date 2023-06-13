/**
 * Various animation easings, durations etc.
 *
 * 'linear'
 * 'easeIn', 'easeOut', 'easeInOut'
 * 'circIn', 'circOut', 'circInOut'
 * 'backIn', 'backOut', 'backInOut'
 * 'anticipate'
 * easeInOutExpo [0.87, 0, 0.13, 1]
 * easeInOutQuart [0.76, 0, 0.24, 1]
 */
export const ease = [0.68, 0, 0.1, 1]; // [0.76, 0, 0.18, 1]
export const easeCSS = 'cubic-bezier(0.68, 0, 0.1, 1)';
export const easeSecondary = [0.87, 0, 0.13, 1];
export const easeSecondaryCSS = 'cubic-bezier(0.87, 0, 0.13, 1)';
export const easeTertiary = [0.4, 0, 0.28, 1];

export const transPrimary = {
  duration: 1.3,
  ease: ease,
};

export const transPrimaryFast = {
  duration: 0.6,
  ease: ease,
};

export const transPrimaryFastest = {
  duration: 0.3,
  ease: ease,
};

export const transSecondary = {
  duration: 1,
  ease: easeSecondary,
};

export const transSecondaryFast = {
  duration: 0.6,
  ease: easeSecondary,
};

export const transSecondaryFastest = {
  duration: 0.3,
  ease: easeSecondary,
};

export const transTertiary = {
  duration: 1.3,
  ease: easeTertiary,
};

export const transTertiaryFast = {
  duration: 0.8,
  ease: easeTertiary,
};

export const transTertiaryFastest = {
  duration: 0.3,
  ease: easeTertiary,
};

export const transTemplate = {
  duration: 1.2,
  ease: [0.76, 0, 0.18, 1],
};

export const transTap = {
  duration: 0.1,
};

/**
 * Scroll
 */
export const scrollToDuration = 200;
export const scrollSpeed = 1.5;

/**
 * Variants
 */
export const fadeOutVariants = {
  hidden: {
    opacity: 0,
    transition: transPrimaryFast,
  },
};

/**
 * Sitemap
 */
export const content = {
  defaultNavTitle: 'Selected works',
};

export const sitemap = {
  primary: [
    {
      color: 'var(--biocode-primary)',
      id: 'biocode',
      navTitle: 'Biocode',
      title: 'Biocode',
      url: '/biocode',
      year: new Date().getFullYear(),
    },
    {
      color: 'var(--oras-primary)',
      id: 'oras',
      navTitle: 'Oras',
      title: 'Oras',
      url: '/oras',
      year: 2016,
    },
    {
      color: 'blue',
      id: 'omoroi',
      navTitle: 'Omoroi',
      title: 'Omoroi',
      url: '/omoroi',
      year: 2019,
    },
    {
      color: 'lightblue',
      id: 'mediasignal',
      navTitle: 'Mediasignal',
      title: 'Mediasignal',
      url: '/mediasignal',
      year: 2018,
    },
    {
      color: 'blue',
      id: 'hw-company',
      navTitle: 'Hw-company',
      title: 'Hw-company',
      url: '/hw-company',
      year: 2018,
    },
    {
      color: 'green',
      id: 'hankkija',
      navTitle: 'Hankkija',
      title: 'Hankkija',
      url: '/hankkija',
      year: 2020,
    },
    {
      color: 'pink',
      id: 'dribbbles',
      navTitle: 'Dribbbles',
      title: 'Dribbbles',
      url: '/dribbbles',
      year: '2012—2020',
    },
    {
      color: 'white',
      id: 'home',
      navTitle: 'Browse all',
      title: 'Portfolio',
      url: '/',
      year: '2016—2021',
    },
  ],
  secondary: [
    {
      title: 'About',
      navTitle: 'About',
      id: 'about',
      type: 'secondary',
      url: '/about',
    },
    {
      title: 'Contact',
      navTitle: 'Contact',
      id: 'contact',
      type: 'secondary',
      url: 'mailto:me@joonassandell.com?subject=Hello Joonas 👋&body=Hi %0D%0A%0D%0A write something to me...',
    },
  ],
};

export const links = {
  social: [
    {
      title: 'Dribbble',
      id: 'dribbble',
      url: 'https://dribbble.com/joonassandell',
    },
    {
      title: 'Twitter',
      titleAlt: 'Tw',
      id: 'twitter',
      url: 'https://twitter.com/joonassandell',
    },
    {
      title: 'Instagram',
      titleAlt: 'Ig',
      id: 'instagram',
      url: 'https://www.instagram.com/mode.apart',
    },
    {
      title: 'LinkedIn',
      titleAlt: 'In',
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/joonassandell',
    },
    {
      title: 'Github',
      titleAlt: 'Git',
      id: 'github',
      url: 'https://github.com/joonassandell',
    },
    {
      title: 'SoundCloud',
      titleAlt: 'Sc',
      id: 'soundcloud',
      url: 'https://soundcloud.com/modeapart',
    },
  ],
};

/**
 * Media queries
 *
 * Desktop & mobile match w/ locomotive-scroll smooth setting
 */
export const mq = {
  xxxs: '(min-width: 320px)',
  xxs: '(min-width: 360px)',
  xs: '(min-width: 480px)',
  s: '(min-width: 600px)',
  m: '(min-width: 768px)',
  ml: '(min-width: 900px)',
  l: '(min-width: 1024px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1280px)',
  xxxl: '(min-width: 1528px)',
  xxxxl: '(min-width: 1680px)',
  xxxxxl: '(min-width: 1920px)',
  xxxxxl: '(min-width: 2560px)',
  xxxxxxl: '(min-width: 3840px)',
  desktop: '(min-width: 1024px)',
  mobile: '(max-width: 1023px)',
};
