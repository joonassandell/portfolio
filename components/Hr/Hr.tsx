import { type HrProps, hrVariants } from './';
import { m } from 'framer-motion';
import { useInView } from '@/lib/useInView';
import { useRef } from 'react';
import c from 'clsx';

export const Hr = ({ animate, className, ...props }: HrProps) => {
  const classes = c('Hr', className);
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <m.hr
      className={classes}
      variants={hrVariants}
      {...(animate && {
        animate: inView ? 'animate' : '',
        initial: 'initial',
        ref,
        variants: hrVariants,
      })}
      {...props}
    />
  );
};
