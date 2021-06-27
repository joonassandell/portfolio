import { transPrimaryFast, transPrimaryFastest } from '../../lib/config';

export const outVariant = {
  in: {
    transition: transPrimaryFastest,
    y: '-2rem',
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
    y: '2rem',
  },
  out: {
    transition: transPrimaryFast,
    y: '2rem',
  },
};

export const outVariantX = {
  in: {
    transition: transPrimaryFastest,
    x: '2rem',
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
    x: '-2rem',
  },
  out: {
    transition: transPrimaryFast,
    x: '-2rem',
  },
};
