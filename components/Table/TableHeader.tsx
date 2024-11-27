import { type TableHeaderProps } from './'
import c from 'clsx'

export const TableHeader = ({
  children,
  className,
  ...props
}: TableHeaderProps) => (
  <thead className={c('Table-header', className)} {...props}>
    {children}
  </thead>
)
