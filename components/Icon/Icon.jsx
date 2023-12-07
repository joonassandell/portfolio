import ArrowDownIcon from './icons/arrow-down.svg';
import ArrowDownIconLong from './icons/arrow-down-long.svg';
import ArrowUpIcon from './icons/arrow-up.svg';
import ArrowRightIcon from './icons/arrow-right.svg';
import ArrowRightIconLong from './icons/arrow-right-long.svg';
import CrossIcon from './icons/cross.svg';
import React from 'react';
import c from 'clsx';

export const ArrowDown = props => (
  <ArrowDownIcon className={c('Icon Icon--arrowDown', props.className)} />
);

export const ArrowDownLong = props => (
  <div className={c('Icon Icon--arrowDownLong', props.className)}>
    <ArrowDownIconLong />
  </div>
);

export const ArrowRight = props => (
  <ArrowRightIcon className={c('Icon Icon--arrowRight', props.className)} />
);

export const ArrowRightLong = props => (
  <ArrowRightIconLong
    className={c('Icon Icon--arrowRightLong', props.className)}
  />
);

export const ArrowUp = props => (
  <ArrowUpIcon className={c('Icon Icon--arrowUp', props.className)} />
);

export const Cross = props => (
  <CrossIcon className={c('Icon Icon--cross', props.className)} />
);
