import { type QuoteProps } from './';
import c from 'clsx';

export const Quote = ({ children, className, ...props }: QuoteProps) => {
  const classes = c('Quote', className);

  return (
    <blockquote className={classes} {...props}>
      {children}
    </blockquote>
  );
};
