import { type TableBodyProps } from '.';
import c from 'clsx';

export const TableBody = ({
  children,
  className,
  ...props
}: TableBodyProps) => {
  const classes = c('Table-body', className);

  return (
    <tbody className={classes} {...props}>
      {children}
    </tbody>
  );
};
