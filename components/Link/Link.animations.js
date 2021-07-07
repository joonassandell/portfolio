import { transPrimaryFast, transPrimaryFastest } from '../../lib/config';

export const outVariant = {
  in: {
    transition: transPrimaryFastest,
    y: '-2.5rem',
  },
  out: {
    transition: transPrimaryFast,
    y: 0,
  },
};

export const inVariant = {
  in: {
    transition: transPrimaryFastest,
    y: 0,
  },
  initial: {
    y: '2.5rem',
  },
  out: {
    transition: transPrimaryFast,
    y: '2.5rem',
  },
};

export const outVariantX = {
  in: {
    transition: transPrimaryFastest,
    x: '2.5rem',
  },
  out: {
    transition: transPrimaryFast,
    x: 0,
  },
};

export const inVariantX = {
  in: {
    transition: transPrimaryFastest,
    x: 0,
  },
  initial: {
    x: '-2.5rem',
  },
  out: {
    transition: transPrimaryFast,
    x: '-2.5rem',
  },
};
