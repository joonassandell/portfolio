import { type HeadingProps } from './';
import c from 'clsx';

export const Heading = ({
  children,
  className,
  size = 'h2',
  tag,
  ...props
}: HeadingProps) => {
  const display = size === 'display';
  const Tag = tag ? tag : display ? 'h2' : size;
  const classes = c(
    'Heading',
    {
      [`${size}`]: size && size != Tag && !display,
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
