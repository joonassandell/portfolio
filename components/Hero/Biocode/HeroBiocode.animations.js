import { transPrimary } from '@/lib/config';
import { headingVariants as headingVars } from '../Hero.animations';

export const headingVariants = {
  animate: {
    color: 'var(--biocode-heading)',
    ...headingVars.animate,
  },
};

export const maskVariants = {
  animate: {
    clipPath: `circle(150% at var(--Stamp-center-x) var(--Stamp-center-y))`,
    transition: transPrimary,
  },
  initial: {
    clipPath: `circle(0% at var(--Stamp-center-x) var(--Stamp-center-y))`,
  },
};
