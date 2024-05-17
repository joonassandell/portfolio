import { type TableCellProps } from './';
import c from 'clsx';

export const TableCell = ({
  children,
  className,
  ...props
}: TableCellProps) => {
  const classes = c('Table-cell', className);

  return (
    <td className={classes} {...props}>
      {children}
    </td>
  );
};
