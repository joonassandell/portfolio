import { type TableCellProps } from './';
import c from 'clsx';

export const TableCell = ({
  children,
  className,
  ...props
}: TableCellProps) => (
  <td className={c('Table-cell', className)} {...props}>
    {children}
  </td>
);
