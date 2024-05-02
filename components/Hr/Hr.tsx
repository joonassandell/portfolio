import { m } from 'framer-motion';
import c from 'clsx';
import { useRef } from 'react';
import { useInView } from '@/lib/useInView';
import { hrVariants, type HrProps } from './';

export const Hr = ({ className, ...props }: HrProps) => {
  const classes = c('Hr', className);
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <m.hr
      animate={inView && 'animate'}
      className={classes}
      initial="initial"
      ref={ref}
      variants={hrVariants}
      {...props}
    />
  );
};
