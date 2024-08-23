import { m } from 'framer-motion';
import { type SubtitleProps } from './';
import { TEXT_VARIANTS } from '@/lib/config';
import { useInView } from '@/lib/useInView';
import { useRef } from 'react';
import c from 'clsx';

export const Subtitle = ({
  animate,
  children,
  className,
  ...props
}: SubtitleProps) => {
  const classes = c('Subtitle mb:m', className);
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <m.div
      className={classes}
      {...(animate && {
        animate: inView ? 'animate' : '',
        initial: 'initial',
        ref,
        variants: TEXT_VARIANTS,
      })}
      {...props}
    >
      {children}
    </m.div>
  );
};
