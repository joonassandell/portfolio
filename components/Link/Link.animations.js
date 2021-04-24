import { transPrimaryFast, transSecondaryFast } from '../../lib/config';

const outVariant = {
  in: {
    transition: transSecondaryFast,
    y: '-2rem',
  },
  out: {
    transition: transPrimaryFast,
    y: 0,
  },
};

const inVariant = {
  in: {
    transition: transPrimaryFast,
    y: 0,
  },
  initial: {
    y: '2rem',
  },
  out: {
    transition: transSecondaryFast,
    y: '2rem',
  },
};

const outVariantX = {
  in: {
    transition: transSecondaryFast,
    x: '2rem',
  },
  out: {
    transition: transPrimaryFast,
    x: 0,
  },
};

const inVariantX = {
  in: {
    transition: transPrimaryFast,
    x: 0,
  },
  initial: {
    x: '-2rem',
  },
  out: {
    transition: transSecondaryFast,
    x: '-2rem',
  },
};

export { inVariant, inVariantX, outVariant, outVariantX };
