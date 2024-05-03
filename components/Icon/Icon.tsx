import { type IconProps } from './';
import ArrowDownIcon from './icons/arrow-down.svg';
import ArrowDownIconLong from './icons/arrow-down-long.svg';
import ArrowRightIcon from './icons/arrow-right.svg';
import ArrowRightIconLong from './icons/arrow-right-long.svg';
import ArrowUpIcon from './icons/arrow-up.svg';
import c from 'clsx';
import CrossIcon from './icons/cross.svg';

export const ArrowDown = ({ className }: IconProps) => (
  <ArrowDownIcon className={c('Icon Icon--arrowDown', className)} />
);

export const ArrowDownLong = ({ className }: IconProps) => (
  <div className={c('Icon Icon--arrowDownLong', className)}>
    <ArrowDownIconLong />
  </div>
);

export const ArrowRight = ({ className }: IconProps) => (
  <ArrowRightIcon className={c('Icon Icon--arrowRight', className)} />
);

export const ArrowRightLong = ({ className }: IconProps) => (
  <ArrowRightIconLong className={c('Icon Icon--arrowRightLong', className)} />
);

export const ArrowUp = ({ className }: IconProps) => (
  <ArrowUpIcon className={c('Icon Icon--arrowUp', className)} />
);

export const Cross = ({ className }: IconProps) => (
  <CrossIcon className={c('Icon Icon--cross', className)} />
);
