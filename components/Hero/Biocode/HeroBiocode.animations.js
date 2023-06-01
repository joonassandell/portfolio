import { transPrimary } from '@/lib/config';
import { headingVariants as headingVars } from '../Hero.animations';

export const headingVariants = {
  animate: {
    ...headingVars.animate,
    color: 'var(--biocode-heading)',
  },
};

export const maskVariants = {
  animate: {
    clipPath: `circle(150% at var(--Stamp-center-x) var(--Stamp-center-y))`,
    transition: transPrimary,
  },
  initial: ({ enableInitial } = { enableInitial: true }) => {
    if (!enableInitial) return;
    return {
      clipPath: `circle(0% at var(--Stamp-center-x) var(--Stamp-center-y))`,
    };
  },
};
