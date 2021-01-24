// 'linear'
// 'easeIn', 'easeOut', 'easeInOut'
// 'circIn', 'circOut', 'circInOut'
// 'backIn', 'backOut', 'backInOut'
// 'anticipate'
// easeInOutExpo [0.87, 0, 0.13, 1]
// easeInOutQuart [0.76, 0, 0.24, 1]

const easing = [0.76, 0, 0.18, 1];

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
  ease: [0.87, 0, 0.13, 1],
};

const transSecondaryFast = {
  duration: 0.6,
  ease: [0.87, 0, 0.13, 1],
};

const transSecondaryFastest = {
  duration: 0.3,
  ease: [0.87, 0, 0.13, 1],
};

const scrollToDuration = 200;

export {
  easing,
  transPrimary,
  transPrimaryFast,
  transPrimaryFastest,
  transSecondary,
  transSecondaryFast,
  transSecondaryFastest,
  scrollToDuration,
};
