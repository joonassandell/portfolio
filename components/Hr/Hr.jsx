import { m } from 'framer-motion';
import c from 'clsx';
import { useRef } from 'react';
import { hrVariants } from './Hr.animations';
import { useInView } from '@/lib/useInView';

export const Hr = ({ className }) => {
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
    />
  );
};
