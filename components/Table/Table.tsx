import { type TableProps } from './';
import c from 'clsx';

export const Table = ({ children, className, ...props }: TableProps) => {
  const classes = c('Table scrollbar', className);

  return (
    <div className={classes}>
      <table {...props}>{children}</table>
    </div>
  );
};
