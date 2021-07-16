import { transTemplate } from '@/lib/config';

export const variantsWithTransition = {
  animate: {
    y: 0,
  },
  exit: {
    y: '-50vh',
  },
  initial: {
    y: '100vh',
  },
  transition: transTemplate,
};

export const variantsWithoutTransition = {
  animate: {
    y: 0,
  },
  exit: {
    y: 0,
  },
  initial: {
    y: 0,
  },
  transition: {
    duration: 0,
    ease: 'linear',
  },
};
