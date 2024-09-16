import { type TableProps } from './';
import c from 'clsx';

export const Table = ({ children, className, ...props }: TableProps) => (
  <div className={c('Table', className)}>
    <table {...props}>{children}</table>
  </div>
);
