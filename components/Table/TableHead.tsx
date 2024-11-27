import { type TableHeadProps } from './'
import c from 'clsx'

export const TableHead = ({
  children,
  className,
  ...props
}: TableHeadProps) => (
  <th className={c('Table-head', className)} {...props}>
    {children}
  </th>
)
