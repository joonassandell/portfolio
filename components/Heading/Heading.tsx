import c from 'clsx';
import { type HeadingProps } from './';

export const Heading = ({
  className,
  children,
  tag = 'h2',
  size = 'h3',
  ...props
}: HeadingProps) => {
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
