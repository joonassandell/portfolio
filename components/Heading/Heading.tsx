import { forwardRef, type RefObject, useRef } from 'react';
import { type HeadingProps } from './';
import { m } from 'framer-motion';
import { TEXT_VARIANTS } from '@/lib/config';
import { useInView } from '@/lib/useInView';
import c from 'clsx';

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { animate, children, className, maxWidth, size = 'h2', tag, ...props },
    forwardedRef,
  ) => {
    const display = size === 'display';
    const classes = c(
      'Heading',
      {
        [`${size}`]: size && tag && size != tag && !display,
        '-maxWidth': maxWidth,
        'Heading--display': display,
      },
      className,
    );
    const createdRef = useRef(null);
    const ref = (forwardedRef as RefObject<HTMLHeadingElement>) ?? createdRef;
    const inView = useInView(ref);
    const Tag = tag ? m[tag] : display ? m.h2 : m[size];

    return (
      <Tag
        className={classes}
        ref={ref}
        {...(animate && {
          animate: inView ? 'animate' : '',
          initial: 'initial',
          variants: TEXT_VARIANTS,
        })}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

Heading.displayName = 'Heading';
