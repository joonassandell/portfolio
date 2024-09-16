import { HR_VARIANTS, type HrProps } from './';
import { m } from 'framer-motion';
import { useInView } from '@/lib/useInView';
import { useRef } from 'react';
import c from 'clsx';

export const Hr = ({ animate = true, className, ...props }: HrProps) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <m.hr
      className={c('Hr', className)}
      {...(animate && {
        animate: inView ? 'animate' : '',
        initial: 'initial',
        ref,
        variants: HR_VARIANTS,
      })}
      {...props}
    />
  );
};
