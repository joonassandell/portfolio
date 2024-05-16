import { type TableCaptionProps } from '.';
import c from 'clsx';

export const TableCaption = ({
  children,
  className,
  hideVisually,
  ...props
}: TableCaptionProps) => {
  const classes = c(
    'Table-caption',
    {
      hideVisually,
    },
    className,
  );

  return (
    <caption className={classes} {...props}>
      {children}
    </caption>
  );
};
