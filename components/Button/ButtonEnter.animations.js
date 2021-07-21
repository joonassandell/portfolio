import {
  transPrimaryFast,
  transSecondaryFast,
  transPrimaryFastest,
} from '@/lib/config';
import { getCSSVarValue } from '@/lib/utility';

export const pathInVariants = {
  in: { pathLength: 1, transition: { ...transPrimaryFast, delay: 0.1 } },
  initial: { pathLength: 0, transition: { duration: 0 } },
};

export const pointerInVariants = {
  in: {
    offsetDistance: '100%',
    transition: { ...transPrimaryFast, delay: 0.1 },
  },
  initial: { offsetDistance: '0%', transition: { duration: 0 } },
};

export const pathOutVariants = {
  in: {
    pathOffset: 1,
    transition: transSecondaryFast,
  },
  initial: {
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 0 },
  },
};

export const pointerOutVariants = {
  in: { x: '1rem', transition: transSecondaryFast },
  initial: { offsetDistance: '100%', x: 0, transition: { duration: 0 } },
};

export const bgVariant = {
  in: {
    backgroundColor: getCSSVarValue('--primary-negativeLight'),
    transition: { ...transPrimaryFast, delay: 0.05 },
  },
  out: {
    backgroundColor: getCSSVarValue('--primary-negative'),
    transition: { ...transPrimaryFastest },
  },
};

export const bgHoverVariant = {
  in: {
    x: '0.5rem',
    y: '0.5rem',
    transition: { ...transPrimaryFast, delay: 0.05 },
  },
  out: { x: 0, y: 0, transition: transPrimaryFastest },
};
