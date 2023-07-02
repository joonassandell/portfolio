import { m } from 'framer-motion';
import c from 'classnames';
import { useRef } from 'react';
import { RULER_VARIANTS } from '@/lib/config';
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
      variants={RULER_VARIANTS}
    />
  );
};
