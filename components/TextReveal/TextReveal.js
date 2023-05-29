import { motion } from 'framer-motion';
import { headingVariant, inVariant } from './TextReveal.animations';
import c from 'classnames';

const TextReveal = ({ animate, className, text, ...props }) => {
  const classes = c(className, 'TextReveal Heading');

  const animateOptions = animate
    ? { ...animate }
    : {
        animate: 'in',
        initial: 'initial',
      };

  return (
    <motion.h2
      className={classes}
      variants={headingVariant}
      {...animateOptions}
      {...props}
    >
      {text.map((text, index) => {
        return (
          <div key={index} className="TextReveal-text">
            <motion.span className="TextReveal-text-inner" variants={inVariant}>
              {text}
            </motion.span>
          </div>
        );
      })}
    </motion.h2>
  );
};

export default TextReveal;
