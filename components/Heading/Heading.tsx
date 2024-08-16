import { forwardRef } from 'react';
import { type HeadingProps } from './';
import { m } from 'framer-motion';
import c from 'clsx';

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, size = 'h2', tag, ...props }, forwardedRef) => {
    const display = size === 'display';
    const Tag = tag ? m[tag] : display ? m.h2 : m[size];
    const classes = c(
      'Heading',
      {
        [`${size}`]: size && size != tag && !display,
        'Heading--display': display,
      },
      className,
    );

    return (
      <Tag className={classes} ref={forwardedRef} {...props}>
        {children}
      </Tag>
    );
  },
);

Heading.displayName = 'Heading';
