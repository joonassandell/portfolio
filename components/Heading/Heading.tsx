import { forwardRef, type RefObject, useRef } from 'react';
import { type HeadingProps } from './';
import { m } from 'motion/react';
import { MOVE_IN_VARIANTS } from '@/lib/config';
import { useInView } from '@/lib/useInView';
import c from 'clsx';

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      animate,
      center,
      children,
      className,
      maxWidth,
      size = 'h2',
      tag,
      ...props
    },
    forwardedRef,
  ) => {
    const xl = size === 'xl';
    const l = size === 'l';
    const createdRef = useRef(null);
    const ref = (forwardedRef as RefObject<HTMLHeadingElement>) ?? createdRef;
    const inView = useInView(ref);
    const Tag = tag ? m[tag] : xl || l ? m.h2 : m[size];

    return (
      <Tag
        className={c(
          'Heading',
          {
            [`${size}`]: size && tag && size != tag && !xl && !l,
            '-maxWidth': maxWidth ?? center,
            'Heading--l': l,
            'Heading--xl': xl,
            'text:center ml:auto mr:auto': center,
          },
          className,
        )}
        ref={ref}
        {...(animate && {
          animate: inView ? 'animate' : '',
          initial: 'initial',
          variants: MOVE_IN_VARIANTS,
        })}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

Heading.displayName = 'Heading';
