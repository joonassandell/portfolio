import { transPrimaryFast, transPrimaryFastest } from '@/lib/config';

export const outVariant = {
  in: {
    transition: transPrimaryFastest,
    y: '-105%',
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
    y: '100%',
  },
  out: {
    transition: transPrimaryFast,
    y: '100%',
  },
};

export const outVariantX = {
  in: {
    transition: transPrimaryFastest,
    x: '100%',
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
    x: '-100%',
  },
  out: {
    transition: transPrimaryFast,
    x: '-100%',
  },
};
