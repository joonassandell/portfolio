// 'linear'
// 'easeIn', 'easeOut', 'easeInOut'
// 'circIn', 'circOut', 'circInOut'
// 'backIn', 'backOut', 'backInOut'
// 'anticipate'
// easeInOutExpo [0.87, 0, 0.13, 1]
// easeInOutQuart [0.76, 0, 0.24, 1]

const easing = [0.76, 0, 0.18, 1];
const easingSecondary = [0.87, 0, 0.13, 1];

const transPrimary = {
  duration: 1.2,
  ease: easing,
};

const transPrimaryFast = {
  duration: 0.6,
  ease: easing,
};

const transPrimaryFastest = {
  duration: 0.3,
  ease: easing,
};

const transSecondary = {
  duration: 1,
  ease: easingSecondary,
};

const transSecondaryFast = {
  duration: 0.6,
  ease: easingSecondary,
};

const transSecondaryFastest = {
  duration: 0.3,
  ease: easingSecondary,
};

const scrollToDuration = 200;

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
];

const mq = {
  xxxs: 'all and (min-width: 320px)',
  xxs: 'all and (min-width: 360px)',
  xs: 'all and (min-width: 480px)',
  s: 'all and (min-width: 600px)',
  m: 'all and (min-width: 768px)',
  ml: 'all and (min-width: 900px)',
  l: 'all and (min-width: 1024px)',
  xl: 'all and (min-width: 1200px)',
  xxl: 'all and (min-width: 1280px)',
  xxxl: 'all and (min-width: 1440px)',
  xxxxl: 'all and (min-width: 1528px)',
  xxxxxl: 'all and (min-width: 1920px)',
  xxxxxl: 'all and (min-width: 2560px)',
};

export {
  easing,
  easingSecondary,
  mq,
  sitemap,
  transPrimary,
  transPrimaryFast,
  transPrimaryFastest,
  transSecondary,
  transSecondaryFast,
  transSecondaryFastest,
  scrollToDuration,
};
