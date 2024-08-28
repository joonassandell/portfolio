import { m } from 'framer-motion';
import { ROW_VARIANT } from './';
import { type TableCaptionProps } from './';
import { useInView } from '@/lib/useInView';
import { useRef } from 'react';
import c from 'clsx';

export const TableCaption = ({
  animate = true,
  children,
  className,
  hideVisually,
  ...props
}: TableCaptionProps) => {
  const classes = c(
    'Table-caption',
    {
      hideVisually,
    },
    className,
  );
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <m.caption
      {...(animate && {
        animate: inView && 'animate',
        initial: 'initial',
        ref,
        variants: ROW_VARIANT,
      })}
      className={classes}
      {...props}
    >
      {children}
    </m.caption>
  );
};
