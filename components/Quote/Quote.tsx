import { type QuoteProps } from './';
import c from 'clsx';

export const Quote = ({ children, className, size, ...props }: QuoteProps) => {
  return (
    <blockquote
      className={c(
        'Quote',
        {
          '-size:l': size === 'l',
        },
        className,
      )}
      {...props}
    >
      <div className="Quote-inner">
        <div className="Quote-mark">”</div>
        <div className="Quote-content">{children}</div>
      </div>
    </blockquote>
  );
};
