import { m } from 'motion/react';
import { MOVE_IN_VARIANTS } from '@/lib/config';
import { type QuoteProps } from './';
import { useInView } from '@/lib/useInView';
import { useRef } from 'react';
import c from 'clsx';

export const Quote = ({
  animate,
  children,
  className,
  size,
  ...props
}: QuoteProps) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <m.blockquote
      className={c(
        'Quote',
        {
          '-size:l': size === 'l',
        },
        className,
      )}
      {...(animate && {
        animate: inView ? 'animate' : '',
        initial: 'initial',
        ref,
        variants: MOVE_IN_VARIANTS,
      })}
      {...props}
    >
      <div className="Quote-inner">
        <div className="Quote-mark">”</div>
        <div className="Quote-content">{children}</div>
      </div>
    </m.blockquote>
  );
};
