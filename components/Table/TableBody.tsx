import { type TableBodyProps } from './';
import c from 'clsx';

export const TableBody = ({
  children,
  className,
  ...props
}: TableBodyProps) => (
  <tbody className={c('Table-body', className)} {...props}>
    {children}
  </tbody>
);
