import { type TableFooterProps } from '.';
import c from 'clsx';

export const TableFooter = ({
  children,
  className,
  ...props
}: TableFooterProps) => {
  const classes = c('Table-footer', className);

  return (
    <tfoot className={classes} {...props}>
      {children}
    </tfoot>
  );
};
