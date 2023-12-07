import { m } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from '@/lib/useInView';
import { TEXT_VARIANTS } from '@/lib/config';
import c from 'classnames';

export const Text = ({
  animate,
  className,
  children,
  color,
  marginBottom,
  size,
  tag,
  ...props
}) => {
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
  const Tag = tag && animate ? m(tag) : tag ? tag : animate ? m.div : 'div';

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
