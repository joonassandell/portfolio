import { m } from 'framer-motion';
import { PARENT_VARIANT, TEXT_VARIANT, type TextRevealProps } from './';
import { useInView } from '@/lib/useInView';
import { useRef } from 'react';
import c from 'clsx';

export const TextReveal = ({
  animate = true,
  className,
  custom,
  text,
  ...props
}: TextRevealProps) => {
  const classes = c('TextReveal', className);
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <m.span
      animate={inView && animate && 'animate'}
      className={classes}
      custom={custom}
      initial="initial"
      ref={ref}
      variants={PARENT_VARIANT}
      {...props}
    >
      {text.map((text, index) => {
        return (
          <span className="TextReveal-text" key={index}>
            <m.span
              className="TextReveal-text-inner"
              custom={custom}
              variants={TEXT_VARIANT}
            >
              {text}
            </m.span>
          </span>
        );
      })}
    </m.span>
  );
};
