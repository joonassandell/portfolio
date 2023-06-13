import { m } from 'framer-motion';
import { headingVariant, inVariant } from './TextReveal.animations';
import c from 'classnames';

export const TextReveal = ({ className, custom, text, ...props }) => {
  const classes = c(className, 'TextReveal Heading');

  return (
    <m.h2
      className={classes}
      custom={custom}
      variants={headingVariant}
      {...props}
    >
      {text.map((text, index) => {
        return (
          <div key={index} className="TextReveal-text">
            <m.span
              className="TextReveal-text-inner"
              custom={custom}
              variants={inVariant}
            >
              {text}
            </m.span>
          </div>
        );
      })}
    </m.h2>
  );
};
