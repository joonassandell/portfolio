import { m } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from '@/lib/useInView';
import { parentVariant, textVariant } from './TextReveal.animations';
import c from 'classnames';

export const TextReveal = ({
  animate = true,
  className,
  custom,
  text,
  ...props
}) => {
  const classes = c('TextReveal', className);
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <m.span
      className={classes}
      {...(animate && {
        animate: inView && 'animate',
        custom,
        initial: 'initial',
        ref,
        variants: parentVariant,
      })}
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
    </m.span>
  );
};
