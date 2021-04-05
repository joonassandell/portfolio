import { transPrimaryFast, transSecondaryFast } from '../../lib/config';

const outVariant = {
  in: {
    transition: transSecondaryFast,
    y: -36,
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
    y: 36,
  },
  out: {
    transition: transSecondaryFast,
    y: 36,
  },
};

const outVariantX = {
  in: {
    transition: transSecondaryFast,
    x: 36,
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
    x: -36,
  },
  out: {
    transition: transSecondaryFast,
    x: -36,
  },
};

export { inVariant, inVariantX, outVariant, outVariantX };
