import c from 'classnames';

export const Text = ({
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

  const Tag = tag ?? 'div';

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};
