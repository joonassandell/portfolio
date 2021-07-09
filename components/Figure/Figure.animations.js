import {
  transPrimary,
  transTertiary,
  transTertiaryFast,
  transPrimaryFast,
  transPrimaryFastest,
  transSecondary,
  transSecondaryFast,
  transSecondaryFastest,
} from '@/lib/config';

export const moveInVariants = {
  inView: {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    opacity: 1,
    transition: transPrimary,
  },
  hidden: {
    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    opacity: 1,
  },
};

export const fadeVariants = {
  inView: {
    opacity: 1,
    transition: transTertiary,
  },
  hidden: {
    opacity: 0,
  },
};
