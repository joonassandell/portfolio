import { type TableHeadProps } from './';
import c from 'clsx';

export const TableHead = ({
  children,
  className,
  ...props
}: TableHeadProps) => {
  const classes = c('Table-head', className);

  return (
    <th className={classes} {...props}>
      {children}
    </th>
  );
};
