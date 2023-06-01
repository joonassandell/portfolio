import { transTertiary, transTertiaryFast } from '@/lib/config';

export const clipVariants = {
  inView: {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    scale: 1,
    transition: transTertiary,
  },
  hidden: {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    scale: 1.07,
  },
};

/**
 * Added if mask figure is visible after hero transition from homepage.
 * This may not be necessary.
 *
 * NOTE: Transitions and transforms are overridden and forced in styles based on
 * media query. Couldn't figure out how to set variants based on media query
 * without getting errors from react/nexjs.
 */
// export const maskVariants = {
//   inView: {
//     ...clipVariants.inView,
//     // opacity: 1,
//   },
//   hidden: {
//     ...clipVariants.hidden,
//     // opacity: 0,
//   },
// };
export const maskVariants = {};

export const moveVariants = {
  inView: {
    opacity: 1,
    scale: 1,
    transition: transTertiaryFast,
    y: 0,
  },
  hidden: {
    opacity: 0,
    scale: 1.07,
    y: '4rem',
  },
};
