import { type TableFooterProps } from './'
import c from 'clsx'

export const TableFooter = ({
  children,
  className,
  ...props
}: TableFooterProps) => (
  <tfoot className={c('Table-footer', className)} {...props}>
    {children}
  </tfoot>
)
