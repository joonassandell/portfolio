import { type TableRowProps } from './';
import c from 'clsx';

export const TableRow = ({
  background,
  children,
  className,
  ...props
}: TableRowProps) => {
  const classes = c('Table-row', className);

  return (
    <tr
      className={classes}
      style={{
        ['--Table-row-bg' as string]: background,
      }}
      {...props}
    >
      {children}
    </tr>
  );
};
