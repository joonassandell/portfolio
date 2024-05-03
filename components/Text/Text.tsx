import { type HTMLMotionProps, m } from 'framer-motion';
import { TEXT_VARIANTS } from '@/lib/config';
import { type TextProps } from './';
import { useInView } from '@/lib/useInView';
import { useRef } from 'react';
import c from 'clsx';

export const Text = ({
  animate,
  className,
  children,
  color,
  marginBottom,
  size = 'm',
  tag,
  ...props
}: TextProps) => {
  const classes = c(
    'Text',
    {
      '-size:xl': size === 'xl',
      '-size:l': size === 'l',
      '-size:s': size === 's',
      '-size:xs': size === 'xs',
      '-color:light': color === 'light',
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
