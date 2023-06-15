import {
  EASE_TERTIARY,
  TRANS_TERTIARY,
  TRANS_TERTIARY_FAST,
  TRANS_TERTIARY_FASTEST,
} from '@/lib/config';

export const clipVariants = {
  animate: {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    scale: 1,
    transition: TRANS_TERTIARY,
  },
  initial: {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    scale: 1.07,
  },
};

export const moveVariants = {
  animate: {
    opacity: 1,
    scale: 1,
    transition: TRANS_TERTIARY_FAST,
    y: 0,
  },
  initial: {
    opacity: 0,
    scale: 1.07,
    y: '4rem',
  },
};

export const placeholderVariants = {
  exit: { opacity: 0, transition: TRANS_TERTIARY_FASTEST },
};

export const placeholderGlareVariants = {
  animate: {
    backgroundPosition: ['200% 0%', '-10% 0%'],
    transition: {
      duration: TRANS_TERTIARY.duration + 0.1,
      ease: EASE_TERTIARY,
      repeat: Infinity,
      repeatDelay: 0.2,
    },
  },
};

export const glareVariants = {
  animate: {
    ...placeholderGlareVariants.animate,
    transition: TRANS_TERTIARY,
  },
};
