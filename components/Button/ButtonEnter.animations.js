import { transPrimaryFast, transPrimaryFastest, transTap } from '@/lib/config';
import { getCSSVarValue } from '@/lib/utility';

export const buttonVariants = {
  tap: {
    top: 2,
    transition: transTap,
  },
};

export const bgVariants = {
  in: {
    backgroundColor: getCSSVarValue('--primary-negativeLight'),
    transition: { ...transPrimaryFast },
  },
  out: {
    backgroundColor: getCSSVarValue('--primary-negative'),
    transition: { ...transPrimaryFastest },
  },
};

export const bgHoverVariants = {
  in: {
    x: '0.5rem',
    y: '0.5rem',
    transition: { ...transPrimaryFast, delay: 0.02 },
  },
  out: { x: 0, y: 0, transition: transPrimaryFastest },
};

export const pathInVariants = {
  in: { pathLength: 1, transition: { ...transPrimaryFast } },
  initial: { pathLength: 0, transition: { duration: 0 } },
};

export const pointerInVariants = {
  in: {
    offsetDistance: '100%',
    transition: { ...transPrimaryFast },
  },
  initial: { offsetDistance: '0%', transition: { duration: 0 } },
};

export const pathOutVariants = {
  in: {
    pathOffset: 1,
    transition: transPrimaryFastest,
  },
  initial: {
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 0 },
  },
};

export const pointerOutVariants = {
  in: { x: '1rem', transition: transPrimaryFastest },
  initial: { offsetDistance: '100%', x: 0, transition: { duration: 0 } },
};
