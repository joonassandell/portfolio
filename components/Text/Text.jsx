import { m } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from '@/lib/useInView';
import { textVariants } from './Text.animations';
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
      '-size:xl': size === 'xLarge',
      '-size:l': size === 'large',
      '-size:s': size === 'small',
      '-size:xs': size === 'xSmall',
      '-color:light': color === 'light',
      'mb:xxs': marginBottom === 'xxSmall',
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
        variants: textVariants,
      })}
      {...props}
    >
      {children}
    </Tag>
  );
};
