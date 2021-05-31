import {
  transPrimaryFast,
  transPrimaryFastest,
  transSecondaryFastest,
} from '../../lib/config';

const outVariant = {
  in: {
    transition: transSecondaryFastest,
    y: '-2rem',
  },
  out: {
    transition: transPrimaryFast,
    y: 0,
  },
};

const inVariant = {
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

const outVariantX = {
  in: {
    transition: transSecondaryFastest,
    x: '2rem',
  },
  out: {
    transition: transPrimaryFast,
    x: 0,
  },
};

const inVariantX = {
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

export { inVariant, inVariantX, outVariant, outVariantX };
