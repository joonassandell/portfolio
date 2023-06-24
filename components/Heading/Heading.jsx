import c from 'classnames';

export const Heading = ({
  className,
  children,
  tag = 'h2',
  size = 'h3',
  ...props
}) => {
  const display = size === 'display';
  const classes = c(
    'Heading',
    {
      [`${size}`]: size && !display, // Uses helpers
      'Heading--display': display,
    },
    className,
  );
  const Tag = tag;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};
