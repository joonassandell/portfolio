import c from 'classnames';

export const Text = ({
  className,
  children,
  color,
  marginBottom,
  size,
  tag,
}) => {
  const classes = c(className, 'Text', {
    '-size:xl': size === 'xLarge',
    '-size:l': size === 'large',
    '-size:s': size === 'small',
    '-size:xs': size === 'xSmall',
    '-color:light': color === 'light',
    'mb:xxs': marginBottom === 'xxSmall',
  });

  const Tag = tag ?? 'div';

  return <Tag className={classes}>{children}</Tag>;
};
