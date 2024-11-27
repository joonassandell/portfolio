import { type QuoteFooterProps } from './'
import c from 'clsx'

export const QuoteFooter = ({
  children,
  className,
  ...props
}: QuoteFooterProps) => (
  <footer className={c('Quote-footer', className)} {...props}>
    {children}
  </footer>
)
