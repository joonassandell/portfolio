import { type HTMLMotionProps, m } from 'framer-motion';
import { TEXT_VARIANTS } from '@/lib/config';
import { type TextProps } from './';
import { useInView } from '@/lib/useInView';
import { useRef } from 'react';
import c from 'clsx';

export const Text = ({
  animate,
  children,
  className,
  color,
  marginBottom,
  size,
  tag,
  ...props
}: TextProps) => {
  const classes = c(
    'Text',
    {
      '-size:l': size === 'l',
      '-size:m': size === 'm',
      '-size:s': size === 's',
      '-size:xl': size === 'xl',
      '-size:xs': size === 'xs',
      'color:mute': color === 'mute',
      'color:mute:blend': color === 'mute:blend',
      'mb:2xs': marginBottom === '2xs',
    },
    className,
  );
  const ref = useRef(null);
  const inView = useInView(ref);
  const Tag = tag ? m<HTMLMotionProps<typeof tag>>(tag) : m.div;

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
