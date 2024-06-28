import { type QuoteFooterProps } from './';
import c from 'clsx';

export const QuoteFooter = ({
  children,
  className,
  ...props
}: QuoteFooterProps) => {
  const classes = c('Quote-footer', className);

  return (
    <footer className={classes} {...props}>
      {children}
    </footer>
  );
};
