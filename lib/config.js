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
    title: "Oras",
    id: "oras",
    link: "/projects/oras",
  },
  {
    title: "Omoroi",
    id: "omoroi",
    link: "/projects/omoroi",
  },
  {
    title: "Biocode",
    id: "biocode",
    link: "/projects/Biocode",
  },
  {
    title: "Mediasignal",
    id: "mediasignal",
    link: "/projects/mediasignal",
  },
  {
    title: "Hankkija",
    id: "hankkija",
    link: "/projects/hankkija",
  },
  {
    title: "Hukka",
    id: "hukka",
    link: "/projects/hukka",
  },
  {
    title: "Hw-company",
    id: "hw-company",
    link: "/projects/hw-company",
  },
  {
    title: "Dribbbles",
    id: "dribbbles",
    link: "/projects/dribbbles",
  },
  {
    title: "Browse all",
    id: "selected-works",
    link: "/",
  },
];

export {
  easing,
  easingSecondary,
  transPrimary,
  transPrimaryFast,
  transPrimaryFastest,
  transSecondary,
  transSecondaryFast,
  transSecondaryFastest,
  scrollToDuration,
  sitemap,
};
