import { type ElementType, useRef } from 'react';
import { type HTMLMotionProps, m } from 'framer-motion';
import { TEXT_VARIANTS } from '@/lib/config';
import { type TextProps } from './';
import { useInView } from '@/lib/useInView';
import c from 'clsx';

export const Text = ({
  animate,
  balance,
  center,
  children,
  className,
  color,
  maxWidth = true,
  size,
  tag,
  truncate,
  ...props
}: TextProps) => {
  const classes = c(
    'Text',
    {
      '-size:l': size === 'l',
      '-size:m': size === 'm',
      '-size:s': size === 's',
      '-size:xs': size === 'xs',
      'color:mute': color === 'mute',
      'color:mute:blend': color === 'mute:blend',
      'max-w-unset': !maxWidth,
      'text-wrap:balance': balance,
      'text:center ml:auto mr:auto': center,
      'text:truncate': truncate,
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
