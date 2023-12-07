import { TRANS_PRIMARY } from '@/lib/config';
import { headingVariants as headingVars } from '@/features/Project/Hero';

export const headingVariants = {
  animate: {
    ...headingVars.animate,
    color: 'var(--biocode-heading)',
    y: '-175%',
  },
};

export const maskVariants = {
  animate: {
    clipPath: `circle(150% at var(--Stamp-center-x) var(--Stamp-center-y))`,
    transition: TRANS_PRIMARY,
  },
  initial: ({ enableInitial = true } = {}) => {
    if (!enableInitial) return;
    return {
      clipPath: `circle(0% at var(--Stamp-center-x) var(--Stamp-center-y))`,
    };
  },
};
