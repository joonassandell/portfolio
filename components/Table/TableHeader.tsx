import { type TableHeaderProps } from './';
import c from 'clsx';

export const TableHeader = ({
  children,
  className,
  ...props
}: TableHeaderProps) => {
  const classes = c('Table-header', className);

  return (
    <thead className={classes} {...props}>
      {children}
    </thead>
  );
};
