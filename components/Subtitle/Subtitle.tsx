import { type ElementType, useRef } from 'react';
import { type HTMLMotionProps, m } from 'framer-motion';
import { type SubtitleProps } from './';
import { TEXT_VARIANTS } from '@/lib/config';
import { useInView } from '@/lib/useInView';
import c from 'clsx';

export const Subtitle = ({
  animate,
  center,
  children,
  className,
  maxWidth = true,
  tag,
  ...props
}: SubtitleProps) => {
  const classes = c(
    'Subtitle',
    {
      'max-w-unset': !maxWidth,
      'text:center ml:auto mr:auto': center,
    },
    className,
  );
  const ref = useRef(null);
  const inView = useInView(ref);
  const Tag = tag
    ? (m[tag] as ElementType<HTMLMotionProps<typeof tag>>)
    : m.div;

  return (
    <Tag
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
    </Tag>
  );
};
