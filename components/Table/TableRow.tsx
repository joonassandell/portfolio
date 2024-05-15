import { type TableRowProps } from './';
import c from 'clsx';

export const TableRow = ({ children, className, ...props }: TableRowProps) => {
  const classes = c('Table-row', className);

  return (
    <tr className={classes} {...props}>
      {children}
    </tr>
  );
};
