import { type HeadingProps } from './';
import c from 'clsx';

export const Heading = ({
  children,
  className,
  size = 'h3',
  tag: Tag = 'h2',
  ...props
}: HeadingProps) => {
  const display = size === 'display';
  const classes = c(
    'Heading',
    {
      [`${size}`]: size && !display,
      'Heading--display': display,
    },
    className,
  );

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};
