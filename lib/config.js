// 'linear'
// 'easeIn', 'easeOut', 'easeInOut'
// 'circIn', 'circOut', 'circInOut'
// 'backIn', 'backOut', 'backInOut'
// 'anticipate'
// easeInOutExpo [0.87, 0, 0.13, 1]
// easeInOutQuart [0.76, 0, 0.24, 1]

const ease = [0.68, 0, 0.1, 1]; // [0.76, 0, 0.18, 1]
const easeCSS = 'cubic-bezier(0.68, 0, 0.1, 1)';
const easeSecondary = [0.87, 0, 0.13, 1];
const easeSecondaryCSS = 'cubic-bezier(0.87, 0, 0.13, 1)';
const easeTertiary = [0.4, 0, 0.28, 1];

const transPrimary = {
  duration: 1.3,
  ease: ease,
};

const transPrimaryFast = {
  duration: 0.7,
  ease: ease,
};

const transPrimaryFastest = {
  duration: 0.4,
  ease: ease,
};

const transSecondary = {
  duration: 1,
  ease: easeSecondary,
};

const transSecondaryFast = {
  duration: 0.7,
  ease: easeSecondary,
};

const transSecondaryFastest = {
  duration: 0.4,
  ease: easeSecondary,
};

const transTertiary = {
  duration: 1.3,
  ease: easeTertiary,
};

const transTertiaryFast = {
  duration: 0.7,
  ease: easeTertiary,
};

const scrollToDuration = 400;
const scrollSpeed = 1.5;

const sitemap = [
  {
    title: 'Oras',
    navTitle: 'Oras',
    id: 'oras',
    url: '/oras',
  },
  {
    title: 'Omoroi',
    navTitle: 'Omoroi',
    id: 'omoroi',
    url: '/omoroi',
  },
  {
    title: 'Biocode',
    navTitle: 'Biocode',
    id: 'biocode',
    url: '/biocode',
  },
  {
    title: 'Mediasignal',
    navTitle: 'Mediasignal',
    id: 'mediasignal',
    url: '/mediasignal',
  },
  {
    title: 'Hankkija',
    navTitle: 'Hankkija',
    id: 'hankkija',
    url: '/hankkija',
  },
  {
    title: 'Hukka',
    navTitle: 'Hukka',
    id: 'hukka',
    url: '/hukka',
  },
  {
    title: 'Hw-company',
    navTitle: 'Hw-company',
    id: 'hw-company',
    url: '/hw-company',
  },
  {
    title: 'Dribbbles',
    navTitle: 'Dribbbles',
    id: 'dribbbles',
    url: '/dribbbles',
  },
  {
    title: 'Selected works',
    navTitle: 'Browse all',
    id: 'home',
    url: '/',
  },
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
    url:
      'mailto:me@joonassandell.com?subject=Hello Joonas 👋&body=Hi %0D%0A%0D%0A write something to me...',
  },
];

/**
 * Desktop & mobile match w/ locomotive-scroll smooth setting
 */
const mq = {
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

export {
  ease,
  easeCSS,
  easeSecondary,
  easeSecondaryCSS,
  mq,
  scrollToDuration,
  scrollSpeed,
  sitemap,
  transPrimary,
  transPrimaryFast,
  transPrimaryFastest,
  transSecondary,
  transSecondaryFast,
  transSecondaryFastest,
  transTertiary,
  transTertiaryFast,
};
