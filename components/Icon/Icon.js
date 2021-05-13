import ArrowDownIcon from './icons/arrow-down.svg';
import ArrowDownIconLong from './icons/arrow-down-long.svg';
import ArrowUpIcon from './icons/arrow-up.svg';
import CrossIcon from './icons/cross.svg';
import React from 'react';
import c from 'classnames';

const ArrowDown = props => (
  <ArrowDownIcon className={c('Icon Icon--arrowDown', props.className)} />
);

const ArrowDownLong = props => (
  <div className={c('Icon Icon--arrowDownLong', props.className)}>
    <div className="Icon-inner">
      <div className="Icon-icon">
        <ArrowDownIconLong />
      </div>
    </div>
  </div>
);

const ArrowUp = props => (
  <ArrowUpIcon className={c('Icon Icon--arrowUp', props.className)} />
);

const Cross = props => (
  <CrossIcon className={c('Icon Icon--cross', props.className)} />
);

export { ArrowDown, ArrowDownLong, ArrowUp, Cross };
