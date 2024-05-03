import { m } from 'framer-motion';
import { parentVariant, type TextRevealProps, textVariant } from './';
import { useInView } from '@/lib/useInView';
import { useRef } from 'react';
import c from 'clsx';

export const TextReveal = ({
  className,
  custom,
  text,
  ...props
}: TextRevealProps) => {
  const classes = c('TextReveal', className);
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <m.div
      animate={inView && 'animate'}
      className={classes}
      custom={custom}
      initial="initial"
      ref={ref}
      variants={parentVariant}
      {...props}
    >
      {text.map((text, index) => {
        return (
          <span key={index} className="TextReveal-text">
            <m.span
              className="TextReveal-text-inner"
              custom={custom}
              variants={textVariant}
            >
              {text}
            </m.span>
          </span>
        );
      })}
    </m.div>
  );
};
